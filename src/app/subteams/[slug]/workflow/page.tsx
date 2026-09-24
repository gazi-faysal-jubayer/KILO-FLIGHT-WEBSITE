import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SUBTEAMS_DATA, getSubteamBySlug, getAllSubteamSlugs } from '@/lib/subteams-data';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllSubteamSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const subteam = getSubteamBySlug(slug);

  if (!subteam) {
    return {
      title: 'Workflow Not Found | Team KILOFLIGHT',
    };
  }

  return {
    title: `${subteam.title} — Technical Workflow & Execution Roadmap | Team KILOFLIGHT KUET`,
    description: `Comprehensive technical workflow, development phases, and engineering challenge blueprint for ${subteam.title} at Khulna University of Engineering & Technology.`,
  };
}

export default async function SubteamWorkflowPage({ params }: PageProps) {
  const { slug } = await params;
  const subteam = getSubteamBySlug(slug);

  if (!subteam) {
    notFound();
  }

  return (
    <div className="subteam-workflow-wrapper" style={{ background: '#F8FAFC', minHeight: '100vh' }}>
      {/* Top Breadcrumb & Navigation Bar */}
      <section className="border-bottom py-3" style={{ background: '#FFFFFF' }}>
        <div className="container mx-auto px-4 d-flex align-items-center justify-content-between flex-wrap gap-2">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0 small" style={{ fontWeight: 600 }}>
              <li className="breadcrumb-item">
                <Link href="/" className="text-decoration-none" style={{ color: '#64748B' }}>
                  Home
                </Link>
              </li>
              <li className="breadcrumb-item">
                <Link href="/subteams" className="text-decoration-none" style={{ color: '#64748B' }}>
                  Sub-Teams
                </Link>
              </li>
              <li className="breadcrumb-item">
                <Link href={`/subteams/${subteam.slug}`} className="text-decoration-none" style={{ color: '#64748B' }}>
                  {subteam.shortTitle}
                </Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page" style={{ color: '#DC2626' }}>
                Technical Workflow
              </li>
            </ol>
          </nav>

          <div className="d-flex align-items-center gap-2 flex-wrap w-100 w-md-auto">
            <Link
              href={`/subteams/${subteam.slug}`}
              className="btn btn-sm d-inline-flex align-items-center justify-content-center gap-1 flex-grow-1 flex-md-grow-0"
              style={{
                background: '#FFFFFF',
                color: subteam.accentColor,
                border: `1.5px solid ${subteam.accentColor}`,
                fontWeight: 700,
                fontSize: '12px',
                padding: '7px 14px',
              }}
            >
              <i className="bi bi-book-half me-1"></i> Part 1: Basic Technical Knowledge
            </Link>

            <Link
              href="/subteams"
              className="btn btn-sm d-inline-flex align-items-center justify-content-center gap-1 flex-grow-1 flex-md-grow-0"
              style={{
                background: '#F8FAFC',
                color: '#0F172A',
                border: '1.5px solid #0F172A',
                boxShadow: '2px 2px 0 #0F172A',
                fontWeight: 700,
                fontSize: '12px',
                padding: '7px 14px',
              }}
            >
              <i className="bi bi-arrow-left"></i> All Sub-Teams
            </Link>
          </div>
        </div>
      </section>

      {/* Hero Header Section */}
      <section
        className="py-5"
        style={{
          background: `linear-gradient(135deg, rgba(220, 38, 38, 0.05) 0%, rgba(15, 23, 42, 0.04) 100%)`,
          borderBottom: '2px solid #0F172A',
        }}
      >
        <div className="container mx-auto px-4">
          <div className="row align-items-center g-4">
            <div className="col-lg-8 col-12">
              <div className="d-flex align-items-center gap-3 mb-2 flex-wrap">
                <span
                  className="badge-motorsport"
                  style={{
                    background: '#DC2626',
                    color: '#FFFFFF',
                    border: '1.5px solid #0F172A',
                    boxShadow: '2px 2px 0 #0F172A',
                    fontSize: '11px',
                  }}
                >
                  PART 2: WORKFLOW &amp; EXECUTION
                </span>
                <span
                  className="badge"
                  style={{
                    background: '#FFFFFF',
                    color: '#0F172A',
                    border: '1.5px solid #0F172A',
                    fontWeight: 700,
                    fontSize: '11px',
                  }}
                >
                  DIVISION {subteam.divisionNumber} • {subteam.badge}
                </span>
              </div>

              <h1 className="font-orbitron mb-2" style={{ color: '#0F172A', fontWeight: 900, fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
                {subteam.title} WORKFLOW
              </h1>

              <p className="lead fw-bold mb-3" style={{ color: '#DC2626', fontSize: '1.15rem' }}>
                Engineering Execution Roadmap &amp; Solution Blueprint
              </p>

              <p className="text-muted mb-4" style={{ maxWidth: '750px', lineHeight: '1.7', fontSize: '15px' }}>
                This dedicated workflow documents the full operational development cycle for the {subteam.title} division. From initial rulebook interpretation and CAD packaging to rigorous CAE validation, CNC/TIG fabrication, and track endurance testing.
              </p>

              {/* Navigation Switcher Tabs */}
              <div className="d-flex gap-2 gap-sm-3 flex-column flex-sm-row flex-wrap">
                <Link
                  href={`/subteams/${subteam.slug}`}
                  className="btn btn-sm d-inline-flex align-items-center justify-content-center gap-2 w-100 w-sm-auto"
                  style={{
                    background: '#FFFFFF',
                    color: '#0F172A',
                    border: '2px solid #0F172A',
                    boxShadow: '3px 3px 0 #0F172A',
                    padding: '10px 18px',
                    fontWeight: 800,
                    fontSize: '13px',
                    textDecoration: 'none',
                    borderRadius: '8px',
                  }}
                >
                  <i className="bi bi-book text-primary"></i>
                  <span>PART 1: Basic Technical Knowledge</span>
                </Link>

                <div
                  className="btn btn-sm d-inline-flex align-items-center justify-content-center gap-2 w-100 w-sm-auto"
                  style={{
                    background: '#DC2626',
                    color: '#FFFFFF',
                    border: '2px solid #0F172A',
                    boxShadow: '3px 3px 0 #0F172A',
                    padding: '10px 18px',
                    fontWeight: 800,
                    fontSize: '13px',
                    borderRadius: '8px',
                  }}
                >
                  <i className="bi bi-diagram-3-fill text-warning"></i>
                  <span>PART 2: Technical Workflow (Current Page)</span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-12">
              <div
                className="p-4 rounded text-center"
                style={{
                  background: '#FFFFFF',
                  border: '2px solid #0F172A',
                  boxShadow: '5px 5px 0 #DC2626',
                }}
              >
                <div
                  className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
                  style={{
                    width: '76px',
                    height: '76px',
                    background: '#F8FAFC',
                    border: '2px solid #DC2626',
                    color: '#DC2626',
                    fontSize: '34px',
                  }}
                >
                  <i className="bi bi-diagram-3-fill"></i>
                </div>

                <div className="small fw-bold text-uppercase mb-1" style={{ color: '#64748B', letterSpacing: '1px' }}>
                  Execution Roadmap
                </div>
                <h5 className="font-orbitron mb-2" style={{ color: '#0F172A', fontWeight: 800 }}>
                  {subteam.workflow.length} Development Phases
                </h5>
                <p className="small text-muted mb-3" style={{ fontSize: '12px' }}>
                  Full lifecycle track-readiness validation for Formula Student events.
                </p>

                <div className="d-flex justify-content-center gap-2 flex-wrap">
                  {subteam.tools.slice(0, 3).map((t, idx) => (
                    <span
                      key={idx}
                      className="badge"
                      style={{
                        background: '#F8FAFC',
                        color: '#0F172A',
                        border: '1px solid #CBD5E1',
                        fontSize: '11px',
                        fontWeight: 600,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <div className="container mx-auto px-4 py-5">
        {/* =========================================================================
            SECTION 2.1: STEP-BY-STEP DEVELOPMENT PHASES & TIMELINE ROADMAP
            ========================================================================= */}
        <div className="mb-5">
          <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
            <div className="d-flex align-items-center gap-2">
              <span className="badge-motorsport red">2.1 Execution Timeline</span>
              <h3 className="font-orbitron mb-0" style={{ color: '#0F172A', fontWeight: 900 }}>
                DEVELOPMENT PHASES &amp; TIMELINE ROADMAP
              </h3>
            </div>
            <span className="badge-motorsport red">
              {subteam.workflow.length} Execution Phases
            </span>
          </div>

          <div className="row g-4">
            {subteam.workflow.map((w) => (
              <div key={w.step} className="col-12">
                <div
                  className="p-3 p-sm-4 rounded"
                  style={{
                    background: '#FFFFFF',
                    border: '2px solid #0F172A',
                    boxShadow: '3px 3px 0 #0F172A',
                  }}
                >
                  <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-2">
                    <div className="d-flex align-items-center gap-2 gap-sm-3">
                      <span
                        className="d-inline-flex align-items-center justify-content-center rounded-circle fw-bold font-orbitron flex-shrink-0"
                        style={{
                          width: '34px',
                          height: '34px',
                          background: subteam.accentColor,
                          color: '#FFFFFF',
                          fontSize: '13px',
                        }}
                      >
                        0{w.step}
                      </span>
                      <h4 className="font-orbitron mb-0" style={{ color: '#0F172A', fontWeight: 800, fontSize: 'clamp(1rem, 2.5vw, 1.25rem)' }}>
                        {w.name}
                      </h4>
                    </div>

                    {w.duration && (
                      <span
                        className="badge"
                        style={{
                          background: '#F8FAFC',
                          color: '#0F172A',
                          border: '1.5px solid #0F172A',
                          fontWeight: 700,
                          fontSize: '12px',
                        }}
                      >
                        <i className="bi bi-clock-history me-1 text-danger"></i> {w.duration}
                      </span>
                    )}
                  </div>

                  <p className="mb-3" style={{ color: '#334155', lineHeight: '1.8', fontSize: '15px' }}>
                    {w.desc}
                  </p>

                  {w.deliverables && w.deliverables.length > 0 && (
                    <div className="pt-3 border-top d-flex align-items-center gap-2 flex-wrap">
                      <span className="small fw-bold text-muted me-1" style={{ fontSize: '12px' }}>
                        Key Milestones &amp; Deliverables:
                      </span>
                      {w.deliverables.map((d, dIdx) => (
                        <span
                          key={dIdx}
                          className="badge"
                          style={{
                            background: '#F1F5F9',
                            color: '#0F172A',
                            border: '1px solid #CBD5E1',
                            fontSize: '11px',
                            fontWeight: 600,
                            padding: '6px 10px',
                          }}
                        >
                          <i className="bi bi-check2-circle me-1 text-success"></i> {d}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =========================================================================
            SECTION 2.2: ENGINEERING CHALLENGES & SOLUTION BLUEPRINT
            ========================================================================= */}
        <div className="mb-5">
          <div className="d-flex align-items-center gap-2 mb-3">
            <span className="badge-motorsport red">2.2 Engineering Matrix</span>
            <h3 className="font-orbitron mb-0" style={{ color: '#0F172A', fontWeight: 900 }}>
              ENGINEERING CHALLENGES &amp; SOLUTION BLUEPRINT
            </h3>
          </div>

          {/* Desktop & Tablet Table (Hidden on Phones) */}
          <div
            className="d-none d-md-block rounded overflow-hidden"
            style={{
              background: '#FFFFFF',
              border: '2px solid #0F172A',
              boxShadow: '4px 4px 0 #0F172A',
            }}
          >
            <div className="table-responsive">
              <table className="table table-hover align-middle mb-0" style={{ borderCollapse: 'collapse' }}>
                <thead style={{ background: '#0F172A', color: '#FFFFFF' }}>
                  <tr>
                    <th className="py-3 px-4 font-orbitron" style={{ fontSize: '12px', width: '22%' }}>
                      SYSTEM COMPONENT
                    </th>
                    <th className="py-3 px-4 font-orbitron" style={{ fontSize: '12px', width: '28%' }}>
                      INTEGRATION GOAL
                    </th>
                    <th className="py-3 px-4 font-orbitron" style={{ fontSize: '12px', width: '28%' }}>
                      ENGINEERING CHALLENGE
                    </th>
                    <th className="py-3 px-4 font-orbitron" style={{ fontSize: '12px', width: '22%' }}>
                      KILOFLIGHT SOLUTION
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {subteam.engineeringPriorities.map((item, idx) => (
                    <tr key={idx} style={{ background: idx % 2 === 0 ? '#FFFFFF' : '#F8FAFC' }}>
                      <td className="py-3 px-4 fw-bold" style={{ color: '#0F172A', fontSize: '13.5px' }}>
                        <i className="bi bi-cpu me-2 text-danger"></i>
                        {item.component}
                      </td>
                      <td className="py-3 px-4 small" style={{ color: '#334155', lineHeight: '1.6' }}>
                        {item.goal}
                      </td>
                      <td className="py-3 px-4 small" style={{ color: '#DC2626', fontWeight: 600, lineHeight: '1.6' }}>
                        <i className="bi bi-exclamation-triangle-fill me-1"></i> {item.challenge}
                      </td>
                      <td className="py-3 px-4 small" style={{ color: '#0F172A', fontWeight: 600, lineHeight: '1.6' }}>
                        <i className="bi bi-check-circle-fill text-success me-1"></i> {item.solution}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile High-Contrast Cards (Shown Only on Phones & Small Screens) */}
          <div className="d-md-none d-flex flex-column gap-3">
            {subteam.engineeringPriorities.map((item, idx) => (
              <div
                key={idx}
                className="p-3 rounded"
                style={{
                  background: '#FFFFFF',
                  border: '2px solid #0F172A',
                  boxShadow: '3px 3px 0 #0F172A',
                }}
              >
                <div className="d-flex align-items-center justify-content-between gap-2 mb-2 pb-2 border-bottom">
                  <span className="fw-bold font-orbitron" style={{ color: '#0F172A', fontSize: '13px' }}>
                    <i className="bi bi-cpu me-2 text-danger"></i>
                    {item.component}
                  </span>
                  <span className="badge" style={{ background: '#0F172A', color: '#FFFFFF', fontSize: '10px' }}>
                    Priority 0{idx + 1}
                  </span>
                </div>

                <div className="mb-2">
                  <span className="small text-muted d-block fw-bold text-uppercase" style={{ fontSize: '10px', letterSpacing: '0.5px' }}>
                    Integration Goal:
                  </span>
                  <p className="small mb-0" style={{ color: '#334155', lineHeight: '1.5', fontSize: '12.5px' }}>
                    {item.goal}
                  </p>
                </div>

                <div className="p-2 px-3 rounded mb-2" style={{ background: '#FEF2F2', border: '1px solid #FECACA' }}>
                  <span className="small text-danger d-block fw-bold text-uppercase" style={{ fontSize: '10px', letterSpacing: '0.5px' }}>
                    <i className="bi bi-exclamation-triangle-fill me-1"></i> Engineering Challenge
                  </span>
                  <p className="small mb-0" style={{ color: '#991B1B', fontWeight: 600, lineHeight: '1.5', fontSize: '12px' }}>
                    {item.challenge}
                  </p>
                </div>

                <div className="p-2 px-3 rounded" style={{ background: '#F0FDF4', border: '1px solid #BBF7D0' }}>
                  <span className="small text-success d-block fw-bold text-uppercase" style={{ fontSize: '10px', letterSpacing: '0.5px' }}>
                    <i className="bi bi-check-circle-fill me-1"></i> KILOFLIGHT Solution
                  </span>
                  <p className="small mb-0" style={{ color: '#166534', fontWeight: 600, lineHeight: '1.5', fontSize: '12px' }}>
                    {item.solution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =========================================================================
            SECTION 2.3: TRACK TESTING PROTOCOLS & QUALITY ASSURANCE
            ========================================================================= */}
        <div className="mb-5">
          <div className="d-flex align-items-center gap-2 mb-3">
            <span className="badge-motorsport red">2.3 Quality Assurance</span>
            <h3 className="font-orbitron mb-0" style={{ color: '#0F172A', fontWeight: 900 }}>
              TRACK TESTING &amp; SCRUTINEERING PROTOCOLS
            </h3>
          </div>

          <div className="row g-4">
            <div className="col-md-4 col-12">
              <div
                className="p-3 p-sm-4 rounded h-100"
                style={{ background: '#FFFFFF', border: '2px solid #0F172A', boxShadow: '3px 3px 0 #0F172A' }}
              >
                <div className="d-flex align-items-center gap-2 mb-3">
                  <div
                    className="rounded-circle d-inline-flex align-items-center justify-content-center"
                    style={{ width: '40px', height: '40px', background: '#FEF2F2', border: '1.5px solid #EF4444', color: '#DC2626' }}
                  >
                    <i className="bi bi-shield-check"></i>
                  </div>
                  <h5 className="font-orbitron mb-0" style={{ color: '#0F172A', fontWeight: 800, fontSize: '15px' }}>
                    Static Scrutineering
                  </h5>
                </div>
                <p className="small text-muted mb-0" style={{ lineHeight: '1.7' }}>
                  Pre-inspection verification against the official Formula Student rulebook. Covers structural wall thicknesses, safety disconnects, firewall clearances, and fluid containment seals.
                </p>
              </div>
            </div>

            <div className="col-md-4 col-12">
              <div
                className="p-3 p-sm-4 rounded h-100"
                style={{ background: '#FFFFFF', border: '2px solid #0F172A', boxShadow: '3px 3px 0 #0F172A' }}
              >
                <div className="d-flex align-items-center gap-2 mb-3">
                  <div
                    className="rounded-circle d-inline-flex align-items-center justify-content-center"
                    style={{ width: '40px', height: '40px', background: '#F0F9FF', border: '1.5px solid #0284C7', color: '#0284C7' }}
                  >
                    <i className="bi bi-speedometer"></i>
                  </div>
                  <h5 className="font-orbitron mb-0" style={{ color: '#0F172A', fontWeight: 800, fontSize: '15px' }}>
                    Dyno &amp; Brake Test
                  </h5>
                </div>
                <p className="small text-muted mb-0" style={{ lineHeight: '1.7' }}>
                  Full-throttle dynamometer tuning to map volumetric efficiency and air-fuel ratios. Four-wheel simultaneous lockup test verifying 2,000 N master cylinder hydraulic pedal pressure.
                </p>
              </div>
            </div>

            <div className="col-md-4 col-12">
              <div
                className="p-3 p-sm-4 rounded h-100"
                style={{ background: '#FFFFFF', border: '2px solid #0F172A', boxShadow: '3px 3px 0 #0F172A' }}
              >
                <div className="d-flex align-items-center gap-2 mb-3">
                  <div
                    className="rounded-circle d-inline-flex align-items-center justify-content-center"
                    style={{ width: '40px', height: '40px', background: '#F0FDF4', border: '1.5px solid #16A34A', color: '#16A34A' }}
                  >
                    <i className="bi bi-flag-fill"></i>
                  </div>
                  <h5 className="font-orbitron mb-0" style={{ color: '#0F172A', fontWeight: 800, fontSize: '15px' }}>
                    Endurance Shakedown
                  </h5>
                </div>
                <p className="small text-muted mb-0" style={{ lineHeight: '1.7' }}>
                  22 km high-intensity dynamic track test. Thermal logging of oil, coolant, differential casing, and brake rotors to guarantee 100% mechanical reliability under sustained cornering.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Prominent Link Back to Part 1 */}
        <section
          className="p-3 p-sm-4 p-md-5 rounded mb-5"
          style={{
            background: '#FFFFFF',
            border: '2px solid #0F172A',
            boxShadow: `5px 5px 0 ${subteam.accentColor}`,
          }}
        >
          <div className="row align-items-center g-3">
            <div className="col-lg-8 col-12">
              <span className="badge-motorsport red mb-2">Technical Architecture</span>
              <h3 className="font-orbitron mb-2" style={{ color: '#0F172A', fontWeight: 900 }}>
                EXPLORE {subteam.title.toUpperCase()} BASIC KNOWLEDGE &amp; 3D MODELS
              </h3>
              <p className="text-muted mb-0" style={{ fontSize: '15px', lineHeight: '1.6' }}>
                Review the core engineering architecture, interactive 3D CAD models (Engine and Transmission), architectural subsystems, blueprints, and mathematical solvers on the dedicated Part 1 page.
              </p>
            </div>
            <div className="col-lg-4 col-12 text-lg-end">
              <Link
                href={`/subteams/${subteam.slug}`}
                className="btn btn-sm d-inline-flex align-items-center justify-content-center gap-2 w-100 w-lg-auto"
                style={{
                  background: '#0F172A',
                  color: '#FFFFFF',
                  border: '2px solid #0F172A',
                  boxShadow: `3px 3px 0 ${subteam.accentColor}`,
                  padding: '12px 24px',
                  fontWeight: 800,
                  fontSize: '14px',
                  textDecoration: 'none',
                  borderRadius: '8px',
                }}
              >
                <span>Go to Part 1: Basic Knowledge</span>
                <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          </div>
        </section>

        {/* Cross-Functional Division Partnerships */}
        <section className="mb-5">
          <div className="d-flex align-items-center gap-2 mb-4">
            <span className="badge-motorsport red">DIVISION INTERFACES</span>
            <h4 className="font-orbitron mb-0" style={{ color: '#0F172A', fontWeight: 800 }}>
              CROSS-FUNCTIONAL WORKFLOW INTEGRATION
            </h4>
          </div>

          <div className="row g-3">
            {subteam.relatedSubteams.map((partner) => {
              const partnerData = getSubteamBySlug(partner.id);
              if (!partnerData) return null;
              return (
                <div key={partner.id} className="col-md-4 col-12">
                  <Link
                    href={`/subteams/${partner.id}/workflow`}
                    className="p-3 rounded d-flex align-items-center justify-content-between text-decoration-none h-100"
                    style={{
                      background: '#FFFFFF',
                      border: '2px solid #0F172A',
                      boxShadow: '3px 3px 0 #0F172A',
                      transition: 'all 0.15s ease',
                    }}
                  >
                    <div className="d-flex align-items-center gap-3">
                      <div
                        className="rounded-circle d-flex align-items-center justify-content-center"
                        style={{
                          width: '40px',
                          height: '40px',
                          background: '#F8FAFC',
                          border: `1.5px solid ${partnerData.accentColor}`,
                          color: partnerData.accentColor,
                          fontSize: '18px',
                        }}
                      >
                        <i className={`bi ${partnerData.icon}`}></i>
                      </div>
                      <div>
                        <span className="small text-muted text-uppercase d-block" style={{ fontSize: '10.5px' }}>
                          Division {partnerData.divisionNumber} Workflow
                        </span>
                        <span className="fw-bold" style={{ color: '#0F172A', fontSize: '13.5px' }}>
                          {partnerData.title}
                        </span>
                      </div>
                    </div>
                    <i className="bi bi-arrow-right text-muted"></i>
                  </Link>
                </div>
              );
            })}
          </div>
        </section>

        {/* Batch 2k23 Recruitment Callout */}
        <section
          className="p-4 p-md-5 rounded text-center"
          style={{
            background: '#0F172A',
            color: '#FFFFFF',
            border: '2px solid #0F172A',
            boxShadow: `5px 5px 0 ${subteam.accentColor}`,
          }}
        >
          <span className="badge-motorsport red mb-2">Batch 2k23 Recruitment Open</span>
          <h2 className="font-orbitron mb-2" style={{ color: '#FFFFFF', fontWeight: 900 }}>
            JOIN THE {subteam.title.toUpperCase()} DIVISION
          </h2>
          <p className="text-muted max-w-700 mx-auto mb-4" style={{ maxWidth: '650px', color: '#CBD5E1' }}>
            Work directly on CAD design, computational modeling, and precision manufacturing in Team KILOFLIGHT at Khulna University of Engineering &amp; Technology.
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <Link href="/join-us" className="custom-btn text-decoration-none" style={{ padding: '12px 28px', fontSize: '14px' }}>
              Apply for {subteam.shortTitle} Induction
            </Link>
            <Link
              href="/subteams"
              className="custom-btn-outline text-decoration-none"
              style={{ background: '#FFFFFF', color: '#0F172A', padding: '12px 28px', fontSize: '14px' }}
            >
              Explore All Divisions
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
