import { useState, useRef, useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { lookupPlantId, getPlantById } from '../data/plantGlossary';

const PLANT_IMAGES: Record<string, string> = {
  tomate: 'wiki-images/climate/tomate-anatomy.png',
  karotte: 'wiki-images/climate/karotte-anatomy.png',
  zwiebel: 'wiki-images/climate/zwiebel-anatomy.png',
  tagetes: 'wiki-images/growth/mischkultur-oekosystem.png',
  erdbeere: 'wiki-images/growth/mulch-erdbeere.png',
};

function TooltipPortal({
  anchorRect,
  plantId,
  onOpenWiki,
  onOpenFullscreen,
  onClose,
}: {
  anchorRect: DOMRect;
  plantId: string;
  onOpenWiki: () => void;
  onOpenFullscreen: () => void;
  onClose: () => void;
}) {
  const plant = getPlantById(plantId);
  if (!plant) return null;

  const img = PLANT_IMAGES[plantId];

  // Position: above the anchor if there's space, otherwise below
  const GAP = 10;
  const TIP_W = 280;
  const viewW = window.innerWidth;

  let top = anchorRect.top - GAP;
  let above = true;
  if (anchorRect.top < 200) { top = anchorRect.bottom + GAP; above = false; }

  let left = anchorRect.left + anchorRect.width / 2 - TIP_W / 2;
  left = Math.max(12, Math.min(left, viewW - TIP_W - 12));

  return createPortal(
    <div
      className="plant-tooltip"
      style={{ top, left, width: TIP_W, transformOrigin: above ? 'bottom center' : 'top center' }}
      onMouseEnter={onClose}  // keep alive while hovering tooltip itself  -  handled by parent
    >
      {img && (
        <div className="plant-tooltip-img">
          <img src={img} alt={plant.name} className="w-full h-full object-cover" />
        </div>
      )}
      <div className="plant-tooltip-body">
        <div className="flex items-start gap-2 mb-2">
          <div className="plant-tooltip-swatch" style={{ background: plant.color }} />
          <div className="flex-1 min-w-0">
            <div className="font-sans text-[13px] font-semibold text-text leading-tight">{plant.name}</div>
            <div className="font-mono text-xs text-[rgba(255,255,255,0.4)] italic leading-tight mt-0.5">{plant.lat}</div>
          </div>
        </div>

        <div className="font-mono text-xs text-[rgba(255,255,255,0.35)] uppercase tracking-[0.08em] mb-1">{plant.family}</div>

        <div className="flex flex-wrap gap-1 mb-2.5">
          <span className="plant-tooltip-badge">
            <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="inline-block mr-0.5"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
            {plant.sun.split(' ')[0] + ' ' + plant.sun.split(' ')[1]}
          </span>
          <span className="plant-tooltip-badge">
            <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block mr-0.5"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>
            {plant.water.split(',')[0]}
          </span>
          <span className="plant-tooltip-badge" style={{ color: plant.color }}>
            {plant.nutrient}
          </span>
        </div>

        <p className="font-sans text-xs text-[rgba(255,255,255,0.6)] leading-[1.5] m-0 line-clamp-2 mb-2.5">
          {plant.beginnerTip}
        </p>

        {plant.partners && (
          <div className="font-mono text-xs text-[rgba(255,255,255,0.3)] uppercase tracking-[0.08em] mb-0.5">Gute Nachbarn</div>
        )}
        {plant.partners && (
          <div className="font-sans text-xs text-[rgba(255,255,255,0.5)] mb-2.5 line-clamp-1">{plant.partners}</div>
        )}

        <div className="flex gap-1.5 mt-auto pt-1 border-t border-[rgba(255,255,255,0.07)]">
          <button className="plant-tooltip-btn plant-tooltip-btn--primary" onClick={onOpenWiki}>
            Im Wiki öffnen
          </button>
          <button className="plant-tooltip-btn plant-tooltip-btn--ghost" onClick={onOpenFullscreen} title="Gesamtes Wiki öffnen">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
            </svg>
            Vollbild
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}

interface PlantLinkProps {
  name: string;
  id?: string;
  onNavigateWiki?: () => void;
  children?: React.ReactNode;
}

export default function PlantLink({ name, id, onNavigateWiki, children }: PlantLinkProps) {
  const resolvedId = id ?? lookupPlantId(name);

  const [visible, setVisible] = useState(false);
  const [anchorRect, setAnchorRect] = useState<DOMRect | null>(null);
  const triggerRef = useRef<HTMLSpanElement>(null);
  const hideTimerRef = useRef<number | null>(null);

  const showTooltip = useCallback(() => {
    if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    if (triggerRef.current) {
      setAnchorRect(triggerRef.current.getBoundingClientRect());
      setVisible(true);
    }
  }, []);

  const scheduleHide = useCallback(() => {
    hideTimerRef.current = window.setTimeout(() => setVisible(false), 200);
  }, []);

  const cancelHide = useCallback(() => {
    if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
  }, []);

  useEffect(() => () => { if (hideTimerRef.current) clearTimeout(hideTimerRef.current); }, []);

  if (!resolvedId) {
    // Name not in glossary  -  render plain text
    return <>{children ?? name}</>;
  }

  const handleOpenWiki = () => {
    setVisible(false);
    window.location.hash = `#wiki/pflanze/${resolvedId}`;
    onNavigateWiki?.();
  };

  const handleOpenFullscreen = () => {
    setVisible(false);
    window.location.hash = `#wiki/pflanze/${resolvedId}`;
    onNavigateWiki?.();
  };

  return (
    <>
      <span
        ref={triggerRef}
        className="plant-link"
        onMouseEnter={showTooltip}
        onMouseLeave={scheduleHide}
        onClick={handleOpenWiki}
        role="button"
        tabIndex={0}
        onKeyDown={e => e.key === 'Enter' && handleOpenWiki()}
      >
        {children ?? name}
      </span>

      {visible && anchorRect && (
        <TooltipPortal
          anchorRect={anchorRect}
          plantId={resolvedId}
          onOpenWiki={handleOpenWiki}
          onOpenFullscreen={handleOpenFullscreen}
          onClose={cancelHide}
        />
      )}
    </>
  );
}

// Utility: split a comma-separated plant name string and render each as PlantLink
export function PlantNameList({ names, onNavigateWiki }: { names: string; onNavigateWiki?: () => void }) {
  const items = names.split(/,\s*/);
  return (
    <>
      {items.map((name, i) => (
        <span key={i}>
          <PlantLink name={name.trim()} onNavigateWiki={onNavigateWiki}>{name.trim()}</PlantLink>
          {i < items.length - 1 && <span className="text-[rgba(255,255,255,0.3)]">, </span>}
        </span>
      ))}
    </>
  );
}
