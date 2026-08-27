'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import HeroVideo from '@/components/HeroVideo';
import CarSpecsTabs from '@/components/CarSpecsTabs';
import FsaeEvents from '@/components/FsaeEvents';

export default function HomePage() {
  const [content, setContent] = useState<any | null>(null);
  const [contactForm, setContactForm] = useState({
    fullName: '',
    email: '',
    inquiryType: 'sponsorship',
    message: '',
  });
  const [sendingMsg, setSendingMsg] = useState(false);
  const [msgSent, setMsgSent] = useState(false);

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

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSendingMsg(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contactForm),
      });
      const data = await res.json();
      if (data.success) {
        setMsgSent(true);
        setContactForm({ fullName: '', email: '', inquiryType: 'sponsorship', message: '' });
        setTimeout(() => setMsgSent(false), 5000);
      }
    } catch (err) {
      alert('Failed to send message. Please try again.');
    } finally {
      setSendingMsg(false);
    }
  };

  const achievements = content?.achievements || [];
  const teamMembers = (content?.team || []).filter((m: any) => m.category === 'captain' || m.category === 'lead');

  return (
    <>
      {/* 1. HERO SECTION */}
      <HeroVideo initialData={content?.settings?.hero} />

      {/* 2. ONGOING & LEGACY PROJECTS: TECHNICAL ENGINEERING */}
      <section className="section-padding py-5" id="section_2">
        <div className="container mx-auto px-4">
          <div className="row align-items-center mb-5">
            <div className="col-lg-8">
              <span className="badge-motorsport mb-2">Ongoing Project &bull; FSAE India 2027</span>
              <h2 className="mb-2">KILOFLIGHT PHOENIX - SPECIFICATIONS</h2>
              <p className="mb-0">
                Engineered for FSAE Dynamix India 2027 (Jan 17–18, 2027) &amp; FSUK 2027 at Khulna University of Engineering &amp; Technology (KUET). Powered by a 292 cc CFMoto 300SR DOHC engine with custom aerodynamics and a 24.4 kg 4130 Chromoly spaceframe.
              </p>
            </div>
            <div className="col-lg-4 text-lg-end mt-3 mt-lg-0">
              <Link href="/cars" className="custom-btn-outline me-2">
                Compare Phoenix vs Alpha
              </Link>
              <span className="badge-motorsport red p-2">FSAE Japan 2023 Mechanical Pass</span>
            </div>
          </div>

          <CarSpecsTabs />
        </div>
      </section>

      {/* 3. FORMULA STUDENT COMPETITION EVENTS EXPLAINER */}
      <section className="section-padding py-5" style={{ background: 'rgba(2, 132, 199, 0.03)' }}>
        <div className="container mx-auto px-4">
          <div className="row text-center mb-5">
            <div className="col-lg-8 mx-auto">
              <span className="badge-motorsport jute mb-2">Competition Structure</span>
              <h2 className="mb-2">FORMULA STUDENT COMPETITION EVENTS</h2>
              <p className="text-muted">Formula Student evaluates race cars across 1,000 total points divided into Static &amp; Dynamic Events.</p>
            </div>
          </div>

          <FsaeEvents />
        </div>
      </section>

      {/* 4. SUB-TEAMS & DETAILED WORKFLOWS */}
      <section className="section-padding py-5">
        <div className="container mx-auto px-4">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <span className="badge-motorsport mb-2">6 Specialized Divisions</span>
              <h2 className="mb-3">ENGINEERING SUB-TEAMS &amp; WORKFLOWS</h2>
              <p className="text-muted mb-4">
                Chassis &amp; Suspension, Body &amp; Aerodynamics, Mechanical Powertrain, Electrical Systems &amp; DAQ, Braking &amp; Steering, and Business &amp; Media at KUET.
              </p>
              <Link href="/subteams" className="custom-btn-outline">
                View All 6 Sub-teams &amp; Step-by-Step Workflows
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PREVIOUS ACHIEVEMENTS TIMELINE (DYNAMIC) */}
      <section className="section-padding py-5" id="section_5" style={{ background: 'rgba(2, 132, 199, 0.03)' }}>
        <div className="container mx-auto px-4">
          <div className="row justify-content-center text-center mb-4">
            <div className="col-lg-8">
              <span className="badge-motorsport red mb-2">Driving Innovation, Inspiring the Future</span>
              <h2 className="mb-3">PREVIOUS ACHIEVEMENTS &amp; EXHIBITIONS</h2>
              <p className="text-muted">Consistently pushing the boundaries of student engineering in Bangladesh on international and national stages.</p>
            </div>
          </div>

          <div className="table-responsive">
            <table className="schedule-table table align-middle w-100">
              <thead>
                <tr>
                  <th scope="col">Year</th>
                  <th scope="col">Competition / Event</th>
                  <th scope="col">Key Milestone &amp; Details</th>
                  <th scope="col">Location &amp; Highlights</th>
                </tr>
              </thead>
              <tbody>
                {achievements.map((item: any) => (
                  <tr key={item.id}>
                    <th scope="row" className="font-orbitron fs-5 text-cyan">{item.year}</th>
                    <td>
                      <div className="fw-bold">{item.competition}</div>
                      <div className="small text-muted">{item.category}</div>
                    </td>
                    <td>
                      <span className="badge-motorsport red">{item.badge}</span>
                      <div className="small text-muted mt-1">{item.details}</div>
                    </td>
                    <td>{item.location}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 6. TEAM LEADERSHIP & CONTACT DIRECTORY (DYNAMIC) */}
      <section className="section-padding py-5">
        <div className="container mx-auto px-4">
          <div className="row text-center mb-4">
            <div className="col-lg-8 mx-auto">
              <span className="badge-motorsport me-2">Executive Directory</span>
              <h2 className="mb-2">TEAM LEADERSHIP &amp; CONTACT</h2>
              <p className="text-muted">Direct executive contacts for corporate sponsorships, technical inquiries, and recruitment.</p>
            </div>
          </div>

          {/* Leadership Cards Grid */}
          <div className="row g-4 mb-5">
            {teamMembers.slice(0, 5).map((member: any) => (
              <div key={member.id} className="col-lg-4 col-md-6">
                <div className="glass-panel p-4 h-100">
                  <span className="badge-motorsport red mb-2">{member.role}</span>
                  <h4 className="mb-1" style={{ color: '#0F172A', fontWeight: 800 }}>{member.name}</h4>
                  <p className="small text-muted mb-3">{member.bio}</p>
                  <div className="small">
                    {member.phone && (
                      <div className="mb-1">
                        <i className="bi bi-telephone-fill me-2 text-danger"></i>
                        <a href={`tel:${member.phone}`} className="text-decoration-none fw-bold" style={{ color: '#0F172A' }}>{member.phone}</a>
                      </div>
                    )}
                    {member.email && (
                      <div>
                        <i className="bi bi-envelope-fill me-2 text-cyan"></i>
                        <a href={`mailto:${member.email}`} className="text-decoration-none text-muted">{member.email}</a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="row g-4 align-items-stretch">
            {/* Live Connected Contact Form */}
            <div className="col-lg-6">
              <div className="glass-panel p-4 h-100">
                <h4 className="mb-4">
                  <i className="bi bi-envelope me-2 text-cyan"></i> Send Us a Message
                </h4>

                {msgSent && (
                  <div className="alert alert-success p-3 small fw-bold mb-3">
                    <i className="bi bi-check-circle-fill me-2"></i> Your message has been sent to the team!
                  </div>
                )}

                <form onSubmit={handleContactSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control-custom"
                        placeholder="Full Name"
                        value={contactForm.fullName}
                        onChange={(e) => setContactForm({ ...contactForm, fullName: e.target.value })}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="email"
                        className="form-control-custom"
                        placeholder="Email Address"
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        required
                      />
                    </div>
                    <div className="col-12">
                      <select
                        className="form-control-custom"
                        value={contactForm.inquiryType}
                        onChange={(e) => setContactForm({ ...contactForm, inquiryType: e.target.value })}
                        required
                      >
                        <option value="sponsorship">Corporate Sponsorship Inquiry</option>
                        <option value="media">Media &amp; Press Inquiry</option>
                        <option value="technical">Technical Partnership</option>
                        <option value="recruitment">Team Recruitment / Student Induction</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <textarea
                        className="form-control-custom"
                        rows={4}
                        placeholder="Your Message"
                        value={contactForm.message}
                        onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                        required
                      ></textarea>
                    </div>
                    <div className="col-12">
                      <button type="submit" disabled={sendingMsg} className="custom-btn w-100">
                        {sendingMsg ? 'Sending...' : 'Send Message'}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            {/* Location & Institutional Affiliation */}
            <div className="col-lg-6">
              <div className="glass-panel p-4 h-100 d-flex flex-column">
                <h4 className="mb-3">
                  <i className="bi bi-geo-alt me-2 text-danger"></i> Institutional Headquarters
                </h4>
                <p className="small text-muted mb-2">
                  <strong>Khulna University of Engineering &amp; Technology (KUET)</strong>
                </p>
                <p className="small text-muted mb-3">
                  Department of Mechanical Engineering, KUET Campus, Khulna-9203, Bangladesh.
                  <br />
                  <strong>Official Team Email:</strong> <a href="mailto:teamkiloflightkuet@gmail.com" className="text-decoration-none text-danger fw-bold">teamkiloflightkuet@gmail.com</a>
                </p>
                <div className="rounded overflow-hidden flex-grow-1" style={{ minHeight: '220px', border: '2px solid #0F172A', boxShadow: '3px 3px 0 #0F172A' }}>
                  <iframe
                    className="w-100 h-100"
                    style={{ border: 0 }}
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
