import React from 'react';
import Link from 'next/link';

export default function HeroVideo() {
  return (
    <section className="hero-section" id="section_1">
      <div className="section-overlay"></div>

      <div className="container hero-content-container">
        {/* Main Hero Header & CTA */}
        <div className="hero-main-block text-center">
          <small className="hero-subtitle">KUET Formula Student Motorsport</small>

          <h1 className="hero-title fw-bold">Team KILOFLIGHT</h1>

          <div className="hero-cta-wrap">
            <Link href="#section_2" className="custom-btn text-decoration-none">
              <i className="bi bi-play-circle me-2"></i> Explore Phoenix &amp; Alpha
            </Link>
          </div>

          <div className="hero-location-block">
            <div className="location-wrap mx-auto">
              <h5 className="mb-0 fs-6" style={{ color: '#0F172A', fontWeight: 800 }}>
                <i className="custom-icon bi-geo-alt me-2 text-danger"></i>
                KUET, Bangladesh &bull; FSAE Japan 2023 Mechanical Pass
              </h5>
            </div>
          </div>
        </div>

        {/* Performance Stats Ticker */}
        <div className="hero-stats-wrapper w-100">
          <div className="col-lg-10 mx-auto">
            <div className="hero-stats-grid">
              <div className="stat-box red-border">
                <div className="stat-val">&le; 5.0s</div>
                <div className="stat-label">0-100 KM/H ACCEL</div>
              </div>
              <div className="stat-box">
                <div className="stat-val">120 KM/H</div>
                <div className="stat-label">TARGET TOP SPEED</div>
              </div>
              <div className="stat-box gold-border">
                <div className="stat-val">7-LAYER</div>
                <div className="stat-label">JUTE COMPOSITE</div>
              </div>
              <div className="stat-box">
                <div className="stat-val">24.4 KG</div>
                <div className="stat-label">4130 CHROMOLY CHASSIS</div>
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
