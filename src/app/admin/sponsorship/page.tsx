'use client';

import React, { useEffect, useState } from 'react';

export default function AdminSponsorshipPage() {
  const [tiers, setTiers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [editingTier, setEditingTier] = useState<any | null>(null);
  const [successMsg, setSuccessMsg] = useState('');

  const fetchTiers = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/sponsorship');
      const data = await res.json();
      if (data.success) {
        setTiers(data.data || []);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTiers();
  }, []);

  const handleSaveTier = async () => {
    if (!editingTier) return;
    setSaving(true);
    setSuccessMsg('');

    try {
      const updatedList = tiers.map((t) => (t.id === editingTier.id ? editingTier : t));
      const res = await fetch('/api/admin/sponsorship', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedList),
      });

      const data = await res.json();
      if (data.success) {
        setTiers(updatedList);
        setEditingTier(null);
        setSuccessMsg('Sponsorship package updated successfully!');
        setTimeout(() => setSuccessMsg(''), 4000);
      }
    } catch (err) {
      alert('Failed to update package');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div>
      {/* Page Header */}
      <div className="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-4">
        <div>
          <span className="badge-motorsport red mb-1">Corporate Partnerships</span>
          <h2 className="mb-1 font-orbitron" style={{ color: '#0F172A', fontWeight: 900 }}>
            SPONSORSHIP PACKAGES &amp; DELIVERABLES
          </h2>
          <p className="text-muted small mb-0">
            Manage tier pricing in Lacs BDT, marketing deliverables, and recruitment pipeline privileges.
          </p>
        </div>
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

      {/* Tiers List */}
      {loading ? (
        <div className="p-5 text-center">
          <div className="spinner-border text-danger mb-2"></div>
          <div className="small fw-bold">Loading tiers...</div>
        </div>
      ) : (
        <div className="row g-4 mb-5">
          {tiers.map((t) => (
            <div key={t.id} className="col-lg-4 col-md-6 col-12">
              <div
                className="p-4 rounded h-100 d-flex flex-column"
                style={{
                  background: '#FFFFFF',
                  border: '2px solid #0F172A',
                  boxShadow: `4px 4px 0 ${t.primaryColor || '#0F172A'}`,
                }}
              >
                <div className="d-flex align-items-start justify-content-between mb-2">
                  <div>
                    <span className="badge-motorsport" style={{ background: '#F8FAFC', color: '#0F172A', border: '1.5px solid #0F172A' }}>
                      {t.tag}
                    </span>
                    <h3 className="mt-2 mb-0 font-orbitron" style={{ color: '#0F172A', fontWeight: 900 }}>
                      {t.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => setEditingTier(t)}
                    className="btn btn-sm"
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
                </div>

                <div className="my-3 p-3 rounded" style={{ background: '#F8FAFC', border: '1px solid #E2E8F0' }}>
                  <div className="fs-3 fw-bold font-orbitron text-danger">
                    {t.currency || '৳'} {t.price} <span className="fs-6 text-muted fw-bold">{t.period}</span>
                  </div>
                </div>

                <p className="small text-muted mb-3 flex-grow-1" style={{ lineHeight: '1.5' }}>
                  {t.description}
                </p>

                <div className="small border-top pt-2">
                  <div className="fw-bold mb-1" style={{ color: '#0F172A', fontSize: '11px' }}>KEY DELIVERABLES:</div>
                  <ul className="list-unstyled small mb-0 text-muted">
                    <li>&bull; Car Logo: <strong>{t.logoCar}</strong></li>
                    <li>&bull; Team Kits: <strong>{t.logoApparel}</strong></li>
                    <li>&bull; Recruitment: <strong>{t.recruitmentAccess}</strong></li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Edit Tier Modal */}
      {editingTier && (
        <div
          className="modal d-block"
          style={{ background: 'rgba(15, 23, 42, 0.7)', backdropFilter: 'blur(4px)', zIndex: 1100 }}
          onClick={() => setEditingTier(null)}
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
                  <i className="bi bi-trophy-fill text-warning me-2"></i> Edit {editingTier.title}
                </h4>
                <button type="button" className="btn-close" onClick={() => setEditingTier(null)}></button>
              </div>

              <div className="modal-body p-4" style={{ maxHeight: '70vh', overflowY: 'auto' }}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="small fw-bold mb-1">TIER TITLE</label>
                    <input
                      type="text"
                      className="neo-input w-100"
                      value={editingTier.title}
                      onChange={(e) => setEditingTier({ ...editingTier, title: e.target.value })}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="small fw-bold mb-1">TAG BADGE</label>
                    <input
                      type="text"
                      className="neo-input w-100"
                      value={editingTier.tag}
                      onChange={(e) => setEditingTier({ ...editingTier, tag: e.target.value })}
                    />
                  </div>
                  <div className="col-md-4">
                    <label className="small fw-bold mb-1">PRICE VALUE (e.g. 10.0)</label>
                    <input
                      type="text"
                      className="neo-input w-100"
                      value={editingTier.price}
                      onChange={(e) => setEditingTier({ ...editingTier, price: e.target.value })}
                    />
                  </div>
                  <div className="col-md-4">
                    <label className="small fw-bold mb-1">CURRENCY SYMBOL</label>
                    <input
                      type="text"
                      className="neo-input w-100"
                      value={editingTier.currency}
                      onChange={(e) => setEditingTier({ ...editingTier, currency: e.target.value })}
                    />
                  </div>
                  <div className="col-md-4">
                    <label className="small fw-bold mb-1">PERIOD / UNIT</label>
                    <input
                      type="text"
                      className="neo-input w-100"
                      value={editingTier.period}
                      onChange={(e) => setEditingTier({ ...editingTier, period: e.target.value })}
                    />
                  </div>

                  <div className="col-12">
                    <label className="small fw-bold mb-1">TIER OVERVIEW DESCRIPTION</label>
                    <textarea
                      className="neo-input w-100"
                      rows={2}
                      value={editingTier.description}
                      onChange={(e) => setEditingTier({ ...editingTier, description: e.target.value })}
                    ></textarea>
                  </div>

                  <div className="col-md-6">
                    <label className="small fw-bold mb-1">RACE CAR LOGO PLACEMENT</label>
                    <input
                      type="text"
                      className="neo-input w-100"
                      value={editingTier.logoCar}
                      onChange={(e) => setEditingTier({ ...editingTier, logoCar: e.target.value })}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="small fw-bold mb-1">TEAM APPAREL PLACEMENT</label>
                    <input
                      type="text"
                      className="neo-input w-100"
                      value={editingTier.logoApparel}
                      onChange={(e) => setEditingTier({ ...editingTier, logoApparel: e.target.value })}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="small fw-bold mb-1">WEBSITE FEATURE</label>
                    <input
                      type="text"
                      className="neo-input w-100"
                      value={editingTier.websiteFeature}
                      onChange={(e) => setEditingTier({ ...editingTier, websiteFeature: e.target.value })}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="small fw-bold mb-1">INTERNATIONAL EVENT PROMOTION</label>
                    <input
                      type="text"
                      className="neo-input w-100"
                      value={editingTier.eventPromotion}
                      onChange={(e) => setEditingTier({ ...editingTier, eventPromotion: e.target.value })}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="small fw-bold mb-1">SOCIAL MEDIA SPOTLIGHT</label>
                    <input
                      type="text"
                      className="neo-input w-100"
                      value={editingTier.socialCampaign}
                      onChange={(e) => setEditingTier({ ...editingTier, socialCampaign: e.target.value })}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="small fw-bold mb-1">RECRUITMENT PIPELINE ACCESS</label>
                    <input
                      type="text"
                      className="neo-input w-100"
                      value={editingTier.recruitmentAccess}
                      onChange={(e) => setEditingTier({ ...editingTier, recruitmentAccess: e.target.value })}
                    />
                  </div>
                </div>
              </div>

              <div className="modal-footer bg-light border-top border-dark p-3">
                <button type="button" className="btn btn-secondary btn-sm" onClick={() => setEditingTier(null)}>
                  Cancel
                </button>
                <button
                  type="button"
                  className="custom-btn btn-sm"
                  disabled={saving}
                  onClick={handleSaveTier}
                >
                  {saving ? 'Saving...' : 'Save Package'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
