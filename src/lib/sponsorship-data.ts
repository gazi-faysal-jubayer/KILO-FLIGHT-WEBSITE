import type { SponsorshipTier } from '@/components/SponsorshipCard';

/*
  Sponsorship content for the 2026–2027 season.
  Source: "Project Proposal — Dynamix 2027 India" (Team KILOFLIGHT sponsorship proposal PDF).
  Keep the `sponsorship` seed in src/lib/db.ts in sync with SPONSORSHIP_TIERS.
*/

export const SPONSORSHIP_TIERS: SponsorshipTier[] = [
  {
    id: 'title',
    title: 'Title Partner',
    tag: 'Exclusive · 1 Slot',
    price: '7.0',
    period: 'Lacs BDT / Season',
    currency: '৳',
    primaryColor: '#FF2A2A',
    secondaryColor: '#0F172A',
    accentColor: '#0284C7',
    stampText: 'Title Partner',
    description:
      'Name the car. Full brand-colour livery, prime placement on the front and sidepods, chest & back on every team kit, and the headline spot across every channel we own.',
    logoCar: 'Prime Placement (Largest, Front / Sidepods)',
    logoApparel: 'Chest & Back (Maximum Visibility)',
    websiteFeature: 'Homepage Banner & Dedicated Bio Page',
    eventPromotion: 'Co-Branded Team Banner',
    socialCampaign: 'Dedicated Monthly Campaigns & Pinned Posts',
    exhibitionBooth: 'Keynote Speaker / Chief Guest',
    recruitmentAccess: '3 Days / Year for Company Events',
    features: [
      { text: 'Themed car livery in your full brand colours' },
      { text: 'Prime logo placement — largest, front & sidepods' },
      { text: 'Chest & back logo on all team apparel' },
      { text: 'Homepage banner & dedicated bio page' },
      { text: 'Monthly dedicated campaigns & pinned posts' },
      { text: 'Keynote / Chief Guest at car launch & events' },
      { text: 'Team & car for your company events — 3 days / year' },
    ],
  },
  {
    id: 'platinum',
    title: 'Platinum Partner',
    tag: 'High Visibility',
    price: '5.0',
    period: 'Lacs BDT / Season',
    currency: '৳',
    primaryColor: '#0284C7',
    secondaryColor: '#0F172A',
    accentColor: '#B45309',
    stampText: 'Platinum Tier',
    description:
      'Premium roll-hoop branding, sleeve placement on team kits, top-tier website feature and bi-monthly dedicated campaigns, with VIP stage recognition at launch events.',
    logoCar: 'Premium Placement (Large, Roll Hoop)',
    logoApparel: 'Sleeves (High Visibility)',
    websiteFeature: 'Top-Tier Supporter (Large Logo)',
    eventPromotion: 'Premium Logo on Banner',
    socialCampaign: 'Bi-Monthly Dedicated Posts',
    exhibitionBooth: 'VIP Seating & Stage Recognition',
    recruitmentAccess: '1 Day / Year for Company Events',
    features: [
      { text: 'Premium logo on the roll hoop (large)' },
      { text: 'Sleeve logo on team apparel' },
      { text: 'Top-tier supporter — large logo on website' },
      { text: 'Premium logo on international competition banner' },
      { text: 'Bi-monthly dedicated social posts' },
      { text: 'VIP seating & stage recognition at launch' },
      { text: 'Team & car for your company events — 1 day / year' },
    ],
  },
  {
    id: 'gold',
    title: 'Gold Partner',
    tag: 'Most Popular',
    price: '3.5',
    period: 'Lacs BDT / Season',
    currency: '৳',
    primaryColor: '#B45309',
    secondaryColor: '#0F172A',
    accentColor: '#FF2A2A',
    stampText: 'Gold Partner',
    description:
      'Standard medium placement on the car, shoulder branding on apparel, mid-tier website logo, quarterly shout-outs and a featured section in our monthly newsletter.',
    logoCar: 'Standard Placement (Medium)',
    logoApparel: 'Shoulders (Medium Visibility)',
    websiteFeature: 'Mid-Tier Supporter (Standard Logo)',
    eventPromotion: 'Standard Logo on Banner',
    socialCampaign: 'Quarterly Shout-outs',
    exhibitionBooth: 'Special Mention',
    recruitmentAccess: '—',
    features: [
      { text: 'Standard (medium) logo on the race car' },
      { text: 'Shoulder logo on team apparel' },
      { text: 'Mid-tier supporter logo on website' },
      { text: 'Standard logo on competition banner' },
      { text: 'Quarterly social shout-outs' },
      { text: 'Featured section in monthly newsletter' },
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
    stampText: 'Silver Partner',
    description:
      'Minor logo placement on the car, shared back space on team kits, website listing with logo, competition banner presence and group sponsor posts.',
    logoCar: 'Minor Placement (Small)',
    logoApparel: 'Shared Back Space',
    websiteFeature: 'Listed Sponsor (Small Logo)',
    eventPromotion: 'Small Logo on Banner',
    socialCampaign: 'Group Sponsor Post',
    exhibitionBooth: 'General Invite',
    recruitmentAccess: '—',
    features: [
      { text: 'Minor (small) logo on the race car' },
      { text: 'Shared back space on team apparel' },
      { text: 'Listed sponsor with small logo on website' },
      { text: 'Small logo on competition banner' },
      { text: 'Group sponsor social post' },
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
    description:
      'A shared decal on the race car, name listing on our website and a mention in competition press releases — the entry point to backing Bangladesh on the global stage.',
    logoCar: 'Shared Decal (Smallest)',
    logoApparel: '—',
    websiteFeature: 'Name Listing (No Logo)',
    eventPromotion: 'Mention in Press Release',
    socialCampaign: '—',
    exhibitionBooth: '—',
    recruitmentAccess: '—',
    features: [
      { text: 'Shared decal on the race car' },
      { text: 'Name listing on the team website' },
      { text: 'Mention in international press release' },
    ],
  },
];

/** Feature-by-tier matrix, proposal p.14. Cell order follows SPONSORSHIP_TIERS. */
export const BENEFIT_MATRIX: { feature: string; icon: string; values: string[] }[] = [
  { feature: 'Logo on Car', icon: 'bi-car-front-fill', values: ['Prime Placement (Largest, Front / Sidepods)', 'Premium Placement (Large, Roll Hoop)', 'Standard Placement (Medium)', 'Minor Placement (Small)', 'Shared Decal (Smallest)'] },
  { feature: 'Logo on Apparel', icon: 'bi-person-badge-fill', values: ['Chest & Back (Maximum Visibility)', 'Sleeves (High Visibility)', 'Shoulders (Medium Visibility)', 'Shared Back Space', '—'] },
  { feature: 'Team Website', icon: 'bi-globe2', values: ['Homepage Banner & Dedicated Bio Page', 'Top-Tier Supporter (Large Logo)', 'Mid-Tier Supporter (Standard Logo)', 'Listed Sponsor (Small Logo)', 'Name Listing (No Logo)'] },
  { feature: 'Int. Competitions', icon: 'bi-flag-fill', values: ['Co-Branded Team Banner', 'Premium Logo on Banner', 'Standard Logo on Banner', 'Small Logo on Banner', 'Mention in Press Release'] },
  { feature: 'Social Media', icon: 'bi-megaphone-fill', values: ['Dedicated Monthly Campaigns & Pinned Posts', 'Bi-Monthly Dedicated Posts', 'Quarterly Shoutouts', 'Group Sponsor Post', '—'] },
  { feature: 'Events & Launch', icon: 'bi-mic-fill', values: ['Keynote Speaker / Chief Guest', 'VIP Seating & Stage Recognition', 'Special Mention', 'General Invite', '—'] },
  { feature: 'Posters & Banners', icon: 'bi-easel2-fill', values: ['Main Visual Focus', 'Secondary Prominence', 'Standard Logo', '—', '—'] },
  { feature: 'Monthly Newsletter', icon: 'bi-envelope-paper-fill', values: ['Headline Banner (Top of Email)', 'Featured Section', 'Logo Inclusion', 'Text Mention', '—'] },
  { feature: 'Merch & Ad Campaigns', icon: 'bi-bag-heart-fill', values: ['Exclusive Co-branding on Premium Merch', 'Distributed at Major Events', 'Distributed at Local Events', '—', '—'] },
  { feature: 'Team / Car Availability', icon: 'bi-calendar-event-fill', values: ['3 Days / Year for Company Events', '1 Day / Year for Company Events', '—', '—', '—'] },
  { feature: 'Themed Car Livery', icon: 'bi-palette-fill', values: ['Full Brand Color Integration', '—', '—', '—', '—'] },
];

export interface CurrentSponsor {
  id: string;
  name: string;
  role: string;
  blurb: string;
  logo: string;
  url: string;
  brandColor: string;
}

export const CURRENT_SPONSORS: CurrentSponsor[] = [
  {
    id: 'cfmoto',
    name: 'CF MOTO',
    role: 'Official Powertrain Sponsor',
    blurb: 'Powering KILOFLIGHT PHOENIX with the CFMoto 300SR engine — the heart of our 2027 combustion race car.',
    logo: '/images/sponsors/cfmoto.svg',
    url: 'https://www.cfmoto.com',
    brandColor: '#0099D8',
  },
  {
    id: 'ansys',
    name: 'Ansys',
    role: 'Official Software Partner',
    blurb: 'FEA and CFD simulation behind our chassis, aerodynamics and jute-composite structural validation.',
    logo: '/images/sponsors/ansys.svg',
    url: 'https://www.ansys.com',
    brandColor: '#FFB71B',
  },
  {
    id: 'steadfast',
    name: 'Steadfast',
    role: 'Official Logistics Partner',
    blurb: 'Moving our team and race car to exhibitions and events — logistics partner since Bangladesh AutoFest 2026.',
    logo: '/images/sponsors/steadfast.svg',
    url: 'https://steadfast.com.bd',
    brandColor: '#00BF6F',
  },
];

/** Proposal p.5 — Why sponsor us. */
export const SPONSOR_ADVANTAGES = [
  { icon: 'bi-trophy-fill', color: '#FF2A2A', title: 'Proven Competitive Track Record', text: 'First Bangladeshi team to pass Mechanical Inspection at FSAE Japan 2023 and qualify for Formula Student Germany 2022.' },
  { icon: 'bi-broadcast-pin', color: '#0284C7', title: 'Brand Visibility & Recognition', text: 'Your logo on the car, kits, banners and channels at international Formula Student events.' },
  { icon: 'bi-people-fill', color: '#B45309', title: 'Access to Skilled Engineering Talent', text: '30 KUET engineers with hands-on experience in vehicle dynamics, CAD/CAE and manufacturing.' },
  { icon: 'bi-cpu-fill', color: '#2563EB', title: 'Association with Innovation & Technology', text: 'World-first jute-fibre composite bodywork and impact attenuator on a Formula Student car.' },
  { icon: 'bi-flag-fill', color: '#D97706', title: 'Contribution to National Engineering', text: 'Back Bangladesh’s debut in international dynamic events at FSAE Dynamix India 2027.' },
];

/** Proposal p.12 — how sponsor benefits are delivered. */
export const EXECUTION_DETAILS = [
  { icon: 'bi-person-badge', title: 'Apparel & Team Kit', text: 'Logo placement on team polo shirts, caps and IDs.' },
  { icon: 'bi-megaphone', title: 'Social Media Mentions', text: 'Dedicated sponsor spotlight posts & shout-outs on our channels.' },
  { icon: 'bi-printer', title: 'Print & Event Materials', text: 'Logo on team banners, posters and launch programmes.' },
  { icon: 'bi-building', title: 'Campus & Institutional Outreach', text: 'Brand representation at technical seminars and campus tours.' },
  { icon: 'bi-newspaper', title: 'International Media Coverage', text: 'Highlights in international competition reports and media features.' },
];

/** Proposal p.15–16 — value propositions. */
export const VALUE_PROPOSITIONS = [
  {
    icon: 'bi-mortarboard-fill',
    color: '#FF2A2A',
    title: 'Meet the engineers before they enter the industry',
    items: [
      'Direct interaction with high-performing engineering students',
      'Recruitment and internship opportunities',
      'Technical talks and career sessions',
      'Industry mentorship programmes',
      'Factory / office visits and technical workshops',
      'CV collection and early access to emerging talent',
    ],
  },
  {
    icon: 'bi-gear-wide-connected',
    color: '#0284C7',
    title: 'A real-world technical platform for your products',
    items: [
      'Product testing and demonstration',
      'Component / product integration on the race car',
      'Engineering software exposure',
      'Technical case studies',
      'Brand / product showcase at exhibitions',
      'Engineering consultation and knowledge exchange',
    ],
  },
];

/** Proposal p.10–11 — budget in BDT. */
export const BUDGET = {
  total: 1919000,
  car: {
    total: 1025000,
    items: [
      { label: 'Powertrain', amount: 370000, color: '#FF2A2A' },
      { label: 'Electrical', amount: 145000, color: '#0284C7' },
      { label: 'Suspension', amount: 120000, color: '#B45309' },
      { label: 'Brakes', amount: 120000, color: '#D97706' },
      { label: 'Chassis', amount: 80000, color: '#2563EB' },
      { label: 'Body & Aero', amount: 80000, color: '#16A34A' },
      { label: 'Steering', amount: 60000, color: '#7C3AED' },
      { label: 'Fasteners & Misc.', amount: 50000, color: '#64748B' },
    ],
  },
  competition: {
    total: 894000,
    items: [
      { label: 'Logistics & Travel', amount: 394000, color: '#0284C7' },
      { label: 'Vehicle Transportation', amount: 185000, color: '#FF2A2A' },
      { label: 'Registration Fee', amount: 125000, color: '#B45309' },
      { label: 'Bank Guarantee', amount: 100000, color: '#D97706' },
      { label: 'Customs & Hidden Costs', amount: 90000, color: '#64748B' },
    ],
  },
};

/** Proposal p.9 — plan of action. */
export const TIMELINE = [
  { phase: 'Phase 1', title: 'Competition Concept', date: 'December 2025', done: true },
  { phase: 'Phase 2', title: 'Initial Procurement', date: 'January 2026', done: true },
  { phase: 'Phase 3', title: 'Workshop & Manufacturing', date: 'April 2026', done: true },
  { phase: 'Phase 4', title: 'Project Completion', date: 'September 2026', done: true },
  { phase: 'Phase 5', title: 'FSAE Dynamix India 2027', date: '19–24 January 2027', done: false },
  { phase: 'Phase 6', title: 'Formula Student UK 2027', date: 'Date TBA', done: false },
];
