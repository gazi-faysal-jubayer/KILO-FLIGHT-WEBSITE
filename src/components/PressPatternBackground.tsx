'use client';

import React from 'react';

export default function PressPatternBackground() {
  return (
    <div className="press-background-wrapper" aria-hidden="true">
      <div className="press">
        <div className="sheet" />
        <div className="roll" />
        <div className="sheet" />
        <div className="roll" />
        <div className="sheet" />
        <div className="roll" />
        <div className="sheet" />
        <div className="sheet" />
        <div className="sheet" />
        <div className="sheet" />
        <div className="sheet" />
        <div className="roll" />
      </div>
      {/* Dark motorsport gradient overlay for perfect contrast & readability */}
      <div className="press-overlay-gradient" />
    </div>
  );
}
