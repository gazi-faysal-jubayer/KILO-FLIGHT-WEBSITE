import React from 'react';
import Link from 'next/link';
import HeroVideo from '@/components/HeroVideo';
import CarSpecsTabs from '@/components/CarSpecsTabs';
import TelemetrySimulator from '@/components/TelemetrySimulator';
import FsaeEvents from '@/components/FsaeEvents';

export default function HomePage() {
  return (
    <>
      {/* 1. RESTORED ORIGINAL HERO SECTION */}
      <HeroVideo />

      {/* 2. THE RACE CAR TECHNICAL SPECS */}
      <section className="section-padding py-5" id="section_2">
        <div className="container mx-auto px-4">
          <div className="row align-items-center mb-5">
            <div className="col-lg-8">
              <span className="badge-motorsport mb-2">Technical Engineering</span>
              <h2 className="mb-2">KILO FLIGHT ALPHA - SPECIFICATIONS</h2>
              <p className="mb-0">Designed, engineered, and manufactured in-house at Khulna University of Engineering & Technology.</p>
            </div>
            <div className="col-lg-4 text-lg-end mt-3 mt-lg-0">
              <Link href="/cars" className="custom-btn-outline me-2">
                Explore All Cars
              </Link>
              <span className="badge-motorsport red p-2">FSAE UK & Germany</span>
            </div>
          </div>

          <CarSpecsTabs />
        </div>
      </section>

      {/* 3. INTERACTIVE LIVE TELEMETRY SIMULATOR */}
      <section className="section-padding py-5" id="section_3" style={{ background: 'rgba(2, 132, 199, 0.03)' }}>
        <div className="container mx-auto px-4">
          <div className="row text-center mb-4">
            <div className="col-lg-8 mx-auto">
              <span className="badge-motorsport red mb-2">Pit Wall Control Center</span>
              <h2 className="mb-2">LIVE VEHICLE TELEMETRY SIMULATOR</h2>
              <p className="text-muted">Real-time CAN-bus telemetry simulation derived from Kilo Flight Alpha dynamic testing sessions.</p>
            </div>
          </div>

          <TelemetrySimulator />
        </div>
      </section>

      {/* 4. FORMULA STUDENT COMPETITION EVENTS EXPLAINER */}
      <section className="section-padding py-5">
        <div className="container mx-auto px-4">
          <div className="row text-center mb-5">
            <div className="col-lg-8 mx-auto">
              <span className="badge-motorsport jute mb-2">Competition Structure</span>
              <h2 className="mb-2">FORMULA STUDENT COMPETITION EVENTS</h2>
              <p className="text-muted">Formula Student evaluates race cars across 1,000 total points divided into Static & Dynamic Events.</p>
            </div>
          </div>

          <FsaeEvents />
        </div>
      </section>

      {/* 5. SUB-TEAMS LINK CALLOUT */}
      <section className="section-padding py-5" style={{ background: 'rgba(2, 132, 199, 0.03)' }}>
        <div className="container mx-auto px-4">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <span className="badge-motorsport mb-2">Team Structure</span>
              <h2 className="mb-3">ENGINEERING SUB-TEAMS</h2>
              <p className="text-muted mb-4">
                Over 145 student engineers across specialized divisions at Khulna University of Engineering & Technology.
              </p>
              <Link href="/subteams" className="custom-btn-outline">
                View Detailed Workflow & Sub-teams
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. ACHIEVEMENTS TIMELINE */}
      <section className="section-padding py-5" id="section_5">
        <div className="container mx-auto px-4">
          <div className="row justify-content-center text-center mb-4">
            <div className="col-lg-8">
              <span className="badge-motorsport red mb-2">Milestones</span>
              <h2 className="mb-3">ACHIEVEMENTS & GLOBAL COMPETITIONS</h2>
              <p className="text-muted">Proudly representing Bangladesh on international engineering stages.</p>
            </div>
          </div>

          <div className="table-responsive">
            <table className="schedule-table table align-middle w-100">
              <thead>
                <tr>
                  <th scope="col">Year</th>
                  <th scope="col">Competition / Event</th>
                  <th scope="col">Key Milestone</th>
                  <th scope="col">Location</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className="font-orbitron fs-5 text-cyan">2021</th>
                  <td>
                    <div className="fw-bold">Formula Student UK (FSUK)</div>
                    <div className="small text-muted">Virtual Engineering Concept Class</div>
                  </td>
                  <td>
                    <span className="badge-motorsport jute">Kilo Flight Alpha Reveal</span>
                    <div className="small text-muted mt-1">Showcased Bangladesh&apos;s first eco-jute composite bodywork design.</div>
                  </td>
                  <td>Silverstone Circuit / Online</td>
                </tr>
                <tr>
                  <th scope="row" className="font-orbitron fs-5" style={{ color: '#D97706' }}>2022</th>
                  <td>
                    <div className="fw-bold">National Engineering Innovation Awards</div>
                    <div className="small text-muted">Automotive & Sustainable Tech Category</div>
                  </td>
                  <td>
                    <span className="badge-motorsport red">Top 10 National Innovator</span>
                    <div className="small text-muted mt-1">Recognized for sustainable natural fiber composite innovation.</div>
                  </td>
                  <td>Dhaka, Bangladesh</td>
                </tr>
                <tr>
                  <th scope="row" className="font-orbitron fs-5 text-cyan">2023</th>
                  <td>
                    <div className="fw-bold">Formula Student Germany (FSG)</div>
                    <div className="small text-muted">International Design Event</div>
                  </td>
                  <td>
                    <span className="badge-motorsport">Eco-Material Innovation</span>
                    <div className="small text-muted mt-1">Presented technical design dossier to world-class Formula 1 judge panels.</div>
                  </td>
                  <td>Hockenheimring, Germany</td>
                </tr>
                <tr>
                  <th scope="row" className="font-orbitron fs-5" style={{ color: '#DC2626' }}>2026</th>
                  <td>
                    <div className="fw-bold">Formula Student UK & International</div>
                    <div className="small text-muted">EV & ICE Next Generation Prototype</div>
                  </td>
                  <td>
                    <span className="badge-motorsport red">Kilo Flight EV Concept</span>
                    <div className="small text-muted mt-1">Unveiling our high-performance electric powertrain & aerodynamic monocoque.</div>
                  </td>
                  <td>Silverstone, UK</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 7. CONTACT & LOCATION SECTION */}
      <section className="section-padding py-5" style={{ background: 'rgba(2, 132, 199, 0.03)' }}>
        <div className="container mx-auto px-4">
          <div className="row text-center mb-4">
            <div className="col-lg-8 mx-auto">
              <span className="badge-motorsport me-2">Get Connected</span>
              <h2 className="mb-2">CONTACT TEAM KILO FLIGHT</h2>
              <p className="text-muted">Reach out for sponsorship opportunities, technical partnerships, or team inquiries.</p>
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
                        <option value="media">Media & Press Inquiry</option>
                        <option value="technical">Technical Partnership</option>
                        <option value="recruitment">Team Recruitment / Student Join</option>
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

            {/* Location */}
            <div className="col-lg-6">
              <div className="glass-panel p-4 h-100 d-flex flex-column">
                <h4 className="mb-3">
                  <i className="bi bi-geo-alt me-2 text-danger"></i> Our Workshop Location
                </h4>
                <p className="small text-muted mb-3">
                  Department of Mechanical Engineering, Khulna University of Engineering & Technology (KUET), Khulna-9203, Bangladesh.
                </p>
                <div className="rounded overflow-hidden flex-grow-1" style={{ minHeight: '240px', border: '2px solid #0F172A', boxShadow: '3px 3px 0 #0F172A' }}>
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
