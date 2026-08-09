/**
 * Cross-site link to the Ernterechner calculator, resolved per environment so it
 * works everywhere without hardcoding a domain that isn't live yet:
 *
 *   1. `VITE_CALC_URL` build-time override (set it in CI when a domain changes), else
 *   2. auto-detect from the current host — on GitHub Pages keep the sibling on
 *      GitHub Pages; on a real custom domain use the calculator's own domain.
 *
 * This means the link is correct now (GitHub Pages) and stays correct once the
 * custom domain is connected, with no code change required.
 */
const GH_PAGES_CALC = 'https://mzzavaa.github.io/ernterechner.com/';
const DOMAIN_CALC = 'https://ernterechner.com/';

function resolveCalcUrl(): string {
  const override = import.meta.env.VITE_CALC_URL as string | undefined;
  if (override) return override;
  const host = typeof window !== 'undefined' ? window.location.hostname : '';
  if (host.endsWith('github.io')) return GH_PAGES_CALC;
  return DOMAIN_CALC;
}

export const CALC_URL = resolveCalcUrl();
