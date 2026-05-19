import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import RevealText from '../components/RevealText';
import AnimatedCounter from '../components/AnimatedCounter';
import MagneticButton from '../components/MagneticButton';
import { CURRENT_EVENT } from '../data/events';
import { SITE } from '../data/menu';
import { EASINGS } from '../utils/easings';

export default function EventsTeaserSection() {
  const isTonight = CURRENT_EVENT.status === 'tonight';
  const waMsg = encodeURIComponent(
    `Hola Turo, quiero reservar para ${CURRENT_EVENT.title} (${CURRENT_EVENT.dateLabel})`,
  );

  return (
    <section className="section section--events" id="eventos-teaser">
      <div className="events__bg">
        <img src="/assets/img/espacio23.png" alt="" aria-hidden="true" />
        <div className="events__bg-overlay" />
      </div>

      <div className="events__layout">
        <div className="events__content">
          <span className="section__label">06 — Experiencias</span>
          <RevealText tag="h2" className="section__title section__title--white">
            Veladas que
          </RevealText>
          <RevealText tag="h2" className="section__title section__title--white section__title--italic" delay={0.15}>
            se cuentan después.
          </RevealText>

          <p className="events__lead">
            Maridajes, cortes especiales y celebraciones privadas. Cada temporada,
            Turo arma una experiencia que vale por sí sola.
          </p>

          <motion.div
            className="events__stats"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <div className="events__stat">
              <span className="events__stat-num"><AnimatedCounter target={50} />K+</span>
              <span className="events__stat-label">Seguidores en IG</span>
            </div>
            <div className="events__stat">
              <span className="events__stat-num"><AnimatedCounter target={2207} /></span>
              <span className="events__stat-label">Noches publicadas</span>
            </div>
            <div className="events__stat">
              <span className="events__stat-num"><AnimatedCounter target={7} /></span>
              <span className="events__stat-label">Días por semana</span>
            </div>
          </motion.div>

          <div className="events__ctas">
            <MagneticButton href="/eventos" className="btn btn--primary">
              Ver agenda completa
            </MagneticButton>
            <MagneticButton href={SITE.instagram} target="_blank" rel="noopener" className="btn btn--ghost btn--ghost-light">
              Síguenos en IG
            </MagneticButton>
          </div>
        </div>

        <motion.div
          className="featured-event"
          initial={{ opacity: 0, y: 40, rotate: -2 }}
          whileInView={{ opacity: 1, y: 0, rotate: -1.5 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: EASINGS.premium }}
        >
          {isTonight && (
            <div className="featured-event__live">
              <span className="featured-event__live-dot" />
              Esta semana
            </div>
          )}

          <Link to="/eventos" className="featured-event__inner">
            <div className="featured-event__flyer">
              <img src={CURRENT_EVENT.flyer} alt={`Flyer ${CURRENT_EVENT.title}`} />
            </div>

            <div className="featured-event__info">
              <span className="featured-event__date">{CURRENT_EVENT.dateLabel}</span>
              <h3 className="featured-event__title">
                {CURRENT_EVENT.title}
                {CURRENT_EVENT.subtitle && <em> {CURRENT_EVENT.subtitle}</em>}
              </h3>
              {CURRENT_EVENT.artist && (
                <p className="featured-event__artist">
                  <span>{CURRENT_EVENT.artistRole}</span>
                  <strong>{CURRENT_EVENT.artist}</strong>
                </p>
              )}
              <div className="featured-event__ctas">
                <a
                  href={`https://wa.me/${SITE.whatsapp}?text=${waMsg}`}
                  target="_blank"
                  rel="noopener"
                  className="btn btn--primary btn--sm"
                  onClick={(e) => e.stopPropagation()}
                >
                  Reservar
                </a>
                <span className="featured-event__detail">Ver más →</span>
              </div>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
