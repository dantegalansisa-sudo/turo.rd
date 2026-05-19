import { motion } from 'framer-motion';
import RevealText from '../components/RevealText';
import MagneticButton from '../components/MagneticButton';
import { SITE } from '../data/menu';
import { containerVariants, cardVariants } from '../utils/motionVariants';

export default function VisitSection() {
  const mapsQuery = encodeURIComponent(`${SITE.address}, República Dominicana`);

  return (
    <section className="section section--visit" id="visitanos">
      <div className="visit__head">
        <span className="section__label">07 — Visítanos</span>
        <RevealText tag="h2" className="section__title">
          Reservá. Manejá.
        </RevealText>
        <RevealText tag="h2" className="section__title section__title--italic" delay={0.15}>
          Nos vemos en Piantini.
        </RevealText>
        <p className="section__lead">
          Calle Andrés Julio Aybar #25 — Piantini. Salón climatizado, terraza y valet parking.
        </p>
      </div>

      <div className="visit__layout">
        <motion.div
          className="visit__cards"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <motion.a
            className="visit-card visit-card--pin"
            href={`https://www.google.com/maps/search/?api=1&query=${mapsQuery}`}
            target="_blank"
            rel="noopener"
            variants={cardVariants}
          >
            <div className="visit-card__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M12 21s-7-7.5-7-12a7 7 0 0114 0c0 4.5-7 12-7 12z" strokeLinejoin="round"/>
                <circle cx="12" cy="9" r="2.5"/>
              </svg>
            </div>
            <div className="visit-card__body">
              <span className="visit-card__label">Dirección</span>
              <h3>Calle Andrés Julio Aybar #25</h3>
              <p>Piantini · Santo Domingo, República Dominicana</p>
              <span className="visit-card__cta">Cómo llegar →</span>
            </div>
          </motion.a>

          <motion.div className="visit-card visit-card--hours" variants={cardVariants}>
            <div className="visit-card__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <circle cx="12" cy="12" r="9"/>
                <path d="M12 7v5l3 2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="visit-card__body">
              <span className="visit-card__label">Horario</span>
              <ul className="visit-hours">
                {SITE.hours.map(h => (
                  <li key={h.days}><span>{h.days}</span><strong>{h.time}</strong></li>
                ))}
              </ul>
              <div className="visit-card__status">
                <span className="visit-card__dot" />
                Abierto hoy
              </div>
            </div>
          </motion.div>

          <motion.div className="visit-card visit-card--contact" variants={cardVariants}>
            <div className="visit-card__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.37 1.9.72 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0122 16.92z" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="visit-card__body">
              <span className="visit-card__label">Reservas & Info</span>
              <h3>
                <a href={SITE.whatsappLink} target="_blank" rel="noopener">{SITE.phone}</a>
              </h3>
              <p>
                <a href={SITE.instagram} target="_blank" rel="noopener">{SITE.handle}</a>
                &nbsp;·&nbsp;
                <a href={SITE.whatsappLink} target="_blank" rel="noopener">WhatsApp directo</a>
              </p>
              <div className="visit-card__ctas">
                <MagneticButton href="/reservaciones" className="btn btn--primary btn--sm">
                  Reservar mesa
                </MagneticButton>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="visit__map"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          <iframe
            title="Ubicación Turo Steakhouse"
            src={`https://maps.google.com/maps?q=${mapsQuery}&t=&z=16&ie=UTF8&iwloc=&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="visit__map-pin">
            <div className="visit__map-pin-dot" />
            <span>Turo está aquí</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
