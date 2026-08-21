'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Our Team', href: '/team' },
    { name: 'Sub-Teams & Workflow', href: '/subteams' },
    { name: 'The Cars', href: '/cars' },
    { name: 'Sponsorship', href: '/sponsorship' },
  ];

  return (
    <header className="site-navbar">
      <div className="container mx-auto px-4 d-flex align-items-center justify-content-between py-3">
        {/* Brand Logo */}
        <Link href="/" className="d-flex align-items-center gap-2 text-decoration-none">
          <Image
            src="/images/logo.png"
            alt="Team Kilo Flight Logo"
            width={44}
            height={44}
            className="logo-img"
            priority
          />
          <div className="brand-text">
            KILO <span>FLIGHT</span>
          </div>
        </Link>

        {/* Mobile Toggle Button */}
        <div className="d-flex align-items-center gap-2 d-lg-none">
          <Link href="/join-us" className="custom-btn py-1 px-3" style={{ fontSize: '13px' }}>
            Join Us
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="btn text-white p-1 border-0"
            aria-label="Toggle Navigation"
          >
            <i className={`bi ${isOpen ? 'bi-x-lg' : 'bi-list'} fs-2`}></i>
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <nav className={`d-lg-flex align-items-center gap-2 ${isOpen ? 'd-block mt-3 w-100' : 'd-none'}`}>
          <ul className="d-flex flex-column flex-lg-row align-items-lg-center gap-1 list-unstyled mb-0 ms-auto">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href} className="my-1 my-lg-0">
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`nav-link-custom d-block ${isActive ? 'active' : ''}`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          <Link href="/join-us" className="custom-btn ms-lg-3 d-none d-lg-inline-flex">
            Join Team
          </Link>
        </nav>
      </div>
    </header>
  );
}
