'use client';

import React from 'react';
import { ThreeDPaper } from '@/shaders/3d-paper/ThreeDPaper';

export function Scene() {
  return (
    <div className="shader-frame">
      <ThreeDPaper
        variant="certificate"
      />
    </div>
  );
}

export default Scene;
