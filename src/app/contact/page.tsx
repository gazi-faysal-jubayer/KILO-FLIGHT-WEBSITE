'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    inquiryType: 'sponsorship',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const contactSettings = {
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
                  Fill out the communication form below. Your message will be routed directly to the Team KILOFLIGHT executive board.
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
                      Thank you for contacting Team KILOFLIGHT. An executive representative will review your message and reply promptly to <strong>{formData.email}</strong>.
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
                          PHONE NUMBER
                        </label>
                        <input
                          type="tel"
                          className="neo-input w-100"
                          placeholder="+880 1..."
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
                          <option value="sponsorship">Corporate Sponsorship Tier Inquiry</option>
                          <option value="technical">Technical / Industrial Collaboration</option>
                          <option value="media">Press, Media &amp; Interview Request</option>
                          <option value="recruitment">Student Induction / Recruitment</option>
                          <option value="general">General Automotive Inquiry</option>
                        </select>
                      </div>

                      <div className="col-12">
                        <label className="small fw-bold mb-1" style={{ color: '#0F172A' }}>
                          SUBJECT / PURPOSE
                        </label>
                        <input
                          type="text"
                          className="neo-input w-100"
                          placeholder="Brief summary of your inquiry..."
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
                          placeholder="Please provide specifics regarding your proposal, sponsorship tier interest, or questions..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          required
                        ></textarea>
                      </div>

                      <div className="col-12 mt-4">
                        <button
                          type="submit"
                          className="custom-btn w-100"
                        >
                          <i className="bi bi-send-fill me-2"></i> Transmit Message
                        </button>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* Right Column: HQ Details & Live Campus Map */}
            <div className="col-lg-5 col-12 d-flex flex-column gap-4">
              {/* Headquarters Box */}
              <div
                className="glass-panel p-4"
                style={{
                  border: '2px solid #0F172A',
                  boxShadow: '4px 4px 0 #0284C7',
                }}
              >
                <span className="badge-motorsport mb-2" style={{ background: '#E0F2FE', color: '#0284C7' }}>
                  Institutional HQ
                </span>
                <h4 className="font-orbitron mb-2" style={{ color: '#0F172A', fontWeight: 800 }}>
                  {contactSettings.institution}
                </h4>
                <p className="small text-muted mb-3" style={{ lineHeight: '1.6' }}>
                  <i className="bi bi-geo-alt-fill text-danger me-2"></i>
                  {contactSettings.address}
                </p>

                <div className="d-flex flex-column gap-2 small border-top pt-3">
                  <div className="d-flex align-items-center gap-2">
                    <i className="bi bi-envelope-at-fill text-danger fs-5"></i>
                    <div>
                      <div className="text-muted" style={{ fontSize: '11px', fontWeight: 700 }}>OFFICIAL TEAM EMAIL</div>
                      <a
                        href={`mailto:${contactSettings.email}`}
                        className="text-decoration-none fw-bold"
                        style={{ color: '#0F172A' }}
                      >
                        {contactSettings.email}
                      </a>
                    </div>
                  </div>

                  <div className="d-flex align-items-center gap-2">
                    <i className="bi bi-telephone-inbound-fill text-info fs-5"></i>
                    <div>
                      <div className="text-muted" style={{ fontSize: '11px', fontWeight: 700 }}>EXECUTIVE HOTLINE</div>
                      <a
                        href={`tel:${contactSettings.phone}`}
                        className="text-decoration-none fw-bold"
                        style={{ color: '#0F172A' }}
                      >
                        {contactSettings.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Campus Interactive Map */}
              <div
                className="glass-panel p-3 flex-grow-1 d-flex flex-column"
                style={{
                  border: '2px solid #0F172A',
                  boxShadow: '4px 4px 0 #0F172A',
                  minHeight: '280px',
                }}
              >
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <span className="small fw-bold text-uppercase" style={{ color: '#0F172A' }}>
                    <i className="bi bi-compass me-1 text-danger"></i> KUET Campus Map
                  </span>
                  <a
                    href="https://maps.google.com/?q=KUET+Khulna"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="small text-danger fw-bold text-decoration-none"
                  >
                    Open in Google Maps &rarr;
                  </a>
                </div>
                <div className="rounded overflow-hidden flex-grow-1" style={{ border: '1.5px solid #0F172A', minHeight: '220px' }}>
                  <iframe
                    className="w-100 h-100"
                    style={{ border: 0, minHeight: '220px' }}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14553.041956028342!2d89.52981393753034!3d22.900238299999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff9ba4b6ba7565%3A0x59c7e7e69f05a637!2sKhulna%20University%20of%20Engineering%20%26%20Technology%20(KUET)!5e0!3m2!1sen!2sbd!4v1680868730910!5m2!1sen!2sbd"
                    allowFullScreen
                    loading="lazy"
                    title="KUET Location Map"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
