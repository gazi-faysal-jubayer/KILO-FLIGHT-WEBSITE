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
      style={{ background: 'rgba(0, 0, 0, 0.8)', zIndex: 1050, backdropFilter: 'blur(8px)' }}
      onClick={onClose}
    >
      <div
        className="glass-panel p-4 p-md-5 max-w-700 w-100 position-relative"
        style={{ maxWidth: '750px', maxHeight: '90vh', overflowY: 'auto', background: '#0B101C', border: '1px solid rgba(0, 229, 255, 0.3)' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="d-flex justify-content-between align-items-center pb-3 mb-3 border-bottom border-secondary">
          <h5 className="modal-title text-white mb-0">
            <i className="bi bi-file-earmark-spreadsheet-fill text-success me-2"></i> How Non-Tech Members Can Edit the Team Directory
          </h5>
          <button onClick={onClose} className="btn text-white p-0 border-0 fs-4" aria-label="Close">
            &times;
          </button>
        </div>

        <div>
          <p className="text-muted small">
            All team details, photos, and roles are stored in a Google Sheet. Any team member with edit permissions can update it without touching any code!
          </p>

          <h6 className="text-cyan mb-2">1. Google Sheet Column Headers (Row 1):</h6>
          <div className="table-responsive mb-3">
            <table className="table table-sm table-dark text-center small border border-secondary">
              <thead>
                <tr className="text-warning">
                  <th>Name</th>
                  <th>Role</th>
                  <th>Category</th>
                  <th>Department</th>
                  <th>Season</th>
                  <th>Image_URL</th>
                  <th>LinkedIn</th>
                  <th>Bio</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Full Name</td>
                  <td>e.g. Aero Lead</td>
                  <td>Advisor / Captain / Lead / Member / Alumni</td>
                  <td>e.g. Mechanical Eng. &apos;22</td>
                  <td>e.g. 2026</td>
                  <td>Google Drive or Web URL</td>
                  <td>Profile Link</td>
                  <td>Short description</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h6 className="text-cyan mb-2">2. Allowed Values for Category Column:</h6>
          <ul className="small text-muted mb-3">
            <li><strong className="text-white">Advisor</strong>: Faculty Advisors & Mentors</li>
            <li><strong className="text-white">Captain</strong>: Team Captains & Technical Directors</li>
            <li><strong className="text-white">Lead</strong>: Sub-team Leads (Aerodynamics, Powertrain, Chassis, Electronics, Business)</li>
            <li><strong className="text-white">Member</strong>: Student Engineers</li>
            <li><strong className="text-white">Alumni</strong>: Graduated members & Founders</li>
          </ul>

          <h6 className="text-cyan mb-2">3. Google Drive Image Link Support:</h6>
          <p className="small text-muted mb-4">
            You can paste standard Google Drive image share links directly. The website automatically formats them for display!
          </p>

          <div className="text-end">
            <button onClick={onClose} className="custom-btn-outline py-2 px-4">
              Got it!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
