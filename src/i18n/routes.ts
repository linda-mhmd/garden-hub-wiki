// ── Bilingual hash-route slug resolvers ───────────────────────────────────────
// German view keys / ids are canonical. English slugs (src/i18n/en/slugs.ts) are
// emitted when the active language is English, and every resolver accepts EITHER
// language so old German links keep working.

import { PLANT_SLUG_EN, SECTION_SLUG_EN, PREFIX_SLUG_EN } from './en/slugs';
import type { Lang } from '../i18n';

type PrefixKind = 'pflanze' | 'artikel' | 'monat';

// Reverse maps: English slug → German key / id.
const SLUG_TO_SECTION: Record<string, string> = Object.fromEntries(
  Object.entries(SECTION_SLUG_EN).map(([de, en]) => [en, de]),
);
const SLUG_TO_PREFIX: Record<string, string> = Object.fromEntries(
  Object.entries(PREFIX_SLUG_EN).map(([de, en]) => [en, de]),
);
const SLUG_TO_PLANT_ID: Record<string, string> = Object.fromEntries(
  Object.entries(PLANT_SLUG_EN).map(([id, slug]) => [slug, id]),
);

/** German view key → slug for the active language (English slug when lang==='en'). */
export function sectionToSlug(view: string, lang: Lang): string {
  return lang === 'en' ? (SECTION_SLUG_EN[view] ?? view) : view;
}

/** German view key OR English slug → German view key. */
export function slugToSection(seg: string): string {
  return SLUG_TO_SECTION[seg] ?? seg;
}

/** German entity prefix → slug for the active language. */
export function prefixToSlug(kind: PrefixKind, lang: Lang): string {
  return lang === 'en' ? (PREFIX_SLUG_EN[kind] ?? kind) : kind;
}

/** German prefix OR English prefix slug → German prefix. */
export function slugToPrefix(seg: string): string {
  return SLUG_TO_PREFIX[seg] ?? seg;
}

/** Plant id → slug for the active language (English slug when lang==='en'). */
export function plantIdToSlug(id: string, lang: Lang): string {
  return lang === 'en' ? (PLANT_SLUG_EN[id] ?? id) : id;
}

/** English plant slug → plant id; German id passes through unchanged. */
export function slugToPlantId(seg: string): string {
  return SLUG_TO_PLANT_ID[seg] ?? seg;
}
