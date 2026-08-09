# Contributing to the Garten-Wiki

Thanks for helping improve the wiki! You can contribute **entirely from a phone
or browser** — no laptop, no local setup required. This page explains how the
site is built, how previews work, and the exact steps to propose and preview a
change.

---

## 1. How deployment & previews work

Every change is built automatically by GitHub Actions (the **"Deploy & Previews"**
workflow) and published to the `gh-pages` branch. There are three targets:

| What you do | Where it goes live |
|---|---|
| Merge to **`main`** | Production — `https://mzzavaa.github.io/garden-hub-wiki/` |
| Push to the **`dev`** branch | Sandbox — `…/garden-hub-wiki/preview/dev/` |
| Open a **Pull Request** | Preview — `…/garden-hub-wiki/pr-preview/pr-<NUMBER>/` |

- When you open a PR, a bot automatically **posts the preview link as a comment**
  on the PR. Open it on your phone to see your change running live.
- Every new push to that PR **updates the same preview**.
- When the PR is merged or closed, its preview folder is **removed automatically**.

This works because the site uses relative asset paths and hash-based routing, so
it runs correctly from any sub-folder (root, `/preview/dev/`, `/pr-preview/pr-7/`).
Production, dev, and every open PR coexist on the one `gh-pages` branch.

There are **no secrets and no backend** — it's a static site. Anything you type
into the wiki in the browser (there is nothing to log in to) stays in your own
browser.

---

## 2. Propose & preview a change — from your phone

1. **Find the file** you want to edit (see "Where the content lives" below).
2. Tap the **pencil / Edit** icon. If you're not a collaborator, GitHub will
   offer to **fork** the repo for you — accept; it's automatic.
3. Make your edit, then tap **Commit changes → Create a new branch → Propose
   changes**. This opens a **Pull Request** against `main`.
4. Wait ~1 minute. The **"Deploy & Previews"** check runs and the preview bot
   comments a link like `…/pr-preview/pr-12/`. **Tap it to see your change live.**
5. Need to tweak it? Edit again on the **same branch** → the same preview URL
   refreshes.
6. When it looks good, a maintainer merges the PR → your change goes to
   **production**, and the preview is cleaned up.

That's the whole loop: **edit → open PR → open the preview link → iterate → merge.**

---

## 3. A stable sandbox: the `dev` branch

If you want to try a larger idea without opening a PR yet, commit it to the
**`dev`** branch. It publishes to `…/garden-hub-wiki/preview/dev/` and updates on
every push there. Think of it as a permanent scratch site.

---

## 4. Where the content lives

Almost everything is plain data — you don't need to touch React to add or fix a
plant or an article.

| Content | File |
|---|---|
| Plant profiles (lexicon) | `src/data/wiki.ts` (`WIKI_PLANTS`) |
| Guides / articles ("Grundlagen") | `src/data/wikiArticles.ts` |
| Monthly calendar, glasshouse guide, climate regions | `src/data/wikiExpanded.ts` |
| Growth-stage timelines | `src/data/growth.ts` |
| Name → id aliases (for in-text plant links) | `src/data/plantGlossary.ts` |
| Principles, tools, sources | `src/data/wiki.ts` |
| Images | `public/images/…`, `public/wiki-images/…` |
| Page layout / rendering | `src/components/WikiView.tsx` |
| Colors & fonts (design tokens) | `src/index.css` |

Each plant/article is a JavaScript object in an array — copy an existing entry
and edit its fields to add a new one.

---

## 5. Content & style rules

- **Planting knowledge only.** Never add personal data, real names, addresses,
  GPS coordinates, or any detail about a specific real property or building
  project. Region-level climate context (e.g. "pannonian / Burgenland climate")
  is fine; a specific street, house, or pin location is not.
- **Design tokens:** use `var(--c-*)` colors and `var(--f-*)` fonts from
  `src/index.css` — never hard-code colors or fonts.
- **Fonts:** Fraunces (headings), DM Sans (all other text), JetBrains Mono
  (numbers only).
- **Separators:** `·` (middle dot) between items, `–` (en-dash) for ranges.
  Never use `—` (em-dash).
- **Icons:** SVG only, no emoji in the UI.

---

## 6. Local development (optional — when you have a computer)

```bash
npm install
npm run dev       # local dev server with hot reload
npm run build     # production build into dist/
npm run preview   # serve the built site locally
npm run lint
```

Node 22 is used in CI. You do **not** need any of this to contribute content — the
browser flow in section 2 is enough.

---

## 7. Maintainer setup (one-time, per repo)

For the published `gh-pages` branch to actually serve, GitHub Pages must be set to
that branch:

> **Settings → Pages → Build and deployment → Source → "Deploy from a branch" →
> Branch: `gh-pages`, Folder: `/ (root)` → Save**

After that, production, `dev`, and PR previews are all served automatically — no
further settings changes are ever needed.
