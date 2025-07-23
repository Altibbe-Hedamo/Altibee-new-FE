// src/components/AnimatedTextBorder.tsx
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  direction?: 'left' | 'right' | 'up';
  delay?: number;
}

export default function AnimatedTextBorder({ children, direction = 'up', delay = 0 }: Props) {
  const slide = {
    left: { x: -60, opacity: 0 },
    right: { x: 60, opacity: 0 },
    up: { y: 40, opacity: 0 },
  };

  return (
    <motion.span
      initial={slide[direction]}
      whileInView={{ x: 0, y: 0, opacity: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay }}
      className="relative inline-block"
    >
      {children}
      <motion.span
        className="absolute left-0 -bottom-1 h-0.5 w-full bg-emerald-400"
        initial={{ width: 0 }}
        whileInView={{ width: '100%' }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8, delay: delay + 0.2, ease: 'easeOut' }}
      />
    </motion.span>
  );
}