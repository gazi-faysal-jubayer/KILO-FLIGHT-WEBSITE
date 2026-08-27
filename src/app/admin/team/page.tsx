'use client';

import React, { useEffect, useState } from 'react';

export default function AdminTeamPage() {
  const [team, setTeam] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [editingMember, setEditingMember] = useState<any | null>(null);
  const [successMsg, setSuccessMsg] = useState('');

  const fetchTeam = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/team');
      const data = await res.json();
      if (data.success) {
        setTeam(data.data || []);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTeam();
  }, []);

  const handleSaveMember = async () => {
    if (!editingMember) return;
    setSaving(true);
    setSuccessMsg('');

    try {
      let updatedList = [];
      const exists = team.some((m) => m.id === editingMember.id);
      if (exists) {
        updatedList = team.map((m) => (m.id === editingMember.id ? editingMember : m));
      } else {
        updatedList = [...team, editingMember];
      }

      const res = await fetch('/api/admin/team', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedList),
      });

      const data = await res.json();
      if (data.success) {
        setTeam(updatedList);
        setEditingMember(null);
        setSuccessMsg('Team member saved successfully!');
        setTimeout(() => setSuccessMsg(''), 4000);
      }
    } catch (err) {
      alert('Failed to save team member');
    } finally {
      setSaving(false);
    }
  };

  const handleDeleteMember = async (id: string) => {
    if (!confirm('Are you sure you want to delete this team member?')) return;
    try {
      const updatedList = team.filter((m) => m.id !== id);
      const res = await fetch('/api/admin/team', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedList),
      });
      if (res.ok) {
        setTeam(updatedList);
      }
    } catch (err) {
      alert('Delete failed');
    }
  };

  const handleCreateNew = () => {
    setEditingMember({
      id: `member-${Date.now()}`,
      name: '',
      role: 'Sub-Team Engineer',
      category: 'member',
      department: 'Mechanical Eng., KUET',
      season: '2026 2027',
      phone: '+880 1XXXXXXXXX',
      email: 'engineer@stud.kuet.ac.bd',
      image: '/images/team/joecalih-UmTZqmMvQcw-unsplash.jpg',
      linkedin: 'https://linkedin.com',
      bio: 'Formula Student engineer contributing to KILOFLIGHT PHOENIX.',
    });
  };

  return (
    <div>
      {/* Page Header */}
      <div className="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-4">
        <div>
          <span className="badge-motorsport red mb-1">Human Resources &amp; Leadership</span>
          <h2 className="mb-1 font-orbitron" style={{ color: '#0F172A', fontWeight: 900 }}>
            TEAM DIRECTORY &amp; LEADERSHIP
          </h2>
          <p className="text-muted small mb-0">
            Manage executive officers, faculty advisors, sub-team leads, and active student members.
          </p>
        </div>
        <button onClick={handleCreateNew} className="custom-btn">
          <i className="bi bi-person-plus-fill me-1"></i> Add Team Member
        </button>
      </div>

      {successMsg && (
        <div
          className="alert p-3 mb-4 rounded d-flex align-items-center gap-2 fw-bold"
          style={{ background: '#DCFCE7', color: '#16A34A', border: '1.5px solid #16A34A' }}
        >
          <i className="bi bi-check-circle-fill fs-5"></i>
          <span>{successMsg}</span>
        </div>
      )}

      {/* Team Table */}
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
            <div className="small fw-bold">Loading team members...</div>
          </div>
        ) : (
          <div className="table-responsive">
            <table className="table align-middle mb-0">
              <thead style={{ background: '#F8FAFC', borderBottom: '2px solid #0F172A' }}>
                <tr className="small text-uppercase font-orbitron" style={{ fontSize: '11.5px' }}>
                  <th>Member</th>
                  <th>Role &amp; Category</th>
                  <th>Department</th>
                  <th>Direct Contact</th>
                  <th>Seasons</th>
                  <th className="text-end">Actions</th>
                </tr>
              </thead>
              <tbody className="small">
                {team.map((m) => (
                  <tr key={m.id}>
                    <td>
                      <div className="fw-bold" style={{ color: '#0F172A', fontSize: '13.5px' }}>{m.name}</div>
                      <div className="text-muted small text-truncate" style={{ maxWidth: '240px' }}>{m.bio}</div>
                    </td>
                    <td>
                      <span className="badge bg-danger me-1 font-orbitron">{m.role}</span>
                      <span className="badge bg-light text-dark border">{m.category}</span>
                    </td>
                    <td>{m.department}</td>
                    <td>
                      {m.phone && <div className="fw-bold text-dark">{m.phone}</div>}
                      {m.email && <div className="small text-muted">{m.email}</div>}
                    </td>
                    <td>
                      <span className="badge bg-secondary">{m.season}</span>
                    </td>
                    <td className="text-end">
                      <button
                        onClick={() => setEditingMember(m)}
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
                        <i className="bi bi-pencil-fill me-1"></i> Edit
                      </button>
                      <button
                        onClick={() => handleDeleteMember(m.id)}
                        className="btn btn-sm btn-outline-danger"
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

      {/* Edit Member Modal */}
      {editingMember && (
        <div
          className="modal d-block"
          style={{ background: 'rgba(15, 23, 42, 0.7)', backdropFilter: 'blur(4px)', zIndex: 1100 }}
          onClick={() => setEditingMember(null)}
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
                <h4 className="modal-title font-orbitron mb-0" style={{ color: '#0F172A', fontWeight: 900 }}>
                  <i className="bi bi-person-fill text-danger me-2"></i> Edit Member Profile
                </h4>
                <button type="button" className="btn-close" onClick={() => setEditingMember(null)}></button>
              </div>

              <div className="modal-body p-4">
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="small fw-bold mb-1">FULL NAME *</label>
                    <input
                      type="text"
                      className="neo-input w-100"
                      value={editingMember.name}
                      onChange={(e) => setEditingMember({ ...editingMember, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="small fw-bold mb-1">OFFICIAL ROLE TITLE *</label>
                    <input
                      type="text"
                      className="neo-input w-100"
                      value={editingMember.role}
                      onChange={(e) => setEditingMember({ ...editingMember, role: e.target.value })}
                      required
                    />
                  </div>

                  <div className="col-md-4">
                    <label className="small fw-bold mb-1">CATEGORY</label>
                    <select
                      className="neo-input w-100"
                      value={editingMember.category}
                      onChange={(e) => setEditingMember({ ...editingMember, category: e.target.value })}
                    >
                      <option value="captain">Executive Captain</option>
                      <option value="lead">Sub-Team Lead</option>
                      <option value="advisor">Faculty Advisor</option>
                      <option value="member">Core Member</option>
                      <option value="alumni">Alumni / Former Lead</option>
                    </select>
                  </div>
                  <div className="col-md-4">
                    <label className="small fw-bold mb-1">DEPARTMENT</label>
                    <input
                      type="text"
                      className="neo-input w-100"
                      value={editingMember.department}
                      onChange={(e) => setEditingMember({ ...editingMember, department: e.target.value })}
                    />
                  </div>
                  <div className="col-md-4">
                    <label className="small fw-bold mb-1">SEASON(S) (e.g. 2026 2027 all)</label>
                    <input
                      type="text"
                      className="neo-input w-100"
                      value={editingMember.season}
                      onChange={(e) => setEditingMember({ ...editingMember, season: e.target.value })}
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="small fw-bold mb-1">PHONE NUMBER</label>
                    <input
                      type="text"
                      className="neo-input w-100"
                      value={editingMember.phone}
                      onChange={(e) => setEditingMember({ ...editingMember, phone: e.target.value })}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="small fw-bold mb-1">EMAIL ADDRESS</label>
                    <input
                      type="email"
                      className="neo-input w-100"
                      value={editingMember.email}
                      onChange={(e) => setEditingMember({ ...editingMember, email: e.target.value })}
                    />
                  </div>

                  <div className="col-12">
                    <label className="small fw-bold mb-1">LINKEDIN PROFILE URL</label>
                    <input
                      type="url"
                      className="neo-input w-100"
                      value={editingMember.linkedin}
                      onChange={(e) => setEditingMember({ ...editingMember, linkedin: e.target.value })}
                    />
                  </div>

                  <div className="col-12">
                    <label className="small fw-bold mb-1">BIOGRAPHY &amp; RESPONSIBILITIES</label>
                    <textarea
                      className="neo-input w-100"
                      rows={3}
                      value={editingMember.bio}
                      onChange={(e) => setEditingMember({ ...editingMember, bio: e.target.value })}
                    ></textarea>
                  </div>
                </div>
              </div>

              <div className="modal-footer bg-light border-top border-dark p-3">
                <button type="button" className="btn btn-secondary btn-sm" onClick={() => setEditingMember(null)}>
                  Cancel
                </button>
                <button
                  type="button"
                  className="custom-btn btn-sm"
                  disabled={saving}
                  onClick={handleSaveMember}
                >
                  {saving ? 'Saving...' : 'Save Profile'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
