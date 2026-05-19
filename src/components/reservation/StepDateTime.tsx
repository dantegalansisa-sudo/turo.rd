import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';

interface Props {
  date: Date | null;
  time: string | null;
  onPickDate: (d: Date) => void;
  onPickTime: (t: string) => void;
  onBack: () => void;
  onNext: () => void;
}

const DAY_LABELS = ['Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá', 'Do'];
const MONTH_NAMES = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre',
];

// Slots — restaurante abre 12pm–11pm. Slots cada 30min.
const TIME_SLOTS = [
  '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
  '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00',
];

function startOfMonth(d: Date) { return new Date(d.getFullYear(), d.getMonth(), 1); }
function daysInMonth(year: number, month: number) { return new Date(year, month + 1, 0).getDate(); }
function isSameDay(a: Date, b: Date) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}
function isPastDay(d: Date) {
  const today = new Date(); today.setHours(0, 0, 0, 0);
  return d < today;
}
function formatLong(d: Date) {
  return `${d.getDate()} de ${MONTH_NAMES[d.getMonth()].toLowerCase()}, ${d.getFullYear()}`;
}

export default function StepDateTime({ date, time, onPickDate, onPickTime, onBack, onNext }: Props) {
  const today = useMemo(() => new Date(), []);
  const [cursor, setCursor] = useState<Date>(date ?? startOfMonth(today));

  const grid = useMemo(() => {
    const first = startOfMonth(cursor);
    // 0 = Sun in JS; we want Monday as first. Convert.
    const weekday = (first.getDay() + 6) % 7;
    const total = daysInMonth(cursor.getFullYear(), cursor.getMonth());
    const cells: (Date | null)[] = [];
    for (let i = 0; i < weekday; i++) cells.push(null);
    for (let day = 1; day <= total; day++) cells.push(new Date(cursor.getFullYear(), cursor.getMonth(), day));
    while (cells.length % 7 !== 0) cells.push(null);
    return cells;
  }, [cursor]);

  const monthLabel = `${MONTH_NAMES[cursor.getMonth()]} ${cursor.getFullYear()}`;

  return (
    <div className="rsv-step">
      <header className="rsv-step__head">
        <span className="rsv-step__eyebrow">Paso 02</span>
        <h2 className="rsv-step__title">
          Tu <em>fecha</em> y tu <em>hora</em>.
        </h2>
        <p className="rsv-step__lead">
          Salón abierto 12:00 – 23:00. Brunch sábados y domingos 10:00 – 13:00.
        </p>
      </header>

      <div className="rsv-datetime">
        {/* Calendar */}
        <div className="rsv-cal">
          <div className="rsv-cal__head">
            <button
              type="button"
              className="rsv-cal__nav"
              onClick={() => {
                const prev = new Date(cursor.getFullYear(), cursor.getMonth() - 1, 1);
                // Don't allow going before current month
                if (prev.getFullYear() < today.getFullYear()
                    || (prev.getFullYear() === today.getFullYear() && prev.getMonth() < today.getMonth())) return;
                setCursor(prev);
              }}
              aria-label="Mes anterior"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <span className="rsv-cal__month">{monthLabel}</span>
            <button
              type="button"
              className="rsv-cal__nav"
              onClick={() => setCursor(new Date(cursor.getFullYear(), cursor.getMonth() + 1, 1))}
              aria-label="Mes siguiente"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          <div className="rsv-cal__weekdays">
            {DAY_LABELS.map((d) => (
              <span key={d}>{d}</span>
            ))}
          </div>

          <div className="rsv-cal__grid">
            {grid.map((d, i) => {
              if (!d) return <span key={i} className="rsv-cal__cell rsv-cal__cell--empty" />;
              const past = isPastDay(d);
              const isToday = isSameDay(d, today);
              const isSelected = date ? isSameDay(d, date) : false;
              return (
                <button
                  key={i}
                  type="button"
                  className={`rsv-cal__cell ${past ? 'is-past' : ''} ${isToday ? 'is-today' : ''} ${isSelected ? 'is-selected' : ''}`}
                  disabled={past}
                  onClick={() => onPickDate(d)}
                  aria-pressed={isSelected}
                >
                  {d.getDate()}
                </button>
              );
            })}
          </div>
        </div>

        {/* Time slots */}
        <div className="rsv-slots">
          <div className="rsv-slots__head">
            <span className="rsv-slots__label">Hora</span>
            <span className="rsv-slots__date">{date ? formatLong(date) : 'Elegí una fecha primero'}</span>
          </div>
          <motion.div
            className="rsv-slots__grid"
            initial={false}
            animate={{ opacity: date ? 1 : 0.45 }}
            transition={{ duration: 0.4 }}
          >
            {TIME_SLOTS.map((t) => (
              <button
                key={t}
                type="button"
                className={`rsv-slot ${time === t ? 'is-selected' : ''}`}
                onClick={() => onPickTime(t)}
                disabled={!date}
                aria-pressed={time === t}
              >
                {t}
              </button>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="rsv-step__actions">
        <button type="button" className="rsv-btn rsv-btn--ghost" onClick={onBack}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M19 12H5M11 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Atrás
        </button>
        <button
          type="button"
          className="rsv-btn rsv-btn--primary"
          onClick={onNext}
          disabled={!date || !time}
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
