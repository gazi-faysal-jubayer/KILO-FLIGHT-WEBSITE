'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function CarSpecsTabs() {
  const [activeTab, setActiveTab] = useState<'aero' | 'chassis' | 'powertrain' | 'electronics'>('aero');

  return (
    <div className="row g-4 align-items-center">
      {/* Left Column: Image & Quick Stats */}
      <div className="col-lg-6">
        <div className="glass-panel p-4 position-relative overflow-hidden">
          <div className="position-relative w-100 rounded mb-4 overflow-hidden" style={{ height: '260px', border: '2px solid #0F172A', boxShadow: '3px 3px 0 #0F172A' }}>
            <Image
              src="/images/formula_chassis_tech.jpg"
              alt="Chassis & Suspension Engineering"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div className="row g-3 text-center">
            <div className="col-6 col-md-3">
              <div className="p-2 rounded" style={{ background: '#F8FAFC', border: '1.5px solid #0F172A', boxShadow: '2px 2px 0 #0F172A' }}>
                <div className="fs-5 fw-bold font-orbitron" style={{ color: '#0F172A' }}>85 HP</div>
                <div className="small text-muted fw-bold">POWER</div>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="p-2 rounded" style={{ background: '#F8FAFC', border: '1.5px solid #0F172A', boxShadow: '2px 2px 0 #0F172A' }}>
                <div className="fs-5 fw-bold font-orbitron" style={{ color: '#0F172A' }}>12.5k</div>
                <div className="small text-muted fw-bold">MAX RPM</div>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="p-2 rounded" style={{ background: '#F8FAFC', border: '1.5px solid #0F172A', boxShadow: '2px 2px 0 #0F172A' }}>
                <div className="fs-5 fw-bold font-orbitron" style={{ color: '#0F172A' }}>85 KG</div>
                <div className="small text-muted fw-bold">DOWNFORCE</div>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="p-2 rounded" style={{ background: '#F8FAFC', border: '1.5px solid #0F172A', boxShadow: '2px 2px 0 #0F172A' }}>
                <div className="fs-5 fw-bold font-orbitron" style={{ color: '#0F172A' }}>50+</div>
                <div className="small text-muted fw-bold">SENSORS</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: Interactive Tabs */}
      <div className="col-lg-6">
        {/* Tab Buttons */}
        <div className="d-flex gap-2 mb-3 flex-wrap">
          {(['aero', 'chassis', 'powertrain', 'electronics'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`season-btn ${activeTab === tab ? 'active' : ''}`}
            >
              {tab === 'aero' && 'Aerodynamics'}
              {tab === 'chassis' && 'Chassis'}
              {tab === 'powertrain' && 'Powertrain'}
              {tab === 'electronics' && 'Electronics'}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="glass-panel p-4">
          {activeTab === 'aero' && (
            <div>
              <h4 className="mb-3">
                <i className="bi bi-wind text-info me-2"></i> Jute Fiber Composite Aerodynamics
              </h4>
              <p className="small text-muted mb-4">
                Kilo Flight Alpha features groundbreaking bio-composite aerodynamic body panels fabricated using locally sourced Bangladeshi jute fiber resin matrices, offering exceptional specific stiffness and carbon-footprint reduction.
              </p>
              <div className="mb-3">
                <div className="d-flex justify-content-between small fw-bold" style={{ color: '#0F172A' }}>
                  <span>CFD Downforce Optimization</span>
                  <span className="text-info fw-bold">92%</span>
                </div>
                <div style={{ height: '7px', background: '#E2E8F0', borderRadius: '4px', marginTop: '6px', overflow: 'hidden' }}>
                  <div style={{ width: '92%', height: '100%', background: 'linear-gradient(90deg, var(--cyan-telemetry), var(--primary-red))' }}></div>
                </div>
              </div>
              <div>
                <div className="d-flex justify-content-between small fw-bold" style={{ color: '#0F172A' }}>
                  <span>Eco-Sustainability Rating</span>
                  <span className="text-warning fw-bold">98%</span>
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
                <i className="bi bi-bounding-box text-danger me-2"></i> Tubular Spaceframe & Suspension
              </h4>
              <p className="small text-muted mb-4">
                Custom-engineered AISI 4130 chromoly steel spaceframe with pull-rod/push-rod double wishbone suspension geometry, optimized using Finite Element Analysis (FEA) for high torsional rigidity.
              </p>
              <div className="mb-3">
                <div className="d-flex justify-content-between small fw-bold" style={{ color: '#0F172A' }}>
                  <span>Torsional Stiffness</span>
                  <span className="text-info fw-bold">1,850 Nm/deg</span>
                </div>
                <div style={{ height: '7px', background: '#E2E8F0', borderRadius: '4px', marginTop: '6px', overflow: 'hidden' }}>
                  <div style={{ width: '85%', height: '100%', background: 'linear-gradient(90deg, var(--cyan-telemetry), var(--primary-red))' }}></div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'powertrain' && (
            <div>
              <h4 className="mb-3">
                <i className="bi bi-lightning-charge text-warning me-2"></i> Engine & Drivetrain Tuning
              </h4>
              <p className="small text-muted mb-4">
                Engineered with custom ECU fuel-injection mapping, Drexler limited-slip differential, custom-fabricated stainless steel exhaust headers, and pneumatic quickshifting system.
              </p>
              <div className="mb-3">
                <div className="d-flex justify-content-between small fw-bold" style={{ color: '#0F172A' }}>
                  <span>Throttle Response Time</span>
                  <span className="text-danger fw-bold">&lt; 45ms</span>
                </div>
                <div style={{ height: '7px', background: '#E2E8F0', borderRadius: '4px', marginTop: '6px', overflow: 'hidden' }}>
                  <div style={{ width: '94%', height: '100%', background: 'linear-gradient(90deg, var(--yellow-accent), var(--primary-red))' }}></div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'electronics' && (
            <div>
              <h4 className="mb-3">
                <i className="bi bi-cpu text-info me-2"></i> CAN Bus & Real-Time Telemetry
              </h4>
              <p className="small text-muted mb-4">
                Integrated telemetry harness streaming 50+ high-frequency sensor feeds (wheel speeds, brake line pressure, suspension potentiometers, engine thermal sensors) to the pit wall display.
              </p>
              <div className="mb-3">
                <div className="d-flex justify-content-between small fw-bold" style={{ color: '#0F172A' }}>
                  <span>Live Sensor Sampling Frequency</span>
                  <span className="text-info fw-bold">500 Hz</span>
                </div>
                <div style={{ height: '7px', background: '#E2E8F0', borderRadius: '4px', marginTop: '6px', overflow: 'hidden' }}>
                  <div style={{ width: '96%', height: '100%', background: 'linear-gradient(90deg, var(--cyan-telemetry), var(--jute-gold))' }}></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
