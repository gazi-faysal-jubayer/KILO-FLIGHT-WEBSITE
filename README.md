# Team Kilo Flight - Formula Student Next.js Web Application

A modern, high-performance web portal for **Team Kilo Flight**—Khulna University of Engineering & Technology's (KUET) pioneer Formula Student racing team.

Built with **Next.js (App Router)**, **TypeScript**, **React**, and real-time **Google Sheets Database Integration**.

---

## 🏎️ Features & Architecture

- **App Router Pages**:
  - `/` (Home): Restored video hero, technical specs showcase, live telemetry simulator, and FSAE competition events.
  - `/team` (Our Team): Live Google Sheets database integration, season tabs (2026 to 2018), role category dropdown, and instant live search.
  - `/subteams` (Sub-Teams & Workflow): 6-step engineering pipeline & technical deep dives for Aerodynamics, Chassis, Powertrain, Electronics, and Business.
  - `/cars` (The Cars): Vehicle evolution (Kilo Flight 1.0, Alpha, EV Concept) & specification comparison matrix.
  - `/sponsorship` (Sponsorship): Partner ROI, recruitment access benefits, and tier packages (Title, Gold, Silver/Technical).
  - `/join-us` (Recruitment Portal): Application portal for students and corporate partners.

- **Dynamic Google Sheets Integration**:
  - All team roster data, roles, departments, bios, and image links are managed via Google Sheets.
  - Non-technical team members can update the sheet directly without code changes.
  - Automatic Google Drive image link conversion.
  - Built-in resilient fallback dataset for zero-downtime offline support.
  - Full instructions in [`GOOGLE_SHEET_SETUP.md`](./GOOGLE_SHEET_SETUP.md).

- **Interactive Telemetry Simulator**:
  - Real-time React Canvas polar G-force chart, speedometer dial, RPM shift-light tachometer, lap timer, and 4 drive modes (*Pit Limiter*, *Eco Run*, *Qualifying Hot Lap*, *Rain Setup*).

---

## 📁 Ideal Next.js Project Structure

```
KILO-FLIGHT-WEBSITE/
├── src/
│   ├── app/
│   │   ├── layout.tsx                # Root layout with fonts, navigation, footer
│   │   ├── page.tsx                  # Home page
│   │   ├── team/page.tsx             # Team & Alumni directory
│   │   ├── subteams/page.tsx         # Subteams & 6-step workflow
│   │   ├── cars/page.tsx             # Car evolution & specs matrix
│   │   ├── sponsorship/page.tsx      # Sponsorship tiers & partner ROI
│   │   ├── join-us/page.tsx          # Recruitment & partner application
│   │   └── globals.css               # Dark motorsport design system & animations
│   ├── components/
│   │   ├── Navbar.tsx                # Glassmorphic responsive navbar
│   │   ├── Footer.tsx                # Motorsport footer with KUET info
│   │   ├── HeroVideo.tsx             # Original video hero with stat ticker
│   │   ├── TelemetrySimulator.tsx    # Real-time canvas telemetry engine
│   │   ├── TeamDirectory.tsx         # Live Google Sheets directory component
│   │   ├── CarSpecsTabs.tsx          # Interactive car specifications tabs
│   │   ├── FsaeEvents.tsx            # FSAE Static & Dynamic competition cards
│   │   └── SheetGuideModal.tsx       # In-app Google Sheet editing guide modal
│   ├── lib/
│   │   ├── google-sheets.ts          # Live Google Sheets GViz parser
│   │   └── fallback-data.ts          # Resilient default team dataset
│   └── types/
│       └── team.ts                   # TypeScript interfaces
├── public/
│   ├── images/                       # High-res Formula Student visuals & logos
│   └── video/                        # Hero trailer & videos
├── GOOGLE_SHEET_SETUP.md             # Non-tech guide for Google Sheets
├── package.json                      # Next.js & React dependencies
├── tsconfig.json                     # TypeScript configuration
└── next.config.mjs                   # Next.js configuration
```

---

## 🚀 Getting Started

### Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
```bash
npm run build
npm start
```
