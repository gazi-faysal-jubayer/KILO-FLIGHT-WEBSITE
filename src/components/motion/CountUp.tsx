'use client';

import React, { useEffect, useRef, useState } from 'react';
import { animate, useInView, useReducedMotion } from 'framer-motion';

interface CountUpProps {
  to: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}

// en-IN grouping matches the proposal's Lakh notation (e.g. 19,19,000)
const format = (v: number, decimals: number) =>
  v.toLocaleString('en-IN', { minimumFractionDigits: decimals, maximumFractionDigits: decimals });

/** Counts from 0 to `to` once the number scrolls into view. */
export default function CountUp({ to, decimals = 0, prefix = '', suffix = '', duration = 1.6 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setValue(to);
      return;
    }
    const controls = animate(0, to, { duration, ease: [0.16, 1, 0.3, 1], onUpdate: setValue });
    return () => controls.stop();
  }, [inView, reduce, to, duration]);

  return (
    <span ref={ref} aria-label={`${prefix}${format(to, decimals)}${suffix}`}>
      <span aria-hidden="true">
        {prefix}
        {format(value, decimals)}
        {suffix}
      </span>
    </span>
  );
}
