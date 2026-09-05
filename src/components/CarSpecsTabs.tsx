'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function CarSpecsTabs() {
  const [activeTab, setActiveTab] = useState<'aero' | 'chassis' | 'powertrain' | 'brakes'>('aero');

  return (
    <div className="row g-4 align-items-center">
      {/* Left Column: Technical Car Blueprint Image & Quick Metrics */}
      <div className="col-lg-6">
        <div className="glass-panel p-4">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <span className="badge-motorsport red">Vehicle Blueprint: 2026–2027</span>
            <span className="small text-muted font-monospace">KILOFLIGHT PHOENIX</span>
          </div>

          <div className="position-relative rounded overflow-hidden mb-4" style={{ height: '300px', border: '2px solid #0F172A', boxShadow: '3px 3px 0 #0F172A' }}>
            <Image
              src="/images/formula_chassis_tech.jpg"
              alt="KILOFLIGHT PHOENIX Technical Architecture"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div className="row g-3 text-center">
            <div className="col-6 col-md-3">
              <div className="p-2 rounded" style={{ background: '#F8FAFC', border: '1.5px solid #0F172A', boxShadow: '2px 2px 0 #0F172A' }}>
                <div className="fs-5 fw-bold font-orbitron" style={{ color: '#0F172A' }}>292 cc</div>
                <div className="small text-muted fw-bold">CFMOTO 300SR</div>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="p-2 rounded" style={{ background: '#F8FAFC', border: '1.5px solid #0F172A', boxShadow: '2px 2px 0 #0F172A' }}>
                <div className="fs-5 fw-bold font-orbitron" style={{ color: '#0F172A' }}>120 KM/H</div>
                <div className="small text-muted fw-bold">TOP SPEED</div>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="p-2 rounded" style={{ background: '#F8FAFC', border: '1.5px solid #0F172A', boxShadow: '2px 2px 0 #0F172A' }}>
                <div className="fs-5 fw-bold font-orbitron" style={{ color: '#0F172A' }}>24.4 KG</div>
                <div className="small text-muted fw-bold">4130 FRAME</div>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="p-2 rounded" style={{ background: '#F8FAFC', border: '1.5px solid #0F172A', boxShadow: '2px 2px 0 #0F172A' }}>
                <div className="fs-5 fw-bold font-orbitron" style={{ color: '#0F172A' }}>&le; 5.0s</div>
                <div className="small text-muted fw-bold">0-100 ACCEL</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: Interactive Tabs */}
      <div className="col-lg-6">
        {/* Tab Buttons */}
        <div className="d-flex gap-2 mb-3 flex-wrap">
          {(['aero', 'chassis', 'powertrain', 'brakes'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`season-btn ${activeTab === tab ? 'active' : ''}`}
            >
              {tab === 'aero' && 'Aero & 7-Layer Jute'}
              {tab === 'chassis' && '4130 Spaceframe'}
              {tab === 'powertrain' && 'CFMoto Powertrain'}
              {tab === 'brakes' && 'CNC 3-Pedal & Steering'}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="glass-panel p-4">
          {activeTab === 'aero' && (
            <div>
              <h4 className="mb-3">
                <i className="bi bi-wind text-info me-2"></i> Multi-Element Aero &amp; 7-Layer Jute Composite
              </h4>
              <p className="small text-muted mb-4">
                KILOFLIGHT PHOENIX introduces custom multi-element front and rear wing airfoils (chord lengths 180–230 mm), side diffusers, and 7-layer natural Jute-fiber hand layups with sodium silicate resin matrices plus front anti-intrusion crash attenuator.
              </p>
              <div className="mb-3">
                <div className="d-flex justify-content-between small fw-bold" style={{ color: '#0F172A' }}>
                  <span>CFD Lift-to-Drag Ratio Optimization</span>
                  <span className="text-info fw-bold">Multi-Wing + Diffusers</span>
                </div>
                <div style={{ height: '7px', background: '#E2E8F0', borderRadius: '4px', marginTop: '6px', overflow: 'hidden' }}>
                  <div style={{ width: '95%', height: '100%', background: 'linear-gradient(90deg, var(--cyan-telemetry), var(--primary-red))' }}></div>
                </div>
              </div>
              <div>
                <div className="d-flex justify-content-between small fw-bold" style={{ color: '#0F172A' }}>
                  <span>Sustainable Bio-Composite Body Panels</span>
                  <span className="text-warning fw-bold">7-Layer Natural Jute</span>
                </div>
                <div style={{ height: '7px', background: '#E2E8F0', borderRadius: '4px', marginTop: '6px', overflow: 'hidden' }}>
                  <div style={{ width: '98%', height: '100%', background: 'var(--jute-gold)' }}></div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'chassis' && (
            <div>
              <h4 className="mb-3">
                <i className="bi bi-bounding-box text-danger me-2"></i> 24.4 kg 4130 Chromoly Spaceframe &amp; Suspension
              </h4>
              <p className="small text-muted mb-4">
                Engineered in SolidWorks and validated via Finite Element Analysis (FEA) for high torsional rigidity. Features 4 mm laser-cut sheet metal uprights, dedicated welding jigs, and DNM Burner-RCP 2S dampers.
              </p>
              <div className="mb-3">
                <div className="d-flex justify-content-between small fw-bold" style={{ color: '#0F172A' }}>
                  <span>Chassis Spaceframe Mass</span>
                  <span className="text-danger fw-bold">24.4 kg (Optimized IS 3074 / 4130)</span>
                </div>
                <div style={{ height: '7px', background: '#E2E8F0', borderRadius: '4px', marginTop: '6px', overflow: 'hidden' }}>
                  <div style={{ width: '92%', height: '100%', background: 'linear-gradient(90deg, var(--cyan-telemetry), var(--primary-red))' }}></div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'powertrain' && (
            <div>
              <h4 className="mb-3">
                <i className="bi bi-lightning-charge text-warning me-2"></i> CFMoto 300SR 292 cc Powertrain
              </h4>
              <p className="small text-muted mb-4">
                High-revving liquid-cooled 4-stroke DOHC single-cylinder engine paired with custom 4.5–5.0L baffled aluminum fuel tank, rollover check valve, custom intake restrictor airflow tuning, and high-efficiency radiator ducting.
              </p>
              <div className="mb-3">
                <div className="d-flex justify-content-between small fw-bold" style={{ color: '#0F172A' }}>
                  <span>Target Top Speed &amp; Acceleration</span>
                  <span className="text-danger fw-bold">120 km/h | &le; 5.0s (0-100)</span>
                </div>
                <div style={{ height: '7px', background: '#E2E8F0', borderRadius: '4px', marginTop: '6px', overflow: 'hidden' }}>
                  <div style={{ width: '96%', height: '100%', background: 'linear-gradient(90deg, var(--yellow-accent), var(--primary-red))' }}></div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'brakes' && (
            <div>
              <h4 className="mb-3">
                <i className="bi bi-cpu text-info me-2"></i> Custom CNC Al 5052 3-Pedal Box &amp; 7075-T6 Steering
              </h4>
              <p className="small text-muted mb-4">
                Custom CNC-milled Al 5052 plate assembly housing throttle, brake, and clutch with dual TVS master cylinders, threaded balance bar, mechanical Brake Over-Travel Switch (BOTS), and 300 mm 7075-T6 rack with 10% Ackermann.
              </p>
              <div className="mb-3">
                <div className="d-flex justify-content-between small fw-bold" style={{ color: '#0F172A' }}>
                  <span>Dynamic Brake Lockup Validation</span>
                  <span className="text-info fw-bold">2,000 N 4-Wheel Lockup Passed</span>
                </div>
                <div style={{ height: '7px', background: '#E2E8F0', borderRadius: '4px', marginTop: '6px', overflow: 'hidden' }}>
                  <div style={{ width: '97%', height: '100%', background: 'linear-gradient(90deg, var(--cyan-telemetry), var(--jute-gold))' }}></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
