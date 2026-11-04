'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { CURRENT_SPONSORS, type CurrentSponsor } from '@/lib/sponsorship-data';
import { RevealGroup, RevealItem } from '@/components/motion/Reveal';

/** Official logo, falling back to a styled wordmark if the file is missing. */
function SponsorLogo({ sponsor, height }: { sponsor: CurrentSponsor; height: number }) {
  const [failed, setFailed] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // The image can fail before hydration attaches onError, so check its state on mount too.
  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth === 0) setFailed(true);
  }, []);

  if (failed) {
    return (
      <span className="sponsor-wordmark" style={{ fontSize: height * 0.55, color: '#0F172A' }}>
        {sponsor.name}
      </span>
    );
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element -- SVG logos, onError fallback
    <img
      ref={imgRef}
      src={sponsor.logo}
      alt={`${sponsor.name} logo`}
      height={height}
      style={{ height, width: 'auto', maxWidth: '100%', objectFit: 'contain' }}
      onError={() => setFailed(true)}
    />
  );
}

type Variant = 'full' | 'compact' | 'mini';

export default function CurrentSponsors({ variant = 'full' }: { variant?: Variant }) {
  if (variant === 'mini') {
    return (
      <div className="d-flex align-items-center gap-3 flex-wrap">
        {CURRENT_SPONSORS.map((s) => (
          <a key={s.id} href={s.url} target="_blank" rel="noopener noreferrer" className="sponsor-mini" title={`${s.name} — ${s.role}`}>
            <SponsorLogo sponsor={s} height={26} />
          </a>
        ))}
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <RevealGroup className="row g-3 justify-content-center">
        {CURRENT_SPONSORS.map((s) => (
          <RevealItem key={s.id} className="col-md-4 col-12">
            <a
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="sponsor-compact"
              style={{ '--sponsor-color': s.brandColor } as React.CSSProperties}
            >
              <span className="sponsor-compact-logo">
                <SponsorLogo sponsor={s} height={40} />
              </span>
              <span className="sponsor-compact-role">{s.role}</span>
            </a>
          </RevealItem>
        ))}
      </RevealGroup>
    );
  }

  return (
    <RevealGroup className="row g-4 align-items-stretch">
      {CURRENT_SPONSORS.map((s) => (
        <RevealItem key={s.id} className="col-lg-4 col-md-6 col-12 d-flex">
          <a
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            className="sponsor-card"
            style={{ '--sponsor-color': s.brandColor } as React.CSSProperties}
          >
            <span className="sponsor-card-splash" aria-hidden="true" />
            <span className="sponsor-card-logo">
              <SponsorLogo sponsor={s} height={64} />
            </span>
            <span className="badge-motorsport red sponsor-card-role">{s.role}</span>
            <span className="sponsor-card-name font-orbitron">{s.name}</span>
            <span className="sponsor-card-blurb">{s.blurb}</span>
            <span className="sponsor-card-link">
              Visit {s.name} <i className="bi bi-arrow-up-right" aria-hidden="true"></i>
            </span>
          </a>
        </RevealItem>
      ))}
      <RevealItem className="col-12 d-flex">
        <Link href="/sponsorship#packages" className="sponsor-card sponsor-card-ghost">
          <i className="bi bi-plus-lg" aria-hidden="true"></i>
          <span className="font-orbitron">Your logo here</span>
          <span className="small">Become a partner</span>
        </Link>
      </RevealItem>
    </RevealGroup>
  );
}
