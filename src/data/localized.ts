// ── Localized data selector ───────────────────────────────────────────────────
// German is the source of truth; English is merged field-by-field over the German
// record by id (or `month`), falling back to German wherever a translation is
// missing. Numbers, ids, colors and image paths stay German-neutral.

import {
  WIKI_PLANTS,
  WIKI_PRINCIPLES,
  WIKI_TOOLS,
  WIKI_SOURCES,
  WIKI_NUTRIENT_CLASSES,
  WIKI_IMAGE_MAP,
} from './wiki';
import {
  MONTHLY_CALENDAR,
  GLASHAUS_GUIDE,
  CLIMATE_REGIONS,
  WIKI_CROSS_LINKS,
} from './wikiExpanded';
import { WIKI_ARTICLES, WIKI_ARTICLE_MAP } from './wikiArticles';
import { PLANT_GROWTH } from './growth';
import type { PlantGrowthData } from './growth';

import { WIKI_PLANTS_EN } from './en/plants';
import {
  WIKI_PRINCIPLES_EN,
  WIKI_TOOLS_EN,
  WIKI_NUTRIENT_CLASSES_EN,
  WIKI_SOURCES_EN,
} from './en/meta';
import { WIKI_ARTICLES_EN } from './en/articles';
import {
  MONTHLY_CALENDAR_EN,
  GLASHAUS_GUIDE_EN,
  CLIMATE_REGIONS_EN,
  WIKI_CROSS_LINKS_EN,
} from './en/expanded';
import { PLANT_GROWTH_EN } from './en/growth';

import { useLang } from '../i18n';

// Merge English over German, field by field, matched by `id`.
function mergeById<T extends { id: string }>(deArr: T[], enArr: T[]): T[] {
  return deArr.map(d => {
    const e = enArr.find(x => x.id === d.id);
    return e ? { ...d, ...e } : d;
  });
}

// ── Precomputed English datasets (built once at module load) ───────────────────
const EN_PLANTS = mergeById(WIKI_PLANTS, WIKI_PLANTS_EN);
const EN_ARTICLES = mergeById(WIKI_ARTICLES, WIKI_ARTICLES_EN);
const EN_ARTICLE_MAP = Object.fromEntries(EN_ARTICLES.map(a => [a.id, a]));
const EN_MONTHS = MONTHLY_CALENDAR.map(d => {
  const e = MONTHLY_CALENDAR_EN.find(x => x.month === d.month);
  return e ? { ...d, ...e } : d;
});
const EN_REGIONS = mergeById(CLIMATE_REGIONS, CLIMATE_REGIONS_EN);
const EN_SOURCES = mergeById(WIKI_SOURCES, WIKI_SOURCES_EN);

const DE_BUNDLE = {
  plants: WIKI_PLANTS,
  articles: WIKI_ARTICLES,
  articleMap: WIKI_ARTICLE_MAP,
  months: MONTHLY_CALENDAR,
  glashaus: GLASHAUS_GUIDE,
  regions: CLIMATE_REGIONS,
  crossLinks: WIKI_CROSS_LINKS,
  principles: WIKI_PRINCIPLES,
  tools: WIKI_TOOLS,
  sources: WIKI_SOURCES,
  nutrientClasses: WIKI_NUTRIENT_CLASSES,
  imageMap: WIKI_IMAGE_MAP,
};

const EN_BUNDLE = {
  plants: EN_PLANTS,
  articles: EN_ARTICLES,
  articleMap: EN_ARTICLE_MAP,
  months: EN_MONTHS,
  glashaus: GLASHAUS_GUIDE_EN,
  regions: EN_REGIONS,
  crossLinks: WIKI_CROSS_LINKS_EN,
  principles: WIKI_PRINCIPLES_EN,
  tools: WIKI_TOOLS_EN,
  sources: EN_SOURCES,
  nutrientClasses: WIKI_NUTRIENT_CLASSES_EN,
  // Image paths are language-neutral — same map for both languages.
  imageMap: WIKI_IMAGE_MAP,
};

/** Active-language wiki content bundle (German default, English when toggled). */
export function useWikiData() {
  return useLang().lang === 'en' ? EN_BUNDLE : DE_BUNDLE;
}

/** Active-language growth data (English merged over German by plant id). */
export function useGrowthData(): Record<string, PlantGrowthData> {
  return useLang().lang === 'en' ? { ...PLANT_GROWTH, ...PLANT_GROWTH_EN } : PLANT_GROWTH;
}
