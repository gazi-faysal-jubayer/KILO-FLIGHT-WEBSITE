import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'The Cars | Team KILOFLIGHT KUET Formula Student',
  description: 'Technical deep-dive into KILOFLIGHT PHOENIX (2026–2027) and KILOFLIGHT ALPHA (FSAE Japan 2023 Mechanical Pass).',
};

export default function CarsPage() {
  return (
    <>
      {/* Header */}
      <section className="page-header-section" style={{ background: 'radial-gradient(circle at top, rgba(255, 42, 42, 0.08) 0%, var(--dark-bg) 100%)' }}>
        <div className="container mx-auto px-4 text-center">
          <span className="badge-motorsport red mb-2">Formula Student Vehicles</span>
          <h1 className="mb-3 font-orbitron" style={{ color: '#0F172A', fontWeight: 900 }}>THE CARS: PHOENIX &amp; ALPHA</h1>
          <p className="text-muted max-w-700 mx-auto" style={{ maxWidth: '750px' }}>
            From Bangladesh&apos;s first-ever mechanical pass at Formula SAE Japan 2023 to our next-generation track campaign targeting FSAE Dynamix India 2027 and Silverstone UK.
          </p>
        </div>
      </section>

      {/* Vehicles Grid */}
      <section className="section-padding py-5">
        <div className="container mx-auto px-4">

          {/* 1. KILOFLIGHT PHOENIX (Active Project) */}
          <div className="glass-panel p-4 p-lg-5 mb-5" style={{ border: '2px solid #0F172A', boxShadow: '6px 6px 0 #FF2A2A' }}>
            <div className="row g-4 align-items-center">
              <div className="col-lg-6">
                <div className="position-relative rounded overflow-hidden" style={{ minHeight: '340px', border: '2px solid #0F172A', boxShadow: '4px 4px 0 #0F172A' }}>
                  <Image
                    src="/images/formula_track_action.jpg"
                    alt="KILOFLIGHT PHOENIX Formula Student Car"
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="position-absolute top-0 start-0 m-3">
                    <span className="badge-motorsport red">Ongoing Project (2026–2027)</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <span className="badge-motorsport mb-2">Combustion Vehicle (CV)</span>
                <h2 className="mt-2 mb-3 font-orbitron" style={{ color: '#0F172A', fontWeight: 900 }}>KILOFLIGHT PHOENIX</h2>
                <p className="text-muted">
                  Currently in active development, <strong>KILOFLIGHT PHOENIX</strong> is our next-generation internal combustion vehicle (CV), engineered specifically to take part in <strong>FSAE Dynamix India 2027 (January 17–18, 2027)</strong> and upcoming European circuits. Powered by a high-revving 292 cc CFMoto 300SR single-cylinder engine, PHOENIX features complete custom vehicle aerodynamics, a custom CNC-milled 3-pedal box with dual-circuit TVS hydraulics, a 24.4 kg lightweight 4130 Chromoly spaceframe, and sustainable 7-layer jute-fiber composite body panels.
                </p>

                <div className="row g-2 text-center mt-3">
                  <div className="col-3">
                    <div className="p-2 rounded" style={{ background: '#F8FAFC', border: '2px solid #0F172A', boxShadow: '2px 2px 0 #0F172A' }}>
                      <div className="font-orbitron fw-bold fs-6" style={{ color: '#0F172A' }}>120 KM/H</div>
                      <div className="small text-muted fw-bold" style={{ fontSize: '10px' }}>TOP SPEED</div>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="p-2 rounded" style={{ background: '#F8FAFC', border: '2px solid #0F172A', boxShadow: '2px 2px 0 #0F172A' }}>
                      <div className="font-orbitron fw-bold fs-6" style={{ color: '#FF2A2A' }}>&le; 5.0s</div>
                      <div className="small text-muted fw-bold" style={{ fontSize: '10px' }}>0-100 ACCEL</div>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="p-2 rounded" style={{ background: '#F8FAFC', border: '2px solid #0F172A', boxShadow: '2px 2px 0 #0F172A' }}>
                      <div className="font-orbitron fw-bold fs-6 text-truncate" style={{ color: '#0284C7' }}>24.4 KG</div>
                      <div className="small text-muted fw-bold" style={{ fontSize: '10px' }}>CHASSIS MASS</div>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="p-2 rounded" style={{ background: '#F8FAFC', border: '2px solid #0F172A', boxShadow: '2px 2px 0 #0F172A' }}>
                      <div className="font-orbitron fw-bold fs-6" style={{ color: '#B45309' }}>JUTE BIO</div>
                      <div className="small text-muted fw-bold" style={{ fontSize: '10px' }}>BODYWORK</div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 d-flex gap-2 flex-wrap">
                  <Link href="/subteams" className="custom-btn text-decoration-none">
                    View Engineering Workflows
                  </Link>
                  <Link href="/join-us" className="custom-btn-outline text-decoration-none">
                    Join Development
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* 2. KILOFLIGHT ALPHA (Legacy Project) */}
          <div className="glass-panel p-4 p-lg-5" style={{ border: '2px solid #0F172A', boxShadow: '6px 6px 0 #0284C7' }}>
            <div className="row g-4 align-items-center">
              <div className="col-lg-6 order-lg-2">
                <div className="position-relative rounded overflow-hidden" style={{ minHeight: '340px', border: '2px solid #0F172A', boxShadow: '4px 4px 0 #0F172A' }}>
                  <Image
                    src="/images/formula_car_hero.jpg"
                    alt="KILOFLIGHT ALPHA Formula Student Car"
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="position-absolute top-0 start-0 m-3">
                    <span className="badge-motorsport jute">Legacy Project (2023)</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 order-lg-1">
                <span className="badge-motorsport red me-2">FSAE Japan 2023 Mechanical Pass</span>
                <h2 className="mt-2 mb-3 font-orbitron" style={{ color: '#0F172A', fontWeight: 900 }}>KILOFLIGHT ALPHA</h2>
                <p className="text-muted">
                  Manufactured in 2023, <strong>KILOFLIGHT ALPHA</strong> is the trailblazing first-generation combustion vehicle that established Bangladesh&apos;s presence on the global Formula Student grid. Featuring a natural jute-fiber composite body shell, ALPHA made national history as the <strong>first Bangladeshi Formula Student vehicle to pass the comprehensive mechanical inspection segment at Formula SAE Japan 2023</strong>.
                </p>

                <div className="row g-2 text-center mt-3">
                  <div className="col-3">
                    <div className="p-2 rounded" style={{ background: '#F8FAFC', border: '2px solid #0F172A', boxShadow: '2px 2px 0 #0F172A' }}>
                      <div className="font-orbitron fw-bold fs-6" style={{ color: '#0F172A' }}>~100 KM/H</div>
                      <div className="small text-muted fw-bold" style={{ fontSize: '10px' }}>TOP SPEED</div>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="p-2 rounded" style={{ background: '#F8FAFC', border: '2px solid #0F172A', boxShadow: '2px 2px 0 #0F172A' }}>
                      <div className="font-orbitron fw-bold fs-6" style={{ color: '#0F172A' }}>~28 KG</div>
                      <div className="small text-muted fw-bold" style={{ fontSize: '10px' }}>CHASSIS MASS</div>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="p-2 rounded" style={{ background: '#F8FAFC', border: '2px solid #0F172A', boxShadow: '2px 2px 0 #0F172A' }}>
                      <div className="font-orbitron fw-bold fs-6" style={{ color: '#0F172A' }}>PETROL</div>
                      <div className="small text-muted fw-bold" style={{ fontSize: '10px' }}>1-CYL ENGINE</div>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="p-2 rounded" style={{ background: '#F8FAFC', border: '2px solid #0F172A', boxShadow: '2px 2px 0 #0F172A' }}>
                      <div className="font-orbitron fw-bold fs-6" style={{ color: '#B45309' }}>JUTE</div>
                      <div className="small text-muted fw-bold" style={{ fontSize: '10px' }}>BIO-FAIRING</div>
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <span className="badge-motorsport" style={{ background: '#F8FAFC', color: '#0F172A', border: '1.5px solid #0F172A' }}>
                    <i className="bi bi-award-fill text-warning me-1"></i> Historic Milestone: Passed Mechanical Scrutineering at FSAE Japan 2023
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Official Technical Comparison Matrix */}
      <section className="section-padding py-5" style={{ background: 'rgba(2, 132, 199, 0.03)' }}>
        <div className="container mx-auto px-4">
          <div className="row text-center mb-4">
            <div className="col-lg-8 mx-auto">
              <span className="badge-motorsport red mb-2">Technical Specifications</span>
              <h2 className="mb-2 font-orbitron" style={{ color: '#0F172A', fontWeight: 900 }}>TECHNICAL COMPARISON MATRIX</h2>
              <p className="text-muted">Direct engineering benchmark comparison between KILOFLIGHT ALPHA and KILOFLIGHT PHOENIX.</p>
            </div>
          </div>

          <div className="table-responsive">
            <table className="schedule-table table align-middle w-100">
              <thead>
                <tr>
                  <th scope="col" style={{ width: '28%' }}>Vehicle Specification / Feature</th>
                  <th scope="col" style={{ width: '36%' }}>
                    <div>KILOFLIGHT ALPHA</div>
                    <span className="small font-normal" style={{ color: '#CBD5E1' }}>(2023 Legacy Project)</span>
                  </th>
                  <th scope="col" style={{ width: '36%', background: '#0F172A' }}>
                    <div style={{ color: '#FF6B6B', fontWeight: 800 }}>KILOFLIGHT PHOENIX</div>
                    <span className="small font-normal" style={{ color: '#CBD5E1' }}>(Ongoing 2026–2027)</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className="fw-bold" style={{ color: '#0F172A' }}>Powertrain Engine Platform</th>
                  <td>Single-Cylinder Petrol Engine</td>
                  <td className="fw-bold" style={{ color: '#0F172A' }}>CFMoto 300SR (292 cc, 4-Stroke, Liquid-Cooled, DOHC)</td>
                </tr>
                <tr>
                  <th scope="row" className="fw-bold" style={{ color: '#0F172A' }}>Maximum Top Speed</th>
                  <td>~100 km/h</td>
                  <td className="fw-bold text-danger">120 km/h</td>
                </tr>
                <tr>
                  <th scope="row" className="fw-bold" style={{ color: '#0F172A' }}>Acceleration (0–100 km/h)</th>
                  <td>Standard dynamic baseline</td>
                  <td className="fw-bold text-danger">&le; 5.0 seconds</td>
                </tr>
                <tr>
                  <th scope="row" className="fw-bold" style={{ color: '#0F172A' }}>Aerodynamics Package</th>
                  <td>Streamlined fairing (No wings)</td>
                  <td className="fw-bold" style={{ color: '#0F172A' }}>Multi-element Front Wing, Rear Wing &amp; Side Diffusers</td>
                </tr>
                <tr>
                  <th scope="row" className="fw-bold" style={{ color: '#0F172A' }}>Chassis Structure &amp; Mass</th>
                  <td>Steel Tubular Spaceframe (~28 kg)</td>
                  <td className="fw-bold text-cyan">Optimized 4130 Chromoly / IS 3074 Spaceframe (24.4 kg)</td>
                </tr>
                <tr>
                  <th scope="row" className="fw-bold" style={{ color: '#0F172A' }}>Bodywork &amp; Composite Material</th>
                  <td>Jute Fiber Composite Body Panels</td>
                  <td className="fw-bold" style={{ color: '#B45309' }}>7-Layer Jute Composite + Anti-Intrusion Crash Attenuator</td>
                </tr>
                <tr>
                  <th scope="row" className="fw-bold" style={{ color: '#0F172A' }}>Brake &amp; Pedal Box System</th>
                  <td>Standard hydraulic braking</td>
                  <td className="fw-bold" style={{ color: '#0F172A' }}>Custom CNC Al 5052 3-Pedal Box, Balance Bar &amp; Dual TVS Circuits</td>
                </tr>
                <tr>
                  <th scope="row" className="fw-bold" style={{ color: '#0F172A' }}>Steering System</th>
                  <td>Standard Rack &amp; Pinion</td>
                  <td className="fw-bold" style={{ color: '#0F172A' }}>7075-T6 Al Rack (300 mm) with 10% Optimized Ackermann</td>
                </tr>
                <tr>
                  <th scope="row" className="fw-bold" style={{ color: '#0F172A' }}>Target Event Milestone</th>
                  <td><span className="badge-motorsport jute">FSAE Japan 2023 (Mechanical Pass)</span></td>
                  <td><span className="badge-motorsport red">FSAE Dynamix India 2027 / FSUK 2027</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
