import { motion } from 'framer-motion';
import RevealText from '../components/RevealText';
import MagneticButton from '../components/MagneticButton';
import { useParallax } from '../hooks/useParallax';
import { SITE } from '../data/menu';
import { CURRENT_EVENT, UPCOMING_EVENTS } from '../data/events';
import { containerVariants, cardVariants } from '../utils/motionVariants';
import { EASINGS } from '../utils/easings';

const EXPERIENCES = [
  {
    title: 'Cenas de maridaje',
    desc: 'Cinco tiempos, cinco copas. Bodegas invitadas y cortes premium pensados para cada vino.',
    img: '/assets/img/espacio4.png',
  },
  {
    title: 'Cumpleaños & celebraciones',
    desc: 'Mesas privadas para 8 – 24 personas, menús a medida, brindis de inicio y torta de la casa.',
    img: '/assets/img/espacio3.png',
  },
  {
    title: 'Eventos corporativos',
    desc: 'Cenas de negocios, lanzamientos y after-office. Salón privado, AV profesional, atención dedicada.',
    img: '/assets/img/espacio45.png',
  },
];

export default function Eventos() {
  const { ref, y } = useParallax(50);
  const isTonight = CURRENT_EVENT.status === 'tonight';
  const waMsg = encodeURIComponent(
    `Hola Turo, quiero reservar para "${CURRENT_EVENT.title}" (${CURRENT_EVENT.dateLabel}). ¿Tienen disponibilidad?`,
  );

  return (
    <article className="page page--eventos">
      <section className="eventos__hero">
        <div className="eventos__hero-bg" ref={ref}>
          <motion.img src="/assets/img/espacio23.png" alt="" style={{ y, scale: 1.1 }} />
          <div className="eventos__hero-overlay" />
        </div>
        <div className="eventos__hero-content">
          <span className="section__label">Experiencias & Cenas Privadas</span>
          <RevealText tag="h1" className="page__title page__title--white">
            Donde la velada
          </RevealText>
          <RevealText tag="h1" className="page__title page__title--white page__title--italic" delay={0.15}>
            se convierte en historia.
          </RevealText>
          <p className="page__lead page__lead--white">
            Cenas de maridaje, cortes especiales y celebraciones privadas — Turo te recibe.
          </p>
        </div>
      </section>

      <section className="section section--featured" id="esta-semana">
        <div className="featured__head">
          <div>
            <span className="section__label">{isTonight ? 'Esta semana' : 'Próximamente'}</span>
            <RevealText tag="h2" className="section__title">No te lo pierdas</RevealText>
          </div>
          {isTonight && (
            <div className="featured__live-pill">
              <span className="featured__live-dot" />
              {CURRENT_EVENT.dateLabel}
            </div>
          )}
        </div>

        <motion.div
          className="featured__layout"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.9, ease: EASINGS.premium }}
        >
          <div className="featured__flyer-wrap">
            <div className="featured__flyer">
              <img src={CURRENT_EVENT.flyer} alt={`Flyer ${CURRENT_EVENT.title}`} />
            </div>
            {CURRENT_EVENT.sponsor && (
              <div className="featured__sponsor">
                <span>Presentado con</span>
                <strong>{CURRENT_EVENT.sponsor}</strong>
              </div>
            )}
          </div>

          <div className="featured__info">
            <span className="featured__date">{CURRENT_EVENT.dateLabel}{CURRENT_EVENT.time && ` · ${CURRENT_EVENT.time}`}</span>
            <h3 className="featured__title">
              {CURRENT_EVENT.title}
              {CURRENT_EVENT.subtitle && (
                <em className="featured__title-sub"> {CURRENT_EVENT.subtitle}</em>
              )}
            </h3>

            {CURRENT_EVENT.artist && (
              <div className="featured__artist">
                <span className="featured__artist-role">{CURRENT_EVENT.artistRole}</span>
                <strong className="featured__artist-name">{CURRENT_EVENT.artist}</strong>
              </div>
            )}

            <ul className="featured__details">
              <li>
                <span>Dónde</span>
                <p>{SITE.address}</p>
              </li>
              <li>
                <span>Reservas</span>
                <p><a href={SITE.whatsappLink} target="_blank" rel="noopener">{SITE.phone}</a></p>
              </li>
              <li>
                <span>Cupos</span>
                <p>Limitados — confirmación con depósito</p>
              </li>
            </ul>

            <div className="featured__ctas">
              <MagneticButton
                href={`https://wa.me/${SITE.whatsapp}?text=${waMsg}`}
                target="_blank"
                rel="noopener"
                className="btn btn--primary"
              >
                Reservar lugar
              </MagneticButton>
              <MagneticButton href={SITE.instagram} target="_blank" rel="noopener" className="btn btn--ghost">
                Ver detalles en IG
              </MagneticButton>
            </div>
          </div>
        </motion.div>
      </section>

      {UPCOMING_EVENTS.length > 0 && (
        <section className="section section--agenda">
          <div className="section__head">
            <span className="section__label">Próximamente</span>
            <RevealText tag="h2" className="section__title">Agenda de la temporada.</RevealText>
            <p className="section__lead">
              Seguinos en Instagram — anunciamos cada experiencia con sus detalles y cupos disponibles.
            </p>
          </div>

          <motion.div
            className="agenda__grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {UPCOMING_EVENTS.map((ev) => (
              <motion.article key={ev.id} className="agenda-card card" variants={cardVariants}>
                <div className="agenda-card__media">
                  <img src={ev.flyer} alt={ev.title} loading="lazy" />
                </div>
                <div className="agenda-card__body">
                  <span className="agenda-card__date">{ev.dateLabel}{ev.time && ` · ${ev.time}`}</span>
                  <h3>{ev.title}</h3>
                  {ev.artistRole && <p>{ev.artistRole}</p>}
                  {ev.artist && <strong>{ev.artist}</strong>}
                </div>
              </motion.article>
            ))}
          </motion.div>
        </section>
      )}

      <section className="section">
        <div className="section__head">
          <span className="section__label">Qué hacemos</span>
          <RevealText tag="h2" className="section__title">Tres formas de vivir</RevealText>
          <RevealText tag="h2" className="section__title section__title--italic" delay={0.15}>Turo.</RevealText>
        </div>

        <motion.div
          className="eventos__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {EXPERIENCES.map((e) => (
            <motion.article key={e.title} className="eventos__card card" variants={cardVariants}>
              <div className="eventos__card-media">
                <img src={e.img} alt={e.title} loading="lazy" />
              </div>
              <div className="eventos__card-body">
                <h3>{e.title}</h3>
                <p>{e.desc}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <section className="section section--cta-final">
        <RevealText tag="h2" className="section__title section__title--center">
          Organicemos tu próxima velada.
        </RevealText>
        <p className="section__lead section__lead--center">
          Escribinos por WhatsApp con la fecha, el tipo de evento y la cantidad de personas — coordinamos todo.
        </p>
        <div className="category__cta-buttons">
          <MagneticButton href={SITE.whatsappLink} target="_blank" rel="noopener" className="btn btn--primary">
            Coordinar evento
          </MagneticButton>
          <MagneticButton href={SITE.instagram} target="_blank" rel="noopener" className="btn btn--ghost">
            Ver últimas veladas en IG
          </MagneticButton>
        </div>
      </section>
    </article>
  );
}
