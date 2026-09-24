'use client';

import React, { useState } from 'react';

export default function ChassisCalculator() {
  const [springRate, setSpringRate] = useState<number>(48); // N/mm (approx 275 lbs/in)
  const [motionRatio, setMotionRatio] = useState<number>(0.85); // Wheel travel / Spring travel
  const [cornerMass, setCornerMass] = useState<number>(65); // kg (quarter car sprung mass)
  const [installAngle, setInstallAngle] = useState<number>(15); // degrees damper inclination

  // Effective motion ratio taking damper angle into account: MR_eff = MR * cos(angle)
  const angleRad = (installAngle * Math.PI) / 180;
  const effectiveMR = motionRatio * Math.cos(angleRad);

  // Wheel Rate: K_wheel = K_spring * (MR_eff)^2
  const wheelRate = springRate * Math.pow(effectiveMR, 2); // N/mm

  // Ride Natural Frequency: fn = (1 / 2*pi) * sqrt( (K_wheel * 1000) / cornerMass )
  const wheelRateSI = wheelRate * 1000; // N/m
  const naturalFrequency = (1 / (2 * Math.PI)) * Math.sqrt(wheelRateSI / cornerMass); // Hz

  // 1.5G dynamic load bump deflection: F = 1.5 * m * 9.81 / K_wheel
  const bumpForce = 1.5 * cornerMass * 9.81; // Newtons
  const wheelDeflection = bumpForce / (wheelRate || 1); // mm

  // Ride characterization
  let rideAssessment = '';
  let badgeColor = '';
  if (naturalFrequency < 1.8) {
    rideAssessment = 'Comfort Soft (Underdamped for Downforce Aero)';
    badgeColor = '#EAB308';
  } else if (naturalFrequency <= 3.0) {
    rideAssessment = 'Optimal FSAE Racing Dynamic Range (High Grip & Platform Control)';
    badgeColor = '#16A34A';
  } else {
    rideAssessment = 'Stiff Aerodynamic Platform (Porous Rough Surfaces)';
    badgeColor = '#DC2626';
  }

  return (
    <div
      className="p-4 p-md-5 rounded mb-5"
      style={{
        background: '#FFFFFF',
        border: '2px solid #0F172A',
        boxShadow: '4px 4px 0 #DC2626',
      }}
    >
      <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-4">
        <div>
          <span className="badge-motorsport red mb-1">Live Technical Calculator</span>
          <h4 className="font-orbitron mb-0" style={{ color: '#0F172A', fontWeight: 800 }}>
            SUSPENSION KINEMATICS &amp; WHEEL RATE SOLVER
          </h4>
        </div>
        <span
          className="badge"
          style={{
            background: '#FEF2F2',
            color: '#DC2626',
            border: '1.5px solid #DC2626',
            fontWeight: 700,
            fontSize: '12px',
          }}
        >
          Quarter-Car Dynamics
        </span>
      </div>

      <p className="text-muted small mb-4" style={{ lineHeight: '1.7' }}>
        Calculate real-time suspension wheel rate, damper installation stiffness, natural frequency (fn), and bump displacement under Formula Student cornering loads.
      </p>

      <div className="row g-4 mb-4">
        {/* Input 1: Spring Stiffness */}
        <div className="col-md-6 col-12">
          <label className="form-label small fw-bold text-uppercase d-flex justify-content-between">
            <span>Coil Spring Rate (Ks)</span>
            <span className="text-danger fw-bold">{springRate} N/mm ({Math.round(springRate * 5.71)} lbs/in)</span>
          </label>
          <input
            type="range"
            className="form-range"
            min="25"
            max="100"
            step="1"
            value={springRate}
            onChange={(e) => setSpringRate(parseFloat(e.target.value))}
          />
          <div className="d-flex justify-content-between text-muted" style={{ fontSize: '11px' }}>
            <span>25 N/mm (Soft)</span>
            <span>60 N/mm (Medium)</span>
            <span>100 N/mm (Stiff)</span>
          </div>
        </div>

        {/* Input 2: Motion Ratio */}
        <div className="col-md-6 col-12">
          <label className="form-label small fw-bold text-uppercase d-flex justify-content-between">
            <span>Rocker Motion Ratio (MR = damper / wheel travel)</span>
            <span className="text-danger fw-bold">{motionRatio.toFixed(2)} : 1</span>
          </label>
          <input
            type="range"
            className="form-range"
            min="0.60"
            max="1.20"
            step="0.01"
            value={motionRatio}
            onChange={(e) => setMotionRatio(parseFloat(e.target.value))}
          />
          <div className="d-flex justify-content-between text-muted" style={{ fontSize: '11px' }}>
            <span>0.60 (Soft ratio)</span>
            <span>0.85 (Direct Bellcrank)</span>
            <span>1.20 (Rising Rate)</span>
          </div>
        </div>

        {/* Input 3: Sprung Corner Mass */}
        <div className="col-md-6 col-12">
          <label className="form-label small fw-bold text-uppercase d-flex justify-content-between">
            <span>Quarter-Car Sprung Mass (m_corner)</span>
            <span className="text-danger fw-bold">{cornerMass} kg ({Math.round(cornerMass * 2.204)} lbs)</span>
          </label>
          <input
            type="range"
            className="form-range"
            min="45"
            max="95"
            step="1"
            value={cornerMass}
            onChange={(e) => setCornerMass(parseFloat(e.target.value))}
          />
          <div className="d-flex justify-content-between text-muted" style={{ fontSize: '11px' }}>
            <span>45 kg (Ultralight)</span>
            <span>65 kg (FSAE Std)</span>
            <span>95 kg (Ballast)</span>
          </div>
        </div>

        {/* Input 4: Damper Inclination Angle */}
        <div className="col-md-6 col-12">
          <label className="form-label small fw-bold text-uppercase d-flex justify-content-between">
            <span>Damper Inclination Angle (α)</span>
            <span className="text-danger fw-bold">{installAngle}° from Normal</span>
          </label>
          <input
            type="range"
            className="form-range"
            min="0"
            max="45"
            step="1"
            value={installAngle}
            onChange={(e) => setInstallAngle(parseFloat(e.target.value))}
          />
          <div className="d-flex justify-content-between text-muted" style={{ fontSize: '11px' }}>
            <span>0° (Vertical)</span>
            <span>15° (Packaged)</span>
            <span>45° (Angled)</span>
          </div>
        </div>
      </div>

      {/* Solver Output Results Cards */}
      <div className="row g-3">
        {/* Output 1: Wheel Rate */}
        <div className="col-md-4 col-12">
          <div
            className="p-3 rounded h-100 text-center"
            style={{
              background: '#0F172A',
              color: '#FFFFFF',
              border: '2px solid #0F172A',
              boxShadow: '3px 3px 0 #DC2626',
            }}
          >
            <span className="small text-uppercase text-muted d-block mb-1 font-orbitron" style={{ fontSize: '11px', color: '#CBD5E1' }}>
              Effective Wheel Rate (K_wheel)
            </span>
            <h3 className="font-orbitron mb-1 text-warning" style={{ fontWeight: 900 }}>
              {wheelRate.toFixed(1)} <span style={{ fontSize: '16px' }}>N/mm</span>
            </h3>
            <p className="small text-muted mb-0" style={{ fontSize: '11px' }}>
              Formula: K_spring × [MR · cos(α)]²
            </p>
          </div>
        </div>

        {/* Output 2: Ride Natural Frequency */}
        <div className="col-md-4 col-12">
          <div
            className="p-3 rounded h-100 text-center"
            style={{
              background: '#0F172A',
              color: '#FFFFFF',
              border: '2px solid #0F172A',
              boxShadow: '3px 3px 0 #DC2626',
            }}
          >
            <span className="small text-uppercase text-muted d-block mb-1 font-orbitron" style={{ fontSize: '11px', color: '#CBD5E1' }}>
              Ride Natural Frequency (fn)
            </span>
            <h3 className="font-orbitron mb-1" style={{ fontWeight: 900, color: '#38BDF8' }}>
              {naturalFrequency.toFixed(2)} <span style={{ fontSize: '16px' }}>Hz</span>
            </h3>
            <p className="small text-muted mb-0" style={{ fontSize: '11px' }}>
              Formula: (1 / 2π) · √(K_wheel / m)
            </p>
          </div>
        </div>

        {/* Output 3: 1.5G Bump Deflection */}
        <div className="col-md-4 col-12">
          <div
            className="p-3 rounded h-100 text-center"
            style={{
              background: '#0F172A',
              color: '#FFFFFF',
              border: '2px solid #0F172A',
              boxShadow: '3px 3px 0 #DC2626',
            }}
          >
            <span className="small text-uppercase text-muted d-block mb-1 font-orbitron" style={{ fontSize: '11px', color: '#CBD5E1' }}>
              1.5G Bump Wheel Travel
            </span>
            <h3 className="font-orbitron mb-1 text-danger" style={{ fontWeight: 900 }}>
              {wheelDeflection.toFixed(1)} <span style={{ fontSize: '16px' }}>mm</span>
            </h3>
            <p className="small text-muted mb-0" style={{ fontSize: '11px' }}>
              Total 50 mm usable damper stroke margin
            </p>
          </div>
        </div>
      </div>

      {/* Dynamic Classification Banner */}
      <div
        className="p-3 rounded mt-3 d-flex align-items-center justify-content-between flex-wrap gap-2"
        style={{ background: '#F8FAFC', border: '1.5px solid #E2E8F0' }}
      >
        <div className="d-flex align-items-center gap-2">
          <span className="badge rounded-circle p-2" style={{ background: badgeColor }}>
            {' '}
          </span>
          <span className="small fw-bold" style={{ color: '#0F172A', fontSize: '12.5px' }}>
            Dynamic Setup Assessment: {rideAssessment}
          </span>
        </div>
        <span className="badge" style={{ background: '#0F172A', color: '#FFFFFF', fontSize: '11px' }}>
          KUET Formula Student Target: 2.2 – 2.8 Hz
        </span>
      </div>
    </div>
  );
}
