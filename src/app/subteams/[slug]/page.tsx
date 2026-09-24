import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { SUBTEAMS_DATA, getSubteamBySlug, getAllSubteamSlugs } from '@/lib/subteams-data';
import PowertrainCalculator from '@/components/PowertrainCalculator';
import SubteamMediaGallery from '@/components/SubteamMediaGallery';
import Powertrain3DModelsViewer from '@/components/Powertrain3DModelsViewer';
import Chassis3DModelsViewer from '@/components/Chassis3DModelsViewer';
import ChassisCalculator from '@/components/ChassisCalculator';

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
    title: `${subteam.title} — Basic Technical Knowledge & Architecture | Team KILOFLIGHT KUET`,
    description: `Core architecture, 3D CAD models, subsystems, specifications, and solvers for ${subteam.title} at Team KILOFLIGHT.`,
  };
}

const SUBTEAM_IMAGE_MAP: Record<string, { image: string; caption: string }> = {
  chassis: {
    image: '/images/formula_chassis_tech.jpg',
    caption: '4130 Chromoly tubular spaceframe undergoing torsional stiffness validation and precision laser alignment.',
  },
  aero: {
    image: '/images/formula_car_hero.jpg',
    caption: 'Full aerodynamic multi-element wing package and lightweight 7-layer Jute bio-composite exterior bodywork.',
  },
  electrical: {
    image: '/images/formula_telemetry_steering.jpg',
    caption: 'Digital OLED driver steering interface, low-voltage 12V harness, and live CAN-bus telemetry logging.',
  },
  braking: {
    image: '/images/formula_track_action.jpg',
    caption: 'Dynamic 2000 N 4-wheel brake lockup verification and 10% Ackermann rack-and-pinion shakedown.',
  },
  business: {
    image: '/images/formula_workshop.jpg',
    caption: 'Formula Student Cost & Manufacturing auditing, BPP commercial modeling, and industry partner sponsorships.',
  },
};

export default async function DedicatedSubteamPage({ params }: PageProps) {
  const { slug } = await params;
  const subteam = getSubteamBySlug(slug);

  if (!subteam) {
    notFound();
  }

  const isPowertrain = subteam.id === 'powertrain';
  const isChassis = subteam.id === 'chassis';
  const hasDedicated3D = isPowertrain || isChassis;
  const divisionImage = SUBTEAM_IMAGE_MAP[subteam.id];

  return (
    <div className="subteam-detail-wrapper" style={{ background: '#F8FAFC', minHeight: '100vh' }}>
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
              <li className="breadcrumb-item active" aria-current="page" style={{ color: subteam.accentColor }}>
                {subteam.shortTitle}
              </li>
            </ol>
          </nav>

          <div className="d-flex align-items-center gap-2 flex-wrap w-100 w-md-auto">
            <Link
              href={`/subteams/${subteam.slug}/workflow`}
              className="btn btn-sm d-inline-flex align-items-center justify-content-center gap-1 flex-grow-1 flex-md-grow-0"
              style={{
                background: '#FEF2F2',
                color: '#DC2626',
                border: '1.5px solid #DC2626',
                fontWeight: 700,
                fontSize: '12px',
                padding: '7px 14px',
              }}
            >
              <i className="bi bi-diagram-3-fill me-1"></i> Part 2: Workflow &rarr;
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
          background: `linear-gradient(135deg, rgba(15, 23, 42, 0.03) 0%, rgba(2, 132, 199, 0.05) 100%)`,
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
                    background: subteam.accentColor,
                    color: '#FFFFFF',
                    border: '1.5px solid #0F172A',
                    boxShadow: '2px 2px 0 #0F172A',
                    fontSize: '11px',
                  }}
                >
                  DIVISION {subteam.divisionNumber}
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

              <p className="lead fw-bold mb-3" style={{ color: subteam.accentColor, fontSize: '1.15rem' }}>
                {subteam.coverTagline}
              </p>

              <p className="text-muted mb-4" style={{ maxWidth: '750px', lineHeight: '1.7', fontSize: '15px' }}>
                {subteam.executiveSummary}
              </p>

              {/* Two Primary Part Quick Links */}
              <div className="d-flex gap-2 gap-sm-3 flex-column flex-sm-row flex-wrap">
                <div
                  className="btn btn-sm d-inline-flex align-items-center justify-content-center gap-2 w-100 w-sm-auto"
                  style={{
                    background: '#0F172A',
                    color: '#FFFFFF',
                    border: '2px solid #0F172A',
                    boxShadow: `3px 3px 0 ${subteam.accentColor}`,
                    padding: '10px 18px',
                    fontWeight: 800,
                    fontSize: '13px',
                    borderRadius: '8px',
                  }}
                >
                  <i className="bi bi-book-half text-warning"></i>
                  <span>PART 1: Basic Technical Knowledge</span>
                </div>

                <Link
                  href={`/subteams/${subteam.slug}/workflow`}
                  className="btn btn-sm d-inline-flex align-items-center justify-content-center gap-2 w-100 w-sm-auto"
                  style={{
                    background: '#FFFFFF',
                    color: '#0F172A',
                    border: '2px solid #0F172A',
                    boxShadow: '3px 3px 0 #DC2626',
                    padding: '10px 18px',
                    fontWeight: 800,
                    fontSize: '13px',
                    textDecoration: 'none',
                    borderRadius: '8px',
                  }}
                >
                  <i className="bi bi-diagram-3-fill text-danger"></i>
                  <span>PART 2: Technical Workflow &rarr;</span>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-12">
              <div
                className="p-4 rounded text-center"
                style={{
                  background: '#FFFFFF',
                  border: '2px solid #0F172A',
                  boxShadow: `5px 5px 0 ${subteam.accentColor}`,
                }}
              >
                <div
                  className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
                  style={{
                    width: '76px',
                    height: '76px',
                    background: '#F8FAFC',
                    border: `2px solid ${subteam.accentColor}`,
                    color: subteam.accentColor,
                    fontSize: '34px',
                  }}
                >
                  <i className={`bi ${subteam.icon}`}></i>
                </div>

                <div className="small fw-bold text-uppercase mb-1" style={{ color: '#64748B', letterSpacing: '1px' }}>
                  Division Blueprint
                </div>
                <h5 className="font-orbitron mb-2" style={{ color: '#0F172A', fontWeight: 800 }}>
                  {subteam.badge}
                </h5>

                {subteam.enginePackage && (
                  <div
                    className="p-2 mb-3 rounded"
                    style={{ background: '#F0F9FF', border: '1px solid #BAE6FD', color: '#0369A1', fontSize: '12px', fontWeight: 700 }}
                  >
                    <i className="bi bi-gear-fill me-1"></i> {subteam.enginePackage}
                  </div>
                )}

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
            PART 1: BASIC KNOWLEDGE ABOUT THE SUBTEAM
            ========================================================================= */}
        <div id="part-1" className="mb-5 pt-3">
          {/* Part 1 Header Banner */}
          <div
            className="p-3 px-4 mb-4 rounded d-flex align-items-center justify-content-between flex-wrap gap-2"
            style={{
              background: '#0F172A',
              color: '#FFFFFF',
              border: '2px solid #0F172A',
              boxShadow: `4px 4px 0 ${subteam.accentColor}`,
            }}
          >
            <div className="d-flex align-items-center gap-3">
              <span
                className="d-inline-flex align-items-center justify-content-center rounded-circle font-orbitron fw-bold"
                style={{ width: '32px', height: '32px', background: subteam.accentColor, color: '#FFFFFF', fontSize: '14px' }}
              >
                1
              </span>
              <div>
                <span className="small text-uppercase fw-bold" style={{ color: '#93C5FD', letterSpacing: '1px', fontSize: '11px' }}>
                  PRIMARY SECTION
                </span>
                <h4 className="font-orbitron mb-0" style={{ color: '#FFFFFF', fontWeight: 900 }}>
                  PART 1: BASIC TECHNICAL KNOWLEDGE &amp; ARCHITECTURE
                </h4>
              </div>
            </div>
            <span className="badge" style={{ background: '#1E293B', color: '#94A3B8', border: '1px solid #334155' }}>
              Subsystems • 3D Models • Specs • Formulas
            </span>
          </div>

          {/* 1.1 Executive Overview & Scope */}
          <div
            className="p-3 p-sm-4 p-md-5 rounded mb-4"
            style={{
              background: '#FFFFFF',
              border: '2px solid #0F172A',
              boxShadow: '3px 3px 0 #0F172A',
            }}
          >
            <div className="d-flex align-items-center gap-2 mb-3">
              <span className="badge-motorsport red">1.1</span>
              <h4 className="font-orbitron mb-0" style={{ color: '#0F172A', fontWeight: 800 }}>
                EXECUTIVE OVERVIEW &amp; TECHNICAL SCOPE
              </h4>
            </div>
            <p className="mb-0" style={{ color: '#334155', lineHeight: '1.8', fontSize: '15px' }}>
              {subteam.scopeAndMission}
            </p>
          </div>

          {/* 1.2 Core 3D CAD Models (Powertrain or Chassis) */}
          {isPowertrain && <Powertrain3DModelsViewer />}
          {isChassis && <Chassis3DModelsViewer />}

          {/* 1.3 Subsystems Breakdown */}
          <div className="mb-4">
            <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
              <div className="d-flex align-items-center gap-2">
                <span className="badge-motorsport red">{hasDedicated3D ? '1.3' : '1.2'}</span>
                <h4 className="font-orbitron mb-0" style={{ color: '#0F172A', fontWeight: 800 }}>
                  CORE SUBSYSTEMS &amp; PRIMARY ASSEMBLIES
                </h4>
              </div>
              <span className="badge" style={{ background: '#FFFFFF', color: '#0F172A', border: '1.5px solid #0F172A', fontWeight: 700 }}>
                {subteam.subsystems.length} Subsystems
              </span>
            </div>

            <div className="row g-4">
              {subteam.subsystems.map((sub, sIdx) => (
                <div key={sIdx} className="col-lg-4 col-12">
                  <div
                    className="p-4 rounded h-100 d-flex flex-column"
                    style={{
                      background: '#FFFFFF',
                      border: '2px solid #0F172A',
                      boxShadow: '3px 3px 0 #0F172A',
                    }}
                  >
                    <div className="d-flex align-items-center justify-content-between gap-2 mb-3">
                      <span
                        className="badge"
                        style={{
                          background: '#F1F5F9',
                          color: subteam.accentColor,
                          border: `1.5px solid ${subteam.accentColor}`,
                          fontWeight: 700,
                          fontSize: '11px',
                        }}
                      >
                        {sub.badge}
                      </span>
                      <span className="small fw-bold text-muted">0{sIdx + 1}</span>
                    </div>

                    <h5 className="font-orbitron mb-2" style={{ color: '#0F172A', fontWeight: 800, fontSize: '15px' }}>
                      {sub.title}
                    </h5>

                    <p className="small text-muted mb-3" style={{ lineHeight: '1.6' }}>
                      {sub.description}
                    </p>

                    <ul className="list-unstyled mb-0 mt-auto small" style={{ color: '#334155' }}>
                      {sub.bulletPoints.map((pt, pIdx) => (
                        <li key={pIdx} className="d-flex align-items-start gap-2 mb-2">
                          <i className="bi bi-arrow-right-circle-fill text-danger mt-1" style={{ fontSize: '12px' }}></i>
                          <span style={{ lineHeight: '1.5' }}>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 1.4 Technical Blueprints, Cutaways & Figures */}
          {isPowertrain ? (
            <SubteamMediaGallery />
          ) : divisionImage ? (
            <div className="mb-4">
              <div
                className="p-4 rounded"
                style={{
                  background: '#FFFFFF',
                  border: '2px solid #0F172A',
                  boxShadow: '4px 4px 0 #0F172A',
                }}
              >
                <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                  <span className="badge-motorsport red">DIVISION ENGINEERING FIGURE</span>
                  <span className="small text-muted font-orbitron">KILOFLIGHT PHOENIX R&amp;D</span>
                </div>
                <div
                  className="position-relative rounded overflow-hidden mb-3"
                  style={{ aspectRatio: '21/9', border: '1.5px solid #0F172A', background: '#0F172A' }}
                >
                  <Image
                    src={divisionImage.image}
                    alt={subteam.title}
                    fill
                    className="object-fit-cover"
                    sizes="100vw"
                  />
                </div>
                <p className="small text-muted mb-0" style={{ lineHeight: '1.6' }}>
                  <i className="bi bi-info-circle-fill text-primary me-1"></i> {divisionImage.caption}
                </p>
              </div>
            </div>
          ) : null}

          {/* 1.5 Dynamic Solvers & Math Calculators */}
          {isPowertrain && <PowertrainCalculator />}
          {isChassis && <ChassisCalculator />}

          {/* 1.6 Hardware Specifications Matrix */}
          <div className="mb-4">
            <div className="d-flex align-items-center gap-2 mb-3">
              <span className="badge-motorsport red">{hasDedicated3D ? '1.6' : '1.4'}</span>
              <h4 className="font-orbitron mb-0" style={{ color: '#0F172A', fontWeight: 800 }}>
                HARDWARE SPECIFICATIONS &amp; TOOLING MATRIX
              </h4>
            </div>

            <div
              className="p-3 p-sm-4 rounded"
              style={{
                background: '#FFFFFF',
                border: '2px solid #0F172A',
                boxShadow: '3px 3px 0 #0F172A',
              }}
            >
              <div className="row g-3">
                {subteam.specifications.map((spec, sIdx) => (
                  <div key={sIdx} className="col-md-6 col-12">
                    <div
                      className="p-3 rounded d-flex align-items-center justify-content-between h-100"
                      style={{ background: '#F8FAFC', border: '1px solid #E2E8F0' }}
                    >
                      <span className="small fw-bold text-muted text-uppercase" style={{ fontSize: '12px' }}>
                        {spec.label}
                      </span>
                      <span className="small fw-bold text-end" style={{ color: '#0F172A', fontSize: '13px' }}>
                        {spec.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Tools list */}
              <div className="mt-4 pt-3 border-top">
                <span className="small fw-bold text-uppercase d-block mb-2" style={{ color: '#0F172A', letterSpacing: '0.5px' }}>
                  Tooling, CAD &amp; Fabrication Technologies:
                </span>
                <div className="d-flex gap-2 flex-wrap">
                  {subteam.tools.map((tool, tIdx) => (
                    <span
                      key={tIdx}
                      className="badge"
                      style={{
                        background: '#FFFFFF',
                        color: '#0F172A',
                        border: '1.5px solid #0F172A',
                        boxShadow: '1.5px 1.5px 0 #0F172A',
                        padding: '6px 12px',
                        fontWeight: 700,
                        fontSize: '12px',
                      }}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            PART 2: LINK TO DEDICATED TECHNICAL WORKFLOW PAGE
            ========================================================================= */}
        <section
          className="p-3 p-sm-4 p-md-5 rounded mb-5"
          style={{
            background: '#FFFFFF',
            border: '2px solid #0F172A',
            boxShadow: '5px 5px 0 #DC2626',
          }}
        >
          <div className="row align-items-center g-3">
            <div className="col-lg-8 col-12">
              <span className="badge-motorsport red mb-2">Dedicated Execution Page</span>
              <h3 className="font-orbitron mb-2" style={{ color: '#0F172A', fontWeight: 900 }}>
                PART 2: {subteam.title.toUpperCase()} TECHNICAL WORKFLOW &amp; ROADMAP
              </h3>
              <p className="text-muted mb-0" style={{ fontSize: '15px', lineHeight: '1.7' }}>
                Explore the {subteam.workflow.length}-phase development roadmap, step-by-step engineering timelines, milestone deliverables, and the engineering challenge solution blueprint for this division on its dedicated page.
              </p>
            </div>
            <div className="col-lg-4 col-12 text-lg-end">
              <Link
                href={`/subteams/${subteam.slug}/workflow`}
                className="btn btn-sm d-inline-flex align-items-center justify-content-center gap-2 w-100 w-lg-auto"
                style={{
                  background: '#DC2626',
                  color: '#FFFFFF',
                  border: '2px solid #0F172A',
                  boxShadow: '3px 3px 0 #0F172A',
                  padding: '12px 24px',
                  fontWeight: 800,
                  fontSize: '14px',
                  textDecoration: 'none',
                  borderRadius: '8px',
                }}
              >
                <span>View Full Technical Workflow</span>
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
