import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import StepperHeader from '../components/reservation/StepperHeader';
import StepZones, { type Zone } from '../components/reservation/StepZones';
import StepDateTime from '../components/reservation/StepDateTime';
import StepDetails, { type DetailsState } from '../components/reservation/StepDetails';
import ReservationSummary from '../components/reservation/ReservationSummary';
import ScrollProgress from '../components/ScrollProgress';

const WHATSAPP = '18295234738';

const STEPS = [
  { id: 1 as const, label: 'Zona' },
  { id: 2 as const, label: 'Fecha & Hora' },
  { id: 3 as const, label: 'Detalles' },
];

function formatDateForMsg(d: Date) {
  return d.toLocaleDateString('es-DO', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
}

function buildMessage(opts: {
  zone: Zone; date: Date; time: string; details: DetailsState;
}) {
  const lines = [
    '🍽️ *Nueva reserva — Turo Steakhouse*',
    `📍 Zona: ${opts.zone}`,
    `📅 Fecha: ${formatDateForMsg(opts.date)}`,
    `🕐 Hora: ${opts.time}`,
    `👤 Nombre: ${opts.details.name}`,
    `📞 Teléfono: ${opts.details.phone}`,
    `👥 Personas: ${opts.details.guests}`,
    `📝 Notas: ${opts.details.notes.trim() || 'Ninguna'}`,
  ];
  return lines.join('\n');
}

export default function ReservationsPage() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [zone, setZone] = useState<Zone | null>(null);
  const [date, setDate] = useState<Date | null>(null);
  const [time, setTime] = useState<string | null>(null);
  const [details, setDetails] = useState<DetailsState>({
    name: '', phone: '', guests: '2', notes: '',
  });

  const submit = () => {
    if (!zone || !date || !time) return;
    const msg = buildMessage({ zone, date, time, details });
    const url = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank', 'noopener');
  };

  const canSubmit = Boolean(zone && date && time && details.name.trim() && details.phone.trim() && details.guests);

  return (
    <div className="rsv-page">
      <ScrollProgress />

      <motion.div
        className="rsv-page__bg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        aria-hidden="true"
      >
        <div className="rsv-page__bg-grain" />
        <div className="rsv-page__bg-glow" />
      </motion.div>

      <motion.header
        className="rsv-page__head"
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
      >
        <Link to="/" className="rsv-page__brand" aria-label="Volver al inicio">
          <span className="rsv-page__brand-mark">
            <img src="/assets/img/logo.png" alt="" />
          </span>
          <span className="rsv-page__brand-stack">
            <span className="rsv-page__brand-word">TURO</span>
            <span className="rsv-page__brand-sub">Reservar mesa</span>
          </span>
        </Link>

        <Link to="/" className="rsv-page__back">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M11 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Volver al sitio
        </Link>
      </motion.header>

      <main className="rsv-page__main">
        <motion.div
          className="rsv-page__card"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
        >
          <StepperHeader current={step} steps={STEPS} />

          <div className="rsv-page__stage">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step-1"
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                >
                  <StepZones
                    selected={zone}
                    onSelect={setZone}
                    onNext={() => zone && setStep(2)}
                  />
                </motion.div>
              )}
              {step === 2 && (
                <motion.div
                  key="step-2"
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                >
                  <StepDateTime
                    date={date}
                    time={time}
                    onPickDate={(d) => setDate(d)}
                    onPickTime={(t) => setTime(t)}
                    onBack={() => setStep(1)}
                    onNext={() => date && time && setStep(3)}
                  />
                </motion.div>
              )}
              {step === 3 && (
                <motion.div
                  key="step-3"
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                >
                  <StepDetails
                    details={details}
                    onChange={setDetails}
                    onBack={() => setStep(2)}
                    onSubmit={submit}
                    canSubmit={canSubmit}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {step > 1 && (
            <ReservationSummary
              zone={zone}
              date={date}
              time={time}
              guests={step === 3 ? details.guests : undefined}
              name={step === 3 ? details.name : undefined}
            />
          )}
        </motion.div>

        <motion.aside
          className="rsv-page__aside"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <span className="rsv-page__aside-eyebrow">Cómo funciona</span>
          <p className="rsv-page__aside-text">
            Reservás en tres pasos y confirmamos por WhatsApp en minutos — con
            confirmación humana, sin call centers ni esperas. La mesa queda firme
            apenas respondemos.
          </p>
          <dl className="rsv-page__aside-meta">
            <div>
              <dt>WhatsApp</dt>
              <dd>+1 (829) 523-4738</dd>
            </div>
            <div>
              <dt>Dirección</dt>
              <dd>Andrés Julio Aybar 25 · Piantini</dd>
            </div>
          </dl>
        </motion.aside>
      </main>
    </div>
  );
}
