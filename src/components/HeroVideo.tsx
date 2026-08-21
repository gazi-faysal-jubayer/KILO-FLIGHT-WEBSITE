import React from 'react';
import Link from 'next/link';

export default function HeroVideo() {
  return (
    <section className="hero-section" id="section_1">
      <div className="section-overlay"></div>

      <div className="container hero-content-container">
        {/* Main Hero Header & CTA */}
        <div className="hero-main-block text-center">
          <small className="hero-subtitle">Commemorating the Heroes of 1971</small>

          <h1 className="hero-title fw-bold">Team Kilo Flight</h1>

          <div className="hero-cta-wrap">
            <Link href="#section_2" className="custom-btn text-decoration-none">
              <i className="bi bi-play-circle me-2"></i> Let&apos;s begin
            </Link>
          </div>

          <div className="hero-location-block">
            <div className="location-wrap mx-auto">
              <h5 className="mb-0 fs-6" style={{ color: '#0F172A', fontWeight: 800 }}>
                <i className="custom-icon bi-geo-alt me-2 text-danger"></i>
                KUET, Bangladesh
              </h5>
            </div>
          </div>
        </div>

        {/* Performance Stats Ticker */}
        <div className="hero-stats-wrapper w-100">
          <div className="col-lg-10 mx-auto">
            <div className="hero-stats-grid">
              <div className="stat-box red-border">
                <div className="stat-val">3.2s</div>
                <div className="stat-label">0-100 KM/H ACCEL</div>
              </div>
              <div className="stat-box">
                <div className="stat-val">195 KG</div>
                <div className="stat-label">KERB WEIGHT</div>
              </div>
              <div className="stat-box gold-border">
                <div className="stat-val">JUTE</div>
                <div className="stat-label">ECO-BODYWORK</div>
              </div>
              <div className="stat-box">
                <div className="stat-val">1.85 G</div>
                <div className="stat-label">MAX LATERAL GRIP</div>
              </div>
            </div>
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
