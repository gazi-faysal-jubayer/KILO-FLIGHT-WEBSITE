import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import SponsorshipCard, { SponsorshipTier } from '@/components/SponsorshipCard';
import PressPatternBackground from '@/components/PressPatternBackground';

export const metadata: Metadata = {
  title: 'Corporate Sponsorship Packages | Team KILOFLIGHT - KUET',
  description: 'Partner with Team KILOFLIGHT (KUET) - 5 tier sponsorship packages (Title, Platinum, Gold, Silver, Bronze), race car branding, and direct engineering recruitment.',
};

export default function SponsorshipPage() {
  const sponsorshipTiers: SponsorshipTier[] = [
    {
      id: 'title',
      title: 'Title Partner',
      tag: 'Exclusive (1 Slot)',
      description:
        'Dominant global exposure with primary custom livery across the race car, chest logo on apparel, top website spotlight, dedicated pit branding, and exclusive priority recruitment.',
      price: '10.0',
      period: 'Lacs BDT / Season',
      currency: '৳',
      primaryColor: '#FF2A2A',
      secondaryColor: '#0F172A',
      accentColor: '#0284C7',
      stampText: 'FSAE Title Verified',
      buttonText: 'Partner as Title Sponsor',
      buttonLink: '/join-us',
      features: [
        {
          icon: <i className="bi bi-shield-shaded" style={{ fontSize: '15px' }}></i>,
          text: 'Primary / Custom Livery on Race Car',
        },
        {
          icon: <i className="bi bi-person-badge" style={{ fontSize: '15px' }}></i>,
          text: 'Chest / Primary on Team Apparel & Kits',
        },
        {
          icon: <i className="bi bi-globe" style={{ fontSize: '15px' }}></i>,
          text: 'Top Header & Spotlight on Website',
        },
        {
          icon: <i className="bi bi-flag" style={{ fontSize: '15px' }}></i>,
          text: 'Dedicated Pit & International Branding',
        },
        {
          icon: <i className="bi bi-camera-video" style={{ fontSize: '15px' }}></i>,
          text: 'Exclusive Video Series & Social Media',
        },
        {
          icon: <i className="bi bi-people" style={{ fontSize: '15px' }}></i>,
          text: 'Exclusive Priority Recruitment Pipeline',
        },
      ],
    },
    {
      id: 'platinum',
      title: 'Platinum Partner',
      tag: 'High Visibility',
      description:
        'Large prominent logo branding on multi-element wings & nose cone, upper sleeve / back apparel placement, featured partner section, and full roster recruitment access.',
      price: '7.0',
      period: 'Lacs BDT / Season',
      currency: '৳',
      primaryColor: '#0284C7',
      secondaryColor: '#0F172A',
      accentColor: '#B45309',
      stampText: 'Platinum Tier',
      buttonText: 'Partner as Platinum',
      buttonLink: '/join-us',
      features: [
        {
          icon: <i className="bi bi-airplane" style={{ fontSize: '15px' }}></i>,
          text: 'Large (Wings / Nose) Race Car Placement',
        },
        {
          icon: <i className="bi bi-person-lines-fill" style={{ fontSize: '15px' }}></i>,
          text: 'Upper Sleeve / Back on Team Kits',
        },
        {
          icon: <i className="bi bi-star-fill" style={{ fontSize: '15px' }}></i>,
          text: 'Featured Partner Section on Website',
        },
        {
          icon: <i className="bi bi-broadcast" style={{ fontSize: '15px' }}></i>,
          text: 'Pit & Banner Display at Competitions',
        },
        {
          icon: <i className="bi bi-play-btn" style={{ fontSize: '15px' }}></i>,
          text: 'Dedicated Social Media Reels & Posts',
        },
        {
          icon: <i className="bi bi-file-earmark-person" style={{ fontSize: '15px' }}></i>,
          text: 'Full Roster Recruitment Access',
        },
      ],
    },
    {
      id: 'gold',
      title: 'Gold Partner',
      tag: 'Most Popular',
      description:
        'Medium logo placement on aerodynamic sidepods, mid-sleeve apparel branding, dedicated website logo & link, and exhibition booth display space.',
      price: '4.0',
      period: 'Lacs BDT / Season',
      currency: '৳',
      primaryColor: '#B45309',
      secondaryColor: '#0F172A',
      accentColor: '#FF2A2A',
      stampText: 'Gold Partner',
      buttonText: 'Partner as Gold',
      buttonLink: '/join-us',
      features: [
        {
          icon: <i className="bi bi-bounding-box-circles" style={{ fontSize: '15px' }}></i>,
          text: 'Medium (Sidepods) Race Car Placement',
        },
        {
          icon: <i className="bi bi-tags" style={{ fontSize: '15px' }}></i>,
          text: 'Mid Sleeve on Team Apparel',
        },
        {
          icon: <i className="bi bi-link-45deg" style={{ fontSize: '15px' }}></i>,
          text: 'Dedicated Logo & Link on Official Website',
        },
        {
          icon: <i className="bi bi-signpost-2" style={{ fontSize: '15px' }}></i>,
          text: 'Banner Inclusion at International Events',
        },
        {
          icon: <i className="bi bi-share" style={{ fontSize: '15px' }}></i>,
          text: 'Dedicated Social Media Feature Posts',
        },
        {
          icon: <i className="bi bi-mortarboard" style={{ fontSize: '15px' }}></i>,
          text: 'Talent Access Upon Request',
        },
      ],
    },
    {
      id: 'silver',
      title: 'Silver Partner',
      tag: 'Technical Partner',
      description:
        'Small logo branding on chassis, standard team apparel placement, official website directory listing, and exhibition banner inclusion.',
      price: '2.5',
      period: 'Lacs BDT / Season',
      currency: '৳',
      primaryColor: '#64748B',
      secondaryColor: '#0F172A',
      accentColor: '#0284C7',
      stampText: 'Silver Supplier',
      buttonText: 'Partner as Silver',
      buttonLink: '/join-us',
      features: [
        {
          icon: <i className="bi bi-gear" style={{ fontSize: '15px' }}></i>,
          text: 'Small (Chassis) Race Car Placement',
        },
        {
          icon: <i className="bi bi-tag" style={{ fontSize: '15px' }}></i>,
          text: 'Standard Placement on Team Apparel',
        },
        {
          icon: <i className="bi bi-globe2" style={{ fontSize: '15px' }}></i>,
          text: 'Official Logo Placement on Website',
        },
        {
          icon: <i className="bi bi-card-text" style={{ fontSize: '15px' }}></i>,
          text: 'Banner Inclusion at Events & AutoFest',
        },
        {
          icon: <i className="bi bi-megaphone" style={{ fontSize: '15px' }}></i>,
          text: 'Brand Shout-outs on Social Channels',
        },
      ],
    },
    {
      id: 'bronze',
      title: 'Bronze Partner',
      tag: 'Supporting Partner',
      description:
        'Standard decal on vehicle, team kit listing, website logo placement, and official social media mention supporting student innovation.',
      price: '1.5',
      period: 'Lacs BDT / Season',
      currency: '৳',
      primaryColor: '#D97706',
      secondaryColor: '#0F172A',
      accentColor: '#64748B',
      stampText: 'Bronze Support',
      buttonText: 'Partner as Bronze',
      buttonLink: '/join-us',
      features: [
        {
          icon: <i className="bi bi-patch-check" style={{ fontSize: '15px' }}></i>,
          text: 'Standard Decal on Race Car',
        },
        {
          icon: <i className="bi bi-tag-fill" style={{ fontSize: '15px' }}></i>,
          text: 'Standard Placement on Team Apparel',
        },
        {
          icon: <i className="bi bi-laptop" style={{ fontSize: '15px' }}></i>,
          text: 'Logo Placement on Official Website',
        },
        {
          icon: <i className="bi bi-chat-square-quote" style={{ fontSize: '15px' }}></i>,
          text: 'General Social Media Mention',
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
          <span className="badge-motorsport jute mb-2">Corporate Partnerships</span>
          <h1 className="mb-3 font-orbitron" style={{ color: '#0F172A', fontWeight: 900, fontSize: 'clamp(28px, 4vw, 48px)' }}>
            PARTNER WITH TEAM KILOFLIGHT
          </h1>
          <p className="max-w-700 mx-auto" style={{ maxWidth: '800px', color: '#334155', fontWeight: 600 }}>
            Partnering with Team KILOFLIGHT directly connects your brand with elite engineering innovation, sustainable manufacturing leadership, and prominent visibility across national exhibitions (e.g. Bangladesh AutoFest) and international Formula Student stages (FSAE Dynamix India 2027 &amp; FSUK 2027).
          </p>
          <div className="mt-4">
            <Link href="/join-us" className="custom-btn me-2 text-decoration-none">
              Request Sponsor Packet &amp; Pitch Deck
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
              <h2 className="mb-2 font-orbitron" style={{ color: '#0F172A', fontWeight: 900 }}>WHY SPONSOR TEAM KILOFLIGHT?</h2>
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
                <h4 className="mb-2 font-orbitron" style={{ color: '#0F172A', fontWeight: 800 }}>Direct Talent Recruitment</h4>
                <p className="small text-muted mb-0">
                  Get priority access to our resume database and interview top-tier KUET engineering graduates skilled in SolidWorks CAD, ANSYS FEA/CFD, programming, kinematics, and project management.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="glass-panel p-4 h-100 text-center">
                <div className="dept-icon mx-auto">
                  <i className="bi bi-megaphone"></i>
                </div>
                <h4 className="mb-2 font-orbitron" style={{ color: '#0F172A', fontWeight: 800 }}>Global &amp; Media Exposure</h4>
                <p className="small text-muted mb-0">
                  Prominent logo branding on our Formula race car, team gear, international competition circuits (FSAE Dynamix India, Silverstone UK, FSAE Japan), and national exhibition stages (ALOKI Dhaka).
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
                <h4 className="mb-2 font-orbitron" style={{ color: '#0F172A', fontWeight: 800 }}>CSR &amp; Sustainable Bio-Composites</h4>
                <p className="small text-muted mb-0">
                  Align your company with eco-friendly innovation, championing Bangladesh&apos;s pioneering research into 7-layer natural jute fiber composite chassis and aerodynamic construction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Tiers - 5 Official Packages */}
      <section
        className="section-padding py-5 position-relative overflow-hidden"
        style={{
          borderTop: '1px solid rgba(15, 23, 42, 0.08)',
        }}
      >
        <PressPatternBackground />
        <div className="container mx-auto px-4 position-relative" style={{ zIndex: 2 }}>
          <div className="row text-center mb-5">
            <div className="col-lg-8 mx-auto">
              <span className="badge-motorsport jute mb-2">Partnership Tiers</span>
              <h2 className="mb-3 font-orbitron" style={{ color: '#0F172A', fontWeight: 900 }}>SPONSORSHIP PACKAGES (2026–2027)</h2>
              <p className="text-muted">
                Choose the tier that matches your corporate goals and support Bangladesh&apos;s premier student engineering team on the international stage.
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

      {/* Complete Deliverables Comparison Matrix */}
      <section className="section-padding py-5" style={{ background: 'rgba(2, 132, 199, 0.03)' }}>
        <div className="container mx-auto px-4">
          <div className="row text-center mb-4">
            <div className="col-lg-8 mx-auto">
              <span className="badge-motorsport red mb-2">Matrix Breakdown</span>
              <h2 className="mb-2 font-orbitron" style={{ color: '#0F172A', fontWeight: 900 }}>SPONSORSHIP DELIVERABLES &amp; BENEFITS</h2>
              <p className="text-muted">Complete breakdown of brand visibility, digital promotion, exhibition lounges, and recruitment pipeline access.</p>
            </div>
          </div>

          <div className="table-responsive">
            <table className="schedule-table table align-middle text-center w-100">
              <thead>
                <tr>
                  <th scope="col" className="text-start" style={{ width: '22%' }}>Sponsorship Deliverables &amp; Benefits</th>
                  <th scope="col" style={{ width: '15.6%', background: 'rgba(255, 42, 42, 0.08)' }}>
                    <div style={{ color: '#FF2A2A', fontWeight: 800 }}>Title Partner</div>
                    <span className="small text-muted fw-bold">(10.0 Lacs BDT)</span>
                  </th>
                  <th scope="col" style={{ width: '15.6%' }}>
                    <div style={{ color: '#0284C7', fontWeight: 800 }}>Platinum Partner</div>
                    <span className="small text-muted fw-bold">(7.0 Lacs BDT)</span>
                  </th>
                  <th scope="col" style={{ width: '15.6%' }}>
                    <div style={{ color: '#B45309', fontWeight: 800 }}>Gold Partner</div>
                    <span className="small text-muted fw-bold">(4.0 Lacs BDT)</span>
                  </th>
                  <th scope="col" style={{ width: '15.6%' }}>
                    <div style={{ color: '#475569', fontWeight: 800 }}>Silver Partner</div>
                    <span className="small text-muted fw-bold">(2.5 Lacs BDT)</span>
                  </th>
                  <th scope="col" style={{ width: '15.6%' }}>
                    <div style={{ color: '#D97706', fontWeight: 800 }}>Bronze Partner</div>
                    <span className="small text-muted fw-bold">(1.5 Lacs BDT)</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className="text-start fw-bold" style={{ color: '#0F172A' }}>Prominent Logo on Race Car</th>
                  <td className="fw-bold text-danger">Primary / Custom Livery</td>
                  <td className="fw-bold">Large (Wings / Nose)</td>
                  <td>Medium (Sidepods)</td>
                  <td>Small (Chassis)</td>
                  <td>Standard Decal</td>
                </tr>
                <tr>
                  <th scope="row" className="text-start fw-bold" style={{ color: '#0F172A' }}>Logo on Team Apparel &amp; Kits</th>
                  <td className="fw-bold text-danger">Chest / Primary</td>
                  <td className="fw-bold">Upper Sleeve / Back</td>
                  <td>Mid Sleeve</td>
                  <td>Standard Placement</td>
                  <td>Standard Placement</td>
                </tr>
                <tr>
                  <th scope="row" className="text-start fw-bold" style={{ color: '#0F172A' }}>Official Team Website Feature</th>
                  <td className="fw-bold text-danger">Top Header &amp; Spotlight</td>
                  <td className="fw-bold">Featured Partner Section</td>
                  <td>Dedicated Logo &amp; Link</td>
                  <td>Logo Placement</td>
                  <td>Logo Placement</td>
                </tr>
                <tr>
                  <th scope="row" className="text-start fw-bold" style={{ color: '#0F172A' }}>International Event Promotion</th>
                  <td className="fw-bold text-danger">Dedicated Pit Branding</td>
                  <td className="fw-bold">Pit &amp; Banner Display</td>
                  <td>Banner Inclusion</td>
                  <td>Banner Inclusion</td>
                  <td>&mdash;</td>
                </tr>
                <tr>
                  <th scope="row" className="text-start fw-bold" style={{ color: '#0F172A' }}>Social Media Spotlight Campaigns</th>
                  <td className="fw-bold text-danger">Exclusive Video Series</td>
                  <td className="fw-bold">Dedicated Reels / Posts</td>
                  <td>Dedicated Posts</td>
                  <td>Brand Shout-outs</td>
                  <td>General Mention</td>
                </tr>
                <tr>
                  <th scope="row" className="text-start fw-bold" style={{ color: '#0F172A' }}>Exhibition Booth &amp; Car Launch</th>
                  <td className="fw-bold text-danger">Exclusive Co-Host Lounge</td>
                  <td className="fw-bold">Interactive Booth Space</td>
                  <td>Display Space</td>
                  <td>Display Space</td>
                  <td>&mdash;</td>
                </tr>
                <tr>
                  <th scope="row" className="text-start fw-bold" style={{ color: '#0F172A' }}>Direct Recruitment Pipeline Access</th>
                  <td className="fw-bold text-danger">Exclusive Priority Access</td>
                  <td className="fw-bold">Full Roster Access</td>
                  <td>Access Upon Request</td>
                  <td>&mdash;</td>
                  <td>&mdash;</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
