import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container mx-auto px-4">
        <div className="row g-4">
          <div className="col-lg-4 col-md-6">
            <h4 className="text-white mb-3">TEAM KILO FLIGHT</h4>
            <p className="small text-muted">
              Khulna University of Engineering & Technology&apos;s official Formula Student team. Pioneering sustainable automotive composite engineering in Bangladesh since 2018.
            </p>
            <div className="d-flex gap-3 mt-3">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-cyan fs-5" aria-label="LinkedIn">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-cyan fs-5" aria-label="Facebook">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-cyan fs-5" aria-label="YouTube">
                <i className="bi bi-youtube"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-cyan fs-5" aria-label="Instagram">
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <h5 className="text-white mb-3">Quick Navigation</h5>
            <ul className="list-unstyled small">
              <li className="mb-2"><Link href="/" className="text-muted text-decoration-none">Home</Link></li>
              <li className="mb-2"><Link href="/team" className="text-muted text-decoration-none">Our Team & Alumni</Link></li>
              <li className="mb-2"><Link href="/subteams" className="text-muted text-decoration-none">Sub-Teams & Workflow</Link></li>
              <li className="mb-2"><Link href="/cars" className="text-muted text-decoration-none">The Cars & Evolution</Link></li>
              <li className="mb-2"><Link href="/sponsorship" className="text-muted text-decoration-none">Sponsorship Packages</Link></li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-12">
            <h5 className="text-white mb-3">Contact Information</h5>
            <p className="small text-muted mb-1">
              <i className="bi bi-envelope me-2 text-cyan"></i> teamkiloflight@kuet.ac.bd
            </p>
            <p className="small text-muted mb-1">
              <i className="bi bi-geo-alt me-2 text-danger"></i> Dept. of Mechanical Engineering, KUET Campus, Khulna-9203, Bangladesh
            </p>
            <p className="small text-muted">
              <i className="bi bi-globe me-2 text-warning"></i> www.kiloflight.com
            </p>
          </div>
        </div>

        <hr className="my-4" style={{ borderColor: 'rgba(255,255,255,0.08)' }} />
        
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start small text-muted">
            Copyright © {new Date().getFullYear()} Team Kilo Flight | KUET. All Rights Reserved.
          </div>
          <div className="col-md-6 text-center text-md-end small text-muted mt-2 mt-md-0">
            Designed for Formula Student Racing
          </div>
        </div>
      </div>
    </footer>
  );
}
