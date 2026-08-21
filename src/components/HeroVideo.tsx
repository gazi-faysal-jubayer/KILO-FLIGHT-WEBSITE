import React from 'react';
import Link from 'next/link';

export default function HeroVideo() {
  return (
    <section className="hero-section" id="section_1">
      <div className="section-overlay"></div>

      <div className="container d-flex justify-content-center align-items-center position-relative" style={{ zIndex: 3 }}>
        <div className="row w-100">
          <div className="col-12 mt-auto mb-4 text-center">
            <small className="mb-2">Commemorating the Heroes of 1971</small>

            <h1 className="mb-4 display-3 fw-bold" style={{ color: '#0F172A' }}>Team Kilo Flight</h1>

            <Link href="#section_2" className="custom-btn px-4 py-3 text-decoration-none">
              <i className="bi bi-play-circle me-2"></i> Let&apos;s begin
            </Link>
          </div>

          <div className="col-lg-12 col-12 mt-auto text-center mb-4">
            <div className="location-wrap mx-auto">
              <h5 className="mb-0 fs-6" style={{ color: '#0F172A', fontWeight: 800 }}>
                <i className="custom-icon bi-geo-alt me-2 text-danger"></i>
                KUET, Bangladesh
              </h5>
            </div>
          </div>

          {/* Performance Stats Ticker */}
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
