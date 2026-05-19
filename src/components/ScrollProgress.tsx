import { motion, useScroll, useSpring } from 'framer-motion';

/**
 * Barra fina cobre en el tope que indica el progreso del scroll.
 * Resorte suave (stiffness 100, damping 20) — sin saltos bruscos.
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 20, mass: 0.4 });
  return <motion.div className="scroll-progress" style={{ scaleX }} aria-hidden="true" />;
}
