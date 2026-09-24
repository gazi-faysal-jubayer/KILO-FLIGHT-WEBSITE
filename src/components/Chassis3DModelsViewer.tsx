'use client';

import React, { useState } from 'react';

type ChassisTab = 'chassis' | 'suspension' | 'shock' | 'all';

export default function Chassis3DModelsViewer() {
  const [activeTab, setActiveTab] = useState<ChassisTab>('chassis');

  return (
    <div
      className="p-4 p-md-5 rounded mb-4"
      style={{
        background: '#FFFFFF',
        border: '2px solid #0F172A',
        boxShadow: '4px 4px 0 #DC2626',
      }}
    >
      {/* Header and Model Switcher Tabs */}
      <div className="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-4">
        <div>
          <span className="badge-motorsport red mb-1">1.2 Chassis &amp; Suspension 3D CAD Models</span>
          <h4 className="font-orbitron mb-0" style={{ color: '#0F172A', fontWeight: 900 }}>
            {activeTab === 'chassis'
              ? 'FORMULA TUBULAR SPACEFRAME CHASSIS'
              : activeTab === 'suspension'
              ? 'PUSH ROD DOUBLE WISHBONE SUSPENSION'
              : activeTab === 'shock'
              ? 'COILOVER SHOCK ABSORBER & DAMPER'
              : 'CHASSIS & KINEMATICS MULTI-VIEW STUDIO'}
          </h4>
        </div>

        {/* Tab Buttons */}
        <div
          className="d-inline-flex p-1 rounded gap-1 flex-wrap"
          style={{ background: '#0F172A', border: '1.5px solid #0F172A' }}
        >
          <button
            type="button"
            onClick={() => setActiveTab('chassis')}
            className="btn btn-sm d-inline-flex align-items-center gap-2"
            style={{
              background: activeTab === 'chassis' ? '#DC2626' : 'transparent',
              color: '#FFFFFF',
              border: activeTab === 'chassis' ? '1px solid #F87171' : 'none',
              fontWeight: 800,
              fontSize: '12px',
              padding: '8px 14px',
              borderRadius: '6px',
              transition: 'all 0.15s ease',
            }}
          >
            <i className="bi bi-shield-shaded"></i>
            <span>1. Spaceframe</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('suspension')}
            className="btn btn-sm d-inline-flex align-items-center gap-2"
            style={{
              background: activeTab === 'suspension' ? '#DC2626' : 'transparent',
              color: '#FFFFFF',
              border: activeTab === 'suspension' ? '1px solid #F87171' : 'none',
              fontWeight: 800,
              fontSize: '12px',
              padding: '8px 14px',
              borderRadius: '6px',
              transition: 'all 0.15s ease',
            }}
          >
            <i className="bi bi-diagram-2"></i>
            <span>2. Push Rod</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('shock')}
            className="btn btn-sm d-inline-flex align-items-center gap-2"
            style={{
              background: activeTab === 'shock' ? '#DC2626' : 'transparent',
              color: '#FFFFFF',
              border: activeTab === 'shock' ? '1px solid #F87171' : 'none',
              fontWeight: 800,
              fontSize: '12px',
              padding: '8px 14px',
              borderRadius: '6px',
              transition: 'all 0.15s ease',
            }}
          >
            <i className="bi bi-bezier2"></i>
            <span>3. Shock Absorber</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('all')}
            className="btn btn-sm d-inline-flex align-items-center gap-2"
            style={{
              background: activeTab === 'all' ? '#0F172A' : 'transparent',
              color: '#FFFFFF',
              border: activeTab === 'all' ? '1px solid #94A3B8' : 'none',
              fontWeight: 800,
              fontSize: '12px',
              padding: '8px 14px',
              borderRadius: '6px',
              transition: 'all 0.15s ease',
            }}
          >
            <i className="bi bi-grid-fill text-warning"></i>
            <span>Multi-View</span>
          </button>
        </div>
      </div>

      <p className="small text-muted mb-3" style={{ lineHeight: '1.6' }}>
        {activeTab === 'chassis'
          ? 'Inspect the Formula Student tubular spaceframe chassis in interactive 3D. Explore the main roll hoop, front roll hoop, side impact structure triangulation, front bulkhead, and engine bay geometry compliant with Formula Student regulations.'
          : activeTab === 'suspension'
          ? 'Inspect the push rod double wishbone suspension system in interactive 3D. Examine the unequal-length A-arms, upright knuckle assembly, diagonal pushrod linkage, and bellcrank rocker converting wheel vertical travel into inboard shock deflection.'
          : activeTab === 'shock'
          ? 'Inspect the high-performance coilover monotube damper in interactive 3D. Observe the nitrogen-pressurized body, helical spring rate, threaded ride height pre-load collar, and velocity-sensitive valving.'
          : 'Multi-View Studio: Inspect the Spaceframe Chassis, Push Rod Suspension, and Coilover Shock Absorber side-by-side in real-time 3D.'}
      </p>

      {/* 3D Embed Viewports */}
      <div className="row g-4">
        {/* Model 1: Chassis Spaceframe */}
        {(activeTab === 'chassis' || activeTab === 'all') && (
          <div className={activeTab === 'all' ? 'col-lg-4 col-12' : 'col-12'}>
            {activeTab === 'all' && (
              <div
                className="p-2 px-3 rounded mb-2 d-flex align-items-center justify-content-between"
                style={{ background: '#0F172A', color: '#FFFFFF', fontSize: '12px', fontWeight: 800 }}
              >
                <span>
                  <i className="bi bi-shield-shaded text-danger me-2"></i> P4T Formula Spaceframe
                </span>
                <span className="badge" style={{ background: '#DC2626' }}>4130 Chromoly</span>
              </div>
            )}
            <div
              className="sketchfab-embed-wrapper rounded overflow-hidden"
              style={{
                border: '2px solid #0F172A',
                boxShadow: '3px 3px 0 #0F172A',
                background: '#0F172A',
              }}
            >
              <div className="position-relative" style={{ width: '100%', height: activeTab === 'all' ? '400px' : '500px' }}>
                <iframe
                  title="P4T Formula chassis"
                  src="https://sketchfab.com/models/70ed61a02c964b6a8bfceaf19df98eb6/embed?autostart=1&preload=1&ui_theme=dark"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    border: 0,
                  }}
                  allow="autoplay; fullscreen; xr-spatial-tracking"
                  allowFullScreen
                />
              </div>

              {/* Model Meta Footer */}
              <div
                className="d-flex align-items-center justify-content-between p-2 px-3 flex-wrap gap-2"
                style={{ background: '#0F172A', borderTop: '1px solid #1E293B', fontSize: '12px', color: '#94A3B8' }}
              >
                <span>
                  <i className="bi bi-box me-1 text-info"></i>
                  <a
                    href="https://sketchfab.com/3d-models/p4t-formula-chassis-70ed61a02c964b6a8bfceaf19df98eb6"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    style={{ fontWeight: 'bold', color: '#38BDF8', textDecoration: 'none' }}
                  >
                    P4T Formula chassis
                  </a>{' '}
                  by{' '}
                  <a
                    href="https://sketchfab.com/Qvist_Designs"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    style={{ fontWeight: 'bold', color: '#38BDF8', textDecoration: 'none' }}
                  >
                    Qvist_designs
                  </a>{' '}
                  on{' '}
                  <a
                    href="https://sketchfab.com"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    style={{ fontWeight: 'bold', color: '#38BDF8', textDecoration: 'none' }}
                  >
                    Sketchfab
                  </a>
                </span>
                <span className="badge" style={{ background: '#1E293B', color: '#38BDF8' }}>
                  Spaceframe CAD
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Model 2: Push Rod Suspension */}
        {(activeTab === 'suspension' || activeTab === 'all') && (
          <div className={activeTab === 'all' ? 'col-lg-4 col-12' : 'col-12'}>
            {activeTab === 'all' && (
              <div
                className="p-2 px-3 rounded mb-2 d-flex align-items-center justify-content-between"
                style={{ background: '#0F172A', color: '#FFFFFF', fontSize: '12px', fontWeight: 800 }}
              >
                <span>
                  <i className="bi bi-diagram-2 text-primary me-2"></i> Push Rod Suspension
                </span>
                <span className="badge" style={{ background: '#0284C7' }}>Double Wishbone</span>
              </div>
            )}
            <div
              className="sketchfab-embed-wrapper rounded overflow-hidden"
              style={{
                border: '2px solid #0F172A',
                boxShadow: '3px 3px 0 #0F172A',
                background: '#0F172A',
              }}
            >
              <div className="position-relative" style={{ width: '100%', height: activeTab === 'all' ? '400px' : '500px' }}>
                <iframe
                  title="Formula E Push Rod Suspension"
                  src="https://sketchfab.com/models/005da2e35d754ac898754a92c42f434d/embed?autostart=1&preload=1&ui_theme=dark"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    border: 0,
                  }}
                  allow="autoplay; fullscreen; xr-spatial-tracking"
                  allowFullScreen
                />
              </div>

              {/* Model Meta Footer */}
              <div
                className="d-flex align-items-center justify-content-between p-2 px-3 flex-wrap gap-2"
                style={{ background: '#0F172A', borderTop: '1px solid #1E293B', fontSize: '12px', color: '#94A3B8' }}
              >
                <span>
                  <i className="bi bi-diagram-2 me-1 text-danger"></i>
                  <a
                    href="https://sketchfab.com/3d-models/formula-e-push-rod-suspension-005da2e35d754ac898754a92c42f434d"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    style={{ fontWeight: 'bold', color: '#38BDF8', textDecoration: 'none' }}
                  >
                    Formula E Push Rod Suspension
                  </a>{' '}
                  by{' '}
                  <a
                    href="https://sketchfab.com/DM13"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    style={{ fontWeight: 'bold', color: '#38BDF8', textDecoration: 'none' }}
                  >
                    DM13
                  </a>{' '}
                  on{' '}
                  <a
                    href="https://sketchfab.com"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    style={{ fontWeight: 'bold', color: '#38BDF8', textDecoration: 'none' }}
                  >
                    Sketchfab
                  </a>
                </span>
                <span className="badge" style={{ background: '#1E293B', color: '#F87171' }}>
                  Suspension Kinematics
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Model 3: Shock Absorber */}
        {(activeTab === 'shock' || activeTab === 'all') && (
          <div className={activeTab === 'all' ? 'col-lg-4 col-12' : 'col-12'}>
            {activeTab === 'all' && (
              <div
                className="p-2 px-3 rounded mb-2 d-flex align-items-center justify-content-between"
                style={{ background: '#0F172A', color: '#FFFFFF', fontSize: '12px', fontWeight: 800 }}
              >
                <span>
                  <i className="bi bi-bezier2 text-warning me-2"></i> Monotube Coilover Shock
                </span>
                <span className="badge" style={{ background: '#16A34A' }}>Nitrogen Damper</span>
              </div>
            )}
            <div
              className="sketchfab-embed-wrapper rounded overflow-hidden"
              style={{
                border: '2px solid #0F172A',
                boxShadow: '3px 3px 0 #0F172A',
                background: '#0F172A',
              }}
            >
              <div className="position-relative" style={{ width: '100%', height: activeTab === 'all' ? '400px' : '500px' }}>
                <iframe
                  title="SHOCK ABSORBER FBX"
                  src="https://sketchfab.com/models/cc938094c7ac4d3ba0a187d04bff2c4a/embed?autostart=1&preload=1&ui_theme=dark"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    border: 0,
                  }}
                  allow="autoplay; fullscreen; xr-spatial-tracking"
                  allowFullScreen
                />
              </div>

              {/* Model Meta Footer */}
              <div
                className="d-flex align-items-center justify-content-between p-2 px-3 flex-wrap gap-2"
                style={{ background: '#0F172A', borderTop: '1px solid #1E293B', fontSize: '12px', color: '#94A3B8' }}
              >
                <span>
                  <i className="bi bi-bezier2 me-1 text-warning"></i>
                  <a
                    href="https://sketchfab.com/3d-models/shock-absorber-fbx-cc938094c7ac4d3ba0a187d04bff2c4a"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    style={{ fontWeight: 'bold', color: '#38BDF8', textDecoration: 'none' }}
                  >
                    SHOCK ABSORBER FBX
                  </a>{' '}
                  by{' '}
                  <a
                    href="https://sketchfab.com/danes_dysfunction"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    style={{ fontWeight: 'bold', color: '#38BDF8', textDecoration: 'none' }}
                  >
                    danes_dysfunction
                  </a>{' '}
                  on{' '}
                  <a
                    href="https://sketchfab.com"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    style={{ fontWeight: 'bold', color: '#38BDF8', textDecoration: 'none' }}
                  >
                    Sketchfab
                  </a>
                </span>
                <span className="badge" style={{ background: '#1E293B', color: '#4ADE80' }}>
                  Coilover Damper
                </span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Model Spec Pills under Viewer */}
      <div className="row g-3 mt-3">
        {activeTab === 'chassis' ? (
          <>
            <div className="col-md-3 col-6">
              <div className="p-2 px-3 rounded" style={{ background: '#F8FAFC', border: '1px solid #CBD5E1' }}>
                <span className="small text-muted d-block" style={{ fontSize: '11px' }}>Material Grade</span>
                <span className="fw-bold" style={{ color: '#0F172A', fontSize: '13px' }}>AISI 4130 Seamless Chromoly</span>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="p-2 px-3 rounded" style={{ background: '#F8FAFC', border: '1px solid #CBD5E1' }}>
                <span className="small text-muted d-block" style={{ fontSize: '11px' }}>Torsional Stiffness</span>
                <span className="fw-bold" style={{ color: '#0F172A', fontSize: '13px' }}>1,920 Nm/deg Target</span>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="p-2 px-3 rounded" style={{ background: '#F8FAFC', border: '1px solid #CBD5E1' }}>
                <span className="small text-muted d-block" style={{ fontSize: '11px' }}>Main Hoop Spec</span>
                <span className="fw-bold" style={{ color: '#0F172A', fontSize: '13px' }}>OD 25.4 mm × 2.4 mm Wall</span>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="p-2 px-3 rounded" style={{ background: '#F8FAFC', border: '1px solid #CBD5E1' }}>
                <span className="small text-muted d-block" style={{ fontSize: '11px' }}>Total Bare Frame Mass</span>
                <span className="fw-bold text-danger" style={{ fontSize: '13px' }}>29.8 kg Finished</span>
              </div>
            </div>
          </>
        ) : activeTab === 'suspension' ? (
          <>
            <div className="col-md-3 col-6">
              <div className="p-2 px-3 rounded" style={{ background: '#F8FAFC', border: '1px solid #CBD5E1' }}>
                <span className="small text-muted d-block" style={{ fontSize: '11px' }}>Kinematics Architecture</span>
                <span className="fw-bold" style={{ color: '#0F172A', fontSize: '13px' }}>Unequal Double Wishbone Pushrod</span>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="p-2 px-3 rounded" style={{ background: '#F8FAFC', border: '1px solid #CBD5E1' }}>
                <span className="small text-muted d-block" style={{ fontSize: '11px' }}>Rocker Motion Ratio</span>
                <span className="fw-bold" style={{ color: '#0F172A', fontSize: '13px' }}>0.85:1 Progressive Bellcrank</span>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="p-2 px-3 rounded" style={{ background: '#F8FAFC', border: '1px solid #CBD5E1' }}>
                <span className="small text-muted d-block" style={{ fontSize: '11px' }}>Camber Gain</span>
                <span className="fw-bold" style={{ color: '#0F172A', fontSize: '13px' }}>-0.80° / deg Roll in Bump</span>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="p-2 px-3 rounded" style={{ background: '#F8FAFC', border: '1px solid #CBD5E1' }}>
                <span className="small text-muted d-block" style={{ fontSize: '11px' }}>Upright Knuckles</span>
                <span className="fw-bold text-danger" style={{ fontSize: '13px' }}>CNC Machined Al 7075-T6</span>
              </div>
            </div>
          </>
        ) : activeTab === 'shock' ? (
          <>
            <div className="col-md-3 col-6">
              <div className="p-2 px-3 rounded" style={{ background: '#F8FAFC', border: '1px solid #CBD5E1' }}>
                <span className="small text-muted d-block" style={{ fontSize: '11px' }}>Damper Architecture</span>
                <span className="fw-bold" style={{ color: '#0F172A', fontSize: '13px' }}>High-Pressure Monotube N2</span>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="p-2 px-3 rounded" style={{ background: '#F8FAFC', border: '1px solid #CBD5E1' }}>
                <span className="small text-muted d-block" style={{ fontSize: '11px' }}>Spring Stiffness</span>
                <span className="fw-bold" style={{ color: '#0F172A', fontSize: '13px' }}>275 lbs/in (48.2 N/mm) Linear</span>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="p-2 px-3 rounded" style={{ background: '#F8FAFC', border: '1px solid #CBD5E1' }}>
                <span className="small text-muted d-block" style={{ fontSize: '11px' }}>Damping Adjustment</span>
                <span className="fw-bold" style={{ color: '#0F172A', fontSize: '13px' }}>24-Click Independent 2-Way</span>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="p-2 px-3 rounded" style={{ background: '#F8FAFC', border: '1px solid #CBD5E1' }}>
                <span className="small text-muted d-block" style={{ fontSize: '11px' }}>Usable Stroke</span>
                <span className="fw-bold text-danger" style={{ fontSize: '13px' }}>52 mm Travel + Bumpstop</span>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="col-md-3 col-6">
              <div className="p-2 px-3 rounded" style={{ background: '#F8FAFC', border: '1px solid #CBD5E1' }}>
                <span className="small text-muted d-block" style={{ fontSize: '11px' }}>Wheelbase / Track</span>
                <span className="fw-bold" style={{ color: '#0F172A', fontSize: '13px' }}>1550 mm / 1220 mm</span>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="p-2 px-3 rounded" style={{ background: '#F8FAFC', border: '1px solid #CBD5E1' }}>
                <span className="small text-muted d-block" style={{ fontSize: '11px' }}>Roll Center Height</span>
                <span className="fw-bold" style={{ color: '#0F172A', fontSize: '13px' }}>35 mm Front / 45 mm Rear</span>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="p-2 px-3 rounded" style={{ background: '#F8FAFC', border: '1px solid #CBD5E1' }}>
                <span className="small text-muted d-block" style={{ fontSize: '11px' }}>Ride Frequency</span>
                <span className="fw-bold" style={{ color: '#0F172A', fontSize: '13px' }}>2.35 Hz Front / 2.55 Hz Rear</span>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="p-2 px-3 rounded" style={{ background: '#F8FAFC', border: '1px solid #CBD5E1' }}>
                <span className="small text-muted d-block" style={{ fontSize: '11px' }}>Anti-Roll Geometry</span>
                <span className="fw-bold text-danger" style={{ fontSize: '13px' }}>Adjustable T-Bar ARB</span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
