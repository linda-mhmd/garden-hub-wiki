import { WIKI_PLANTS } from './wiki';

// Build name→id map from WIKI_PLANTS (all names + aliases)
const BUILT: Record<string, string> = {};

for (const p of WIKI_PLANTS) {
  // Primary name  -  handle "Paradeiser / Tomate" style
  const parts = p.name.split(/\s*[/·]\s*/);
  for (const part of parts) {
    const key = part.trim().toLowerCase();
    if (key) BUILT[key] = p.id;
  }
  // Alt name
  if (p.nameAlt) {
    BUILT[p.nameAlt.toLowerCase()] = p.id;
  }
}

// Manual aliases not covered by primary names
const ALIASES: Record<string, string> = {
  // German plural/colloquial forms
  'tomaten': 'tomate', 'paradeiser': 'tomate',
  'karotten': 'karotte', 'möhre': 'karotte', 'möhren': 'karotte',
  'zwiebeln': 'zwiebel', 'erdapfel': 'kartoffel',
  'buschbohne': 'bohne', 'buschbohnen': 'bohne', 'stangenbohne': 'bohne', 'bohnen': 'bohne',
  'erbsen': 'erbse', 'zuckererbse': 'erbse',
  'erdbeeren': 'erdbeere',
  'kohlarten': 'kohl', 'weißkraut': 'kohl', 'kraut': 'kohl',
  'knollenfenchel': 'fenchel',
  'knollensellerie': 'sellerie',
  'lauch': 'porree', 'stangensellerie': 'sellerie',
  'studentenblume': 'tagetes', 'samtrosen': 'tagetes',
  'kapuzinerkresse': 'kapuzinerkresse',
  'minze': 'minze',
  'physalis': 'physalis', 'andenbeere': 'physalis',
  'aubergine': 'melanzani',
  'radieschen': 'radieschen',
  'schnittlauch': 'schnittlauch',
  'ribisel': 'ribisel', 'johannisbeere': 'ribisel',
  'himbeere': 'himbeere',
  'feldsalat': 'feldsalat', 'vogerlsalat': 'feldsalat',
  'grünkohl': 'gruenkohl', 'palmkohl': 'gruenkohl',
  'blumenkohl': 'karfiol',
  'topinambur': 'topinambur',
  'liebstöckel': 'liebstoeckel', 'maggikraut': 'liebstoeckel',
  'mexikanische minigurke': 'minigurke',
  'mais': 'mais', 'zuckermais': 'mais',
};

export const PLANT_NAME_TO_ID: Record<string, string> = { ...BUILT, ...ALIASES };

export function lookupPlantId(name: string): string | null {
  return PLANT_NAME_TO_ID[name.toLowerCase()] ?? null;
}

export function getPlantById(id: string) {
  return WIKI_PLANTS.find(p => p.id === id) ?? null;
}
