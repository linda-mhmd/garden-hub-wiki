import { createContext, useContext, useEffect, useState, useCallback } from 'react';

export type UnitSystem = 'metric' | 'imperial';

interface UnitCtx {
  units: UnitSystem;
  setUnits: (u: UnitSystem) => void;
  toggle: () => void;
}

const Ctx = createContext<UnitCtx>({ units: 'metric', setUnits: () => {}, toggle: () => {} });

function initialUnits(): UnitSystem {
  try {
    const q = new URLSearchParams(window.location.search).get('units');
    if (q === 'metric' || q === 'imperial') return q;
    const stored = localStorage.getItem('units');
    if (stored === 'metric' || stored === 'imperial') return stored;
    // Sensible default: imperial only for the handful of imperial-first locales.
    const loc = (navigator.language || '').toLowerCase();
    if (/^en-(us|lr)|^my-mm/.test(loc)) return 'imperial';
  } catch { /* ignore */ }
  return 'metric';
}

export function UnitProvider({ children }: { children: React.ReactNode }) {
  const [units, setUnitsState] = useState<UnitSystem>(initialUnits);

  const setUnits = useCallback((u: UnitSystem) => {
    setUnitsState(u);
    try { localStorage.setItem('units', u); } catch { /* ignore */ }
    try {
      const url = new URL(window.location.href);
      url.searchParams.set('units', u);
      window.history.replaceState(null, '', url.toString());
    } catch { /* ignore */ }
  }, []);

  const toggle = useCallback(() => setUnits(units === 'metric' ? 'imperial' : 'metric'), [units, setUnits]);

  useEffect(() => { /* keep hook stable */ }, [units]);

  return <Ctx.Provider value={{ units, setUnits, toggle }}>{children}</Ctx.Provider>;
}

export function useUnits() {
  return useContext(Ctx);
}

const round = (n: number, dp = 0) => {
  const f = 10 ** dp;
  return Math.round(n * f) / f;
};

/**
 * Formatting helpers that respect the active unit system.
 * Source values are always metric (the data is stored metric); these convert
 * for display only.
 */
export function useFormat() {
  const { units } = useUnits();
  const imperial = units === 'imperial';
  const cToF = (c: number) => round(c * 9 / 5 + 32);
  return {
    imperial,
    /** A single temperature in °C → "12°C" or "54°F". */
    temp: (c: number) => (imperial ? `${cToF(c)}°F` : `${c}°C`),
    /** A high/low pair → "12° / 3°C" or "54° / 37°F". */
    tempRange: (hi: number, lo: number) =>
      imperial ? `${cToF(hi)}° / ${cToF(lo)}°F` : `${hi}° / ${lo}°C`,
    /** Rainfall in mm → "600 mm" or "23.6 in". */
    rain: (mm: number) => (imperial ? `${round(mm / 25.4, 1)} in` : `${mm} mm`),
    /** Unit label only, for headers/legends. */
    tempUnit: imperial ? '°F' : '°C',
  };
}

/** Compact metric/imperial toggle (°C / °F), styled like the language toggle. */
export function UnitToggle({ style }: { style?: React.CSSProperties }) {
  const { units, setUnits } = useUnits();
  const btn = (u: UnitSystem, label: string) => (
    <button
      onClick={() => setUnits(u)}
      aria-pressed={units === u}
      title={u === 'metric' ? 'Metric (°C, mm)' : 'Imperial (°F, in)'}
      style={{
        border: 'none',
        background: units === u ? 'var(--c-green)' : 'transparent',
        color: units === u ? '#0d1117' : 'var(--c-sub)',
        fontFamily: 'var(--f-mono)',
        fontSize: '0.7rem',
        fontWeight: 700,
        letterSpacing: '0.02em',
        padding: '3px 8px',
        borderRadius: 6,
        cursor: 'pointer',
      }}
    >
      {label}
    </button>
  );
  return (
    <div
      style={{ display: 'inline-flex', gap: 2, padding: 2, borderRadius: 8, background: 'rgba(255,255,255,0.06)', ...style }}
      role="group"
      aria-label="Units"
    >
      {btn('metric', '°C')}
      {btn('imperial', '°F')}
    </div>
  );
}
