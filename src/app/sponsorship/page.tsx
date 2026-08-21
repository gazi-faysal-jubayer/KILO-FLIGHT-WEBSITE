import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import SponsorshipCard, { SponsorshipTier } from '@/components/SponsorshipCard';
import PressPatternBackground from '@/components/PressPatternBackground';

export const metadata: Metadata = {
  title: 'Sponsorship Opportunities | Team Kilo Flight - KUET',
  description: 'Sponsor Team Kilo Flight - Corporate partnership opportunities, logo placement on Formula Student car, and recruitment access to top KUET engineers.',
};

export default function SponsorshipPage() {
  const sponsorshipTiers: SponsorshipTier[] = [
    {
      id: 'title',
      title: 'Title Partner',
      tag: 'Exclusive (1 Slot)',
      description:
        'Dominant global exposure with front-and-center branding across the race car, team uniforms, pit garage, and global FSAE competition stages.',
      price: '15,000',
      period: 'per race season',
      currency: '$',
      primaryColor: '#FF2A2A',
      secondaryColor: '#060A12',
      accentColor: '#00E5FF',
      stampText: 'FSAE Title Verified',
      buttonText: 'Partner With Us',
      buttonLink: '/join-us',
      features: [
        {
          icon: (
            <svg viewBox="0 0 24 24" width="16" height="16">
              <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7A3,3 0 0,1 15,10A3,3 0 0,1 12,13A3,3 0 0,1 9,10A3,3 0 0,1 12,7M12,15C14.21,15 17,16.05 17,17.5V18H7V17.5C7,16.05 9.79,15 12,15Z" />
            </svg>
          ),
          text: 'Prime Nose & Rear Wing Branding',
        },
        {
          icon: (
            <svg viewBox="0 0 24 24" width="16" height="16">
              <path d="M18,18.5A1.5,1.5 0 0,1 16.5,17A1.5,1.5 0 0,1 18,15.5A1.5,1.5 0 0,1 19.5,17A1.5,1.5 0 0,1 18,18.5M19.5,9.5H17V12H21.46L19.5,9.5M6,18.5A1.5,1.5 0 0,1 4.5,17A1.5,1.5 0 0,1 6,15.5A1.5,1.5 0 0,1 7.5,17A1.5,1.5 0 0,1 6,18.5M20,8H17V4H5C3.89,4 3,4.89 3,6V17H4A3,3 0 0,0 7,20A3,3 0 0,0 10,17H14A3,3 0 0,0 17,20A3,3 0 0,0 20,17H21V12L20,8Z" />
            </svg>
          ),
          text: 'VIP Pit Lane & Track Days Access',
        },
        {
          icon: (
            <svg viewBox="0 0 24 24" width="16" height="16">
              <path d="M16,17V19H2V17S2,13 9,13C16,13 16,17 16,17M12.5,7.5A3.5,3.5 0 1,0 9,11A3.5,3.5 0 0,0 12.5,7.5M15.94,13A5.32,5.32 0 0,1 18,17V19H22V17S22,13.37 15.94,13M15,4A3.39,3.39 0 0,0 13.07,4.59A5,5 0 0,1 13.07,10.41A3.39,3.39 0 0,0 15,11A3.5,3.5 0 0,0 15,4Z" />
            </svg>
          ),
          text: 'Direct Priority Recruitment & CVs',
        },
        {
          icon: (
            <svg viewBox="0 0 24 24" width="16" height="16">
              <path d="M21,3H3C1.89,3 1,3.89 1,5V17A2,2 0 0,0 3,19H8V21H16V19H21A2,2 0 0,0 23,17V5C23,3.89 22.1,3 21,3M21,17H3V5H21V17M16,11L9,15V7L16,11Z" />
            </svg>
          ),
          text: 'National Media & Press Coverage',
        },
      ],
    },
    {
      id: 'gold',
      title: 'Gold Partner',
      tag: 'Most Popular',
      description:
        'High-impact motorsport visibility on aerodynamic sidepods, race suits, social media platforms, and on-campus career workshops at KUET.',
      price: '10,000',
      period: 'per race season',
      currency: '$',
      primaryColor: '#F8CB2E',
      secondaryColor: '#D00000',
      accentColor: '#FF2A2A',
      stampText: 'FS Gold Approved',
      buttonText: 'Become Gold Sponsor',
      buttonLink: '/join-us',
      features: [
        {
          icon: (
            <svg viewBox="0 0 24 24" width="16" height="16">
              <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8Z" />
            </svg>
          ),
          text: 'Sidepods & Driver Suits Placement',
        },
        {
          icon: (
            <svg viewBox="0 0 24 24" width="16" height="16">
              <path d="M12,18H6V14H12V18M21,14V18H15V14H21M12,8H6V12H12V8M21,8V12H15V8H21M12,2H6V6H12V2M21,2V6H15V2H21Z" />
            </svg>
          ),
          text: 'Social Media & Website Spotlights',
        },
        {
          icon: (
            <svg viewBox="0 0 24 24" width="16" height="16">
              <path d="M12,3L1,9L12,15L21,10.09V17H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z" />
            </svg>
          ),
          text: 'KUET Recruitment Workshop Hosting',
        },
        {
          icon: (
            <svg viewBox="0 0 24 24" width="16" height="16">
              <path d="M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,19H5V5H19V19M7,10H9V17H7V10M11,7H13V17H11V7M15,13H17V17H15V13Z" />
            </svg>
          ),
          text: 'Access to Technical Project Data',
        },
      ],
    },
    {
      id: 'silver',
      title: 'Silver Partner',
      tag: 'Technical / In-Kind',
      description:
        'Critical backing through engineering raw materials, CNC tooling, sensors, or composite resins with verified website and paddock recognition.',
      price: '5,000',
      period: 'or in-kind materials',
      currency: '$',
      primaryColor: '#00E5FF',
      secondaryColor: '#0A84FF',
      accentColor: '#D4A359',
      stampText: 'Official Supplier',
      buttonText: 'Support Our Team',
      buttonLink: '/join-us',
      features: [
        {
          icon: (
            <svg viewBox="0 0 24 24" width="16" height="16">
              <path d="M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z" />
            </svg>
          ),
          text: 'Rear Wing Endplate & Apparel Logo',
        },
        {
          icon: (
            <svg viewBox="0 0 24 24" width="16" height="16">
              <path d="M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M19,5H5V19H19V5M7,7H9V9H7V7M11,7H17V9H11V7M7,11H9V13H7V11M11,11H17V13H11V11M7,15H9V17H7V15M11,15H17V17H11V15Z" />
            </svg>
          ),
          text: 'Official Sponsor Grid Listing',
        },
        {
          icon: (
            <svg viewBox="0 0 24 24" width="16" height="16">
              <path d="M20,2H4A2,2 0 0,0 2,4V22L6,18H20A2,2 0 0,0 22,16V4A2,2 0 0,0 20,2M20,16H5.17L4,17.17V4H20V16Z" />
            </svg>
          ),
          text: 'Social Media Shoutouts & Recognition',
        },
        {
          icon: (
            <svg viewBox="0 0 24 24" width="16" height="16">
              <path d="M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1M17,12H12V17H17V12Z" />
            </svg>
          ),
          text: 'Invitation to Car Unveiling Event',
        },
      ],
    },
  ];

  return (
    <>
      {/* Header with 3D Printing Press Background */}
      <section
        className="page-header-section position-relative overflow-hidden"
        style={{
          minHeight: '440px',
          display: 'flex',
          alignItems: 'center',
          background: 'transparent',
        }}
      >
        <PressPatternBackground />
        <div className="container mx-auto px-4 text-center position-relative" style={{ zIndex: 2 }}>
          <span className="badge-motorsport jute mb-2">Industry Partnerships</span>
          <h1 className="mb-3" style={{ color: '#0F172A', fontWeight: 900, fontSize: 'clamp(28px, 4vw, 48px)' }}>
            PARTNER WITH TEAM KILO FLIGHT
          </h1>
          <p className="max-w-700 mx-auto" style={{ maxWidth: '750px', color: '#334155', fontWeight: 600 }}>
            Support Bangladesh&apos;s pioneer Formula Student team, advance sustainable engineering,
            and connect directly with top engineering talent from Khulna University of Engineering &
            Technology (KUET).
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
                <div
                  className="dept-icon mx-auto"
                  style={{
                    color: 'var(--cyan-telemetry)',
                    borderColor: 'var(--cyan-telemetry)',
                    background: 'rgba(0,229,255,0.1)',
                  }}
                >
                  <i className="bi bi-person-check"></i>
                </div>
                <h4 className="mb-2" style={{ color: '#0F172A', fontWeight: 800 }}>Direct Talent Recruitment</h4>
                <p className="small text-muted mb-0">
                  Get priority access to our resume database and interview top-tier KUET engineering
                  graduates skilled in CAD, FEA, CFD, programming, and project management.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="glass-panel p-4 h-100 text-center">
                <div className="dept-icon mx-auto">
                  <i className="bi bi-megaphone"></i>
                </div>
                <h4 className="mb-2" style={{ color: '#0F172A', fontWeight: 800 }}>Global & Media Brand Exposure</h4>
                <p className="small text-muted mb-0">
                  Prominent logo branding on our Formula race car, team gear, global competition
                  stages (Silverstone, Hockenheimring), and national TV & newspaper press coverage.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <div className="glass-panel p-4 h-100 text-center">
                <div
                  className="dept-icon mx-auto"
                  style={{
                    color: 'var(--jute-gold)',
                    borderColor: 'var(--jute-gold)',
                    background: 'rgba(212,163,89,0.1)',
                  }}
                >
                  <i className="bi bi-leaf"></i>
                </div>
                <h4 className="mb-2" style={{ color: '#0F172A', fontWeight: 800 }}>CSR & Sustainable Innovation</h4>
                <p className="small text-muted mb-0">
                  Align your company with eco-friendly innovation, supporting Bangladesh&apos;s
                  pioneer research into sustainable natural jute fiber composite engineering.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Tiers - Styled Cards with 3D Printing Press Backdrop */}
      <section
        className="section-padding py-5 position-relative overflow-hidden"
        style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        <PressPatternBackground />
        <div className="container mx-auto px-4 position-relative" style={{ zIndex: 2 }}>
          <div className="row text-center mb-5">
            <div className="col-lg-8 mx-auto">
              <span className="badge-motorsport jute mb-2">Partnership Tiers</span>
              <h2 className="mb-3">SPONSORSHIP PACKAGES</h2>
              <p className="text-muted">
                Choose the tier that matches your corporate goals and support student engineering
                excellence.
              </p>
            </div>
          </div>

          <div className="row g-4 justify-content-center">
            {sponsorshipTiers.map((tier) => (
              <div key={tier.id} className="col-lg-4 col-md-6 col-12 d-flex">
                <SponsorshipCard tier={tier} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
