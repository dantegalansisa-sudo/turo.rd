import { motion } from 'framer-motion';
import RevealText from '../components/RevealText';
import { EASINGS } from '../utils/easings';

/**
 * Bloque del Chef Ejecutivo de Turo.
 * Mientras llegan los datos reales, se muestra el logo de Turo como placeholder
 * dentro de un cuadro con la nota "Foto próximamente — Chef Ejecutivo".
 */
export default function ChefBlock() {
  return (
    <section className="chef-block" id="chef-equipo">
      <div className="chef-block__inner">
        <motion.div
          className="chef-block__media"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: EASINGS.premium }}
        >
          <img
            src="/assets/img/logo.png"
            alt="Turo"
            className="chef-block__logo"
          />
          <span className="chef-block__placeholder-tag">Foto próximamente</span>
          <span className="chef-block__placeholder-note">— Chef Ejecutivo · Turo</span>
        </motion.div>

        <div className="chef-block__content">
          <span className="chef-block__role">04 — La mano detrás de la brasa</span>
          <RevealText tag="h2" className="chef-block__name">
            El Chef
          </RevealText>
          <RevealText tag="h2" className="chef-block__name chef-block__name--italic" delay={0.12}>
            de Turo.
          </RevealText>

          <motion.p
            className="chef-block__bio"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.3, ease: EASINGS.premium }}
          >
            Detrás de cada corte hay una decisión: cuánto madurar, cuándo sacar de la
            brasa, qué guarnición se siente honesta con el plato. El Chef Ejecutivo
            de Turo trabaja con cortes USDA Prime y Black Angus seleccionados a mano,
            respeta el producto y deja que el horno Josper haga lo suyo — sin trucos,
            sin atajos.
          </motion.p>

          <motion.p
            className="chef-block__bio"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.45, ease: EASINGS.premium }}
          >
            Su filosofía es simple: producto premium, fuego limpio, tiempo justo. El
            resultado se mide en silencio en la mesa — ahí donde la conversación se
            corta para masticar.
          </motion.p>

          <motion.div
            className="chef-block__signature"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            “Tres ingredientes — y ninguno opcional.”
          </motion.div>
        </div>
      </div>
    </section>
  );
}
