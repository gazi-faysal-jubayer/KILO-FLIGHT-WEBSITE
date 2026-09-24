'use client';

import React, { useState } from 'react';

type CadTab = 'engine' | 'transmission' | 'both';

export default function Powertrain3DModelsViewer() {
  const [activeTab, setActiveTab] = useState<CadTab>('engine');

  return (
    <div
      className="p-4 p-md-5 rounded mb-4"
      style={{
        background: '#FFFFFF',
        border: '2px solid #0F172A',
        boxShadow: '4px 4px 0 #0284C7',
      }}
    >
      {/* Header and Model Switcher Tabs */}
      <div className="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-4">
        <div>
          <span className="badge-motorsport red mb-1">1.2 Core Power &amp; Drivetrain 3D Models</span>
          <h4 className="font-orbitron mb-0" style={{ color: '#0F172A', fontWeight: 900 }}>
            {activeTab === 'engine'
              ? 'CFMOTO 300CC SINGLE-CYLINDER DOHC ENGINE'
              : activeTab === 'transmission'
              ? 'MANUAL TRANSMISSION GEARBOX & DIFFERENTIAL'
              : 'DUAL INSPECTION: ENGINE & TRANSMISSION CAD'}
          </h4>
        </div>

        {/* Tab Buttons */}
        <div
          className="d-inline-flex p-1 rounded gap-1 flex-wrap"
          style={{ background: '#0F172A', border: '1.5px solid #0F172A' }}
        >
          <button
            type="button"
            onClick={() => setActiveTab('engine')}
            className="btn btn-sm d-inline-flex align-items-center gap-2"
            style={{
              background: activeTab === 'engine' ? '#0284C7' : 'transparent',
              color: '#FFFFFF',
              border: activeTab === 'engine' ? '1px solid #38BDF8' : 'none',
              fontWeight: 800,
              fontSize: '12px',
              padding: '8px 14px',
              borderRadius: '6px',
              transition: 'all 0.15s ease',
            }}
          >
            <i className="bi bi-fire"></i>
            <span>Engine Assembly</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('transmission')}
            className="btn btn-sm d-inline-flex align-items-center gap-2"
            style={{
              background: activeTab === 'transmission' ? '#0284C7' : 'transparent',
              color: '#FFFFFF',
              border: activeTab === 'transmission' ? '1px solid #38BDF8' : 'none',
              fontWeight: 800,
              fontSize: '12px',
              padding: '8px 14px',
              borderRadius: '6px',
              transition: 'all 0.15s ease',
            }}
          >
            <i className="bi bi-gear-wide-connected"></i>
            <span>Transmission &amp; Diff</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('both')}
            className="btn btn-sm d-inline-flex align-items-center gap-2"
            style={{
              background: activeTab === 'both' ? '#DC2626' : 'transparent',
              color: '#FFFFFF',
              border: activeTab === 'both' ? '1px solid #F87171' : 'none',
              fontWeight: 800,
              fontSize: '12px',
              padding: '8px 14px',
              borderRadius: '6px',
              transition: 'all 0.15s ease',
            }}
          >
            <i className="bi bi-columns-gap"></i>
            <span>Dual View</span>
          </button>
        </div>
      </div>

      <p className="small text-muted mb-3" style={{ lineHeight: '1.6' }}>
        {activeTab === 'engine'
          ? 'Inspect the high-revving 292.4cc single-cylinder DOHC power unit in 3D. Click and drag to orbit, scroll to zoom, and examine the cylinder block, cylinder head casting, intake port geometry, and valvetrain assembly.'
          : activeTab === 'transmission'
          ? 'Inspect the constant-mesh manual transmission and bevel gear differential in 3D. Explore the internal gear clusters, synchronizer rings, selector forks, countershaft, and final drive torque splitting.'
          : 'Dual inspection mode: View both the CFMoto 300cc engine assembly and the manual transmission gearbox with differential simultaneously side-by-side.'}
      </p>

      {/* 3D Embed Viewports */}
      <div className="row g-4">
        {/* Model 1: Engine */}
        {(activeTab === 'engine' || activeTab === 'both') && (
          <div className={activeTab === 'both' ? 'col-lg-6 col-12' : 'col-12'}>
            {activeTab === 'both' && (
              <div
                className="p-2 px-3 rounded mb-2 d-flex align-items-center justify-content-between"
                style={{ background: '#0F172A', color: '#FFFFFF', fontSize: '12px', fontWeight: 800 }}
              >
                <span>
                  <i className="bi bi-fire text-danger me-2"></i> CFMOTO 300cc DOHC Engine
                </span>
                <span className="badge" style={{ background: '#0284C7' }}>292.4cc</span>
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
              <div className="position-relative" style={{ width: '100%', height: activeTab === 'both' ? '430px' : '500px' }}>
                <iframe
                  title="Engine"
                  src="https://sketchfab.com/models/eea9d9252ab14298b50699a471dc2cee/embed?ui_theme=dark"
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
                  CFMoto 300cc ICE Unit
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Model 2: Transmission */}
        {(activeTab === 'transmission' || activeTab === 'both') && (
          <div className={activeTab === 'both' ? 'col-lg-6 col-12' : 'col-12'}>
            {activeTab === 'both' && (
              <div
                className="p-2 px-3 rounded mb-2 d-flex align-items-center justify-content-between"
                style={{ background: '#0F172A', color: '#FFFFFF', fontSize: '12px', fontWeight: 800 }}
              >
                <span>
                  <i className="bi bi-gear-wide-connected text-info me-2"></i> Manual Transmission &amp; Differential
                </span>
                <span className="badge" style={{ background: '#DC2626' }}>6-Speed Sequential</span>
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
              <div className="position-relative" style={{ width: '100%', height: activeTab === 'both' ? '430px' : '500px' }}>
                <iframe
                  title="Manual Transmission Gearbox With Differential"
                  src="https://sketchfab.com/models/d48d46543d844857b31475e56f941410/embed?preload=1&transparent=1&ui_theme=dark"
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
                  <i className="bi bi-gear me-1 text-danger"></i>
                  <a
                    href="https://sketchfab.com/3d-models/manual-transmission-gearbox-with-differential-d48d46543d844857b31475e56f941410"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    style={{ fontWeight: 'bold', color: '#38BDF8', textDecoration: 'none' }}
                  >
                    Manual Transmission Gearbox With Differential
                  </a>{' '}
                  by{' '}
                  <a
                    href="https://sketchfab.com/avredu"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    style={{ fontWeight: 'bold', color: '#38BDF8', textDecoration: 'none' }}
                  >
                    avredu
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
                  Constant-Mesh Driveline CAD
                </span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Model Spec Pills under Viewer */}
      <div className="row g-3 mt-3">
        {activeTab === 'engine' ? (
          <>
            <div className="col-md-3 col-6">
              <div className="p-2 px-3 rounded" style={{ background: '#F8FAFC', border: '1px solid #CBD5E1' }}>
                <span className="small text-muted d-block" style={{ fontSize: '11px' }}>Displacement</span>
                <span className="fw-bold" style={{ color: '#0F172A', fontSize: '13px' }}>292.4 cc (Single)</span>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="p-2 px-3 rounded" style={{ background: '#F8FAFC', border: '1px solid #CBD5E1' }}>
                <span className="small text-muted d-block" style={{ fontSize: '11px' }}>Bore x Stroke</span>
                <span className="fw-bold" style={{ color: '#0F172A', fontSize: '13px' }}>78.0 x 61.2 mm</span>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="p-2 px-3 rounded" style={{ background: '#F8FAFC', border: '1px solid #CBD5E1' }}>
                <span className="small text-muted d-block" style={{ fontSize: '11px' }}>Compression Ratio</span>
                <span className="fw-bold" style={{ color: '#0F172A', fontSize: '13px' }}>11.0:1 Dynamic</span>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="p-2 px-3 rounded" style={{ background: '#F8FAFC', border: '1px solid #CBD5E1' }}>
                <span className="small text-muted d-block" style={{ fontSize: '11px' }}>Peak Power / Torque</span>
                <span className="fw-bold text-danger" style={{ fontSize: '13px' }}>27.5 HP @ 8,500 RPM</span>
              </div>
            </div>
          </>
        ) : activeTab === 'transmission' ? (
          <>
            <div className="col-md-3 col-6">
              <div className="p-2 px-3 rounded" style={{ background: '#F8FAFC', border: '1px solid #CBD5E1' }}>
                <span className="small text-muted d-block" style={{ fontSize: '11px' }}>Gearbox Type</span>
                <span className="fw-bold" style={{ color: '#0F172A', fontSize: '13px' }}>6-Speed Sequential Constant Mesh</span>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="p-2 px-3 rounded" style={{ background: '#F8FAFC', border: '1px solid #CBD5E1' }}>
                <span className="small text-muted d-block" style={{ fontSize: '11px' }}>Clutch Mechanism</span>
                <span className="fw-bold" style={{ color: '#0F172A', fontSize: '13px' }}>Wet Multi-Plate Slipper Clutch</span>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="p-2 px-3 rounded" style={{ background: '#F8FAFC', border: '1px solid #CBD5E1' }}>
                <span className="small text-muted d-block" style={{ fontSize: '11px' }}>Differential</span>
                <span className="fw-bold" style={{ color: '#0F172A', fontSize: '13px' }}>Torsen ATB / Bevel Differential</span>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="p-2 px-3 rounded" style={{ background: '#F8FAFC', border: '1px solid #CBD5E1' }}>
                <span className="small text-muted d-block" style={{ fontSize: '11px' }}>Final Drive Ratio</span>
                <span className="fw-bold text-danger" style={{ fontSize: '13px' }}>3.28:1 (14T / 46T 520 Chain)</span>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="col-md-3 col-6">
              <div className="p-2 px-3 rounded" style={{ background: '#F8FAFC', border: '1px solid #CBD5E1' }}>
                <span className="small text-muted d-block" style={{ fontSize: '11px' }}>Total Powertrain Mass</span>
                <span className="fw-bold" style={{ color: '#0F172A', fontSize: '13px' }}>38.2 kg Dry Package</span>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="p-2 px-3 rounded" style={{ background: '#F8FAFC', border: '1px solid #CBD5E1' }}>
                <span className="small text-muted d-block" style={{ fontSize: '11px' }}>Torque Split</span>
                <span className="fw-bold" style={{ color: '#0F172A', fontSize: '13px' }}>50:50 Locked Dynamic Bias</span>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="p-2 px-3 rounded" style={{ background: '#F8FAFC', border: '1px solid #CBD5E1' }}>
                <span className="small text-muted d-block" style={{ fontSize: '11px' }}>Top Speed Target</span>
                <span className="fw-bold" style={{ color: '#0F172A', fontSize: '13px' }}>128 km/h (FSAE Sprints)</span>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="p-2 px-3 rounded" style={{ background: '#F8FAFC', border: '1px solid #CBD5E1' }}>
                <span className="small text-muted d-block" style={{ fontSize: '11px' }}>Oil Capacity &amp; Grade</span>
                <span className="fw-bold text-danger" style={{ fontSize: '13px' }}>1.4 L Motul 300V 10W-50</span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
