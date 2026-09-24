'use client';

import React, { useState } from 'react';

export default function Powertrain3DModelsViewer() {
  const [activeModel, setActiveModel] = useState<'engine' | 'transmission' | 'both'>('engine');

  return (
    <div
      className="p-4 rounded mb-5"
      style={{
        background: '#FFFFFF',
        border: '2px solid #0F172A',
        boxShadow: '4px 4px 0 #0284C7',
      }}
    >
      {/* Section Header */}
      <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
        <div>
          <span className="badge-motorsport red mb-1">1.2 Interactive 3D CAD Inspection</span>
          <h4 className="font-orbitron mb-0" style={{ color: '#0F172A', fontWeight: 800 }}>
            CFMOTO 300CC ENGINE &amp; TRANSMISSION GEARBOX 3D MODELS
          </h4>
        </div>
        <span
          className="badge"
          style={{ background: '#F0F9FF', color: '#0284C7', border: '1.5px solid #0284C7', fontWeight: 700 }}
        >
          Interactive 360° Inspection
        </span>
      </div>

      <p className="small text-muted mb-3" style={{ lineHeight: '1.6' }}>
        Inspect the internal combustion engine assembly and the sequential transmission &amp; differential gearbox below.
        Use your mouse or touch to orbit in 360°, scroll to zoom, and switch between models:
      </p>

      {/* Model Selector Tabs */}
      <div className="d-flex gap-2 flex-wrap mb-4">
        <button
          type="button"
          onClick={() => setActiveModel('engine')}
          className="btn btn-sm d-inline-flex align-items-center gap-2"
          style={{
            background: activeModel === 'engine' ? '#0284C7' : '#F8FAFC',
            color: activeModel === 'engine' ? '#FFFFFF' : '#0F172A',
            border: '1.5px solid #0F172A',
            boxShadow: activeModel === 'engine' ? '2px 2px 0 #0F172A' : 'none',
            fontWeight: 800,
            fontSize: '12px',
            padding: '8px 16px',
            borderRadius: '6px',
          }}
        >
          <i className="bi bi-cpu-fill"></i>
          <span>1. CFMoto 300cc Engine CAD</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveModel('transmission')}
          className="btn btn-sm d-inline-flex align-items-center gap-2"
          style={{
            background: activeModel === 'transmission' ? '#0284C7' : '#F8FAFC',
            color: activeModel === 'transmission' ? '#FFFFFF' : '#0F172A',
            border: '1.5px solid #0F172A',
            boxShadow: activeModel === 'transmission' ? '2px 2px 0 #0F172A' : 'none',
            fontWeight: 800,
            fontSize: '12px',
            padding: '8px 16px',
            borderRadius: '6px',
          }}
        >
          <i className="bi bi-gear-wide-connected"></i>
          <span>2. Transmission &amp; Differential CAD</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveModel('both')}
          className="btn btn-sm d-inline-flex align-items-center gap-2"
          style={{
            background: activeModel === 'both' ? '#0F172A' : '#F8FAFC',
            color: activeModel === 'both' ? '#FFFFFF' : '#0F172A',
            border: '1.5px solid #0F172A',
            boxShadow: activeModel === 'both' ? '2px 2px 0 #0284C7' : 'none',
            fontWeight: 800,
            fontSize: '12px',
            padding: '8px 16px',
            borderRadius: '6px',
          }}
        >
          <i className="bi bi-columns-gap"></i>
          <span>Dual View (Both Models)</span>
        </button>
      </div>

      {/* Model Containers */}
      <div className="row g-4">
        {/* Model 1: CFMoto 300cc Engine */}
        {(activeModel === 'engine' || activeModel === 'both') && (
          <div className={activeModel === 'both' ? 'col-lg-6 col-12' : 'col-12'}>
            <div
              className="p-2 rounded mb-2 d-flex align-items-center justify-content-between flex-wrap gap-2"
              style={{ background: '#F8FAFC', border: '1px solid #CBD5E1', fontSize: '12px', fontWeight: 700 }}
            >
              <span>
                <i className="bi bi-cpu-fill text-danger me-2"></i>
                CFMOTO 300cc Single-Cylinder DOHC 4-Valve Engine
              </span>
              <span className="badge bg-secondary">292.4cc • 21.4 kW @ 8,750 RPM</span>
            </div>
            <div
              className="sketchfab-embed-wrapper rounded overflow-hidden"
              style={{
                border: '2px solid #0F172A',
                boxShadow: '3px 3px 0 #0F172A',
                background: '#0F172A',
              }}
            >
              <div className="position-relative" style={{ width: '100%', height: activeModel === 'both' ? '420px' : '480px' }}>
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
                  Engine CAD Assembly
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Model 2: Manual Transmission Gearbox With Differential */}
        {(activeModel === 'transmission' || activeModel === 'both') && (
          <div className={activeModel === 'both' ? 'col-lg-6 col-12' : 'col-12'}>
            <div
              className="p-2 rounded mb-2 d-flex align-items-center justify-content-between flex-wrap gap-2"
              style={{ background: '#F8FAFC', border: '1px solid #CBD5E1', fontSize: '12px', fontWeight: 700 }}
            >
              <span>
                <i className="bi bi-gear-wide-connected text-primary me-2"></i>
                Manual Transmission Gearbox With Differential Assembly
              </span>
              <span className="badge bg-secondary">6-Speed Sequential • Drexler FSAE LSD</span>
            </div>
            <div
              className="sketchfab-embed-wrapper rounded overflow-hidden"
              style={{
                border: '2px solid #0F172A',
                boxShadow: '3px 3px 0 #0F172A',
                background: '#0F172A',
              }}
            >
              <div className="position-relative" style={{ width: '100%', height: activeModel === 'both' ? '420px' : '480px' }}>
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

              <div
                className="d-flex align-items-center justify-content-between p-2 px-3 flex-wrap gap-2"
                style={{ background: '#0F172A', borderTop: '1px solid #1E293B', fontSize: '12px', color: '#94A3B8' }}
              >
                <span>
                  <i className="bi bi-gear me-1 text-info"></i>
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
                <span className="badge" style={{ background: '#1E293B', color: '#38BDF8' }}>
                  Driveline CAD Model
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
