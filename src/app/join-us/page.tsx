'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function JoinUsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedDept, setSelectedDept] = useState('aero');

  const departments = [
    { id: 'aero', label: 'Aerodynamics' },
    { id: 'chassis', label: 'Chassis & Structure' },
    { id: 'powertrain', label: 'Powertrain & ICE' },
    { id: 'elec', label: 'DAQ & Electronics' },
    { id: 'biz', label: 'Business & PR' },
    { id: 'driver', label: 'Driver Team' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 6000);
  };

  const handleReset = () => {
    const form = document.querySelector('.neo-join-form') as HTMLFormElement;
    if (form) form.reset();
    setSelectedDept('aero');
  };

  return (
    <section
      className="page-header-section"
      style={{
        minHeight: '90vh',
        background:
          'radial-gradient(circle at top, rgba(255, 42, 42, 0.06) 0%, rgba(2, 132, 199, 0.04) 45%, var(--dark-bg) 100%)',
        paddingBottom: '80px',
      }}
    >
      <div className="container mx-auto px-4">
        {/* Header Intro */}
        <div className="row text-center mb-5">
          <div className="col-lg-8 mx-auto">
            <span className="badge-motorsport red mb-2">Recruitment &amp; Partnerships</span>
            <h1 className="mb-2" style={{ fontSize: '38px' }}>
              JOIN TEAM KILO FLIGHT
            </h1>
            <p className="text-muted max-w-700 mx-auto" style={{ maxWidth: '650px' }}>
              Apply to become a student engineer on Bangladesh&apos;s premier Formula Student motorsport team or request an industry sponsor packet.
            </p>
          </div>
        </div>

        {/* Form Container */}
        <div className="row justify-content-center">
          <div className="col-lg-9 col-md-11">
            <div className="neo-join-form-wrapper">
              {submitted ? (
                <div
                  className="neo-join-form text-center p-5 d-flex flex-column align-items-center justify-content-center"
                  style={{ minHeight: '400px', background: '#FFFFFF' }}
                >
                  <div id="circleform" />
                  <i
                    className="bi bi-check-circle-fill fs-1 mb-3 text-success"
                    style={{ filter: 'drop-shadow(2px 2px 0 #0F172A)' }}
                  ></i>
                  <h2
                    className="mb-2"
                    style={{
                      fontFamily: 'var(--font-orbitron)',
                      color: '#0F172A',
                      fontWeight: 900,
                    }}
                  >
                    APPLICATION SUBMITTED!
                  </h2>
                  <p className="text-muted fw-bold max-w-500 mb-4" style={{ maxWidth: '450px' }}>
                    Thank you for applying to Team Kilo Flight! Our technical leads will review your application and contact you shortly via email.
                  </p>
                  <button
                    type="button"
                    className="custom-btn"
                    onClick={() => setSubmitted(false)}
                  >
                    Submit Another Application
                  </button>
                </div>
              ) : (
                <form className="neo-join-form" onSubmit={handleSubmit}>
                  {/* Circle Cutout Accent */}
                  <div id="circleform" />

                  {/* Intro Banner with Animated Ticker */}
                  <div id="introform">
                    <p>ENGINEER APPLICATION</p>
                    <div id="introformbehind">
                      <p>||||||||||||||||||||||||||||||||||||||||||||||||||||||||</p>
                    </div>
                  </div>

                  {/* Middle Form Inputs */}
                  <div id="middleform">
                    <div>
                      <p>FULL NAME</p>
                      <input
                        className="neo-input"
                        type="text"
                        placeholder="e.g. Gazi Faysal Jubayer"
                        required
                      />
                    </div>

                    <div>
                      <p>EMAIL ADDRESS</p>
                      <input
                        className="neo-input"
                        type="email"
                        placeholder="e.g. engineer@kuet.ac.bd"
                        required
                      />
                    </div>

                    <div>
                      <p>PHONE NUMBER</p>
                      <input
                        className="neo-input"
                        type="tel"
                        placeholder="+880 1700-000000"
                        required
                      />
                    </div>

                    <div>
                      <p>APPLICATION CATEGORY</p>
                      <select className="neo-input" defaultValue="student" required>
                        <option value="student">Student Recruitment Application</option>
                        <option value="sponsor">Corporate Sponsorship Inquiry</option>
                        <option value="mentor">Alumni Advisory / Mentor</option>
                      </select>
                    </div>

                    <div>
                      <p>PREFERRED SUB-TEAM / DEPARTMENT</p>
                      <div className="neo-dept-radio-grid">
                        {departments.map((dept) => (
                          <label
                            key={dept.id}
                            className={`neo-dept-label ${
                              selectedDept === dept.id ? 'active' : ''
                            }`}
                            onClick={() => setSelectedDept(dept.id)}
                          >
                            <input
                              type="radio"
                              name="deptChoice"
                              value={dept.id}
                              checked={selectedDept === dept.id}
                              onChange={() => setSelectedDept(dept.id)}
                              style={{ display: 'none' }}
                            />
                            <span>{dept.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p>STATEMENT OF INTEREST & TECHNICAL SKILLS</p>
                      <textarea
                        className="neo-input"
                        rows={3}
                        placeholder="Mention your department at KUET (or company), software skills (CAD, SolidWorks, MATLAB, Ansys), or past projects..."
                        required
                      ></textarea>
                    </div>
                  </div>

                  {/* Submit Button Block */}
                  <div id="endform">
                    <button type="submit">SUBMIT APPLICATION</button>
                  </div>

                  {/* Secondary Quick Action Buttons */}
                  <div id="endform2">
                    <Link href="/subteams">Explore Sub-Teams</Link>
                    <button id="passbutton" type="button" onClick={handleReset}>
                      Reset Form
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
