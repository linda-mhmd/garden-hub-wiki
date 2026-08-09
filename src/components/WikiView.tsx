import { useState, useCallback, useEffect, useRef } from 'react';
import { WIKI_PLANTS, WIKI_PRINCIPLES, WIKI_TOOLS, WIKI_SOURCES, WIKI_IMAGE_MAP, type WikiPlant } from '../data/wiki';
import { MONTHLY_CALENDAR, GLASHAUS_GUIDE, WIKI_CROSS_LINKS, CLIMATE_REGIONS, type MonthEntry } from '../data/wikiExpanded';
import { WIKI_ARTICLES, WIKI_ARTICLE_MAP, ARTICLE_IMAGES, type WikiArticle } from '../data/wikiArticles';
import { PlantNameList } from './PlantLink';
import { PlantIcon, STAGE_LABELS, resolveIconKey } from '../icons/plant-icons/PlantIcon.tsx';
import { useT } from '../i18n';

const GREEN  = '#5D8F2E';
const CYAN   = '#4A90C4';
const AMBER  = '#D4A574';
const RED    = '#B8432E';

// ── Shared components ─────────────────────────────────────────────────────────

function Collapsible({ title, subtitle, color, defaultOpen, children }: {
  title: string; subtitle?: string; color?: string; defaultOpen?: boolean; children: React.ReactNode;
}) {
  const [open, setOpen] = useState(defaultOpen ?? false);
  const c = color || AMBER;
  return (
    <div
      className="collapsible"
      style={{ border: `1px solid ${open ? c + '55' : 'rgba(255,255,255,0.06)'}` }}
    >
      <button onClick={() => setOpen(!open)} className="collapsible-btn">
        <div className="flex-1">
          <h4 className="card-title">{title}</h4>
          {subtitle && <p className="body-sm mt-0.5 opacity-80">{subtitle}</p>}
        </div>
        <svg
          width="14" height="14" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
          className={`collapsible-chevron text-text-muted${open ? ' collapsible-chevron--open' : ''}`}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      {open && <div className="collapsible-body">{children}</div>}
    </div>
  );
}

function Tag({ label, color }: { label: string; color: string }) {
  return (
    <span className="wiki-tag" style={{ color, background: color + '18' }}>
      {label}
    </span>
  );
}

function LinkButton({ label, onClick }: { label: string; onClick: () => void }) {
  return <button onClick={onClick} className="link-btn">{label}</button>;
}

function SectionHeader({ tag, title, subtitle }: { tag: string; title: string; subtitle?: string }) {
  return (
    <div className="mb-6">
      <div className="page-overline">{tag}</div>
      <h2 className="page-title">{title}</h2>
      {subtitle && <p className="body-muted mt-[10px] max-w-[640px]">{subtitle}</p>}
    </div>
  );
}

function SourceLine({ ids }: { ids?: string[] }) {
  if (!ids || ids.length === 0) return null;
  return (
    <p className="source-note">
      Quellen: {ids.map(id => {
        const s = WIKI_SOURCES.find(x => x.id === id);
        return s ? (s.author ? `${s.author} (${s.year || ''})` : s.title) : id;
      }).join(' · ')}
    </p>
  );
}

function Breadcrumb({ items }: { items: { label: string; onClick?: () => void; color?: string }[] }) {
  return (
    <div className="breadcrumb">
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-2">
          {i > 0 && <span className="breadcrumb-sep">/</span>}
          {item.onClick ? (
            <button onClick={item.onClick} className="breadcrumb-link">{item.label}</button>
          ) : (
            <span className="body font-semibold" style={{ color: item.color || 'var(--c-text)' }}>{item.label}</span>
          )}
        </span>
      ))}
    </div>
  );
}

// ── URL hash routing ──────────────────────────────────────────────────────────
function wikiPageToHash(p: WikiPage): string {
  switch (p.view) {
    case 'home':    return '#wiki';
    case 'artikel': return `#wiki/artikel/${p.id}`;
    case 'pflanze': return `#wiki/pflanze/${p.id}`;
    case 'monat':   return `#wiki/monat/${p.month}`;
    default:        return `#wiki/${p.view}`;
  }
}

function hashToWikiPage(hash: string): WikiPage {
  const parts = hash.replace(/^#/, '').split('/');
  if (parts[0] !== 'wiki') return { view: 'home' };
  const view = parts[1];
  if (!view) return { view: 'home' };
  if (view === 'artikel' && parts[2]) return { view: 'artikel', id: parts[2] };
  if (view === 'pflanze' && parts[2]) return { view: 'pflanze', id: parts[2] };
  if (view === 'monat' && parts[2]) {
    const month = parseInt(parts[2], 10);
    if (month >= 1 && month <= 12) return { view: 'monat', month };
  }
  const simpleViews = ['grundlagen', 'pflanzen', 'kalender', 'glashaus', 'prinzipien', 'regionen', 'werkzeug', 'quellen'] as const;
  if ((simpleViews as readonly string[]).includes(view)) return { view: view as typeof simpleViews[number] };
  return { view: 'home' };
}

// ── Navigation types ──────────────────────────────────────────────────────────
type WikiPage =
  | { view: 'home' }
  | { view: 'grundlagen' }
  | { view: 'artikel'; id: string }
  | { view: 'pflanzen' }
  | { view: 'pflanze'; id: string }
  | { view: 'kalender' }
  | { view: 'monat'; month: number }
  | { view: 'glashaus' }
  | { view: 'prinzipien' }
  | { view: 'regionen' }
  | { view: 'rechner' }
  | { view: 'werkzeug' }
  | { view: 'quellen' };

// ── Plant Detail Page ─────────────────────────────────────────────────────────
const STAGES_LIST: Array<'aussaat' | 'keimling' | 'jungpflanze' | 'reif'> = ['aussaat', 'keimling', 'jungpflanze', 'reif'];

function PlantGrowthStageRow({ plantId }: { plantId: string }) {
  const iconKey = resolveIconKey(plantId);
  return (
    <div className="mb-6 rounded-xl p-4" style={{ background: 'var(--c-card)', border: '1px solid var(--c-border)' }}>
      <div className="label mb-3" style={{ color: GREEN, letterSpacing: '0.12em' }}>Wachstumsphasen</div>
      <div className="flex gap-5 flex-wrap">
        {STAGES_LIST.map(stage => (
          <div key={stage} className="flex flex-col items-center gap-2">
            <PlantIcon plant={iconKey} stage={stage} size={52} />
            <span className="font-sans text-[11px] text-center" style={{ color: 'var(--c-sub)', fontFamily: 'var(--f-sans)' }}>{STAGE_LABELS[stage]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function PlantDetailPage({ plant, onNavigate, onSelectGrowth }: {
  plant: WikiPlant; onNavigate: (p: WikiPage) => void; onSelectGrowth?: (id: string) => void;
}) {
  const img = WIKI_IMAGE_MAP[plant.id];
  const crossLinks = WIKI_CROSS_LINKS[plant.id] || [];
  const relatedPlants = (plant.relatedIds || []).map(rid => WIKI_PLANTS.find(p => p.id === rid)).filter(Boolean) as WikiPlant[];

  return (
    <div>
      <Breadcrumb items={[
        { label: 'Wiki', onClick: () => onNavigate({ view: 'home' }) },
        { label: 'Pflanzenlexikon', onClick: () => onNavigate({ view: 'pflanzen' }) },
        { label: plant.name, color: AMBER },
      ]} />

      <div className={`grid gap-6 mb-7${img ? ' grid-cols-[1fr_220px]' : ''}`}>
        <div>
          <div className="label mb-1.5" style={{ color: plant.color, letterSpacing: '0.15em' }}>
            {plant.family}{plant.familyLat ? ` (${plant.familyLat})` : ''}
          </div>
          <h1 className="font-sans text-[2.125rem] font-extrabold text-text m-0 mb-1 tracking-tight">{plant.name}</h1>
          <p className="body-muted italic mb-[14px]">{plant.lat}</p>
          <div className="flex flex-wrap gap-1.5 mb-4">
            <Tag label={plant.sun} color={AMBER} />
            <Tag label={plant.water} color={CYAN} />
            <Tag label={plant.nutrient} color={GREEN} />
            {plant.optimalTemp && <Tag label={plant.optimalTemp} color={RED} />}
            {plant.frostHardy && <Tag label="Frosthart" color={CYAN} />}
            {plant.glashaus && <Tag label="Glashaus" color={CYAN} />}
            {plant.balcony && <Tag label="Balkon" color={GREEN} />}
          </div>
          <div className="info-box info-box-green rounded-[12px] p-[14px]">
            <div className="label label-green mb-1 flex items-center gap-1.5">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
              </svg>
              EINSTEIGER-TIPP
            </div>
            <p className="body">{plant.beginnerTip}</p>
          </div>
        </div>
        {img && (
          <div className="card overflow-hidden">
            <img src={img.url} alt={img.alt} className="w-full object-cover h-[180px]" loading="lazy" />
            <div className="px-3 py-2">
              <p className="mono-sm opacity-70">{img.credit} · {img.license}</p>
            </div>
          </div>
        )}
      </div>

      <PlantGrowthStageRow plantId={plant.id} />

      <div className="flex flex-col gap-[10px]">
        <Collapsible title="Aussaat & Pflanzung" subtitle={`${plant.sowing} · ${plant.planting}`} color={GREEN} defaultOpen>
          <div className="two-col mt-3">
            <div>
              <div className="label label-amber mb-1">Aussaat</div>
              <p className="body">{plant.sowing}</p>
            </div>
            <div>
              <div className="label label-cyan mb-1">Auspflanzen</div>
              <p className="body">{plant.planting}</p>
            </div>
          </div>
        </Collapsible>

        <Collapsible title="Schritt für Schritt" subtitle={`${plant.steps.length} Schritte bis zur Ernte`} color={AMBER} defaultOpen>
          <div className="mt-3">
            {plant.steps.map((step, i) => (
              <div key={i} className="flex gap-3 mb-[10px] items-start">
                <div className="step-badge">{i + 1}</div>
                <p className="body pt-1">{step}</p>
              </div>
            ))}
          </div>
        </Collapsible>

        <Collapsible title="Ernte" subtitle={plant.harvest} color={RED}>
          <p className="body mt-3">{plant.harvest}</p>
        </Collapsible>

        <Collapsible title="Mischkultur: Freunde & Feinde" color={GREEN}>
          <div className="two-col mt-3">
            <div>
              <div className="label label-green mb-1.5">Gute Nachbarn</div>
              <p className="body"><PlantNameList names={plant.partners} /></p>
            </div>
            <div>
              <div className="label label-red mb-1.5">Schlechte Nachbarn</div>
              <p className="body"><PlantNameList names={plant.enemies} /></p>
            </div>
          </div>
        </Collapsible>

        <Collapsible title="Probleme & Krankheiten" color={RED}>
          <p className="body mt-3">{plant.issues}</p>
        </Collapsible>

        <Collapsible title="Empfohlene Sorten" subtitle="Für das österreichische Klima" color={AMBER}>
          <p className="body mt-3">{plant.sorts}</p>
        </Collapsible>

        {plant.furtherReading && plant.furtherReading.length > 0 && (
          <Collapsible title="Weiterführende Literatur" color={CYAN}>
            <div className="mt-3">
              {plant.furtherReading.map((ref, i) => (
                <p key={i} className="body-sm mb-1.5 pl-3" style={{ borderLeft: `2px solid ${CYAN}33` }}>
                  {ref}
                </p>
              ))}
            </div>
          </Collapsible>
        )}
      </div>

      {crossLinks.length > 0 && (
        <div className="mt-5">
          <div className="section-overline text-water">Verknüpfte Wiki-Seiten</div>
          <div className="flex flex-wrap gap-1.5">
            {crossLinks.map((link, i) => (
              <LinkButton key={i} label={link.label} onClick={() => {
                const SECTION_MAP: Record<string, WikiPage> = {
                  'glashaus':                   { view: 'glashaus' },
                  'prinzipien-mischkultur':     { view: 'artikel', id: 'mischkultur' },
                  'prinzipien-fruchtfolge':     { view: 'artikel', id: 'fruchtfolge-plan' },
                  'prinzipien-klima':           { view: 'regionen' },
                  'prinzipien-staffelaussaat':  { view: 'artikel', id: 'anzucht' },
                };
                if (link.section.startsWith('monat-')) onNavigate({ view: 'monat', month: parseInt(link.section.split('-')[1]) });
                else if (SECTION_MAP[link.section]) onNavigate(SECTION_MAP[link.section]);
                else if (link.section.startsWith('prinzipien')) onNavigate({ view: 'prinzipien' });
              }} />
            ))}
          </div>
        </div>
      )}

      {relatedPlants.length > 0 && (
        <div className="mt-5">
          <div className="section-overline text-primary">Verwandte Pflanzen</div>
          <div className="grid gap-2" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))' }}>
            {relatedPlants.map(rp => (
              <button
                key={rp.id}
                onClick={() => onNavigate({ view: 'pflanze', id: rp.id })}
                className="card p-[14px] cursor-pointer text-left flex items-center gap-[10px]"
              >
                <div className="w-9 h-9 rounded-[10px] flex items-center justify-center shrink-0" style={{ background: rp.color + '18' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={rp.color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22V12"/><path d="M5 12C5 8.13 8.13 5 12 5s7 3.13 7 7"/>
                  </svg>
                </div>
                <div>
                  <div className="body font-semibold">{rp.name}</div>
                  <div className="body-sm italic">{rp.lat}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="flex items-center gap-[10px] mt-6 flex-wrap">
        {onSelectGrowth && (
          <button onClick={() => onSelectGrowth(plant.id)} className="btn-primary">
            Wachstum ansehen
          </button>
        )}
      </div>
      <SourceLine ids={plant.sourceIds} />
    </div>
  );
}

// ── Month Detail Page ─────────────────────────────────────────────────────────
function MonthDetailPage({ month, onNavigate }: { month: MonthEntry; onNavigate: (p: WikiPage) => void }) {
  const seasonColor = month.month >= 3 && month.month <= 5 ? GREEN
    : month.month >= 6 && month.month <= 8 ? AMBER
    : month.month >= 9 && month.month <= 11 ? RED : CYAN;
  const sections = [
    { label: 'Vorkultur (innen)',    items: month.sowIndoor,  color: AMBER, icon: 'M12 2v4M6.34 6.34L8.46 8.46M2 12h4M6.34 17.66l2.12-2.12M12 18v4' },
    { label: 'Direktsaat (Freiland)', items: month.sowOutdoor, color: GREEN, icon: 'M12 22V12M5 12C5 8 8 5 12 5s7 3 7 7' },
    { label: 'Auspflanzen',          items: month.plant,      color: CYAN,  icon: 'M12 22V2M3 9l9-7 9 7' },
    { label: 'Ernten',               items: month.harvest,    color: RED,   icon: 'M6 3v12M18 9a6 6 0 01-12 0' },
    { label: 'Glashaus',             items: month.glashaus,   color: CYAN,  icon: 'M3 21V7l9-5 9 5v14' },
    { label: 'Pflege',               items: month.care,       color: 'var(--c-sub)', icon: 'M12 2.69l5.66 5.66a8 8 0 11-11.31 0z' },
  ];

  return (
    <div>
      <Breadcrumb items={[
        { label: 'Wiki', onClick: () => onNavigate({ view: 'home' }) },
        { label: 'Monatskalender', onClick: () => onNavigate({ view: 'kalender' }) },
        { label: month.name, color: seasonColor },
      ]} />

      <div className="wiki-hero card" style={{ border: `2px solid ${seasonColor}33` }}>
        <div className="flex items-center gap-[18px]">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center font-sans text-[1.75rem] font-black shrink-0"
            style={{ background: seasonColor + '22', border: `2px solid ${seasonColor}55`, color: seasonColor }}
          >
            {month.month}
          </div>
          <div className="flex-1">
            <h1 className="font-sans text-[2rem] font-extrabold text-text m-0">{month.name}</h1>
            <div className="label mt-1" style={{ color: seasonColor }}>{month.phase}</div>
          </div>
          <div className="text-right">
            <div className="mono font-bold text-amber">{month.avgTempHigh}° / {month.avgTempLow}°C</div>
            <div className="mono-sm text-water">{month.sunHours}h Sonne</div>
            <div className="mono-sm text-water">{month.rainfall} mm Regen</div>
          </div>
        </div>
        <p className="body text-primary italic mt-[14px]">{month.motto}</p>
      </div>

      <div className="flex flex-col gap-[10px]">
        {sections.filter(s => s.items.length > 0).map((section, i) => (
          <Collapsible key={i} title={section.label} subtitle={`${section.items.length} Aufgaben`} color={section.color} defaultOpen={i < 3}>
            <div className="mt-[10px]">
              {section.items.map((item: string, j: number) => (
                <div key={j} className="flex gap-2 items-start mb-2">
                  <span className="dot-bullet" style={{ background: section.color }} />
                  <p className="body">{item}</p>
                </div>
              ))}
            </div>
          </Collapsible>
        ))}
      </div>

      {month.notes.length > 0 && (
        <div className="info-box info-box-amber rounded-[14px] p-[18px] mt-4">
          <div className="label label-amber mb-2">Hinweise</div>
          {month.notes.map((note, i) => (
            <p key={i} className="body mb-1.5">{note}</p>
          ))}
        </div>
      )}

      <div className="flex justify-between mt-6">
        {month.month > 1 && (
          <LinkButton label={`< ${MONTHLY_CALENDAR[month.month - 2].name}`} onClick={() => onNavigate({ view: 'monat', month: month.month - 1 })} />
        )}
        <div className="flex-1" />
        {month.month < 12 && (
          <LinkButton label={`${MONTHLY_CALENDAR[month.month].name} >`} onClick={() => onNavigate({ view: 'monat', month: month.month + 1 })} />
        )}
      </div>

      <p className="source-note">{month.sourceNote}</p>
    </div>
  );
}

// ── Landing Pages ─────────────────────────────────────────────────────────────

function HomePage({ onNavigate }: { onNavigate: (p: WikiPage) => void }) {
  const t = useT();
  const IMG2 = 'images/slides/infografik-de/';
  const sections = [
    { view: 'grundlagen' as const, label: t('Grundlagen', 'Basics'), desc: t('Boden, Bewässerung, Kompost, Düngung, Pflanzenschutz, Anzucht', 'Soil, watering, compost, fertilising, plant protection, propagation'), color: GREEN, count: `${WIKI_ARTICLES.length} ${t('Leitfäden', 'guides')}`, interactive: false, img: IMG2 + 'infografik-de_garden-hub-austria-titel-wald-wurzeln_mit-text.png' },
    { view: 'pflanzen'   as const, label: t('Pflanzenlexikon', 'Plant encyclopedia'), desc: t('Detaillierte Steckbriefe mit Anbauanleitung', 'Detailed profiles with growing instructions'), color: AMBER, count: `${WIKI_PLANTS.length} ${t('Pflanzen', 'plants')}`, interactive: false, img: IMG2 + 'infografik-de_pflanzenprofil-paradeiser-tomate_mit-text.png' },
    { view: 'kalender'   as const, label: t('Monatskalender', 'Monthly calendar'), desc: t('Was wann gesät, gepflanzt und geerntet wird - für jeden Monat', 'What to sow, plant and harvest, month by month'), color: CYAN, count: t('12 Monate', '12 months'), interactive: false, img: IMG2 + 'infografik-de_gartenkalender-22-kulturen-jahrplan_mit-text.png' },
    { view: 'glashaus'   as const, label: t('Glashaus', 'Greenhouse'), desc: t('Kulturen, Wintergemüse, Aufbau-Tipps', 'Crops, winter vegetables, build tips'), color: CYAN, count: `${GLASHAUS_GUIDE.plants.length} ${t('Kulturen', 'crops')}`, interactive: false, img: IMG2 + 'infografik-de_glashaus-saisonplanung-daemmerung_mit-text.png' },
    { view: 'rechner'    as const, label: t('Ertragsrechner + Visualisierung', 'Yield calculator + visualisation'), desc: t('Ertrag, Fläche und Kalorien berechnen und Beete visualisieren - im eigenständigen Rechner auf ernterechner.com.', 'Calculate yield, area and calories and visualise beds - on the standalone tool at ernterechner.com.'), color: AMBER, count: t('Externes Tool', 'External tool'), interactive: true, img: IMG2 + 'infografik-de_ertragsrechner-praezision-kilo-kalorien_mit-text.png' },
    { view: 'regionen'   as const, label: t('Klimaregionen', 'Climate regions'), desc: t('Alle 7 Anbauregionen Österreichs mit Klimadaten und Empfehlungen', 'All 7 growing regions of Austria with climate data and recommendations'), color: '#15803d', count: `${CLIMATE_REGIONS.length} ${t('Regionen', 'regions')}`, interactive: false, img: IMG2 + 'infografik-de_pannonisches-klima-verstehen_mit-text.png' },
    { view: 'prinzipien' as const, label: t('Prinzipien', 'Principles'), desc: t('Fruchtfolge, Mischkultur, Staffelaussaat', 'Crop rotation, companion planting, succession sowing'), color: RED, count: `${WIKI_PRINCIPLES.length} ${t('Regeln', 'rules')}`, interactive: false, img: IMG2 + 'infografik-de_fruchtfolge-global-kreis_mit-text.png' },
    { view: 'werkzeug'   as const, label: t('Werkzeug', 'Tools'), desc: t('Grundausstattung und Hochbeet-Bau', 'Basic kit and raised-bed building'), color: 'var(--c-bg-soft)', count: `${WIKI_TOOLS.length} ${t('Geräte', 'tools')}`, interactive: false, img: IMG2 + 'infografik-de_solanaceae-tomaten-corten-hochbeet_mit-text.png' },
    { view: 'quellen'    as const, label: t('Quellen & Literatur', 'Sources & literature'), desc: t('Wissenschaftliche und institutionelle Referenzen', 'Scientific and institutional references'), color: 'var(--c-sub)', count: `${WIKI_SOURCES.length} ${t('Quellen', 'sources')}`, interactive: false, img: IMG2 + 'infografik-de_garden-wiki-wissenschaft-tablet_mit-text.png' },
  ];

  const currentMonth = new Date().getMonth() + 1;
  const cm = MONTHLY_CALENDAR.find(m => m.month === currentMonth);

  return (
    <div>
      <SectionHeader tag={t('Garten-Wiki', 'Garden Wiki')} title={t('Gartenarbeit für Einsteiger.', 'Gardening for beginners.')} subtitle={t('Wissenschaftlich fundiert, praxiserprobt, für das österreichische Klima. Alle Informationen basieren auf Daten von GeoSphere Austria, BOKU Wien, Arche Noah und der HBLFA Schönbrunn.', 'Science-based, field-tested, for the Austrian climate. All information draws on data from GeoSphere Austria, BOKU Vienna, Arche Noah and HBLFA Schönbrunn.')} />

      {cm && (
        <button
          onClick={() => onNavigate({ view: 'monat', month: cm.month })}
          className="card w-full p-5 mb-6 cursor-pointer text-left flex items-center gap-4"
          style={{ border: `2px solid ${GREEN}33` }}
        >
          <div
            className="w-[52px] h-[52px] rounded-[14px] flex items-center justify-center font-sans text-[1.5rem] font-black shrink-0"
            style={{ background: GREEN + '22', color: GREEN }}
          >
            {cm.month}
          </div>
          <div className="flex-1">
            <div className="label label-green uppercase">{t('Aktuell', 'Now')}: {cm.name}</div>
            <p className="body font-semibold mt-0.5">{cm.motto}</p>
            <p className="body-sm mt-1">{cm.phase} · {cm.avgTempHigh}°/{cm.avgTempLow}°C · {cm.sunHours}h Sonne</p>
          </div>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={GREEN} strokeWidth="2" strokeLinecap="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      )}

      <div className="mb-4">
        <div className="section-overline text-amber">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M12 20V10"/><path d="M18 20V4"/><path d="M6 20v-4"/>
          </svg>
          {t('Interaktive Tools', 'Interactive tools')}
        </div>
        <div className="grid gap-3" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))' }}>
          {sections.filter(s => s.interactive).map(s => (
            <button
              key={s.view}
              onClick={() => onNavigate({ view: s.view })}
              className="rounded-2xl cursor-pointer text-left transition-colors overflow-hidden"
              style={{ border: `2px solid ${s.color}44`, padding: 0 }}
            >
              {s.img && (
                <div style={{ height: 130, overflow: 'hidden', position: 'relative' }}>
                  <img src={s.img} alt={s.label} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%' }} />
                  <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to bottom, transparent 40%, var(--c-card) 100%)` }} />
                  <span className="mono-sm font-bold text-white px-2.5 py-0.75 rounded-lg" style={{ position: 'absolute', top: 10, right: 10, background: s.color }}>{s.count}</span>
                </div>
              )}
              <div style={{ padding: '14px 20px 18px', background: `linear-gradient(135deg, ${s.color}10 0%, var(--c-card) 100%)` }}>
                <h3 className="card-title mb-1.5 text-[1.25rem]">{s.label}</h3>
                <p className="body-muted">{s.desc}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="section-overline text-primary">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <path d="M12 22V12"/><path d="M5 12C5 8.13 8.13 5 12 5s7 3.13 7 7"/>
        </svg>
        {t('Wissen & Nachschlagen', 'Knowledge & reference')}
      </div>
      <div className="grid gap-3" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
        {sections.filter(s => !s.interactive).map(s => (
          <button
            key={s.view}
            onClick={() => onNavigate({ view: s.view })}
            className="card cursor-pointer text-left transition-colors overflow-hidden"
            style={{ padding: 0 }}
          >
            {s.img && (
              <div style={{ height: 100, overflow: 'hidden', position: 'relative' }}>
                <img src={s.img} alt={s.label} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 25%' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 30%, var(--c-card) 100%)' }} />
                <span className="mono-sm px-2 py-0.5 rounded-lg" style={{ position: 'absolute', top: 8, right: 8, color: s.color, background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(4px)' }}>{s.count}</span>
              </div>
            )}
            <div style={{ padding: '12px 16px 14px' }}>
              <h3 className="card-title mb-1 text-[1.125rem]">{s.label}</h3>
              <p className="body-sm">{s.desc}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

function PflanzenLanding({ onNavigate }: { onNavigate: (p: WikiPage) => void }) {
  const [filter, setFilter] = useState<'alle' | 'glashaus' | 'balkon' | 'frosthart'>('alle');
  const filtered = WIKI_PLANTS.filter(p => {
    if (filter === 'glashaus') return p.glashaus;
    if (filter === 'balkon') return p.balcony;
    if (filter === 'frosthart') return p.frostHardy;
    return true;
  });

  const filters = [
    { id: 'alle' as const, label: 'Alle', color: 'var(--c-text)' },
    { id: 'glashaus' as const, label: 'Glashaus', color: CYAN },
    { id: 'balkon' as const, label: 'Balkon', color: GREEN },
    { id: 'frosthart' as const, label: 'Frosthart', color: CYAN },
  ];

  return (
    <div>
      <Breadcrumb items={[
        { label: 'Wiki', onClick: () => onNavigate({ view: 'home' }) },
        { label: 'Pflanzenlexikon', color: AMBER },
      ]} />
      <SectionHeader tag="Pflanzenlexikon" title={`${WIKI_PLANTS.length} Pflanzen für Österreich`} subtitle="Jede Pflanze mit wissenschaftlichem Namen, Anbauanleitung, Sortenempfehlung und Quellenangaben. Klicke für die Detailseite." />

      <div className="flex gap-1.5 mb-5 flex-wrap">
        {filters.map(f => (
          <button
            key={f.id}
            onClick={() => setFilter(f.id)}
            className="label px-[14px] py-[6px] rounded-[20px] cursor-pointer transition-colors"
            style={{
              background: filter === f.id ? f.color + '20' : 'rgba(255,255,255,0.04)',
              color: filter === f.id ? f.color : 'var(--c-sub)',
              border: `1.5px solid ${filter === f.id ? f.color + '55' : 'rgba(255,255,255,0.08)'}`,
            }}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="grid gap-[10px]" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))' }}>
        {filtered.map(p => {
          const img = WIKI_IMAGE_MAP[p.id];
          return (
            <button
              key={p.id}
              onClick={() => onNavigate({ view: 'pflanze', id: p.id })}
              className="card cursor-pointer text-left overflow-hidden p-0 transition-colors"
            >
              {img
                ? <img src={img.url} alt={img.alt} className="w-full object-cover h-30" loading="lazy" />
                : <div className="h-1.5 w-full" style={{ background: `linear-gradient(90deg, ${p.color}88, ${p.color}22)` }} />
              }
              <div className="p-4">
                <div className="label mb-1" style={{ color: p.color, letterSpacing: '0.15em' }}>{p.family}</div>
                <h3 className="card-title mb-0.5">{p.name}</h3>
                <p className="body-sm italic mb-2">{p.lat}</p>
                <div className="flex flex-wrap gap-1">
                  <Tag label={p.nutrient} color={p.color} />
                  {p.glashaus && <Tag label="Glashaus" color={CYAN} />}
                  {p.balcony && <Tag label="Balkon" color={GREEN} />}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function KalenderLanding({ onNavigate }: { onNavigate: (p: WikiPage) => void }) {
  const seasonGroups = [
    { label: 'Frühling', months: [3, 4, 5], color: GREEN },
    { label: 'Sommer',   months: [6, 7, 8], color: AMBER },
    { label: 'Herbst',   months: [9, 10, 11], color: RED },
    { label: 'Winter',   months: [12, 1, 2], color: CYAN },
  ];

  return (
    <div>
      <Breadcrumb items={[
        { label: 'Wiki', onClick: () => onNavigate({ view: 'home' }) },
        { label: 'Monatskalender', color: CYAN },
      ]} />
      <SectionHeader tag="Monatskalender" title="12 Monate im Garten" subtitle="Monat für Monat: was wann getan wird. Klimadaten von GeoSphere Austria (ZAMG), Anbauempfehlungen von LK NÖ, HBLFA Schönbrunn, Heistinger/Arche Noah." />

      {seasonGroups.map(group => (
        <div key={group.label} className="mb-5">
          <h3 className="font-sans text-[1.125rem] font-bold mb-[10px] flex items-center gap-2" style={{ color: group.color }}>
            <span className="w-[10px] h-[10px] rounded-full shrink-0" style={{ background: group.color }} />
            {group.label}
          </h3>
          <div className="grid gap-[10px]" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))' }}>
            {group.months.map(m => {
              const month = MONTHLY_CALENDAR.find(x => x.month === m)!;
              const taskCount = month.sowIndoor.length + month.sowOutdoor.length + month.plant.length + month.harvest.length + month.care.length + month.glashaus.length;
              return (
                <button
                  key={m}
                  onClick={() => onNavigate({ view: 'monat', month: m })}
                  className="card p-[18px] cursor-pointer text-left transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center font-sans text-[1.125rem] font-extrabold shrink-0"
                      style={{ background: group.color + '18', border: `1px solid ${group.color}33`, color: group.color }}
                    >
                      {month.month}
                    </div>
                    <div className="flex-1">
                      <h4 className="card-title">{month.name}</h4>
                      <div className="label mt-0.5" style={{ color: group.color }}>{month.phase}</div>
                    </div>
                    <div className="text-right">
                      <div className="mono text-amber">{month.avgTempHigh}°C</div>
                      <div className="mono-sm">{taskCount} Aufgaben</div>
                    </div>
                  </div>
                  <p className="body-sm italic mt-2 text-primary">{month.motto}</p>
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

export function SoilInfographic() {
  const cardBg = '#132234';
  const textFill = '#EDE6D6';
  const dimFill = '#1A3050';
  return (
    <div>
      <div className="label label-amber mb-2" style={{ letterSpacing: '0.2em' }}>Infografik 01</div>
      <h3 className="font-sans text-[1.375rem] text-text mb-4 font-semibold">Was ist Boden?</h3>
      <svg viewBox="0 0 400 240" className="w-full max-w-[480px] block">
        <rect x="0" y="0" width="400" height="60" fill={cardBg} opacity="0.5"/>
        <circle cx="60" cy="30" r="12" fill={AMBER}/>
        {[0,30,60,90,120,150,180,210,240,270,300,330].map((angle, i) => (
          <line key={i} x1={60+14*Math.cos(angle*Math.PI/180)} y1={30+14*Math.sin(angle*Math.PI/180)} x2={60+20*Math.cos(angle*Math.PI/180)} y2={30+20*Math.sin(angle*Math.PI/180)} stroke={AMBER} strokeWidth="2" strokeLinecap="round"/>
        ))}
        <text x="90" y="25" fontSize="10" fill={CYAN} fontFamily="monospace">Luft & Licht</text>
        <rect x="0" y="58" width="400" height="12" fill={GREEN} opacity="0.6"/>
        <text x="205" y="68" fontSize="8" fill={dimFill} fontFamily="monospace" textAnchor="middle">RASEN / MULCH</text>
        <rect x="0" y="70" width="400" height="80" fill={textFill}/>
        <text x="182" y="108" fontSize="10" fill={textFill} fontFamily="monospace" fontWeight="bold">MUTTERBODEN</text>
        <text x="182" y="119" fontSize="9" fill={dimFill} fontFamily="monospace">20-30 cm Humus Lebewesen</text>
        <rect x="0" y="150" width="400" height="55" fill={RED}/>
        <text x="182" y="173" fontSize="10" fill={textFill} fontFamily="monospace" fontWeight="bold">UNTERBODEN</text>
        <text x="182" y="184" fontSize="9" fill={dimFill} fontFamily="monospace">Mineralien, kompakt</text>
        <rect x="0" y="205" width="400" height="35" fill="#93c5fd99"/>
        <text x="200" y="225" fontSize="9" fill={textFill} fontFamily="monospace" textAnchor="middle">UNTERGRUND / GESTEIN</text>
      </svg>
      <div className="flex flex-col gap-1.5 mt-3">
        {[
          { label: 'Mutterboden', text: 'Dein Schatz: dunkel, krumelig, durchwurzelt. Darin leben Milliarden Bakterien, Pilze, Regenwurmer.' },
          { label: 'pH-Wert 6,0-7,0', text: 'Ideal für Gemüse. Tendiert zu leicht kalkhaltig - gut für Tomate + Paprika.' },
          { label: 'Was hilft', text: 'Kompost, Mulch, Grundungung, Regenwurmer respektieren.' },
          { label: 'Was schadet', text: 'Tiefes Umgraben (zerstort Schichten) + Pestizide (totet Nutzlinge).' },
        ].map((p, i) => (
          <p key={i} className="body"><strong>{p.label}:</strong> {p.text}</p>
        ))}
      </div>
    </div>
  );
}

// ── Article Detail Page ────────────────────────────────────────────────────
function ArticleDetailPage({ article, onNavigate }: { article: WikiArticle; onNavigate: (p: WikiPage) => void }) {
  const related = (article.relatedArticles || []).map(id => WIKI_ARTICLE_MAP[id]).filter(Boolean);
  return (
    <div>
      <Breadcrumb items={[
        { label: 'Wiki', onClick: () => onNavigate({ view: 'home' }) },
        { label: 'Grundlagen', onClick: () => onNavigate({ view: 'grundlagen' }) },
        { label: article.title, color: article.color },
      ]} />
      <SectionHeader tag="Wissen" title={article.title} subtitle={article.subtitle} />

      {ARTICLE_IMAGES[article.id] && (
        <div className="rounded-xl overflow-hidden mb-6" style={{ height: 280 }}>
          <img
            src={ARTICLE_IMAGES[article.id]}
            alt={article.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%' }}
          />
        </div>
      )}

      <div className="flex flex-col gap-[10px]">
        {article.sections.map((section, i) => (
          <Collapsible key={i} title={section.title} subtitle={section.content.substring(0, 80) + '...'} color={article.color} defaultOpen={i < 2}>
            <div className="mt-3">
              <p className="body mb-[14px] leading-[1.8]">{section.content}</p>

              {section.details && section.details.length > 0 && (
                <div className="surface rounded-xl p-4 mb-3">
                  {section.details.map((detail, j) => (
                    <div key={j} className="flex gap-2 mb-2 items-start">
                      <span className="dot-bullet" style={{ background: article.color }} />
                      <p className="body">{detail}</p>
                    </div>
                  ))}
                </div>
              )}

              {section.tip && (
                <div className="info-box info-box-green rounded-[10px] p-[14px] mb-[10px]">
                  <div className="label label-green mb-1">Praxis-Tipp</div>
                  <p className="body">{section.tip}</p>
                </div>
              )}

              {section.warning && (
                <div className="info-box info-box-red rounded-[10px] p-[14px] mb-[10px]">
                  <div className="label label-red mb-1">Achtung</div>
                  <p className="body">{section.warning}</p>
                </div>
              )}

              {section.sourceNote && (
                <p className="source-note">{section.sourceNote}</p>
              )}
            </div>
          </Collapsible>
        ))}
      </div>

      {related.length > 0 && (
        <div className="mt-6">
          <div className="section-overline text-water">Weiterlesen</div>
          <div className="grid gap-2" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))' }}>
            {related.map(ra => (
              <button
                key={ra.id}
                onClick={() => onNavigate({ view: 'artikel', id: ra.id })}
                className="card p-[14px] cursor-pointer text-left"
              >
                <div className="w-7 h-7 rounded-lg mb-2" style={{ background: ra.color + '18' }} />
                <h4 className="card-title mb-1">{ra.title}</h4>
                <p className="body-sm">{ra.subtitle.substring(0, 60)}...</p>
              </button>
            ))}
          </div>
        </div>
      )}
      <SourceLine ids={article.sourceIds} />
    </div>
  );
}

function GrundlagenPage({ onNavigate }: { onNavigate: (p: WikiPage) => void }) {
  return (
    <div>
      <Breadcrumb items={[
        { label: 'Wiki', onClick: () => onNavigate({ view: 'home' }) },
        { label: 'Grundlagen', color: GREEN },
      ]} />
      <SectionHeader tag="Grundlagen" title="Alles was du wissen musst" subtitle="Boden, Wasser, Kompost, Düngung, Pflanzenschutz, Anzucht und Saatgut. Jeder Artikel ist ein vollständiger Leitfaden mit wissenschaftlichen Quellen." />

      <div className="grid gap-3" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
        {WIKI_ARTICLES.map(article => {
          const img = ARTICLE_IMAGES[article.id];
          return (
            <button
              key={article.id}
              onClick={() => onNavigate({ view: 'artikel', id: article.id })}
              className="card cursor-pointer text-left transition-colors overflow-hidden"
              style={{ padding: 0 }}
            >
              {img && (
                <div style={{ height: 110, overflow: 'hidden', position: 'relative' }}>
                  <img src={img} alt={article.title} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 25%' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 40%, var(--c-card) 100%)' }} />
                  <span className="mono-sm px-2 py-0.5 rounded-lg" style={{ position: 'absolute', top: 8, right: 8, color: article.color, background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(4px)' }}>
                    {article.sections.length} Kapitel
                  </span>
                </div>
              )}
              <div style={{ padding: '14px 18px 16px' }}>
                {!img && (
                  <div className="flex items-center justify-between mb-[10px]">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: article.color + '18' }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={article.color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/>
                      </svg>
                    </div>
                    <span className="mono-sm px-2 py-0.5 rounded-lg" style={{ color: article.color, background: article.color + '12' }}>
                      {article.sections.length} Kapitel
                    </span>
                  </div>
                )}
                <h3 className="card-title mb-1 text-[1.125rem]">{article.title}</h3>
                <p className="body-sm mb-[10px]">{article.subtitle}</p>
                <div className="flex flex-wrap gap-1">
                  {article.sections.slice(0, 3).map((s, i) => (
                    <span key={i} className="mono-sm px-1.5 py-0.5 rounded-md bg-[rgba(255,255,255,0.04)]">{s.title}</span>
                  ))}
                  {article.sections.length > 3 && <span className="mono-sm">+{article.sections.length - 3}</span>}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function GlashausPage({ onNavigate }: { onNavigate: (p: WikiPage) => void }) {
  return (
    <div>
      <Breadcrumb items={[
        { label: 'Wiki', onClick: () => onNavigate({ view: 'home' }) },
        { label: 'Glashaus', color: CYAN },
      ]} />
      <SectionHeader tag="Glashaus-Leitfaden" title={GLASHAUS_GUIDE.title} subtitle={GLASHAUS_GUIDE.subtitle} />

      <div className="flex flex-col gap-[10px]">
        <Collapsible title="Warum ein Glashaus?" subtitle="Fakten und Forschungsergebnisse" color={CYAN} defaultOpen>
          <div className="mt-3">
            {GLASHAUS_GUIDE.keyFacts.map((fact, i) => (
              <div key={i} className="flex gap-2 mb-2">
                <span className="dot-bullet" style={{ background: CYAN }} />
                <p className="body">{fact}</p>
              </div>
            ))}
            <p className="source-note">{GLASHAUS_GUIDE.sourceNote}</p>
          </div>
        </Collapsible>

        <Collapsible title="Glashaus-Kulturen" subtitle={`${GLASHAUS_GUIDE.plants.length} Pflanzen mit Saison und Vorteilen`} color={GREEN} defaultOpen>
          <div className="grid gap-2 mt-3" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))' }}>
            {GLASHAUS_GUIDE.plants.map((p, i) => (
              <button
                key={i}
                onClick={() => onNavigate({ view: 'pflanze', id: p.plantId })}
                className="surface p-3 cursor-pointer text-left"
              >
                <div className="flex justify-between items-center mb-1">
                  <h4 className="card-title">{p.name}</h4>
                  <Tag label={`min. ${p.tempMin} C`} color={AMBER} />
                </div>
                <div className="label label-cyan mb-1">{p.season}</div>
                <p className="body-sm text-primary">{p.advantage}</p>
              </button>
            ))}
          </div>
        </Collapsible>

        <Collapsible title="Wintergemüse ohne Heizung" subtitle={`${GLASHAUS_GUIDE.winterCrops.length} Kulturen für November bis März`} color={CYAN}>
          <div className="grid gap-2 mt-3" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))' }}>
            {GLASHAUS_GUIDE.winterCrops.map((crop, i) => (
              <div key={i} className="info-box info-box-cyan rounded-[10px] p-3">
                <h4 className="card-title mb-1 text-water">{crop.name}</h4>
                <p className="body">{crop.info}</p>
              </div>
            ))}
          </div>
        </Collapsible>

        <Collapsible title="Glashaus aufbauen" subtitle="6 Tipps für Planung und Bau" color={AMBER}>
          <div className="mt-3">
            {GLASHAUS_GUIDE.buildingTips.map((tip, i) => (
              <div key={i} className="flex gap-[10px] mb-[10px]">
                <div className="step-badge">{i + 1}</div>
                <p className="body pt-1">{tip}</p>
              </div>
            ))}
          </div>
        </Collapsible>
      </div>
    </div>
  );
}

function PrinzipienPage({ onNavigate }: { onNavigate: (p: WikiPage) => void }) {
  return (
    <div>
      <Breadcrumb items={[
        { label: 'Wiki', onClick: () => onNavigate({ view: 'home' }) },
        { label: 'Prinzipien', color: RED },
      ]} />
      <SectionHeader tag="Garten-Prinzipien" title="Die Regeln des Gemüseanbaus" subtitle="Fruchtfolge, Mischkultur, Staffelaussaat: die Grundlagen, die alles einfacher machen." />
      <div className="flex flex-col gap-[10px]">
        {WIKI_PRINCIPLES.map(p => (
          <Collapsible key={p.id} title={p.title} subtitle={p.summary} color={p.color}>
            <div className="mt-3">
              <p className="body mb-[14px] leading-[1.8]">{p.text}</p>
              <div className="rounded-[10px] p-3 flex gap-[10px]" style={{ background: p.color + '12', border: `1px solid ${p.color}33` }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={p.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5">
                  <circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
                </svg>
                <p className="body font-semibold">{p.rule}</p>
              </div>
            </div>
          </Collapsible>
        ))}
      </div>
    </div>
  );
}

function WerkzeugPage({ onNavigate }: { onNavigate: (p: WikiPage) => void }) {
  const layerColors = [AMBER, 'var(--c-text)', 'var(--c-text)', 'var(--c-text)'];
  return (
    <div>
      <Breadcrumb items={[
        { label: 'Wiki', onClick: () => onNavigate({ view: 'home' }) },
        { label: 'Werkzeug', color: 'var(--c-text)' },
      ]} />
      <SectionHeader tag="Werkzeug" title="Die Grundausstattung" subtitle="Alles was du brauchst, um 30 m2 Garten erfolgreich zu bewirtschaften." />

      <div className="flex flex-col gap-[10px]">
        <Collapsible title={`${WIKI_TOOLS.length} Werkzeuge`} subtitle="Kein Schnickschnack, kein Überfluss" color={AMBER} defaultOpen>
          <div className="grid gap-2 mt-3" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))' }}>
            {WIKI_TOOLS.map((tool, i) => (
              <div key={i} className="surface p-[10px] px-[14px] flex gap-[10px]">
                <div className="label label-amber font-bold shrink-0">{String(i+1).padStart(2,'0')}</div>
                <div>
                  <div className="body font-semibold">{tool.name}</div>
                  <div className="body-sm text-primary">{tool.use}</div>
                </div>
              </div>
            ))}
          </div>
        </Collapsible>

        <Collapsible title="Hochbeet aufbauen" subtitle="Schicht für Schicht" color={GREEN}>
          <div className="flex flex-col mt-3">
            {[
              { layer: '1. Grobmaterial', desc: 'Äste, Holzabfälle, Zapfen (15–20 cm) · verrottet langsam, gibt Wärme frei', color: AMBER },
              { layer: '2. Grobkompost',  desc: 'Halbverrottetes Material, Stroh, Rasenschnitt (10-15 cm)', color: 'var(--c-text)' },
              { layer: '3. Reifer Kompost', desc: 'Vollständig verrottet, dunkel und krümelig (10 cm)', color: 'var(--c-text)' },
              { layer: '4. Gartenerde + Kompost', desc: 'Mischung 2:1, die Pflanzschicht (20–25 cm) · hier wächst alles', color: 'var(--c-text)' },
            ].map((l, i) => (
              <div
                key={i}
                className="p-3 px-4"
                style={{
                  background: layerColors[i],
                  borderRadius: i === 0 ? '10px 10px 0 0' : i === 3 ? '0 0 10px 10px' : 0,
                }}
              >
                <div className="label opacity-70 mb-0.5">{l.layer}</div>
                <p className="body">{l.desc}</p>
              </div>
            ))}
          </div>
        </Collapsible>
      </div>
    </div>
  );
}

function QuellenPage({ onNavigate }: { onNavigate: (p: WikiPage) => void }) {
  const byType = (type: string) => WIKI_SOURCES.filter(s => s.type === type);
  return (
    <div>
      <Breadcrumb items={[
        { label: 'Wiki', onClick: () => onNavigate({ view: 'home' }) },
        { label: 'Quellen', color: 'var(--c-sub)' },
      ]} />
      <SectionHeader tag="Quellen & Literatur" title="Wissenschaftliche Referenzen" subtitle="Alle Informationen basieren auf institutionellen und wissenschaftlichen Quellen aus Österreich und Mitteleuropa." />

      {[
        { label: 'Institutionen & Forschung', type: 'institution' },
        { label: 'Standardwerke', type: 'book' },
        { label: 'Online-Quellen', type: 'website' },
      ].map(({ label, type }) => (
        <Collapsible key={type} title={label} subtitle={`${byType(type).length} Quellen`} color={CYAN} defaultOpen>
          <div className="flex flex-col gap-2 mt-3">
            {byType(type).map(src => (
              <div key={src.id} className="surface p-3 px-4">
                <h4 className="card-title mb-0">{src.title}</h4>
                {src.author && <div className="body-sm text-water mt-0.5">{src.author}{src.year ? ` (${src.year})` : ''}</div>}
                {src.note && <p className="body-sm text-primary mt-1">{src.note}</p>}
                {src.url && <div className="mono-sm mt-1 opacity-70">{src.url.replace('https://','').replace('http://','')}</div>}
              </div>
            ))}
          </div>
        </Collapsible>
      ))}
    </div>
  );
}

function RegionenPage({ onNavigate }: { onNavigate: (p: WikiPage) => void }) {
  return (
    <div>
      <Breadcrumb items={[
        { label: 'Wiki', onClick: () => onNavigate({ view: 'home' }) },
        { label: 'Klimaregionen', color: '#15803d' },
      ]} />
      <SectionHeader tag="Klimaregionen Österreichs" title="7 Anbauregionen, 7 verschiedene Welten" subtitle="Österreich reicht von USDA Zone 5a (Hochalpen) bis 7b (Burgenland/Wien). Was im pannonischen Osten perfekt wächst, scheitert im Waldviertel - und umgekehrt. Alle Klimadaten: GeoSphere Austria, Normalperiode 1991-2020." />

      <div className="flex flex-col gap-3">
        {CLIMATE_REGIONS.map(region => {
          const regionColor = region.id === 'pannonisch-nord' ? AMBER : region.id === 'wien-wienerwald' ? CYAN : '#15803d';
          return (
            <Collapsible
              key={region.id}
              title={region.name}
              subtitle={`USDA ${region.usdaZone} · ${region.annualTempAvg} C · ${region.annualRainfall} mm · ${region.annualSunHours} Sonnenstunden · ${region.growingSeasonDays} frostfreie Tage`}
              color={regionColor}
              defaultOpen={region.id === 'pannonisch-nord'}
            >
              <div className="mt-3">
                <p className="body mb-4" style={{ lineHeight: 1.8 }}>{region.description}</p>

                <div className="stats-grid mb-4">
                  {[
                    { label: 'Juli-Hoch',     value: `${region.julyHighAvg} C`,     color: RED },
                    { label: 'Januar-Tief',   value: `${region.janLowAvg} C`,       color: CYAN },
                    { label: 'Niederschlag',  value: `${region.annualRainfall} mm/J`, color: CYAN },
                    { label: 'Sonnenstunden', value: `${region.annualSunHours} h/J`, color: AMBER },
                    { label: 'Letzter Frost', value: region.lastFrostAvg,           color: CYAN },
                    { label: 'Erster Frost',  value: region.firstFrostAvg,          color: CYAN },
                  ].map((s, i) => (
                    <div key={i} className="surface p-[10px] px-3 rounded-[10px]" style={{ border: `1px solid ${s.color}22` }}>
                      <div className="label mb-0.5" style={{ color: s.color }}>{s.label}</div>
                      <div className="body font-bold">{s.value}</div>
                    </div>
                  ))}
                </div>

                <Collapsible title="Bodentypen" color={AMBER}>
                  <p className="body mt-3">{region.soilTypes}</p>
                </Collapsible>

                <div className="mt-[10px]">
                  <Collapsible title="Vorteile" subtitle={`${region.advantages.length} Standortvorteile`} color={GREEN}>
                    <div className="mt-3">
                      {region.advantages.map((a, i) => (
                        <div key={i} className="flex gap-2 mb-1.5">
                          <span className="dot-bullet" style={{ background: GREEN }} />
                          <p className="body">{a}</p>
                        </div>
                      ))}
                    </div>
                  </Collapsible>
                </div>

                <div className="mt-[10px]">
                  <Collapsible title="Herausforderungen" subtitle={`${region.challenges.length} Punkte`} color={RED}>
                    <div className="mt-3">
                      {region.challenges.map((c, i) => (
                        <div key={i} className="flex gap-2 mb-1.5">
                          <span className="dot-bullet" style={{ background: RED }} />
                          <p className="body">{c}</p>
                        </div>
                      ))}
                    </div>
                  </Collapsible>
                </div>

                <div className="flex flex-wrap gap-1.5 mt-3">
                  <span className="label label-green w-full mb-1">Beste Kulturen</span>
                  {region.bestCrops.map((crop, i) => (
                    <Tag key={i} label={crop} color={GREEN} />
                  ))}
                </div>

                <p className="source-note">{region.sourceNote}</p>
              </div>
            </Collapsible>
          );
        })}
      </div>
    </div>
  );
}

// ── Ertragsrechner CTA (tool lives on the standalone site ernterechner.com) ────
function RechnerCTA({ onNavigate }: { onNavigate: (p: WikiPage) => void }) {
  const ERNTE_URL = 'https://ernterechner.com';
  return (
    <div>
      <Breadcrumb items={[
        { label: 'Wiki', onClick: () => onNavigate({ view: 'home' }) },
        { label: 'Ertragsrechner', color: AMBER },
      ]} />
      <SectionHeader
        tag="Ertragsrechner"
        title="Ertrag berechnen & Beete visualisieren"
        subtitle="Der interaktive Ertragsrechner mit Beetvisualisierung ist ein eigenständiges Werkzeug und lebt auf ernterechner.com. Dort berechnest du aus Fläche, Pflanzenanzahl, kg-Ertrag oder Kalorien alle übrigen Werte und siehst deine Beete als Draufsicht, Höhenprofil und Aussaat-bis-Ernte-Zeitplan."
      />
      <div
        className="rounded-2xl p-6 mt-2 flex flex-col gap-4"
        style={{ background: 'var(--c-card)', border: `1px solid ${AMBER}44` }}
      >
        <div className="flex flex-wrap gap-2">
          {['Ertrag ⇄ Fläche ⇄ Pflanzen ⇄ Kalorien', 'Selbstversorgungs-Faustregel', 'Beet-Draufsicht & Höhenprofil', 'Aussaat-bis-Ernte-Zeitplan', 'PDF / Druck-Plan'].map((t) => (
            <span key={t} className="plant-tag">{t}</span>
          ))}
        </div>
        <a
          href={ERNTE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 self-start rounded-xl px-5 py-3 font-sans font-semibold"
          style={{ background: AMBER, color: '#1a1a2e', textDecoration: 'none' }}
        >
          Ertragsrechner öffnen
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17 17 7M9 7h8v8" />
          </svg>
        </a>
        <div className="font-mono text-xs" style={{ color: 'var(--c-sub)' }}>ernterechner.com</div>
      </div>
    </div>
  );
}

// ── Main WikiView ─────────────────────────────────────────────────────────────
export default function WikiView({ onSelectPlant }: { onSelectPlant?: (id: string) => void }) {
  const [page, setPage] = useState<WikiPage>(() => hashToWikiPage(window.location.hash));
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onHashChange = () => {
      if (window.location.hash.startsWith('#wiki')) setPage(hashToWikiPage(window.location.hash));
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const navigate = useCallback((p: WikiPage) => {
    window.location.hash = wikiPageToHash(p);
    setPage(p);
    // Scroll the panel container (not window) to top
    let el = containerRef.current?.parentElement ?? null;
    while (el && getComputedStyle(el).overflowY !== 'auto') el = el.parentElement;
    if (el) el.scrollTop = 0;
  }, []);

  return (
    <div
      ref={containerRef}
      className="px-6 py-6 min-h-[80vh] mx-auto"
      style={{ maxWidth: page.view === 'rechner' ? 1400 : 1400 }}
    >
      {page.view === 'home'      && <HomePage       onNavigate={navigate} />}
      {page.view === 'grundlagen' && <GrundlagenPage onNavigate={navigate} />}
      {page.view === 'artikel'   && (() => {
        const article = WIKI_ARTICLE_MAP[page.id];
        return article ? <ArticleDetailPage article={article} onNavigate={navigate} /> : <GrundlagenPage onNavigate={navigate} />;
      })()}
      {page.view === 'pflanzen'  && <PflanzenLanding onNavigate={navigate} />}
      {page.view === 'pflanze'   && (() => {
        const plant = WIKI_PLANTS.find(p => p.id === page.id);
        return plant ? <PlantDetailPage plant={plant} onNavigate={navigate} onSelectGrowth={onSelectPlant} /> : <HomePage onNavigate={navigate} />;
      })()}
      {page.view === 'kalender'  && <KalenderLanding onNavigate={navigate} />}
      {page.view === 'monat'     && (() => {
        const month = MONTHLY_CALENDAR.find(m => m.month === page.month);
        return month ? <MonthDetailPage month={month} onNavigate={navigate} /> : <KalenderLanding onNavigate={navigate} />;
      })()}
      {page.view === 'glashaus'  && <GlashausPage    onNavigate={navigate} />}
      {page.view === 'rechner'   && <RechnerCTA onNavigate={navigate} />}
      {page.view === 'regionen'  && <RegionenPage    onNavigate={navigate} />}
      {page.view === 'prinzipien' && <PrinzipienPage  onNavigate={navigate} />}
      {page.view === 'werkzeug'  && <WerkzeugPage    onNavigate={navigate} />}
      {page.view === 'quellen'   && <QuellenPage     onNavigate={navigate} />}
    </div>
  );
}
