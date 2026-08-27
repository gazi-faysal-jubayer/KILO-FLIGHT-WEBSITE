'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function CarsPage() {
  const [cars, setCars] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/content')
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.data?.cars) {
          setCars(data.data.cars);
        }
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      {/* Header */}
      <section className="page-header-section" style={{ background: 'radial-gradient(circle at top, rgba(2, 132, 199, 0.08) 0%, var(--dark-bg) 100%)' }}>
        <div className="container mx-auto px-4 text-center">
          <span className="badge-motorsport jute mb-2">Engineering Evolution &amp; Comparison</span>
          <h1 className="mb-3 font-orbitron" style={{ color: '#0F172A', fontWeight: 900 }}>
            THE CARS OF TEAM KILOFLIGHT
          </h1>
          <p className="text-muted max-w-700 mx-auto" style={{ maxWidth: '800px' }}>
            Team KILOFLIGHT&apos;s engineering philosophy is grounded in data-driven iterative optimization. While KILOFLIGHT ALPHA proved our foundational mechanical integrity on international soil, KILOFLIGHT PHOENIX introduces significant upgrades across aerodynamic downforce generation, powertrain cooling dynamics, structural weight reduction, and custom driver ergonomics.
          </p>
        </div>
      </section>

      {/* Cars Showcase */}
      <section className="section-padding py-5">
        <div className="container mx-auto px-4">
          {loading ? (
            <div className="p-5 text-center">
              <div className="spinner-border text-danger mb-2"></div>
              <div className="small fw-bold">Loading vehicles...</div>
            </div>
          ) : (
            cars.map((car, idx) => {
              const isOngoing = car.status === 'ongoing';
              const isReversed = idx % 2 === 1;

              return (
                <div
                  key={car.id}
                  className="glass-panel p-4 mb-5"
                  style={{
                    border: '2px solid #0F172A',
                    boxShadow: isOngoing ? '5px 5px 0 #FF2A2A' : '4px 4px 0 #0F172A',
                  }}
                >
                  <div className="row align-items-center g-4">
                    <div className={`col-lg-6 ${isReversed ? 'order-lg-2' : ''}`}>
                      <div
                        className="position-relative w-100 rounded overflow-hidden"
                        style={{ height: '340px', border: '2px solid #0F172A', boxShadow: '3px 3px 0 #0F172A' }}
                      >
                        <Image
                          src={car.image || '/images/formula_track_action.jpg'}
                          alt={car.name}
                          fill
                          style={{ objectFit: 'cover' }}
                          sizes="(max-width: 768px) 100vw, 50vw"
                          priority={idx === 0}
                        />
                        <div className="position-absolute top-0 start-0 m-3">
                          <span className={`badge-motorsport ${isOngoing ? 'red' : 'jute'}`}>
                            {car.tag || `${car.season} ${isOngoing ? 'Ongoing Project' : 'Legacy Project'}`}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className={`col-lg-6 ${isReversed ? 'order-lg-1' : ''}`}>
                      <span className="badge-motorsport me-2">{car.targetMilestone}</span>
                      <h2 className="mt-2 mb-3 font-orbitron" style={{ color: '#0F172A', fontWeight: 900 }}>
                        {car.name}
                      </h2>
                      <p className="text-muted" style={{ lineHeight: '1.6' }}>
                        {car.description}
                      </p>

                      <div className="row g-2 text-center mt-3">
                        <div className="col-3">
                          <div className="p-2 rounded" style={{ background: '#F8FAFC', border: '2px solid #0F172A', boxShadow: '2px 2px 0 #0F172A' }}>
                            <div className="font-orbitron fw-bold fs-6" style={{ color: '#0F172A' }}>{car.topSpeed}</div>
                            <div className="small text-muted fw-bold" style={{ fontSize: '9.5px' }}>TOP SPEED</div>
                          </div>
                        </div>
                        <div className="col-3">
                          <div className="p-2 rounded" style={{ background: '#F8FAFC', border: '2px solid #0F172A', boxShadow: '2px 2px 0 #0F172A' }}>
                            <div className="font-orbitron fw-bold fs-6" style={{ color: '#FF2A2A' }}>{car.acceleration}</div>
                            <div className="small text-muted fw-bold" style={{ fontSize: '9.5px' }}>0-100 ACCEL</div>
                          </div>
                        </div>
                        <div className="col-3">
                          <div className="p-2 rounded" style={{ background: '#F8FAFC', border: '2px solid #0F172A', boxShadow: '2px 2px 0 #0F172A' }}>
                            <div className="font-orbitron fw-bold fs-6 text-truncate" style={{ color: '#0284C7' }}>
                              {car.chassis?.includes('24.4') ? '24.4 KG' : 'SPACEFRAME'}
                            </div>
                            <div className="small text-muted fw-bold" style={{ fontSize: '9.5px' }}>CHASSIS MASS</div>
                          </div>
                        </div>
                        <div className="col-3">
                          <div className="p-2 rounded" style={{ background: '#F8FAFC', border: '2px solid #0F172A', boxShadow: '2px 2px 0 #0F172A' }}>
                            <div className="font-orbitron fw-bold fs-6" style={{ color: '#B45309' }}>JUTE BIO</div>
                            <div className="small text-muted fw-bold" style={{ fontSize: '9.5px' }}>BODYWORK</div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 d-flex gap-2 flex-wrap">
                        <Link href="/subteams" className="custom-btn text-decoration-none">
                          View Engineering Workflows
                        </Link>
                        {isOngoing && (
                          <Link href="/join-us" className="custom-btn-outline text-decoration-none">
                            Join Development
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </section>

      {/* Official Technical Comparison Matrix (Dynamic) */}
      {cars.length >= 2 && (
        <section className="section-padding py-5" style={{ background: 'rgba(2, 132, 199, 0.03)' }}>
          <div className="container mx-auto px-4">
            <div className="row text-center mb-4">
              <div className="col-lg-8 mx-auto">
                <span className="badge-motorsport red mb-2">Technical Specifications</span>
                <h2 className="mb-2 font-orbitron" style={{ color: '#0F172A', fontWeight: 900 }}>TECHNICAL COMPARISON MATRIX</h2>
                <p className="text-muted">Direct engineering benchmark comparison between KILOFLIGHT ALPHA and KILOFLIGHT PHOENIX.</p>
              </div>
            </div>

            <div className="table-responsive">
              <table className="schedule-table table align-middle w-100">
                <thead>
                  <tr>
                    <th scope="col" style={{ width: '25%' }}>Vehicle Specification / Feature</th>
                    {cars.map((c) => (
                      <th
                        key={c.id}
                        scope="col"
                        style={{
                          background: '#0F172A',
                          color: '#FFFFFF',
                        }}
                      >
                        <div style={{ color: c.status === 'ongoing' ? '#FF6B6B' : '#FFFFFF', fontWeight: 800 }}>{c.name}</div>
                        <span className="small font-normal" style={{ color: '#CBD5E1' }}>({c.season} {c.status === 'ongoing' ? 'Ongoing' : 'Legacy'})</span>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row" className="fw-bold" style={{ color: '#0F172A' }}>Powertrain Engine Platform</th>
                    {cars.map((c) => (
                      <td key={c.id} className={c.status === 'ongoing' ? 'fw-bold' : ''}>{c.engine}</td>
                    ))}
                  </tr>
                  <tr>
                    <th scope="row" className="fw-bold" style={{ color: '#0F172A' }}>Maximum Top Speed</th>
                    {cars.map((c) => (
                      <td key={c.id} className={c.status === 'ongoing' ? 'fw-bold text-danger' : ''}>{c.topSpeed}</td>
                    ))}
                  </tr>
                  <tr>
                    <th scope="row" className="fw-bold" style={{ color: '#0F172A' }}>Acceleration (0–100 km/h)</th>
                    {cars.map((c) => (
                      <td key={c.id} className={c.status === 'ongoing' ? 'fw-bold text-danger' : ''}>{c.acceleration}</td>
                    ))}
                  </tr>
                  <tr>
                    <th scope="row" className="fw-bold" style={{ color: '#0F172A' }}>Aerodynamics Package</th>
                    {cars.map((c) => (
                      <td key={c.id} className={c.status === 'ongoing' ? 'fw-bold' : ''}>{c.aero}</td>
                    ))}
                  </tr>
                  <tr>
                    <th scope="row" className="fw-bold" style={{ color: '#0F172A' }}>Chassis Structure &amp; Mass</th>
                    {cars.map((c) => (
                      <td key={c.id} className={c.status === 'ongoing' ? 'fw-bold text-cyan' : ''}>{c.chassis}</td>
                    ))}
                  </tr>
                  <tr>
                    <th scope="row" className="fw-bold" style={{ color: '#0F172A' }}>Bodywork &amp; Composite Material</th>
                    {cars.map((c) => (
                      <td key={c.id} className={c.status === 'ongoing' ? 'fw-bold text-warning' : ''} style={c.status === 'ongoing' ? { color: '#B45309' } : {}}>{c.bodywork}</td>
                    ))}
                  </tr>
                  <tr>
                    <th scope="row" className="fw-bold" style={{ color: '#0F172A' }}>Brake &amp; Pedal Box System</th>
                    {cars.map((c) => (
                      <td key={c.id} className={c.status === 'ongoing' ? 'fw-bold' : ''}>{c.brakes}</td>
                    ))}
                  </tr>
                  <tr>
                    <th scope="row" className="fw-bold" style={{ color: '#0F172A' }}>Steering System</th>
                    {cars.map((c) => (
                      <td key={c.id} className={c.status === 'ongoing' ? 'fw-bold' : ''}>{c.steering}</td>
                    ))}
                  </tr>
                  <tr>
                    <th scope="row" className="fw-bold" style={{ color: '#0F172A' }}>Target Event Milestone</th>
                    {cars.map((c) => (
                      <td key={c.id}>
                        <span className={`badge-motorsport ${c.status === 'ongoing' ? 'red' : 'jute'}`}>
                          {c.targetMilestone}
                        </span>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
