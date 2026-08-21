import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'The Cars & Evolution | Team Kilo Flight - KUET',
  description: 'Explore Team Kilo Flight\'s Formula Student race cars evolution - Kilo Flight 1.0, Kilo Flight Alpha (Jute Composite), and Kilo Flight EV Concept.',
};

export default function CarsPage() {
  return (
    <>
      {/* Header */}
      <section className="section-padding py-5" style={{ background: 'radial-gradient(circle at top, rgba(248, 203, 46, 0.08) 0%, var(--dark-bg) 100%)' }}>
        <div className="container mx-auto px-4 text-center">
          <span className="badge-motorsport jute mb-2">Vehicle Evolution</span>
          <h1 className="text-white mb-3">THE CARS OF KILO FLIGHT</h1>
          <p className="text-muted max-w-700 mx-auto" style={{ maxWidth: '750px' }}>
            Three generations of engineering evolution at Khulna University of Engineering & Technology (KUET).
          </p>
        </div>
      </section>

      {/* Cars Showcase */}
      <section className="section-padding py-5">
        <div className="container mx-auto px-4">
          
          {/* Kilo Flight Alpha */}
          <div className="glass-panel p-4 mb-5">
            <div className="row align-items-center g-4">
              <div className="col-lg-6">
                <div className="position-relative w-100 rounded overflow-hidden" style={{ height: '320px', border: '1px solid var(--card-border)' }}>
                  <Image
                    src="/images/formula_car_hero.jpg"
                    alt="Kilo Flight Alpha"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <span className="badge-motorsport jute me-2">2021 - 2023 Competitor</span>
                <span className="badge-motorsport red">FSUK & FS Germany</span>
                <h2 className="text-white mt-2 mb-3">KILO FLIGHT ALPHA</h2>
                <p className="text-muted">
                  Bangladesh&apos;s pioneer Formula Student car incorporating natural jute fiber composite aerodynamics. Engineered for high downforce and optimal power-to-weight ratio.
                </p>

                <div className="row g-2 text-center mt-3">
                  <div className="col-3">
                    <div className="p-2 rounded bg-dark border border-secondary">
                      <div className="font-orbitron fw-bold text-white fs-5">85 HP</div>
                      <div className="small text-muted">POWER</div>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="p-2 rounded bg-dark border border-secondary">
                      <div className="font-orbitron fw-bold text-white fs-5">195 KG</div>
                      <div className="small text-muted">WEIGHT</div>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="p-2 rounded bg-dark border border-secondary">
                      <div className="font-orbitron fw-bold text-white fs-5">3.2s</div>
                      <div className="small text-muted">0-100 KM/H</div>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="p-2 rounded bg-dark border border-secondary">
                      <div className="font-orbitron fw-bold text-warning fs-5">JUTE</div>
                      <div className="small text-muted">AERO</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Kilo Flight EV Concept */}
          <div className="glass-panel p-4 mb-5">
            <div className="row align-items-center g-4">
              <div className="col-lg-6 order-lg-2">
                <div className="position-relative w-100 rounded overflow-hidden" style={{ height: '320px', border: '1px solid var(--card-border)' }}>
                  <Image
                    src="/images/formula_telemetry_steering.jpg"
                    alt="Kilo Flight EV Concept"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
              <div className="col-lg-6 order-lg-1">
                <span className="badge-motorsport me-2">2024 - 2026 Electric Concept</span>
                <h2 className="text-white mt-2 mb-3">KILO FLIGHT EV</h2>
                <p className="text-muted">
                  Next-generation electric powertrain platform featuring dual motor torque vectoring, high-voltage battery stack, custom BMS, and digital cockpit telemetry.
                </p>

                <div className="row g-2 text-center mt-3">
                  <div className="col-3">
                    <div className="p-2 rounded bg-dark border border-secondary">
                      <div className="font-orbitron fw-bold text-cyan fs-5">110 HP</div>
                      <div className="small text-muted">PEAK EV</div>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="p-2 rounded bg-dark border border-secondary">
                      <div className="font-orbitron fw-bold text-white fs-5">210 KG</div>
                      <div className="small text-muted">WEIGHT</div>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="p-2 rounded bg-dark border border-secondary">
                      <div className="font-orbitron fw-bold text-danger fs-5">2.8s</div>
                      <div className="small text-muted">0-100 KM/H</div>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="p-2 rounded bg-dark border border-secondary">
                      <div className="font-orbitron fw-bold text-cyan fs-5">400V</div>
                      <div className="small text-muted">BATTERY</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Specification Comparison Matrix */}
      <section className="section-padding py-5" style={{ background: 'rgba(6, 10, 18, 0.5)' }}>
        <div className="container mx-auto px-4">
          <div className="row text-center mb-4">
            <div className="col-lg-8 mx-auto">
              <span className="badge-motorsport red mb-2">Technical Matrix</span>
              <h2 className="mb-2">SPECIFICATION COMPARISON</h2>
            </div>
          </div>

          <div className="table-responsive">
            <table className="schedule-table table text-white align-middle text-center w-100">
              <thead>
                <tr>
                  <th className="text-start">Technical Specification</th>
                  <th>Kilo Flight 1.0 (2019)</th>
                  <th>Kilo Flight Alpha (2022)</th>
                  <th>Kilo Flight EV (2026 Concept)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th className="text-start">Powertrain Type</th>
                  <td>Internal Combustion Engine (600cc)</td>
                  <td>Tuned ICE (600cc MoTeC ECU)</td>
                  <td className="text-cyan fw-bold">Dual Motor Electric Powertrain</td>
                </tr>
                <tr>
                  <th className="text-start">Peak Power Output</th>
                  <td>65 HP</td>
                  <td>85 HP @ 11,500 RPM</td>
                  <td className="text-warning fw-bold">110 HP Peak EV</td>
                </tr>
                <tr>
                  <th className="text-start">Kerb Weight</th>
                  <td>240 kg</td>
                  <td>195 kg</td>
                  <td>210 kg (with Battery Pack)</td>
                </tr>
                <tr>
                  <th className="text-start">Chassis Structure</th>
                  <td>Steel Spaceframe</td>
                  <td>Chromoly Spaceframe</td>
                  <td className="text-cyan fw-bold">Carbon Monocoque + Spaceframe</td>
                </tr>
                <tr>
                  <th className="text-start">Bodywork Material</th>
                  <td>Fiberglass</td>
                  <td className="text-warning fw-bold">Jute Composite Bio-Resin</td>
                  <td>Jute &amp; Carbon Hybrid Composite</td>
                </tr>
                <tr>
                  <th className="text-start">Max Telemetry Sensors</th>
                  <td>12 Sensors</td>
                  <td>50+ CAN Sensors</td>
                  <td className="text-cyan fw-bold">80+ CAN Telemetry Sensors</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
