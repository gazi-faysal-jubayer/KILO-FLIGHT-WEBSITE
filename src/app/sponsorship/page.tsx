import React from 'react';
import Link from 'next/link';
import SponsorshipCard, { SponsorshipTier } from '@/components/SponsorshipCard';
import PressPatternBackground from '@/components/PressPatternBackground';

export const metadata = {
  title: 'Sponsorship Packages | Team KILOFLIGHT KUET Formula Student',
  description: 'Official Corporate Sponsorship Proposal for 2026–2027 season. Partner with Team KILOFLIGHT at KUET.',
};

export default function SponsorshipPage() {
  const sponsorshipTiers: SponsorshipTier[] = [
    {
      id: 'title',
      title: 'Title Partner',
      tag: 'Exclusive (1 Slot)',
      price: '10.0',
      period: 'Lacs BDT / Season',
      currency: '৳',
      primaryColor: '#FF2A2A',
      secondaryColor: '#0F172A',
      accentColor: '#0284C7',
      stampText: 'FSAE Title Verified',
      description: 'Dominant global exposure with primary custom livery across the race car, chest logo on apparel, top website spotlight, dedicated pit branding, and exclusive priority recruitment.',
      logoCar: 'Primary / Custom Livery',
      logoApparel: 'Chest / Primary',
      websiteFeature: 'Top Header & Spotlight',
      eventPromotion: 'Dedicated Pit Branding',
      socialCampaign: 'Exclusive Video Series',
      exhibitionBooth: 'Exclusive Co-Host Lounge',
      recruitmentAccess: 'Exclusive Priority Access',
      features: [
        { text: 'Primary / Custom Livery on Race Car' },
        { text: 'Chest / Primary on Team Apparel & Kits' },
        { text: 'Top Header & Spotlight on Website' },
        { text: 'Dedicated Pit & International Branding' },
        { text: 'Exclusive Video Series & Social Media' },
        { text: 'Exclusive Priority Recruitment Pipeline' },
      ],
    },
    {
      id: 'platinum',
      title: 'Platinum Partner',
      tag: 'High Visibility',
      price: '7.0',
      period: 'Lacs BDT / Season',
      currency: '৳',
      primaryColor: '#0284C7',
      secondaryColor: '#0F172A',
      accentColor: '#B45309',
      stampText: 'Platinum Tier',
      description: 'Large prominent logo branding on multi-element wings & nose cone, upper sleeve / back apparel placement, featured partner section, and full roster recruitment access.',
      logoCar: 'Large (Wings / Nose)',
      logoApparel: 'Upper Sleeve / Back',
      websiteFeature: 'Featured Partner Section',
      eventPromotion: 'Pit & Banner Display',
      socialCampaign: 'Dedicated Reels / Posts',
      exhibitionBooth: 'Interactive Booth Space',
      recruitmentAccess: 'Full Roster Access',
      features: [
        { text: 'Large (Wings / Nose) Race Car Placement' },
        { text: 'Upper Sleeve / Back on Team Kits' },
        { text: 'Featured Partner Section on Website' },
        { text: 'Pit & Banner Display at Competitions' },
        { text: 'Dedicated Social Media Reels & Posts' },
        { text: 'Full Roster Recruitment Access' },
      ],
    },
    {
      id: 'gold',
      title: 'Gold Partner',
      tag: 'Most Popular',
      price: '4.0',
      period: 'Lacs BDT / Season',
      currency: '৳',
      primaryColor: '#B45309',
      secondaryColor: '#0F172A',
      accentColor: '#FF2A2A',
      stampText: 'Gold Partner',
      description: 'Medium logo placement on aerodynamic sidepods, mid-sleeve apparel branding, dedicated website logo & link, and exhibition booth display space.',
      logoCar: 'Medium (Sidepods)',
      logoApparel: 'Mid Sleeve',
      websiteFeature: 'Dedicated Logo & Link',
      eventPromotion: 'Banner Inclusion',
      socialCampaign: 'Dedicated Posts',
      exhibitionBooth: 'Display Space',
      recruitmentAccess: 'Access Upon Request',
      features: [
        { text: 'Medium (Sidepods) Race Car Placement' },
        { text: 'Mid Sleeve on Team Apparel' },
        { text: 'Dedicated Logo & Link on Official Website' },
        { text: 'Banner Inclusion at International Events' },
        { text: 'Dedicated Social Media Feature Posts' },
        { text: 'Talent Access Upon Request' },
      ],
    },
    {
      id: 'silver',
      title: 'Silver Partner',
      tag: 'Technical Partner',
      price: '2.5',
      period: 'Lacs BDT / Season',
      currency: '৳',
      primaryColor: '#64748B',
      secondaryColor: '#0F172A',
      accentColor: '#0284C7',
      stampText: 'Silver Supplier',
      description: 'Small logo branding on chassis, standard team apparel placement, official website directory listing, and exhibition banner inclusion.',
      logoCar: 'Small (Chassis)',
      logoApparel: 'Standard Placement',
      websiteFeature: 'Logo Placement',
      eventPromotion: 'Banner Inclusion',
      socialCampaign: 'Brand Shout-outs',
      exhibitionBooth: 'Display Space',
      recruitmentAccess: '—',
      features: [
        { text: 'Small (Chassis) Race Car Placement' },
        { text: 'Standard Placement on Team Apparel' },
        { text: 'Official Logo Placement on Website' },
        { text: 'Banner Inclusion at Events & AutoFest' },
        { text: 'Brand Shout-outs on Social Channels' },
      ],
    },
    {
      id: 'bronze',
      title: 'Bronze Partner',
      tag: 'Supporting Partner',
      price: '1.5',
      period: 'Lacs BDT / Season',
      currency: '৳',
      primaryColor: '#D97706',
      secondaryColor: '#0F172A',
      accentColor: '#64748B',
      stampText: 'Bronze Support',
      description: 'Standard decal on vehicle, team kit listing, website logo placement, and official social media mention supporting student innovation.',
      logoCar: 'Standard Decal',
      logoApparel: 'Standard Placement',
      websiteFeature: 'Logo Placement',
      eventPromotion: '—',
      socialCampaign: 'General Mention',
      exhibitionBooth: '—',
      recruitmentAccess: '—',
      features: [
        { text: 'Standard Decal on Race Car' },
        { text: 'Standard Placement on Team Apparel' },
        { text: 'Logo Placement on Official Website' },
        { text: 'General Social Media Mention' },
      ],
    },
  ];

  return (
    <>
      {/* Header */}
      <section className="page-header-section" style={{ background: 'radial-gradient(circle at top, rgba(255, 42, 42, 0.08) 0%, var(--dark-bg) 100%)' }}>
        <div className="container mx-auto px-4 text-center">
          <span className="badge-motorsport red mb-2">Corporate Partnership</span>
          <h1 className="mb-3 font-orbitron" style={{ color: '#0F172A', fontWeight: 900 }}>PARTNER WITH TEAM KILOFLIGHT</h1>
          <p className="text-muted max-w-700 mx-auto" style={{ maxWidth: '800px' }}>
            Empower Bangladesh&apos;s pioneering Formula Student team from KUET as we represent the nation at FSAE Dynamix India 2027 and European circuits with KILOFLIGHT PHOENIX.
          </p>
        </div>
      </section>

      {/* Why Sponsor Section */}
      <section className="section-padding py-5">
        <div className="container mx-auto px-4">
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="glass-panel p-4 h-100 text-center">
                <div
                  className="dept-icon mx-auto"
                  style={{
                    color: 'var(--primary-red)',
                    borderColor: 'var(--primary-red)',
                    background: 'rgba(255,42,42,0.1)',
                  }}
                >
                  <i className="bi bi-globe-americas"></i>
                </div>
                <h4 className="mb-2 font-orbitron" style={{ color: '#0F172A', fontWeight: 800 }}>Global Brand Exposure</h4>
                <p className="small text-muted mb-0">
                  Feature your brand on international Formula Student tracks across India, Japan, and the UK, alongside massive national press coverage and live automotive exhibitions.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="glass-panel p-4 h-100 text-center">
                <div
                  className="dept-icon mx-auto"
                  style={{
                    color: 'var(--cyan-telemetry)',
                    borderColor: 'var(--cyan-telemetry)',
                    background: 'rgba(2,132,199,0.1)',
                  }}
                >
                  <i className="bi bi-people-fill"></i>
                </div>
                <h4 className="mb-2 font-orbitron" style={{ color: '#0F172A', fontWeight: 800 }}>Direct Engineering Recruitment</h4>
                <p className="small text-muted mb-0">
                  Gain exclusive priority access to recruit top graduating KUET engineers with verified hands-on expertise in FEA, CFD, CAD-CAM, ICE tuning, and wire harnesses.
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
                  <th scope="col" style={{ width: '15.6%', background: '#0F172A' }}>
                    <div style={{ color: '#FF6B6B', fontWeight: 800 }}>Title Partner</div>
                    <span className="small font-normal" style={{ color: '#CBD5E1' }}>(10.0 Lacs BDT)</span>
                  </th>
                  <th scope="col" style={{ width: '15.6%' }}>
                    <div style={{ color: '#FFFFFF', fontWeight: 800 }}>Platinum Partner</div>
                    <span className="small font-normal" style={{ color: '#CBD5E1' }}>(7.0 Lacs BDT)</span>
                  </th>
                  <th scope="col" style={{ width: '15.6%' }}>
                    <div style={{ color: '#FFFFFF', fontWeight: 800 }}>Gold Partner</div>
                    <span className="small font-normal" style={{ color: '#CBD5E1' }}>(4.0 Lacs BDT)</span>
                  </th>
                  <th scope="col" style={{ width: '15.6%' }}>
                    <div style={{ color: '#FFFFFF', fontWeight: 800 }}>Silver Partner</div>
                    <span className="small font-normal" style={{ color: '#CBD5E1' }}>(2.5 Lacs BDT)</span>
                  </th>
                  <th scope="col" style={{ width: '15.6%' }}>
                    <div style={{ color: '#FFFFFF', fontWeight: 800 }}>Bronze Partner</div>
                    <span className="small font-normal" style={{ color: '#CBD5E1' }}>(1.5 Lacs BDT)</span>
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
