// English translations of WIKI_PRINCIPLES, WIKI_TOOLS, WIKI_NUTRIENT_CLASSES and WIKI_SOURCES.
// Structure/ids/colors/urls/years are preserved; only human-readable display text is translated.
import type { WikiSource } from '../wiki';

export const WIKI_PRINCIPLES_EN = [
  {
    id: 'fruchtfolge',
    title: 'Crop rotation',
    emoji: '🔄',
    color: '#f59e0b',
    summary: 'Never grow the same plant family twice in a row in the same bed.',
    text: 'Four rotation beds in the production yard. Year 1: heavy feeders (tomato, cabbage, pumpkin). Year 2: moderate feeders (carrot, lettuce, chard). Year 3: light feeders (beans, peas, herbs). Year 4: green manure or a rest. Why? Pests and pathogens in the soil die off, and the nutrients recover.',
    rule: 'Simple rule: whatever grows in one bed moves on one place the next year. Clockwise.',
  },
  {
    id: 'mischkultur',
    title: 'Companion planting',
    emoji: '🌿',
    color: '#111827',
    summary: 'Certain plants protect one another – the "Three Sisters" being the classic example.',
    text: 'Tomato + basil · carrot + onion · pumpkin + sweetcorn + bean (the Three Sisters principle) · lettuce + radish. Marigolds and nasturtiums along the bed edge to keep pests away. The idea: every plant gives something (shade, nitrogen, scent) and takes something (space, nutrients). Combined correctly, you need almost no pesticides. **Corner-rebuild planting plan (2026-05): good with tomatoes/bell peppers → basil, parsley, marigold, nasturtium, onion, garlic, carrots, lettuce. Avoid → fennel, peas, brassicas, potatoes, sweetcorn.** Path planting (tread-resistant + Pannonian): cushion thyme, Roman chamomile, low sedum. Bed edge and transition to the hedge (pollinator-friendly + robust): lavender, sage, oregano, marigold, pot marigold.',
    rule: 'Simple rule: what goes together in the kitchen often goes together in the bed too (tomato + basil!).',
  },
  {
    id: 'klima',
    title: 'Pannonian climate',
    emoji: '☀️',
    color: '#1e3a5f',
    summary: 'Hot, sunny, dry – a gift for vegetables, but water is scarce.',
    text: '~300 sunny days a year. Ideal for tomatoes, bell peppers, eggplants and pumpkins – crops that otherwise grow this well only around the Mediterranean. The bottleneck is water: drip irrigation, mulch and a rainwater cistern are mandatory, not optional.',
    rule: 'Simple rule: water in the morning, mulch deeply (5–8 cm of straw), connect a water butt.',
  },
  {
    id: 'eisheilige',
    title: 'Ice Saints',
    emoji: '🌡️',
    color: '#ef4444',
    summary: '11–15 May: Central Europe\'s traditional last-frost window.',
    text: 'The Ice Saints (Eisheilige) are a Central European weather tradition: the mid-May saints\' days of Mamertus, Pancras, Servatius, Boniface and "Cold Sophie" (11–15 May), when a late cold snap can still bring night frosts near -3 °C after otherwise warm spring weather. In practice it is the region\'s last-frost rule of thumb; if you do not use the term, it is simply your local last frost date. Plant frost-tender crops (tomato, pepper, cucumber, courgette, beans, basil) outdoors only from 16 May, and keep them under fleece before that. It is reliable meteorology, not just folklore. (Dates per the German Weather Service / DWD; see also the US Farmers\' Almanac.)',
    rule: 'Simple rule: no frost-tender vegetables in the ground before 16 May. Full stop.',
  },
  {
    id: 'staffelaussaat',
    title: 'Succession sowing',
    emoji: '📅',
    color: '#06b6d4',
    summary: 'Sow again every 2–3 weeks = always fresh vegetables, never too much at once.',
    text: 'Sow lettuce, radishes, carrots and beans again every 2–3 weeks until August. That way there is a steady supply instead of a glut. The opposite: sow everything at once = three weeks of 20 kg of lettuce, then nothing more.',
    rule: 'Simple rule: every Monday, sow one row of radishes + one row of lettuce. By September, the first home-grown autumn lettuces.',
  },
  {
    id: 'haltbarmachung',
    title: 'Preserving',
    emoji: '🫙',
    color: '#22c55e',
    summary: 'Whatever you cannot eat straight away has to be preserved.',
    text: 'Freezing (fast, gentle on vitamins) · bottling (tomato sauce, letscho, chutneys) · fermenting (kraut, kimchi, beans) · drying (herbs, tomatoes) · pickling in oil/vinegar. The greenhouse of preserving: one big pot + 100 preserving jars + a label printer. Bottling is no chore – it is the real joy of self-sufficiency.',
    rule: 'Simple rule: whatever you cannot eat within 3 days, bottle it or freeze it.',
  },
];

export const WIKI_TOOLS_EN = [
  { name: 'Spade', use: 'Digging, cutting, excavating planting holes' },
  { name: 'Digging fork', use: 'Loosening the soil without turning it (preserves soil structure!)' },
  { name: 'Hand rake', use: 'Preparing the seedbed, raking to a fine crumb' },
  { name: 'Planting stick / dibber', use: 'Holes for young plants, drawing seed drills' },
  { name: 'Hand trowel', use: 'Transplanting, weeding in tight rows' },
  { name: 'Pruning saw', use: 'Woody stems, branches, cutting back fruit trees and shrubs' },
  { name: 'String + pegs', use: 'Drawing straight rows – never underestimate it' },
  { name: 'Watering can 10 L', use: 'Fine rose for seedlings, targeted watering' },
  { name: 'Hose + spray head', use: 'Watering larger areas and raised beds quickly' },
  { name: 'Compost fork', use: 'Turning and spreading compost' },
  { name: 'Fleece / crop protection', use: 'Frost and insect protection for cabbage and carrots' },
  { name: 'Knee pads / board', use: 'Knee protection – after two hours of weeding you will be grateful' },
];

export const WIKI_NUTRIENT_CLASSES_EN = [
  {
    label: 'Heavy feeder',
    color: '#f59e0b',
    desc: 'Need plenty of nutrients – add compost every year',
    examples: 'Tomato, bell pepper, cabbage, pumpkin, courgette, celeriac, chard',
  },
  {
    label: 'Moderate feeder',
    color: '#1e3a5f',
    desc: 'Average needs – little feeding required',
    examples: 'Carrot, beetroot, lettuce, cucumber, radish, spinach',
  },
  {
    label: 'Light feeder',
    color: '#22c55e',
    desc: 'Need hardly any nutrients – cope even in poor soils',
    examples: 'Beans, peas, lentils, herbs (perennial)',
  },
  {
    label: 'Green manure',
    color: '#111827',
    desc: 'No harvest goal – the soil is actively built up and restored',
    examples: 'Phacelia, mustard, clover, lupin, pot marigold',
  },
];

export const WIKI_SOURCES_EN: WikiSource[] = [
  { id: 'ages', title: 'Österreichische Agentur für Gesundheit und Ernährungssicherheit', type: 'institution', url: 'https://www.ages.at', note: 'Plant protection, variety lists, soil analysis' },
  { id: 'lk-noe', title: 'Landwirtschaftskammer Niederösterreich - Gemüsebau', type: 'institution', url: 'https://noe.lko.at', note: 'Sowing calendar, plant-protection warnings, variety recommendations' },
  { id: 'lk-bgld', title: 'Landwirtschaftskammer Burgenland', type: 'institution', url: 'https://bgld.lko.at', note: 'Regional variety recommendations, viticulture climate data' },
  { id: 'fibl', title: 'Forschungsinstitut für biologischen Landbau (FiBL)', type: 'institution', url: 'https://www.fibl.org', note: 'Organic growing methods, companion-planting tables' },
  { id: 'zamg', title: 'GeoSphere Austria (ehem. ZAMG) - Klimadaten Österreich', type: 'institution', url: 'https://www.geosphere.at', note: 'Climate zones, frost data, rainfall, temperature trends' },
  { id: 'boku', title: 'BOKU Wien - Institut für Gartenbau', type: 'institution', url: 'https://boku.ac.at', note: 'Research on vegetable growing, soil science and plant breeding' },
  { id: 'arche-noah', title: 'Arche Noah - Gesellschaft für die Erhaltung der Kulturpflanzenvielfalt', type: 'institution', url: 'https://www.arche-noah.at', note: 'Open-pollinated varieties, rarities, variety conservation' },
  { id: 'bio-austria', title: 'Bio Austria - Handbuch Biogemüsebau', type: 'institution', url: 'https://www.bio-austria.at', note: 'Standards for organic growing in Austria' },
  { id: 'heistinger', title: 'Handbuch Bio-Gemüse', author: 'Andrea Heistinger / Arche Noah', year: 2014, type: 'book', note: 'The standard work on organic vegetable growing in Central Europe, 600+ pages' },
  { id: 'kreuter', title: 'Der Biogarten', author: 'Marie-Luise Kreuter', year: 2019, type: 'book', note: 'A classic since 1981, with comprehensive companion-planting tables' },
  { id: 'palme', title: 'Gemüse und Kräuter im Hausgarten', author: 'Wolfgang Palme (HBLFA Schönbrunn)', year: 2020, type: 'book', note: 'Austria-specific, winter-vegetable pioneer, HBLFA trial results' },
  { id: 'palme-winter', title: 'Ernte mich im Winter', author: 'Wolfgang Palme', year: 2019, type: 'book', note: 'Winter-growing research from HBLFA Schönbrunn, for the Central European climate' },
  { id: 'rhs', title: 'Royal Horticultural Society - Plant Database', type: 'website', url: 'https://www.rhs.org.uk/plants', note: 'Scientific plant data, hardiness ratings' },
  { id: 'wikimedia', title: 'Wikimedia Commons', type: 'website', url: 'https://commons.wikimedia.org', note: 'Free plant images (CC-BY-SA / public domain)' },
  { id: 'reinsaat', title: 'ReinSaat KG - Samenfestes Bio-Saatgut', type: 'institution', url: 'https://www.reinsaat.at', note: '700+ open-pollinated varieties in organic and Demeter quality, a family business in St. Leonhard/Hornerwald (Lower Austria). Since 1998.' },
  { id: 'samen-maier', title: 'Samen Maier - Bio-Saatgut', type: 'institution', url: 'https://www.samen-maier.at', note: 'Austrian organic seed shop, with a broad range of vegetables, herbs and flowers.' },
  { id: 'warndienst', title: 'Pflanzenschutz-Warndienst (AGES + Landwirtschaftskammern)', type: 'website', url: 'https://warndienst.at', note: 'Up-to-date pest and disease warnings for all federal provinces. A free service.' },
  { id: 'dowding', title: 'No Dig Gardening', author: 'Charles Dowding', year: 2022, type: 'book', note: 'A 10-year comparison of dig vs. no-dig: the same yield, 50% less work, and better soil biology with no-dig.' },
  { id: 'holzer', title: 'Der Agrar-Rebell', author: 'Sepp Holzer', year: 2002, type: 'book', note: 'Austrian permaculture pioneer. Mountain farming at 1,500 m altitude, Lungau (Salzburg).' },
];
