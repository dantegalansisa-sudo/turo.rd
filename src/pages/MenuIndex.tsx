import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import RevealText from '../components/RevealText';
import { MENU } from '../data/menu';
import { containerVariants, cardVariants } from '../utils/motionVariants';

const COVERS: Record<string, string> = {
  'crudos-entradas': '/assets/img/food87.png',
  'josper-grill': '/assets/img/carne.png',
  'pescados-mariscos': '/assets/img/food55.png',
  'pastas-arroces': '/assets/img/food.png',
  'ensaladas-sopas': '/assets/img/food12.png',
  'brunch': '/assets/img/postre.png',
};

export default function MenuIndex() {
  return (
    <article className="page page--menu-index">
      <header className="page__head">
        <span className="section__label">Nuestro Menú</span>
        <RevealText tag="h1" className="page__title">
          Seis mundos.
        </RevealText>
        <RevealText tag="h1" className="page__title page__title--italic" delay={0.15}>
          Una misma brasa.
        </RevealText>
        <p className="page__lead">
          Cada categoría es una manera distinta de vivir Turo. Elegí por dónde empezar.
        </p>
      </header>

      <motion.div
        className="menu-index__grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {MENU.map((cat, i) => (
          <motion.div key={cat.slug} className="menu-index__card card" variants={cardVariants}>
            <Link to={`/menu/${cat.slug}`}>
              <div className="menu-index__media">
                <img src={COVERS[cat.slug] ?? '/assets/img/carne.png'} alt={cat.title} loading="lazy" />
              </div>
              <div className="menu-index__body">
                <span className="menu-index__num">0{i + 1}</span>
                <h2>{cat.title}</h2>
                <p>{cat.tagline}</p>
                <span className="menu-index__arrow">Explorar →</span>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </article>
  );
}
