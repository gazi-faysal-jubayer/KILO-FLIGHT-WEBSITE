'use client';

import { KoiStudies } from '@/shaders/koi-studies/KoiStudies';

/* Client boundary for the vendored ThreeUI card stack, pointed at our generated cards
   (scripts/build-card-stack.mjs → public/kiloflight-card-stack.html). */
export default function MachinesStack() {
  return (
    <KoiStudies
      className="machines-stack"
      src="/kiloflight-card-stack.html"
      title="KILOFLIGHT machines: interactive card stack"
      label="Interactive stack of three KILOFLIGHT cards: Phoenix, Alpha and jute composite"
      style={{ background: 'var(--bg)' }}
    />
  );
}
