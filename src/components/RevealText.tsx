import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { EASINGS } from '../utils/easings';

interface RevealTextProps {
  children: string;
  className?: string;
  delay?: number;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div';
  staggerStep?: number;
}

export default function RevealText({
  children,
  className = '',
  delay = 0,
  tag: Tag = 'h2',
  staggerStep = 0.07,
}: RevealTextProps): ReactNode {
  const words = children.split(' ');
  return (
    <Tag className={className} style={{ display: 'inline-flex', flexWrap: 'wrap', columnGap: '0.3em' }}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} style={{ overflow: 'hidden', display: 'inline-block', paddingBottom: '0.14em' }}>
          <motion.span
            style={{ display: 'inline-block', willChange: 'transform' }}
            initial={{ y: '110%', rotate: 2 }}
            whileInView={{ y: 0, rotate: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.85, delay: delay + i * staggerStep, ease: EASINGS.premium }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
