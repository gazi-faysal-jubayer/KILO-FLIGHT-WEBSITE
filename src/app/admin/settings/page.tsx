'use client';

import React, { useEffect, useState } from 'react';

export default function AdminSettingsPage() {
  const [settings, setSettings] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');

  const fetchSettings = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/settings');
      const data = await res.json();
      if (data.success) {
        setSettings(data.data || {});
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSettings();
  }, []);

  const handleSaveSettings = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setSuccessMsg('');

    try {
      const res = await fetch('/api/admin/settings', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(settings),
      });

      const data = await res.json();
      if (data.success) {
        setSuccessMsg('Settings updated successfully! Live website synced.');
        setTimeout(() => setSuccessMsg(''), 4000);
      }
    } catch (err) {
      alert('Failed to save settings');
    } finally {
      setSaving(false);
    }
  };

  if (loading || !settings) {
    return (
      <div className="p-5 text-center">
        <div className="spinner-border text-danger mb-2"></div>
        <div className="small fw-bold">Loading settings...</div>
      </div>
    );
  }

  return (
    <div>
      {/* Page Header */}
      <div className="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-4">
        <div>
          <span className="badge-motorsport red mb-1">Telemetry &amp; Global Parameters</span>
          <h2 className="mb-1 font-orbitron" style={{ color: '#0F172A', fontWeight: 900 }}>
            HERO STATS &amp; SITE SETTINGS
          </h2>
          <p className="text-muted small mb-0">
            Configure live hero performance ticker numbers, contact credentials, social channels, and admin passcode.
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

      <form onSubmit={handleSaveSettings}>
        {/* Section 1: Hero Performance Ticker & Copy */}
        <div
          className="p-4 mb-4 rounded"
          style={{
            background: '#FFFFFF',
            border: '2px solid #0F172A',
            boxShadow: '4px 4px 0 #FF2A2A',
          }}
        >
          <h4 className="font-orbitron mb-3" style={{ color: '#0F172A', fontWeight: 800 }}>
            <i className="bi bi-speedometer text-danger me-2"></i> Hero Header &amp; Performance Ticker
          </h4>

          <div className="row g-3">
            <div className="col-md-6">
              <label className="small fw-bold mb-1">HERO SUBTITLE</label>
              <input
                type="text"
                className="neo-input w-100"
                value={settings.hero?.subtitle || ''}
                onChange={(e) =>
                  setSettings({ ...settings, hero: { ...settings.hero, subtitle: e.target.value } })
                }
              />
            </div>
            <div className="col-md-6">
              <label className="small fw-bold mb-1">HERO MAIN TITLE</label>
              <input
                type="text"
                className="neo-input w-100"
                value={settings.hero?.title || ''}
                onChange={(e) =>
                  setSettings({ ...settings, hero: { ...settings.hero, title: e.target.value } })
                }
              />
            </div>
            <div className="col-12">
              <label className="small fw-bold mb-1">LOCATION &amp; COMPETITION PILL</label>
              <input
                type="text"
                className="neo-input w-100"
                value={settings.hero?.location || ''}
                onChange={(e) =>
                  setSettings({ ...settings, hero: { ...settings.hero, location: e.target.value } })
                }
              />
            </div>

            {/* 4 Stat Boxes */}
            <div className="col-12 mt-4">
              <h6 className="font-orbitron fw-bold" style={{ color: '#0F172A', fontSize: '13px' }}>
                LIVE 4-POD STATS TICKER
              </h6>
            </div>

            <div className="col-md-3 col-6">
              <div className="p-3 rounded" style={{ background: '#F8FAFC', border: '1.5px solid #0F172A' }}>
                <label className="small fw-bold mb-1">STAT 1: VALUE</label>
                <input
                  type="text"
                  className="neo-input w-100 mb-2"
                  value={settings.hero?.stat0to100 || ''}
                  onChange={(e) =>
                    setSettings({ ...settings, hero: { ...settings.hero, stat0to100: e.target.value } })
                  }
                />
                <label className="small fw-bold mb-1">LABEL</label>
                <input
                  type="text"
                  className="neo-input w-100"
                  value={settings.hero?.stat0to100Label || ''}
                  onChange={(e) =>
                    setSettings({ ...settings, hero: { ...settings.hero, stat0to100Label: e.target.value } })
                  }
                />
              </div>
            </div>

            <div className="col-md-3 col-6">
              <div className="p-3 rounded" style={{ background: '#F8FAFC', border: '1.5px solid #0F172A' }}>
                <label className="small fw-bold mb-1">STAT 2: VALUE</label>
                <input
                  type="text"
                  className="neo-input w-100 mb-2"
                  value={settings.hero?.statTopSpeed || ''}
                  onChange={(e) =>
                    setSettings({ ...settings, hero: { ...settings.hero, statTopSpeed: e.target.value } })
                  }
                />
                <label className="small fw-bold mb-1">LABEL</label>
                <input
                  type="text"
                  className="neo-input w-100"
                  value={settings.hero?.statTopSpeedLabel || ''}
                  onChange={(e) =>
                    setSettings({ ...settings, hero: { ...settings.hero, statTopSpeedLabel: e.target.value } })
                  }
                />
              </div>
            </div>

            <div className="col-md-3 col-6">
              <div className="p-3 rounded" style={{ background: '#F8FAFC', border: '1.5px solid #0F172A' }}>
                <label className="small fw-bold mb-1">STAT 3: VALUE</label>
                <input
                  type="text"
                  className="neo-input w-100 mb-2"
                  value={settings.hero?.statAero || ''}
                  onChange={(e) =>
                    setSettings({ ...settings, hero: { ...settings.hero, statAero: e.target.value } })
                  }
                />
                <label className="small fw-bold mb-1">LABEL</label>
                <input
                  type="text"
                  className="neo-input w-100"
                  value={settings.hero?.statAeroLabel || ''}
                  onChange={(e) =>
                    setSettings({ ...settings, hero: { ...settings.hero, statAeroLabel: e.target.value } })
                  }
                />
              </div>
            </div>

            <div className="col-md-3 col-6">
              <div className="p-3 rounded" style={{ background: '#F8FAFC', border: '1.5px solid #0F172A' }}>
                <label className="small fw-bold mb-1">STAT 4: VALUE</label>
                <input
                  type="text"
                  className="neo-input w-100 mb-2"
                  value={settings.hero?.statChassis || ''}
                  onChange={(e) =>
                    setSettings({ ...settings, hero: { ...settings.hero, statChassis: e.target.value } })
                  }
                />
                <label className="small fw-bold mb-1">LABEL</label>
                <input
                  type="text"
                  className="neo-input w-100"
                  value={settings.hero?.statChassisLabel || ''}
                  onChange={(e) =>
                    setSettings({ ...settings, hero: { ...settings.hero, statChassisLabel: e.target.value } })
                  }
                />
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Contact & HQ Credentials */}
        <div
          className="p-4 mb-4 rounded"
          style={{
            background: '#FFFFFF',
            border: '2px solid #0F172A',
            boxShadow: '4px 4px 0 #0284C7',
          }}
        >
          <h4 className="font-orbitron mb-3" style={{ color: '#0F172A', fontWeight: 800 }}>
            <i className="bi bi-geo-alt-fill text-cyan me-2"></i> Official Contact &amp; HQ
          </h4>

          <div className="row g-3">
            <div className="col-md-6">
              <label className="small fw-bold mb-1">OFFICIAL TEAM EMAIL</label>
              <input
                type="email"
                className="neo-input w-100"
                value={settings.contact?.email || ''}
                onChange={(e) =>
                  setSettings({ ...settings, contact: { ...settings.contact, email: e.target.value } })
                }
              />
            </div>
            <div className="col-md-6">
              <label className="small fw-bold mb-1">PRIMARY PHONE NUMBER</label>
              <input
                type="text"
                className="neo-input w-100"
                value={settings.contact?.phone || ''}
                onChange={(e) =>
                  setSettings({ ...settings, contact: { ...settings.contact, phone: e.target.value } })
                }
              />
            </div>
            <div className="col-12">
              <label className="small fw-bold mb-1">WORKSHOP / DEPARTMENT ADDRESS</label>
              <input
                type="text"
                className="neo-input w-100"
                value={settings.contact?.address || ''}
                onChange={(e) =>
                  setSettings({ ...settings, contact: { ...settings.contact, address: e.target.value } })
                }
              />
            </div>
          </div>
        </div>

        {/* Section 3: Security & Passcode */}
        <div
          className="p-4 mb-4 rounded"
          style={{
            background: '#FFFFFF',
            border: '2px solid #0F172A',
            boxShadow: '4px 4px 0 #0F172A',
          }}
        >
          <h4 className="font-orbitron mb-3" style={{ color: '#0F172A', fontWeight: 800 }}>
            <i className="bi bi-shield-lock-fill text-danger me-2"></i> Admin Security Passcode
          </h4>

          <div className="row g-3">
            <div className="col-md-6">
              <label className="small fw-bold mb-1">MASTER SECURITY PASSCODE</label>
              <input
                type="text"
                className="neo-input w-100 font-orbitron fw-bold"
                value={settings.security?.adminPasscode || 'kiloflight2027'}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    security: { ...settings.security, adminPasscode: e.target.value },
                  })
                }
              />
              <div className="small text-muted mt-1">This passcode protects access to all dashboard routes.</div>
            </div>
          </div>
        </div>

        <button type="submit" disabled={saving} className="custom-btn fs-6 px-4 py-2">
          {saving ? (
            <span>
              <span className="spinner-border spinner-border-sm me-2"></span> SAVING CHANGES...
            </span>
          ) : (
            <span>
              <i className="bi bi-floppy-fill me-2"></i> SAVE ALL SETTINGS &amp; SYNC LIVE
            </span>
          )}
        </button>
      </form>
    </div>
  );
}
