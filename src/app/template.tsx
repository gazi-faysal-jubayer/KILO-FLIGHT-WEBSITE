'use client';

import React from 'react';
import { MotionConfig } from 'framer-motion';
import PageShutter from '@/components/PageShutter';

// template.tsx remounts on every navigation, which is what retriggers the shutter.
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <PageShutter />
      {children}
    </MotionConfig>
  );
}
