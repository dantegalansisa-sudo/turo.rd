import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import RevealText from '../components/RevealText';
import { EASINGS } from '../utils/easings';

const PHOTOS = [
  { src: '/assets/img/espacio.png' },
  { src: '/assets/img/espacio3.png' },
  { src: '/assets/img/espacio4.png' },
  { src: '/assets/img/espacio5.png' },
  { src: '/assets/img/espacio6.png' },
  { src: '/assets/img/espacio23.png' },
  { src: '/assets/img/espacio45.png' },
  { src: '/assets/img/espacio1.png' },
];

export default function GallerySection() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = useCallback((dir: 1 | -1) => {
    setDirection(dir);
    setIndex((i) => (i + dir + PHOTOS.length) % PHOTOS.length);
  }, []);

  // Autoplay 6s
  useEffect(() => {
    const t = setInterval(() => {
      setDirection(1);
      setIndex((i) => (i + 1) % PHOTOS.length);
    }, 6000);
    return () => clearInterval(t);
  }, []);

  const current = PHOTOS[index];

  return (
    <section className="section section--gallery" id="galeria">
      <div className="section__head">
        <span className="section__label">05 — El espacio</span>
        <RevealText tag="h2" className="section__title">
          Hecho a mano,
        </RevealText>
        <RevealText tag="h2" className="section__title section__title--italic" delay={0.15}>
          servido con calma.
        </RevealText>
        <p className="section__lead">
          Madera, cuero, luz tibia. Turo está pensado para quedarse — y para volver.
        </p>
      </div>

      <div className="gallery-slider">
        <div className="gallery-slider__stage">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current.src}
              className="gallery-slider__slide"
              custom={direction}
              initial={{ opacity: 0, x: direction === 1 ? 40 : -40, scale: 1.04 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: direction === 1 ? -40 : 40, scale: 1.02 }}
              transition={{ duration: 0.7, ease: EASINGS.premium }}
            >
              <img src={current.src} alt="" loading="lazy" />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="gallery-slider__controls">
          <button className="gallery-slider__btn" onClick={() => go(-1)} aria-label="Foto anterior">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div className="gallery-slider__middle">
            <div className="gallery-slider__bullets" role="tablist" aria-label="Selector de fotos">
              {PHOTOS.map((p, i) => (
                <button
                  key={p.src}
                  className={`gallery-slider__bullet ${i === index ? 'gallery-slider__bullet--active' : ''}`}
                  onClick={() => { setDirection(i > index ? 1 : -1); setIndex(i); }}
                  aria-label={`Ir a foto ${i + 1}`}
                  aria-selected={i === index}
                />
              ))}
            </div>
            <span className="gallery-slider__count">
              {String(index + 1).padStart(2, '0')} / {String(PHOTOS.length).padStart(2, '0')}
            </span>
          </div>

          <button className="gallery-slider__btn" onClick={() => go(1)} aria-label="Foto siguiente">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
