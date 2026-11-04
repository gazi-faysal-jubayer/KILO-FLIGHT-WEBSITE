import React from 'react';
import Link from 'next/link';
import HeroVideo from '@/components/HeroVideo';
import CarSpecsTabs from '@/components/CarSpecsTabs';
import FsaeEvents from '@/components/FsaeEvents';
import CurrentSponsors from '@/components/CurrentSponsors';
import { Reveal, RevealGroup, RevealItem } from '@/components/motion/Reveal';

export const metadata = {
  title: 'Team KILOFLIGHT | KUET Formula Student Motorsport Bangladesh',
  description:
    'Official website of Team KILOFLIGHT, premier Formula Student motorsport team from Khulna University of Engineering & Technology (KUET), Bangladesh. Building KILOFLIGHT PHOENIX.',
};

const ACHIEVEMENTS = [
  {
    year: '2023',
    event: 'Formula SAE Japan (FSAE Japan 2023)',
    sub: 'KILOFLIGHT ALPHA Debut',
    badge: <span className="badge-motorsport red mb-1">Passed Mechanical Inspection</span>,
    detail: 'First Bangladeshi team in history to pass mechanical inspection at FSAE Japan in Aichi.',
    location: 'Aichi, Japan',
  },
  {
    year: '2025',
    event: 'Formula Student Concept Competition India',
    sub: 'Combustion Vehicle (CV) Category',
    badge: <span className="badge-motorsport jute mb-1">Conceptual Groundwork</span>,
    detail: 'Aero packaging, 4130 spaceframe FEA, and powertrain cooling simulations for PHOENIX.',
    location: 'India / Online',
  },
  {
    year: 'July 2026',
    event: 'Bangladesh AutoFest 2026',
    sub: 'July 17–18, 2026 • ALOKI Dhaka',
    badge: (
      <span className="badge-motorsport mb-1" style={{ background: '#E0F2FE', color: '#0284C7', border: '1.5px solid #0284C7' }}>
        National Exhibition
      </span>
    ),
    detail: '9 student members traveled from Khulna to exhibit alongside 5 other national FS teams. Logistics partner: Steadfast.',
    location: 'Tejgaon-Gulshan Link Road, Dhaka',
  },
  {
    year: '2026–2027',
    event: 'FSAE Dynamix India 2027 & FSUK 2027',
    sub: 'January 19–24, 2027 • European Circuits',
    badge: <span className="badge-motorsport red mb-1">KILOFLIGHT PHOENIX Campaign</span>,
    detail: 'Targeting ≤ 5.0s acceleration, 120 km/h top speed, multi-element wings, and 7-layer jute composite.',
    location: 'India & Silverstone, UK',
  },
];

export default function HomePage() {
  return (
    <>
      {/* 1. HERO SECTION (100VH / 100DVH SINGLE SCREEN) */}
      <HeroVideo />

      <div className="race-divider" aria-hidden="true" />

      {/* 2. THE CAR & TECHNICAL BLUEPRINT: KILOFLIGHT PHOENIX */}
      <section className="section-padding py-5" id="section_2">
        <div className="container mx-auto px-4">
          <Reveal className="row justify-content-center text-center mb-5">
            <div className="col-lg-8">
              <span className="badge-motorsport red mb-2">Next-Gen Formula Student Vehicle</span>
              <h2 className="mb-3">KILOFLIGHT PHOENIX ARCHITECTURE</h2>
              <p className="text-muted">
                Engineered for FSAE Dynamix India 2027 and European circuits. Powered by a 292 cc CFMoto 300SR ICE, 4130 spaceframe, and sustainable 7-layer jute-fiber composite body panels.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <CarSpecsTabs />
          </Reveal>

          <div className="text-center mt-4">
            <Link href="/cars" className="custom-btn-outline">
              Compare Phoenix vs Alpha Full Specs &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* 2b. POWERED BY: CURRENT SPONSORS */}
      <section className="py-5" style={{ background: '#FFFFFF', borderTop: '2px solid #0F172A', borderBottom: '2px solid #0F172A' }}>
        <div className="container mx-auto px-4">
          <Reveal className="text-center mb-4">
            <span className="badge-motorsport jute mb-2">Proudly Powered By</span>
            <h2 className="mb-0 d-block">OUR PARTNERS</h2>
          </Reveal>
          <CurrentSponsors variant="compact" />
          <Reveal className="text-center mt-4" delay={0.15}>
            <Link href="/sponsorship" className="custom-btn">
              <i className="bi bi-rocket-takeoff-fill me-2" aria-hidden="true"></i> Become a Partner
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 3. FSAE DYNAMIC & STATIC EVENTS EXPLAINER */}
      <section className="section-padding py-5" style={{ background: 'rgba(2, 132, 199, 0.03)' }}>
        <div className="container mx-auto px-4">
          <Reveal className="row justify-content-center text-center mb-5">
            <div className="col-lg-8">
              <span className="badge-motorsport me-2">Global Formula Student Regulations</span>
              <h2 className="mb-3">FSAE COMPETITION DISDIVISIONS</h2>
              <p className="text-muted">
                Formula SAE challenges university teams across rigorous dynamic track trials and static engineering design evaluations totaling 1,000 points.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <FsaeEvents />
          </Reveal>
        </div>
      </section>

      {/* 4. ENGINEERING SUB-TEAMS & DETAILED WORKFLOWS */}
      <section className="section-padding py-5" id="section_4">
        <div className="container mx-auto px-4">
          <Reveal className="row justify-content-center text-center mb-5">
            <div className="col-lg-8">
              <span className="badge-motorsport red mb-2">Multidisciplinary Synergy</span>
              <h2 className="mb-3">ENGINEERING SUB-TEAMS &amp; WORKFLOWS</h2>
              <p className="text-muted mb-4">
                Chassis &amp; Suspension, Body &amp; Aerodynamics, Mechanical Powertrain, Electrical Systems &amp; DAQ, Braking &amp; Steering, and Business &amp; Media at KUET.
              </p>
              <Link href="/subteams" className="custom-btn-outline">
                View All 6 Sub-teams &amp; Step-by-Step Workflows
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="race-divider" aria-hidden="true" />

      {/* 5. PREVIOUS ACHIEVEMENTS TIMELINE */}
      <section className="section-padding py-5" id="section_5" style={{ background: 'rgba(2, 132, 199, 0.03)' }}>
        <div className="container mx-auto px-4">
          <Reveal className="row justify-content-center text-center mb-4">
            <div className="col-lg-8">
              <span className="badge-motorsport red mb-2">Driving Innovation, Inspiring the Future</span>
              <h2 className="mb-3">PREVIOUS ACHIEVEMENTS &amp; EXHIBITIONS</h2>
              <p className="text-muted">Consistently pushing the boundaries of student engineering in Bangladesh on international and national stages.</p>
            </div>
          </Reveal>

          {/* Desktop table */}
          <Reveal className="table-responsive d-none d-md-block" delay={0.1}>
            <table className="schedule-table table align-middle w-100">
              <thead>
                <tr>
                  <th scope="col">Year</th>
                  <th scope="col">Competition / Event</th>
                  <th scope="col">Key Milestone &amp; Details</th>
                  <th scope="col">Location &amp; Highlights</th>
                </tr>
              </thead>
              <tbody>
                {ACHIEVEMENTS.map((a) => (
                  <tr key={a.year}>
                    <th scope="row" className="font-orbitron fs-5 text-cyan">{a.year}</th>
                    <td>
                      <div className="fw-bold" style={{ color: '#0F172A' }}>{a.event}</div>
                      <div className="small text-muted">{a.sub}</div>
                    </td>
                    <td>
                      {a.badge}
                      <div className="small text-muted">{a.detail}</div>
                    </td>
                    <td style={{ color: '#0F172A', fontWeight: 600 }}>{a.location}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>

          {/* Mobile: staggered cards */}
          <RevealGroup className="row g-3 d-md-none">
            {ACHIEVEMENTS.map((a) => (
              <RevealItem key={a.year} className="col-12">
                <div className="glass-panel p-3">
                  <div className="font-orbitron fw-bold text-cyan mb-1">{a.year}</div>
                  <div className="fw-bold" style={{ color: '#0F172A' }}>{a.event}</div>
                  <div className="small text-muted mb-2">{a.sub}</div>
                  {a.badge}
                  <div className="small text-muted">{a.detail}</div>
                  <div className="small fw-semibold mt-2" style={{ color: '#0F172A' }}>
                    <i className="bi bi-geo-alt-fill text-danger me-1" aria-hidden="true"></i>
                    {a.location}
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>
    </>
  );
}
