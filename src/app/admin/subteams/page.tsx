'use client';

import React, { useEffect, useState } from 'react';

export default function AdminSubteamsPage() {
  const [subteams, setSubteams] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [editingSubteam, setEditingSubteam] = useState<any | null>(null);
  const [successMsg, setSuccessMsg] = useState('');

  const fetchSubteams = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/subteams');
      const data = await res.json();
      if (data.success) {
        setSubteams(data.data || []);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubteams();
  }, []);

  const handleSaveSubteam = async () => {
    if (!editingSubteam) return;
    setSaving(true);
    setSuccessMsg('');

    try {
      const updatedList = subteams.map((s) => (s.id === editingSubteam.id ? editingSubteam : s));
      const res = await fetch('/api/admin/subteams', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedList),
      });

      const data = await res.json();
      if (data.success) {
        setSubteams(updatedList);
        setEditingSubteam(null);
        setSuccessMsg('Sub-team workflow updated successfully!');
        setTimeout(() => setSuccessMsg(''), 4000);
      }
    } catch (err) {
      alert('Failed to update sub-team');
    } finally {
      setSaving(false);
    }
  };

  const handleWorkflowStepChange = (index: number, field: 'name' | 'desc', val: string) => {
    if (!editingSubteam) return;
    const updatedWorkflows = [...editingSubteam.workflow];
    updatedWorkflows[index] = { ...updatedWorkflows[index], [field]: val };
    setEditingSubteam({ ...editingSubteam, workflow: updatedWorkflows });
  };

  return (
    <div>
      {/* Page Header */}
      <div className="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-4">
        <div>
          <span className="badge-motorsport red mb-1">Engineering Divisions</span>
          <h2 className="mb-1 font-orbitron" style={{ color: '#0F172A', fontWeight: 900 }}>
            SUB-TEAMS &amp; WORKFLOWS MANAGER
          </h2>
          <p className="text-muted small mb-0">
            Customize roles, scopes, step-by-step engineering workflows, and tool arrays for all 6 team divisions.
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

      {/* Subteams List */}
      {loading ? (
        <div className="p-5 text-center">
          <div className="spinner-border text-danger mb-2"></div>
          <div className="small fw-bold">Loading sub-teams...</div>
        </div>
      ) : (
        <div className="row g-4 mb-5">
          {subteams.map((sub, idx) => (
            <div key={sub.id} className="col-lg-6 col-12">
              <div
                className="p-4 rounded h-100"
                style={{
                  background: '#FFFFFF',
                  border: '2px solid #0F172A',
                  boxShadow: `4px 4px 0 ${sub.accentColor || '#0F172A'}`,
                }}
              >
                <div className="d-flex align-items-start justify-content-between mb-3">
                  <div className="d-flex align-items-center gap-2">
                    <div
                      className="dept-icon mb-0"
                      style={{
                        color: sub.accentColor,
                        borderColor: sub.accentColor,
                        width: '42px',
                        height: '42px',
                        fontSize: '18px',
                      }}
                    >
                      <i className={`bi ${sub.icon}`}></i>
                    </div>
                    <div>
                      <span className="badge bg-dark text-white me-1 font-orbitron" style={{ fontSize: '10px' }}>
                        Division 0{idx + 1}
                      </span>
                      <h4 className="mb-0 font-orbitron" style={{ color: '#0F172A', fontWeight: 800 }}>
                        {sub.title}
                      </h4>
                    </div>
                  </div>
                  <button
                    onClick={() => setEditingSubteam(sub)}
                    className="btn btn-sm"
                    style={{
                      background: '#0F172A',
                      color: '#FFFFFF',
                      border: '1.5px solid #0F172A',
                      boxShadow: '1.5px 1.5px 0 #FF2A2A',
                      fontWeight: 700,
                      fontSize: '12px',
                    }}
                  >
                    <i className="bi bi-pencil-fill me-1"></i> Edit Workflow
                  </button>
                </div>

                <div className="p-2 mb-3 rounded small" style={{ background: '#F8FAFC', border: '1px solid #E2E8F0' }}>
                  <div className="text-muted fw-bold mb-1" style={{ fontSize: '10.5px' }}>ROLE &amp; SCOPE:</div>
                  <p className="mb-0 text-muted" style={{ lineHeight: '1.5' }}>{sub.role}</p>
                </div>

                <div className="mb-3">
                  <div className="text-muted fw-bold mb-2 font-orbitron" style={{ fontSize: '11px' }}>
                    WORKFLOW STEPS ({sub.workflow.length}):
                  </div>
                  <div className="d-flex flex-column gap-2">
                    {sub.workflow.map((w: any) => (
                      <div key={w.step} className="p-2 rounded bg-light border small">
                        <span className="badge bg-danger me-1">{w.step}</span>
                        <strong>{w.name}:</strong> <span className="text-muted">{w.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="d-flex gap-1 flex-wrap pt-2 border-top">
                  {(sub.tools || []).map((t: string, tIdx: number) => (
                    <span key={tIdx} className="badge bg-light text-dark border" style={{ fontSize: '10.5px' }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Edit Subteam Modal */}
      {editingSubteam && (
        <div
          className="modal d-block"
          style={{ background: 'rgba(15, 23, 42, 0.7)', backdropFilter: 'blur(4px)', zIndex: 1100 }}
          onClick={() => setEditingSubteam(null)}
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
                  <i className="bi bi-diagram-3-fill text-danger me-2"></i> Edit {editingSubteam.title}
                </h4>
                <button type="button" className="btn-close" onClick={() => setEditingSubteam(null)}></button>
              </div>

              <div className="modal-body p-4" style={{ maxHeight: '70vh', overflowY: 'auto' }}>
                <div className="row g-3 mb-4">
                  <div className="col-md-6">
                    <label className="small fw-bold mb-1">SUB-TEAM TITLE</label>
                    <input
                      type="text"
                      className="neo-input w-100"
                      value={editingSubteam.title}
                      onChange={(e) => setEditingSubteam({ ...editingSubteam, title: e.target.value })}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="small fw-bold mb-1">BADGE TEXT</label>
                    <input
                      type="text"
                      className="neo-input w-100"
                      value={editingSubteam.badge}
                      onChange={(e) => setEditingSubteam({ ...editingSubteam, badge: e.target.value })}
                    />
                  </div>
                  <div className="col-12">
                    <label className="small fw-bold mb-1">ROLE &amp; SCOPE</label>
                    <textarea
                      className="neo-input w-100"
                      rows={3}
                      value={editingSubteam.role}
                      onChange={(e) => setEditingSubteam({ ...editingSubteam, role: e.target.value })}
                    ></textarea>
                  </div>
                </div>

                {/* Workflow Steps Editor */}
                <h5 className="font-orbitron mb-3" style={{ color: '#0F172A', fontSize: '15px' }}>
                  Workflow Steps
                </h5>
                <div className="d-flex flex-column gap-3 mb-4">
                  {editingSubteam.workflow.map((w: any, idx: number) => (
                    <div key={idx} className="p-3 rounded" style={{ background: '#F8FAFC', border: '1.5px solid #0F172A' }}>
                      <div className="d-flex align-items-center gap-2 mb-2">
                        <span className="badge bg-danger font-orbitron">Step 0{w.step}</span>
                        <input
                          type="text"
                          className="neo-input flex-grow-1"
                          placeholder="Step Name"
                          value={w.name}
                          onChange={(e) => handleWorkflowStepChange(idx, 'name', e.target.value)}
                        />
                      </div>
                      <textarea
                        className="neo-input w-100"
                        rows={2}
                        placeholder="Step description and engineering methodology..."
                        value={w.desc}
                        onChange={(e) => handleWorkflowStepChange(idx, 'desc', e.target.value)}
                      ></textarea>
                    </div>
                  ))}
                </div>

                {/* Key Tools Array */}
                <div>
                  <label className="small fw-bold mb-1">KEY TOOLS &amp; HARDWARE (COMMA SEPARATED)</label>
                  <input
                    type="text"
                    className="neo-input w-100"
                    value={(editingSubteam.tools || []).join(', ')}
                    onChange={(e) =>
                      setEditingSubteam({
                        ...editingSubteam,
                        tools: e.target.value.split(',').map((s) => s.trim()).filter(Boolean),
                      })
                    }
                  />
                </div>
              </div>

              <div className="modal-footer bg-light border-top border-dark p-3">
                <button type="button" className="btn btn-secondary btn-sm" onClick={() => setEditingSubteam(null)}>
                  Cancel
                </button>
                <button
                  type="button"
                  className="custom-btn btn-sm"
                  disabled={saving}
                  onClick={handleSaveSubteam}
                >
                  {saving ? 'Saving...' : 'Save Sub-Team Workflow'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
