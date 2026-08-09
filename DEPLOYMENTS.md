# Deployments & operations

How this site is published, how previews work, the custom-domain behaviour, and
how to move the repo to an organization safely. (For content contribution steps,
see `CONTRIBUTING.md`.)

## 1. The golden rule

- You edit code on **`main`** (or a feature branch → Pull Request).
- GitHub Actions (**"Deploy & Previews"**) builds the site into the **`gh-pages`** branch.
- **GitHub Pages must serve `gh-pages` / (root)** — never `main` or a source branch.
  Those hold source code, not a built site, and will 404.

> Settings → Pages → Build and deployment → Source: **Deploy from a branch** →
> Branch: **`gh-pages`** → Folder: **`/ (root)`**

GitHub shows "Your site is live" as soon as you save, but the first build is
**queued** for up to a minute — wait, then refresh.

## 2. URL map

Replace `<owner>` with the repo owner (currently `mzzavaa`).

| What | Trigger | URL |
|---|---|---|
| Production | merge to `main` | `https://<owner>.github.io/garden-hub-wiki/` |
| Dev sandbox | push to `dev` | `…/garden-hub-wiki/preview/dev/` |
| PR preview | open a Pull Request | `…/garden-hub-wiki/pr-preview/pr-<N>/` (a bot comments the link) |
| Deployments dashboard | automatic | `…/garden-hub-wiki/deployments/` |

The `/deployments/` page lists production, the dev sandbox, and every open PR's
preview; it regenerates on each deploy and derives URLs from the current owner, so
it keeps working after an org transfer.

## 3. Custom domain (important nuance)

A GitHub Pages custom domain applies to the **entire site** (the whole `gh-pages`
branch). You therefore **cannot** put only production on a domain and keep previews
on `github.io` in one repo — once a domain is set, `github.io/<repo>/*` redirects to
the domain and previews live at `yourdomain/pr-preview/pr-<N>/`.

Options:
- **Recommended:** set the domain and mark previews `noindex`, so only production is
  the public/searchable face. Previews still exist at unlisted sub-paths.
- **Full split (previews never on the domain):** host previews in a **separate repo**
  served on `github.io`, keep this repo domain-only. Requires a deploy token.

To add a domain: point DNS at GitHub Pages (apex A-records `185.199.108.153`,
`185.199.109.153`, `185.199.110.153`, `185.199.111.153`), then Settings → Pages →
Custom domain → enter it → Save. A `CNAME` file appears in `gh-pages` automatically.

## 4. Moving to an organization (e.g. `linda-mhmd`)

Safe to do — GitHub preserves history, issues, PRs, and Actions, and redirects old
git remotes. After the transfer:

1. **Pages URL changes** to `https://<neworg>.github.io/<repo>/`. The dashboard
   updates itself; update any hard-coded links in `README.md`, `CONTRIBUTING.md`, and
   the cross-link to the sibling site.
2. **Re-check Settings → Pages** → Source is still **`gh-pages` / (root)** (re-select
   if it reset).
3. **Custom domain:** re-enter and re-verify it under the org (Settings → Pages, and
   the org's "Verified domains").
4. **Actions:** ensure the org allows GitHub Actions and the default `GITHUB_TOKEN`
   has write access (Org → Settings → Actions → Workflow permissions → Read and
   write).
5. A push to `main` (or "Re-run" the latest workflow) republishes `gh-pages`.

Nothing in the build is tied to a specific owner — the workflow uses the built-in
`GITHUB_TOKEN` and derives URLs from the repo context.
