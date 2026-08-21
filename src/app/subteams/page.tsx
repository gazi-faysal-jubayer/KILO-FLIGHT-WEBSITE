import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sub-Teams & Detailed Workflow | Team Kilo Flight - KUET',
  description: 'Explore Team Kilo Flight\'s detailed engineering subteams and 6-step workflow pipeline at Khulna University of Engineering & Technology.',
};

export default function SubteamsPage() {
  const steps = [
    {
      num: '01',
      title: 'Rules & Targets',
      desc: 'Analysis of FSAE technical rulebooks, weight budgeting, and aerodynamic downforce targets.',
    },
    {
      num: '02',
      title: '3D CAD Modeling',
      desc: 'Parametric modeling in SolidWorks, suspension kinematics optimization in OptimumG software.',
    },
    {
      num: '03',
      title: 'FEA & CFD Sim',
      desc: 'ANSYS Fluent 3D air flow simulation, structural stress analysis & composite layup optimization.',
    },
    {
      num: '04',
      title: 'Fabrication',
      desc: 'TIG welding chromoly spaceframe, 5-axis CNC machining, and jute composite vacuum infusion bagging.',
    },
    {
      num: '05',
      title: 'CAN & Dyno Bench',
      desc: 'Altium custom PCB wiring, CAN bus harness, ECU engine mapping, and bench sensor calibration.',
    },
    {
      num: '06',
      title: 'Track & Telemetry',
      desc: 'Dynamic track testing, rFactor2 driver simulator training, real-time wireless pit wall telemetry.',
    },
  ];

  return (
    <>
      {/* Header */}
      <section className="page-header-section" style={{ background: 'radial-gradient(circle at top, rgba(255, 42, 42, 0.08) 0%, var(--dark-bg) 100%)' }}>
        <div className="container mx-auto px-4 text-center">
          <span className="badge-motorsport red mb-2">Technical Process</span>
          <h1 className="mb-3">SUB-TEAMS & ENGINEERING WORKFLOW</h1>
          <p className="text-muted max-w-700 mx-auto" style={{ maxWidth: '750px' }}>
            From initial CAD design concepts to track testing data telemetry, explore how our multidisciplinary sub-teams transform engineering theory into Formula Student racing reality.
          </p>
        </div>
      </section>

      {/* 6-Step Engineering Pipeline */}
      <section className="section-padding py-5">
        <div className="container mx-auto px-4">
          <div className="row text-center mb-5">
            <div className="col-lg-8 mx-auto">
              <span className="badge-motorsport jute mb-2">Formula Student Methodology</span>
              <h2 className="mb-2">THE 6-STEP ENGINEERING PIPELINE</h2>
              <p className="text-muted">Our structured engineering methodology for vehicle development cycle.</p>
            </div>
          </div>

          <div className="workflow-pipeline">
            {steps.map((s, idx) => (
              <div key={idx} className="workflow-step">
                <div className="pipeline-number">{s.num}</div>
                <h5 className="mb-2">{s.title}</h5>
                <p className="small text-muted mb-0">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Subteam Deep Dives */}
      <section className="section-padding py-5" style={{ background: 'rgba(2, 132, 199, 0.03)' }}>
        <div className="container mx-auto px-4">
          <div className="row text-center mb-5">
            <div className="col-lg-8 mx-auto">
              <span className="badge-motorsport mb-2">Multidisciplinary Divisions</span>
              <h2 className="mb-2">SUB-TEAM TECHNICAL DEEP DIVE</h2>
            </div>
          </div>

          <div className="row g-4">
            {/* Aerodynamics */}
            <div className="col-lg-6">
              <div className="glass-panel p-4 h-100">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div className="dept-icon mb-0">
                    <i className="bi bi-wind"></i>
                  </div>
                  <div>
                    <h4 className="mb-0">Aerodynamics & Jute Composites</h4>
                    <span className="badge-motorsport jute">CFD & Vacuum Resin Bagging</span>
                  </div>
                </div>
                <p className="small text-muted mb-3">
                  The Aerodynamics division designs and fabricates front/rear wings, sidepods, and underbody diffusers to maximize downforce while minimizing drag. Pioneers in natural jute fiber composite matrices to replace costly carbon fiber with eco-friendly local materials.
                </p>
                <div className="p-3 rounded" style={{ background: '#F8FAFC', border: '1.5px solid #0F172A' }}>
                  <div className="small fw-bold mb-2" style={{ color: '#0F172A' }}>Key Software & Tools:</div>
                  <span className="badge bg-white text-dark border me-1 fw-bold">ANSYS Fluent 3D CFD</span>
                  <span className="badge bg-white text-dark border me-1 fw-bold">SolidWorks Surface Design</span>
                  <span className="badge bg-white text-dark border me-1 fw-bold">Vacuum Infusion Pump</span>
                </div>
              </div>
            </div>

            {/* Chassis */}
            <div className="col-lg-6">
              <div className="glass-panel p-4 h-100">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div className="dept-icon mb-0" style={{ color: 'var(--cyan-telemetry)', borderColor: 'var(--cyan-telemetry)', background: '#E0F2FE' }}>
                    <i className="bi bi-bounding-box"></i>
                  </div>
                  <div>
                    <h4 className="mb-0">Chassis & Vehicle Dynamics</h4>
                    <span className="badge-motorsport">Kinematics & FEA</span>
                  </div>
                </div>
                <p className="small text-muted mb-3">
                  Engineers the spaceframe structure protecting the driver while delivering high torsional rigidity. Designs double wishbone pushrod/pullrod suspension geometry, custom CNC aluminum uprights, and steering racks.
                </p>
                <div className="p-3 rounded" style={{ background: '#F8FAFC', border: '1.5px solid #0F172A' }}>
                  <div className="small fw-bold mb-2" style={{ color: '#0F172A' }}>Key Software & Tools:</div>
                  <span className="badge bg-white text-dark border me-1 fw-bold">OptimumG Kinematics</span>
                  <span className="badge bg-white text-dark border me-1 fw-bold">SolidWorks FEA Stress</span>
                  <span className="badge bg-white text-dark border me-1 fw-bold">TIG Welding Rig</span>
                </div>
              </div>
            </div>

            {/* Powertrain */}
            <div className="col-lg-6">
              <div className="glass-panel p-4 h-100">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div className="dept-icon mb-0" style={{ color: 'var(--yellow-accent)', borderColor: 'var(--yellow-accent)', background: '#FEF3C7' }}>
                    <i className="bi bi-lightning-charge"></i>
                  </div>
                  <div>
                    <h4 className="mb-0">Powertrain & Drivetrain</h4>
                    <span className="badge-motorsport red">ECU Dyno Tuning</span>
                  </div>
                </div>
                <p className="small text-muted mb-3">
                  Focuses on maximum power delivery, custom exhaust headers, cooling loops, ECU fuel mapping, quickshifter system, and Drexler limited-slip differential tuning for optimal acceleration out of corners.
                </p>
                <div className="p-3 rounded" style={{ background: '#F8FAFC', border: '1.5px solid #0F172A' }}>
                  <div className="small fw-bold mb-2" style={{ color: '#0F172A' }}>Key Software & Tools:</div>
                  <span className="badge bg-white text-dark border me-1 fw-bold">MoTeC / Megasquirt ECU</span>
                  <span className="badge bg-white text-dark border me-1 fw-bold">Ricardo WAVE Engine Sim</span>
                  <span className="badge bg-white text-dark border me-1 fw-bold">Chassis Dynamometer</span>
                </div>
              </div>
            </div>

            {/* Electronics */}
            <div className="col-lg-6">
              <div className="glass-panel p-4 h-100">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div className="dept-icon mb-0" style={{ color: 'var(--cyan-telemetry)', borderColor: 'var(--cyan-telemetry)', background: '#E0F2FE' }}>
                    <i className="bi bi-cpu"></i>
                  </div>
                  <div>
                    <h4 className="mb-0">Electronics & Telemetry</h4>
                    <span className="badge-motorsport">CAN-Bus & Telemetry</span>
                  </div>
                </div>
                <p className="small text-muted mb-3">
                  Designs custom PCB motherboards, wiring harnesses, digital steering wheel LCD screens, wheel speed sensors, suspension potentiometers, and wireless radio telemetry to pit wall monitors.
                </p>
                <div className="p-3 rounded" style={{ background: '#F8FAFC', border: '1.5px solid #0F172A' }}>
                  <div className="small fw-bold mb-2" style={{ color: '#0F172A' }}>Key Software & Tools:</div>
                  <span className="badge bg-white text-dark border me-1 fw-bold">Altium Designer PCB</span>
                  <span className="badge bg-white text-dark border me-1 fw-bold">CAN-Bus Analyzer</span>
                  <span className="badge bg-white text-dark border me-1 fw-bold">Telemetry React UI</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
