import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container mx-auto px-4">
        <div className="row g-4 justify-content-between">
          {/* Brand & Mission */}
          <div className="col-lg-4 col-md-6">
            <div className="d-flex align-items-center gap-2 mb-3">
              <Image
                src="/images/logo.png"
                alt="Team Kilo Flight"
                width={140}
                height={40}
                style={{
                  height: '40px',
                  width: 'auto',
                  objectFit: 'contain',
                  filter:
                    'drop-shadow(1.5px 0 0 #0F172A) drop-shadow(-1.5px 0 0 #0F172A) drop-shadow(0 1.5px 0 #0F172A) drop-shadow(0 -1.5px 0 #0F172A) drop-shadow(1.5px 1.5px 0 #0F172A) drop-shadow(-1.5px -1.5px 0 #0F172A) drop-shadow(1.5px -1.5px 0 #0F172A) drop-shadow(-1.5px 1.5px 0 #0F172A) drop-shadow(2px 2px 4px rgba(0,0,0,0.25))',
                }}
              />
            </div>
            <p className="small text-muted mb-4" style={{ lineHeight: '1.6' }}>
              Khulna University of Engineering &amp; Technology&apos;s premier Formula Student automotive team. Pioneering sustainable natural jute composite aerodynamics and electric powertrain innovation in Bangladesh since 2018.
            </p>
            {/* Social Buttons */}
            <div className="d-flex gap-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="LinkedIn"
              >
                <i className="bi bi-linkedin"></i>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="Facebook"
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="YouTube"
              >
                <i className="bi bi-youtube"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="Instagram"
              >
                <i className="bi bi-instagram"></i>
              </a>
              <a
                href="https://github.com/gazi-faysal-jubayer"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="GitHub"
              >
                <i className="bi bi-github"></i>
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="col-lg-3 col-md-6">
            <h5 className="footer-heading mb-3">Quick Links</h5>
            <ul className="list-unstyled small footer-nav-list">
              <li className="mb-2">
                <Link href="/" className="footer-link">
                  <i className="bi bi-chevron-right me-1 text-danger"></i> Home
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/team" className="footer-link">
                  <i className="bi bi-chevron-right me-1 text-danger"></i> Our Team &amp; Directory
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/subteams" className="footer-link">
                  <i className="bi bi-chevron-right me-1 text-danger"></i> Sub-Teams &amp; Workflow
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/cars" className="footer-link">
                  <i className="bi bi-chevron-right me-1 text-danger"></i> The Cars &amp; Technical Specs
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/sponsorship" className="footer-link">
                  <i className="bi bi-chevron-right me-1 text-danger"></i> Sponsorship Packages
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/join-us" className="footer-link">
                  <i className="bi bi-chevron-right me-1 text-danger"></i> Join Team / Recruitment
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="col-lg-4 col-md-12">
            <h5 className="footer-heading mb-3">HQ &amp; Contact</h5>
            <div className="footer-contact-box p-3 rounded mb-3">
              <p className="small mb-2 d-flex align-items-center">
                <i className="bi bi-envelope-fill me-2 text-cyan"></i>
                <a href="mailto:teamkiloflight@kuet.ac.bd" className="text-decoration-none fw-bold" style={{ color: '#0F172A' }}>
                  teamkiloflight@kuet.ac.bd
                </a>
              </p>
              <p className="small mb-2 d-flex align-items-start text-muted">
                <i className="bi bi-geo-alt-fill me-2 text-danger flex-shrink-0 mt-1"></i>
                <span>Department of Mechanical Engineering, KUET Campus, Khulna-9203, Bangladesh</span>
              </p>
              <p className="small mb-0 d-flex align-items-center text-muted">
                <i className="bi bi-flag-fill me-2 text-warning"></i>
                <span>Formula Student UK &amp; Germany National Representative</span>
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-4 footer-divider" />

        {/* Bottom Bar with Credits */}
        <div className="row align-items-center justify-content-between g-3">
          <div className="col-lg-6 col-md-12 text-center text-lg-start small text-muted">
            Copyright &copy; {new Date().getFullYear()}{' '}
            <strong style={{ color: '#0F172A' }}>Team Kilo Flight</strong> | Khulna University of Engineering &amp; Technology (KUET). All Rights Reserved.
          </div>

          <div className="col-lg-6 col-md-12 text-center text-lg-end">
            <div className="d-inline-flex align-items-center gap-2 flex-wrap justify-content-center justify-content-lg-end">
              <span className="small text-muted">Designed &amp; Developed by</span>
              <a
                href="https://github.com/gazi-faysal-jubayer"
                target="_blank"
                rel="noopener noreferrer"
                className="developer-badge"
                title="Gazi Faysal Jubayer GitHub Profile"
              >
                <i className="bi bi-github"></i>
                <span>Gazi Faysal Jubayer</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
