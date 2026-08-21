import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sponsorship Opportunities | Team Kilo Flight - KUET',
  description: 'Sponsor Team Kilo Flight - Corporate partnership opportunities, logo placement on Formula Student car, and recruitment access to top KUET engineers.',
};

export default function SponsorshipPage() {
  return (
    <>
      {/* Header */}
      <section className="section-padding py-5" style={{ background: 'radial-gradient(circle at top, rgba(212, 163, 89, 0.08) 0%, var(--dark-bg) 100%)' }}>
        <div className="container mx-auto px-4 text-center">
          <span className="badge-motorsport jute mb-2">Industry Partnerships</span>
          <h1 className="text-white mb-3">PARTNER WITH TEAM KILO FLIGHT</h1>
          <p className="text-muted max-w-700 mx-auto" style={{ maxWidth: '750px' }}>
            Support Bangladesh&apos;s pioneer Formula Student team, advance sustainable engineering, and connect directly with top engineering talent from Khulna University of Engineering & Technology (KUET).
          </p>
          <div className="mt-4">
            <Link href="/join-us" className="custom-btn me-2 text-decoration-none">
              Request Sponsor Packet
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Highlights */}
      <section className="section-padding py-5">
        <div className="container mx-auto px-4">
          <div className="row text-center mb-5">
            <div className="col-lg-8 mx-auto">
              <span className="badge-motorsport red mb-2">Return on Investment</span>
              <h2 className="mb-2">WHY SPONSOR TEAM KILO FLIGHT?</h2>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="glass-panel p-4 h-100 text-center">
                <div className="dept-icon mx-auto" style={{ color: 'var(--cyan-telemetry)', borderColor: 'var(--cyan-telemetry)', background: 'rgba(0,229,255,0.1)' }}>
                  <i className="bi bi-person-check"></i>
                </div>
                <h4 className="text-white mb-2">Direct Talent Recruitment</h4>
                <p className="small text-muted mb-0">
                  Get priority access to our resume database and interview top-tier KUET engineering graduates skilled in CAD, FEA, CFD, programming, and project management.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="glass-panel p-4 h-100 text-center">
                <div className="dept-icon mx-auto">
                  <i className="bi bi-megaphone"></i>
                </div>
                <h4 className="text-white mb-2">Global & Media Brand Exposure</h4>
                <p className="small text-muted mb-0">
                  Prominent logo branding on our Formula race car, team gear, global competition stages (Silverstone, Hockenheimring), and national TV & newspaper press coverage.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <div className="glass-panel p-4 h-100 text-center">
                <div className="dept-icon mx-auto" style={{ color: 'var(--jute-gold)', borderColor: 'var(--jute-gold)', background: 'rgba(212,163,89,0.1)' }}>
                  <i className="bi bi-leaf"></i>
                </div>
                <h4 className="text-white mb-2">CSR & Sustainable Innovation</h4>
                <p className="small text-muted mb-0">
                  Align your company with eco-friendly innovation, supporting Bangladesh&apos;s pioneer research into sustainable natural jute fiber composite engineering.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="section-padding py-5" style={{ background: 'rgba(6, 10, 18, 0.5)' }}>
        <div className="container mx-auto px-4">
          <div className="row text-center mb-5">
            <div className="col-lg-8 mx-auto">
              <span className="badge-motorsport jute mb-2">Partnership Tiers</span>
              <h2 className="mb-3">SPONSORSHIP PACKAGES</h2>
            </div>
          </div>

          <div className="row g-4">
            {/* Title */}
            <div className="col-lg-4 col-md-6">
              <div className="glass-panel p-4 h-100 d-flex flex-column justify-content-between">
                <div>
                  <span className="badge-motorsport red mb-3">Title Partner</span>
                  <h3 className="text-white mb-2">$15,000+</h3>
                  <p className="small text-muted mb-4">Maximum global visibility and exclusive industry access.</p>
                  <ul className="list-unstyled mb-4 small text-light">
                    <li className="mb-2"><i className="bi bi-check2 text-cyan me-2"></i> Prime Logo on Car Nose & Rear Wing</li>
                    <li className="mb-2"><i className="bi bi-check2 text-cyan me-2"></i> VIP Access to Pit Lane & Testing Days</li>
                    <li className="mb-2"><i className="bi bi-check2 text-cyan me-2"></i> Exclusive Recruitment & CV Database Access</li>
                    <li className="mb-2"><i className="bi bi-check2 text-cyan me-2"></i> Featured in National Media & TV Releases</li>
                  </ul>
                </div>
                <Link href="/join-us" className="custom-btn w-100 text-center text-decoration-none">
                  Partner With Us
                </Link>
              </div>
            </div>

            {/* Gold */}
            <div className="col-lg-4 col-md-6">
              <div className="glass-panel p-4 h-100 d-flex flex-column justify-content-between" style={{ borderColor: 'var(--yellow-accent)', boxShadow: '0 0 25px rgba(248, 203, 46, 0.12)' }}>
                <div>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <span className="badge-motorsport">Gold Partner</span>
                    <span className="badge bg-warning text-dark fw-bold">MOST POPULAR</span>
                  </div>
                  <h3 className="text-white mb-2">$10,000</h3>
                  <p className="small text-muted mb-4">High-impact brand exposure across all race events.</p>
                  <ul className="list-unstyled mb-4 small text-light">
                    <li className="mb-2"><i className="bi bi-check2 text-cyan me-2"></i> Logo on Car Sidepods & Driver Suits</li>
                    <li className="mb-2"><i className="bi bi-check2 text-cyan me-2"></i> Prominent Website & Social Media Features</li>
                    <li className="mb-2"><i className="bi bi-check2 text-cyan me-2"></i> Campus Recruitment Workshop Hosting</li>
                    <li className="mb-2"><i className="bi bi-check2 text-cyan me-2"></i> Access to Team Data & Project Showcase</li>
                  </ul>
                </div>
                <Link href="/join-us" className="custom-btn w-100 text-center text-decoration-none">
                  Become Gold Sponsor
                </Link>
              </div>
            </div>

            {/* Silver */}
            <div className="col-lg-4 col-md-12">
              <div className="glass-panel p-4 h-100 d-flex flex-column justify-content-between">
                <div>
                  <span className="badge-motorsport jute mb-3">Silver / Technical Partner</span>
                  <h3 className="text-white mb-2">$5,000 / In-Kind</h3>
                  <p className="small text-muted mb-4">Essential support through raw materials, tools, or software.</p>
                  <ul className="list-unstyled mb-4 small text-light">
                    <li className="mb-2"><i className="bi bi-check2 text-cyan me-2"></i> Logo on Car Rear & Team Apparel</li>
                    <li className="mb-2"><i className="bi bi-check2 text-cyan me-2"></i> Sponsor Grid Placement on Website</li>
                    <li className="mb-2"><i className="bi bi-check2 text-cyan me-2"></i> Social Media Announcement & Shoutouts</li>
                    <li className="mb-2"><i className="bi bi-check2 text-cyan me-2"></i> Invitation to Car Unveiling Event</li>
                  </ul>
                </div>
                <Link href="/join-us" className="custom-btn-outline w-100 text-center text-decoration-none">
                  Support Our Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
