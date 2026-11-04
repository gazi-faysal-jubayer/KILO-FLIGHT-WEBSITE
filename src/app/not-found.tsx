import React from 'react';
import Link from 'next/link';
import DitherField from '@/components/motion/DitherField';

export default function NotFound() {
  return (
    <section className="signal-lost">
      <DitherField className="signal-lost__field" pixelSize={6} speed={1.6} />
      <div className="signal-lost__panel">
        <span className="badge-motorsport red mb-3">ERR 404 // OFF TRACK</span>
        <h1 className="signal-lost__title" data-scramble>SIGNAL LOST</h1>
        <p className="mb-4">
          The racing line you are looking for does not exist or has moved to another sector.
        </p>
        <Link href="/" className="custom-btn text-decoration-none">
          <span aria-hidden="true" className="me-2">◀</span> Return to Pit Wall
        </Link>
      </div>
    </section>
  );
}
