'use client';

import React, { useEffect, useState } from 'react';

export default function AdminAchievementsPage() {
  const [achievements, setAchievements] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [editingItem, setEditingItem] = useState<any | null>(null);
  const [successMsg, setSuccessMsg] = useState('');

  const fetchAchievements = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/achievements');
      const data = await res.json();
      if (data.success) {
        setAchievements(data.data || []);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAchievements();
  }, []);

  const handleSaveItem = async () => {
    if (!editingItem) return;
    setSaving(true);
    setSuccessMsg('');

    try {
      let updatedList = [];
      const exists = achievements.some((a) => a.id === editingItem.id);
      if (exists) {
        updatedList = achievements.map((a) => (a.id === editingItem.id ? editingItem : a));
      } else {
        updatedList = [...achievements, editingItem];
      }

      const res = await fetch('/api/admin/achievements', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedList),
      });

      const data = await res.json();
      if (data.success) {
        setAchievements(updatedList);
        setEditingItem(null);
        setSuccessMsg('Achievements timeline updated successfully!');
        setTimeout(() => setSuccessMsg(''), 4000);
      }
    } catch (err) {
      alert('Failed to save achievement');
    } finally {
      setSaving(false);
    }
  };

  const handleDeleteItem = async (id: string) => {
    if (!confirm('Are you sure you want to delete this achievement milestone?')) return;
    try {
      const updatedList = achievements.filter((a) => a.id !== id);
      const res = await fetch('/api/admin/achievements', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedList),
      });
      if (res.ok) {
        setAchievements(updatedList);
      }
    } catch (err) {
      alert('Delete failed');
    }
  };

  const handleCreateNew = () => {
    setEditingItem({
      id: `ach-${Date.now()}`,
      year: '2027',
      competition: 'Formula Student International',
      category: 'Combustion & EV Prototype',
      badge: 'Podium Competitor',
      badgeColor: 'red',
      headline: 'New international milestone representation for Bangladesh.',
      details: 'Competed with high-performance formula prototype.',
      location: 'Circuit / Venue',
    });
  };

  return (
    <div>
      {/* Page Header */}
      <div className="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-4">
        <div>
          <span className="badge-motorsport red mb-1">Track Records</span>
          <h2 className="mb-1 font-orbitron" style={{ color: '#0F172A', fontWeight: 900 }}>
            ACHIEVEMENTS &amp; TIMELINE MANAGER
          </h2>
          <p className="text-muted small mb-0">
            Manage global competition debuts, exhibitions (e.g. Bangladesh AutoFest), and national awards.
          </p>
        </div>
        <button onClick={handleCreateNew} className="custom-btn">
          <i className="bi bi-plus-circle-fill me-1"></i> Add New Milestone
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

      {/* Achievements Table */}
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
            <div className="small fw-bold">Loading timeline...</div>
          </div>
        ) : (
          <div className="table-responsive">
            <table className="table align-middle mb-0">
              <thead style={{ background: '#F8FAFC', borderBottom: '2px solid #0F172A' }}>
                <tr className="small text-uppercase font-orbitron" style={{ fontSize: '11.5px' }}>
                  <th>Year / Date</th>
                  <th>Competition / Exhibition</th>
                  <th>Key Milestone</th>
                  <th>Location</th>
                  <th className="text-end">Actions</th>
                </tr>
              </thead>
              <tbody className="small">
                {achievements.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <span className="badge bg-dark font-orbitron fs-6">{item.year}</span>
                    </td>
                    <td>
                      <div className="fw-bold" style={{ color: '#0F172A', fontSize: '13.5px' }}>{item.competition}</div>
                      <div className="text-muted small">{item.category}</div>
                    </td>
                    <td>
                      <span className="badge-motorsport red mb-1">{item.badge}</span>
                      <div className="fw-bold text-dark">{item.headline}</div>
                      <div className="small text-muted">{item.details}</div>
                    </td>
                    <td className="small text-muted">{item.location}</td>
                    <td className="text-end">
                      <button
                        onClick={() => setEditingItem(item)}
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
                        onClick={() => handleDeleteItem(item.id)}
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

      {/* Edit Achievement Modal */}
      {editingItem && (
        <div
          className="modal d-block"
          style={{ background: 'rgba(15, 23, 42, 0.7)', backdropFilter: 'blur(4px)', zIndex: 1100 }}
          onClick={() => setEditingItem(null)}
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
                  <i className="bi bi-calendar-check-fill text-danger me-2"></i> Edit Timeline Milestone
                </h4>
                <button type="button" className="btn-close" onClick={() => setEditingItem(null)}></button>
              </div>

              <div className="modal-body p-4">
                <div className="row g-3">
                  <div className="col-md-4">
                    <label className="small fw-bold mb-1">YEAR / TIMELINE LABEL</label>
                    <input
                      type="text"
                      className="neo-input w-100"
                      value={editingItem.year}
                      onChange={(e) => setEditingItem({ ...editingItem, year: e.target.value })}
                    />
                  </div>
                  <div className="col-md-8">
                    <label className="small fw-bold mb-1">COMPETITION / EVENT NAME</label>
                    <input
                      type="text"
                      className="neo-input w-100"
                      value={editingItem.competition}
                      onChange={(e) => setEditingItem({ ...editingItem, competition: e.target.value })}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="small fw-bold mb-1">CATEGORY / DIVISION</label>
                    <input
                      type="text"
                      className="neo-input w-100"
                      value={editingItem.category}
                      onChange={(e) => setEditingItem({ ...editingItem, category: e.target.value })}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="small fw-bold mb-1">BADGE HIGHLIGHT</label>
                    <input
                      type="text"
                      className="neo-input w-100"
                      value={editingItem.badge}
                      onChange={(e) => setEditingItem({ ...editingItem, badge: e.target.value })}
                    />
                  </div>
                  <div className="col-12">
                    <label className="small fw-bold mb-1">HEADLINE SUMMARY</label>
                    <input
                      type="text"
                      className="neo-input w-100"
                      value={editingItem.headline}
                      onChange={(e) => setEditingItem({ ...editingItem, headline: e.target.value })}
                    />
                  </div>
                  <div className="col-12">
                    <label className="small fw-bold mb-1">DETAILED STORY &amp; MILESTONE DETAILS</label>
                    <textarea
                      className="neo-input w-100"
                      rows={3}
                      value={editingItem.details}
                      onChange={(e) => setEditingItem({ ...editingItem, details: e.target.value })}
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <label className="small fw-bold mb-1">LOCATION &amp; VENUE</label>
                    <input
                      type="text"
                      className="neo-input w-100"
                      value={editingItem.location}
                      onChange={(e) => setEditingItem({ ...editingItem, location: e.target.value })}
                    />
                  </div>
                </div>
              </div>

              <div className="modal-footer bg-light border-top border-dark p-3">
                <button type="button" className="btn btn-secondary btn-sm" onClick={() => setEditingItem(null)}>
                  Cancel
                </button>
                <button
                  type="button"
                  className="custom-btn btn-sm"
                  disabled={saving}
                  onClick={handleSaveItem}
                >
                  {saving ? 'Saving...' : 'Save Milestone'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
