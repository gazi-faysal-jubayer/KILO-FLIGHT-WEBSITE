'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export default function CarSpecsTabs() {
  const [activeTab, setActiveTab] = useState<'aero' | 'chassis' | 'powertrain' | 'brakes'>('aero');
  const [phoenix, setPhoenix] = useState({
    engine: '292 cc CFMoto 300SR (DOHC Liquid-Cooled)',
    topSpeed: '120 KM/H',
    acceleration: '≤ 5.0s',
    chassis: '24.4 KG (4130 Chromoly)',
    aero: 'Multi-element Front & Rear Wings + Diffusers',
    bodywork: '7-Layer Jute Composite + Crash Attenuator',
    brakes: 'Custom CNC Al 5052 3-Pedal Box + Dual TVS Circuits',
    steering: '7075-T6 Al Rack (300 mm) with 10% Ackermann',
  });

  useEffect(() => {
    fetch('/api/content')
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.data?.cars) {
          const ph = data.data.cars.find((c: any) => c.id === 'phoenix' || c.status === 'ongoing');
          if (ph) {
            setPhoenix({
              engine: ph.engine,
              topSpeed: ph.topSpeed,
              acceleration: ph.acceleration,
              chassis: ph.chassis,
              aero: ph.aero,
              bodywork: ph.bodywork,
              brakes: ph.brakes,
              steering: ph.steering,
            });
          }
        }
      })
      .catch(() => {});
  }, []);

  return (
    <div className="row g-4 align-items-center">
      {/* Left Column: Image & Quick Stats */}
      <div className="col-lg-6">
        <div className="glass-panel p-4 position-relative overflow-hidden">
          <div className="position-relative w-100 rounded mb-4 overflow-hidden" style={{ height: '260px', border: '2px solid #0F172A', boxShadow: '3px 3px 0 #0F172A' }}>
            <Image
              src="/images/formula_chassis_tech.jpg"
              alt="KILOFLIGHT PHOENIX Engineering"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div className="row g-3 text-center">
            <div className="col-6 col-md-3">
              <div className="p-2 rounded" style={{ background: '#F8FAFC', border: '1.5px solid #0F172A', boxShadow: '2px 2px 0 #0F172A' }}>
                <div className="fs-6 fw-bold font-orbitron text-truncate" style={{ color: '#0F172A' }}>292 cc</div>
                <div className="small text-muted fw-bold" style={{ fontSize: '9px' }}>CFMOTO 300SR</div>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="p-2 rounded" style={{ background: '#F8FAFC', border: '1.5px solid #0F172A', boxShadow: '2px 2px 0 #0F172A' }}>
                <div className="fs-6 fw-bold font-orbitron" style={{ color: '#0F172A' }}>{phoenix.topSpeed}</div>
                <div className="small text-muted fw-bold" style={{ fontSize: '9px' }}>TOP SPEED</div>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="p-2 rounded" style={{ background: '#F8FAFC', border: '1.5px solid #0F172A', boxShadow: '2px 2px 0 #0F172A' }}>
                <div className="fs-6 fw-bold font-orbitron text-truncate" style={{ color: '#0F172A' }}>24.4 KG</div>
                <div className="small text-muted fw-bold" style={{ fontSize: '9px' }}>4130 FRAME</div>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="p-2 rounded" style={{ background: '#F8FAFC', border: '1.5px solid #0F172A', boxShadow: '2px 2px 0 #0F172A' }}>
                <div className="fs-6 fw-bold font-orbitron" style={{ color: '#FF2A2A' }}>{phoenix.acceleration}</div>
                <div className="small text-muted fw-bold" style={{ fontSize: '9px' }}>0-100 ACCEL</div>
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
                <i className="bi bi-wind text-info me-2"></i> {phoenix.aero}
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
                  <span className="text-warning fw-bold">{phoenix.bodywork}</span>
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
                <i className="bi bi-bounding-box text-danger me-2"></i> {phoenix.chassis}
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
                <i className="bi bi-lightning-charge text-cyan me-2"></i> {phoenix.engine}
              </h4>
              <p className="small text-muted mb-4">
                Powered by a single-cylinder DOHC 4-stroke 292 cc engine paired with a 4.5–5.0L baffled aluminum fuel tank with internal fuel pump module, rollover check valve, and custom radiator ducting.
              </p>
              <div className="mb-3">
                <div className="d-flex justify-content-between small fw-bold" style={{ color: '#0F172A' }}>
                  <span>Target Top Speed &amp; Acceleration</span>
                  <span className="text-cyan fw-bold">{phoenix.topSpeed} &bull; {phoenix.acceleration}</span>
                </div>
                <div style={{ height: '7px', background: '#E2E8F0', borderRadius: '4px', marginTop: '6px', overflow: 'hidden' }}>
                  <div style={{ width: '96%', height: '100%', background: 'linear-gradient(90deg, var(--cyan-telemetry), var(--primary-red))' }}></div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'brakes' && (
            <div>
              <h4 className="mb-3">
                <i className="bi bi-gear-wide-connected text-warning me-2"></i> {phoenix.brakes}
              </h4>
              <p className="small text-muted mb-4">
                CNC-machined Al 5052 3-pedal box with balance bar and dual TVS master cylinder circuits, mechanical BOTS trigger bracket, and 300 mm aluminum rack with 10% Ackermann geometry.
              </p>
              <div className="mb-3">
                <div className="d-flex justify-content-between small fw-bold" style={{ color: '#0F172A' }}>
                  <span>Dynamic Brake Lockup Validation</span>
                  <span className="text-warning fw-bold" style={{ color: '#B45309' }}>2000 N 4-Wheel Lockup Verified</span>
                </div>
                <div style={{ height: '7px', background: '#E2E8F0', borderRadius: '4px', marginTop: '6px', overflow: 'hidden' }}>
                  <div style={{ width: '100%', height: '100%', background: 'var(--yellow-accent)' }}></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
