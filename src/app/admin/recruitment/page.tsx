'use client';

import React, { useEffect, useState } from 'react';

export default function AdminRecruitmentPage() {
  const [applications, setApplications] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedApp, setSelectedApp] = useState<any | null>(null);
  const [statusUpdate, setStatusUpdate] = useState('');
  const [notesUpdate, setNotesUpdate] = useState('');
  const [saving, setSaving] = useState(false);

  const fetchApplications = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/recruitment?search=${encodeURIComponent(search)}&status=${statusFilter}`);
      const data = await res.json();
      if (data.success) {
        setApplications(data.data || []);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApplications();
  }, [search, statusFilter]);

  const handleOpenDetail = (app: any) => {
    setSelectedApp(app);
    setStatusUpdate(app.status || 'Pending Review');
    setNotesUpdate(app.reviewerNotes || '');
  };

  const handleSaveStatus = async () => {
    if (!selectedApp) return;
    setSaving(true);
    try {
      const res = await fetch('/api/recruitment', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: selectedApp.id,
          status: statusUpdate,
          reviewerNotes: notesUpdate,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setApplications((prev) =>
          prev.map((a) =>
            a.id === selectedApp.id ? { ...a, status: statusUpdate, reviewerNotes: notesUpdate } : a
          )
        );
        setSelectedApp({ ...selectedApp, status: statusUpdate, reviewerNotes: notesUpdate });
      }
    } catch (err) {
      alert('Failed to update status');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this applicant entry?')) return;
    try {
      const res = await fetch(`/api/recruitment?id=${id}`, { method: 'DELETE' });
      const data = await res.json();
      if (data.success) {
        setApplications((prev) => prev.filter((a) => a.id !== id));
        if (selectedApp?.id === id) setSelectedApp(null);
      }
    } catch (err) {
      alert('Delete failed');
    }
  };

  const handleExportCSV = () => {
    if (applications.length === 0) return;
    const headers = [
      'ID',
      'Full Name',
      'Roll Number',
      'Department',
      'Institutional Email',
      'WhatsApp Number',
      'Primary Subteam',
      'Secondary Subteam',
      'Software Skills',
      'Status',
      'Reviewer Notes',
      'Created At',
    ];

    const rows = applications.map((a) => [
      a.id,
      `"${a.fullName || ''}"`,
      `"${a.rollNumber || ''}"`,
      `"${a.department || ''}"`,
      `"${a.institutionalEmail || ''}"`,
      `"${a.whatsappNumber || ''}"`,
      `"${a.primarySubteam || ''}"`,
      `"${a.secondarySubteam || ''}"`,
      `"${(a.softwareSkills || []).join(', ')}"`,
      `"${a.status || ''}"`,
      `"${a.reviewerNotes || ''}"`,
      `"${a.createdAt || ''}"`,
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `kiloflight_2k23_applicants_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      {/* Page Header */}
      <div className="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-4">
        <div>
          <span className="badge-motorsport red mb-1">Recruitment Management</span>
          <h2 className="mb-1 font-orbitron" style={{ color: '#0F172A', fontWeight: 900 }}>
            BATCH 2K23 APPLICANTS
          </h2>
          <p className="text-muted small mb-0">
            Review, evaluate, and shortlist student engineer applications across all 6 sub-teams.
          </p>
        </div>
        <div className="d-flex gap-2 flex-wrap">
          <a
            href="https://docs.google.com/spreadsheets/d/11KIBktsbfgudDzLVVcw28Rbh-0C4itJszaEKVFt2D74/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="custom-btn-outline d-inline-flex align-items-center"
            style={{ background: '#FFFFFF', textDecoration: 'none' }}
          >
            <i className="bi bi-file-earmark-spreadsheet-fill text-success me-1"></i> Open Google Sheet
          </a>
          <button onClick={handleExportCSV} className="custom-btn-outline" style={{ background: '#FFFFFF' }}>
            <i className="bi bi-download me-1 text-primary"></i> Export CSV
          </button>
          <button onClick={fetchApplications} className="custom-btn">
            <i className="bi bi-arrow-clockwise me-1"></i> Refresh
          </button>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div
        className="p-3 mb-4 rounded"
        style={{
          background: '#FFFFFF',
          border: '2px solid #0F172A',
          boxShadow: '3px 3px 0 #0F172A',
        }}
      >
        <div className="row g-3 align-items-center">
          <div className="col-md-6 col-12">
            <div className="position-relative">
              <i
                className="bi bi-search position-absolute text-muted"
                style={{ left: '12px', top: '50%', transform: 'translateY(-50%)' }}
              ></i>
              <input
                type="text"
                className="neo-input w-100"
                style={{ paddingLeft: '36px' }}
                placeholder="Search by name, roll number, department, or email..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
          <div className="col-md-6 col-12 d-flex gap-2 justify-content-md-end flex-wrap">
            {['all', 'Pending Review', 'Shortlisted', 'Interviewed', 'Accepted', 'Rejected'].map((st) => (
              <button
                key={st}
                onClick={() => setStatusFilter(st)}
                className={`btn btn-sm ${statusFilter === st ? 'active' : ''}`}
                style={{
                  background: statusFilter === st ? '#0F172A' : '#F8FAFC',
                  color: statusFilter === st ? '#FFFFFF' : '#0F172A',
                  border: '1.5px solid #0F172A',
                  boxShadow: statusFilter === st ? '2px 2px 0 #FF2A2A' : '1px 1px 0 #0F172A',
                  fontWeight: 700,
                  fontSize: '11.5px',
                }}
              >
                {st === 'all' ? 'All Applicants' : st}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Applications Table */}
      <div
        className="rounded overflow-hidden"
        style={{
          background: '#FFFFFF',
          border: '2px solid #0F172A',
          boxShadow: '4px 4px 0 #0F172A',
        }}
      >
        {loading ? (
          <div className="p-5 text-center">
            <div className="spinner-border text-danger mb-2"></div>
            <div className="small fw-bold">Loading candidates...</div>
          </div>
        ) : applications.length === 0 ? (
          <div className="p-5 text-center">
            <i className="bi bi-inbox fs-1 text-muted mb-2 d-block"></i>
            <h5 className="font-orbitron" style={{ color: '#0F172A' }}>No Applications Found</h5>
            <p className="small text-muted mb-0">Try adjusting your search criteria or filter tabs.</p>
          </div>
        ) : (
          <div className="table-responsive">
            <table className="table align-middle mb-0">
              <thead style={{ background: '#F8FAFC', borderBottom: '2px solid #0F172A' }}>
                <tr className="small text-uppercase font-orbitron" style={{ fontSize: '11.5px' }}>
                  <th>Candidate</th>
                  <th>Roll &amp; Dept</th>
                  <th>Primary Preference</th>
                  <th>Secondary Preference</th>
                  <th>Skills</th>
                  <th>Status</th>
                  <th className="text-end">Actions</th>
                </tr>
              </thead>
              <tbody className="small">
                {applications.map((app) => (
                  <tr key={app.id}>
                    <td>
                      <div className="fw-bold" style={{ color: '#0F172A', fontSize: '13.5px' }}>{app.fullName}</div>
                      <div className="text-muted" style={{ fontSize: '11.5px' }}>{app.institutionalEmail}</div>
                      <div className="text-muted" style={{ fontSize: '11px' }}>
                        <i className="bi bi-whatsapp text-success me-1"></i> {app.whatsappNumber}
                      </div>
                    </td>
                    <td>
                      <span className="badge bg-dark text-white me-1 font-orbitron">{app.rollNumber}</span>
                      <span className="badge bg-light text-dark border">{app.department}</span>
                    </td>
                    <td>
                      <div className="fw-bold text-danger">{app.primarySubteam}</div>
                    </td>
                    <td>
                      <div className="text-muted">{app.secondarySubteam}</div>
                    </td>
                    <td>
                      <div className="d-flex gap-1 flex-wrap" style={{ maxWidth: '180px' }}>
                        {(app.softwareSkills || []).slice(0, 3).map((s: string, idx: number) => (
                          <span key={idx} className="badge bg-light text-dark border" style={{ fontSize: '10px' }}>
                            {s}
                          </span>
                        ))}
                        {(app.softwareSkills || []).length > 3 && (
                          <span className="badge bg-secondary" style={{ fontSize: '10px' }}>
                            +{(app.softwareSkills || []).length - 3}
                          </span>
                        )}
                      </div>
                    </td>
                    <td>
                      <span
                        className="badge"
                        style={{
                          background:
                            app.status === 'Accepted'
                              ? '#DCFCE7'
                              : app.status === 'Shortlisted'
                              ? '#E0F2FE'
                              : app.status === 'Rejected'
                              ? '#FEE2E2'
                              : '#FEF3C7',
                          color:
                            app.status === 'Accepted'
                              ? '#16A34A'
                              : app.status === 'Shortlisted'
                              ? '#0284C7'
                              : app.status === 'Rejected'
                              ? '#DC2626'
                              : '#B45309',
                          border: '1.5px solid currentColor',
                          fontWeight: 800,
                          fontSize: '11px',
                        }}
                      >
                        {app.status || 'Pending Review'}
                      </span>
                    </td>
                    <td className="text-end">
                      <button
                        onClick={() => handleOpenDetail(app)}
                        className="btn btn-sm me-1"
                        style={{
                          background: '#0F172A',
                          color: '#FFFFFF',
                          border: '1.5px solid #0F172A',
                          boxShadow: '1.5px 1.5px 0 #FF2A2A',
                          fontWeight: 700,
                          fontSize: '11px',
                        }}
                      >
                        <i className="bi bi-eye-fill me-1"></i> Review
                      </button>
                      <button
                        onClick={() => handleDelete(app.id)}
                        className="btn btn-sm btn-outline-danger"
                        title="Delete entry"
                        style={{ fontSize: '11px' }}
                      >
                        <i className="bi bi-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Detail & Evaluation Modal */}
      {selectedApp && (
        <div
          className="modal d-block"
          style={{ background: 'rgba(15, 23, 42, 0.7)', backdropFilter: 'blur(4px)', zIndex: 1100 }}
          onClick={() => setSelectedApp(null)}
        >
          <div
            className="modal-dialog modal-lg modal-dialog-centered"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="modal-content"
              style={{
                border: '3px solid #0F172A',
                boxShadow: '8px 8px 0 #FF2A2A',
                borderRadius: '16px',
              }}
            >
              <div className="modal-header bg-light border-bottom border-dark p-3">
                <div>
                  <span className="badge-motorsport red mb-1">Candidate Evaluation Form</span>
                  <h4 className="modal-title font-orbitron mb-0" style={{ color: '#0F172A', fontWeight: 900 }}>
                    {selectedApp.fullName}
                  </h4>
                </div>
                <button type="button" className="btn-close" onClick={() => setSelectedApp(null)}></button>
              </div>

              <div className="modal-body p-4" style={{ maxHeight: '70vh', overflowY: 'auto' }}>
                {/* Credentials Bar */}
                <div className="p-3 mb-4 rounded" style={{ background: '#F8FAFC', border: '1.5px solid #0F172A' }}>
                  <div className="row g-2">
                    <div className="col-sm-4">
                      <div className="small text-muted fw-bold">ROLL NUMBER</div>
                      <div className="fw-bold fs-6 font-orbitron" style={{ color: '#0F172A' }}>{selectedApp.rollNumber}</div>
                    </div>
                    <div className="col-sm-4">
                      <div className="small text-muted fw-bold">DEPARTMENT</div>
                      <div className="fw-bold fs-6" style={{ color: '#0F172A' }}>{selectedApp.department}</div>
                    </div>
                    <div className="col-sm-4">
                      <div className="small text-muted fw-bold">SUBMISSION DATE</div>
                      <div className="small text-muted">{new Date(selectedApp.createdAt).toLocaleString()}</div>
                    </div>
                    <div className="col-sm-6">
                      <div className="small text-muted fw-bold">INSTITUTIONAL EMAIL</div>
                      <div>
                        <a href={`mailto:${selectedApp.institutionalEmail}`} className="text-danger fw-bold text-decoration-none">
                          {selectedApp.institutionalEmail}
                        </a>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="small text-muted fw-bold">WHATSAPP / CONTACT</div>
                      <div className="fw-bold" style={{ color: '#0F172A' }}>{selectedApp.whatsappNumber}</div>
                    </div>
                  </div>
                </div>

                {/* Subteam Preferences */}
                <div className="row g-3 mb-4">
                  <div className="col-md-6">
                    <div className="p-3 rounded h-100" style={{ background: '#FEF2F2', border: '1.5px solid #DC2626' }}>
                      <div className="small fw-bold text-danger mb-1">1. PRIMARY SUB-TEAM PREFERENCE</div>
                      <div className="fw-bold font-orbitron" style={{ color: '#0F172A' }}>{selectedApp.primarySubteam}</div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="p-3 rounded h-100" style={{ background: '#F8FAFC', border: '1.5px solid #0F172A' }}>
                      <div className="small fw-bold text-muted mb-1">2. SECONDARY SUB-TEAM PREFERENCE</div>
                      <div className="fw-bold" style={{ color: '#0F172A' }}>{selectedApp.secondarySubteam}</div>
                    </div>
                  </div>
                </div>

                {/* Workshop Learnings Summary */}
                <div className="mb-4">
                  <div className="small fw-bold text-muted mb-1">WORKSHOP LEARNINGS SUMMARY</div>
                  <div className="p-3 rounded small" style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', lineHeight: '1.6' }}>
                    {selectedApp.workshopSummary || 'No summary provided.'}
                  </div>
                </div>

                {/* Technical Software Skills */}
                <div className="mb-4">
                  <div className="small fw-bold text-muted mb-2">TECHNICAL SOFTWARE &amp; PRACTICAL SKILLS</div>
                  <div className="d-flex gap-2 flex-wrap">
                    {(selectedApp.softwareSkills || []).map((s: string, idx: number) => (
                      <span
                        key={idx}
                        className="badge"
                        style={{
                          background: '#0F172A',
                          color: '#FFFFFF',
                          padding: '6px 12px',
                          fontSize: '12px',
                          border: '1.5px solid #0F172A',
                          boxShadow: '2px 2px 0 #FF2A2A',
                        }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Statement of Purpose */}
                <div className="mb-4">
                  <div className="small fw-bold text-muted mb-1">STATEMENT OF PURPOSE &amp; AVAILABILITY</div>
                  <div className="p-3 rounded small" style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', lineHeight: '1.6' }}>
                    {selectedApp.statementOfPurpose || 'No statement provided.'}
                  </div>
                </div>

                {/* Portfolio Link */}
                {selectedApp.portfolioLink && (
                  <div className="mb-4">
                    <div className="small fw-bold text-muted mb-1">PORTFOLIO / CV LINK</div>
                    <a
                      href={selectedApp.portfolioLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-outline-dark"
                    >
                      <i className="bi bi-box-arrow-up-right me-1"></i> Open Candidate Portfolio / Drive Link
                    </a>
                  </div>
                )}

                {/* Reviewer Action Section */}
                <div className="p-3 rounded" style={{ background: '#FEF3C7', border: '1.5px solid #D97706' }}>
                  <h6 className="font-orbitron fw-bold mb-3" style={{ color: '#B45309' }}>
                    <i className="bi bi-pencil-square me-1"></i> Executive Board Decision &amp; Notes
                  </h6>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="small fw-bold mb-1">APPLICATION STATUS</label>
                      <select
                        className="neo-input w-100"
                        value={statusUpdate}
                        onChange={(e) => setStatusUpdate(e.target.value)}
                      >
                        <option value="Pending Review">Pending Review</option>
                        <option value="Shortlisted">Shortlisted (Stage 2 Review)</option>
                        <option value="Interviewed">Interviewed (Stage 3 Interview)</option>
                        <option value="Accepted">Accepted / Induction Confirmed</option>
                        <option value="Rejected">Rejected</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <label className="small fw-bold mb-1">REVIEWER / INTERVIEW NOTES</label>
                      <input
                        type="text"
                        className="neo-input w-100"
                        placeholder="e.g. Strong SolidWorks score; call for Saturday interview."
                        value={notesUpdate}
                        onChange={(e) => setNotesUpdate(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="modal-footer bg-light border-top border-dark p-3 justify-content-between">
                <button
                  type="button"
                  className="btn btn-outline-danger btn-sm fw-bold"
                  onClick={() => handleDelete(selectedApp.id)}
                >
                  <i className="bi bi-trash me-1"></i> Delete Candidate
                </button>
                <div className="d-flex gap-2">
                  <button type="button" className="btn btn-secondary btn-sm" onClick={() => setSelectedApp(null)}>
                    Close
                  </button>
                  <button
                    type="button"
                    className="custom-btn btn-sm"
                    disabled={saving}
                    onClick={handleSaveStatus}
                  >
                    {saving ? 'Saving...' : 'Save Decision'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
