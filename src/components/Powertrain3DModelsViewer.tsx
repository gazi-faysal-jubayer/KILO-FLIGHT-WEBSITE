'use client';

import React, { useState } from 'react';

type CadTab = 'engine' | 'transmission' | 'differential' | 'all';

export default function Powertrain3DModelsViewer() {
  const [activeTab, setActiveTab] = useState<CadTab>('engine');

  return (
    <div
      className="p-3 p-sm-4 p-md-5 rounded mb-4"
      style={{
        background: '#FFFFFF',
        border: '2px solid #0F172A',
        boxShadow: '4px 4px 0 #0284C7',
      }}
    >
      {/* Header and Model Switcher Tabs */}
      <div className="d-flex align-items-md-center justify-content-between flex-column flex-md-row gap-3 mb-4">
        <div>
          <span className="badge-motorsport red mb-1" style={{ fontSize: '10px' }}>
            1.2 Core Power &amp; Drivetrain 3D Models
          </span>
          <h4
            className="font-orbitron mb-0"
            style={{
              color: '#0F172A',
              fontWeight: 900,
              fontSize: 'clamp(1.15rem, 3.2vw, 1.6rem)',
              lineHeight: '1.3',
            }}
          >
            {activeTab === 'engine'
              ? 'CFMOTO 300CC SINGLE-CYLINDER DOHC ENGINE'
              : activeTab === 'transmission'
              ? 'MANUAL TRANSMISSION GEARBOX & DIFFERENTIAL'
              : activeTab === 'differential'
              ? 'OPEN DIFFERENTIAL GEARS & PINION ANIMATION'
              : 'POWERTRAIN MULTI-VIEW: ALL 3 3D MODELS'}
          </h4>
        </div>

        {/* Tab Buttons (Touch Horizontal Swipe on Mobile) */}
        <div
          className="d-flex p-1 rounded gap-1 overflow-x-auto flex-nowrap"
          style={{
            background: '#0F172A',
            border: '1.5px solid #0F172A',
            maxWidth: '100%',
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'none',
          }}
        >
          <button
            type="button"
            onClick={() => setActiveTab('engine')}
            className="btn btn-sm d-inline-flex align-items-center gap-1 text-nowrap flex-shrink-0"
            style={{
              background: activeTab === 'engine' ? '#0284C7' : 'transparent',
              color: '#FFFFFF',
              border: activeTab === 'engine' ? '1px solid #38BDF8' : 'none',
              fontWeight: 800,
              fontSize: '12px',
              padding: '7px 12px',
              borderRadius: '6px',
              transition: 'all 0.15s ease',
            }}
          >
            <i className="bi bi-fire"></i>
            <span>1. Engine</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('transmission')}
            className="btn btn-sm d-inline-flex align-items-center gap-1 text-nowrap flex-shrink-0"
            style={{
              background: activeTab === 'transmission' ? '#0284C7' : 'transparent',
              color: '#FFFFFF',
              border: activeTab === 'transmission' ? '1px solid #38BDF8' : 'none',
              fontWeight: 800,
              fontSize: '12px',
              padding: '7px 12px',
              borderRadius: '6px',
              transition: 'all 0.15s ease',
            }}
          >
            <i className="bi bi-gear-wide-connected"></i>
            <span>2. Transmission</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('differential')}
            className="btn btn-sm d-inline-flex align-items-center gap-1 text-nowrap flex-shrink-0"
            style={{
              background: activeTab === 'differential' ? '#0284C7' : 'transparent',
              color: '#FFFFFF',
              border: activeTab === 'differential' ? '1px solid #38BDF8' : 'none',
              fontWeight: 800,
              fontSize: '12px',
              padding: '7px 12px',
              borderRadius: '6px',
              transition: 'all 0.15s ease',
            }}
          >
            <i className="bi bi-arrow-repeat"></i>
            <span>3. Differential</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('all')}
            className="btn btn-sm d-inline-flex align-items-center gap-1 text-nowrap flex-shrink-0"
            style={{
              background: activeTab === 'all' ? '#DC2626' : 'transparent',
              color: '#FFFFFF',
              border: activeTab === 'all' ? '1px solid #F87171' : 'none',
              fontWeight: 800,
              fontSize: '12px',
              padding: '7px 12px',
              borderRadius: '6px',
              transition: 'all 0.15s ease',
            }}
          >
            <i className="bi bi-grid-fill"></i>
            <span>Multi-View</span>
          </button>
        </div>
      </div>

      <p className="small text-muted mb-3" style={{ lineHeight: '1.6', fontSize: '13.5px' }}>
        {activeTab === 'engine'
          ? 'Inspect the high-revving 292.4cc single-cylinder DOHC power unit in 3D. Click and drag to orbit, scroll to zoom, and examine the cylinder block, cylinder head casting, intake port geometry, and valvetrain assembly.'
          : activeTab === 'transmission'
          ? 'Inspect the constant-mesh manual transmission and bevel gear differential in 3D. Explore the internal gear clusters, synchronizer rings, selector forks, countershaft, and final drive torque splitting.'
          : activeTab === 'differential'
          ? 'Watch the open differential gears animation in 3D. Observe the rotating drive pinion, crown wheel (ring gear), and spider satellite bevel gears that allow the inner and outer driven wheels to rotate at different speeds during tight cornering.'
          : 'Multi-View Studio: Inspect the Engine, Transmission Gearbox, and Open Differential 3D models side-by-side to understand complete vehicle driveline integration.'}
      </p>

      {/* Mobile Touch Guidance Tip */}
      <div
        className="d-flex align-items-center justify-content-between p-2 px-3 mb-3 rounded d-md-none"
        style={{ background: '#F1F5F9', border: '1px solid #CBD5E1', fontSize: '11px', color: '#475569' }}
      >
        <span>
          <i className="bi bi-hand-index-thumb text-primary me-1"></i> Drag to orbit • Pinch to zoom
        </span>
        <span className="fw-semibold text-muted">Scroll outside to navigate</span>
      </div>

      {/* 3D Embed Viewports */}
      <div className="row g-4">
        {/* Model 1: CFMoto 300cc Engine */}
        {(activeTab === 'engine' || activeTab === 'all') && (
          <div className={activeTab === 'all' ? 'col-lg-4 col-md-6 col-12' : 'col-12'}>
            {activeTab === 'all' && (
              <div
                className="p-2 px-3 rounded mb-2 d-flex align-items-center justify-content-between"
                style={{ background: '#0F172A', color: '#FFFFFF', fontSize: '12px', fontWeight: 800 }}
              >
                <span>
                  <i className="bi bi-fire text-danger me-2"></i> CFMOTO 300cc Engine
                </span>
                <span className="badge" style={{ background: '#0284C7' }}>292.4cc DOHC</span>
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
              <div
                className="position-relative"
                style={{
                  width: '100%',
                  height: activeTab === 'all' ? 'clamp(300px, 40vh, 380px)' : 'clamp(340px, 50vh, 500px)',
                }}
              >
                <iframe
                  title="Engine"
                  src="https://sketchfab.com/models/eea9d9252ab14298b50699a471dc2cee/embed?autostart=1&preload=1&ui_theme=dark"
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
                style={{ background: '#0F172A', borderTop: '1px solid #1E293B', fontSize: '11.5px', color: '#94A3B8' }}
              >
                <span className="text-truncate" style={{ maxWidth: '75%' }}>
                  <i className="bi bi-box me-1 text-info"></i>
                  <a
                    href="https://sketchfab.com/3d-models/engine-eea9d9252ab14298b50699a471dc2cee"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    style={{ fontWeight: 'bold', color: '#38BDF8', textDecoration: 'none' }}
                  >
                    Engine
                  </a>{' '}
                  by{' '}
                  <a
                    href="https://sketchfab.com/ezzdesign5"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    style={{ fontWeight: 'bold', color: '#38BDF8', textDecoration: 'none' }}
                  >
                    Ahmed Belal
                  </a>
                </span>
                <span className="badge" style={{ background: '#1E293B', color: '#38BDF8', fontSize: '10.5px' }}>
                  ICE Unit
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Model 2: Manual Transmission Gearbox With Differential */}
        {(activeTab === 'transmission' || activeTab === 'all') && (
          <div className={activeTab === 'all' ? 'col-lg-4 col-md-6 col-12' : 'col-12'}>
            {activeTab === 'all' && (
              <div
                className="p-2 px-3 rounded mb-2 d-flex align-items-center justify-content-between"
                style={{ background: '#0F172A', color: '#FFFFFF', fontSize: '12px', fontWeight: 800 }}
              >
                <span>
                  <i className="bi bi-gear-wide-connected text-primary me-2"></i> Transmission Gearbox
                </span>
                <span className="badge" style={{ background: '#0284C7' }}>6-Speed Sequential</span>
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
              <div
                className="position-relative"
                style={{
                  width: '100%',
                  height: activeTab === 'all' ? 'clamp(300px, 40vh, 380px)' : 'clamp(340px, 50vh, 500px)',
                }}
              >
                <iframe
                  title="Manual Transmission Gearbox With Differential"
                  src="https://sketchfab.com/models/d48d46543d844857b31475e56f941410/embed?autostart=1&preload=1&transparent=1&ui_theme=dark"
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
                style={{ background: '#0F172A', borderTop: '1px solid #1E293B', fontSize: '11.5px', color: '#94A3B8' }}
              >
                <span className="text-truncate" style={{ maxWidth: '75%' }}>
                  <i className="bi bi-gear me-1 text-danger"></i>
                  <a
                    href="https://sketchfab.com/3d-models/manual-transmission-gearbox-with-differential-d48d46543d844857b31475e56f941410"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    style={{ fontWeight: 'bold', color: '#38BDF8', textDecoration: 'none' }}
                  >
                    Transmission &amp; Diff
                  </a>{' '}
                  by{' '}
                  <a
                    href="https://sketchfab.com/avredu"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    style={{ fontWeight: 'bold', color: '#38BDF8', textDecoration: 'none' }}
                  >
                    avredu
                  </a>
                </span>
                <span className="badge" style={{ background: '#1E293B', color: '#F87171', fontSize: '10.5px' }}>
                  Gearbox CAD
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Model 3: Open Differential Gears Animation */}
        {(activeTab === 'differential' || activeTab === 'all') && (
          <div className={activeTab === 'all' ? 'col-lg-4 col-md-12 col-12' : 'col-12'}>
            {activeTab === 'all' && (
              <div
                className="p-2 px-3 rounded mb-2 d-flex align-items-center justify-content-between"
                style={{ background: '#0F172A', color: '#FFFFFF', fontSize: '12px', fontWeight: 800 }}
              >
                <span>
                  <i className="bi bi-arrow-repeat text-warning me-2"></i> Open Differential Gears
                </span>
                <span className="badge" style={{ background: '#DC2626' }}>Animated Kinematics</span>
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
              <div
                className="position-relative"
                style={{
                  width: '100%',
                  height: activeTab === 'all' ? 'clamp(300px, 40vh, 380px)' : 'clamp(340px, 50vh, 500px)',
                }}
              >
                <iframe
                  title="Differential Gears Animation"
                  src="https://sketchfab.com/models/0f3ee18a0c5441688846f20f2eb0f2e0/embed?autostart=1&preload=1&ui_watermark_link=0&ui_watermark=0&ui_theme=dark"
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
                style={{ background: '#0F172A', borderTop: '1px solid #1E293B', fontSize: '11.5px', color: '#94A3B8' }}
              >
                <span className="text-truncate" style={{ maxWidth: '75%' }}>
                  <i className="bi bi-arrow-repeat me-1 text-warning"></i>
                  <a
                    href="https://sketchfab.com/3d-models/differential-gears-animation-0f3ee18a0c5441688846f20f2eb0f2e0"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    style={{ fontWeight: 'bold', color: '#38BDF8', textDecoration: 'none' }}
                  >
                    Differential Gears
                  </a>{' '}
                  by{' '}
                  <a
                    href="https://sketchfab.com/Padpilot"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    style={{ fontWeight: 'bold', color: '#38BDF8', textDecoration: 'none' }}
                  >
                    Padpilot
                  </a>
                </span>
                <span className="badge" style={{ background: '#1E293B', color: '#FBBF24', fontSize: '10.5px' }}>
                  Animated Bevel
                </span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Model Spec Pills under Viewer (Responsive Grid) */}
      <div className="row g-2 g-sm-3 mt-2 mt-sm-3">
        {activeTab === 'engine' ? (
          <>
            <div className="col-6 col-md-3">
              <div className="p-2 p-sm-3 rounded h-100" style={{ background: '#F8FAFC', border: '1px solid #CBD5E1' }}>
                <span className="small text-muted d-block text-truncate" style={{ fontSize: '11px' }}>Displacement</span>
                <span className="fw-bold d-block text-truncate" style={{ color: '#0F172A', fontSize: '13px' }}>292.4 cc (Single)</span>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="p-2 p-sm-3 rounded h-100" style={{ background: '#F8FAFC', border: '1px solid #CBD5E1' }}>
                <span className="small text-muted d-block text-truncate" style={{ fontSize: '11px' }}>Bore x Stroke</span>
                <span className="fw-bold d-block text-truncate" style={{ color: '#0F172A', fontSize: '13px' }}>78.0 x 61.2 mm</span>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="p-2 p-sm-3 rounded h-100" style={{ background: '#F8FAFC', border: '1px solid #CBD5E1' }}>
                <span className="small text-muted d-block text-truncate" style={{ fontSize: '11px' }}>Compression</span>
                <span className="fw-bold d-block text-truncate" style={{ color: '#0F172A', fontSize: '13px' }}>11.0:1 Dynamic</span>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="p-2 p-sm-3 rounded h-100" style={{ background: '#F8FAFC', border: '1px solid #CBD5E1' }}>
                <span className="small text-muted d-block text-truncate" style={{ fontSize: '11px' }}>Peak Power</span>
                <span className="fw-bold text-danger d-block text-truncate" style={{ fontSize: '13px' }}>27.5 HP @ 8,500</span>
              </div>
            </div>
          </>
        ) : activeTab === 'transmission' ? (
          <>
            <div className="col-6 col-md-3">
              <div className="p-2 p-sm-3 rounded h-100" style={{ background: '#F8FAFC', border: '1px solid #CBD5E1' }}>
                <span className="small text-muted d-block text-truncate" style={{ fontSize: '11px' }}>Gearbox Type</span>
                <span className="fw-bold d-block text-truncate" style={{ color: '#0F172A', fontSize: '13px' }}>6-Speed Sequential</span>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="p-2 p-sm-3 rounded h-100" style={{ background: '#F8FAFC', border: '1px solid #CBD5E1' }}>
                <span className="small text-muted d-block text-truncate" style={{ fontSize: '11px' }}>Clutch Mechanism</span>
                <span className="fw-bold d-block text-truncate" style={{ color: '#0F172A', fontSize: '13px' }}>Multi-Plate Slipper</span>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="p-2 p-sm-3 rounded h-100" style={{ background: '#F8FAFC', border: '1px solid #CBD5E1' }}>
                <span className="small text-muted d-block text-truncate" style={{ fontSize: '11px' }}>Differential</span>
                <span className="fw-bold d-block text-truncate" style={{ color: '#0F172A', fontSize: '13px' }}>Torsen ATB / Bevel</span>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="p-2 p-sm-3 rounded h-100" style={{ background: '#F8FAFC', border: '1px solid #CBD5E1' }}>
                <span className="small text-muted d-block text-truncate" style={{ fontSize: '11px' }}>Final Drive</span>
                <span className="fw-bold text-danger d-block text-truncate" style={{ fontSize: '13px' }}>3.28:1 (14T / 46T)</span>
              </div>
            </div>
          </>
        ) : activeTab === 'differential' ? (
          <>
            <div className="col-6 col-md-3">
              <div className="p-2 p-sm-3 rounded h-100" style={{ background: '#F8FAFC', border: '1px solid #CBD5E1' }}>
                <span className="small text-muted d-block text-truncate" style={{ fontSize: '11px' }}>Gear Topology</span>
                <span className="fw-bold d-block text-truncate" style={{ color: '#0F172A', fontSize: '13px' }}>Epicyclic Bevel Planet</span>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="p-2 p-sm-3 rounded h-100" style={{ background: '#F8FAFC', border: '1px solid #CBD5E1' }}>
                <span className="small text-muted d-block text-truncate" style={{ fontSize: '11px' }}>Crown / Pinion</span>
                <span className="fw-bold d-block text-truncate" style={{ color: '#0F172A', fontSize: '13px' }}>Spiral Bevel Mesh</span>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="p-2 p-sm-3 rounded h-100" style={{ background: '#F8FAFC', border: '1px solid #CBD5E1' }}>
                <span className="small text-muted d-block text-truncate" style={{ fontSize: '11px' }}>Torque Bias</span>
                <span className="fw-bold d-block text-truncate" style={{ color: '#0F172A', fontSize: '13px' }}>50:50 Open Split</span>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="p-2 p-sm-3 rounded h-100" style={{ background: '#F8FAFC', border: '1px solid #CBD5E1' }}>
                <span className="small text-muted d-block text-truncate" style={{ fontSize: '11px' }}>Kinematics</span>
                <span className="fw-bold text-danger d-block text-truncate" style={{ fontSize: '13px' }}>Cornering Speed Diff</span>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="col-6 col-md-3">
              <div className="p-2 p-sm-3 rounded h-100" style={{ background: '#F8FAFC', border: '1px solid #CBD5E1' }}>
                <span className="small text-muted d-block text-truncate" style={{ fontSize: '11px' }}>Total Package Mass</span>
                <span className="fw-bold d-block text-truncate" style={{ color: '#0F172A', fontSize: '13px' }}>38.2 kg Dry</span>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="p-2 p-sm-3 rounded h-100" style={{ background: '#F8FAFC', border: '1px solid #CBD5E1' }}>
                <span className="small text-muted d-block text-truncate" style={{ fontSize: '11px' }}>Drivetrain Layout</span>
                <span className="fw-bold d-block text-truncate" style={{ color: '#0F172A', fontSize: '13px' }}>Mid-Engine RWD</span>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="p-2 p-sm-3 rounded h-100" style={{ background: '#F8FAFC', border: '1px solid #CBD5E1' }}>
                <span className="small text-muted d-block text-truncate" style={{ fontSize: '11px' }}>Top Speed Target</span>
                <span className="fw-bold d-block text-truncate" style={{ color: '#0F172A', fontSize: '13px' }}>128 km/h</span>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="p-2 p-sm-3 rounded h-100" style={{ background: '#F8FAFC', border: '1px solid #CBD5E1' }}>
                <span className="small text-muted d-block text-truncate" style={{ fontSize: '11px' }}>Lubricant</span>
                <span className="fw-bold text-danger d-block text-truncate" style={{ fontSize: '13px' }}>Motul 300V 10W-50</span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
