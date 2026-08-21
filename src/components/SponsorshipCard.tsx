'use client';

import React from 'react';
import Link from 'next/link';

export interface SponsorshipTier {
  id: string;
  title: string;
  tag: string;
  description: string;
  price: string;
  period: string;
  currency?: string;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  features: {
    icon: React.ReactNode;
    text: string;
  }[];
  buttonText: string;
  buttonLink: string;
  stampText: string;
}

export default function SponsorshipCard({ tier }: { tier: SponsorshipTier }) {
  return (
    <div
      className="sponsorship-neo-card"
      style={
        {
          '--card-primary': tier.primaryColor,
          '--card-secondary': tier.secondaryColor,
          '--card-accent': tier.accentColor,
        } as React.CSSProperties
      }
    >
      {/* Background Grids & Patterns */}
      <div className="card-pattern-grid" />
      <div className="card-overlay-dots" />

      {/* Bold Geometric SVG Pattern */}
      <div className="bold-pattern">
        <svg viewBox="0 0 100 100">
          <path
            strokeDasharray="15 10"
            strokeWidth={10}
            stroke="currentColor"
            fill="none"
            d="M0,0 L100,0 L100,100 L0,100 Z"
          />
        </svg>
      </div>

      {/* Header Banner */}
      <div className="card-title-area">
        <span>{tier.title}</span>
        <span className="card-tag">{tier.tag}</span>
      </div>

      {/* Card Body */}
      <div className="card-body">
        <div className="card-description">{tier.description}</div>

        {/* Feature Grid */}
        <div className="feature-grid">
          {tier.features.map((feat, idx) => (
            <div key={idx} className="feature-item">
              <div className="feature-icon">{feat.icon}</div>
              <span className="feature-text">{feat.text}</span>
            </div>
          ))}
        </div>

        {/* Card Actions / Price & Button */}
        <div className="card-actions">
          <div className="price">
            <span className="price-currency">{tier.currency || '$'}</span>
            {tier.price}
            <span className="price-period">{tier.period}</span>
          </div>

          <Link href={tier.buttonLink} className="card-button">
            {tier.buttonText}
          </Link>
        </div>
      </div>

      {/* Decorative Dots Pattern */}
      <div className="dots-pattern">
        <svg viewBox="0 0 80 40">
          <circle fill="currentColor" r={3} cy={10} cx={10} />
          <circle fill="currentColor" r={3} cy={10} cx={30} />
          <circle fill="currentColor" r={3} cy={10} cx={50} />
          <circle fill="currentColor" r={3} cy={10} cx={70} />
          <circle fill="currentColor" r={3} cy={20} cx={20} />
          <circle fill="currentColor" r={3} cy={20} cx={40} />
          <circle fill="currentColor" r={3} cy={20} cx={60} />
          <circle fill="currentColor" r={3} cy={30} cx={10} />
          <circle fill="currentColor" r={3} cy={30} cx={30} />
          <circle fill="currentColor" r={3} cy={30} cx={50} />
          <circle fill="currentColor" r={3} cy={30} cx={70} />
        </svg>
      </div>

      {/* Accent Geometric Shapes */}
      <div className="accent-shape" />
      <div className="corner-slice" />

      {/* Official Inspection Stamp */}
      <div className="stamp">
        <span className="stamp-text">{tier.stampText}</span>
      </div>
    </div>
  );
}
