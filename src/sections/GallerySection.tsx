import { motion } from 'framer-motion';
import RevealText from '../components/RevealText';
import { containerVariants, cardVariants } from '../utils/motionVariants';

const PHOTOS = [
  { src: '/assets/img/espacio.png', alt: 'Salón principal de Turo' },
  { src: '/assets/img/espacio3.png', alt: 'Mesa puesta en Turo' },
  { src: '/assets/img/espacio5.png', alt: 'Barra y luz cálida de Turo' },
  { src: '/assets/img/espacio6.png', alt: 'Detalle del espacio Turo' },
];

export default function GallerySection() {
  return (
    <section className="section section--gallery" id="galeria">
      <div className="section__head">
        <span className="section__label">05 — El espacio</span>
        <RevealText tag="h2" className="section__title">
          Una mesa pensada para la velada.
        </RevealText>
        <p className="section__lead">
          Madera, cuero, luz cálida. Turo está hecho para quedarse — y volver.
        </p>
      </div>

      <motion.div
        className="gallery__grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {PHOTOS.map((p, i) => (
          <motion.figure
            key={p.src}
            className={`gallery__item gallery__item--${i + 1}`}
            variants={cardVariants}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
          >
            <img src={p.src} alt={p.alt} loading="lazy" />
          </motion.figure>
        ))}
      </motion.div>
    </section>
  );
}
