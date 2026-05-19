import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import MagneticButton from '../components/MagneticButton';
import { EASINGS } from '../utils/easings';
import { SITE } from '../data/menu';

export default function HeroSection() {
  const { scrollYProgress } = useScroll();
  const bgScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.04]);
  const contentY = useTransform(scrollYProgress, [0, 0.4], [0, 50]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  return (
    <section className="hero2">
      <motion.div className="hero2__bg" style={{ scale: bgScale }} aria-hidden="true">
        <img src="/assets/img/heros.jpg" alt="" className="hero2__bg-img" />
        <div className="hero2__bg-overlay" />
      </motion.div>

      <div className="hero2__decor" aria-hidden="true">
        <div className="hero2__sprinkle hero2__sprinkle--1" />
        <div className="hero2__sprinkle hero2__sprinkle--2" />
        <div className="hero2__sprinkle hero2__sprinkle--3" />
        <div className="hero2__dot hero2__dot--1" />
        <div className="hero2__dot hero2__dot--2" />
        <div className="hero2__dot hero2__dot--3" />
      </div>

      <motion.div className="hero2__content" style={{ y: contentY, opacity: contentOpacity }}>
        <motion.span
          className="hero2__eyebrow"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASINGS.premium }}
        >
          Santo Domingo · Steakhouse Premium
        </motion.span>

        <h1 className="hero2__title">
          <motion.span
            className="hero2__title-line"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, delay: 0.1, ease: EASINGS.premium }}
          >
            La carne
          </motion.span>
          <motion.span
            className="hero2__title-line"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, delay: 0.3, ease: EASINGS.premium }}
          >
            se <span className="hero2__word-accent">respeta.</span>
          </motion.span>
          <motion.span
            className="hero2__title-line"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, delay: 0.5, ease: EASINGS.premium }}
          >
            Y se come <span className="hero2__word-accent">despacio.</span>
          </motion.span>
        </h1>

        <motion.p
          className="hero2__subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85, ease: EASINGS.premium }}
        >
          USDA Prime y Black Angus al Josper, raw bar de producto fresco y una
          mesa larga donde nadie tiene apuro. El fuego no se apaga — vení a sentarte.
        </motion.p>

        <motion.div
          className="hero2__ctas"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.05, ease: EASINGS.premium }}
        >
          <MagneticButton href="/reservations" className="btn-chunky btn-chunky--primary">
            Reservar mesa
          </MagneticButton>
          <Link to="/menu" className="btn-chunky btn-chunky--ghost">
            Ver el menú
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </motion.div>

        <motion.div
          className="hero2__meta"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
        >
          {SITE.hours.map((h) => (
            <div key={h.days} className="hero2__meta-item">
              <span>{h.days}</span>
              <strong>{h.time}</strong>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="hero2__badge"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 1.4, ease: EASINGS.bounce }}
      >
        <svg viewBox="0 0 120 120" className="hero2__badge-svg">
          <defs>
            <path id="circlePath" d="M 60, 60 m -45, 0 a 45,45 0 1,1 90,0 a 45,45 0 1,1 -90,0" />
          </defs>
          <text className="hero2__badge-text">
            <textPath href="#circlePath">
              · JOSPER GRILL · USDA PRIME · BLACK ANGUS · DRY AGED
            </textPath>
          </text>
        </svg>
        <div className="hero2__badge-center">T</div>
      </motion.div>

      <div className="hero2__scroll" aria-hidden="true">
        <span>Scroll</span>
        <div className="hero2__scroll-line" />
      </div>
    </section>
  );
}
