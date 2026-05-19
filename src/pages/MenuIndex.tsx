import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import RevealText from '../components/RevealText';
import { MENU } from '../data/menu';
import { containerVariants, cardVariants } from '../utils/motionVariants';

export default function MenuIndex() {
  return (
    <article className="page page--menu-index">
      <header className="page__head">
        <span className="section__label">Nuestra Carta</span>
        <RevealText tag="h1" className="page__title">
          Una carta
        </RevealText>
        <RevealText tag="h1" className="page__title page__title--italic" delay={0.15}>
          escrita con humo.
        </RevealText>
        <p className="page__lead">
          Crudos, brasa, mar y horno — cada categoría es una manera de empezar la velada.
          Las fotos reales llegan pronto; por ahora dejamos que los nombres hablen.
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
              <div className="menu-index__media menu-index__media--logo">
                <img src="/assets/img/logo.png" alt="" loading="lazy" />
                <span className="menu-index__media-soon">Foto próximamente</span>
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
