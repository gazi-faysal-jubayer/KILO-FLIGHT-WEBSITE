'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function HeroVideo({ initialData }: { initialData?: any }) {
  const [hero, setHero] = useState(
    initialData || {
      subtitle: 'KUET Formula Student Motorsport',
      title: 'Team KILOFLIGHT',
      location: 'KUET, Bangladesh • FSAE Japan 2023 Mechanical Pass',
      ctaText: 'Explore Phoenix & Alpha',
      stat0to100: '≤ 5.0s',
      stat0to100Label: '0-100 KM/H ACCEL',
      statTopSpeed: '120 KM/H',
      statTopSpeedLabel: 'TARGET TOP SPEED',
      statAero: '7-LAYER',
      statAeroLabel: 'JUTE COMPOSITE',
      statChassis: '24.4 KG',
      statChassisLabel: '4130 CHROMOLY CHASSIS',
    }
  );

  useEffect(() => {
    fetch('/api/content')
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.data?.settings?.hero) {
          setHero(data.data.settings.hero);
        }
      })
      .catch(() => {});
  }, []);

  return (
    <section className="hero-section" id="section_1">
      <div className="section-overlay"></div>

      <div className="container hero-content-container">
        {/* Main Hero Header & CTA */}
        <div className="hero-main-block text-center">
          <small className="hero-subtitle">{hero.subtitle}</small>

          <h1 className="hero-title fw-bold">{hero.title}</h1>

          <div className="hero-cta-wrap">
            <Link href="#section_2" className="custom-btn text-decoration-none">
              <i className="bi bi-play-circle me-2"></i> {hero.ctaText || 'Explore Phoenix & Alpha'}
            </Link>
          </div>

          <div className="hero-location-block">
            <div className="location-wrap mx-auto">
              <h5 className="mb-0 fs-6" style={{ color: '#0F172A', fontWeight: 800 }}>
                <i className="custom-icon bi-geo-alt me-2 text-danger"></i>
                {hero.location}
              </h5>
            </div>
          </div>
        </div>

        {/* Performance Stats Ticker */}
        <div className="hero-stats-wrapper w-100">
          <div className="col-lg-10 mx-auto">
            <div className="hero-stats-grid">
              <div className="stat-box red-border">
                <div className="stat-val">{hero.stat0to100}</div>
                <div className="stat-label">{hero.stat0to100Label}</div>
              </div>
              <div className="stat-box">
                <div className="stat-val">{hero.statTopSpeed}</div>
                <div className="stat-label">{hero.statTopSpeedLabel}</div>
              </div>
              <div className="stat-box gold-border">
                <div className="stat-val">{hero.statAero}</div>
                <div className="stat-label">{hero.statAeroLabel}</div>
              </div>
              <div className="stat-box">
                <div className="stat-val">{hero.statChassis}</div>
                <div className="stat-label">{hero.statChassisLabel}</div>
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
