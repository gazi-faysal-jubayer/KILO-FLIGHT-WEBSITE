'use client';

import React from 'react';
import { motion, type Variants } from 'framer-motion';

// Reduced motion is handled globally by <MotionConfig reducedMotion="user"> in app/template.tsx
const EASE_OUT = [0.22, 1, 0.36, 1] as const;

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  y?: number;
  x?: number;
  id?: string;
}

/** Fades + slides its content in once when scrolled into view. */
export function Reveal({ children, className, style, delay = 0, y = 28, x = 0, id }: RevealProps) {
  return (
    <motion.div
      id={id}
      className={className}
      style={style}
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: EASE_OUT, delay }}
    >
      {children}
    </motion.div>
  );
}

const groupVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: [0.34, 1.4, 0.64, 1] } },
};

/** Stagger container: direct RevealItem children animate in one after another. */
export function RevealGroup({ children, className, style, id }: Omit<RevealProps, 'delay' | 'y' | 'x'>) {
  return (
    <motion.div
      id={id}
      className={className}
      style={style}
      variants={groupVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
    >
      {children}
    </motion.div>
  );
}

/** A bar that grows from 0 to full size along one axis when scrolled into view. */
export function GrowBar({
  className,
  style,
  axis = 'x',
  delay = 0,
  duration = 1,
}: {
  className?: string;
  style?: React.CSSProperties;
  axis?: 'x' | 'y';
  delay?: number;
  duration?: number;
}) {
  const from = axis === 'x' ? { scaleX: 0 } : { scaleY: 0 };
  const to = axis === 'x' ? { scaleX: 1 } : { scaleY: 1 };
  return (
    <motion.div
      className={className}
      style={{ ...style, transformOrigin: axis === 'x' ? 'left center' : 'center top' }}
      initial={from}
      whileInView={to}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration, ease: EASE_OUT, delay }}
    />
  );
}

export function RevealItem({ children, className, style }: Omit<RevealProps, 'delay' | 'y' | 'x' | 'id'>) {
  return (
    <motion.div className={className} style={style} variants={itemVariants}>
      {children}
    </motion.div>
  );
}
