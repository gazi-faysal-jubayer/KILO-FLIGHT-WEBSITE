import React from 'react';
import Link from 'next/link';

const HERO_STATS = [
  { val: '≤ 5.0s', label: '0–100 km/h' },
  { val: '120 km/h', label: 'Target top speed' },
  { val: '7-Layer', label: 'Jute composite' },
  { val: '24.4 kg', label: '4130 chromoly chassis' },
];

export default function HeroVideo() {
  return (
    <section className="hero-section" id="section_1">
      <div className="section-overlay"></div>

      <div className="container hero-content-container">
        <div className="hero-main-block">
          <span className="hero-eyebrow hero-anim">KUET Formula Student · Bangladesh</span>

          <h1 className="hero-title">
            <span className="hero-title-sm hero-anim">Team</span>
            <span className="hero-title-lg hero-anim">KILOFLIGHT</span>
          </h1>

          <div className="hero-rule" aria-hidden="true"></div>

          <p className="hero-tagline hero-anim">Building KILOFLIGHT PHOENIX for FSAE Dynamix India 2027.</p>
          <p className="hero-fact hero-anim">First Bangladeshi team through the FSAE Japan 2023 mechanical inspection.</p>

          <div className="hero-cta-wrap hero-anim">
            <Link href="#section_2" className="custom-btn text-decoration-none">
              <i className="bi bi-play-circle me-2" aria-hidden="true"></i> Explore Phoenix
            </Link>
            <Link href="/sponsorship" className="hero-btn-ghost text-decoration-none">
              Become a Partner
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom stat strip */}
      <div className="hero-stats-bar">
        <div className="container">
          <div className="hero-stats">
            {HERO_STATS.map((s) => (
              <div key={s.label} className="hero-stat">
                <div className="hero-stat-val">{s.val}</div>
                <div className="hero-stat-label">{s.label}</div>
              </div>
            ))}
            <a href="#section_2" className="hero-scroll text-decoration-none">
              Scroll
              <i className="bi bi-chevron-double-down" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Video Background */}
      <div className="video-wrap">
        <video autoPlay loop muted playsInline className="custom-video" poster="/images/formula_car_hero.jpg">
          <source src="/video/Trailer_2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}
