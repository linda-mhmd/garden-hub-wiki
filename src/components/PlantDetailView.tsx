import { useState } from 'react';
import { getStageForWeek, getPlantRecord, savePlantRecord, weeksPlanted } from '../data/growth';
import type { PlantRecord, PlantGrowthData, GrowthStage } from '../data/growth';
import { DropIcon, HarvestIcon } from './icons/GardenIcons';
import PlantLink from './PlantLink';
import { useT } from '../i18n';
import { useWikiData, useGrowthData } from '../data/localized';

const LABELS: Record<string, string> = {
  tomate: 'Tomate', gurke: 'Gurke', melanzani: 'Melanzani', kuerbis: 'Kürbis',
  karotte: 'Karotte', salat: 'Salat', zucchini: 'Zucchini', paprika: 'Paprika',
};

const COMPANIONS: Record<string, { good: string[]; bad: string[]; note: string }> = {
  tomate:   { good: ['Basilikum', 'Petersilie', 'Tagetes', 'Knoblauch'], bad: ['Fenchel', 'Kohlarten', 'Paprika'], note: 'Basilikum direkt daneben pflanzen: verbessert Geschmack und hält Schädlinge fern.' },
  gurke:    { good: ['Dill', 'Buschbohnen', 'Salat', 'Zwiebeln'], bad: ['Tomate', 'Paprika', 'Kartoffel'], note: 'Dill nur jung neben Gurken - ausgewachsener Dill hemmt das Wachstum.' },
  melanzani:{ good: ['Basilikum', 'Thymian', 'Tagetes', 'Bohnen'], bad: ['Fenchel', 'Kartoffel'], note: 'Tagetes hält Nematoden fern - unbedingt als Nachbarpflanze wählen.' },
  kuerbis:  { good: ['Mais', 'Buschbohnen', 'Kapuzinerkresse', 'Dill'], bad: ['Kartoffel', 'Gurke'], note: '"Drei Schwestern": Mais + Bohnen + Kürbis - traditionelle Kombination aus Nordamerika.' },
  karotte:  { good: ['Zwiebeln', 'Porree', 'Salat', 'Tomaten'], bad: ['Dill', 'Fenchel'], note: 'Zwiebeln und Möhren vertreiben gegenseitig Möhren- und Zwiebelfliege.' },
  salat:    { good: ['Erdbeeren', 'Radieschen', 'Karotten', 'Schnittlauch'], bad: ['Fenchel', 'Sellerie'], note: 'Salat als Unterpflanzung unter Tomaten oder Bohnen - nutzt den Halbschatten ideal.' },
  zucchini: { good: ['Buschbohnen', 'Kapuzinerkresse', 'Dill'], bad: ['Gurke', 'Kürbis'], note: 'Kapuzinerkresse lockt Blattläuse an und schützt so die Zucchini (Ablenkpflanze).' },
  paprika:  { good: ['Basilikum', 'Karotten', 'Tagetes', 'Spinat'], bad: ['Fenchel', 'Gurke', 'Kohlarten'], note: 'Paprika und Tomate konkurrieren um Nährstoffe - nicht direkt nebeneinander.' },
};

const PLANT_BASICS: Record<string, { standort: string; boden: string; abstand: string; pflanzzeit: string; ernte: string; anfaenger: string; tipp: string }> = {
  tomate:   { standort: 'Vollsonne, mind. 6h täglich', boden: 'Humusreich, pH 6.0–6.8', abstand: '60–80 cm', pflanzzeit: 'Nach Eisheiligen (15. Mai)', ernte: 'Juli–Oktober', anfaenger: 'Mittel - Ausgeizen nötig', tipp: 'Nie auf Blätter gießen! Braunfäule-Risiko. Immer am Boden gießen und mulchen.' },
  gurke:    { standort: 'Vollsonne, windgeschützt', boden: 'Warm, humusreich', abstand: '40–50 cm', pflanzzeit: 'Nach Eisheiligen (15. Mai)', ernte: 'Juli–September', anfaenger: 'Einfach', tipp: 'Immer mit handwarmem Wasser gießen! Kaltes Wasser macht Gurken dauerhaft bitter.' },
  melanzani:{ standort: 'Vollsonne, sehr warm', boden: 'Nährstoffreich, warm', abstand: '60 cm', pflanzzeit: 'Nach Eisheiligen (15. Mai)', ernte: 'August–Oktober', anfaenger: 'Schwierig - sehr wärmeliebend', tipp: 'Unter 15°C stoppt die Melanzani komplett. Mulchen für warmen Boden ist Pflicht!' },
  kuerbis:  { standort: 'Sonne, viel Platz', boden: 'Kompostreich, tiefgründig', abstand: 'Mind. 1–2 m', pflanzzeit: 'Nach Eisheiligen (15. Mai)', ernte: 'September–Oktober', anfaenger: 'Einfach - braucht viel Platz!', tipp: 'Brett unter den Kürbis legen damit er nicht auf feuchtem Boden fault.' },
  karotte:  { standort: 'Sonne bis Halbschatten', boden: 'Tiefgründig, locker, kein frischer Mist', abstand: '3–5 cm nach Vereinzeln', pflanzzeit: 'April–Juni, Direktsaat', ernte: 'Juli–Oktober', anfaenger: 'Einfach, aber Geduld beim Keimen', tipp: '2–3 Wochen Keimzeit ist vollkommen normal! Keimbeet niemals austrocknen lassen.' },
  salat:    { standort: 'Sonne bis Halbschatten', boden: 'Gleichmäßig feucht', abstand: '20–25 cm', pflanzzeit: 'Ab April, gestaffelt alle 2–3 Wochen', ernte: 'Mai–Oktober (Staffel)', anfaenger: 'Sehr einfach', tipp: 'Bei Hitze über 25°C schosst Salat und wird bitter. Früh morgens ernten.' },
  zucchini: { standort: 'Vollsonne', boden: 'Nährstoffreich, auf Komposthügel', abstand: 'Mind. 1 m²', pflanzzeit: 'Nach Eisheiligen (15. Mai)', ernte: 'Juli–September täglich', anfaenger: 'Sehr einfach', tipp: 'TÄGLICH ernten bei 15–20 cm! Sonst werden sie zu Riesenkürbissen.' },
  paprika:  { standort: 'Vollsonne, sehr warm', boden: 'Nährstoffreich, warm', abstand: '40–50 cm', pflanzzeit: 'Nach Eisheiligen (15. Mai)', ernte: 'August–Oktober', anfaenger: 'Schwierig - sehr lange Anzucht', tipp: 'Erste Blüte ausbrechen ("Königsblüte") → mehr Früchte durch kräftigere Pflanze.' },
};

// ─── SVG Constants ────────────────────────────────────────────────────────────
const CX = 160;
const GY = 148;
const MAX_H:  Record<string, number> = { tomate: 122, gurke: 108, melanzani: 78, kuerbis: 50, karotte: 46, salat: 38, zucchini: 60, paprika: 86 };
const MAX_S:  Record<string, number> = { tomate: 38, gurke: 44, melanzani: 50, kuerbis: 100, karotte: 22, salat: 60, zucchini: 75, paprika: 50 };
const MAX_RD: Record<string, number> = { tomate: 88, gurke: 80, melanzani: 86, kuerbis: 94, karotte: 102, salat: 56, zucchini: 80, paprika: 86 };
const MAX_RS: Record<string, number> = { tomate: 68, gurke: 86, melanzani: 70, kuerbis: 106, karotte: 28, salat: 58, zucchini: 92, paprika: 66 };

function sp(val: number, max: number, target: number) {
  return max > 0 ? Math.min((val / max) * target, target) : 0;
}

// ─── Root Components ──────────────────────────────────────────────────────────
function FibrousRoots({ dpx, spx, color }: { dpx: number; spx: number; color: string }) {
  const angles = [-62, -44, -26, -10, 10, 26, 44, 62];
  return (
    <g>
      {angles.map((a, i) => {
        const r = (a * Math.PI) / 180;
        const ex = CX + Math.sin(r) * spx;
        const ey = GY + Math.cos(r) * dpx;
        return (
          <path key={i}
            d={`M ${CX} ${GY} C ${CX + Math.sin(r) * spx * 0.2} ${GY + dpx * 0.38} ${CX + Math.sin(r) * spx * 0.65} ${GY + dpx * 0.72} ${ex} ${ey}`}
            stroke={color} strokeWidth={i === 3 || i === 4 ? 1.8 : 1.1} fill="none" opacity={0.52} />
        );
      })}
    </g>
  );
}

function TaprootRoots({ dpx, spx, tapColor, color }: { dpx: number; spx: number; tapColor: string; color: string }) {
  return (
    <g>
      <path d={`M ${CX} ${GY} Q ${CX + 3} ${GY + dpx * 0.5} ${CX + 1} ${GY + dpx}`}
        stroke={tapColor} strokeWidth={Math.max(3.5, dpx * 0.07)} strokeLinecap="round" fill="none" />
      {[0.25, 0.45, 0.65, 0.82].map((d, i) => {
        const y = GY + d * dpx;
        const len = spx * (0.8 - i * 0.15);
        return (
          <g key={i}>
            <line x1={CX + 1} y1={y} x2={CX + 1 - len} y2={y + 5} stroke={color} strokeWidth={0.9} opacity={0.4} />
            <line x1={CX + 1} y1={y} x2={CX + 1 + len} y2={y + 5} stroke={color} strokeWidth={0.9} opacity={0.4} />
          </g>
        );
      })}
      <circle cx={CX + 1} cy={GY + dpx} r={2} fill={tapColor} opacity={0.6} />
    </g>
  );
}

function SpreadingRoots({ dpx, spx, color }: { dpx: number; spx: number; color: string }) {
  return (
    <g>
      <line x1={CX} y1={GY} x2={CX} y2={GY + dpx * 0.65} stroke={color} strokeWidth={1.5} opacity={0.45} />
      {[0.12, 0.32, 0.56, 0.76].map((d, i) => {
        const y = GY + d * dpx;
        const w = spx * (1 - i * 0.18);
        return (
          <g key={i}>
            <path d={`M ${CX - w} ${y} Q ${CX} ${y - 6} ${CX + w} ${y}`}
              stroke={color} strokeWidth={1.4 - i * 0.2} fill="none" opacity={0.42} />
            {i < 3 && (
              <>
                <line x1={CX - w} y1={y} x2={CX - w - 5} y2={y + 14} stroke={color} strokeWidth={0.7} opacity={0.28} />
                <line x1={CX + w} y1={y} x2={CX + w + 5} y2={y + 14} stroke={color} strokeWidth={0.7} opacity={0.28} />
              </>
            )}
          </g>
        );
      })}
    </g>
  );
}

// ─── Above-Ground Plant ───────────────────────────────────────────────────────
function PlantShapeAbove({ data, hpx, spx, prog }: {
  data: PlantGrowthData; hpx: number; spx: number; prog: number;
}) {
  const { stemColor, leafColor, plantId } = data;
  const fruitColor = data.fruitColor ?? data.plantColor;
  const topY = GY - hpx;
  const showFruit = prog >= 0.62;

  if (plantId === 'karotte') {
    return (
      <g>
        {[...Array(6)].map((_, i) => {
          const a = ((i - 2.5) * 20) * Math.PI / 180;
          const ex = CX + Math.sin(a) * hpx * 0.32;
          const ey = GY - hpx;
          return (
            <path key={i}
              d={`M ${CX} ${GY} C ${CX + Math.sin(a) * hpx * 0.15} ${GY - hpx * 0.45} ${CX + Math.sin(a) * hpx * 0.28} ${GY - hpx * 0.72} ${ex} ${ey}`}
              stroke={leafColor} strokeWidth={1.3} fill="none" opacity={0.72} />
          );
        })}
      </g>
    );
  }

  if (plantId === 'salat') {
    return (
      <g>
        <ellipse cx={CX} cy={GY - hpx * 0.35} rx={spx * 0.65} ry={hpx * 0.55} fill={leafColor} opacity={0.2} />
        {[...Array(10)].map((_, i) => {
          const a = (i / 10) * Math.PI * 2;
          const ex = CX + Math.sin(a) * spx;
          const ey = GY - hpx * 0.18 - Math.abs(Math.sin(a)) * hpx * 0.55;
          return (
            <path key={i}
              d={`M ${CX} ${GY - 2} Q ${CX + Math.sin(a) * spx * 0.5} ${GY - hpx * 0.32} ${ex} ${ey}`}
              stroke={leafColor} strokeWidth={2.2} fill="none" opacity={0.65} />
          );
        })}
      </g>
    );
  }

  if (plantId === 'kuerbis' || plantId === 'zucchini') {
    const isK = plantId === 'kuerbis';
    return (
      <g>
        <line x1={CX} y1={GY} x2={CX} y2={GY - hpx} stroke={stemColor} strokeWidth={2.5} opacity={0.7} />
        {prog > 0.1 && (
          <path d={`M ${CX} ${GY - hpx * 0.3} C ${CX + spx * 0.4} ${GY - hpx * 0.18} ${CX + spx * 0.8} ${GY - hpx * 0.38} ${CX + spx} ${GY - hpx * 0.22}`}
            stroke={stemColor} strokeWidth={2} fill="none" opacity={0.6} />
        )}
        {prog > 0.15 && <ellipse cx={CX + spx * 0.68} cy={GY - hpx * 0.52} rx={spx * 0.2} ry={spx * 0.12} fill={leafColor} opacity={0.75} />}
        {prog > 0.2 && (
          <path d={`M ${CX} ${GY - hpx * 0.3} C ${CX - spx * 0.35} ${GY - hpx * 0.1} ${CX - spx * 0.72} ${GY - hpx * 0.32} ${CX - spx} ${GY - hpx * 0.18}`}
            stroke={stemColor} strokeWidth={1.8} fill="none" opacity={0.55} />
        )}
        {prog > 0.25 && <ellipse cx={CX - spx * 0.62} cy={GY - hpx * 0.42} rx={spx * 0.18} ry={spx * 0.1} fill={leafColor} opacity={0.7} />}
        {showFruit && isK && <ellipse cx={CX + spx * 0.38} cy={GY - hpx * 0.08} rx={15} ry={12} fill={fruitColor} opacity={0.9} />}
        {showFruit && !isK && <ellipse cx={CX + spx * 0.28} cy={GY - 6} rx={7} ry={16} fill={fruitColor} opacity={0.85} />}
      </g>
    );
  }

  // Generic upright: tomate, gurke, melanzani, paprika
  const leafLevels = [0.28, 0.54, 0.78].filter(f => f <= Math.max(prog + 0.1, 0.3));
  return (
    <g>
      {data.isClimber && <line x1={CX + 4} y1={GY} x2={CX + 4} y2={topY - 8} stroke="#f59e0b" strokeWidth={1.5} opacity={0.32} />}
      <path
        d={data.isClimber
          ? `M ${CX} ${GY} C ${CX + 6} ${GY - hpx * 0.35} ${CX - 4} ${GY - hpx * 0.65} ${CX} ${topY}`
          : `M ${CX} ${GY} L ${CX} ${topY}`}
        stroke={stemColor} strokeWidth={2.5} fill="none" />
      {leafLevels.map((f, i) => {
        const y = GY - hpx * f;
        const side = i % 2 === 0 ? 1 : -1;
        const lx = CX + side * spx * 0.56;
        return (
          <g key={i}>
            <path d={`M ${CX} ${y} Q ${CX + side * spx * 0.27} ${y + 3} ${lx} ${y - 5}`}
              stroke={stemColor} strokeWidth={1.2} fill="none" opacity={0.48} />
            <ellipse cx={lx} cy={y - 5} rx={spx * 0.22} ry={spx * 0.12}
              fill={leafColor} transform={`rotate(${side * 22} ${lx} ${y - 5})`} opacity={0.82} />
          </g>
        );
      })}
      {!showFruit && prog > 0.35 && <circle cx={CX} cy={topY + 6} r={4} fill="#f59e0b" opacity={0.8} />}
      {showFruit && plantId === 'tomate' && (
        <>
          <circle cx={CX - 8} cy={topY + 16} r={7.5} fill={fruitColor} opacity={0.9} />
          {prog > 0.75 && <circle cx={CX + 11} cy={topY + 30} r={8.5} fill={fruitColor} opacity={0.85} />}
        </>
      )}
      {showFruit && plantId === 'gurke' && <ellipse cx={CX - 14} cy={topY + 22} rx={6} ry={14} fill={fruitColor} opacity={0.85} />}
      {showFruit && plantId === 'melanzani' && <ellipse cx={CX + 13} cy={topY + 20} rx={7} ry={15} fill={fruitColor} opacity={0.88} />}
      {showFruit && plantId === 'paprika' && (
        <path d={`M ${CX} ${topY + 10} C ${CX - 11} ${topY + 13} ${CX - 12} ${topY + 28} ${CX} ${topY + 30} C ${CX + 12} ${topY + 28} ${CX + 11} ${topY + 13} ${CX} ${topY + 10}`}
          fill={fruitColor} opacity={0.88} />
      )}
    </g>
  );
}

// ─── Full Cross-Section SVG ───────────────────────────────────────────────────
function PlantCrossSection({ data, stage, week }: { data: PlantGrowthData; stage: GrowthStage; week: number }) {
  const t = useT();
  const id = data.plantId;
  const last = data.stages[data.stages.length - 1];
  const hpx  = sp(stage.heightCm,    last.heightCm,    MAX_H[id]  ?? 90);
  const spx  = sp(stage.spreadCm,    last.spreadCm,    MAX_S[id]  ?? 50);
  const dpx  = sp(stage.rootDepthCm, last.rootDepthCm, MAX_RD[id] ?? 85);
  const rspx = sp(stage.rootSpreadCm,last.rootSpreadCm,MAX_RS[id] ?? 70);
  const prog = week / data.totalWeeksToHarvest;
  const tapColor = data.fruitColor ?? data.plantColor;

  return (
    <svg width={320} height={280} viewBox="0 0 320 280" className="block">
      <defs>
        <clipPath id="skyClip"><rect x={0} y={0} width={320} height={GY} /></clipPath>
        <clipPath id="soilClip"><rect x={0} y={GY} width={320} height={280 - GY} /></clipPath>
      </defs>

      {/* Backgrounds */}
      <rect x={0} y={0} width={320} height={GY} fill="#0a0f1a" />
      <rect x={0} y={GY} width={320} height={280 - GY} fill="#1A2E44" opacity={0.22} />

      {/* Soil texture */}
      {[...Array(24)].map((_, i) => (
        <circle key={i}
          cx={18 + (i % 8) * 40 + (Math.floor(i / 8) % 2) * 20}
          cy={GY + 18 + Math.floor(i / 8) * 26}
          r={1.8} fill="#f59e0b" opacity={0.18} />
      ))}

      {/* Roots (clipped to soil) */}
      <g clipPath="url(#soilClip)">
        {data.rootType === 'fibrous'   && <FibrousRoots  dpx={dpx} spx={rspx} color={data.stemColor} />}
        {data.rootType === 'taproot'   && <TaprootRoots  dpx={dpx} spx={rspx} tapColor={tapColor} color={data.stemColor} />}
        {data.rootType === 'spreading' && <SpreadingRoots dpx={dpx} spx={rspx} color={data.stemColor} />}
      </g>

      {/* Above-ground plant (clipped to sky) */}
      <g clipPath="url(#skyClip)">
        <PlantShapeAbove data={data} hpx={hpx} spx={spx} prog={prog} />
      </g>

      {/* Ground line + grass tufts */}
      <line x1={0} y1={GY} x2={320} y2={GY} stroke="#5D8F2E" strokeWidth={2} opacity={0.55} />
      {[...Array(13)].map((_, i) => (
        <path key={i} d={`M ${i * 26} ${GY} Q ${i * 26 + 4} ${GY - 7} ${i * 26 + 8} ${GY}`}
          stroke="#4A90C4" strokeWidth={1.2} fill="none" opacity={0.45} />
      ))}

      {/* Height indicator */}
      {hpx > 18 && (
        <>
          <line x1={286} y1={GY} x2={286} y2={GY - hpx} stroke="#5D8F2E" strokeWidth={0.8} strokeDasharray="3,2" opacity={0.5} />
          <text x={290} y={GY - hpx / 2 + 4} fontFamily="JetBrains Mono" fontSize={8} fill="#5D8F2E" opacity={0.75}>{stage.heightCm}cm</text>
        </>
      )}

      {/* Depth indicator */}
      {dpx > 18 && (
        <>
          <line x1={286} y1={GY} x2={286} y2={GY + dpx} stroke="#f59e0b" strokeWidth={0.8} strokeDasharray="3,2" opacity={0.5} />
          <text x={290} y={GY + dpx / 2 + 4} fontFamily="JetBrains Mono" fontSize={8} fill="#f59e0b" opacity={0.75}>{stage.rootDepthCm}cm</text>
        </>
      )}

      {/* Zone labels */}
      <text x={6} y={14} fontFamily="JetBrains Mono" fontSize={8} fill="#5D8F2E" opacity={0.6}>{t('über dem Boden', 'above ground')}</text>
      <text x={6} y={GY + 16} fontFamily="JetBrains Mono" fontSize={8} fill="#f59e0b" opacity={0.6}>{t('Boden · Wurzeln', 'soil · roots')}</text>
    </svg>
  );
}

// ─── Stage Timeline Bar ───────────────────────────────────────────────────────
function StageBar({ data, week, onChange }: { data: PlantGrowthData; week: number; onChange: (w: number) => void }) {
  const activeIdx = data.stages.reduce((acc, s, i) => (week >= s.week ? i : acc), 0);
  return (
    <div className="flex gap-1 flex-wrap">
      {data.stages.map((s, i) => (
        <button key={s.week} onClick={() => onChange(s.week)}
          className={i === activeIdx ? 'stage-bar-btn--active' : 'stage-bar-btn--inactive'}>
          W{s.week} {s.label}
        </button>
      ))}
    </div>
  );
}

// ─── Main View ────────────────────────────────────────────────────────────────
export default function PlantDetailView({ plantId, onBack }: { plantId: string; onBack: () => void }) {
  const t = useT();
  const D = useWikiData();
  const growth = useGrowthData();
  const data = growth[plantId];
  const plant = D.plants.find(p => p.id === plantId);
  if (!data) return null;

  const [week, setWeek] = useState(0);
  const [activeTab, setActiveTab] = useState<'basics' | 'companions' | 'tips'>('basics');
  const [record, setRecord] = useState<PlantRecord | null>(() => getPlantRecord(plantId));
  const [plantedDate, setPlantedDate] = useState('2026-04-18');
  const [showLogForm, setShowLogForm] = useState(false);

  const stage = getStageForWeek(data, week);
  const companion = COMPANIONS[plantId];
  const basics = PLANT_BASICS[plantId];
  const plantedWeeks = record ? weeksPlanted(record.plantedDate) : null;
  const weeksLeft = data.totalWeeksToHarvest - (plantedWeeks ?? 0);
  const harvestReady = plantedWeeks !== null && plantedWeeks >= Math.floor(data.totalWeeksToHarvest * 0.78);

  function handleLog() {
    const newRecord: PlantRecord = {
      plantId, plantedDate, location: 'garden',
      reminders: { watering: true, fertilizing: false, harvest: true },
    };
    savePlantRecord(newRecord);
    setRecord(newRecord);
    setShowLogForm(false);
    setWeek(weeksPlanted(plantedDate));
  }

  function toggleReminder(key: 'watering' | 'fertilizing' | 'harvest') {
    if (!record) return;
    const updated = { ...record, reminders: { ...record.reminders, [key]: !record.reminders[key] } };
    savePlantRecord(updated);
    setRecord(updated);
  }

  const wColor = { niedrig: 'var(--c-green)', mittel: 'var(--c-cyan)', hoch: 'var(--c-cyan)' }[stage.watering];
  const wLabel = { niedrig: t('Wenig gießen', 'Water little'), mittel: t('Mittel gießen', 'Water moderately'), hoch: t('Viel gießen', 'Water a lot') }[stage.watering];
  const wWidth = { niedrig: '33%', mittel: '66%', hoch: '100%' }[stage.watering];

  return (
    <div className="min-h-screen bg-bg font-sans">

      {/* Header */}
      <div className="plant-detail-header">
        <button onClick={onBack} className="plant-back-btn">{t('← Zurück', '← Back')}</button>
        <h1 className="m-0 font-display text-[22px] text-text font-semibold">
          {t(LABELS[plantId] ?? plantId, plant?.name ?? LABELS[plantId] ?? plantId)}
        </h1>
        <div className="ml-auto flex gap-2.5 items-center">
          {record ? (
            <div className="plant-planted-badge">
              {t('Gepflanzt', 'Planted')} {new Date(record.plantedDate).toLocaleDateString('de-AT', { day: '2-digit', month: '2-digit', year: 'numeric' })}
            </div>
          ) : (
            <button onClick={() => setShowLogForm(!showLogForm)} className="plant-log-btn">
              {t('Als gepflanzt markieren', 'Mark as planted')}
            </button>
          )}
        </div>
      </div>

      {/* Log form */}
      {showLogForm && (
        <div className="plant-log-form">
          <span className="font-sans text-[13px] text-text">{t('Pflanzdatum:', 'Planting date:')}</span>
          <input type="date" value={plantedDate} onChange={e => setPlantedDate(e.target.value)}
            className="form-input" />
          <select defaultValue="garten" className="form-select">
            <option value="garten">{t('Garten - Hochbeet', 'Garden · raised bed')}</option>
            <option value="balkon">{t('Balkon', 'Balcony')}</option>
            <option value="indoor">{t('Indoor (Anzucht)', 'Indoor (starting)')}</option>
          </select>
          <button onClick={handleLog}
            className="bg-primary text-bg border-none rounded-lg px-3.5 py-1.5 cursor-pointer text-[13px] font-semibold">
            {t('Speichern', 'Save')}
          </button>
          <button onClick={() => setShowLogForm(false)}
            className="bg-transparent border-none text-[rgba(255,255,255,0.4)] cursor-pointer text-[13px]">
            {t('Abbrechen', 'Cancel')}
          </button>
        </div>
      )}

      {/* Harvest countdown */}
      {record && (
        <div className="bg-bg px-6 py-2 flex items-center gap-3.5">
          <HarvestIcon size={16} style={{ color: harvestReady ? 'var(--c-cyan)' : 'var(--c-green)', flexShrink: 0 }} />
          <span className="font-sans text-[13px]" style={{ color: harvestReady ? 'var(--c-cyan)' : 'var(--c-green)' }}>
            {harvestReady
              ? <>{t('Ernte möglich! Woche', 'Harvest possible! Week')} {plantedWeeks} {t('von', 'of')} {data.totalWeeksToHarvest}</>
              : <>{t('Noch ca.', 'Approx.')} <strong className="text-white">{Math.max(0, weeksLeft)} {t('Wochen', 'weeks')}</strong> {t('bis zur Ernte · Woche', 'until harvest · week')} {plantedWeeks} {t('von', 'of')} {data.totalWeeksToHarvest}</>
            }
          </span>
          <div className="ml-auto bg-[rgba(255,255,255,0.12)] rounded-lg h-1.25 w-45 overflow-hidden flex-shrink-0">
            <div style={{
              background: harvestReady ? 'var(--c-cyan)' : 'var(--c-green)',
              borderRadius: 8, height: '100%',
              width: `${Math.min(100, ((plantedWeeks ?? 0) / data.totalWeeksToHarvest) * 100)}%`,
              transition: 'width 0.5s',
            }} />
          </div>
        </div>
      )}

      {/* Main grid */}
      <div className="plant-detail-grid">

        {/* Left column: slider + cross-section */}
        <div>
          <div className="mb-3.5">
            <div className="flex justify-between mb-1.5">
              <span className="font-mono text-xs text-[rgba(255,255,255,0.35)]">W0</span>
              <span className="font-sans text-[15px] text-text font-semibold">{stage.label}</span>
              <span className="font-mono text-xs text-[rgba(255,255,255,0.35)]">W{data.totalWeeksToHarvest}</span>
            </div>
            <input type="range" min={0} max={data.totalWeeksToHarvest} value={week}
              onChange={e => setWeek(Number(e.target.value))}
              className="w-full accent-primary cursor-pointer" />
            <div className="mt-2">
              <StageBar data={data} week={week} onChange={setWeek} />
            </div>
          </div>

          {/* Cross-section card */}
          <div className="bg-bg-soft rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.07)]">
            <PlantCrossSection data={data} stage={stage} week={week} />
          </div>

          {/* Watering bar */}
          <div className="flex gap-2 mt-3 items-center">
            <DropIcon size={15} style={{ color: wColor, flexShrink: 0 }} />
            <span className="font-sans text-xs font-semibold" style={{ color: wColor }}>{wLabel}</span>
            <div className="flex-1 h-1 bg-[rgba(255,255,255,0.08)] rounded overflow-hidden">
              <div style={{ height: '100%', borderRadius: 4, background: wColor, width: wWidth, transition: 'width 0.4s' }} />
            </div>
          </div>

          {/* Stage note */}
          {stage.note && (
            <div className="plant-note-box mt-2.5">{stage.note}</div>
          )}
        </div>

        {/* Right column: tasks + info */}
        <div className="stack-lg">

          {/* Tasks card */}
          <div className="bg-bg-soft rounded-2xl p-5 border border-[rgba(255,255,255,0.07)]">
            <h3 className="m-0 mb-3.5 font-sans text-[17px] text-text">
              {t('Aufgaben', 'Tasks')} · {stage.label}
            </h3>
            {stage.tasks.map((task, i) => (
              <div key={i} className={`flex gap-2.5 items-start py-2 ${i < stage.tasks.length - 1 ? 'border-b border-[rgba(255,255,255,0.06)]' : ''}`}>
                <div className="plant-task-check" />
                <span className="font-sans text-sm text-text leading-[1.45]">{task}</span>
              </div>
            ))}
            {stage.canHarvest && (
              <div className="plant-harvest-ready">
                <HarvestIcon size={14} style={{ color: 'var(--c-green)', flexShrink: 0 }} />
                <span className="font-sans text-[13px] text-bg font-medium">{t('Ernte möglich in dieser Phase', 'Harvest possible in this phase')}</span>
              </div>
            )}
          </div>

          {/* Reminders card (only when logged) */}
          {record && (
            <div className="bg-bg-soft rounded-2xl p-5 border border-[rgba(255,255,255,0.07)]">
              <h3 className="m-0 mb-3 font-sans text-[15px] text-text">{t('Erinnerungen', 'Reminders')}</h3>
              {(['watering', 'fertilizing', 'harvest'] as const).map(key => {
                const lbl = { watering: t('Gießen', 'Watering'), fertilizing: t('Düngen', 'Fertilising'), harvest: t('Erntezeit', 'Harvest time') }[key];
                const on = record.reminders[key];
                return (
                  <div key={key} className="plant-reminder-row">
                    <span className="font-sans text-[13px] text-text">{lbl}</span>
                    <button onClick={() => toggleReminder(key)}
                      className="plant-toggle"
                      style={{ background: on ? 'var(--c-green)' : 'rgba(255,255,255,0.12)' }}>
                      <div className="plant-toggle-knob" style={{ left: on ? 23 : 3 }} />
                    </button>
                  </div>
                );
              })}
              <p className="mt-2.5 mb-0 font-sans text-xs text-[rgba(255,255,255,0.35)]">
                {t('Push-Benachrichtigungen werden nach dem Launch verfügbar', 'Push notifications will be available after launch')}
              </p>
            </div>
          )}

          {/* Info tabs card */}
          <div className="bg-bg-soft rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.07)]">
            <div className="plant-tab-bar">
              {(['basics', 'companions', 'tips'] as const).map(tab => {
                const tabLabel = { basics: t('Grundinfos', 'Basics'), companions: t('Begleitpflanzen', 'Companions'), tips: t('Tipps & Phasen', 'Tips & phases') }[tab];
                return (
                  <button key={tab} onClick={() => setActiveTab(tab)}
                    className={`plant-tab ${activeTab === tab ? 'plant-tab--active' : 'plant-tab--inactive'}`}>
                    {tabLabel}
                  </button>
                );
              })}
            </div>
            <div className="p-5">

              {activeTab === 'basics' && basics && (
                <dl className="plant-basics-dl">
                  {[
                    [t('Standort', 'Location'), basics.standort], [t('Boden', 'Soil'), basics.boden], [t('Abstand', 'Spacing'), basics.abstand],
                    [t('Pflanzzeit', 'Planting time'), basics.pflanzzeit], [t('Ernte', 'Harvest'), basics.ernte], [t('Für Anfänger', 'For beginners'), basics.anfaenger],
                  ].map(([k, v]) => (
                    <>
                      <dt key={`dt-${k}`} className="font-sans text-xs text-[rgba(255,255,255,0.35)] font-semibold pt-0.5 whitespace-nowrap">{k}</dt>
                      <dd key={`dd-${k}`} className="m-0 font-sans text-[13px] text-text">{v}</dd>
                    </>
                  ))}
                </dl>
              )}

              {activeTab === 'companions' && companion && (
                <div>
                  <div className="mb-3">
                    <div className="font-sans text-xs text-text-muted font-bold uppercase tracking-[0.06em] mb-[7px]">{t('Gute Nachbarn', 'Good neighbours')}</div>
                    <div className="flex flex-wrap gap-1.5">
                      {companion.good.map(p => (
                        <span key={p} className="plant-companion-good">
                          <PlantLink name={p}>{p}</PlantLink>
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mb-3.5">
                    <div className="font-sans text-xs text-[#f59e0b] font-bold uppercase tracking-[0.06em] mb-[7px]">{t('Schlechte Nachbarn', 'Bad neighbours')}</div>
                    <div className="flex flex-wrap gap-1.5">
                      {companion.bad.map(p => (
                        <span key={p} className="plant-companion-bad">
                          <PlantLink name={p}>{p}</PlantLink>
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="plant-note-box">{companion.note}</div>
                </div>
              )}

              {activeTab === 'tips' && basics && (
                <div>
                  <div className="plant-tip-quote">{basics.tipp}</div>
                  <div className="font-sans text-xs text-[rgba(255,255,255,0.35)] font-bold uppercase tracking-[0.06em] mb-2">{t('Alle Wachstumsphasen', 'All growth stages')}</div>
                  {data.stages.map(s => (
                    <button key={s.week} onClick={() => setWeek(s.week)} className="plant-stage-btn">
                      <div className="font-mono text-xs text-primary w-10 flex-shrink-0 pt-px">W{s.week}</div>
                      <div className="flex-1">
                        <div className="font-sans text-[13px] font-medium text-text">{s.label}</div>
                        <div className="font-sans text-xs text-[rgba(255,255,255,0.35)] mt-0.5">{t('H:', 'H:')} {s.heightCm}cm · {t('Wurzel:', 'Root:')} {s.rootDepthCm}cm</div>
                      </div>
                      {s.canHarvest && <HarvestIcon size={13} style={{ color: 'var(--c-green)', flexShrink: 0, marginTop: 2 }} />}
                    </button>
                  ))}
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
