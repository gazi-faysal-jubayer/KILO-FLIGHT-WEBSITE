import React from 'react';
import Link from 'next/link';
import HeroVideo from '@/components/HeroVideo';
import CarSpecsTabs from '@/components/CarSpecsTabs';
import FsaeEvents from '@/components/FsaeEvents';
import CurrentSponsors from '@/components/CurrentSponsors';
import { Reveal, RevealGroup, RevealItem, GrowBar } from '@/components/motion/Reveal';
import { SUBTEAMS_DATA } from '@/lib/subteams-data';

export const metadata = {
  title: 'Team KILOFLIGHT | KUET Formula Student Motorsport Bangladesh',
  description:
    'Official website of Team KILOFLIGHT, premier Formula Student motorsport team from Khulna University of Engineering & Technology (KUET), Bangladesh. Building KILOFLIGHT PHOENIX.',
};

const ACHIEVEMENTS = [
  {
    year: '2023',
    event: 'Formula SAE Japan (FSAE Japan 2023)',
    sub: 'KILOFLIGHT ALPHA Debut',
    badge: <span className="badge-motorsport red mb-1">Passed Mechanical Inspection</span>,
    detail: 'First Bangladeshi team in history to pass mechanical inspection at FSAE Japan in Aichi.',
    location: 'Aichi, Japan',
  },
  {
    year: '2025',
    event: 'Formula Student Concept Competition India',
    sub: 'Combustion Vehicle (CV) Category',
    badge: <span className="badge-motorsport jute mb-1">Conceptual Groundwork</span>,
    detail: 'Aero packaging, 4130 spaceframe FEA, and powertrain cooling simulations for PHOENIX.',
    location: 'India / Online',
  },
  {
    year: 'July 2026',
    event: 'Bangladesh AutoFest 2026',
    sub: 'July 17–18, 2026 • ALOKI Dhaka',
    badge: (
      <span className="badge-motorsport mb-1" style={{ background: 'var(--tint-cyan)', color: 'var(--cyan)', border: '1.5px solid var(--cyan)' }}>
        National Exhibition
      </span>
    ),
    detail: '9 student members traveled from Khulna to exhibit alongside 5 other national FS teams. Logistics partner: Steadfast.',
    location: 'Tejgaon-Gulshan Link Road, Dhaka',
  },
  {
    year: '2026–2027',
    event: 'FSAE Dynamix India 2027 & FSUK 2027',
    sub: 'January 19–24, 2027 • European Circuits',
    badge: <span className="badge-motorsport red mb-1">KILOFLIGHT PHOENIX Campaign</span>,
    detail: 'Targeting ≤ 5.0s acceleration, 120 km/h top speed, multi-element wings, and 7-layer jute composite.',
    location: 'India & Silverstone, UK',
  },
];

export default function HomePage() {
  return (
    <>
      {/* 1. HERO SECTION (100VH / 100DVH SINGLE SCREEN) */}
      <HeroVideo />

      <div className="race-divider" aria-hidden="true" />

      {/* 2. THE CAR & TECHNICAL BLUEPRINT: KILOFLIGHT PHOENIX */}
      <section className="section-padding py-5" id="section_2">
        <div className="container mx-auto px-4">
          <Reveal className="row justify-content-center text-center mb-5">
            <div className="col-lg-8">
              <span className="badge-motorsport red mb-2">Next-Gen Formula Student Vehicle</span>
              <h2 className="mb-3">KILOFLIGHT PHOENIX ARCHITECTURE</h2>
              <p className="text-muted">
                Engineered for FSAE Dynamix India 2027 and European circuits. Powered by a 292 cc CFMoto 300SR ICE, 4130 spaceframe, and sustainable 7-layer jute-fiber composite body panels.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <CarSpecsTabs />
          </Reveal>

          <div className="text-center mt-4">
            <Link href="/cars" className="custom-btn-outline">
              Compare Phoenix vs Alpha Full Specs &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* 2b. POWERED BY: CURRENT SPONSORS */}
      <section className="py-5" style={{ background: 'var(--surface)', borderTop: '2px solid var(--line)', borderBottom: '2px solid var(--line)' }}>
        <div className="container mx-auto px-4">
          <Reveal className="text-center mb-4">
            <span className="badge-motorsport jute mb-2">Proudly Powered By</span>
            <h2 className="mb-0 d-block">OUR PARTNERS</h2>
          </Reveal>
          <CurrentSponsors variant="compact" />
          <Reveal className="text-center mt-4" delay={0.15}>
            <Link href="/sponsorship" className="custom-btn">
              <i className="bi bi-rocket-takeoff-fill me-2" aria-hidden="true"></i> Become a Partner
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 3. FSAE DYNAMIC & STATIC EVENTS EXPLAINER */}
      <section className="section-padding py-5" style={{ background: 'rgba(2, 132, 199, 0.03)' }}>
        <div className="container mx-auto px-4">
          <Reveal className="row justify-content-center text-center mb-5">
            <div className="col-lg-8">
              <span className="badge-motorsport me-2">Global Formula Student Regulations</span>
              <h2 className="mb-3">FSAE COMPETITION DISDIVISIONS</h2>
              <p className="text-muted">
                Formula SAE challenges university teams across rigorous dynamic track trials and static engineering design evaluations totaling 1,000 points.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <FsaeEvents />
          </Reveal>
        </div>
      </section>

      {/* 4. ENGINEERING SUB-TEAMS: terminal menu */}
      <section className="section-padding py-5" id="section_4">
        <div className="container mx-auto px-4">
          <Reveal className="row justify-content-center text-center mb-5">
            <div className="col-lg-8">
              <span className="badge-motorsport red mb-2">Multidisciplinary Synergy</span>
              <h2 className="mb-3">ENGINEERING SUB-TEAMS</h2>
              <p className="text-muted mb-0">
                Six divisions build PHOENIX, from the chromoly spaceframe to the jute-composite bodywork and the data logger.
              </p>
            </div>
          </Reveal>

          <RevealGroup className="row g-3">
            {SUBTEAMS_DATA.map((team) => (
              <RevealItem key={team.slug} className="col-lg-4 col-md-6 col-12 d-flex">
                <Link href={`/subteams/${team.slug}`} className="term-tile" style={{ '--tile-accent': team.accentColor } as React.CSSProperties}>
                  <span className="term-tile__index">{team.divisionNumber}</span>
                  <i className={`bi ${team.icon} term-tile__icon`} aria-hidden="true"></i>
                  <span className="term-tile__title">{team.title}</span>
                  <span className="term-tile__desc">{team.coverTagline}</span>
                  <span className="term-tile__go">OPEN ▶</span>
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>

          <div className="text-center mt-5">
            <Link href="/subteams" className="custom-btn-outline">
              All Sub-teams &amp; Workflows
            </Link>
          </div>
        </div>
      </section>

      <div className="race-divider" aria-hidden="true" />

      {/* 5. PREVIOUS ACHIEVEMENTS TIMELINE */}
      <section className="section-padding py-5" id="section_5" style={{ background: 'rgba(2, 132, 199, 0.03)' }}>
        <div className="container mx-auto px-4">
          <Reveal className="row justify-content-center text-center mb-4">
            <div className="col-lg-8">
              <span className="badge-motorsport red mb-2">Driving Innovation, Inspiring the Future</span>
              <h2 className="mb-3">PREVIOUS ACHIEVEMENTS &amp; EXHIBITIONS</h2>
              <p className="text-muted">Consistently pushing the boundaries of student engineering in Bangladesh on international and national stages.</p>
            </div>
          </Reveal>

          <div className="race-timeline mx-auto">
            <GrowBar className="race-timeline-line" axis="y" duration={1.6} />
            {ACHIEVEMENTS.map((a, i) => (
              <Reveal key={a.year} className={`race-timeline-item ${i % 2 ? 'is-right' : 'is-left'}`} x={i % 2 ? 30 : -30} y={0} delay={i * 0.05}>
                <span className={`race-timeline-dot ${i === ACHIEVEMENTS.length - 1 ? 'is-next' : 'is-done'}`} aria-hidden="true">
                  <i className={`bi ${i === ACHIEVEMENTS.length - 1 ? 'bi-flag-fill' : 'bi-check-lg'}`}></i>
                </span>
                <div className="race-timeline-card">
                  <span className="race-timeline-phase">{a.year}</span>
                  <h5 className="mb-1 font-orbitron">{a.event}</h5>
                  <div className="small mb-2" style={{ color: 'var(--text-muted)' }}>{a.sub}</div>
                  {a.badge}
                  <div className="small mt-1" style={{ color: 'var(--text-muted)' }}>{a.detail}</div>
                  <div className="small fw-semibold mt-2">
                    <i className="bi bi-geo-alt-fill text-danger me-1" aria-hidden="true"></i>
                    {a.location}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
