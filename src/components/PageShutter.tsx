'use client';

import React, { useEffect, useLayoutEffect, useState } from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';

const PANELS = ['#FF2A2A', '#0F172A', '#0284C7', '#B45309', '#D97706'];
const EASE_SHUTTER = [0.76, 0, 0.24, 1] as const;

// Path of the previously rendered page; null until the first client render.
// Comparing paths (instead of a "mounted" flag) keeps StrictMode's double effects from replaying the shutter on first load.
let lastPath: string | null = null;

const useIsoLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

/** Racing-shutter wipe that plays on client-side navigations (not on the first load). */
export default function PageShutter() {
  const reduce = useReducedMotion();
  const [play, setPlay] = useState(false);

  useIsoLayoutEffect(() => {
    const path = window.location.pathname;
    const navigated = lastPath !== null && lastPath !== path;
    lastPath = path;
    if (navigated && !reduce && !path.startsWith('/admin')) setPlay(true);
  }, []);

  // Safety net: never leave the overlay up if animation frames are throttled (e.g. background tab).
  useEffect(() => {
    if (!play) return;
    const t = setTimeout(() => setPlay(false), 2000);
    return () => clearTimeout(t);
  }, [play]);

  if (!play) return null;

  return (
    <div className="page-shutter" aria-hidden="true">
      {PANELS.map((color, i) => (
        <motion.div
          key={color}
          className="page-shutter-panel"
          style={{ background: color }}
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          transition={{ duration: 0.55, ease: EASE_SHUTTER, delay: 0.32 + i * 0.06 }}
          onAnimationComplete={i === PANELS.length - 1 ? () => setPlay(false) : undefined}
        />
      ))}
      <motion.div
        className="page-shutter-logo"
        initial={{ opacity: 0, scale: 0.6, rotate: -8 }}
        animate={{ opacity: [0, 1, 1, 0], scale: [0.6, 1.05, 1, 0.9], rotate: [-8, 0, 0, 0] }}
        transition={{ duration: 0.62, times: [0, 0.35, 0.7, 1], ease: 'easeOut' }}
      >
        <Image src="/images/logo.png" alt="" width={96} height={96} priority />
        <span className="page-shutter-word">KILOFLIGHT</span>
      </motion.div>
    </div>
  );
}
