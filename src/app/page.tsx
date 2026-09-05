import React from 'react';
import Link from 'next/link';
import HeroVideo from '@/components/HeroVideo';
import CarSpecsTabs from '@/components/CarSpecsTabs';
import FsaeEvents from '@/components/FsaeEvents';

export const metadata = {
  title: 'Team KILOFLIGHT | KUET Formula Student Motorsport Bangladesh',
  description:
    'Official website of Team KILOFLIGHT, premier Formula Student motorsport team from Khulna University of Engineering & Technology (KUET), Bangladesh. Building KILOFLIGHT PHOENIX.',
};

export default function HomePage() {
  return (
    <>
      {/* 1. HERO SECTION (100VH / 100DVH SINGLE SCREEN) */}
      <HeroVideo />

      {/* 2. THE CAR & TECHNICAL BLUEPRINT: KILOFLIGHT PHOENIX */}
      <section className="section-padding py-5" id="section_2">
        <div className="container mx-auto px-4">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-8">
              <span className="badge-motorsport red mb-2">Next-Gen Formula Student Vehicle</span>
              <h2 className="mb-3">KILOFLIGHT PHOENIX ARCHITECTURE</h2>
              <p className="text-muted">
                Engineered for FSAE Dynamix India 2027 and European circuits. Powered by a 292 cc CFMoto 300SR ICE, 4130 spaceframe, and sustainable 7-layer jute-fiber composite body panels.
              </p>
            </div>
          </div>

          <CarSpecsTabs />

          <div className="text-center mt-4">
            <Link href="/cars" className="custom-btn-outline">
              Compare Phoenix vs Alpha Full Specs &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* 3. FSAE DYNAMIC & STATIC EVENTS EXPLAINER */}
      <section className="section-padding py-5" style={{ background: 'rgba(2, 132, 199, 0.03)' }}>
        <div className="container mx-auto px-4">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-8">
              <span className="badge-motorsport me-2">Global Formula Student Regulations</span>
              <h2 className="mb-3">FSAE COMPETITION DISDIVISIONS</h2>
              <p className="text-muted">
                Formula SAE challenges university teams across rigorous dynamic track trials and static engineering design evaluations totaling 1,000 points.
              </p>
            </div>
          </div>

          <FsaeEvents />
        </div>
      </section>

      {/* 4. ENGINEERING SUB-TEAMS & DETAILED WORKFLOWS */}
      <section className="section-padding py-5" id="section_4">
        <div className="container mx-auto px-4">
          <div className="row justify-content-center text-center mb-5">
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
          </div>
        </div>
      </section>

      {/* 5. PREVIOUS ACHIEVEMENTS TIMELINE */}
      <section className="section-padding py-5" id="section_5" style={{ background: 'rgba(2, 132, 199, 0.03)' }}>
        <div className="container mx-auto px-4">
          <div className="row justify-content-center text-center mb-4">
            <div className="col-lg-8">
              <span className="badge-motorsport red mb-2">Driving Innovation, Inspiring the Future</span>
              <h2 className="mb-3">PREVIOUS ACHIEVEMENTS &amp; EXHIBITIONS</h2>
              <p className="text-muted">Consistently pushing the boundaries of student engineering in Bangladesh on international and national stages.</p>
            </div>
          </div>

          <div className="table-responsive">
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
                <tr>
                  <th scope="row" className="font-orbitron fs-5 text-cyan">2023</th>
                  <td>
                    <div className="fw-bold" style={{ color: '#0F172A' }}>Formula SAE Japan (FSAE Japan 2023)</div>
                    <div className="small text-muted">KILOFLIGHT ALPHA Debut</div>
                  </td>
                  <td>
                    <span className="badge-motorsport red mb-1">Passed Mechanical Inspection</span>
                    <div className="small text-muted">First Bangladeshi team in history to pass mechanical inspection at FSAE Japan in Aichi.</div>
                  </td>
                  <td style={{ color: '#0F172A', fontWeight: 600 }}>Aichi, Japan</td>
                </tr>
                <tr>
                  <th scope="row" className="font-orbitron fs-5 text-cyan">2025</th>
                  <td>
                    <div className="fw-bold" style={{ color: '#0F172A' }}>Formula Student Concept Competition India</div>
                    <div className="small text-muted">Combustion Vehicle (CV) Category</div>
                  </td>
                  <td>
                    <span className="badge-motorsport jute mb-1">Conceptual Groundwork</span>
                    <div className="small text-muted">Aero packaging, 4130 spaceframe FEA, and powertrain cooling simulations for PHOENIX.</div>
                  </td>
                  <td style={{ color: '#0F172A', fontWeight: 600 }}>India / Online</td>
                </tr>
                <tr>
                  <th scope="row" className="font-orbitron fs-5 text-cyan">July 2026</th>
                  <td>
                    <div className="fw-bold" style={{ color: '#0F172A' }}>Bangladesh AutoFest 2026</div>
                    <div className="small text-muted">July 17–18, 2026 &bull; ALOKI Dhaka</div>
                  </td>
                  <td>
                    <span className="badge-motorsport mb-1" style={{ background: '#E0F2FE', color: '#0284C7', border: '1.5px solid #0284C7' }}>National Exhibition</span>
                    <div className="small text-muted">9 student members traveled from Khulna to exhibit alongside 5 other national FS teams. Logistics partner: Steadfast.</div>
                  </td>
                  <td style={{ color: '#0F172A', fontWeight: 600 }}>Tejgaon-Gulshan Link Road, Dhaka</td>
                </tr>
                <tr>
                  <th scope="row" className="font-orbitron fs-5 text-cyan">2026–2027</th>
                  <td>
                    <div className="fw-bold" style={{ color: '#0F172A' }}>FSAE Dynamix India 2027 &amp; FSUK 2027</div>
                    <div className="small text-muted">January 17–18, 2027 &bull; European Circuits</div>
                  </td>
                  <td>
                    <span className="badge-motorsport red mb-1">KILOFLIGHT PHOENIX Campaign</span>
                    <div className="small text-muted">Targeting &le; 5.0s acceleration, 120 km/h top speed, multi-element wings, and 7-layer jute composite.</div>
                  </td>
                  <td style={{ color: '#0F172A', fontWeight: 600 }}>India &amp; Silverstone, UK</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
