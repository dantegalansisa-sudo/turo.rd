import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import RevealText from '../components/RevealText';
import MagneticButton from '../components/MagneticButton';
import { MENU } from '../data/menu';
import { containerVariants, cardVariants } from '../utils/motionVariants';

const CATEGORY_COUNTS: Record<string, string> = {
  'crudos-entradas': '25+ platos',
  'josper-grill': '30+ cortes',
  'pescados-mariscos': '4 del mar',
  'pastas-arroces': '5 platos',
  'ensaladas-sopas': '10 platos',
  'brunch': 'Sáb & Dom',
};

export default function MenuTeaserSection() {
  const totalDishes = MENU.reduce(
    (acc, c) => acc + c.sections.reduce((a, s) => a + s.dishes.length, 0),
    0,
  );

  return (
    <section className="section section--dark menu-teaser" id="menu-teaser">
      <div className="menu-teaser__head">
        <div className="menu-teaser__head-left">
          <span className="section__label">02 — La Carta</span>
          <RevealText tag="h2" className="section__title">
            La carta
          </RevealText>
          <RevealText tag="h2" className="section__title section__title--italic" delay={0.12}>
            no es un menú.
          </RevealText>
          <RevealText tag="h2" className="section__title" delay={0.24}>
            Es un mapa.
          </RevealText>
        </div>
        <div className="menu-teaser__head-right">
          <p className="menu-teaser__lead">
            Desde el filo del raw bar hasta la brasa del Josper. Seis territorios,
            una sola noche — empezá por el que te llame y dejá que la mesa decida el resto.
          </p>
          <div className="menu-teaser__meta">
            <div>
              <strong>{totalDishes}+</strong>
              <span>Platos en la carta</span>
            </div>
            <div>
              <strong>{MENU.length}</strong>
              <span>Categorías</span>
            </div>
          </div>
          <MagneticButton href="/menu" className="btn btn--ghost">Ver la carta completa →</MagneticButton>
        </div>
      </div>

      <motion.div
        className="menu-teaser__grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {MENU.map((cat, i) => (
          <motion.article key={cat.slug} className="menu-teaser__card card" variants={cardVariants}>
            <Link to={`/menu/${cat.slug}`} className="menu-teaser__link">
              <div className="menu-teaser__media menu-teaser__media--logo">
                <img src="/assets/img/logo.png" alt="" loading="lazy" />
                <span className="menu-teaser__media-soon">Foto próximamente</span>
                <span className="menu-teaser__count">{CATEGORY_COUNTS[cat.slug]}</span>
              </div>
              <div className="menu-teaser__body">
                <span className="menu-teaser__index">0{i + 1}</span>
                <h3 className="menu-teaser__title">{cat.title}</h3>
                <p className="menu-teaser__tagline">{cat.tagline}</p>
                <span className="menu-teaser__arrow">Explorar →</span>
              </div>
            </Link>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
