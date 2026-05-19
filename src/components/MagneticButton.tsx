import { useRef, useState, type ReactNode, type MouseEvent } from 'react';
import { motion } from 'framer-motion';

interface Props {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  target?: string;
  rel?: string;
  magnetRadius?: number;
  magnetStrength?: number;
  type?: 'button' | 'submit' | 'reset';
}

export default function MagneticButton({
  children, href, onClick, className = '', target, rel,
  magnetRadius = 90, magnetStrength = 0.35, type = 'button',
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    const dist = Math.hypot(dx, dy);
    if (dist < magnetRadius) setPos({ x: dx * magnetStrength, y: dy * magnetStrength });
    else setPos({ x: 0, y: 0 });
  };
  const handleMouseLeave = () => setPos({ x: 0, y: 0 });

  return (
    <div ref={ref} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} style={{ display: 'inline-block' }}>
      <motion.div animate={{ x: pos.x, y: pos.y }} transition={{ type: 'spring', stiffness: 200, damping: 18, mass: 0.4 }}>
        {href ? (
          <a href={href} target={target} rel={rel} className={className} onClick={onClick}>{children}</a>
        ) : (
          <button type={type} onClick={onClick} className={className}>{children}</button>
        )}
      </motion.div>
    </div>
  );
}
