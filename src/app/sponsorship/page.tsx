import React from 'react';
import Link from 'next/link';
import SponsorshipCard from '@/components/SponsorshipCard';
import PressPatternBackground from '@/components/PressPatternBackground';
import CurrentSponsors from '@/components/CurrentSponsors';
import CountUp from '@/components/motion/CountUp';
import { Reveal, RevealGroup, RevealItem, GrowBar } from '@/components/motion/Reveal';
import {
  SPONSORSHIP_TIERS,
  BENEFIT_MATRIX,
  SPONSOR_ADVANTAGES,
  EXECUTION_DETAILS,
  VALUE_PROPOSITIONS,
  BUDGET,
  TIMELINE,
} from '@/lib/sponsorship-data';

export const metadata = {
  title: 'Sponsorship Packages | Team KILOFLIGHT KUET Formula Student',
  description:
    'Partner with Team KILOFLIGHT (KUET) for FSAE Dynamix India 2027. Title, Platinum, Gold, Silver and Bronze packages from 1.5 to 7 Lacs BDT, proudly powered by CF MOTO and Ansys.',
};

const bdt = (n: number) => n.toLocaleString('en-IN');

function SectionHeading({ badge, badgeClass = 'red', title, text }: { badge: string; badgeClass?: string; title: string; text?: string }) {
  return (
    <Reveal className="row text-center mb-5">
      <div className="col-lg-8 mx-auto">
        <span className={`badge-motorsport ${badgeClass} mb-2`}>{badge}</span>
        <h2 className="mb-3 font-orbitron d-block">{title}</h2>
        {text && <p className="text-muted mb-0">{text}</p>}
      </div>
    </Reveal>
  );
}

export default function SponsorshipPage() {
  const tiers = SPONSORSHIP_TIERS;

  return (
    <>
      {/* 1. Hero */}
      <section className="page-header-section sponsor-hero overflow-hidden">
        <div className="racing-stripes" aria-hidden="true" />
        <div className="container mx-auto px-4 text-center position-relative">
          <Reveal>
            <span className="badge-motorsport red mb-3">Corporate Partnership · 2026–2027</span>
            <h1 className="mb-3 font-orbitron">
              PARTNER WITH <span className="text-gradient-race">TEAM KILOFLIGHT</span>
            </h1>
            <p className="mx-auto mb-4" style={{ maxWidth: '780px' }}>
              Back Bangladesh&apos;s pioneering Formula Student team from KUET as KILOFLIGHT PHOENIX heads to{' '}
              <strong>FSAE Dynamix India 2027 (19–24 January 2027)</strong>, our first international dynamic events.
            </p>
            <div className="d-flex gap-3 justify-content-center flex-wrap">
              <a href="#packages" className="custom-btn">
                <i className="bi bi-box-seam me-2" aria-hidden="true"></i> View Packages
              </a>
              <Link href="/contact" className="custom-btn-outline">
                Talk to Our Team
              </Link>
            </div>
          </Reveal>

          <RevealGroup className="row g-3 mt-5 justify-content-center">
            {[
              { value: <>1<sup>st</sup></>, label: 'BD team through FSAE Japan 2023 mech. inspection' },
              { value: <CountUp to={30} />, label: 'Engineers on the team' },
              { value: <CountUp to={120} suffix=" km/h" />, label: 'Target top speed' },
              { value: <>&le;<CountUp to={5} suffix=" s" /></>, label: '0–100 km/h target' },
            ].map((s, i) => (
              <RevealItem key={i} className="col-lg-3 col-6">
                <div className="stat-tile h-100">
                  <div className="stat-tile-value font-orbitron">{s.value}</div>
                  <div className="stat-tile-label">{s.label}</div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* 2. Current partners */}
      <section className="section-padding py-5" id="partners">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Proudly Powered By"
            title="OUR CURRENT PARTNERS"
            text="The companies already on the grid with us for the 2027 season."
          />
          <CurrentSponsors />
        </div>
      </section>

      {/* 3. Why sponsor us */}
      <section className="section-padding py-5" style={{ background: 'rgba(2, 132, 199, 0.03)', borderTop: '2px solid var(--line)' }}>
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Advantages"
            badgeClass=""
            title="WHY SPONSOR US?"
            text="We have already put Bangladesh on the international engineering stage. Next, we race on a professional Formula track — and your brand can be on the car when we do."
          />
          <RevealGroup className="row g-4 justify-content-center">
            {SPONSOR_ADVANTAGES.map((a) => (
              <RevealItem key={a.title} className="col-lg-4 col-md-6">
                <div className="glass-panel advantage-card p-4 h-100" style={{ '--adv-color': a.color } as React.CSSProperties}>
                  <div className="dept-icon mb-3" style={{ color: a.color, borderColor: a.color, background: `${a.color}1A` }}>
                    <i className={`bi ${a.icon}`} aria-hidden="true"></i>
                  </div>
                  <h4 className="mb-2 font-orbitron" style={{ fontSize: '17px' }}>{a.title}</h4>
                  <p className="small text-muted mb-0">{a.text}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* 4. Packages */}
      <section id="packages" className="section-padding py-5 position-relative overflow-hidden" style={{ borderTop: '2px solid var(--line)' }}>
        <PressPatternBackground />
        <div className="container mx-auto px-4 position-relative" style={{ zIndex: 2 }}>
          <SectionHeading
            badge="Partnership Tiers"
            badgeClass="jute"
            title="SPONSORSHIP PACKAGES"
            text="Five tiers from 1.5 to 7 Lacs BDT per season. Pick the visibility that matches your goals — or ask us for a custom package."
          />
          <RevealGroup className="row g-4 justify-content-center">
            {tiers.map((tier) => (
              <RevealItem key={tier.id} className="col-lg-4 col-md-6 col-12 d-flex">
                <SponsorshipCard tier={tier} />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* 5. Benefits matrix */}
      <section className="section-padding py-5" style={{ background: 'rgba(2, 132, 199, 0.03)', borderTop: '2px solid var(--line)' }}>
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Matrix Breakdown"
            title="WHAT EACH PACKAGE INCLUDES"
            text="Every deliverable, side by side, exactly as listed in our 2027 sponsorship proposal."
          />

          {/* Desktop / tablet table */}
          <Reveal className="d-none d-lg-block">
            <div className="table-responsive benefit-matrix-wrap">
              <table className="schedule-table benefit-matrix table align-middle text-center w-100">
                <thead>
                  <tr>
                    <th scope="col" className="text-start">Feature</th>
                    {tiers.map((t) => (
                      <th key={t.id} scope="col" className={t.id === 'title' ? 'is-title' : undefined}>
                        <div style={{ color: t.id === 'title' ? '#FF6B6B' : '#FFFFFF', fontWeight: 800 }}>{t.title.replace(' Partner', '').toUpperCase()}</div>
                        <span className="small" style={{ color: '#CBD5E1' }}>
                          ৳ {t.price} Lacs
                        </span>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {BENEFIT_MATRIX.map((row) => (
                    <tr key={row.feature}>
                      <th scope="row" className="text-start fw-bold" style={{ color: 'var(--text)' }}>
                        <i className={`bi ${row.icon} me-2 text-danger`} aria-hidden="true"></i>
                        {row.feature}
                      </th>
                      {row.values.map((v, i) => (
                        <td key={i} className={i === 0 ? 'fw-bold text-danger is-title' : v === '—' ? 'text-muted' : undefined}>
                          {v === '—' ? <span aria-label="Not included">&mdash;</span> : v}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>

          {/* Mobile: one card per tier */}
          <RevealGroup className="row g-3 d-lg-none">
            {tiers.map((t, ti) => (
              <RevealItem key={t.id} className="col-md-6 col-12">
                <div className="matrix-tier-card" style={{ '--tier-color': t.primaryColor } as React.CSSProperties}>
                  <div className="matrix-tier-head">
                    <span className="font-orbitron">{t.title}</span>
                    <span className="font-orbitron">৳ {t.price} Lacs</span>
                  </div>
                  <ul className="list-unstyled mb-0">
                    {BENEFIT_MATRIX.filter((r) => r.values[ti] !== '—').map((r) => (
                      <li key={r.feature}>
                        <i className={`bi ${r.icon}`} aria-hidden="true"></i>
                        <span>
                          <strong>{r.feature}:</strong> {r.values[ti]}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* 6. Execution details */}
      <section className="section-padding py-5" style={{ borderTop: '2px solid var(--line)' }}>
        <div className="container mx-auto px-4">
          <SectionHeading badge="Execution Details" badgeClass="" title="HOW WE DELIVER YOUR BRAND" />
          <RevealGroup className="row g-3 justify-content-center">
            {EXECUTION_DETAILS.map((e) => (
              <RevealItem key={e.title} className="col-lg col-md-4 col-6">
                <div className="exec-tile h-100">
                  <i className={`bi ${e.icon}`} aria-hidden="true"></i>
                  <h5 className="font-orbitron">{e.title}</h5>
                  <p className="small mb-0">{e.text}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* 7. Value proposition */}
      <section className="section-padding py-5" style={{ background: 'rgba(255, 42, 42, 0.03)', borderTop: '2px solid var(--line)' }}>
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Value Proposition"
            title="MORE THAN LOGO PLACEMENT"
            text="A partnership connects your brand with a nationally recognised engineering team, international motorsport, emerging technical talent and real-world automotive development."
          />
          <div className="row g-4">
            {VALUE_PROPOSITIONS.map((v, i) => (
              <Reveal key={v.title} className="col-lg-6" x={i === 0 ? -30 : 30} y={0}>
                <div className="glass-panel p-4 p-lg-5 h-100" style={{ boxShadow: `8px 8px 0 ${v.color}` }}>
                  <div className="dept-icon mb-3" style={{ color: v.color, borderColor: v.color, background: `${v.color}1A` }}>
                    <i className={`bi ${v.icon}`} aria-hidden="true"></i>
                  </div>
                  <h3 className="mb-3">{v.title}</h3>
                  <ul className="value-list list-unstyled mb-0">
                    {v.items.map((item) => (
                      <li key={item}>
                        <i className="bi bi-check2-circle" style={{ color: v.color }} aria-hidden="true"></i>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Funding requirement */}
      <section className="section-padding py-5" style={{ borderTop: '2px solid var(--line)' }}>
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Funding Requirement"
            badgeClass="jute"
            title="WHERE YOUR SUPPORT GOES"
            text="A transparent breakdown of what it takes to build PHOENIX and take it to FSAE Dynamix India 2027."
          />

          <Reveal className="budget-total mx-auto mb-5">
            <span className="budget-total-label">Total project budget</span>
            <span className="budget-total-value font-orbitron">
              <CountUp to={BUDGET.total} prefix="৳ " duration={2} />
            </span>
          </Reveal>

          <div className="row g-4">
            {[
              { title: 'Formula Car Development', data: BUDGET.car, icon: 'bi-tools' },
              { title: 'FSAE Dynamix India 2027', data: BUDGET.competition, icon: 'bi-airplane-fill' },
            ].map((block, bi) => (
              <Reveal key={block.title} className="col-lg-6" delay={bi * 0.1}>
                <div className="glass-panel p-4 h-100">
                  <div className="d-flex justify-content-between align-items-baseline mb-3 gap-2 flex-wrap">
                    <h4 className="mb-0 font-orbitron" style={{ fontSize: '17px' }}>
                      <i className={`bi ${block.icon} me-2 text-danger`} aria-hidden="true"></i>
                      {block.title}
                    </h4>
                    <span className="font-orbitron fw-bold" style={{ color: 'var(--text)' }}>৳ {bdt(block.data.total)}</span>
                  </div>
                  <ul className="list-unstyled budget-bars mb-0">
                    {block.data.items.map((item, i) => {
                      const pct = (item.amount / block.data.total) * 100;
                      return (
                        <li key={item.label}>
                          <div className="d-flex justify-content-between small fw-semibold mb-1">
                            <span>{item.label}</span>
                            <span className="text-muted">
                              ৳ {bdt(item.amount)} · {pct.toFixed(1)}%
                            </span>
                          </div>
                          <div className="budget-track">
                            <GrowBar className="budget-fill" style={{ width: `${pct}%`, background: item.color }} delay={0.1 + i * 0.07} />
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Plan of action */}
      <section className="section-padding py-5" style={{ background: 'rgba(2, 132, 199, 0.03)', borderTop: '2px solid var(--line)' }}>
        <div className="container mx-auto px-4">
          <SectionHeading badge="Plan of Action" badgeClass="" title="ROAD TO DYNAMIX 2027" />
          <div className="race-timeline mx-auto">
            <GrowBar className="race-timeline-line" axis="y" duration={1.6} />
            {TIMELINE.map((t, i) => (
              <Reveal key={t.phase} className={`race-timeline-item ${i % 2 ? 'is-right' : 'is-left'}`} x={i % 2 ? 30 : -30} y={0} delay={i * 0.05}>
                <span className={`race-timeline-dot ${t.done ? 'is-done' : 'is-next'}`} aria-hidden="true">
                  <i className={`bi ${t.done ? 'bi-check-lg' : 'bi-flag-fill'}`}></i>
                </span>
                <div className="race-timeline-card">
                  <span className="race-timeline-phase">{t.phase}</span>
                  <h5 className="mb-1 font-orbitron">{t.title}</h5>
                  <span className="small text-muted">{t.date}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Custom sponsorship CTA */}
      <section className="section-padding py-5" style={{ background: 'var(--surface)', borderTop: '2px solid var(--line)' }}>
        <div className="container mx-auto px-4">
          <Reveal>
            <div
              className="glass-panel p-4 p-lg-5"
              style={{
                border: '2px solid var(--line)',
                boxShadow: '8px 8px 0 #FF2A2A',
                background: 'radial-gradient(circle at top right, rgba(255, 42, 42, 0.05) 0%, var(--surface) 100%)',
              }}
            >
              <div className="row g-5 align-items-center">
                <div className="col-lg-8 col-12">
                  <span className="badge-motorsport red mb-2">Tailored Partnerships</span>
                  <h2 className="font-orbitron mb-3 d-block" style={{ fontSize: 'clamp(26px, 3.5vw, 42px)' }}>
                    WANT A CUSTOM SPONSORSHIP?
                  </h2>
                  <p className="text-muted mb-4" style={{ fontSize: '16px', lineHeight: '1.7' }}>
                    Looking for a package built around your CSR objectives, technical component supply, R&amp;D collaboration, or marketing budget?
                    We work directly with partners to design agreements that deliver real value.
                  </p>

                  <div className="row g-3">
                    {[
                      { icon: 'bi-tools text-danger', title: 'Technical & Parts In-Kind', text: 'Raw materials (4130 chromoly, aluminium, natural jute fabric), CNC machining, prototyping or sensors in exchange for tier recognition.' },
                      { icon: 'bi-tree-fill text-warning', title: 'CSR & Green Tech Research', text: 'Fund sustainable jute-composite development, eco-friendly manufacturing and student STEM innovation in Bangladesh.' },
                      { icon: 'bi-airplane-engines text-info', title: 'Logistics & Tour Support', text: 'Sponsor race-car freight, competition travel, or entry fees for FSAE Dynamix India 2027 and Formula Student UK.' },
                      { icon: 'bi-star-fill text-danger', title: 'Bespoke Activations', text: 'Campus engineering seminars at KUET, product demonstrations with PHOENIX, or dedicated recruitment drives.' },
                    ].map((c) => (
                      <div key={c.title} className="col-md-6 col-12">
                        <div className="custom-offer-tile h-100">
                          <div className="d-flex align-items-center gap-2 mb-2">
                            <i className={`bi ${c.icon} fs-5`} aria-hidden="true"></i>
                            <span className="fw-bold font-orbitron" style={{ color: 'var(--text)', fontSize: '13.5px' }}>{c.title}</span>
                          </div>
                          <p className="small text-muted mb-0" style={{ lineHeight: '1.5' }}>{c.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="payment-note mt-4">
                    <i className="bi bi-receipt-cutoff" aria-hidden="true"></i>
                    <span>
                      <strong>Payment terms:</strong> by cheque or cash to the club&apos;s bank account. At least 50% by a mutually agreed date, the
                      remainder at least 45 days before the event.
                    </span>
                  </div>
                </div>

                <div className="col-lg-4 col-12 text-center">
                  <div className="p-4 rounded" style={{ background: 'var(--surface-2)', border: '2px solid var(--line)', boxShadow: '5px 5px 0 var(--shadow)' }}>
                    <div className="dept-icon mx-auto mb-3" style={{ color: '#FF2A2A', borderColor: '#FF2A2A', background: 'var(--tint-red)', width: '64px', height: '64px', fontSize: '28px' }}>
                      <i className="bi bi-patch-question-fill" aria-hidden="true"></i>
                    </div>
                    <h4 className="font-orbitron mb-2">Let&apos;s Build It Together</h4>
                    <p className="small text-muted mb-4" style={{ lineHeight: '1.6' }}>
                      Speak directly with our captain and sponsorship directors to design the package that fits you.
                    </p>

                    <div className="d-flex flex-column gap-2">
                      <Link href="/contact" className="custom-btn text-decoration-none w-100 py-3 text-center" style={{ fontSize: '13.5px' }}>
                        <i className="bi bi-chat-right-text-fill me-2" aria-hidden="true"></i> Discuss a Package
                      </Link>
                      <a
                        href="mailto:teamkiloflightkuet@gmail.com?subject=Sponsorship Inquiry - Team KILOFLIGHT"
                        className="custom-btn-outline text-decoration-none w-100 py-2 text-center small"
                      >
                        <i className="bi bi-envelope-fill me-2" aria-hidden="true"></i> Email the Team
                      </a>
                    </div>

                    <div className="mt-3 pt-3 border-top small text-muted font-monospace">
                      <i className="bi bi-telephone-fill me-1 text-danger" aria-hidden="true"></i> +880 1611-453600
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
