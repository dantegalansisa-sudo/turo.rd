import { motion } from 'framer-motion';
import RevealText from '../components/RevealText';
import { useParallax } from '../hooks/useParallax';
import { EASINGS } from '../utils/easings';

export default function ChefSection() {
  const { ref, y } = useParallax(50);

  return (
    <section className="section section--chef" id="chef">
      <div className="chef__watermark" aria-hidden="true">JOSPER</div>

      <div className="chef__grid">
        <div className="chef__media-col">
          <div className="chef__media" ref={ref}>
            <motion.div
              className="chef__image-wrap"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 1, ease: EASINGS.premium }}
            >
              <motion.img
                src="/assets/img/carne.png"
                alt="Cortes premium asados al Josper en Turo"
                style={{ y, scale: 1.05 }}
                className="chef__image"
              />
            </motion.div>

            <motion.div
              className="chef__stamp"
              initial={{ opacity: 0, scale: 0, rotate: -45 }}
              whileInView={{ opacity: 1, scale: 1, rotate: -8 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.4, ease: EASINGS.bounce }}
            >
              <span className="chef__stamp-top">Prime</span>
              <span className="chef__stamp-mid">Turo</span>
              <span className="chef__stamp-bot">Cuts</span>
            </motion.div>
          </div>

          <motion.div
            className="chef__tags"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <div><strong>500°C</strong><span>brasa del Josper</span></div>
            <div><strong>USDA</strong><span>Prime & Black Angus</span></div>
          </motion.div>
        </div>

        <div className="chef__content">
          <span className="section__label">03 — La filosofía</span>
          <RevealText tag="h2" className="section__title">
            Producto.
          </RevealText>
          <RevealText tag="h2" className="section__title section__title--italic" delay={0.15}>
            Fuego.
          </RevealText>
          <RevealText tag="h2" className="section__title" delay={0.3}>
            Tiempo.
          </RevealText>

          <div className="chef__quote-block">
            <svg className="chef__quote-mark" viewBox="0 0 32 32" aria-hidden="true">
              <path d="M0 20q0-6 2.5-10t7.5-7l2 3q-4 3-5.5 6t-1.5 7v3H0v-2zm17 0q0-6 2.5-10t7.5-7l2 3q-4 3-5.5 6t-1.5 7v3H17v-2z" fill="currentColor"/>
            </svg>
            <p className="chef__quote">
              El secreto no es la carne — es el respeto. Producto, fuego y tiempo:
              tres ingredientes, ninguno opcional.
            </p>
            <p className="chef__signature">
              <span>—</span> Cocina Turo · Steakhouse Premium
            </p>
          </div>

          <div className="chef__pillars">
            <div className="chef-pillar">
              <span className="chef-pillar__num">01</span>
              <strong>Producto premium</strong>
              <span>USDA Prime, Black Angus, dry-aged 30+ días. Maduración propia.</span>
            </div>
            <div className="chef-pillar">
              <span className="chef-pillar__num">02</span>
              <strong>Horno Josper</strong>
              <span>Brasa de carbón a 500°C — sello, sabor ahumado, jugosidad sellada.</span>
            </div>
            <div className="chef-pillar">
              <span className="chef-pillar__num">03</span>
              <strong>Mesa que celebra</strong>
              <span>Charcutería ibérica, raw bar y maridajes para alargar la noche.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
