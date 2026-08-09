export interface GrowthStage {
  week: number;
  label: string;
  heightCm: number;
  spreadCm: number;
  rootDepthCm: number;
  rootSpreadCm: number;
  tasks: string[];
  watering: 'niedrig' | 'mittel' | 'hoch';
  note?: string;
  canHarvest?: boolean;
}

export interface PlantGrowthData {
  plantId: string;
  totalWeeksToHarvest: number;
  indoorWeeks: number;
  isClimber: boolean;
  rootType: 'fibrous' | 'taproot' | 'spreading';
  plantColor: string;
  fruitColor?: string;
  stemColor: string;
  leafColor: string;
  stages: GrowthStage[];
}

export const PLANT_GROWTH: Record<string, PlantGrowthData> = {
  tomate: {
    plantId: 'tomate', totalWeeksToHarvest: 18, indoorWeeks: 10,
    isClimber: true, rootType: 'fibrous',
    plantColor: '#f59e0b', fruitColor: '#f59e0b', stemColor: '#111827', leafColor: '#22c55e',
    stages: [
      { week: 0, label: 'Jungpflanze', heightCm: 10, spreadCm: 8, rootDepthCm: 6, rootSpreadCm: 8,
        tasks: ['Stab (mind. 1,5 m) sofort einsetzen', 'Locker anbinden', 'Täglich gießen'], watering: 'mittel' },
      { week: 2, label: 'Einwachsen', heightCm: 22, spreadCm: 16, rootDepthCm: 12, rootSpreadCm: 16,
        tasks: ['Ersten Geiztrieb in der Blattachsel entfernen', 'Leicht mit Kompost mulchen'], watering: 'mittel' },
      { week: 4, label: 'Wachstumsphase', heightCm: 45, spreadCm: 28, rootDepthCm: 18, rootSpreadCm: 25,
        tasks: ['Wöchentlich ausgeizen (Seitentriebe im Winkel)', 'Mit Brennnesseljauche düngen (1:10)', 'Neu anbinden'], watering: 'hoch' },
      { week: 7, label: 'Blüte', heightCm: 80, spreadCm: 38, rootDepthCm: 26, rootSpreadCm: 35,
        tasks: ['Blütentrauben leicht schütteln (Bestäubung)', 'Untere Blätter entfernen (Luftzirkulation)', 'Mulchen 5 cm Stroh'], watering: 'hoch',
        note: 'Nie auf Blätter gießen - Braunfäule-Risiko!' },
      { week: 10, label: 'Fruchtansatz', heightCm: 105, spreadCm: 44, rootDepthCm: 31, rootSpreadCm: 42,
        tasks: ['Früchte werden sichtbar - Geduld!', 'Jeden 7.–10. Tag ausgeizen', 'Wöchentlich düngen'], watering: 'hoch' },
      { week: 14, label: 'Reifezeit', heightCm: 130, spreadCm: 48, rootDepthCm: 34, rootSpreadCm: 46,
        tasks: ['Erste rote Tomaten ernten', 'Triebspitze kappen (5.–6. Rispe)', 'Mulch auffrischen'], watering: 'hoch', canHarvest: true },
      { week: 18, label: 'Voller Ertrag', heightCm: 145, spreadCm: 52, rootDepthCm: 36, rootSpreadCm: 48,
        tasks: ['Täglich ernten', 'Grüne Früchte bei Frost ins Haus (reifen nach)', 'Braunfäule-Kontrolle'], watering: 'hoch', canHarvest: true },
    ],
  },

  gurke: {
    plantId: 'gurke', totalWeeksToHarvest: 9, indoorWeeks: 4,
    isClimber: true, rootType: 'spreading',
    plantColor: '#22c55e', fruitColor: '#111827', stemColor: '#111827', leafColor: '#60a5fa',
    stages: [
      { week: 0, label: 'Jungpflanze', heightCm: 8, spreadCm: 12, rootDepthCm: 8, rootSpreadCm: 12,
        tasks: ['Rankgerüst oder Schnur aufspannen', 'NUR warmes Wasser gießen (mind. handwarm!)', 'Vor Wind schützen'], watering: 'mittel' },
      { week: 2, label: 'Erste Ranken', heightCm: 20, spreadCm: 25, rootDepthCm: 14, rootSpreadCm: 22,
        tasks: ['Hauptranke nach oben führen', 'Seitentriebe bei Schlangengurken entfernen', 'Täglich Blätter kontrollieren'], watering: 'hoch' },
      { week: 4, label: 'Blüte', heightCm: 45, spreadCm: 40, rootDepthCm: 20, rootSpreadCm: 32,
        tasks: ['Erste gelbe Blüten erscheinen', 'Nie kalt gießen - bitter!', 'Tägliche Kontrolle auf Schädlinge'], watering: 'hoch',
        note: 'Kaltes Wasser = bittere Gurken. Immer handwarm gießen.' },
      { week: 6, label: 'Erste Früchte', heightCm: 70, spreadCm: 50, rootDepthCm: 25, rootSpreadCm: 40,
        tasks: ['Kleine Gurken sichtbar', 'Täglich ernten wenn 12–18 cm', 'Regelmäßig düngen'], watering: 'hoch' },
      { week: 9, label: 'Voller Ertrag', heightCm: 100, spreadCm: 60, rootDepthCm: 28, rootSpreadCm: 48,
        tasks: ['Täglich ernten (überreife = bitter)', 'Kein Aushungern - sofort ernten', 'Mehltau im Auge behalten'], watering: 'hoch', canHarvest: true },
    ],
  },

  melanzani: {
    plantId: 'melanzani', totalWeeksToHarvest: 16, indoorWeeks: 12,
    isClimber: false, rootType: 'fibrous',
    plantColor: '#f59e0b', fruitColor: '#ef4444', stemColor: '#111827', leafColor: '#22c55e',
    stages: [
      { week: 0, label: 'Jungpflanze', heightCm: 8, spreadCm: 10, rootDepthCm: 7, rootSpreadCm: 10,
        tasks: ['Windgeschützter warmer Standort', 'Mulchen für warmen Boden', 'Stab einsetzen'], watering: 'mittel' },
      { week: 3, label: 'Wachstumsphase', heightCm: 22, spreadCm: 22, rootDepthCm: 15, rootSpreadCm: 20,
        tasks: ['Erste Blüte (Königsblüte) ausbrechen - mehr Fruchtansatz', 'Wenig düngen! Nicht überdüngen'], watering: 'mittel' },
      { week: 7, label: 'Buschig', heightCm: 40, spreadCm: 38, rootDepthCm: 24, rootSpreadCm: 32,
        tasks: ['Blüten erscheinen', 'Auf Spinnmilben prüfen (Unterseite Blätter)', 'Gleichmäßig gießen'], watering: 'mittel',
        note: 'Melanzani brauchen die meiste Wärme. Unter 15°C stoppen sie.' },
      { week: 12, label: 'Fruchtbildung', heightCm: 55, spreadCm: 48, rootDepthCm: 30, rootSpreadCm: 40,
        tasks: ['Früchte werden sichtbar', 'Regelmäßig anbinden (Früchte werden schwer)', '3–5 Früchte pro Pflanze begrenzen'], watering: 'mittel' },
      { week: 16, label: 'Ernte', heightCm: 62, spreadCm: 55, rootDepthCm: 34, rootSpreadCm: 44,
        tasks: ['Ernten wenn Schale glänzt (NICHT matt!)', 'Matte Schale = überreif', 'Mit Schere ernten, nicht reißen'], watering: 'mittel', canHarvest: true },
    ],
  },

  kuerbis: {
    plantId: 'kuerbis', totalWeeksToHarvest: 18, indoorWeeks: 4,
    isClimber: false, rootType: 'spreading',
    plantColor: '#f59e0b', fruitColor: '#f59e0b', stemColor: '#22c55e', leafColor: '#60a5fa',
    stages: [
      { week: 0, label: 'Keimling', heightCm: 8, spreadCm: 20, rootDepthCm: 8, rootSpreadCm: 25,
        tasks: ['Komposthügel vorbereiten (1 m²)', 'Ranken lenken - nicht über andere Beete', 'Viel Wasser!'], watering: 'hoch' },
      { week: 2, label: 'Rankend', heightCm: 15, spreadCm: 60, rootDepthCm: 15, rootSpreadCm: 60,
        tasks: ['Ranken in gewünschte Richtung lenken', '3 Samen gesät? Schwächste entfernen', 'Mulchen!'], watering: 'hoch' },
      { week: 5, label: 'Stark wachsend', heightCm: 30, spreadCm: 120, rootDepthCm: 22, rootSpreadCm: 90,
        tasks: ['Männliche + weibliche Blüten erscheinen', 'Bei Trockenheit von Hand bestäuben', 'Viel gießen'], watering: 'hoch',
        note: 'Männliche Blüten zuerst - normale Frauen kommen 1–2 Wochen später.' },
      { week: 10, label: 'Fruchtansatz', heightCm: 40, spreadCm: 180, rootDepthCm: 26, rootSpreadCm: 130,
        tasks: ['Früchte sichtbar', 'Bei Hokkaido: 3–5 Früchte pro Pflanze begrenzen', 'Brett unter Frucht legen (kein Schimmel)'], watering: 'hoch' },
      { week: 18, label: 'Ernte', heightCm: 45, spreadCm: 220, rootDepthCm: 28, rootSpreadCm: 160,
        tasks: ['Stiel holzig? Fingernagel keine Delle? → Erntereif!', 'Stiel dran lassen beim Ernten', '2 Wochen kühl nachreifen lassen'], watering: 'mittel', canHarvest: true },
    ],
  },

  karotte: {
    plantId: 'karotte', totalWeeksToHarvest: 16, indoorWeeks: 0,
    isClimber: false, rootType: 'taproot',
    plantColor: '#fbbf24', fruitColor: '#f59e0b', stemColor: '#111827', leafColor: '#22c55e',
    stages: [
      { week: 0, label: 'Keimling', heightCm: 2, spreadCm: 3, rootDepthCm: 2, rootSpreadCm: 2,
        tasks: ['Keimbett IMMER feucht halten', '2–3 Wochen bis Keimung: normal!', 'Nicht austrocknen lassen'], watering: 'mittel',
        note: 'Karotten keimen langsam - Geduld! 2–3 Wochen sind normal.' },
      { week: 4, label: 'Junge Pflanze', heightCm: 10, spreadCm: 8, rootDepthCm: 7, rootSpreadCm: 4,
        tasks: ['Auf 3–5 cm Abstand vereinzeln (wichtig!)', 'Unkraut vorsichtig entfernen', 'Zwiebeln dazwischen pflanzen (Möhrenfliege!)'], watering: 'mittel' },
      { week: 8, label: 'Wachsend', heightCm: 22, spreadCm: 18, rootDepthCm: 15, rootSpreadCm: 6,
        tasks: ['Gleichmäßig gießen (Risse = unregelmäßiges Gießen)', 'Zwiebeln als Schutz kontrollieren'], watering: 'mittel' },
      { week: 12, label: 'Reifend', heightCm: 28, spreadCm: 22, rootDepthCm: 22, rootSpreadCm: 8,
        tasks: ['Boden leicht feuchter halten', 'Erste kleine Karotten probieren', 'Ernte von oben beginnen'], watering: 'mittel' },
      { week: 16, label: 'Ernte', heightCm: 30, spreadCm: 24, rootDepthCm: 27, rootSpreadCm: 8,
        tasks: ['Bei trockenem Boden vorher gießen', 'Mit Grabgabel locker', 'Sofort kühl lagern oder verbrauchen'], watering: 'niedrig', canHarvest: true },
    ],
  },

  salat: {
    plantId: 'salat', totalWeeksToHarvest: 7, indoorWeeks: 3,
    isClimber: false, rootType: 'fibrous',
    plantColor: '#22c55e', fruitColor: undefined, stemColor: '#22c55e', leafColor: '#60a5fa',
    stages: [
      { week: 0, label: 'Jungpflanze', heightCm: 5, spreadCm: 8, rootDepthCm: 4, rootSpreadCm: 8,
        tasks: ['20–25 cm Abstand einhalten', 'Nicht zu tief pflanzen', 'Gleichmäßig feucht halten'], watering: 'mittel' },
      { week: 2, label: 'Wachstumsphase', heightCm: 12, spreadCm: 18, rootDepthCm: 8, rootSpreadCm: 14,
        tasks: ['Alle 2 Wochen neuen Satz säen (Staffelaussaat!)', 'Unkraut entfernen', 'Morgens gießen'], watering: 'mittel' },
      { week: 4, label: 'Kopf bildend', heightCm: 20, spreadCm: 28, rootDepthCm: 11, rootSpreadCm: 18,
        tasks: ['Bei Hitze: Vlies schützt vor Schossen', 'Äußere Blätter erst ernten (Pflückmethode)'], watering: 'mittel',
        note: 'Hitze → Schossen! Salat wird bitter. Im Schatten oder früh morgens ernten.' },
      { week: 7, label: 'Ernte', heightCm: 28, spreadCm: 35, rootDepthCm: 14, rootSpreadCm: 22,
        tasks: ['Ganzen Kopf abschneiden ODER täglich Blätter pflücken', 'Nächsten Satz bereits gesät?', 'Kühl lagern'], watering: 'mittel', canHarvest: true },
    ],
  },

  zucchini: {
    plantId: 'zucchini', totalWeeksToHarvest: 9, indoorWeeks: 4,
    isClimber: false, rootType: 'spreading',
    plantColor: '#22c55e', fruitColor: '#22c55e', stemColor: '#111827', leafColor: '#60a5fa',
    stages: [
      { week: 0, label: 'Jungpflanze', heightCm: 10, spreadCm: 30, rootDepthCm: 10, rootSpreadCm: 30,
        tasks: ['Auf Komposthügel pflanzen', 'Mind. 1 m² Platz einplanen', 'Mulchen (viel Wasser nötig)'], watering: 'hoch' },
      { week: 2, label: 'Einwachsen', heightCm: 20, spreadCm: 55, rootDepthCm: 16, rootSpreadCm: 50,
        tasks: ['Blüten erscheinen früh', 'Wenn leere Blüten → männlich, normal', 'Täglich kontrollieren'], watering: 'hoch' },
      { week: 5, label: 'Fruchtbildung', heightCm: 35, spreadCm: 80, rootDepthCm: 22, rootSpreadCm: 70,
        tasks: ['Erste Zucchini sichtbar', 'Wenn weibliche Blüte + kleine Frucht → Ernte in 3–5 Tagen', 'Früh und oft ernten!'], watering: 'hoch',
        note: 'TÄGLICH ernten wenn 15–20 cm. Sonst wird sie zum Riesenkürbis!' },
      { week: 9, label: 'Voller Ertrag', heightCm: 50, spreadCm: 110, rootDepthCm: 26, rootSpreadCm: 90,
        tasks: ['Täglich ernten (15–20 cm)', 'Mehltau im August normal - untere Blätter entfernen', 'Überschuss: Blüten füllen + frittieren!'], watering: 'hoch', canHarvest: true },
    ],
  },

  paprika: {
    plantId: 'paprika', totalWeeksToHarvest: 20, indoorWeeks: 12,
    isClimber: false, rootType: 'fibrous',
    plantColor: '#fbbf24', fruitColor: '#f59e0b', stemColor: '#111827', leafColor: '#22c55e',
    stages: [
      { week: 0, label: 'Jungpflanze', heightCm: 12, spreadCm: 14, rootDepthCm: 8, rootSpreadCm: 12,
        tasks: ['Windgeschützter Standort', 'Mulchen für Bodenwärme', 'Nicht überdüngen am Anfang!'], watering: 'mittel' },
      { week: 3, label: 'Einwachsen', heightCm: 24, spreadCm: 26, rootDepthCm: 14, rootSpreadCm: 22,
        tasks: ['Königsblüte (erste Blüte) ausbrechen', 'Stab einsetzen', 'Gleichmäßig gießen'], watering: 'mittel' },
      { week: 8, label: 'Blüte + Frucht', heightCm: 45, spreadCm: 44, rootDepthCm: 22, rootSpreadCm: 36,
        tasks: ['Grüne Paprika = unreif (trotzdem essbar)', 'Blüten fallen ab bei Kälte/Trockenheit - normal', 'Schützen bei <12°C'], watering: 'mittel',
        note: 'Grün = unreif, Rot/Gelb = voll reif und süß. Im Burgenland September!' },
      { week: 14, label: 'Reifend', heightCm: 60, spreadCm: 54, rootDepthCm: 28, rootSpreadCm: 44,
        tasks: ['Farbe beginnt zu ändern', 'Für Letscho: bis vollrot warten', 'Kein Frost!'], watering: 'mittel' },
      { week: 20, label: 'Voller Ertrag', heightCm: 70, spreadCm: 60, rootDepthCm: 32, rootSpreadCm: 48,
        tasks: ['Rote/gelbe/orange Paprika ernten', 'Mit Schere nicht reißen', 'Lagerung: kühl, dunkel, 2–3 Wochen'], watering: 'mittel', canHarvest: true },
    ],
  },
};

export function getStageForWeek(data: PlantGrowthData, week: number): GrowthStage {
  const stages = data.stages;
  for (let i = stages.length - 1; i >= 0; i--) {
    if (week >= stages[i].week) return stages[i];
  }
  return stages[0];
}

export function getProgressForWeek(data: PlantGrowthData, week: number): number {
  return Math.min(1, Math.max(0, week / data.totalWeeksToHarvest));
}

// Local storage helpers for plant tracking
export interface PlantRecord {
  plantId: string;
  bedId?: string;
  plantedDate: string;
  location: 'garden' | 'balcony' | 'indoor';
  notes?: string;
  reminders: {
    watering: boolean;
    fertilizing: boolean;
    harvest: boolean;
  };
}

const RECORDS_KEY = 'garden-plant-records-v1';

export function loadPlantRecords(): PlantRecord[] {
  try {
    const raw = localStorage.getItem(RECORDS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch { return []; }
}

export function savePlantRecord(record: PlantRecord): void {
  const records = loadPlantRecords();
  const idx = records.findIndex(r => r.plantId === record.plantId && r.bedId === record.bedId);
  if (idx >= 0) records[idx] = record;
  else records.push(record);
  localStorage.setItem(RECORDS_KEY, JSON.stringify(records));
}

export function getPlantRecord(plantId: string, bedId?: string): PlantRecord | null {
  return loadPlantRecords().find(r => r.plantId === plantId && r.bedId === bedId) ?? null;
}

export function weeksPlanted(plantedDate: string): number {
  const ms = Date.now() - new Date(plantedDate).getTime();
  return Math.max(0, Math.floor(ms / (1000 * 60 * 60 * 24 * 7)));
}
