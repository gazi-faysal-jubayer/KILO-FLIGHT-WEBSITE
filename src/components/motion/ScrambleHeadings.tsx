'use client';

import { useEffect } from 'react';

const GLYPHS = '█▓▒░<>/\\_=+*#01';
const DURATION = 650;

/* Terminal "decode" reveal for every section h2 and any [data-scramble] element, applied
   once per page from app/template.tsx. Only the nodeValue of existing text nodes changes,
   so React still owns the same nodes and later renders update them normally. */
function scramble(textNode: Text) {
  const final = textNode.nodeValue ?? '';
  if (!final.trim()) return;
  const start = performance.now();
  const step = (now: number) => {
    const progress = Math.min(1, (now - start) / DURATION);
    const settled = Math.floor(final.length * progress);
    let out = final.slice(0, settled);
    for (let i = settled; i < final.length; i += 1) {
      const ch = final[i];
      out += ch === ' ' || ch === '\n' ? ch : GLYPHS[(Math.random() * GLYPHS.length) | 0];
    }
    textNode.nodeValue = out;
    if (progress < 1) requestAnimationFrame(step);
    else textNode.nodeValue = final;
  };
  requestAnimationFrame(step);
}

export default function ScrambleHeadings() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const targets = document.querySelectorAll<HTMLElement>('main h2, [data-scramble]');
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        observer.unobserve(entry.target);
        entry.target.childNodes.forEach((node) => {
          if (node.nodeType === Node.TEXT_NODE) scramble(node as Text);
        });
      }
    }, { threshold: 0.4 });
    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return null;
}
