'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';

interface AdminLayoutProps {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const isLoginPage = pathname === '/admin/login';

  useEffect(() => {
    if (isLoginPage) {
      setCheckingAuth(false);
      return;
    }

    const checkAuth = async () => {
      try {
        const res = await fetch('/api/auth');
        const data = await res.json();
        if (!data.authenticated) {
          router.push('/admin/login');
        } else {
          setIsAuthenticated(true);
        }
      } catch (err) {
        router.push('/admin/login');
      } finally {
        setCheckingAuth(false);
      }
    };

    checkAuth();
  }, [pathname, isLoginPage, router]);

  const handleLogout = async () => {
    await fetch('/api/auth', { method: 'DELETE' });
    router.push('/admin/login');
  };

  if (isLoginPage) {
    return <>{children}</>;
  }

  if (checkingAuth) {
    return (
      <div className="d-flex align-items-center justify-content-center vh-100" style={{ background: '#F4F6FB' }}>
        <div className="text-center">
          <div className="spinner-border text-danger mb-3" role="status"></div>
          <div className="font-orbitron fw-bold" style={{ color: '#0F172A' }}>
            VERIFYING KILOFLIGHT PIT WALL ACCESS...
          </div>
        </div>
      </div>
    );
  }

  const navLinks = [
    { href: '/admin', label: 'Overview & Stats', icon: 'bi-grid-1x2-fill' },
    { href: '/admin/recruitment', label: 'Recruitment (2k23)', icon: 'bi-person-badge-fill' },
    { href: '/admin/cars', label: 'Cars & Specs Matrix', icon: 'bi-speedometer2' },
    { href: '/admin/subteams', label: 'Sub-Teams & Workflows', icon: 'bi-diagram-3-fill' },
    { href: '/admin/sponsorship', label: 'Sponsorship Packages', icon: 'bi-trophy-fill' },
    { href: '/admin/achievements', label: 'Achievements Timeline', icon: 'bi-calendar-check-fill' },
    { href: '/admin/team', label: 'Team Leadership', icon: 'bi-people-fill' },
    { href: '/admin/inquiries', label: 'Contact Messages', icon: 'bi-envelope-paper-fill' },
    { href: '/admin/settings', label: 'Hero Stats & Settings', icon: 'bi-sliders' },
  ];

  return (
    <div className="admin-wrapper d-flex min-vh-100" style={{ background: '#F4F6FB' }}>
      {/* Admin Sidebar */}
      <aside
        className={`admin-sidebar p-3 d-flex flex-column ${sidebarOpen ? 'open' : ''}`}
        style={{
          width: '280px',
          background: '#FFFFFF',
          borderRight: '2.5px solid #0F172A',
          boxShadow: '4px 0 0 rgba(15, 23, 42, 0.05)',
          zIndex: 1050,
          position: 'fixed',
          top: 0,
          bottom: 0,
          left: 0,
          transition: 'transform 0.3s ease',
        }}
      >
        {/* Brand Header */}
        <div className="d-flex align-items-center justify-content-between pb-3 mb-3 border-bottom">
          <Link href="/admin" className="d-flex align-items-center gap-2 text-decoration-none">
            <Image
              src="/images/KILO FLIGHT - B.png"
              alt="Kilo Flight Admin"
              width={130}
              height={36}
              style={{ height: '36px', width: 'auto', objectFit: 'contain' }}
            />
            <span
              className="badge"
              style={{
                background: '#FF2A2A',
                color: '#FFFFFF',
                fontSize: '10px',
                fontWeight: 800,
                letterSpacing: '0.5px',
              }}
            >
              DASHBOARD
            </span>
          </Link>
          <button
            className="btn btn-sm d-lg-none"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close Sidebar"
          >
            <i className="bi bi-x-lg fs-5"></i>
          </button>
        </div>

        {/* Live Site Link Pill */}
        <div className="mb-3">
          <Link
            href="/"
            target="_blank"
            className="d-flex align-items-center justify-content-between p-2 rounded text-decoration-none"
            style={{
              background: '#F8FAFC',
              border: '1.5px solid #0F172A',
              boxShadow: '2px 2px 0 #0F172A',
              color: '#0F172A',
              fontSize: '12px',
              fontWeight: 700,
            }}
          >
            <span>
              <i className="bi bi-box-arrow-up-right me-2 text-danger"></i> View Live Website
            </span>
            <span className="badge bg-success" style={{ fontSize: '9px' }}>LIVE SYNC</span>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex-grow-1 overflow-y-auto pr-1">
          <div className="small fw-bold text-muted text-uppercase mb-2" style={{ fontSize: '11px', letterSpacing: '0.8px' }}>
            Content Management
          </div>
          <ul className="nav flex-column gap-1">
            {navLinks.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href} className="nav-item">
                  <Link
                    href={item.href}
                    onClick={() => setSidebarOpen(false)}
                    className="d-flex align-items-center gap-2 p-2 rounded text-decoration-none"
                    style={{
                      background: isActive ? '#0F172A' : 'transparent',
                      color: isActive ? '#FFFFFF' : '#334155',
                      border: isActive ? '1.5px solid #0F172A' : '1.5px solid transparent',
                      boxShadow: isActive ? '3px 3px 0 #FF2A2A' : 'none',
                      fontWeight: isActive ? 800 : 600,
                      fontSize: '13.5px',
                      transition: 'all 0.15s ease',
                    }}
                  >
                    <i
                      className={`bi ${item.icon}`}
                      style={{ color: isActive ? '#FF2A2A' : '#64748B', fontSize: '16px' }}
                    ></i>
                    <span>{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Footer with Logout */}
        <div className="pt-3 border-top mt-auto">
          <button
            onClick={handleLogout}
            className="w-100 d-flex align-items-center justify-content-center gap-2 p-2 rounded"
            style={{
              background: '#FEE2E2',
              color: '#DC2626',
              border: '1.5px solid #DC2626',
              boxShadow: '2px 2px 0 #DC2626',
              fontWeight: 800,
              fontSize: '13px',
              cursor: 'pointer',
            }}
          >
            <i className="bi bi-box-arrow-right"></i> Lock &amp; Logout
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div
        className="admin-main flex-grow-1"
        style={{
          marginLeft: '280px',
          width: 'calc(100% - 280px)',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Top Navbar */}
        <header
          className="admin-topbar p-3 d-flex align-items-center justify-content-between"
          style={{
            background: '#FFFFFF',
            borderBottom: '2px solid #0F172A',
            position: 'sticky',
            top: 0,
            zIndex: 1000,
          }}
        >
          <div className="d-flex align-items-center gap-3">
            <button
              className="btn btn-sm d-lg-none"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              aria-label="Toggle Navigation"
              style={{ border: '2px solid #0F172A', boxShadow: '2px 2px 0 #0F172A' }}
            >
              <i className="bi bi-list fs-5"></i>
            </button>
            <h5 className="mb-0 font-orbitron" style={{ color: '#0F172A', fontWeight: 800, fontSize: '16px' }}>
              PIT WALL CONTROL CENTER
            </h5>
          </div>

          <div className="d-flex align-items-center gap-2">
            <span
              className="badge d-none d-md-inline-block"
              style={{
                background: '#F8FAFC',
                color: '#0F172A',
                border: '1.5px solid #0F172A',
                boxShadow: '2px 2px 0 #0F172A',
                padding: '6px 12px',
                fontWeight: 700,
                fontSize: '12px',
              }}
            >
              <i className="bi bi-shield-lock-fill text-success me-1"></i> Admin Authorized
            </span>
          </div>
        </header>

        {/* Dynamic Page Content */}
        <main className="p-4 flex-grow-1">{children}</main>
      </div>
    </div>
  );
}
