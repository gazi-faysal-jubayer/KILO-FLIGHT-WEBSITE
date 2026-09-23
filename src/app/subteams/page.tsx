import React from 'react';
import Link from 'next/link';
import { SUBTEAMS_DATA } from '@/lib/subteams-data';

export const metadata = {
  title: 'Sub-Teams & Technical Workflows | Team KILOFLIGHT KUET Formula Student',
  description:
    'Overview and dedicated workflows for all 6 engineering and business divisions powering KILOFLIGHT PHOENIX at Khulna University of Engineering & Technology.',
};

export default function SubteamsPage() {
  return (
    <>
      {/* Header Hero Section */}
      <section
        className="page-header-section py-5"
        style={{
          background: 'radial-gradient(circle at top, rgba(255, 42, 42, 0.08) 0%, var(--dark-bg) 100%)',
          borderBottom: '2px solid #0F172A',
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <span className="badge-motorsport red mb-2">Technical Divisions &amp; R&amp;D Architecture</span>
          <h1 className="mb-3 font-orbitron" style={{ color: '#0F172A', fontWeight: 900, fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}>
            SUB-TEAMS &amp; WORKFLOW OVERVIEW
          </h1>
          <p className="text-muted max-w-700 mx-auto mb-4" style={{ maxWidth: '820px', fontSize: '16px', lineHeight: '1.7' }}>
            Explore the 6 specialized engineering and business divisions powering Team KILOFLIGHT at Khulna University of Engineering &amp; Technology (KUET). Click any division to view its dedicated architecture, technical blueprints, and step-by-step development roadmap.
          </p>

          {/* Quick Division Selector Pills */}
          <div className="d-flex justify-content-center gap-2 flex-wrap pt-2">
            {SUBTEAMS_DATA.map((sub) => (
              <Link
                key={sub.id}
                href={`/subteams/${sub.slug}`}
                className="btn btn-sm d-inline-flex align-items-center gap-2"
                style={{
                  background: '#FFFFFF',
                  color: '#0F172A',
                  border: '1.5px solid #0F172A',
                  boxShadow: `2px 2px 0 ${sub.accentColor}`,
                  fontWeight: 700,
                  fontSize: '12.5px',
                  padding: '7px 15px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                }}
              >
                <i className={`bi ${sub.icon}`} style={{ color: sub.accentColor }}></i>
                <span>{sub.shortTitle}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Division Callout: Mechanical Powertrain */}
      <section className="py-4" style={{ background: '#F1F5F9', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container mx-auto px-4">
          <div
            className="p-4 rounded d-flex align-items-center justify-content-between flex-wrap gap-3"
            style={{
              background: '#0F172A',
              color: '#FFFFFF',
              border: '2px solid #0F172A',
              boxShadow: '4px 4px 0 #0284C7',
            }}
          >
            <div className="d-flex align-items-center gap-3">
              <div
                className="d-inline-flex align-items-center justify-content-center rounded-circle"
                style={{
                  width: '50px',
                  height: '50px',
                  background: 'rgba(2, 132, 199, 0.2)',
                  color: '#38BDF8',
                  border: '1.5px solid #0284C7',
                  fontSize: '22px',
                }}
              >
                <i className="bi bi-lightning-charge-fill"></i>
              </div>
              <div>
                <div className="d-flex align-items-center gap-2">
                  <span className="badge-motorsport red" style={{ fontSize: '10px' }}>FEATURED DIVISION</span>
                  <span className="small fw-bold" style={{ color: '#94A3B8' }}>CFMOTO 300CC SINGLE-CYLINDER DOHC</span>
                </div>
                <h4 className="font-orbitron mb-0" style={{ color: '#FFFFFF', fontWeight: 800 }}>
                  Mechanical Powertrain Blueprint &amp; Live Driveline Solver
                </h4>
              </div>
            </div>

            <Link
              href="/subteams/powertrain"
              className="btn btn-sm d-inline-flex align-items-center gap-2"
              style={{
                background: '#0284C7',
                color: '#FFFFFF',
                border: '1.5px solid #FFFFFF',
                boxShadow: '2px 2px 0 #FFFFFF',
                fontWeight: 800,
                fontSize: '13px',
                padding: '10px 20px',
                textDecoration: 'none',
              }}
            >
              <span>Explore Dedicated Powertrain Page</span>
              <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Subteam Deep Dives Grid */}
      <section className="section-padding py-5">
        <div className="container mx-auto px-4">
          <div className="row g-5">
            {SUBTEAMS_DATA.map((sub, idx) => (
              <div key={sub.id} className="col-12" id={sub.id}>
                <div
                  className="glass-panel p-4 p-lg-5"
                  style={{
                    border: '2px solid #0F172A',
                    boxShadow: `5px 5px 0 ${sub.accentColor}`,
                    background: '#FFFFFF',
                  }}
                >
                  {/* Division Header */}
                  <div className="d-flex align-items-start justify-content-between flex-wrap gap-3 mb-4">
                    <div className="d-flex align-items-center gap-3">
                      <div
                        className="dept-icon mb-0 d-inline-flex align-items-center justify-content-center"
                        style={{
                          color: sub.accentColor,
                          border: `2px solid ${sub.accentColor}`,
                          background: '#F8FAFC',
                          width: '56px',
                          height: '56px',
                          fontSize: '24px',
                          borderRadius: '12px',
                        }}
                      >
                        <i className={`bi ${sub.icon}`}></i>
                      </div>
                      <div>
                        <span className="badge-motorsport mb-1" style={{ fontSize: '11px' }}>
                          Division {sub.divisionNumber}
                        </span>
                        <h3 className="mb-0 font-orbitron" style={{ color: '#0F172A', fontWeight: 800 }}>
                          {sub.title}
                        </h3>
                      </div>
                    </div>

                    <div className="d-flex align-items-center gap-2 flex-wrap">
                      <span
                        className="badge-motorsport"
                        style={{ background: '#F8FAFC', color: '#0F172A', border: '1.5px solid #0F172A' }}
                      >
                        {sub.badge}
                      </span>
                      <Link
                        href={`/subteams/${sub.slug}`}
                        className="btn btn-sm d-inline-flex align-items-center gap-1"
                        style={{
                          background: '#0F172A',
                          color: '#FFFFFF',
                          border: '1.5px solid #0F172A',
                          boxShadow: '2px 2px 0 #FF2A2A',
                          fontWeight: 700,
                          fontSize: '12px',
                          padding: '6px 14px',
                          textDecoration: 'none',
                        }}
                      >
                        <span>Dedicated Page</span>
                        <i className="bi bi-box-arrow-up-right"></i>
                      </Link>
                    </div>
                  </div>

                  {/* Tagline & Mission */}
                  <div className="p-3 rounded mb-4" style={{ background: '#F8FAFC', border: '1px solid #E2E8F0' }}>
                    <div className="small fw-bold text-uppercase mb-1" style={{ color: sub.accentColor, letterSpacing: '0.5px' }}>
                      {sub.coverTagline}
                    </div>
                    <p className="small mb-0" style={{ color: '#334155', lineHeight: '1.7' }}>
                      {sub.scopeAndMission}
                    </p>
                  </div>

                  {/* Subsystems Highlights */}
                  <div className="mb-4">
                    <h6 className="font-orbitron mb-3" style={{ color: '#0F172A', fontSize: '14px' }}>
                      <i className="bi bi-layers-fill me-2 text-danger"></i> Core Architectural Subsystems
                    </h6>
                    <div className="row g-3">
                      {sub.subsystems.map((system, sIdx) => (
                        <div key={sIdx} className="col-lg-4 col-12">
                          <div
                            className="p-3 rounded h-100"
                            style={{ background: '#FFFFFF', border: '1.5px solid #0F172A', boxShadow: '2px 2px 0 #0F172A' }}
                          >
                            <span
                              className="badge mb-2"
                              style={{
                                background: '#F1F5F9',
                                color: sub.accentColor,
                                border: `1px solid ${sub.accentColor}`,
                                fontSize: '10.5px',
                                fontWeight: 700,
                              }}
                            >
                              {system.badge}
                            </span>
                            <div className="fw-bold mb-1" style={{ color: '#0F172A', fontSize: '13px' }}>
                              {system.title}
                            </div>
                            <p className="small text-muted mb-0" style={{ fontSize: '12px', lineHeight: '1.5' }}>
                              {system.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Workflow Steps Preview */}
                  <div className="mb-4">
                    <h6 className="font-orbitron mb-3" style={{ color: '#0F172A', fontSize: '14px' }}>
                      <i className="bi bi-diagram-3-fill me-2 text-danger"></i> Development Roadmap Preview
                    </h6>
                    <div className="row g-3">
                      {sub.workflow.slice(0, 4).map((w) => (
                        <div key={w.step} className="col-md-6 col-12">
                          <div
                            className="p-3 h-100 rounded"
                            style={{
                              background: '#F8FAFC',
                              border: '1px solid #CBD5E1',
                            }}
                          >
                            <div className="d-flex align-items-center gap-2 mb-1">
                              <span
                                className="d-inline-flex align-items-center justify-content-center rounded-circle fw-bold font-orbitron"
                                style={{
                                  width: '22px',
                                  height: '22px',
                                  background: sub.accentColor,
                                  color: '#FFFFFF',
                                  fontSize: '11px',
                                }}
                              >
                                {w.step}
                              </span>
                              <div className="fw-bold" style={{ color: '#0F172A', fontSize: '13px' }}>
                                {w.name}
                              </div>
                            </div>
                            <p className="small mb-0 text-muted" style={{ fontSize: '12px', lineHeight: '1.5' }}>
                              {w.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action Footer */}
                  <div className="d-flex align-items-center justify-content-between flex-wrap gap-3 pt-3 border-top">
                    <div className="d-flex align-items-center gap-2 flex-wrap">
                      <span className="small fw-bold me-1" style={{ color: '#0F172A', fontSize: '12px' }}>
                        Key Tech:
                      </span>
                      {sub.tools.slice(0, 4).map((tool, tIdx) => (
                        <span
                          key={tIdx}
                          className="badge"
                          style={{
                            background: '#F8FAFC',
                            color: '#0F172A',
                            border: '1px solid #CBD5E1',
                            padding: '5px 9px',
                            fontWeight: '600',
                            fontSize: '11px',
                          }}
                        >
                          {tool}
                        </span>
                      ))}
                    </div>

                    <div className="d-flex gap-2">
                      <Link
                        href={`/subteams/${sub.slug}`}
                        className="btn btn-sm d-inline-flex align-items-center gap-2"
                        style={{
                          background: sub.accentColor,
                          color: '#FFFFFF',
                          border: '1.5px solid #0F172A',
                          boxShadow: '2px 2px 0 #0F172A',
                          fontWeight: 700,
                          fontSize: '12px',
                          padding: '7px 16px',
                          textDecoration: 'none',
                        }}
                      >
                        <span>Explore Full Division &amp; Workflow</span>
                        <i className="bi bi-arrow-right"></i>
                      </Link>
                      <Link
                        href="/join-us"
                        className="btn btn-sm d-inline-flex align-items-center gap-1"
                        style={{
                          background: '#FFFFFF',
                          color: '#0F172A',
                          border: '1.5px solid #0F172A',
                          fontWeight: 700,
                          fontSize: '12px',
                          padding: '7px 14px',
                          textDecoration: 'none',
                        }}
                      >
                        <span>Join</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Join Us CTA */}
          <div
            className="mt-5 text-center p-4 p-md-5 glass-panel"
            style={{
              border: '2px solid #0F172A',
              boxShadow: '4px 4px 0 #0F172A',
              background: '#FFFFFF',
            }}
          >
            <span className="badge-motorsport red mb-2">Recruitment Open</span>
            <h3 className="mb-2 font-orbitron" style={{ color: '#0F172A', fontWeight: 900 }}>
              WANT TO JOIN ONE OF THESE SUB-TEAMS?
            </h3>
            <p className="text-muted max-w-700 mx-auto mb-4" style={{ maxWidth: '650px', fontSize: '15px' }}>
              Batch 2k23 induction is officially live. Complete the registration portal to join the development of KILOFLIGHT PHOENIX and specialize in your division of choice.
            </p>
            <div className="d-flex justify-content-center gap-3 flex-wrap">
              <Link href="/join-us" className="custom-btn text-decoration-none">
                Apply for Batch 2k23 Induction
              </Link>
              <Link href="/cars" className="custom-btn-outline text-decoration-none" style={{ background: '#FFFFFF' }}>
                View KILOFLIGHT PHOENIX Specs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
