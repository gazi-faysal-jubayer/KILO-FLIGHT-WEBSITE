import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center text-center px-4" style={{ minHeight: '80vh', paddingTop: '100px' }}>
      <div className="glass-panel p-5 mx-auto" style={{ maxWidth: '560px' }}>
        <span className="badge-motorsport red mb-3">404 Off Track</span>
        <h1 className="display-4 fw-bold font-orbitron mb-3" style={{ color: '#0F172A' }}>PIT LANE OFF-COURSE</h1>
        <p className="text-muted mb-4">
          The racing line you are looking for does not exist or has been relocated to another sector.
        </p>
        <Link href="/" className="custom-btn text-decoration-none">
          <i className="bi bi-arrow-left me-2"></i> Return to Pit Wall
        </Link>
      </div>
    </div>
  );
}
