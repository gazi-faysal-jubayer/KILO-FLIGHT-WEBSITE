'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function AdminOverviewPage() {
  const [stats, setStats] = useState({
    applicationsCount: 0,
    teamCount: 0,
    carsCount: 0,
    sponsorshipCount: 0,
    inquiriesCount: 0,
  });
  const [recentApps, setRecentApps] = useState<any[]>([]);
  const [recentInquiries, setRecentInquiries] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const [contentRes, appsRes, inqRes] = await fetch('/api/content')
          .then((r) => r.json())
          .then((content) =>
            Promise.all([
              Promise.resolve(content),
              fetch('/api/recruitment').then((r) => r.json()),
              fetch('/api/contact').then((r) => r.json()),
            ])
          );

        if (contentRes.success) {
          const cData = contentRes.data;
          setStats({
            applicationsCount: appsRes.data?.length || 0,
            teamCount: cData.team?.length || 0,
            carsCount: cData.cars?.length || 0,
            sponsorshipCount: cData.sponsorship?.length || 0,
            inquiriesCount: inqRes.data?.length || 0,
          });
          setRecentApps((appsRes.data || []).slice(0, 5));
          setRecentInquiries((inqRes.data || []).slice(0, 5));
        }
      } catch (err) {
        console.error('Error loading dashboard overview:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  if (loading) {
    return (
      <div className="p-4 text-center">
        <div className="spinner-border text-danger mb-2"></div>
        <div className="small fw-bold">Loading dashboard metrics...</div>
      </div>
    );
  }

  const metricCards = [
    {
      title: 'Batch 2k23 Applicants',
      value: stats.applicationsCount,
      icon: 'bi-person-badge-fill',
      color: '#FF2A2A',
      href: '/admin/recruitment',
      subtitle: 'Candidate registrations',
    },
    {
      title: 'Team Headcount',
      value: stats.teamCount,
      icon: 'bi-people-fill',
      color: '#0284C7',
      href: '/admin/team',
      subtitle: 'Engineers & leadership',
    },
    {
      title: 'Active Car Models',
      value: stats.carsCount,
      icon: 'bi-speedometer2',
      color: '#B45309',
      href: '/admin/cars',
      subtitle: 'Phoenix & Alpha specs',
    },
    {
      title: 'Sponsorship Packages',
      value: stats.sponsorshipCount,
      icon: 'bi-trophy-fill',
      color: '#0F172A',
      href: '/admin/sponsorship',
      subtitle: '5 tiers in Lacs BDT',
    },
    {
      title: 'Contact Inquiries',
      value: stats.inquiriesCount,
      icon: 'bi-envelope-paper-fill',
      color: '#DC2626',
      href: '/admin/inquiries',
      subtitle: 'Partner & media messages',
    },
  ];

  return (
    <div>
      {/* Page Header */}
      <div className="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-4">
        <div>
          <h2 className="mb-1 font-orbitron" style={{ color: '#0F172A', fontWeight: 900 }}>
            EXECUTIVE DASHBOARD OVERVIEW
          </h2>
          <p className="text-muted small mb-0">
            Real-time telemetry of website content, recruitment candidate submissions, and partner inquiries.
          </p>
        </div>
        <div className="d-flex gap-2">
          <Link href="/admin/settings" className="custom-btn-outline text-decoration-none">
            <i className="bi bi-sliders me-1"></i> Edit Hero &amp; Stats
          </Link>
          <Link href="/admin/recruitment" className="custom-btn text-decoration-none">
            <i className="bi bi-person-plus-fill me-1"></i> Review Applicants
          </Link>
        </div>
      </div>

      {/* Metric Cards Grid */}
      <div className="row g-3 mb-5">
        {metricCards.map((card, idx) => (
          <div key={idx} className="col-lg col-md-4 col-sm-6 col-12">
            <Link href={card.href} className="text-decoration-none">
              <div
                className="p-3 h-100 rounded"
                style={{
                  background: '#FFFFFF',
                  border: '2px solid #0F172A',
                  boxShadow: `3px 3px 0 ${card.color}`,
                  transition: 'transform 0.15s ease',
                }}
              >
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <span className="small fw-bold text-muted text-uppercase" style={{ fontSize: '11px' }}>
                    {card.title}
                  </span>
                  <i className={`bi ${card.icon} fs-5`} style={{ color: card.color }}></i>
                </div>
                <div className="fs-3 fw-bold font-orbitron mb-1" style={{ color: '#0F172A' }}>
                  {card.value}
                </div>
                <div className="small text-muted" style={{ fontSize: '11.5px' }}>
                  {card.subtitle}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Two-Column Feeds: Recent Applicants & Contact Inquiries */}
      <div className="row g-4">
        {/* Left Column: Recent Recruitment Applications */}
        <div className="col-lg-7 col-12">
          <div
            className="p-4 rounded h-100"
            style={{
              background: '#FFFFFF',
              border: '2px solid #0F172A',
              boxShadow: '4px 4px 0 #0F172A',
            }}
          >
            <div className="d-flex align-items-center justify-content-between mb-3 pb-2 border-bottom">
              <div>
                <h5 className="mb-0 font-orbitron" style={{ color: '#0F172A', fontWeight: 800, fontSize: '15px' }}>
                  <i className="bi bi-person-badge-fill text-danger me-2"></i> Recent Batch 2k23 Applicants
                </h5>
              </div>
              <Link href="/admin/recruitment" className="small text-danger fw-bold text-decoration-none">
                View All &rarr;
              </Link>
            </div>

            {recentApps.length === 0 ? (
              <p className="text-muted small mb-0 py-3 text-center">No applicants submitted yet.</p>
            ) : (
              <div className="table-responsive">
                <table className="table align-middle small mb-0">
                  <thead>
                    <tr style={{ background: '#F8FAFC' }}>
                      <th>Candidate</th>
                      <th>Roll &amp; Dept</th>
                      <th>Primary Sub-Team</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentApps.map((app) => (
                      <tr key={app.id}>
                        <td>
                          <div className="fw-bold" style={{ color: '#0F172A' }}>{app.fullName}</div>
                          <div className="small text-muted">{app.institutionalEmail}</div>
                        </td>
                        <td>
                          <span className="badge bg-light text-dark border">{app.rollNumber}</span>
                          <span className="ms-1 small text-muted">{app.department}</span>
                        </td>
                        <td className="small">{app.primarySubteam}</td>
                        <td>
                          <span
                            className="badge"
                            style={{
                              background:
                                app.status === 'Shortlisted'
                                  ? '#E0F2FE'
                                  : app.status === 'Accepted'
                                  ? '#DCFCE7'
                                  : '#FEE2E2',
                              color:
                                app.status === 'Shortlisted'
                                  ? '#0284C7'
                                  : app.status === 'Accepted'
                                  ? '#16A34A'
                                  : '#DC2626',
                              border: '1px solid currentColor',
                              fontWeight: 700,
                            }}
                          >
                            {app.status || 'Pending'}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Recent Contact Inquiries */}
        <div className="col-lg-5 col-12">
          <div
            className="p-4 rounded h-100"
            style={{
              background: '#FFFFFF',
              border: '2px solid #0F172A',
              boxShadow: '4px 4px 0 #0F172A',
            }}
          >
            <div className="d-flex align-items-center justify-content-between mb-3 pb-2 border-bottom">
              <div>
                <h5 className="mb-0 font-orbitron" style={{ color: '#0F172A', fontWeight: 800, fontSize: '15px' }}>
                  <i className="bi bi-envelope-paper-fill text-cyan me-2"></i> Recent Contact Messages
                </h5>
              </div>
              <Link href="/admin/inquiries" className="small text-cyan fw-bold text-decoration-none">
                View Inbox &rarr;
              </Link>
            </div>

            {recentInquiries.length === 0 ? (
              <p className="text-muted small mb-0 py-3 text-center">No messages in inbox.</p>
            ) : (
              <div className="d-flex flex-column gap-3">
                {recentInquiries.map((inq) => (
                  <div
                    key={inq.id}
                    className="p-3 rounded"
                    style={{ background: '#F8FAFC', border: '1px solid #E2E8F0' }}
                  >
                    <div className="d-flex align-items-center justify-content-between mb-1">
                      <div className="fw-bold small" style={{ color: '#0F172A' }}>{inq.fullName}</div>
                      <span className="badge bg-secondary" style={{ fontSize: '9.5px' }}>{inq.inquiryType}</span>
                    </div>
                    <div className="small text-muted mb-2">{inq.email}</div>
                    <p className="small text-truncate mb-0" style={{ color: '#334155' }}>
                      {inq.message}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
