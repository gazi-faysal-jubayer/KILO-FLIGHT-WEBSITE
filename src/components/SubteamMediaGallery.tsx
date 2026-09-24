'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface TechnicalFigure {
  id: string;
  title: string;
  figureNumber: string;
  caption: string;
  src: string;
  category: string;
  callouts?: string[];
}

const POWERTRAIN_FIGURES: TechnicalFigure[] = [
  {
    id: 'fig-1',
    figureNumber: 'FIGURE 1.0',
    title: 'CFMoto 300SR Driveline & Subframe Spatial Envelope CAD',
    caption: 'Official 3D CAD isometric projection showing the 292cc single-cylinder engine package, custom 6061-T6 aluminum mounting cradle, tuned 304 stainless exhaust header, and 520 chain drive packaging within the lower spaceframe rails.',
    src: '/images/powertrain_cad_blueprint.jpg',
    category: 'Assembly Blueprint',
    callouts: [
      'Al-6061-T6 Mounting Cradle Assembly (M8 x 1.25 Hardpoints)',
      'Single-Cylinder 292cc DOHC Engine Package (12° Inclination)',
      '520 O-Ring Chain & 13T/48T Sprocket Centerline',
      'Tuned SUS304 Exhaust Header & Acoustic Expansion Chamber',
    ],
  },
  {
    id: 'fig-2',
    figureNumber: 'FIGURE 2.0',
    title: 'Custom Al 5052 Baffled Fuel Tank Cutaway Schematic',
    caption: 'Detailed cross-sectional blueprint of the 4.8L aluminum baffled fuel cell. Illustrates internal vertical anti-slosh baffles with one-way flapper valves, submerged Bosch EFI high-pressure pump module, external transparent sight tube, and rollover check valve.',
    src: '/images/fuel_tank_baffle_schematic.jpg',
    category: 'Fluid Schematic',
    callouts: [
      'Multi-Stage Internal Anti-Slosh Baffles with One-Way Check Valves',
      'Submerged Bosch High-Pressure Fuel Pump Module (3.0 bar)',
      'Side-Mounted Transparent Fuel Level Sight Tube with Guard',
      '35 mm Vertical Filler Neck & Top Rollover Breather Valve',
    ],
  },
  {
    id: 'fig-3',
    figureNumber: 'FIGURE 3.0',
    title: 'KUET Formula Student Engine Workshop & Fabrication Rig',
    caption: 'Mechanical Powertrain team members performing precision tolerance checks, TIG weld inspection on mounting plates, and countershaft chain alignment in the engineering workshop.',
    src: '/images/formula_workshop.jpg',
    category: 'Workshop Fabrication',
    callouts: [
      'Precision Dial-Indicator Countershaft Sprocket Alignment',
      'TIG Welded 6061-T6 Aluminum Engine Cradle Plates',
      'High-Pressure Fuel Line Pressure Proof-Testing (5.0 bar)',
    ],
  },
  {
    id: 'fig-4',
    figureNumber: 'FIGURE 4.0',
    title: 'Dynamic Track Acceleration & Driveline Shakedown',
    caption: 'Dynamic testing of the CFMoto 300cc powertrain on track. Evaluating launch control traction, sequential shifting crispness, and coolant temperature dissipation under 100% full throttle duty cycles.',
    src: '/images/formula_track_action.jpg',
    category: 'Track Validation',
    callouts: [
      '0–100 km/h Launch Tractive Effort Logging',
      'Sequential 6-Speed Shifting Delay Evaluation (< 120 ms)',
      'Endurance Thermal Dissipation Heat Run (95°C Peak Coolant)',
    ],
  },
];

export default function SubteamMediaGallery() {
  const [selectedFigure, setSelectedFigure] = useState<TechnicalFigure>(POWERTRAIN_FIGURES[0]);
  const [lightboxImage, setLightboxImage] = useState<TechnicalFigure | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(true);

  return (
    <div className="mb-5">
      {/* Section Header */}
      <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-4">
        <div>
          <span className="badge-motorsport red mb-1">Visual Engineering Documentation</span>
          <h3 className="font-orbitron mb-0" style={{ color: '#0F172A', fontWeight: 800 }}>
            TECHNICAL BLUEPRINTS, SCHEMATICS &amp; TRACK VIDEO
          </h3>
        </div>
        <span
          className="badge"
          style={{
            background: '#F8FAFC',
            color: '#0F172A',
            border: '1.5px solid #0F172A',
            fontWeight: 700,
            fontSize: '11px',
          }}
        >
          CAD Blueprints &amp; Dynamic Testing
        </span>
      </div>

      <div className="row g-4">
        {/* Left Column: Interactive Technical Blueprint Viewer */}
        <div className="col-lg-7 col-12">
          <div
            className="p-3 p-sm-4 rounded h-100 d-flex flex-column"
            style={{
              background: '#FFFFFF',
              border: '2px solid #0F172A',
              boxShadow: '4px 4px 0 #0F172A',
            }}
          >
            {/* Figure Header */}
            <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
              <div className="d-flex align-items-center gap-2">
                <span className="badge-motorsport" style={{ background: '#0F172A', color: '#FFFFFF', fontSize: '11px' }}>
                  {selectedFigure.figureNumber}
                </span>
                <span className="badge" style={{ background: '#F1F5F9', color: '#0284C7', border: '1px solid #BAE6FD', fontSize: '11px', fontWeight: 700 }}>
                  {selectedFigure.category}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setLightboxImage(selectedFigure)}
                className="btn btn-sm d-inline-flex align-items-center gap-1"
                style={{
                  background: '#F8FAFC',
                  color: '#0F172A',
                  border: '1px solid #CBD5E1',
                  fontSize: '11.5px',
                  fontWeight: 700,
                  padding: '4px 10px',
                }}
              >
                <i className="bi bi-arrows-fullscreen text-danger"></i> Expand Fullscreen
              </button>
            </div>

            <h5 className="font-orbitron mb-2" style={{ color: '#0F172A', fontWeight: 800 }}>
              {selectedFigure.title}
            </h5>

            {/* Main Preview Image Container */}
            <div
              className="position-relative rounded overflow-hidden mb-3"
              style={{
                border: '1.5px solid #0F172A',
                aspectRatio: '16/9',
                cursor: 'pointer',
                background: '#0F172A',
              }}
              onClick={() => setLightboxImage(selectedFigure)}
            >
              <Image
                src={selectedFigure.src}
                alt={selectedFigure.title}
                fill
                className="object-fit-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div
                className="position-absolute bottom-0 start-0 end-0 p-2 px-3 text-white small d-flex align-items-center justify-content-between"
                style={{ background: 'rgba(15, 23, 42, 0.85)', backdropFilter: 'blur(4px)' }}
              >
                <span style={{ fontSize: '11.5px' }}>
                  <i className="bi bi-zoom-in me-1 text-danger"></i> Click image to inspect high-resolution blueprint
                </span>
                <span className="font-orbitron fw-bold" style={{ fontSize: '11px', color: '#38BDF8' }}>
                  KILOFLIGHT R&amp;D
                </span>
              </div>
            </div>

            <p className="small text-muted mb-3" style={{ lineHeight: '1.6' }}>
              {selectedFigure.caption}
            </p>

            {/* Callouts list */}
            {selectedFigure.callouts && (
              <div className="mb-4 p-3 rounded" style={{ background: '#F8FAFC', border: '1px solid #E2E8F0' }}>
                <span className="small fw-bold text-uppercase d-block mb-2" style={{ color: '#0F172A', fontSize: '11px', letterSpacing: '0.5px' }}>
                  Key Engineering Callouts:
                </span>
                <div className="row g-2">
                  {selectedFigure.callouts.map((c, cIdx) => (
                    <div key={cIdx} className="col-md-6 col-12">
                      <div className="d-flex align-items-start gap-1 small text-dark" style={{ fontSize: '12px' }}>
                        <i className="bi bi-check-circle-fill text-success mt-1 me-1"></i>
                        <span>{c}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Thumbnail Navigation Selector */}
            <div className="mt-auto pt-3 border-top">
              <span className="small fw-bold text-uppercase d-block mb-2" style={{ color: '#64748B', fontSize: '11px' }}>
                Select Figure or Schematic:
              </span>
              <div className="row g-2">
                {POWERTRAIN_FIGURES.map((fig) => {
                  const isCur = selectedFigure.id === fig.id;
                  return (
                    <div key={fig.id} className="col-3">
                      <button
                        type="button"
                        onClick={() => setSelectedFigure(fig)}
                        className="w-100 p-1 rounded text-start position-relative overflow-hidden"
                        style={{
                          border: isCur ? '2px solid #FF2A2A' : '1.5px solid #CBD5E1',
                          boxShadow: isCur ? '2px 2px 0 #FF2A2A' : 'none',
                          background: isCur ? '#FEF2F2' : '#FFFFFF',
                          cursor: 'pointer',
                          transition: 'all 0.15s ease',
                        }}
                      >
                        <div className="position-relative" style={{ aspectRatio: '16/9', borderRadius: '4px', overflow: 'hidden' }}>
                          <Image src={fig.src} alt={fig.title} fill className="object-fit-cover" />
                        </div>
                        <div
                          className="text-truncate fw-bold pt-1"
                          style={{ fontSize: '10px', color: isCur ? '#FF2A2A' : '#0F172A' }}
                        >
                          {fig.figureNumber}
                        </div>
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Embedded Dynamic Video & Workshop Testing */}
        <div className="col-lg-5 col-12">
          <div
            className="p-3 p-sm-4 rounded h-100 d-flex flex-column"
            style={{
              background: '#0F172A',
              color: '#FFFFFF',
              border: '2px solid #0F172A',
              boxShadow: '4px 4px 0 #FF2A2A',
            }}
          >
            <div className="d-flex align-items-center justify-content-between mb-3">
              <span className="badge-motorsport red" style={{ fontSize: '11px' }}>
                DYNAMIC TEST FOOTAGE
              </span>
              <span className="small text-muted" style={{ fontSize: '11px' }}>
                Formula Student Track Action
              </span>
            </div>

            <h5 className="font-orbitron mb-2" style={{ color: '#FFFFFF', fontWeight: 800 }}>
              On-Track Powertrain Shakedown &amp; Dyno Telemetry
            </h5>

            <p className="small mb-3" style={{ color: '#94A3B8', lineHeight: '1.6' }}>
              Watch Team KILOFLIGHT conduct high-speed acceleration runs, sequential gear shifts, and thermal dissipation validation under maximum full-throttle loads.
            </p>

            {/* Video Player Container */}
            <div
              className="position-relative rounded overflow-hidden mb-3"
              style={{
                border: '1.5px solid #334155',
                aspectRatio: '16/9',
                background: '#000000',
              }}
            >
              <video
                src="/video/Trailer_2.mp4"
                controls
                playsInline
                preload="metadata"
                className="w-100 h-100 object-fit-cover"
                style={{ display: 'block' }}
              />
            </div>

            {/* Telemetry Indicator Readout */}
            <div
              className="p-3 rounded mb-3"
              style={{ background: '#1E293B', border: '1px solid #334155' }}
            >
              <div className="small fw-bold text-uppercase mb-2 text-info" style={{ fontSize: '11px', letterSpacing: '0.5px' }}>
                <i className="bi bi-activity me-1"></i> Live Dyno Sensor Highlights:
              </div>
              <div className="row g-2 text-center font-orbitron" style={{ fontSize: '13px' }}>
                <div className="col-4">
                  <div className="p-2 rounded" style={{ background: '#0F172A' }}>
                    <span className="small d-block text-muted" style={{ fontSize: '10px' }}>REDLINE</span>
                    <span className="text-danger fw-bold">9,500</span>
                    <span className="small text-muted d-block" style={{ fontSize: '9px' }}>RPM</span>
                  </div>
                </div>
                <div className="col-4">
                  <div className="p-2 rounded" style={{ background: '#0F172A' }}>
                    <span className="small d-block text-muted" style={{ fontSize: '10px' }}>SHIFT DELAY</span>
                    <span className="text-warning fw-bold">&lt; 120</span>
                    <span className="small text-muted d-block" style={{ fontSize: '9px' }}>ms</span>
                  </div>
                </div>
                <div className="col-4">
                  <div className="p-2 rounded" style={{ background: '#0F172A' }}>
                    <span className="small d-block text-muted" style={{ fontSize: '10px' }}>COOLANT PEAK</span>
                    <span className="text-success fw-bold">95°C</span>
                    <span className="small text-muted d-block" style={{ fontSize: '9px' }}>Normal</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Secondary Workshop Clip */}
            <div className="mt-auto pt-3 border-top" style={{ borderColor: '#334155' }}>
              <div className="d-flex align-items-center justify-content-between mb-2">
                <span className="small fw-bold" style={{ color: '#E2E8F0', fontSize: '12px' }}>
                  Fabrication &amp; Engine Assembly Clip:
                </span>
                <span className="badge" style={{ background: '#1E293B', color: '#38BDF8', fontSize: '10px' }}>
                  1080p HD
                </span>
              </div>
              <div className="position-relative rounded overflow-hidden" style={{ aspectRatio: '21/9', border: '1px solid #334155' }}>
                <video
                  src="/video/0714.mp4"
                  controls
                  playsInline
                  preload="metadata"
                  className="w-100 h-100 object-fit-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          className="position-fixed top-0 start-0 end-0 bottom-0 d-flex align-items-center justify-content-center p-3 p-md-5"
          style={{
            background: 'rgba(15, 23, 42, 0.95)',
            zIndex: 1050,
            backdropFilter: 'blur(8px)',
          }}
          onClick={() => setLightboxImage(null)}
        >
          <div
            className="position-relative rounded overflow-hidden"
            style={{
              maxWidth: '1200px',
              width: '100%',
              background: '#0F172A',
              border: '2px solid #38BDF8',
              boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="d-flex align-items-center justify-content-between p-3 border-bottom" style={{ borderColor: '#334155' }}>
              <div>
                <span className="badge-motorsport red mb-1" style={{ fontSize: '10px' }}>
                  {lightboxImage.figureNumber}
                </span>
                <h5 className="font-orbitron mb-0 text-white" style={{ fontWeight: 800 }}>
                  {lightboxImage.title}
                </h5>
              </div>
              <button
                type="button"
                onClick={() => setLightboxImage(null)}
                className="btn-close btn-close-white"
                aria-label="Close"
              ></button>
            </div>

            <div className="position-relative" style={{ aspectRatio: '16/9', width: '100%', maxHeight: '70vh' }}>
              <Image
                src={lightboxImage.src}
                alt={lightboxImage.title}
                fill
                className="object-fit-contain"
                sizes="100vw"
              />
            </div>

            <div className="p-3 bg-dark text-white border-top" style={{ borderColor: '#334155' }}>
              <p className="small mb-0 text-muted" style={{ color: '#CBD5E1' }}>
                {lightboxImage.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
