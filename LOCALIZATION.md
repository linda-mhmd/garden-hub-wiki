# Localization plan (German ↔ English)

The wiki is bilingual. German is the source of truth; English is a first‑class
second language with **graceful fallback** (German shows wherever an English
translation isn't ready yet, so the site is never blank or broken).

## 1. How the language layer works

- `src/i18n.tsx` — `LanguageProvider`, a persisted `DE/EN` toggle, and `useT()`.
  `t('Gemüse', 'Vegetables')` returns the active language's string.
- The choice is stored in `localStorage` **and** reflected in the URL as `?lang=`
  **without touching the `#` route** — so switching language never changes your
  page, and a shared link keeps its language.
- **UI strings** live inline in components as `t('<de>', '<en>')`.
- **Content** (plant profiles, guides, calendar, climate) is translated in
  side‑car modules under `src/data/en/` (`WIKI_PLANTS_EN`, `WIKI_ARTICLES_EN`,
  `MONTHLY_CALENDAR_EN`, …). A small selector merges the English record over the
  German one **by `id`**, field by field, falling back to German. Numbers, Latin
  names, colors, image paths and ids stay in the German source — only text is
  translated — so it's safe to fill in incrementally and nothing can drift.

## 2. English URLs (readable routes)

Today routes are hash‑based and German‑flavoured, e.g. `#wiki/pflanze/tomate`,
`#wiki/grundlagen`. Plan for English‑readable URLs that don't break anything:

**Bilingual slugs with alias resolution.**
- **Section + prefix aliases:** `grundlagen⇄basics`, `pflanzen⇄plants`,
  `kalender⇄calendar`, `glashaus⇄greenhouse`, `prinzipien⇄principles`,
  `regionen⇄regions`, `werkzeug⇄tools`, `quellen⇄sources`, and the entity
  prefixes `pflanze⇄plant`, `artikel⇄article`, `monat⇄month`.
- **Entity slugs:** every plant/article keeps its canonical `id` for data
  lookups, plus an English slug (`tomate → tomato`, `karotte → carrot`,
  `feigenbaum → fig-tree`, …) generated alongside the translation
  (`src/i18n/en/slugs.ts`).
- **The router accepts either language** and normalises the segment/slug back to
  the internal view + id. So `#wiki/plant/tomato` **and** the old
  `#wiki/pflanze/tomate` both resolve — **existing/shared links never break.**
- **Emits the active language:** in English mode links render as
  `#wiki/plant/tomato`; in German as `#wiki/pflanze/tomate`. On toggling the
  language, the current URL is rewritten to the same page in the other language
  (via `replaceState`, hash‑safe).
- **No server needed** — it's all client‑side hash routing, so GitHub Pages
  serves it unchanged.

*(Optional later: pretty path URLs like `/en/plants/tomato` would need SPA
redirect handling on Pages; the hash approach above gives readable English URLs
with zero server config, so we start there.)*

## 3. Images with baked‑in German text

- Product photos and illustrations carry **no text** → already language‑neutral.
- Infographics with German text: in English mode **swap to the existing
  `infografik-en/…` version** where one exists (crop rotation, companion matrix,
  watering, plant profiles, preservation, season extension, climate). Each
  English image is vetted for personal data just like the German ones.
- Where no English image exists yet, keep the German image but add **English alt
  text + a short English caption** conveying its content, until it's recreated.

## 4. Rollout

1. **Framework + toggle + language‑stable URLs** — done.
2. **Home + plant‑lexicon landing** translated — done.
3. **All remaining UI strings** (every sub‑page) → English — in progress (batch).
4. **All content** (75 plant profiles, guides, monthly calendar, climate
   regions, growth stages) → `src/data/en/*` and wired via the selector —
   in progress (parallel translation).
5. **English URLs** — add slug maps + bilingual router.
6. **Images** — swap to `infografik-en` where available + English captions.
7. Same treatment applied to **ernterechner** (smaller — mostly UI + tips).

German remains the default and the fallback throughout, so each step ships
safely on its own.
