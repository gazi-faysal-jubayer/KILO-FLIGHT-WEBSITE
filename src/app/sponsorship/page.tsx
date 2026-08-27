'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function SponsorshipPage() {
  const [tiers, setTiers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/content')
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.data?.sponsorship) {
          setTiers(data.data.sponsorship);
        }
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      {/* Page Header */}
      <section className="page-header-section" style={{ background: 'radial-gradient(circle at top, rgba(2, 132, 199, 0.08) 0%, var(--dark-bg) 100%)' }}>
        <div className="container mx-auto px-4 text-center">
          <span className="badge-motorsport red mb-2">Corporate Investment Deck</span>
          <h1 className="mb-3 font-orbitron" style={{ color: '#0F172A', fontWeight: 900 }}>
            PARTNER WITH TEAM KILO FLIGHT
          </h1>
          <p className="text-muted max-w-700 mx-auto" style={{ maxWidth: '800px' }}>
            Empower Bangladesh&apos;s pioneering Formula Student automotive engineers at Khulna University of Engineering &amp; Technology (KUET). Gain prominent brand visibility across international racing circuits, student recruitment pipelines, and media showcases.
          </p>
        </div>
      </section>

      {/* 5 Official Tier Cards */}
      <section className="section-padding py-5">
        <div className="container mx-auto px-4">
          <div className="row text-center mb-5">
            <div className="col-lg-8 mx-auto">
              <span className="badge-motorsport mb-2">5 Corporate Partnership Tiers</span>
              <h2 className="mb-2 font-orbitron" style={{ color: '#0F172A', fontWeight: 900 }}>
                SPONSORSHIP PACKAGES
              </h2>
              <p className="text-muted">Select an investment tier tailored to your corporate marketing and talent acquisition objectives.</p>
            </div>
          </div>

          {loading ? (
            <div className="p-5 text-center">
              <div className="spinner-border text-danger mb-2"></div>
              <div className="small fw-bold">Loading sponsorship packages...</div>
            </div>
          ) : (
            <div className="row g-4 justify-content-center">
              {tiers.map((tier) => (
                <div key={tier.id} className="col-lg-4 col-md-6 col-12 d-flex">
                  <div
                    className="p-4 rounded w-100 d-flex flex-column"
                    style={{
                      background: '#FFFFFF',
                      border: '2px solid #0F172A',
                      boxShadow: `4px 4px 0 ${tier.primaryColor || '#0F172A'}`,
                    }}
                  >
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <span className="badge-motorsport" style={{ background: '#F8FAFC', color: '#0F172A', border: '1.5px solid #0F172A' }}>
                        {tier.tag}
                      </span>
                      <span className="small text-muted fw-bold">{tier.stampText}</span>
                    </div>

                    <h3 className="font-orbitron mb-2" style={{ color: '#0F172A', fontWeight: 900 }}>
                      {tier.title}
                    </h3>

                    <div className="p-3 my-2 rounded text-center" style={{ background: '#F8FAFC', border: '1.5px solid #0F172A' }}>
                      <div className="font-orbitron fs-3 fw-bold text-danger">
                        {tier.currency || '৳'} {tier.price} <span className="fs-6 text-muted fw-bold">{tier.period}</span>
                      </div>
                    </div>

                    <p className="small text-muted my-3 flex-grow-1" style={{ lineHeight: '1.5' }}>
                      {tier.description}
                    </p>

                    <div className="border-top pt-3 mb-4">
                      <div className="small fw-bold text-uppercase mb-2 font-orbitron" style={{ fontSize: '11px', color: '#0F172A' }}>
                        Package Highlights:
                      </div>
                      <ul className="list-unstyled small mb-0 d-flex flex-column gap-2 text-muted">
                        {(tier.features || []).map((f: any, fIdx: number) => (
                          <li key={fIdx} className="d-flex align-items-start gap-2">
                            <i className="bi bi-check2-circle text-danger mt-1"></i>
                            <span>{f.text}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <a
                      href={`mailto:teamkiloflightkuet@gmail.com?subject=Corporate Sponsorship Inquiry: ${tier.title}`}
                      className="custom-btn w-100 text-center text-decoration-none mt-auto"
                      style={{ fontSize: '12.5px' }}
                    >
                      Inquire for {tier.title}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Deliverables Breakdown Matrix (Dynamic) */}
      {tiers.length >= 3 && (
        <section className="section-padding py-5" style={{ background: 'rgba(2, 132, 199, 0.03)' }}>
          <div className="container mx-auto px-4">
            <div className="row text-center mb-4">
              <div className="col-lg-8 mx-auto">
                <span className="badge-motorsport red mb-2">Matrix Comparison</span>
                <h2 className="mb-2 font-orbitron" style={{ color: '#0F172A', fontWeight: 900 }}>
                  DELIVERABLES &amp; BENEFITS BREAKDOWN
                </h2>
                <p className="text-muted">Direct side-by-side marketing and recruitment deliverable breakdown per sponsorship tier.</p>
              </div>
            </div>

            <div className="table-responsive">
              <table className="schedule-table table align-middle w-100">
                <thead>
                  <tr>
                    <th scope="col">Marketing &amp; PR Deliverable</th>
                    {tiers.map((t) => (
                      <th key={t.id} scope="col">
                        <div>{t.title}</div>
                        <span className="small text-muted font-normal">({t.currency || '৳'}{t.price} Lacs)</span>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row" className="fw-bold" style={{ color: '#0F172A' }}>Logo on Race Car</th>
                    {tiers.map((t) => (
                      <td key={t.id} className="fw-bold">{t.logoCar}</td>
                    ))}
                  </tr>
                  <tr>
                    <th scope="row" className="fw-bold" style={{ color: '#0F172A' }}>Logo on Team Apparel</th>
                    {tiers.map((t) => (
                      <td key={t.id}>{t.logoApparel}</td>
                    ))}
                  </tr>
                  <tr>
                    <th scope="row" className="fw-bold" style={{ color: '#0F172A' }}>Official Website Feature</th>
                    {tiers.map((t) => (
                      <td key={t.id}>{t.websiteFeature}</td>
                    ))}
                  </tr>
                  <tr>
                    <th scope="row" className="fw-bold" style={{ color: '#0F172A' }}>Event &amp; Pit Promotion</th>
                    {tiers.map((t) => (
                      <td key={t.id}>{t.eventPromotion}</td>
                    ))}
                  </tr>
                  <tr>
                    <th scope="row" className="fw-bold" style={{ color: '#0F172A' }}>Social Media Campaigns</th>
                    {tiers.map((t) => (
                      <td key={t.id}>{t.socialCampaign}</td>
                    ))}
                  </tr>
                  <tr>
                    <th scope="row" className="fw-bold" style={{ color: '#0F172A' }}>Exhibition Booth Branding</th>
                    {tiers.map((t) => (
                      <td key={t.id}>{t.exhibitionBooth}</td>
                    ))}
                  </tr>
                  <tr>
                    <th scope="row" className="fw-bold" style={{ color: '#0F172A' }}>Direct Recruitment Pipeline</th>
                    {tiers.map((t) => (
                      <td key={t.id} className="fw-bold text-danger">{t.recruitmentAccess}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* Direct Contact CTA */}
      <section className="section-padding py-5">
        <div className="container mx-auto px-4 text-center">
          <div className="glass-panel p-5 max-w-700 mx-auto" style={{ maxWidth: '800px', border: '2px solid #0F172A', boxShadow: '4px 4px 0 #FF2A2A' }}>
            <span className="badge-motorsport red mb-2">Direct Liaison</span>
            <h3 className="mb-3 font-orbitron" style={{ color: '#0F172A' }}>NEED A CUSTOM CORPORATE PACKAGE?</h3>
            <p className="text-muted mb-4">
              We collaborate with industrial partners for material donations, machining access, tooling equipment, and logistics sponsorship.
            </p>
            <div className="d-flex justify-content-center gap-3 flex-wrap">
              <a href="mailto:teamkiloflightkuet@gmail.com" className="custom-btn text-decoration-none">
                <i className="bi bi-envelope-fill me-2"></i> teamkiloflightkuet@gmail.com
              </a>
              <a href="tel:+8801611453600" className="custom-btn-outline text-decoration-none">
                <i className="bi bi-telephone-fill me-2"></i> +880 1611-453600 (Captain)
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
