import React from 'react';
import Link from 'next/link';
import DitherField from '@/components/motion/DitherField';
import { CURRENT_SPONSORS } from '@/lib/sponsorship-data';

const STATUS_LINES = [
  ['PROJECT', 'KILOFLIGHT PHOENIX // CV 2026'],
  ['TARGET', 'FSAE DYNAMIX INDIA · 19–24 JAN 2027'],
  ['RECORD', '1ST BD TEAM THROUGH FSAE JAPAN 2023 MECH. INSPECTION'],
  ['ENGINE', 'CFMOTO 300SR · JUTE-COMPOSITE BODY'],
];

const TICKER = [
  '0–100 KM/H ≤ 5.0 S',
  'TOP SPEED 120 KM/H',
  '7-LAYER JUTE COMPOSITE',
  '24.4 KG 4130 CHROMOLY CHASSIS',
  '30 KUET ENGINEERS',
  ...CURRENT_SPONSORS.map((s) => `${s.name.toUpperCase()} · ${s.role.replace('Official ', '').toUpperCase()}`),
];

export default function HeroVideo() {
  return (
    <section className="hero-section" id="section_1">
      {/* Video, graded through the same dithered dusk field as the navbar */}
      <div className="video-wrap">
        <video autoPlay loop muted playsInline className="custom-video" poster="/images/formula_car_hero.jpg">
          <source src="/video/Trailer_2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <DitherField className="hero-dither" pixelSize={5} />
      <div className="section-overlay"></div>

      <div className="container hero-content-container">
        <div className="hero-grid">
          <div className="hero-main-block">
            <span className="hero-eyebrow hero-anim">KUET Formula Student // Bangladesh</span>

            <h1 className="hero-title" aria-label="Team KILOFLIGHT">
              <span className="hero-title-sm hero-anim" data-scramble>TEAM</span>
              <span className="hero-title-lg hero-anim" data-scramble>KILOFLIGHT</span>
            </h1>

            <div className="hero-rule" aria-hidden="true"></div>

            <p className="hero-tagline hero-anim">Bangladesh&apos;s Formula Student team, building KILOFLIGHT PHOENIX for FSAE Dynamix India 2027.</p>

            <div className="hero-cta-wrap hero-anim">
              <Link href="#section_2" className="custom-btn text-decoration-none">
                <span aria-hidden="true" className="me-2">▶</span> Explore Phoenix
              </Link>
              <Link href="/sponsorship" className="hero-btn-ghost text-decoration-none">
                Become a Partner
              </Link>
            </div>
          </div>

          <div className="hero-terminal hero-anim" role="group" aria-label="Team status">
            <div className="hero-terminal__bar">
              <span className="hero-terminal__dot" style={{ background: '#ff2a2a' }} />
              <span className="hero-terminal__dot" style={{ background: '#f9c74f' }} />
              <span className="hero-terminal__dot" style={{ background: '#86efac' }} />
              <span className="hero-terminal__title">kiloflight@kuet: ~/status</span>
            </div>
            <dl className="hero-terminal__body">
              {STATUS_LINES.map(([key, value]) => (
                <div key={key} className="hero-terminal__line">
                  <dt>&gt; {key}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
              <div className="hero-terminal__line">
                <dt>&gt; READY</dt>
                <dd><span className="hero-terminal__cursor" aria-hidden="true" /></dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* Bottom ticker: stats and partners, duplicated once for a seamless loop */}
      <div className="hero-ticker" aria-label="Key figures and partners">
        <div className="hero-ticker__track">
          {[0, 1].map((copy) => (
            <ul key={copy} className="hero-ticker__list" aria-hidden={copy === 1 ? 'true' : undefined}>
              {TICKER.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
