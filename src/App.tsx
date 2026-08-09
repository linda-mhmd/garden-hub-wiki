import { useState, useEffect } from 'react';
import WikiView from './components/WikiView';
import PlantDetailView from './components/PlantDetailView';
import WikiPlantFullscreen from './components/WikiPlantFullscreen';
import { PLANT_GROWTH } from './data/growth';
import { WIKI_PLANTS } from './data/wiki';
import { LangToggle, useT } from './i18n';
import { slugToPlantId } from './i18n/routes';
import './index.css';

// Entity prefixes in both languages — a bare sub-id must not be one of these.
const HASH_PREFIXES = ['pflanze', 'artikel', 'monat', 'plant', 'article', 'month'];

function hashSubId(hash: string): string | null {
  const parts = hash.replace(/^#/, '').split('/');
  // Deep link form: #wiki/<plantId | plantSlug>  (a bare plant, not a named sub-view)
  if (parts[0] === 'wiki' && parts[1] && !HASH_PREFIXES.includes(parts[1])) {
    // Resolve an English plant slug (e.g. 'tomato') to its id; German ids pass through.
    return slugToPlantId(parts[1]);
  }
  return null;
}

function SiteHeader() {
  const t = useT();
  return (
    <header
      style={{
        borderBottom: '1px solid var(--c-border)',
        background: 'var(--c-bg-soft)',
        position: 'sticky',
        top: 0,
        zIndex: 20,
      }}
    >
      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0.85rem 1.5rem', display: 'flex', alignItems: 'center', gap: 10 }}>
        <a href="#wiki" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--c-green)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 2c3 4 6 5 6 9a6 6 0 0 1-12 0c0-4 3-5 6-9z" />
            <path d="M12 11v9" />
          </svg>
          <span style={{ fontFamily: 'var(--f-title)', fontWeight: 700, fontSize: '1.15rem', color: 'var(--c-text)' }}>
            {t('Garten-Wiki', 'Garden Wiki')}
          </span>
        </a>
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 14 }}>
          <a
            href="https://ernterechner.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono"
            style={{ fontSize: '0.7rem', color: 'var(--c-green-mid)', letterSpacing: '0.04em', textDecoration: 'none' }}
          >
            {t('Ertragsrechner', 'Yield calculator')} →
          </a>
          <LangToggle />
        </div>
      </div>
    </header>
  );
}

export default function App() {
  const [selectedPlantId, setSelectedPlantId] = useState<string | null>(null);
  const [subId, setSubId] = useState<string | null>(() => hashSubId(window.location.hash));

  useEffect(() => {
    const onHashChange = () => setSubId(hashSubId(window.location.hash));
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  // A plant explicitly selected for its growth-tracking detail view.
  if (selectedPlantId) {
    return <PlantDetailView plantId={selectedPlantId} onBack={() => setSelectedPlantId(null)} />;
  }

  // Deep link #wiki/<plantId>: growth data → detail view, otherwise fullscreen profile.
  if (subId && WIKI_PLANTS.some(p => p.id === subId)) {
    if (PLANT_GROWTH[subId]) {
      return <PlantDetailView plantId={subId} onBack={() => { window.location.hash = '#wiki/pflanzen'; }} />;
    }
    return <WikiPlantFullscreen plantId={subId} onBack={() => { window.location.hash = '#wiki/pflanzen'; }} />;
  }

  return (
    <div style={{ minHeight: '100svh', display: 'flex', flexDirection: 'column', background: 'var(--c-bg)' }}>
      <SiteHeader />
      <main style={{ flex: 1, width: '100%' }}>
        <WikiView onSelectPlant={setSelectedPlantId} />
      </main>
    </div>
  );
}
