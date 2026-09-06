'use client';

import React, { useState } from 'react';
import { ThreeDPaper, ThreeDPaperVariant } from '@/shaders/3d-paper/ThreeDPaper';

interface ThreeDPaperModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultVariant?: ThreeDPaperVariant;
  memberName?: string;
  memberRole?: string;
}

export default function ThreeDPaperModal({
  isOpen,
  onClose,
  defaultVariant = 'certificate',
  memberName,
  memberRole,
}: ThreeDPaperModalProps) {
  const [variant, setVariant] = useState<ThreeDPaperVariant>(defaultVariant);

  if (!isOpen) return null;

  return (
    <div
      className="position-fixed inset-0 w-100 h-100 d-flex align-items-center justify-content-center"
      style={{
        zIndex: 9999,
        background: 'rgba(15, 23, 42, 0.85)',
        backdropFilter: 'blur(8px)',
        top: 0,
        left: 0,
      }}
      onClick={onClose}
    >
      <div
        className="position-relative rounded overflow-hidden"
        style={{
          width: '95vw',
          maxWidth: '920px',
          height: '85vh',
          maxHeight: '680px',
          background: '#08080a',
          border: '3px solid #0F172A',
          boxShadow: '8px 8px 0 #FF2A2A',
          display: 'flex',
          flexDirection: 'column',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div
          className="d-flex justify-content-between align-items-center px-4 py-3"
          style={{
            background: '#0F172A',
            borderBottom: '2px solid rgba(255, 255, 255, 0.1)',
            color: '#FFFFFF',
          }}
        >
          <div className="d-flex align-items-center gap-3">
            <span
              className="badge"
              style={{
                background: '#FF2A2A',
                color: '#FFFFFF',
                fontFamily: 'var(--font-orbitron, monospace)',
                fontSize: '11px',
                letterSpacing: '1px',
              }}
            >
              THREEUI SHADER ENGINE
            </span>
            <h5 className="mb-0 font-orbitron fw-bold" style={{ fontSize: '15px' }}>
              {memberName ? `${memberName} — Credential Certificate` : 'Formula Student 3D Interactive Certificate'}
            </h5>
          </div>

          <div className="d-flex align-items-center gap-2">
            {/* Variant Switcher */}
            <select
              value={variant}
              onChange={(e) => setVariant(e.target.value as ThreeDPaperVariant)}
              className="form-select form-select-sm"
              style={{
                background: '#1E293B',
                color: '#F8FAFC',
                border: '1px solid #334155',
                fontSize: '12px',
                width: 'auto',
              }}
            >
              <option value="certificate">Variant: Certificate</option>
              <option value="site-of-the-year">Variant: Site of the Year</option>
              <option value="japanese">Variant: Japanese 認定証</option>
              <option value="original">Variant: Original</option>
            </select>

            <button
              onClick={onClose}
              className="btn btn-sm btn-danger d-flex align-items-center justify-content-center"
              style={{ width: '32px', height: '32px', borderRadius: '6px', fontWeight: 900 }}
              title="Close modal"
            >
              &times;
            </button>
          </div>
        </div>

        {/* 3D Paper Container */}
        <div className="flex-grow-1 position-relative w-100 h-100" style={{ minHeight: '380px' }}>
          <ThreeDPaper variant={variant} style={{ width: '100%', height: '100%' }} />
        </div>

        {/* Modal Footer Controls */}
        <div
          className="d-flex justify-content-between align-items-center px-4 py-2"
          style={{
            background: '#0F172A',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            color: '#94A3B8',
            fontSize: '12px',
          }}
        >
          <div className="d-flex align-items-center gap-2">
            <i className="bi bi-cursor-fill text-danger"></i>
            <span>Click and drag on the paper to simulate tactile physics, flex deformation, and specular foil lighting.</span>
          </div>

          <button
            onClick={onClose}
            className="btn btn-sm"
            style={{
              background: '#334155',
              color: '#FFFFFF',
              fontSize: '11px',
              fontWeight: 700,
            }}
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
}
