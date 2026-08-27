'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function SubteamsPage() {
  const [subteams, setSubteams] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/content')
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.data?.subteams) {
          setSubteams(data.data.subteams);
        }
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      {/* Header */}
      <section className="page-header-section" style={{ background: 'radial-gradient(circle at top, rgba(255, 42, 42, 0.08) 0%, var(--dark-bg) 100%)' }}>
        <div className="container mx-auto px-4 text-center">
          <span className="badge-motorsport red mb-2">Technical Divisions</span>
          <h1 className="mb-3 font-orbitron" style={{ color: '#0F172A', fontWeight: 900 }}>SUB-TEAMS &amp; DETAILED WORKFLOWS</h1>
          <p className="text-muted max-w-700 mx-auto" style={{ maxWidth: '800px' }}>
            Explore the specialized engineering and business divisions powering Team KILOFLIGHT at Khulna University of Engineering &amp; Technology (KUET), complete with their step-by-step development workflows for KILOFLIGHT PHOENIX.
          </p>
        </div>
      </section>

      {/* Subteam Deep Dives */}
      <section className="section-padding py-5">
        <div className="container mx-auto px-4">
          {loading ? (
            <div className="p-5 text-center">
              <div className="spinner-border text-danger mb-2"></div>
              <div className="small fw-bold">Loading sub-teams &amp; workflows...</div>
            </div>
          ) : (
            <div className="row g-5">
              {subteams.map((sub, idx) => (
                <div key={sub.id} className="col-12" id={sub.id}>
                  <div className="glass-panel p-4 p-lg-5" style={{ border: '2px solid #0F172A', boxShadow: `4px 4px 0 ${sub.accentColor || '#0F172A'}` }}>
                    {/* Division Header */}
                    <div className="d-flex align-items-start justify-content-between flex-wrap gap-3 mb-4">
                      <div className="d-flex align-items-center gap-3">
                        <div
                          className="dept-icon mb-0"
                          style={{
                            color: sub.accentColor || '#FF2A2A',
                            borderColor: sub.accentColor || '#FF2A2A',
                            background: '#F8FAFC',
                            width: '56px',
                            height: '56px',
                            fontSize: '24px',
                          }}
                        >
                          <i className={`bi ${sub.icon || 'bi-bounding-box'}`}></i>
                        </div>
                        <div>
                          <span className="badge-motorsport mb-1" style={{ fontSize: '11px' }}>Sub-Team 0{idx + 1}</span>
                          <h3 className="mb-0 font-orbitron" style={{ color: '#0F172A', fontWeight: 800 }}>{sub.title}</h3>
                        </div>
                      </div>
                      <span className="badge-motorsport" style={{ background: '#F8FAFC', color: '#0F172A', border: '1.5px solid #0F172A' }}>
                        {sub.badge}
                      </span>
                    </div>

                    {/* Role & Scope */}
                    <div className="p-3 rounded mb-4" style={{ background: '#F8FAFC', border: '1px solid #E2E8F0' }}>
                      <div className="small fw-bold text-uppercase mb-1" style={{ color: '#0F172A', letterSpacing: '0.5px' }}>
                        Role &amp; Scope:
                      </div>
                      <p className="small mb-0" style={{ color: '#334155', lineHeight: '1.6' }}>
                        {sub.role}
                      </p>
                    </div>

                    {/* Detailed Workflow Steps */}
                    <div className="mb-4">
                      <h5 className="font-orbitron mb-3" style={{ color: '#0F172A', fontSize: '15px' }}>
                        <i className="bi bi-diagram-3-fill me-2 text-danger"></i> Detailed Technical Workflow
                      </h5>
                      <div className="row g-3">
                        {(sub.workflow || []).map((w: any) => (
                          <div key={w.step} className="col-lg-6 col-12">
                            <div
                              className="p-3 h-100 rounded"
                              style={{
                                background: '#FFFFFF',
                                border: '1.5px solid #0F172A',
                                boxShadow: '2px 2px 0 #0F172A',
                              }}
                            >
                              <div className="d-flex align-items-center gap-2 mb-2">
                                <span
                                  className="d-inline-flex align-items-center justify-content-center rounded-circle fw-bold font-orbitron"
                                  style={{
                                    width: '24px',
                                    height: '24px',
                                    background: sub.accentColor || '#FF2A2A',
                                    color: '#FFFFFF',
                                    fontSize: '12px',
                                  }}
                                >
                                  {w.step}
                                </span>
                                <div className="fw-bold" style={{ color: '#0F172A', fontSize: '13.5px' }}>{w.name}</div>
                              </div>
                              <p className="small text-muted mb-0" style={{ lineHeight: '1.5' }}>
                                {w.desc}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Key Tools & Technologies */}
                    <div className="d-flex align-items-center gap-2 flex-wrap pt-2 border-top">
                      <span className="small fw-bold me-2" style={{ color: '#0F172A' }}>Key Systems &amp; Hardware:</span>
                      {(sub.tools || []).map((tool: string, tIdx: number) => (
                        <span
                          key={tIdx}
                          className="badge"
                          style={{
                            background: '#F8FAFC',
                            color: '#0F172A',
                            border: '1.5px solid #0F172A',
                            boxShadow: '1.5px 1.5px 0 #0F172A',
                            padding: '5px 10px',
                            fontWeight: '600',
                            fontSize: '11.5px',
                          }}
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Join Us CTA */}
          <div className="mt-5 text-center p-4 glass-panel" style={{ border: '2px solid #0F172A', boxShadow: '4px 4px 0 #0F172A' }}>
            <span className="badge-motorsport red mb-2">Recruitment Open</span>
            <h3 className="mb-2 font-orbitron" style={{ color: '#0F172A' }}>WANT TO JOIN ONE OF THESE SUB-TEAMS?</h3>
            <p className="text-muted max-w-700 mx-auto mb-4" style={{ maxWidth: '650px' }}>
              Batch 2k23 induction is officially live. Complete the registration portal to join the development of KILOFLIGHT PHOENIX.
            </p>
            <Link href="/join-us" className="custom-btn text-decoration-none">
              Apply for Batch 2k23 Induction
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
