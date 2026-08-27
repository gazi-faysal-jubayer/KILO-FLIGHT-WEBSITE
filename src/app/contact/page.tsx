'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [content, setContent] = useState<any | null>(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    inquiryType: 'sponsorship',
    subject: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    fetch('/api/content')
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setContent(data.data);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setSubmitting(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          inquiryType: formData.inquiryType,
          message: `${formData.subject ? `[Subject: ${formData.subject}] ` : ''}${formData.phone ? `[Phone: ${formData.phone}] ` : ''}${formData.message}`,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          inquiryType: 'sponsorship',
          subject: '',
          message: '',
        });
      } else {
        setErrorMsg(data.error || 'Failed to deliver message. Please try again.');
      }
    } catch (err) {
      setErrorMsg('Connection error. Please try again later.');
    } finally {
      setSubmitting(false);
    }
  };

  const executiveTeam = (content?.team || []).filter(
    (m: any) => m.category === 'captain' || m.category === 'lead'
  );

  const contactSettings = content?.settings?.contact || {
    email: 'teamkiloflightkuet@gmail.com',
    phone: '+880 1611-453600',
    address: 'Department of Mechanical Engineering, KUET Campus, Khulna-9203, Bangladesh',
    institution: 'Khulna University of Engineering & Technology (KUET)',
  };

  return (
    <>
      {/* Page Header */}
      <section
        className="page-header-section"
        style={{
          background: 'radial-gradient(circle at top, rgba(255, 42, 42, 0.08) 0%, var(--dark-bg) 100%)',
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <span className="badge-motorsport red mb-2">Get in Touch</span>
          <h1 className="mb-3 font-orbitron" style={{ color: '#0F172A', fontWeight: 900 }}>
            CONTACT TEAM KILO FLIGHT
          </h1>
          <p className="text-muted max-w-700 mx-auto" style={{ maxWidth: '800px' }}>
            Connect with our executive leadership, faculty mentors, and sub-team directors for corporate sponsorships, media inquiries, technical partnerships, and student recruitment.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="section-padding py-5">
        <div className="container mx-auto px-4">
          <div className="row g-5">
            {/* Left Column: Interactive Contact Form */}
            <div className="col-lg-7 col-12">
              <div
                className="glass-panel p-4 p-md-5 h-100"
                style={{
                  border: '2px solid #0F172A',
                  boxShadow: '6px 6px 0 #FF2A2A',
                }}
              >
                <div className="d-flex align-items-center gap-2 mb-2">
                  <span className="badge-motorsport red">Direct Transmission</span>
                </div>
                <h3 className="font-orbitron mb-3" style={{ color: '#0F172A', fontWeight: 900 }}>
                  Send a Direct Message
                </h3>
                <p className="text-muted small mb-4">
                  Fill out the secure communication form below. All messages are directly routed to the Team KILOFLIGHT executive board.
                </p>

                {submitted ? (
                  <div
                    className="p-4 rounded text-center"
                    style={{
                      background: '#DCFCE7',
                      border: '2px solid #16A34A',
                      boxShadow: '3px 3px 0 #16A34A',
                    }}
                  >
                    <i className="bi bi-check-circle-fill text-success fs-1 mb-2 d-block"></i>
                    <h4 className="font-orbitron text-success fw-bold">Message Delivered!</h4>
                    <p className="small text-muted mb-3">
                      Thank you for contacting Team KILOFLIGHT. An executive representative will review your message and reply promptly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="custom-btn btn-sm"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    {errorMsg && (
                      <div
                        className="alert p-3 mb-3 small fw-bold d-flex align-items-center gap-2"
                        style={{ background: '#FEE2E2', color: '#DC2626', border: '1.5px solid #DC2626', borderRadius: '8px' }}
                      >
                        <i className="bi bi-exclamation-triangle-fill fs-5"></i>
                        <span>{errorMsg}</span>
                      </div>
                    )}

                    <div className="row g-3">
                      <div className="col-md-6">
                        <label className="small fw-bold mb-1" style={{ color: '#0F172A' }}>
                          FULL NAME *
                        </label>
                        <input
                          type="text"
                          className="neo-input w-100"
                          placeholder="Your Name / Organization"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          required
                        />
                      </div>

                      <div className="col-md-6">
                        <label className="small fw-bold mb-1" style={{ color: '#0F172A' }}>
                          EMAIL ADDRESS *
                        </label>
                        <input
                          type="email"
                          className="neo-input w-100"
                          placeholder="name@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                        />
                      </div>

                      <div className="col-md-6">
                        <label className="small fw-bold mb-1" style={{ color: '#0F172A' }}>
                          PHONE / WHATSAPP NUMBER
                        </label>
                        <input
                          type="tel"
                          className="neo-input w-100"
                          placeholder="+880 1XXXXXXXXX"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>

                      <div className="col-md-6">
                        <label className="small fw-bold mb-1" style={{ color: '#0F172A' }}>
                          INQUIRY NATURE *
                        </label>
                        <select
                          className="neo-input w-100"
                          value={formData.inquiryType}
                          onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                          required
                        >
                          <option value="sponsorship">Corporate Sponsorship &amp; Livery</option>
                          <option value="media">Media, Press &amp; Exhibition</option>
                          <option value="technical">Technical Collaboration / Parts</option>
                          <option value="recruitment">Student Recruitment / Induction</option>
                          <option value="general">General Inquiries</option>
                        </select>
                      </div>

                      <div className="col-12">
                        <label className="small fw-bold mb-1" style={{ color: '#0F172A' }}>
                          SUBJECT
                        </label>
                        <input
                          type="text"
                          className="neo-input w-100"
                          placeholder="e.g. Inquiring about Gold Sponsorship for FSAE India 2027"
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        />
                      </div>

                      <div className="col-12">
                        <label className="small fw-bold mb-1" style={{ color: '#0F172A' }}>
                          YOUR MESSAGE *
                        </label>
                        <textarea
                          className="neo-input w-100"
                          rows={5}
                          placeholder="Please provide details regarding your inquiry, partnership proposal, or questions..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          required
                        ></textarea>
                      </div>

                      <div className="col-12 mt-4">
                        <button
                          type="submit"
                          disabled={submitting}
                          className="custom-btn w-100 py-3 font-orbitron"
                          style={{
                            fontSize: '14px',
                            letterSpacing: '0.8px',
                            cursor: submitting ? 'not-allowed' : 'pointer',
                          }}
                        >
                          {submitting ? (
                            <span>
                              <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                              DELIVERING TRANSMISSION...
                            </span>
                          ) : (
                            <span>
                              <i className="bi bi-send-fill me-2"></i> SEND TRANSMISSION
                            </span>
                          )}
                        </button>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* Right Column: HQ Credentials & Executive Contacts */}
            <div className="col-lg-5 col-12 d-flex flex-column gap-4">
              {/* HQ Information Card */}
              <div
                className="glass-panel p-4"
                style={{
                  border: '2px solid #0F172A',
                  boxShadow: '4px 4px 0 #0284C7',
                }}
              >
                <div className="d-flex align-items-center gap-2 mb-2">
                  <span className="badge-motorsport" style={{ background: '#E0F2FE', color: '#0284C7', border: '1.5px solid #0284C7' }}>
                    Headquarters
                  </span>
                </div>
                <h4 className="font-orbitron mb-3" style={{ color: '#0F172A', fontWeight: 800 }}>
                  KUET Racing Workshop
                </h4>

                <div className="d-flex flex-column gap-3 small">
                  <div className="d-flex align-items-start gap-3">
                    <div
                      className="dept-icon flex-shrink-0"
                      style={{ width: '40px', height: '40px', fontSize: '18px', color: '#FF2A2A', borderColor: '#FF2A2A' }}
                    >
                      <i className="bi bi-geo-alt-fill"></i>
                    </div>
                    <div>
                      <div className="fw-bold" style={{ color: '#0F172A' }}>Address</div>
                      <div className="text-muted">{contactSettings.address}</div>
                    </div>
                  </div>

                  <div className="d-flex align-items-start gap-3">
                    <div
                      className="dept-icon flex-shrink-0"
                      style={{ width: '40px', height: '40px', fontSize: '18px', color: '#0284C7', borderColor: '#0284C7' }}
                    >
                      <i className="bi bi-envelope-fill"></i>
                    </div>
                    <div>
                      <div className="fw-bold" style={{ color: '#0F172A' }}>Official Email</div>
                      <a href={`mailto:${contactSettings.email}`} className="text-danger fw-bold text-decoration-none">
                        {contactSettings.email}
                      </a>
                    </div>
                  </div>

                  <div className="d-flex align-items-start gap-3">
                    <div
                      className="dept-icon flex-shrink-0"
                      style={{ width: '40px', height: '40px', fontSize: '18px', color: '#B45309', borderColor: '#B45309' }}
                    >
                      <i className="bi bi-telephone-fill"></i>
                    </div>
                    <div>
                      <div className="fw-bold" style={{ color: '#0F172A' }}>Team Captain Contact</div>
                      <a href={`tel:${contactSettings.phone}`} className="text-dark fw-bold text-decoration-none">
                        {contactSettings.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* KUET Map Card */}
              <div
                className="glass-panel p-3 overflow-hidden flex-grow-1"
                style={{
                  minHeight: '260px',
                  border: '2px solid #0F172A',
                  boxShadow: '4px 4px 0 #0F172A',
                }}
              >
                <div className="small fw-bold font-orbitron mb-2" style={{ color: '#0F172A' }}>
                  <i className="bi bi-compass me-1 text-danger"></i> Campus Coordinates
                </div>
                <div className="rounded overflow-hidden w-100" style={{ height: 'calc(100% - 30px)', minHeight: '220px' }}>
                  <iframe
                    className="w-100 h-100"
                    style={{ border: 0 }}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14553.041956028342!2d89.52981393753034!3d22.900238299999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff9ba4b6ba7565%3A0x59c7e7e69f05a637!2sKhulna%20University%20of%20Engineering%20%26%20Technology%20(KUET)!5e0!3m2!1sen!2sbd!4v1680868730910!5m2!1sen!2sbd"
                    allowFullScreen
                    loading="lazy"
                    title="KUET Campus Map"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          {/* Executive Leadership Direct Contacts */}
          {executiveTeam.length > 0 && (
            <div className="mt-5 pt-4 border-top">
              <div className="row text-center mb-4">
                <div className="col-lg-8 mx-auto">
                  <span className="badge-motorsport red mb-2">Executive Board</span>
                  <h3 className="font-orbitron" style={{ color: '#0F172A', fontWeight: 900 }}>
                    Direct Executive Contacts
                  </h3>
                  <p className="text-muted small">
                    Direct phone and email access to key project officers for technical consultations and inquiries.
                  </p>
                </div>
              </div>

              <div className="row g-4">
                {executiveTeam.slice(0, 5).map((member: any) => (
                  <div key={member.id} className="col-lg-4 col-md-6 col-12">
                    <div
                      className="p-4 rounded h-100"
                      style={{
                        background: '#FFFFFF',
                        border: '2px solid #0F172A',
                        boxShadow: '3px 3px 0 #0F172A',
                      }}
                    >
                      <span className="badge-motorsport red mb-2">{member.role}</span>
                      <h4 className="mb-1 font-orbitron" style={{ color: '#0F172A', fontWeight: 800 }}>
                        {member.name}
                      </h4>
                      <div className="small text-muted mb-3">{member.department}</div>

                      <div className="small d-flex flex-column gap-1">
                        {member.phone && (
                          <div>
                            <i className="bi bi-telephone-fill text-danger me-2"></i>
                            <a href={`tel:${member.phone}`} className="text-decoration-none fw-bold" style={{ color: '#0F172A' }}>
                              {member.phone}
                            </a>
                          </div>
                        )}
                        {member.email && (
                          <div>
                            <i className="bi bi-envelope-fill text-cyan me-2"></i>
                            <a href={`mailto:${member.email}`} className="text-decoration-none text-muted">
                              {member.email}
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
