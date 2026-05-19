import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

export type Zone = 'Salón' | 'Terraza' | 'Bar';

interface Props {
  selected: Zone | null;
  onSelect: (z: Zone) => void;
  onNext: () => void;
}

const ZONES: { id: Zone; tagline: string; capacity: string; icon: ReactNode }[] = [
  {
    id: 'Salón',
    tagline: 'Mesa íntima, luz cálida.',
    capacity: '2 – 12 personas',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4">
        <rect x="5" y="7" width="22" height="18" rx="2" />
        <path d="M5 13h22M10 19h12M10 7v6M22 7v6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'Terraza',
    tagline: 'Aire libre, brasa cercana.',
    capacity: '2 – 8 personas',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M3 14l13-9 13 9" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 13v13h18V13" strokeLinejoin="round" />
        <path d="M14 26v-7h4v7" />
      </svg>
    ),
  },
  {
    id: 'Bar',
    tagline: 'Para una copa y un buen corte.',
    capacity: '1 – 4 personas',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M6 7h20l-7 9v9" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11 25h10" strokeLinecap="round" />
        <circle cx="22" cy="9" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
];

export default function StepZones({ selected, onSelect, onNext }: Props) {
  return (
    <div className="rsv-step">
      <header className="rsv-step__head">
        <span className="rsv-step__eyebrow">Paso 01</span>
        <h2 className="rsv-step__title">
          ¿Dónde te <em>sentamos</em>?
        </h2>
        <p className="rsv-step__lead">
          Cada zona tiene su propio ritmo. Elegí donde te imagines la velada.
        </p>
      </header>

      <div className="rsv-zones">
        {ZONES.map((z, i) => {
          const isSel = selected === z.id;
          return (
            <motion.button
              key={z.id}
              type="button"
              className={`rsv-zone ${isSel ? 'is-selected' : ''}`}
              onClick={() => onSelect(z.id)}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08 * i, ease: [0.76, 0, 0.24, 1] }}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.985 }}
              aria-pressed={isSel}
            >
              <span className="rsv-zone__icon">{z.icon}</span>
              <span className="rsv-zone__name">{z.id}</span>
              <span className="rsv-zone__tag">{z.tagline}</span>
              <span className="rsv-zone__cap">{z.capacity}</span>
              <span className="rsv-zone__check" aria-hidden="true">
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 8l3.5 3.5L13 5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </motion.button>
          );
        })}
      </div>

      <div className="rsv-step__actions rsv-step__actions--end">
        <button
          type="button"
          className="rsv-btn rsv-btn--primary"
          onClick={onNext}
          disabled={!selected}
        >
          Continuar
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}
