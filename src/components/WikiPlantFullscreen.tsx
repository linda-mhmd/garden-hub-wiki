import { WIKI_IMAGE_MAP } from '../data/wiki';
import { useT } from '../i18n';
import { useWikiData } from '../data/localized';

export default function WikiPlantFullscreen({ plantId, onBack }: { plantId: string; onBack: () => void }) {
  const t = useT();
  const { plants } = useWikiData();
  const plant = plants.find(p => p.id === plantId);
  if (!plant) return null;
  const img = WIKI_IMAGE_MAP[plantId];

  const InfoRow = ({ label, value }: { label: string; value: string }) => (
    <div style={{ display: 'flex', gap: 12, padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
      <span style={{ fontFamily: 'var(--f-mono)', fontSize: '0.7rem', color: 'var(--c-sub)', width: 80, flexShrink: 0, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{label}</span>
      <span style={{ fontFamily: 'var(--f-sans)', fontSize: '0.875rem', color: 'var(--c-text)', lineHeight: 1.5 }}>{value}</span>
    </div>
  );

  return (
    <div style={{ minHeight: '100svh', background: 'var(--c-bg)', fontFamily: 'var(--f-sans)', overflowY: 'auto' }}>

      {/* Sticky header */}
      <div style={{ position: 'sticky', top: 0, zIndex: 10, display: 'flex', alignItems: 'center', gap: 12, padding: '10px 20px', background: 'rgba(10,15,26,0.92)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
        <button
          onClick={onBack}
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--c-sub)', fontFamily: 'var(--f-sans)', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: 5, padding: 0 }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          {t('Zurück zum Wiki', 'Back to wiki')}
        </button>
        <span style={{ fontFamily: 'var(--f-sans)', fontSize: '0.9rem', fontWeight: 600, color: 'var(--c-text)' }}>{plant.name}</span>
      </div>

      {/* Hero */}
      <div style={{ position: 'relative', height: img ? 320 : 140, overflow: 'hidden', background: plant.color + '18' }}>
        {img && (
          <img
            src={img.url}
            alt={img.alt}
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 40%' }}
          />
        )}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,15,26,0.92) 0%, rgba(10,15,26,0.2) 60%, transparent 100%)' }} />
        <div style={{ position: 'absolute', bottom: 28, left: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
            <div style={{ width: 12, height: 12, borderRadius: '50%', background: plant.color, flexShrink: 0 }} />
            <span style={{ fontFamily: 'var(--f-mono)', fontSize: '0.7rem', color: plant.color, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{plant.family}</span>
          </div>
          <h1 style={{ fontFamily: 'var(--f-title)', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 700, color: '#fff', margin: '0 0 4px', lineHeight: 1.1 }}>
            {plant.name}
          </h1>
          {plant.nameAlt && (
            <div style={{ fontFamily: 'var(--f-sans)', fontSize: '0.85rem', color: 'rgba(255,255,255,0.55)', marginBottom: 2 }}>{plant.nameAlt}</div>
          )}
          <div style={{ fontFamily: 'var(--f-mono)', fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', fontStyle: 'italic' }}>{plant.lat}</div>
        </div>
      </div>

      {/* Body */}
      <div style={{ maxWidth: 860, margin: '0 auto', padding: '32px 24px 80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 24 }}>

          {/* Growing info */}
          <div>
            <div style={{ fontFamily: 'var(--f-mono)', fontSize: '0.7rem', color: 'var(--c-sub)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 10 }}>{t('Anbauinfo', 'Growing info')}</div>
            <div style={{ background: 'var(--c-card)', border: '1px solid var(--c-border)', borderRadius: 12, padding: '4px 14px' }}>
              <InfoRow label={t('Sonne', 'Sun')} value={plant.sun} />
              <InfoRow label={t('Wasser', 'Water')} value={plant.water} />
              <InfoRow label={t('Nährstoff', 'Nutrient')} value={plant.nutrient} />
              <InfoRow label={t('Aussaat', 'Sowing')} value={plant.sowing} />
              {plant.planting && <InfoRow label={t('Pflanzung', 'Planting')} value={plant.planting} />}
              <InfoRow label={t('Ernte', 'Harvest')} value={plant.harvest} />
            </div>
          </div>

          {/* Beginner tip */}
          {plant.beginnerTip && (
            <div>
              <div style={{ fontFamily: 'var(--f-mono)', fontSize: '0.7rem', color: 'var(--c-green)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 10 }}>{t('Anfänger-Tipp', 'Beginner tip')}</div>
              <div style={{ background: 'rgba(93,143,46,0.08)', border: '1px solid rgba(93,143,46,0.22)', borderRadius: 12, padding: '14px 16px' }}>
                <p style={{ fontFamily: 'var(--f-sans)', fontSize: '0.9rem', color: 'var(--c-text)', lineHeight: 1.65, margin: 0 }}>{plant.beginnerTip}</p>
              </div>
            </div>
          )}
        </div>

        {/* Companions */}
        {(plant.partners || plant.enemies) && (
          <div style={{ marginTop: 24, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 14 }}>
            {plant.partners && (
              <div style={{ background: 'rgba(93,143,46,0.06)', border: '1px solid rgba(93,143,46,0.2)', borderRadius: 12, padding: '14px 16px' }}>
                <div style={{ fontFamily: 'var(--f-mono)', fontSize: '0.7rem', color: 'var(--c-sub)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 8 }}>{t('Gute Nachbarn', 'Good neighbours')}</div>
                <p style={{ fontFamily: 'var(--f-sans)', fontSize: '0.875rem', color: 'var(--c-text)', lineHeight: 1.6, margin: 0 }}>{plant.partners}</p>
              </div>
            )}
            {plant.enemies && (
              <div style={{ background: 'rgba(184,67,46,0.06)', border: '1px solid rgba(184,67,46,0.2)', borderRadius: 12, padding: '14px 16px' }}>
                <div style={{ fontFamily: 'var(--f-mono)', fontSize: '0.7rem', color: 'var(--c-red)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 8 }}>{t('Schlechte Nachbarn', 'Bad neighbours')}</div>
                <p style={{ fontFamily: 'var(--f-sans)', fontSize: '0.875rem', color: 'var(--c-text)', lineHeight: 1.6, margin: 0 }}>{plant.enemies}</p>
              </div>
            )}
          </div>
        )}

        {/* Steps */}
        {plant.steps && plant.steps.length > 0 && (
          <div style={{ marginTop: 24 }}>
            <div style={{ fontFamily: 'var(--f-mono)', fontSize: '0.7rem', color: 'var(--c-sub)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>{t('Schritt für Schritt', 'Step by step')}</div>
            <ol style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
              {plant.steps.map((step, i) => (
                <li key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <span style={{ fontFamily: 'var(--f-mono)', fontSize: '0.75rem', color: plant.color, background: plant.color + '18', borderRadius: 6, width: 22, height: 22, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>{i + 1}</span>
                  <span style={{ fontFamily: 'var(--f-sans)', fontSize: '0.875rem', color: 'var(--c-text)', lineHeight: 1.55 }}>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        )}

        {/* Issues */}
        {plant.issues && (
          <div style={{ marginTop: 24, background: 'rgba(212,165,116,0.07)', border: '1px solid rgba(212,165,116,0.2)', borderRadius: 12, padding: '14px 16px' }}>
            <div style={{ fontFamily: 'var(--f-mono)', fontSize: '0.7rem', color: 'var(--c-amber)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 8 }}>{t('Probleme & Lösungen', 'Problems & solutions')}</div>
            <p style={{ fontFamily: 'var(--f-sans)', fontSize: '0.875rem', color: 'var(--c-text)', lineHeight: 1.6, margin: 0 }}>{plant.issues}</p>
          </div>
        )}

        {/* Sorts */}
        {plant.sorts && (
          <div style={{ marginTop: 20 }}>
            <div style={{ fontFamily: 'var(--f-mono)', fontSize: '0.7rem', color: 'var(--c-sub)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 8 }}>{t('Empfohlene Sorten', 'Recommended varieties')}</div>
            <p style={{ fontFamily: 'var(--f-sans)', fontSize: '0.875rem', color: 'var(--c-sub)', lineHeight: 1.6, margin: 0 }}>{plant.sorts}</p>
          </div>
        )}
      </div>
    </div>
  );
}
