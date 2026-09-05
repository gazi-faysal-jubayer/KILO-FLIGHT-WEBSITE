'use client';

import React from 'react';

interface SheetGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SheetGuideModal({ isOpen, onClose }: SheetGuideModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center px-3"
      style={{ background: 'rgba(15, 23, 42, 0.75)', zIndex: 1050, backdropFilter: 'blur(6px)' }}
      onClick={onClose}
    >
      <div
        className="p-4 p-md-5 w-100 rounded position-relative"
        style={{
          maxWidth: '780px',
          maxHeight: '90vh',
          overflowY: 'auto',
          background: '#FFFFFF',
          border: '2px solid #0F172A',
          boxShadow: '6px 6px 0 #0F172A',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="d-flex justify-content-between align-items-center pb-3 mb-3 border-bottom">
          <h5 className="font-orbitron mb-0" style={{ color: '#0F172A', fontWeight: 800 }}>
            <i className="bi bi-file-earmark-spreadsheet-fill text-success me-2"></i> Team Directory Google Sheet Guide
          </h5>
          <button
            onClick={onClose}
            className="btn p-0 border-0 fs-3 text-dark lh-1"
            aria-label="Close"
          >
            &times;
          </button>
        </div>

        <div>
          <div className="d-flex align-items-center justify-content-between p-3 rounded mb-4" style={{ background: '#F8FAFC', border: '1.5px solid #0F172A' }}>
            <div>
              <div className="fw-bold" style={{ color: '#0F172A' }}>Official Google Sheet</div>
              <div className="small text-muted font-monospace">11V8Craw4Q8c6PlKQUCCAFZIpw3sonxeDN4E5BTjj-hI</div>
            </div>
            <a
              href="https://docs.google.com/spreadsheets/d/11V8Craw4Q8c6PlKQUCCAFZIpw3sonxeDN4E5BTjj-hI/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="custom-btn text-decoration-none py-2 px-3 small"
            >
              Open in Google Sheets &rarr;
            </a>
          </div>

          <h6 className="font-orbitron mb-2" style={{ color: '#0F172A', fontWeight: 700 }}>
            1. Multi-Season Tabs Structure
          </h6>
          <p className="small text-muted mb-3">
            Each season has its own separate tab (e.g. <code>Season 2026</code>, <code>Season 2025</code>, <code>Season 2024</code>). The website automatically fetches and combines all season tabs in real-time.
          </p>

          <h6 className="font-orbitron mb-2" style={{ color: '#0F172A', fontWeight: 700 }}>
            2. Exact Column Headers (Row 1):
          </h6>
          <div className="table-responsive mb-4">
            <table className="table table-sm table-bordered text-center small align-middle">
              <thead style={{ background: '#0F172A', color: '#FFFFFF' }}>
                <tr>
                  <th>Name</th>
                  <th>Role</th>
                  <th>Department</th>
                  <th>Season</th>
                  <th>Image_URL</th>
                  <th>LinkedIn</th>
                  <th>Bio</th>
                  <th>Teacher?</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Full Name</td>
                  <td>Captain, Aero Lead, etc.</td>
                  <td>e.g. Mechanical Eng.</td>
                  <td>2026</td>
                  <td>Google Drive share link</td>
                  <td>LinkedIn profile URL</td>
                  <td>Short bio</td>
                  <td><strong className="text-danger">1</strong> = Teacher<br/><strong className="text-primary">0</strong> = Student</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h6 className="font-orbitron mb-2" style={{ color: '#0F172A', fontWeight: 700 }}>
            3. The &quot;Teacher?&quot; Column Rules:
          </h6>
          <ul className="small text-muted mb-4" style={{ lineHeight: '1.6' }}>
            <li>
              <strong>Teacher? = 1</strong>: Identifies Faculty Members, Department Mentors, and Moderators. Displays with a distinct golden mortarboard badge and faculty classification.
            </li>
            <li>
              <strong>Teacher? = 0</strong>: Identifies Student Engineers and Student Leads. Automatically classified into Captains, Leads, or General Crew depending on their title.
            </li>
          </ul>

          <h6 className="font-orbitron mb-2" style={{ color: '#0F172A', fontWeight: 700 }}>
            4. Google Drive Photo Links:
          </h6>
          <p className="small text-muted mb-4">
            Just paste any standard Google Drive share link (e.g. <code>https://drive.google.com/file/d/.../view</code>). Make sure the file access is set to <strong>&quot;Anyone with the link can view&quot;</strong>. The website converts it to high-speed CDN embeds automatically.
          </p>

          <div className="text-end">
            <button onClick={onClose} className="custom-btn py-2 px-4">
              Close Guide
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
