'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function AdminLoginPage() {
  const [passcode, setPasscode] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ passcode }),
      });

      const data = await res.json();
      if (data.success) {
        router.push('/admin');
        router.refresh();
      } else {
        setError(data.error || 'Access Denied: Invalid Master Passcode');
      }
    } catch (err) {
      setError('Connection error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center min-vh-100 p-3"
      style={{
        background:
          'radial-gradient(circle at center, rgba(255, 42, 42, 0.08) 0%, rgba(2, 132, 199, 0.04) 50%, var(--dark-bg) 100%)',
      }}
    >
      <div
        className="w-100 p-4 p-md-5 rounded"
        style={{
          maxWidth: '440px',
          background: '#FFFFFF',
          border: '3px solid #0F172A',
          boxShadow: '6px 6px 0 #FF2A2A',
        }}
      >
        <div className="text-center mb-4">
          <Image
            src="/images/KILO FLIGHT - B.png"
            alt="Team KILOFLIGHT"
            width={160}
            height={46}
            style={{ height: '46px', width: 'auto', objectFit: 'contain' }}
            priority
          />
          <div className="mt-3">
            <span
              className="badge"
              style={{
                background: '#0F172A',
                color: '#FFFFFF',
                fontFamily: 'var(--font-orbitron)',
                fontSize: '11px',
                padding: '4px 10px',
                letterSpacing: '0.8px',
              }}
            >
              PIT WALL CONTROL CENTER
            </span>
          </div>
          <h4 className="mt-3 mb-1 font-orbitron" style={{ color: '#0F172A', fontWeight: 900 }}>
            ADMIN ACCESS
          </h4>
          <p className="small text-muted mb-0">Enter the master security passcode to manage live site content and recruitment data.</p>
        </div>

        {error && (
          <div
            className="alert p-2 mb-3 small d-flex align-items-center gap-2"
            style={{
              background: '#FEE2E2',
              color: '#DC2626',
              border: '1.5px solid #DC2626',
              borderRadius: '8px',
              fontWeight: 700,
            }}
          >
            <i className="bi bi-shield-x fs-5"></i>
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="small fw-bold mb-1" style={{ color: '#0F172A', letterSpacing: '0.5px' }}>
              MASTER SECURITY PASSCODE
            </label>
            <input
              type="password"
              className="neo-input w-100"
              placeholder="••••••••••••"
              value={passcode}
              onChange={(e) => setPasscode(e.target.value)}
              required
              autoFocus
              style={{
                letterSpacing: '2px',
                fontSize: '16px',
                background: '#F8FAFC',
                border: '2px solid #0F172A',
                boxShadow: '2px 2px 0 #0F172A',
              }}
            />
            <div className="small text-muted mt-1" style={{ fontSize: '11px' }}>
              Default development passcode: <code className="fw-bold text-dark">kiloflight2027</code>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="custom-btn w-100 mb-3"
            style={{
              cursor: loading ? 'not-allowed' : 'pointer',
              opacity: loading ? 0.7 : 1,
            }}
          >
            {loading ? (
              <span>
                <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                AUTHENTICATING...
              </span>
            ) : (
              <span>
                <i className="bi bi-unlock-fill me-2"></i> UNLOCK DASHBOARD
              </span>
            )}
          </button>

          <div className="text-center">
            <Link href="/" className="small text-muted text-decoration-none fw-bold">
              <i className="bi bi-arrow-left me-1"></i> Return to Public Site
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
