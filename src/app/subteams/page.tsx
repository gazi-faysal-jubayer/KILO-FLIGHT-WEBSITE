import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sub-Teams & Detailed Workflows | Team KILOFLIGHT - KUET',
  description: 'Explore the 6 specialized engineering sub-teams and detailed step-by-step technical workflows at Team KILOFLIGHT (KUET).',
};

export default function SubteamsPage() {
  const subteams = [
    {
      id: 'chassis',
      title: 'Chassis & Suspension',
      badge: 'Structural Backbone & Dynamics',
      icon: 'bi-bounding-box',
      accentColor: '#FF2A2A',
      role: 'Responsible for the vehicle\'s structural backbone, driver cell safety envelope, and dynamic kinematics. The division optimizes torsional rigidity, suspension geometry (camber, caster, roll center, and front vertical swing point length), and manufactures all wishbones, uprights, and shock mounts.',
      workflow: [
        {
          step: '1',
          name: 'Kinematics Simulation',
          desc: 'Model suspension roll center, camber gain, wheel rate, and bump steer curves in specialized dynamics software.',
        },
        {
          step: '2',
          name: 'Chassis CAD & FEA',
          desc: 'Model the tubular spaceframe in SolidWorks; perform rigorous Finite Element Analysis (FEA) for torsional rigidity and impact load scenarios.',
        },
        {
          step: '3',
          name: 'Sheet Metal Upright CAD-to-CAM',
          desc: 'Design 4 mm sheet metal uprights, export 1:1 Flat Patterns to DXF for 2D CNC laser cutting, and weld precision fixtures.',
        },
        {
          step: '4',
          name: 'Jigging & Frame Fabrication',
          desc: 'Align chassis tubes on dedicated jigs, execute TIG/MIG welding, install dampers (DNM Burner-RCP 2S / motorcycle mono-shocks), and verify wheel alignment.',
        },
      ],
      tools: ['SolidWorks FEA', 'OptimumG Kinematics', 'CNC Laser DXF', 'TIG/MIG Welding Jig', 'DNM Burner Damper Rig'],
    },
    {
      id: 'aero',
      title: 'Body & Aerodynamics',
      badge: '7-Layer Bio-Composites & CFD',
      icon: 'bi-wind',
      accentColor: '#B45309',
      role: 'Directs aerodynamic downforce generation, drag reduction, thermal ducting, and the fabrication of lightweight composite exterior surfaces. The team pioneers sustainable automotive engineering by utilizing natural Jute-fiber composites.',
      workflow: [
        {
          step: '1',
          name: 'Airfoil & Aerodynamic CFD',
          desc: 'Design multi-element front and rear wing airfoils (chord lengths 180 mm – 230 mm) and run computational fluid dynamics (CFD) for optimal lift-to-drag ratios.',
        },
        {
          step: '2',
          name: 'Mold Design & Layup',
          desc: 'Construct precision positive/negative molds for nose cones, sidepods, and undertrays; execute 7-layer Jute composite hand layups with sodium silicate, resin, and hardener matrices.',
        },
        {
          step: '3',
          name: 'Impact Attenuator Integration',
          desc: 'Build and mount the rule-compliant energy-absorbing impact attenuator to the front anti-intrusion plate.',
        },
        {
          step: '4',
          name: 'Bodywork Mounting',
          desc: 'Secure panels and wings with quick-release fasteners to chassis hardpoints ensuring minimum vibration and zero dynamic deflection.',
        },
      ],
      tools: ['ANSYS Fluent CFD', 'Surface Modeling', 'Hand Layup Matrices', 'Sodium Silicate Bio-Resin', 'Quick-Release Fasteners'],
    },
    {
      id: 'powertrain',
      title: 'Mechanical Powertrain',
      badge: 'CFMoto 300SR ICE & Thermal Mgmt',
      icon: 'bi-lightning-charge',
      accentColor: '#0284C7',
      role: 'Manages internal combustion engine integration, custom fuel containment, intake restrictor sizing, exhaust gas routing, cooling system optimization, and drivetrain power transmission.',
      workflow: [
        {
          step: '1',
          name: 'Engine Packaging & Mounts',
          desc: 'Integrate the CFMoto 300SR single-cylinder engine into the rear chassis bay with custom-machined mounting brackets.',
        },
        {
          step: '2',
          name: 'Custom Fuel System Fabrication',
          desc: 'Fabricate a 4.5–5.0L baffled aluminum fuel tank retaining the CFMoto internal fuel pump module, rollover check valve, sight tube, and 35 mm vertical filler neck.',
        },
        {
          step: '3',
          name: 'Cooling & Exhaust Engineering',
          desc: 'Design custom radiator ducting and lightweight exhaust routing to maintain optimal thermal management under track conditions.',
        },
        {
          step: '4',
          name: 'Drivetrain Tuning',
          desc: 'Fabricate chain/sprocket assemblies, differential mountings, and calibrate intake restrictor airflow for maximum torque response.',
        },
      ],
      tools: ['CFMoto 300SR 292cc', 'Al Baffled Fuel Tank', 'Restrictor Calibration', 'Radiator Ducting', 'Sprocket & Chain Jig'],
    },
    {
      id: 'electrical',
      title: 'Electrical Systems & DAQ',
      badge: '12V Harness, Safety Loop & ECU',
      icon: 'bi-cpu',
      accentColor: '#FF2A2A',
      role: 'Engineers the low-voltage 12V DC power distribution network, engine control unit (ECU) calibration, in-series safety shutdown loop, sensor array integration, and live telemetry data acquisition.',
      workflow: [
        {
          step: '1',
          name: 'Wiring Architecture',
          desc: 'Design complete vehicle wire harness schematics including fusing, master disconnect switches, and relay logic.',
        },
        {
          step: '2',
          name: 'Safety Shutdown Circuit',
          desc: 'Wire the master kill switches, cockpit emergency stop, and the mechanical Brake Over-Travel Switch (BOTS) with latching relays.',
        },
        {
          step: '3',
          name: 'Sensor Integration & Telemetry',
          desc: 'Install wheel-speed sensors, throttle position sensors, and temperature probes linked to digital dashboard logging modules.',
        },
        {
          step: '4',
          name: 'ECU Tuning & Diagnostics',
          desc: 'Map engine ignition and fuel injection curves to match restrictor aerodynamics and validate electrical noise isolation.',
        },
      ],
      tools: ['Wire Harness Schematics', 'BOTS Safety Latch', 'ECU Fuel Mapping', 'CAN Telemetry Sensors', 'Digital Dash Logger'],
    },
    {
      id: 'braking',
      title: 'Braking & Steering',
      badge: 'CNC 3-Pedal Box & 10% Ackermann',
      icon: 'bi-gear-wide-connected',
      accentColor: '#0284C7',
      role: 'Oversees driver controls, deceleration kinematics, hydraulic circuit independence, pedal box structural integrity, and steering rack geometry.',
      workflow: [
        {
          step: '1',
          name: 'Custom 3-Pedal Box Fabrication',
          desc: 'CNC mill and laser-cut Al 5052 plate assemblies to house throttle, brake, and hydraulic clutch pedals.',
        },
        {
          step: '2',
          name: 'Independent Dual Hydraulic Circuits',
          desc: 'Integrate two TVS master cylinders connected via a threaded balance bar to allow manual front-to-rear brake bias adjustment.',
        },
        {
          step: '3',
          name: 'Safety Redundancy Integration',
          desc: 'Mount dual throttle return tension springs with adjustable eye-bolts and integrate the mechanical BOTS trigger bracket.',
        },
        {
          step: '4',
          name: 'Steering Assembly',
          desc: 'Mount the 300 mm aluminum rack-and-pinion assembly aligned to 10% Ackermann geometry and validate the mandatory 2000 N 4-wheel dynamic brake lockup test.',
        },
      ],
      tools: ['CNC Al 5052 Pedal Box', 'Dual TVS Master Cylinders', 'Threaded Balance Bar', '7075-T6 300mm Rack', '2000 N Lockup Rig'],
    },
    {
      id: 'business',
      title: 'Business, Media & Content',
      badge: 'Corporate Outreach & Static Events',
      icon: 'bi-megaphone',
      accentColor: '#B45309',
      role: 'Drives corporate fundraising campaigns, brand sponsorships, digital content production, event exhibition coordination, and international competition static event deliverables.',
      workflow: [
        {
          step: '1',
          name: 'Corporate Sponsorship Outreach',
          desc: 'Draft and pitch customized value propositions to automotive, engineering, and logistics corporations.',
        },
        {
          step: '2',
          name: 'Media & Public Relations',
          desc: 'Curate official website content, manage social media reels, publish newsletters, and coordinate live exhibition booths (e.g., Bangladesh AutoFest).',
        },
        {
          step: '3',
          name: 'Static Competition Preparation',
          desc: 'Compile comprehensive Cost & Manufacturing Reports, Concept Resources Management portfolios, and the Business Plan Presentation (BPP).',
        },
      ],
      tools: ['Cost & Mfg Report (CRD)', 'Business Plan Presentation', 'Sponsorship Pitch Decks', 'Website & Social Production', 'AutoFest Logistics'],
    },
  ];

  return (
    <>
      {/* Header */}
      <section className="page-header-section" style={{ background: 'radial-gradient(circle at top, rgba(255, 42, 42, 0.08) 0%, var(--dark-bg) 100%)' }}>
        <div className="container mx-auto px-4 text-center">
          <span className="badge-motorsport red mb-2">Technical Divisions</span>
          <h1 className="mb-3 font-orbitron" style={{ color: '#0F172A', fontWeight: 900 }}>SUB-TEAMS &amp; DETAILED WORKFLOWS</h1>
          <p className="text-muted max-w-700 mx-auto" style={{ maxWidth: '800px' }}>
            Explore the 6 specialized engineering and business divisions powering Team KILOFLIGHT at Khulna University of Engineering &amp; Technology (KUET), complete with their step-by-step development workflows for KILOFLIGHT PHOENIX.
          </p>
        </div>
      </section>

      {/* Subteam Deep Dives */}
      <section className="section-padding py-5">
        <div className="container mx-auto px-4">
          <div className="row g-5">
            {subteams.map((sub, idx) => (
              <div key={sub.id} className="col-12" id={sub.id}>
                <div className="glass-panel p-4 p-lg-5" style={{ border: '2px solid #0F172A', boxShadow: `4px 4px 0 ${sub.accentColor}` }}>
                  {/* Division Header */}
                  <div className="d-flex align-items-start justify-content-between flex-wrap gap-3 mb-4">
                    <div className="d-flex align-items-center gap-3">
                      <div
                        className="dept-icon mb-0"
                        style={{
                          color: sub.accentColor,
                          borderColor: sub.accentColor,
                          background: '#F8FAFC',
                          width: '56px',
                          height: '56px',
                          fontSize: '24px',
                        }}
                      >
                        <i className={`bi ${sub.icon}`}></i>
                      </div>
                      <div>
                        <span className="badge-motorsport mb-1" style={{ fontSize: '11px' }}>Sub-Team 0{idx + 1}</span>
                        <h3 className="mb-0 font-orbitron" style={{ color: '#0F172A', fontWeight: 800 }}>{sub.title}</h3>
                      </div>
                    </div>
                    <span className="badge-motorsport" style={{ background: '#F8FAFC', color: '#0F172A', border: '1.5px solid #0F172A' }}>
                      {sub.badge}
                    </span>
                  </div>

                  {/* Role & Scope */}
                  <div className="p-3 rounded mb-4" style={{ background: '#F8FAFC', border: '1px solid #E2E8F0' }}>
                    <div className="small fw-bold text-uppercase mb-1" style={{ color: '#0F172A', letterSpacing: '0.5px' }}>
                      Role &amp; Scope:
                    </div>
                    <p className="small mb-0" style={{ color: '#334155', lineHeight: '1.6' }}>
                      {sub.role}
                    </p>
                  </div>

                  {/* Detailed Workflow Steps */}
                  <div className="mb-4">
                    <h5 className="font-orbitron mb-3" style={{ color: '#0F172A', fontSize: '15px' }}>
                      <i className="bi bi-diagram-3-fill me-2 text-danger"></i> Detailed Technical Workflow
                    </h5>
                    <div className="row g-3">
                      {sub.workflow.map((w) => (
                        <div key={w.step} className="col-lg-6 col-12">
                          <div
                            className="p-3 h-100 rounded"
                            style={{
                              background: '#FFFFFF',
                              border: '1.5px solid #0F172A',
                              boxShadow: '2px 2px 0 #0F172A',
                            }}
                          >
                            <div className="d-flex align-items-center gap-2 mb-2">
                              <span
                                className="d-inline-flex align-items-center justify-content-center rounded-circle fw-bold font-orbitron"
                                style={{
                                  width: '24px',
                                  height: '24px',
                                  background: sub.accentColor,
                                  color: '#FFFFFF',
                                  fontSize: '12px',
                                }}
                              >
                                {w.step}
                              </span>
                              <div className="fw-bold" style={{ color: '#0F172A', fontSize: '13.5px' }}>{w.name}</div>
                            </div>
                            <p className="small text-muted mb-0" style={{ lineHeight: '1.5' }}>
                              {w.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Key Tools & Technologies */}
                  <div className="d-flex align-items-center gap-2 flex-wrap pt-2 border-top">
                    <span className="small fw-bold me-2" style={{ color: '#0F172A' }}>Key Systems &amp; Hardware:</span>
                    {sub.tools.map((tool, tIdx) => (
                      <span
                        key={tIdx}
                        className="badge"
                        style={{
                          background: '#F8FAFC',
                          color: '#0F172A',
                          border: '1.5px solid #0F172A',
                          boxShadow: '1.5px 1.5px 0 #0F172A',
                          padding: '5px 10px',
                          fontWeight: '600',
                          fontSize: '11.5px',
                        }}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Join Us CTA */}
          <div className="mt-5 text-center p-4 glass-panel" style={{ border: '2px solid #0F172A', boxShadow: '4px 4px 0 #0F172A' }}>
            <span className="badge-motorsport red mb-2">Recruitment Open</span>
            <h3 className="mb-2 font-orbitron" style={{ color: '#0F172A' }}>WANT TO JOIN ONE OF THESE SUB-TEAMS?</h3>
            <p className="text-muted max-w-700 mx-auto mb-4" style={{ maxWidth: '650px' }}>
              Batch 2k23 induction is officially live. Complete the registration portal to join the development of KILOFLIGHT PHOENIX.
            </p>
            <Link href="/join-us" className="custom-btn text-decoration-none">
              Apply for Batch 2k23 Induction
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
