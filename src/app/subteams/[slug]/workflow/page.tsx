import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getSubteamBySlug, getAllSubteamSlugs } from '@/lib/subteams-data';

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
      title: 'Sub-Team Not Found | Team KILOFLIGHT',
    };
  }

  return {
    title: `Part 2: Technical Workflow - ${subteam.title} | Team KILOFLIGHT KUET`,
    description: `Step-by-step Technical Workflow, Development Roadmap, Engineering Challenges, and Testing Protocols for ${subteam.title} at Team KILOFLIGHT KUET Formula Student.`,
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
                Part 2: Technical Workflow
              </li>
            </ol>
          </nav>

          <div className="d-flex align-items-center gap-2">
            <Link
              href={`/subteams/${subteam.slug}`}
              className="btn btn-sm d-inline-flex align-items-center gap-1"
              style={{
                background: '#FFFFFF',
                color: '#0F172A',
                border: '1.5px solid #0F172A',
                boxShadow: '2px 2px 0 #0F172A',
                fontWeight: 700,
                fontSize: '12px',
                padding: '6px 14px',
              }}
            >
              <i className="bi bi-book me-1"></i> Part 1: Basic Knowledge
            </Link>
            <Link
              href="/subteams"
              className="btn btn-sm d-inline-flex align-items-center gap-1"
              style={{
                background: '#F8FAFC',
                color: '#64748B',
                border: '1.5px solid #CBD5E1',
                fontWeight: 600,
                fontSize: '12px',
                padding: '6px 12px',
              }}
            >
              All Divisions
            </Link>
          </div>
        </div>
      </section>

      {/* Hero Header Section with 2-Part Switcher */}
      <section
        className="py-5"
        style={{
          background: `linear-gradient(135deg, rgba(220, 38, 38, 0.05) 0%, rgba(15, 23, 42, 0.05) 100%)`,
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
                  DIVISION {subteam.divisionNumber} WORKFLOW
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
                  {subteam.badge}
                </span>
              </div>

              <h1 className="font-orbitron mb-2" style={{ color: '#0F172A', fontWeight: 900, fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
                {subteam.title}
              </h1>

              <p className="lead fw-bold mb-3" style={{ color: '#DC2626', fontSize: '1.15rem' }}>
                Technical Workflow, Development Phases &amp; Solution Blueprint
              </p>

              <p className="text-muted mb-4" style={{ maxWidth: '750px', lineHeight: '1.7', fontSize: '15px' }}>
                Discover the end-to-step engineering pipeline of {subteam.title} at KUET Formula Student. From initial FSAE rulebook constraints and CAD modeling to FEA/CFD simulation, precision fabrication, dyno calibration, and track shakedown.
              </p>

              {/* Two Primary Part Navigation Tabs */}
              <div className="d-flex gap-3 flex-wrap">
                <Link
                  href={`/subteams/${subteam.slug}`}
                  className="btn btn-sm d-inline-flex align-items-center gap-2"
                  style={{
                    background: '#FFFFFF',
                    color: '#0F172A',
                    border: '2px solid #0F172A',
                    boxShadow: '3px 3px 0 #0F172A',
                    padding: '10px 20px',
                    fontWeight: 800,
                    fontSize: '13px',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    transition: 'all 0.15s ease',
                  }}
                >
                  <i className="bi bi-arrow-left text-primary"></i>
                  <i className="bi bi-book-half text-primary"></i>
                  <span>PART 1: Basic Technical Knowledge</span>
                </Link>

                <div
                  className="btn btn-sm d-inline-flex align-items-center gap-2"
                  style={{
                    background: '#DC2626',
                    color: '#FFFFFF',
                    border: '2px solid #0F172A',
                    boxShadow: '3px 3px 0 #0F172A',
                    padding: '10px 20px',
                    fontWeight: 800,
                    fontSize: '13px',
                    borderRadius: '8px',
                    cursor: 'default',
                  }}
                >
                  <i className="bi bi-diagram-3-fill"></i>
                  <span>PART 2: Technical Workflow &amp; Roadmap</span>
                  <span className="badge bg-dark ms-1" style={{ fontSize: '10px' }}>CURRENT PAGE</span>
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
                    background: '#FEF2F2',
                    border: '2px solid #DC2626',
                    color: '#DC2626',
                    fontSize: '34px',
                  }}
                >
                  <i className="bi bi-diagram-3-fill"></i>
                </div>

                <div className="small fw-bold text-uppercase mb-1" style={{ color: '#64748B', letterSpacing: '1px' }}>
                  Execution Pipeline
                </div>
                <h5 className="font-orbitron mb-2" style={{ color: '#0F172A', fontWeight: 800 }}>
                  {subteam.workflow.length} WORKFLOW PHASES
                </h5>

                <div
                  className="p-2 mb-3 rounded"
                  style={{ background: '#F8FAFC', border: '1px solid #CBD5E1', color: '#0F172A', fontSize: '12px', fontWeight: 700 }}
                >
                  <i className="bi bi-calendar-check-fill text-danger me-1"></i> Full Season Engineering Cycle
                </div>

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

      {/* Main Content Body: Part 2 */}
      <div className="container mx-auto px-4 py-5">
        <div className="mb-5">
          {/* Part 2 Header Banner */}
          <div
            className="p-3 px-4 mb-4 rounded d-flex align-items-center justify-content-between flex-wrap gap-2"
            style={{
              background: '#0F172A',
              color: '#FFFFFF',
              border: '2px solid #0F172A',
              boxShadow: '4px 4px 0 #DC2626',
            }}
          >
            <div className="d-flex align-items-center gap-3">
              <span
                className="d-inline-flex align-items-center justify-content-center rounded-circle font-orbitron fw-bold"
                style={{ width: '32px', height: '32px', background: '#DC2626', color: '#FFFFFF', fontSize: '14px' }}
              >
                2
              </span>
              <div>
                <span className="small text-uppercase fw-bold" style={{ color: '#FCA5A5', letterSpacing: '1px', fontSize: '11px' }}>
                  SECONDARY SECTION
                </span>
                <h4 className="font-orbitron mb-0" style={{ color: '#FFFFFF', fontWeight: 900 }}>
                  PART 2: STEP-BY-STEP TECHNICAL WORKFLOW &amp; EXECUTION
                </h4>
              </div>
            </div>
            <span className="badge" style={{ background: '#1E293B', color: '#94A3B8', border: '1px solid #334155' }}>
              Execution Phases • Priorities &amp; Challenges • On-Track Testing
            </span>
          </div>

          {/* 2.1 Step-by-Step Technical Workflow Phases */}
          <div className="mb-5">
            <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
              <div className="d-flex align-items-center gap-2">
                <span className="badge-motorsport red">2.1</span>
                <h4 className="font-orbitron mb-0" style={{ color: '#0F172A', fontWeight: 800 }}>
                  DEVELOPMENT PHASES &amp; TIMELINE ROADMAP
                </h4>
              </div>
              <span className="badge-motorsport red">
                {subteam.workflow.length} Execution Phases
              </span>
            </div>

            <div className="row g-4">
              {subteam.workflow.map((w) => (
                <div key={w.step} className="col-12">
                  <div
                    className="p-4 rounded"
                    style={{
                      background: '#FFFFFF',
                      border: '2px solid #0F172A',
                      boxShadow: '3px 3px 0 #0F172A',
                    }}
                  >
                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-2">
                      <div className="d-flex align-items-center gap-3">
                        <span
                          className="d-inline-flex align-items-center justify-content-center rounded-circle fw-bold font-orbitron"
                          style={{
                            width: '32px',
                            height: '32px',
                            background: subteam.accentColor,
                            color: '#FFFFFF',
                            fontSize: '14px',
                          }}
                        >
                          {w.step}
                        </span>
                        <h5 className="font-orbitron mb-0" style={{ color: '#0F172A', fontWeight: 800 }}>
                          {w.name}
                        </h5>
                      </div>

                      {w.duration && (
                        <span
                          className="badge"
                          style={{
                            background: '#F8FAFC',
                            color: '#0F172A',
                            border: '1.5px solid #0F172A',
                            fontWeight: 700,
                          }}
                        >
                          <i className="bi bi-clock-history me-1 text-danger"></i> {w.duration}
                        </span>
                      )}
                    </div>

                    <p className="mb-3 small" style={{ color: '#334155', lineHeight: '1.7', fontSize: '14px' }}>
                      {w.desc}
                    </p>

                    {w.deliverables && w.deliverables.length > 0 && (
                      <div className="pt-2 border-top d-flex align-items-center gap-2 flex-wrap">
                        <span className="small fw-bold text-muted me-1" style={{ fontSize: '12px' }}>
                          Phase Deliverables:
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
                            }}
                          >
                            <i className="bi bi-check2 me-1 text-success"></i> {d}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 2.2 Engineering Priorities & Technical Blueprint Table */}
          <div className="mb-5">
            <div className="d-flex align-items-center gap-2 mb-3">
              <span className="badge-motorsport red">2.2</span>
              <h4 className="font-orbitron mb-0" style={{ color: '#0F172A', fontWeight: 800 }}>
                ENGINEERING CHALLENGES &amp; SOLUTION BLUEPRINT
              </h4>
            </div>

            <div
              className="rounded overflow-hidden"
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
          </div>

          {/* 2.3 Quality Assurance & Dynamic Track Testing Protocols */}
          <div className="mb-5">
            <div className="d-flex align-items-center gap-2 mb-3">
              <span className="badge-motorsport red">2.3</span>
              <h4 className="font-orbitron mb-0" style={{ color: '#0F172A', fontWeight: 800 }}>
                QUALITY ASSURANCE &amp; TRACK TESTING PROTOCOLS
              </h4>
            </div>

            <div className="row g-4">
              <div className="col-md-6 col-12">
                <div
                  className="p-4 rounded h-100"
                  style={{ background: '#FFFFFF', border: '2px solid #0F172A', boxShadow: '3px 3px 0 #0F172A' }}
                >
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <i className="bi bi-speedometer2 text-danger fs-4"></i>
                    <h5 className="font-orbitron mb-0" style={{ color: '#0F172A', fontWeight: 800 }}>
                      Dyno &amp; Static Verification
                    </h5>
                  </div>
                  <p className="small text-muted mb-3" style={{ lineHeight: '1.6' }}>
                    Rigorous pre-track qualification ensuring all sub-assemblies meet or exceed Formula Student rulebook structural safety factors and thermodynamic benchmarks.
                  </p>
                  <ul className="list-unstyled mb-0 small" style={{ color: '#334155' }}>
                    <li className="d-flex align-items-center gap-2 mb-2">
                      <i className="bi bi-check-circle-fill text-success"></i>
                      <span>103 dB(A) fast response sound meter acoustic validation</span>
                    </li>
                    <li className="d-flex align-items-center gap-2 mb-2">
                      <i className="bi bi-check-circle-fill text-success"></i>
                      <span>60° tilt table stability test (no fuel/fluid leakage)</span>
                    </li>
                    <li className="d-flex align-items-center gap-2 mb-0">
                      <i className="bi bi-check-circle-fill text-success"></i>
                      <span>4-wheel hydraulic lockup test under 2,000 N pedal load</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div
                  className="p-4 rounded h-100"
                  style={{ background: '#FFFFFF', border: '2px solid #0F172A', boxShadow: '3px 3px 0 #0F172A' }}
                >
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <i className="bi bi-flag-fill text-danger fs-4"></i>
                    <h5 className="font-orbitron mb-0" style={{ color: '#0F172A', fontWeight: 800 }}>
                      Dynamic Shakedown &amp; Telemetry
                    </h5>
                  </div>
                  <p className="small text-muted mb-3" style={{ lineHeight: '1.6' }}>
                    Continuous live CAN-bus data logging across skidpad, 75m straight-line acceleration, and 22 km endurance stints to validate suspension geometry, cooling, and tire grip.
                  </p>
                  <ul className="list-unstyled mb-0 small" style={{ color: '#334155' }}>
                    <li className="d-flex align-items-center gap-2 mb-2">
                      <i className="bi bi-check-circle-fill text-success"></i>
                      <span>75m acceleration sprint telemetry &amp; launch control tuning</span>
                    </li>
                    <li className="d-flex align-items-center gap-2 mb-2">
                      <i className="bi bi-check-circle-fill text-success"></i>
                      <span>Constant radius figure-8 skidpad lateral G-force evaluation</span>
                    </li>
                    <li className="d-flex align-items-center gap-2 mb-0">
                      <i className="bi bi-check-circle-fill text-success"></i>
                      <span>22 km endurance thermal stress and radiator airflow validation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Return to Part 1 Callout Banner */}
          <div
            className="p-4 p-md-5 rounded text-center my-5"
            style={{
              background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
              color: '#FFFFFF',
              border: '2px solid #0F172A',
              boxShadow: `5px 5px 0 ${subteam.accentColor}`,
            }}
          >
            <span className="badge-motorsport red mb-2">Review Architecture &amp; Subsystems</span>
            <h3 className="font-orbitron mb-2" style={{ color: '#FFFFFF', fontWeight: 900 }}>
              WANT TO REVIEW PART 1: BASIC TECHNICAL KNOWLEDGE?
            </h3>
            <p className="text-muted max-w-700 mx-auto mb-4" style={{ maxWidth: '680px', color: '#CBD5E1', fontSize: '15px' }}>
              Inspect the 3D CAD engine and transmission assemblies, architectural subsystem breakdowns, technical cutaways, driveline calculators, and hardware specifications matrix.
            </p>
            <Link
              href={`/subteams/${subteam.slug}`}
              className="custom-btn text-decoration-none d-inline-flex align-items-center gap-2"
              style={{ padding: '14px 32px', fontSize: '15px' }}
            >
              <i className="bi bi-arrow-left"></i>
              <span>Back to Part 1: Basic Technical Knowledge</span>
            </Link>
          </div>
        </div>

        {/* Cross-Functional Division Partnerships */}
        <section className="mb-5">
          <div className="d-flex align-items-center gap-2 mb-4">
            <span className="badge-motorsport red">DIVISION INTERFACES</span>
            <h4 className="font-orbitron mb-0" style={{ color: '#0F172A', fontWeight: 800 }}>
              CROSS-FUNCTIONAL SYSTEM INTEGRATION
            </h4>
          </div>

          <div className="row g-3">
            {subteam.relatedSubteams.map((partner) => {
              const partnerData = getSubteamBySlug(partner.id);
              if (!partnerData) return null;
              return (
                <div key={partner.id} className="col-md-4 col-12">
                  <Link
                    href={`/subteams/${partner.id}`}
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
                          Division {partnerData.divisionNumber}
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
            WANT TO ENGINEER IN {subteam.title.toUpperCase()}?
          </h2>
          <p className="text-muted max-w-700 mx-auto mb-4" style={{ maxWidth: '650px', color: '#CBD5E1' }}>
            Recruitment is currently open for KUET Batch 2k23. Join the {subteam.shortTitle} team to design, manufacture, and test track-ready Formula Student race components.
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <Link href="/join-us" className="custom-btn text-decoration-none" style={{ padding: '12px 28px', fontSize: '14px' }}>
              Apply for {subteam.shortTitle} Now
            </Link>
            <Link
              href="/subteams"
              className="custom-btn-outline text-decoration-none"
              style={{ background: '#FFFFFF', color: '#0F172A', padding: '12px 28px', fontSize: '14px' }}
            >
              Explore Other Sub-Teams
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
