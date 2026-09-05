'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function JoinUsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    rollNumber: '',
    department: 'ME',
    institutionalEmail: '',
    whatsappNumber: '',
    primarySubteam: '1. Chassis & Suspension',
    secondarySubteam: '2. Body & Aerodynamics',
    workshopSummary: '',
    softwareSkills: [] as string[],
    statementOfPurpose: '',
    portfolioLink: '',
  });

  const availableSkills = [
    'SolidWorks',
    'ANSYS (FEA/CFD)',
    'MATLAB/Simulink',
    'Embedded/Arduino',
    'Hands-on Fabrication',
    'Graphic Design/Video',
    'Corporate Outreach',
  ];

  const subteamOptions = [
    '1. Chassis & Suspension',
    '2. Body & Aerodynamics',
    '3. Mechanical Powertrain',
    '4. Electrical Systems & DAQ',
    '5. Braking & Steering',
    '6. Business, Media & Content',
  ];

  const handleSkillToggle = (skill: string) => {
    setFormData((prev) => ({
      ...prev,
      softwareSkills: prev.softwareSkills.includes(skill)
        ? prev.softwareSkills.filter((s) => s !== skill)
        : [...prev.softwareSkills, skill],
    }));
  };

  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    if (formData.primarySubteam === formData.secondarySubteam) {
      setErrorMsg('Secondary Sub-Team preference must differ from Primary preference.');
      return;
    }
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      rollNumber: '',
      department: 'ME',
      institutionalEmail: '',
      whatsappNumber: '',
      primarySubteam: '1. Chassis & Suspension',
      secondarySubteam: '2. Body & Aerodynamics',
      workshopSummary: '',
      softwareSkills: [],
      statementOfPurpose: '',
      portfolioLink: '',
    });
    setSubmitted(false);
  };

  const roadmapStages = [
    {
      num: '01',
      title: 'Online Portal Registration',
      desc: 'Complete the detailed registration form with your academic credentials, technical skills, and sub-team selections.',
    },
    {
      num: '02',
      title: 'Technical Task / Concept Review',
      desc: 'Short assessment evaluating practical takeaways from the workshop series (CAD, kinematics, braking, powertrain, composites).',
    },
    {
      num: '03',
      title: 'Personal & Sub-Team Interview',
      desc: 'Discussion with Sub-Team Leads and Executive Officers regarding sub-team fit, problem-solving ability, and weekly commitment.',
    },
    {
      num: '04',
      title: 'Official Team Onboarding',
      desc: 'Final induction into active project workflows for the 2026–2027 season development of KILOFLIGHT PHOENIX.',
    },
  ];

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
          <div className="col-lg-9 mx-auto">
            <span className="badge-motorsport red mb-2">Batch 2k23 Induction</span>
            <h1 className="mb-2 font-orbitron" style={{ fontSize: 'clamp(28px, 4vw, 42px)', color: '#0F172A', fontWeight: 900 }}>
              JOIN TEAM KILOFLIGHT
            </h1>
            <p className="text-muted max-w-700 mx-auto" style={{ maxWidth: '750px', fontSize: '15px' }}>
              Step into elite student motorsport and take your hands-on engineering skills straight from the lecture hall to the international racetrack. Having participated in our technical workshop sessions, you now have the foundational knowledge required to contribute directly to the design, simulation, and manufacturing of <strong>KILOFLIGHT PHOENIX</strong>.
            </p>
          </div>
        </div>

        {/* 4-Stage Recruitment Roadmap */}
        <div className="row g-3 mb-5">
          {roadmapStages.map((stage) => (
            <div key={stage.num} className="col-lg-3 col-md-6">
              <div
                className="p-3 h-100 rounded"
                style={{
                  background: '#FFFFFF',
                  border: '2px solid #0F172A',
                  boxShadow: '3px 3px 0 #0F172A',
                }}
              >
                <div className="d-flex align-items-center gap-2 mb-2">
                  <span
                    className="d-inline-flex align-items-center justify-content-center rounded-circle font-orbitron fw-bold"
                    style={{
                      width: '28px',
                      height: '28px',
                      background: '#FF2A2A',
                      color: '#FFFFFF',
                      fontSize: '12px',
                    }}
                  >
                    {stage.num}
                  </span>
                  <div className="fw-bold font-orbitron" style={{ color: '#0F172A', fontSize: '12.5px' }}>
                    Stage {stage.num}
                  </div>
                </div>
                <div className="fw-bold mb-1" style={{ color: '#0F172A', fontSize: '13.5px' }}>{stage.title}</div>
                <p className="small text-muted mb-0" style={{ lineHeight: '1.45', fontSize: '12px' }}>{stage.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Form Container */}
        <div className="row justify-content-center">
          <div className="col-lg-10 col-md-12">
            <div className="neo-join-form-wrapper">
              {submitted ? (
                <div
                  className="neo-join-form text-center p-5 d-flex flex-column align-items-center justify-content-center"
                  style={{ minHeight: '420px', background: '#FFFFFF' }}
                >
                  <div id="circleform" />
                  <i
                    className="bi bi-check-circle-fill fs-1 mb-3 text-danger"
                    style={{ filter: 'drop-shadow(2px 2px 0 #0F172A)' }}
                  ></i>
                  <h2
                    className="mb-2 font-orbitron"
                    style={{
                      color: '#0F172A',
                      fontWeight: 900,
                    }}
                  >
                    REGISTRATION RECEIVED!
                  </h2>
                  <p className="text-muted fw-bold max-w-500 mb-3" style={{ maxWidth: '500px' }}>
                    Thank you, <strong>{formData.fullName}</strong> (Roll: {formData.rollNumber}). Your registration for Batch 2k23 Induction has been logged. Our executive board will review your profile for Stage 2 (Technical Task / Concept Review) and contact you at <strong>{formData.institutionalEmail}</strong> and WhatsApp <strong>{formData.whatsappNumber}</strong>.
                  </p>
                  <button
                    type="button"
                    className="custom-btn"
                    onClick={handleReset}
                  >
                    Submit Another Response
                  </button>
                </div>
              ) : (
                <form className="neo-join-form" onSubmit={handleSubmit}>
                  {/* Circle Cutout Accent */}
                  <div id="circleform" />

                  {/* Intro Banner with Animated Ticker */}
                  <div id="introform">
                    <p>BATCH 2K23 REGISTRATION PORTAL</p>
                    <div id="introformbehind">
                      <p>||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||</p>
                    </div>
                  </div>

                  {/* Middle Form Inputs */}
                  <div id="middleform">
                    {/* Row 1: Full Name & Roll Number */}
                    <div className="row g-3">
                      <div className="col-md-6">
                        <p>1. FULL NAME *</p>
                        <input
                          className="neo-input"
                          type="text"
                          placeholder="e.g. Gazi Faysal Jubayer"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <p>2. STUDENT ROLL NUMBER * (FORMAT: 23XXXXX)</p>
                        <input
                          className="neo-input"
                          type="text"
                          placeholder="e.g. 2305001"
                          pattern="23[0-9]{5}"
                          title="Please enter a valid 7-digit KUET 2k23 roll number starting with 23"
                          value={formData.rollNumber}
                          onChange={(e) => setFormData({ ...formData, rollNumber: e.target.value })}
                          required
                        />
                      </div>
                    </div>

                    {/* Row 2: Department & KUET Email */}
                    <div className="row g-3">
                      <div className="col-md-6">
                        <p>3. ACADEMIC DEPARTMENT *</p>
                        <select
                          className="neo-input"
                          value={formData.department}
                          onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                          required
                        >
                          <option value="ME">Mechanical Engineering (ME)</option>
                          <option value="EEE">Electrical &amp; Electronic Engineering (EEE)</option>
                          <option value="CSE">Computer Science &amp; Engineering (CSE)</option>
                          <option value="IPE">Industrial &amp; Production Engineering (IPE)</option>
                          <option value="TE">Textile Engineering (TE)</option>
                          <option value="BECM">Building Engineering &amp; Construction Mgmt (BECM)</option>
                          <option value="LE">Leather Engineering (LE)</option>
                          <option value="Mechatronics">Mechatronics Engineering</option>
                          <option value="Other">Other Discipline</option>
                        </select>
                      </div>
                      <div className="col-md-6">
                        <p>4. KUET INSTITUTIONAL EMAIL * (*@stud.kuet.ac.bd)</p>
                        <input
                          className="neo-input"
                          type="email"
                          placeholder="roll@stud.kuet.ac.bd"
                          value={formData.institutionalEmail}
                          onChange={(e) => setFormData({ ...formData, institutionalEmail: e.target.value })}
                          required
                        />
                      </div>
                    </div>

                    {/* Row 3: WhatsApp Contact */}
                    <div>
                      <p>5. WHATSAPP / CONTACT NUMBER * (+880 FORMAT)</p>
                      <input
                        className="neo-input"
                        type="tel"
                        placeholder="+880 1XXXXXXXXX"
                        value={formData.whatsappNumber}
                        onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
                        required
                      />
                    </div>

                    {/* Row 4: Primary & Secondary Sub-Team Preference */}
                    <div className="row g-3">
                      <div className="col-md-6">
                        <p>6. PRIMARY SUB-TEAM PREFERENCE *</p>
                        <select
                          className="neo-input"
                          value={formData.primarySubteam}
                          onChange={(e) => setFormData({ ...formData, primarySubteam: e.target.value })}
                          required
                        >
                          {subteamOptions.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="col-md-6">
                        <p>7. SECONDARY SUB-TEAM PREFERENCE * (MUST DIFFER)</p>
                        <select
                          className="neo-input"
                          value={formData.secondarySubteam}
                          onChange={(e) => setFormData({ ...formData, secondarySubteam: e.target.value })}
                          required
                        >
                          {subteamOptions.map((opt) => (
                            <option key={opt} value={opt} disabled={opt === formData.primarySubteam}>
                              {opt} {opt === formData.primarySubteam ? '(Selected as Primary)' : ''}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Row 5: Workshop Learnings Summary */}
                    <div>
                      <p>8. WORKSHOP LEARNINGS SUMMARY *</p>
                      <textarea
                        className="neo-input"
                        rows={3}
                        placeholder="Summarize technical concepts retained from workshop sessions (CAD, kinematics, braking, powertrain, composites)..."
                        value={formData.workshopSummary}
                        onChange={(e) => setFormData({ ...formData, workshopSummary: e.target.value })}
                        required
                      ></textarea>
                    </div>

                    {/* Row 6: Technical Software Skills (Multi-select checkboxes) */}
                    <div>
                      <p>9. TECHNICAL SOFTWARE &amp; PRACTICAL SKILLS (SELECT ALL THAT APPLY)</p>
                      <div className="d-flex gap-2 flex-wrap pt-1">
                        {availableSkills.map((skill) => {
                          const isSelected = formData.softwareSkills.includes(skill);
                          return (
                            <button
                              type="button"
                              key={skill}
                              onClick={() => handleSkillToggle(skill)}
                              className="neo-dept-label"
                              style={{
                                background: isSelected ? '#0F172A' : '#F8FAFC',
                                color: isSelected ? '#FFFFFF' : '#0F172A',
                                border: '2px solid #0F172A',
                                boxShadow: isSelected ? '3px 3px 0 #FF2A2A' : '2px 2px 0 #0F172A',
                                cursor: 'pointer',
                                padding: '6px 14px',
                                borderRadius: '10px',
                                fontSize: '12.5px',
                                fontWeight: 700,
                              }}
                            >
                              <i className={`bi ${isSelected ? 'bi-check-square-fill text-danger me-1' : 'bi-square me-1'}`}></i>
                              {skill}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Row 7: Statement of Purpose & Availability */}
                    <div>
                      <p>10. STATEMENT OF PURPOSE &amp; AVAILABILITY *</p>
                      <textarea
                        className="neo-input"
                        rows={3}
                        placeholder="Why do you want to join KILOFLIGHT and how will you manage academic/project time commitments?"
                        value={formData.statementOfPurpose}
                        onChange={(e) => setFormData({ ...formData, statementOfPurpose: e.target.value })}
                        required
                      ></textarea>
                    </div>

                    {/* Row 8: Portfolio / CV Link */}
                    <div>
                      <p>11. PORTFOLIO / CV LINK (OPTIONAL)</p>
                      <input
                        className="neo-input"
                        type="url"
                        placeholder="Google Drive, GitHub, or LinkedIn URL"
                        value={formData.portfolioLink}
                        onChange={(e) => setFormData({ ...formData, portfolioLink: e.target.value })}
                      />
                    </div>
                    {errorMsg && (
                      <div className="alert p-2 small fw-bold d-flex align-items-center gap-2 mt-2" style={{ background: '#FEE2E2', color: '#DC2626', border: '1.5px solid #DC2626', borderRadius: '8px' }}>
                        <i className="bi bi-exclamation-triangle-fill"></i>
                        <span>{errorMsg}</span>
                      </div>
                    )}
                  </div>

                  {/* Submit Button Block */}
                  <div id="endform">
                    <button type="submit" disabled={submitting} style={{ opacity: submitting ? 0.7 : 1 }}>
                      {submitting ? 'SUBMITTING APPLICATION...' : 'SUBMIT BATCH 2K23 INDUCTION'}
                    </button>
                  </div>

                  {/* Secondary Quick Action Buttons */}
                  <div id="endform2">
                    <Link href="/subteams">Explore Sub-Teams &amp; Workflows</Link>
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
