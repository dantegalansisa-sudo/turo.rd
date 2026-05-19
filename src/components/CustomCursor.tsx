import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 18);
      cursorY.set(e.clientY - 18);
    };
    const ring = document.getElementById('cursor-ring');
    const handleHoverIn = () => ring?.classList.add('cursor--hover');
    const handleHoverOut = () => ring?.classList.remove('cursor--hover');
    window.addEventListener('mousemove', moveCursor);

    const selector = 'a, button, [role="button"], .card, input, textarea, select, label';
    const attach = () => {
      document.querySelectorAll(selector).forEach((el) => {
        el.addEventListener('mouseenter', handleHoverIn);
        el.addEventListener('mouseleave', handleHoverOut);
      });
    };
    attach();
    const observer = new MutationObserver(() => attach());
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      observer.disconnect();
    };
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div className="cursor-dot" style={{ x: cursorX, y: cursorY, translateX: 10, translateY: 10 }} />
      <motion.div id="cursor-ring" className="cursor-ring" style={{ x: springX, y: springY }} />
    </>
  );
}
