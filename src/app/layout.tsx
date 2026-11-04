import type { Metadata } from 'next';
import './globals.css';
import './motion.css';
import '@/shaders/threeui.css';
import './theme.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SplashCursor from '@/components/SplashCursor';

export const metadata: Metadata = {
  title: 'Team Kilo Flight | Formula Student Racing - KUET',
  description: 'Team Kilo Flight is Khulna University of Engineering & Technology\'s (KUET) pioneer Formula Student team, engineering high-performance eco-composite race cars for global FSAE competitions.',
  icons: {
    icon: '/images/logo.ico',
    shortcut: '/images/logo.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-bs-theme="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700;900&family=Rajdhani:wght@500;600;700&family=Inter:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
        {/* Foldline type: Fraunces (SOFT/WONK) headings, DM Mono labels, Instrument Sans body */}
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Fraunces:ital,opsz,wght,SOFT,WONK@0,9..144,300..700,0..100,0..1;1,9..144,300..700,0..100,0..1&family=Instrument+Sans:wght@400..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>
        {/* Foldline's deckle (torn paper edge) filter, used by .paper surfaces in theme.css */}
        <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true" focusable="false">
          <filter id="deckle" x="-12%" y="-25%" width="124%" height="150%">
            <feTurbulence type="fractalNoise" baseFrequency="0.035 0.13" numOctaves="3" seed="12" result="t" />
            <feDisplacementMap in="SourceGraphic" in2="t" scale="6" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </svg>
        {/* Global Interactive Fluid Simulation Mouse Splash Cursor */}
        <SplashCursor
          SIM_RESOLUTION={128}
          DYE_RESOLUTION={1440}
          DENSITY_DISSIPATION={3.5}
          VELOCITY_DISSIPATION={2}
          PRESSURE={0.1}
          CURL={3}
          SPLAT_RADIUS={0.2}
          SPLAT_FORCE={6000}
          COLOR_UPDATE_SPEED={10}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
