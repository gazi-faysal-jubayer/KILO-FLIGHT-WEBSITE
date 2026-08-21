import React from 'react';

export default function FsaeEvents() {
  const events = [
    {
      badge: 'Dynamic (75 Points)',
      badgeClass: 'red',
      title: '75m Acceleration',
      description: 'Evaluates pure straight-line acceleration and launch control from a standing start over 75 meters.',
      metric: '3.2 SECONDS',
    },
    {
      badge: 'Dynamic (75 Points)',
      badgeClass: '',
      title: 'Skidpad Cornering',
      description: 'Measures maximum steady-state cornering lateral G-force on a constant radius figure-8 track.',
      metric: '1.85 G LATERAL',
    },
    {
      badge: 'Dynamic (100 Points)',
      badgeClass: 'red',
      title: 'Autocross Track',
      description: 'Tests driver maneuverability, chassis responsiveness, and suspension agility on a tight circuit.',
      metric: 'TOP QUALIFIER',
    },
    {
      badge: 'Dynamic (325 Points)',
      badgeClass: 'jute',
      title: '22km Endurance & Efficiency',
      description: 'The ultimate reliability test pushing engine cooling, fuel/energy efficiency, and component durability over 22 kilometers.',
      metric: 'MAX RELIABILITY',
    },
    {
      badge: 'Static (150 Points)',
      badgeClass: '',
      title: 'Engineering Design Event',
      description: 'Judged by Formula 1 & automotive industry engineers on CAD modeling, FEA/CFD, and technical design rationale.',
      metric: 'F1 JUDGES PANEL',
    },
    {
      badge: 'Static (175 Points)',
      badgeClass: 'jute',
      title: 'Business Plan & Cost Report',
      description: 'Teams pitch a business manufacturing model to corporate judges alongside a complete part-by-part cost analysis.',
      metric: 'COMMERCIAL MODEL',
    },
  ];

  return (
    <div className="row g-4">
      {events.map((evt, idx) => (
        <div key={idx} className="col-lg-4 col-md-6">
          <div className="fsae-event-card">
            <span className={`badge-motorsport ${evt.badgeClass} mb-2`}>{evt.badge}</span>
            <h4 className="text-white mb-2">{evt.title}</h4>
            <p className="small text-muted mb-3">{evt.description}</p>
            <div className="event-metric">{evt.metric}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
