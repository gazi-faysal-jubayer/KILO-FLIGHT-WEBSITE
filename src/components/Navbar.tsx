'use client';

import {
  Navbar as ResizableNavbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from '@/components/ui/resizable-navbar';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  if (pathname?.startsWith('/admin')) {
    return null;
  }

  const navItems = [
    { name: 'Home', link: '/' },
    { name: 'Our Team', link: '/team' },
    { name: 'Sub-Teams & Workflow', link: '/subteams' },
    { name: 'The Cars', link: '/cars' },
    { name: 'Sponsorship', link: '/sponsorship' },
  ];

  return (
    <ResizableNavbar>
      {/* Desktop Navigation with dynamic scroll resize */}
      <NavBody>
        <NavbarLogo />
        <NavItems items={navItems} pathname={pathname} />
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', zIndex: 30 }}>
          <NavbarButton href="/join-us" variant="primary">
            Join Team
          </NavbarButton>
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navItems.map((item, idx) => {
            const isActive = pathname === item.link;
            return (
              <Link
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-decoration-none py-2 px-3 rounded-lg"
                style={{
                  color: isActive ? '#FF2A2A' : '#0F172A',
                  background: isActive ? 'rgba(255, 42, 42, 0.1)' : 'transparent',
                  fontFamily: 'var(--font-orbitron), sans-serif',
                  fontSize: '14px',
                  fontWeight: 700,
                  display: 'block',
                  width: '100%',
                }}
              >
                <span>{item.name}</span>
              </Link>
            );
          })}
          <div style={{ display: 'flex', width: '100%', flexDirection: 'column', gap: '8px', marginTop: '8px' }}>
            <NavbarButton
              href="/join-us"
              onClick={() => setIsMobileMenuOpen(false)}
              variant="primary"
              style={{ width: '100%', textAlign: 'center' }}
            >
              Join Team
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </ResizableNavbar>
  );
}
