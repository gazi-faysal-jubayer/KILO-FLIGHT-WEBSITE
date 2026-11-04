'use client';

import { useEffect, useState } from 'react';
import { KoiStudies } from '@/shaders/koi-studies/KoiStudies';

/* Client boundary for the vendored ThreeUI card stack, fed our generated cards
   (scripts/build-card-stack.mjs → public/kiloflight-card-stack.html).
   The document is inlined via srcdoc: a sandboxed frame navigated to a URL rendered
   blank in some browsers, while srcdoc frames (as the team filmstrip uses) paint. */
export default function MachinesStack() {
  const [doc, setDoc] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch('/kiloflight-card-stack.html')
      .then((res) => (res.ok ? res.text() : Promise.reject(new Error(`HTTP ${res.status}`))))
      .then((html) => { if (!cancelled) setDoc(html); })
      .catch((err) => console.warn('Card stack unavailable:', err));
    return () => { cancelled = true; };
  }, []);

  if (!doc) return <div className="machines-stack" style={{ position: 'absolute', inset: 0, background: 'var(--bg)' }} />;

  return (
    <KoiStudies
      className="machines-stack"
      srcDoc={doc}
      sandbox="allow-scripts"
      title="KILOFLIGHT machines: interactive card stack"
      label="Interactive stack of three KILOFLIGHT cards: Phoenix, Alpha and jute composite"
      style={{ background: 'var(--bg)' }}
    />
  );
}
