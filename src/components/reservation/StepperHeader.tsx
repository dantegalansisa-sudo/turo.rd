import { motion } from 'framer-motion';

interface Props {
  current: 1 | 2 | 3;
  steps: { id: 1 | 2 | 3; label: string }[];
}

export default function StepperHeader({ current, steps }: Props) {
  return (
    <ol className="rsv-stepper" aria-label="Progreso de la reserva">
      {steps.map((s, i) => {
        const done = current > s.id;
        const active = current === s.id;
        return (
          <li
            key={s.id}
            className={`rsv-stepper__item ${done ? 'is-done' : ''} ${active ? 'is-active' : ''}`}
          >
            <div className="rsv-stepper__node">
              {done ? (
                <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <path d="M4 10l4 4 8-8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : (
                <span>{s.id}</span>
              )}
            </div>
            <span className="rsv-stepper__label">{s.label}</span>
            {i < steps.length - 1 && (
              <div className="rsv-stepper__line" aria-hidden="true">
                <motion.span
                  className="rsv-stepper__line-fill"
                  initial={false}
                  animate={{ scaleX: done ? 1 : 0 }}
                  transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
                />
              </div>
            )}
          </li>
        );
      })}
    </ol>
  );
}
