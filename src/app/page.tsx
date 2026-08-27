import React from 'react';
import Link from 'next/link';
import HeroVideo from '@/components/HeroVideo';
import CarSpecsTabs from '@/components/CarSpecsTabs';
import FsaeEvents from '@/components/FsaeEvents';

export default function HomePage() {
  return (
    <>
      {/* 1. HERO SECTION */}
      <HeroVideo />

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

      {/* 5. PREVIOUS ACHIEVEMENTS TIMELINE */}
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
                <tr>
                  <th scope="row" className="font-orbitron fs-5 text-cyan">2023</th>
                  <td>
                    <div className="fw-bold">Formula SAE Japan (FSAE Japan 2023)</div>
                    <div className="small text-muted">KILOFLIGHT ALPHA Debut</div>
                  </td>
                  <td>
                    <span className="badge-motorsport red">Passed Mechanical Inspection</span>
                    <div className="small text-muted mt-1">
                      First Bangladeshi Formula Student team in history to pass the comprehensive mechanical inspection segment at FSAE Japan with natural jute-fiber composite bodywork.
                    </div>
                  </td>
                  <td>Aichi, Japan</td>
                </tr>
                <tr>
                  <th scope="row" className="font-orbitron fs-5" style={{ color: '#D97706' }}>2025</th>
                  <td>
                    <div className="fw-bold">Formula Student Concept Competition India</div>
                    <div className="small text-muted">Combustion Vehicle (CV) Category</div>
                  </td>
                  <td>
                    <span className="badge-motorsport jute">Conceptual Engineering Groundwork</span>
                    <div className="small text-muted mt-1">
                      Competed in the international CV category, laying the critical design, simulation, and packaging groundwork for physical manufacturing of PHOENIX.
                    </div>
                  </td>
                  <td>India / Online</td>
                </tr>
                <tr>
                  <th scope="row" className="font-orbitron fs-5" style={{ color: '#0284C7' }}>July 2026</th>
                  <td>
                    <div className="fw-bold">Bangladesh AutoFest 2026</div>
                    <div className="small text-muted">July 17–18, 2026 &bull; ALOKI Dhaka</div>
                  </td>
                  <td>
                    <span className="badge-motorsport">National Vehicle Exhibition</span>
                    <div className="small text-muted mt-1">
                      Core group of 9 student members traveled from Khulna to represent KUET, showcasing the race car alongside 5 other Bangladeshi Formula Student teams. Logistics partner: Steadfast.
                    </div>
                  </td>
                  <td>Tejgaon-Gulshan Link Road, Dhaka</td>
                </tr>
                <tr>
                  <th scope="row" className="font-orbitron fs-5" style={{ color: '#DC2626' }}>2026–2027</th>
                  <td>
                    <div className="fw-bold">FSAE Dynamix India 2027 &amp; FSUK 2027</div>
                    <div className="small text-muted">January 17–18, 2027 &bull; European Circuits</div>
                  </td>
                  <td>
                    <span className="badge-motorsport red">KILOFLIGHT PHOENIX Track Campaign</span>
                    <div className="small text-muted mt-1">
                      292 cc CFMoto 300SR, 24.4 kg 4130 spaceframe, multi-element aerodynamic wings, and 7-layer bio-jute composite bodywork aiming for top podium finishes.
                    </div>
                  </td>
                  <td>India &amp; Silverstone, UK</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 6. TEAM LEADERSHIP & CONTACT DIRECTORY */}
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
            <div className="col-lg-4 col-md-6">
              <div className="glass-panel p-4 h-100">
                <span className="badge-motorsport red mb-2">Team Captain</span>
                <h4 className="mb-1" style={{ color: '#0F172A', fontWeight: 800 }}>Auritra Sharma</h4>
                <p className="small text-muted mb-3">Overall Vehicle Design, Executive Management &amp; International Campaigns</p>
                <div className="small">
                  <div className="mb-1">
                    <i className="bi bi-telephone-fill me-2 text-danger"></i>
                    <a href="tel:+8801611453600" className="text-decoration-none fw-bold" style={{ color: '#0F172A' }}>+880 1611-453600</a>
                  </div>
                  <div>
                    <i className="bi bi-envelope-fill me-2 text-cyan"></i>
                    <a href="mailto:auritrasharma28@gmail.com" className="text-decoration-none text-muted">auritrasharma28@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="glass-panel p-4 h-100">
                <span className="badge-motorsport mb-2">Vice Captain</span>
                <h4 className="mb-1" style={{ color: '#0F172A', fontWeight: 800 }}>Gazi Faysal Jubayer</h4>
                <p className="small text-muted mb-3">Executive Coordination, Digital Platforms &amp; Sub-team Execution</p>
                <div className="small">
                  <div className="mb-1">
                    <i className="bi bi-telephone-fill me-2 text-danger"></i>
                    <a href="tel:+8801315669261" className="text-decoration-none fw-bold" style={{ color: '#0F172A' }}>+880 1315-669261</a>
                  </div>
                  <div>
                    <i className="bi bi-envelope-fill me-2 text-cyan"></i>
                    <a href="mailto:gazi.faysal.jubayer@gmail.com" className="text-decoration-none text-muted">gazi.faysal.jubayer@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="glass-panel p-4 h-100">
                <span className="badge-motorsport jute mb-2">Technical Director</span>
                <h4 className="mb-1" style={{ color: '#0F172A', fontWeight: 800 }}>Eshraq Nipun</h4>
                <p className="small text-muted mb-3">Vehicle Engineering Architecture, FEA/CFD &amp; Powertrain Integration</p>
                <div className="small">
                  <div className="mb-1">
                    <i className="bi bi-telephone-fill me-2 text-danger"></i>
                    <a href="tel:+8801576713957" className="text-decoration-none fw-bold" style={{ color: '#0F172A' }}>+880 1576-713957</a>
                  </div>
                  <div>
                    <i className="bi bi-envelope-fill me-2 text-cyan"></i>
                    <a href="mailto:nushineshraqnipun.21@gmail.com" className="text-decoration-none text-muted">nushineshraqnipun.21@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="glass-panel p-4 h-100">
                <span className="badge-motorsport mb-2">Project Director</span>
                <h4 className="mb-1" style={{ color: '#0F172A', fontWeight: 800 }}>Naimur Rhythm</h4>
                <p className="small text-muted mb-3">Project Scheduling, Procurement, Logistics &amp; Static Deliverables</p>
                <div className="small">
                  <div className="mb-1">
                    <i className="bi bi-telephone-fill me-2 text-danger"></i>
                    <a href="tel:+8801602350967" className="text-decoration-none fw-bold" style={{ color: '#0F172A' }}>+880 1602-350967</a>
                  </div>
                  <div>
                    <i className="bi bi-envelope-fill me-2 text-cyan"></i>
                    <a href="mailto:rrhythm18@gmail.com" className="text-decoration-none text-muted">rrhythm18@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="glass-panel p-4 h-100">
                <span className="badge-motorsport red mb-2">Chassis &amp; Suspension Lead</span>
                <h4 className="mb-1" style={{ color: '#0F172A', fontWeight: 800 }}>Nazizus Salehin</h4>
                <p className="small text-muted mb-3">Spaceframe Structural Fabrication, Kinematics &amp; 3-Pedal Systems</p>
                <div className="small">
                  <div className="mb-1">
                    <i className="bi bi-telephone-fill me-2 text-danger"></i>
                    <a href="tel:+8801753060356" className="text-decoration-none fw-bold" style={{ color: '#0F172A' }}>+880 1753-060356</a>
                  </div>
                  <div>
                    <i className="bi bi-envelope-fill me-2 text-cyan"></i>
                    <a href="mailto:salehin1056@gmail.com" className="text-decoration-none text-muted">salehin1056@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row g-4 align-items-stretch">
            {/* Form */}
            <div className="col-lg-6">
              <div className="glass-panel p-4 h-100">
                <h4 className="mb-4">
                  <i className="bi bi-envelope me-2 text-cyan"></i> Send Us a Message
                </h4>
                <form>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <input type="text" className="form-control-custom" placeholder="Full Name" required />
                    </div>
                    <div className="col-md-6">
                      <input type="email" className="form-control-custom" placeholder="Email Address" required />
                    </div>
                    <div className="col-12">
                      <select className="form-control-custom" required defaultValue="">
                        <option value="" disabled>Select Inquiry Type</option>
                        <option value="sponsorship">Corporate Sponsorship Inquiry</option>
                        <option value="media">Media &amp; Press Inquiry</option>
                        <option value="technical">Technical Partnership</option>
                        <option value="recruitment">Team Recruitment / Student Induction</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <textarea className="form-control-custom" rows={4} placeholder="Your Message" required></textarea>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="custom-btn w-100">Send Message</button>
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
