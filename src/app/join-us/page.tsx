'use client';

import React, { useState } from 'react';

export default function JoinUsPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="page-header-section" style={{ minHeight: '85vh', background: 'radial-gradient(circle at center, rgba(14, 20, 32, 0.7) 0%, var(--dark-bg) 100%)' }}>
      <div className="container mx-auto px-4">
        <div className="row text-center mb-4">
          <div className="col-lg-8 mx-auto">
            <span className="badge-motorsport red mb-2">Recruitment & Partnerships</span>
            <h1 className="text-white mb-2" style={{ fontSize: '36px' }}>JOIN TEAM KILO FLIGHT</h1>
            <p className="text-muted">
              Apply to become a student engineer on Bangladesh&apos;s premier Formula Student team or request an industry sponsor packet.
            </p>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="glass-panel p-4 p-md-5">
              {submitted ? (
                <div className="text-center py-5">
                  <i className="bi bi-check-circle-fill text-success fs-1 mb-3 d-block"></i>
                  <h3 className="text-white mb-2">Application Submitted Successfully!</h3>
                  <p className="text-muted">Thank you for your interest in Team Kilo Flight. Our team leads will review your application and reach out via email.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h4 className="text-white mb-4">
                    <i className="bi bi-person-badge text-cyan me-2"></i> Application & Inquiry Form
                  </h4>

                  <div className="row g-3 mb-3">
                    <div className="col-md-6">
                      <label className="form-label text-muted small">Full Name</label>
                      <input type="text" className="form-control-custom" placeholder="John Doe" required />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label text-muted small">Email Address</label>
                      <input type="email" className="form-control-custom" placeholder="name@kuet.ac.bd" required />
                    </div>
                  </div>

                  <div className="row g-3 mb-3">
                    <div className="col-md-6">
                      <label className="form-label text-muted small">Phone Number</label>
                      <input type="tel" className="form-control-custom" placeholder="+880 1700-000000" required />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label text-muted small">Application Type</label>
                      <select className="form-control-custom" required defaultValue="student">
                        <option value="student">Student Recruitment Application</option>
                        <option value="sponsor">Corporate Sponsor Packet Request</option>
                        <option value="alumni">Alumni Mentor / Advisory</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="form-label text-muted small d-block">Preferred Sub-Team / Department</label>
                    <div className="row g-2">
                      {[
                        { id: 'aero', label: 'Aerodynamics' },
                        { id: 'chassis', label: 'Chassis' },
                        { id: 'powertrain', label: 'Powertrain' },
                        { id: 'elec', label: 'Electronics' },
                        { id: 'biz', label: 'Business / PR' },
                        { id: 'driver', label: 'Driver Team' },
                      ].map((dept) => (
                        <div key={dept.id} className="col-md-4 col-6">
                          <label className="p-2 rounded d-flex align-items-center gap-2" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--card-border)', cursor: 'pointer' }}>
                            <input type="radio" name="deptChoice" defaultChecked={dept.id === 'aero'} />
                            <span className="small text-white">{dept.label}</span>
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="form-label text-muted small">Statement of Interest & Technical Background</label>
                    <textarea
                      className="form-control-custom"
                      rows={4}
                      placeholder="Mention your department at KUET (or company), software skills (CAD, SolidWorks, MATLAB, Ansys), or past projects..."
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="custom-btn w-100 py-3">
                    Submit Application
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
