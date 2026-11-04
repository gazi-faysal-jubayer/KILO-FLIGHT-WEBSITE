'use client';

import { useEffect, useRef } from 'react';
import { createRetroPixelField } from '@/shaders/animated-top-dock/retroPixelField';

/* The dock's dithered dusk field as a reusable background canvas. The lifecycle mirrors
   AnimatedTopDock's useShaderField: size from the host, pause off-screen and on hidden tabs. */
export default function DitherField({ className, pixelSize = 4, levels = 7, noise = 1, speed = 1 }: {
  className?: string;
  pixelSize?: number;
  levels?: number;
  noise?: number;
  speed?: number;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const options = useRef({ pixelSize, levels, noise, speed });
  options.current = { pixelSize, levels, noise, speed };

  useEffect(() => {
    const canvas = canvasRef.current;
    const host = canvas?.parentElement;
    if (!canvas || !host) return undefined;
    const field = createRetroPixelField(canvas, () => options.current);
    let frame = 0;
    let visible = true;
    let bounds = host.getBoundingClientRect();
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const tick = (now: number) => {
      field.resize(bounds.width, bounds.height);
      field.render(now);
      frame = visible && !document.hidden && !reduced ? requestAnimationFrame(tick) : 0;
    };
    const resize = new ResizeObserver(() => {
      bounds = host.getBoundingClientRect();
      if (!frame) tick(performance.now());
    });
    const intersection = new IntersectionObserver(([entry]) => {
      visible = entry?.isIntersecting ?? true;
      if (visible && !frame) frame = requestAnimationFrame(tick);
    });
    const onVisibility = () => { if (!document.hidden && visible && !frame) frame = requestAnimationFrame(tick); };
    resize.observe(host);
    intersection.observe(host);
    document.addEventListener('visibilitychange', onVisibility);
    frame = requestAnimationFrame(tick);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      resize.disconnect();
      intersection.disconnect();
      document.removeEventListener('visibilitychange', onVisibility);
      field.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" style={{ imageRendering: 'pixelated' }} />;
}
