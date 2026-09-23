export interface WorkflowStep {
  step: string;
  name: string;
  desc: string;
  duration?: string;
  deliverables?: string[];
}

export interface SubsystemDetail {
  title: string;
  badge: string;
  description: string;
  bulletPoints: string[];
}

export interface EngineeringPriority {
  component: string;
  goal: string;
  challenge: string;
  solution: string;
}

export interface SubteamSpecification {
  label: string;
  value: string;
  category?: string;
}

export interface SubteamData {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  divisionNumber: string;
  badge: string;
  accentColor: string;
  icon: string;
  coverTagline: string;
  executiveSummary: string;
  scopeAndMission: string;
  enginePackage?: string;
  subsystems: SubsystemDetail[];
  engineeringPriorities: EngineeringPriority[];
  workflow: WorkflowStep[];
  specifications: SubteamSpecification[];
  equations?: {
    title: string;
    description: string;
    formula: string;
    variables: { symbol: string; explanation: string }[];
  }[];
  tools: string[];
  relatedSubteams: { id: string; name: string }[];
}

export const SUBTEAMS_DATA: SubteamData[] = [
  {
    id: 'powertrain',
    slug: 'powertrain',
    title: 'Mechanical Powertrain',
    shortTitle: 'Powertrain',
    divisionNumber: '03',
    badge: 'CFMoto 300SR ICE & Thermal Systems',
    accentColor: '#0284C7',
    icon: 'bi-lightning-charge-fill',
    coverTagline: 'Translating internal combustion torque into blistering tractive acceleration.',
    enginePackage: 'CFMoto 300cc Single-Cylinder DOHC (292cc)',
    executiveSummary:
      'The Mechanical Powertrain sub-sector is responsible for translating the output torque of the CFMoto 300cc internal combustion engine into controllable mechanical motion at the vehicle\'s driven wheels. This division manages internal combustion engine integration, custom fuel containment, intake restrictor sizing, exhaust gas routing, cooling system optimization, and drivetrain power transmission.',
    scopeAndMission:
      'Our engineering mandate spans the complete driveline continuum: from thermal energy release inside the 292cc single-cylinder combustion chamber to high-velocity traction at the rear tire contact patch. By designing custom CNC mounting cradles, multi-stage polyurethane vibration dampers, lightweight aluminum baffled fuel containment, tuned-length exhaust scavenging, and high-efficiency thermal ducting, Powertrain delivers peak tractive effort while strictly respecting Formula Student safety regulations.',
    subsystems: [
      {
        title: '2.1 Primary Power Plant & Driveline',
        badge: 'Core Propulsion',
        description:
          'Direct integration of the high-revving 292cc single-cylinder power unit and torque transfer mechanism.',
        bulletPoints: [
          'Engine Type: Liquid-cooled 292cc single-cylinder 4-stroke DOHC with 4 valves and dual overhead camshafts.',
          'Gearbox Integration: Integrated 6-speed constant-mesh sequential dog-engagement transmission for lightning-quick upshifts.',
          'Clutch Assembly: Wet multi-plate slipper/assist clutch designed to eliminate rear-wheel hop and manage engine braking back-torque during aggressive trail-braking downshifts.',
          'Final Drive: Secondary 520 O-ring racing chain and custom CNC-machined 7075-T6 aluminum rear sprocket assembly transferring drive torque to the rear axle and limited-slip differential.',
        ],
      },
      {
        title: '2.2 Custom Mounting & Isolation Systems',
        badge: 'Structural Integration',
        description:
          'Eliminating chassis stress and mitigating severe single-cylinder harmonic vibrations.',
        bulletPoints: [
          'Mounting Cradle: Custom-machined 3D 6061-T6 aluminum mounting plates rigidly bolted to crankcase mounting bosses.',
          'Vibration Dampening: High-durometer polyurethane isolation bushings installed at triangular chassis hardpoints to absorb primary and secondary single-cylinder force imbalances.',
          'Center of Gravity Optimization: Engine packaged at the lowest permissible floor height within the rear spaceframe bay with 12° forward cylinder inclination for mass centralization.',
        ],
      },
      {
        title: '2.3 Auxiliary Mechanical Systems',
        badge: 'Ancillary & Control',
        description:
          'Precision driver interfaces, tuned scavenging fluid dynamics, and high-capacity heat rejection.',
        bulletPoints: [
          'Shift Linkage: Precision push/pull rod and sealed needle-bearing bellcrank mechanism engineered to deliver tactile, zero-flex driver gear selection.',
          'Exhaust & Intake Geometry: Custom 304 stainless steel stepped header pipe lengths tuned to retain mid-range torque while routing safely clear of suspension A-arms.',
          'Thermal Management: High-density single-core aluminum radiator with forced-air puller fan ducting and composite air shrouding to prevent heat soak in high-load endurance runs.',
          'Custom Baffled Fuel Tank: 4.8L custom-welded aluminum fuel cell with internal anti-slosh baffles, CFMoto in-tank EFI fuel pump module, rollover check valve, sight tube, and 35 mm vertical filler neck.',
        ],
      },
    ],
    engineeringPriorities: [
      {
        component: 'Engine Packaging',
        goal: 'Optimize space utilization and lower vehicle center of gravity.',
        challenge: 'Fitting intake, exhaust header, and oil drain access tightly within the lower frame rails.',
        solution: 'Developed modular slotted 3D engine cradle plates and a low-profile stainless exhaust bend routing over the driveshaft.',
      },
      {
        component: 'Drive Chain Alignment',
        goal: 'Ensure clean power delivery with minimal friction losses.',
        challenge: 'Managing dynamic chain slack variations across full rear suspension travel and chassis twist.',
        solution: 'Positioned output countershaft axis within 65 mm of swingarm pivot line and installed a spring-loaded Delrin chain guide.',
      },
      {
        component: 'Fuel Delivery & EFI',
        goal: 'Ensure reliable high-pressure (3.0 bar) fuel delivery under high-G cornering.',
        challenge: 'Routing high-pressure fuel lines safely away from exhaust heat zones and securing the in-tank pump.',
        solution: 'Fabricated internal vertical baffle chambers with check-valves and installed stainless-braided PTFE lines insulated with heat-reflective sleeving.',
      },
      {
        component: 'Shifter Linkage',
        goal: 'Provide responsive, crisp gear changes through the 6-speed gearbox.',
        challenge: 'Eliminating mechanical play and flex in push/pull linkages across custom driver ergonomics setups.',
        solution: 'Employed aircraft-grade Heim joint rod ends with a 7075-T6 aluminum bellcrank producing a 1:1.1 lever advantage.',
      },
    ],
    workflow: [
      {
        step: '1',
        name: 'CAD Packaging & 3D Spatial Scanning',
        desc: 'Scan CFMoto 300SR crankcase geometry into SolidWorks; position countershaft sprocket relative to rear differential and define chassis mounting hardpoints.',
        duration: 'Weeks 1–3',
        deliverables: ['3D Engine CAD Model', 'Chassis Mounting Envelope', 'CG Calculation Sheet'],
      },
      {
        step: '2',
        name: 'Aluminum Baffled Fuel Tank & EFI Delivery Fabrication',
        desc: 'TIG weld 5052 aluminum sheets to create a 4.8L baffled fuel cell housing the OEM high-pressure fuel pump, rollover valve, and sight-level gauge.',
        duration: 'Weeks 4–6',
        deliverables: ['Welded Baffled Tank', 'Leak & Pressure Test Log', 'PTFE Fuel Line Routing'],
      },
      {
        step: '3',
        name: 'Exhaust Scavenging & Thermal Cooling Shroud CFD',
        desc: 'Design tuned-length 304 stainless header pipes in CAD and optimize radiator air intake ducting using ANSYS Fluent to eliminate thermal dead zones.',
        duration: 'Weeks 7–9',
        deliverables: ['Fabricated Exhaust Header', 'Radiator Shroud CAD', 'Thermal CFD Heatmap'],
      },
      {
        step: '4',
        name: 'Drivetrain Alignment, Chain Tensioner & Shift Mechanism',
        desc: 'Assemble 520 chain drive, machine Delrin tensioner rollers, and install push/pull shift rod linkage with spherical heim joints for zero-slop shifts.',
        duration: 'Weeks 10–12',
        deliverables: ['Chain Drive Assembly', 'Rigid Shift Linkage', 'Bench Shift Cycle Validation'],
      },
      {
        step: '5',
        name: 'Dyno Testing, Restrictor Calibration & Track Validation',
        desc: 'Mount powertrain to test rig, tune ECU fuel injection maps to match intake restrictor airflow, and execute 22 km endurance test simulating track loads.',
        duration: 'Weeks 13–15',
        deliverables: ['ECU Fuel/Ignition Map', 'Endurance Heat Log', '0–100 km/h Telemetry Run'],
      },
    ],
    specifications: [
      { label: 'Engine Model', value: 'CFMoto 300SR (Single-Cylinder 4-Stroke DOHC)' },
      { label: 'Displacement', value: '292 cc (Bore: 78.0 mm × Stroke: 61.2 mm)' },
      { label: 'Compression Ratio', value: '11.0 : 1' },
      { label: 'Peak Torque', value: '25.0 Nm @ 7,000 RPM' },
      { label: 'Peak Horsepower', value: '~28 HP @ 8,750 RPM' },
      { label: 'Transmission', value: '6-speed constant mesh sequential manual' },
      { label: 'Clutch Type', value: 'Wet multi-plate slipper & assist clutch' },
      { label: 'Final Drive', value: '520 O-Ring Chain (Custom 7075-T6 Sprocket)' },
      { label: 'Fuel System', value: 'Bosch Electronic Fuel Injection (3.0 bar)' },
      { label: 'Fuel Cell', value: '4.8L Baffled Aluminum (Al 5052-H32)' },
      { label: 'Cooling Layout', value: 'Single-core aluminum radiator + forced puller fan' },
      { label: 'Lubrication', value: 'Wet sump with forced oil circulation' },
    ],
    equations: [
      {
        title: 'Wheel Torque Calculation',
        description: 'Determines the instantaneous torque delivered to the rear driven wheels based on selected gear and driveline losses.',
        formula: 'T_{wheel} = T_{engine} \\times i_{gear} \\times i_{final} \\times \\eta_{drivetrain}',
        variables: [
          { symbol: 'T_engine', explanation: 'Peak engine torque (~25.0 Nm)' },
          { symbol: 'i_gear', explanation: 'Selected transmission gear ratio (1st: 2.769, 2nd: 1.882, 3rd: 1.400, 4th: 1.130, 5th: 0.960, 6th: 0.840)' },
          { symbol: 'i_final', explanation: 'Final drive sprocket ratio (e.g., 3.43 for 14T front / 48T rear)' },
          { symbol: 'η_drivetrain', explanation: 'Mechanical efficiency of chain and bearings (~0.88 – 0.92)' },
        ],
      },
      {
        title: 'Tractive Effort Calculation',
        description: 'Quantifies the forward thrust force generated at the drive tire contact patch.',
        formula: 'F_{tractive} = \\frac{T_{wheel}}{r_{wheel}}',
        variables: [
          { symbol: 'T_wheel', explanation: 'Net torque delivered to the drive wheels (Nm)' },
          { symbol: 'r_wheel', explanation: 'Effective rolling radius of the rear tires (~0.254 m / 10-inch radius)' },
        ],
      },
    ],
    tools: [
      'CFMoto 300SR 292cc Engine Package',
      'SolidWorks 3D CAD & Clearance Analysis',
      'Custom TIG-Welded Al 5052 Baffled Fuel Cell',
      '304 Stainless Tuned Exhaust Scavenger Header',
      '520 O-Ring Racing Chain & 7075-T6 Sprockets',
      'ANSYS Fluent Thermal Radiator Ducting CFD',
      'Aircraft-Grade Spherical Heim Joint Linkages',
      'High-Pressure Bosch EFI In-Tank Fuel Pump',
    ],
    relatedSubteams: [
      { id: 'chassis', name: 'Chassis & Suspension' },
      { id: 'electrical', name: 'Electrical Systems & DAQ' },
      { id: 'braking', name: 'Braking & Steering' },
    ],
  },
  {
    id: 'chassis',
    slug: 'chassis',
    title: 'Chassis & Suspension',
    shortTitle: 'Chassis',
    divisionNumber: '01',
    badge: 'Structural Backbone & Kinematics',
    accentColor: '#FF2A2A',
    icon: 'bi-bounding-box',
    coverTagline: 'Engineering the rigid steel safety envelope and dynamic suspension kinematics.',
    executiveSummary:
      'Responsible for the vehicle\'s structural backbone, driver cell safety envelope, and dynamic kinematics. The division optimizes torsional rigidity, suspension geometry (camber, caster, roll center, and front vertical swing point length), and manufactures all wishbones, uprights, and shock mounts.',
    scopeAndMission:
      'The chassis serves as the foundation for every subsystem on KILOFLIGHT PHOENIX. Operating under strict Formula SAE safety standards, the team builds a high-torsional-rigidity 4130 chromoly tubular spaceframe that safeguards the pilot while serving as a dynamic platform for our double-unequal-length A-arm suspension.',
    subsystems: [
      {
        title: '1.1 Tubular Spaceframe Safety Cell',
        badge: 'Driver Safety',
        description: 'Precision bent and notched 4130 chromoly steel frame engineered for maximum impact protection.',
        bulletPoints: [
          'Front and Main Roll Hoops built from continuous 25.4 mm × 2.4 mm seamless tubing.',
          'FEA-validated front bulkhead and side impact structure resisting 7 kN longitudinal and 20 kN crush loads.',
          'Integrated roll hoop bracing with triangulated cross-members meeting zero-deflection tolerances.',
        ],
      },
      {
        title: '1.2 Suspension Kinematics & Geometry',
        badge: 'Dynamic Handling',
        description: 'Double unequal-length wishbones engineered for optimal tire contact patch control.',
        bulletPoints: [
          'Optimized roll center migration: Front roll center 35 mm above ground; rear roll center 50 mm.',
          'Dynamic camber gain designed to match tire lateral deflection curves under 1.4G cornering.',
          'Push-rod actuated DNM Burner RCP-2S adjustable mono-shocks with custom aluminum rocker arms.',
        ],
      },
      {
        title: '1.3 CNC Laser Uprights & Wheel Assemblies',
        badge: 'Hub Integration',
        description: 'Lightweight 4 mm sheet metal uprights with precision pressed bearing carriers.',
        bulletPoints: [
          'Designed as 1:1 Flat Patterns exported to DXF for 2D CNC laser cutting and precise jig welding.',
          'Double-shear pickup points eliminating bending moments on suspension spherical joints.',
          'Ultra-compact aluminum wheel hubs compatible with center-lock Formula Student racing wheels.',
        ],
      },
    ],
    engineeringPriorities: [
      {
        component: 'Torsional Stiffness Target',
        goal: 'Achieve >1200 Nm/degree torsional rigidity between front and rear axle planes.',
        challenge: 'Maintaining high rigidity while keeping total tubular chassis weight below 34 kg.',
        solution: 'Implemented multi-bay spaceframe triangulation verified through iterative SolidWorks FEA simulations.',
      },
      {
        component: 'Upright Mass Reduction',
        goal: 'Minimize unsprung mass at all 4 corners for sharp steering response.',
        challenge: 'Withstanding 3G bump and 1.5G cornering loads without plastic deformation.',
        solution: 'Engineered box-section 4 mm high-yield sheet steel uprights with internal lightening pockets.',
      },
    ],
    workflow: [
      {
        step: '1',
        name: 'Kinematics Simulation & Hardpoint Definition',
        desc: 'Model suspension roll center, camber gain, wheel rate, and bump steer curves in specialized dynamics software.',
        duration: 'Weeks 1–3',
      },
      {
        step: '2',
        name: 'Chassis Spaceframe CAD & Rigorous FEA',
        desc: 'Model tubular spaceframe in SolidWorks; perform FEA for front, rear, and side impact scenarios along with torsional stiffness tests.',
        duration: 'Weeks 4–7',
      },
      {
        step: '3',
        name: 'Sheet Metal Upright CAD-to-CAM & Laser Cutting',
        desc: 'Design 4 mm sheet metal uprights, export 1:1 Flat Patterns to DXF for 2D CNC laser cutting, and weld precision fixtures.',
        duration: 'Weeks 8–10',
      },
      {
        step: '4',
        name: 'Jigging, TIG/MIG Welding & Alignment Verification',
        desc: 'Assemble tubes on dedicated chassis jigs, execute TIG/MIG welding, install dampers, and laser-align front and rear track geometry.',
        duration: 'Weeks 11–14',
      },
    ],
    specifications: [
      { label: 'Chassis Type', value: '4130 Chromoly Steel Tubular Spaceframe' },
      { label: 'Torsional Rigidity', value: '> 1,250 Nm / degree' },
      { label: 'Suspension Architecture', value: 'Double unequal-length A-arms (Front & Rear)' },
      { label: 'Dampers', value: 'DNM Burner-RCP 2S coil-over adjustable mono-shocks' },
      { label: 'Wheelbase', value: '1540 mm' },
      { label: 'Track Width', value: 'Front: 1200 mm | Rear: 1160 mm' },
      { label: 'Chassis Weight', value: '~32 kg (Bare Frame)' },
    ],
    tools: ['SolidWorks FEA', 'OptimumG Kinematics', 'CNC Laser DXF', 'TIG/MIG Welding Jig', 'DNM Burner Damper Rig'],
    relatedSubteams: [
      { id: 'powertrain', name: 'Mechanical Powertrain' },
      { id: 'aero', name: 'Body & Aerodynamics' },
      { id: 'braking', name: 'Braking & Steering' },
    ],
  },
  {
    id: 'aero',
    slug: 'aero',
    title: 'Body & Aerodynamics',
    shortTitle: 'Aerodynamics',
    divisionNumber: '02',
    badge: '7-Layer Bio-Composites & CFD',
    accentColor: '#B45309',
    icon: 'bi-wind',
    coverTagline: 'Pioneering natural Jute composites and computational fluid dynamics.',
    executiveSummary:
      'Directs aerodynamic downforce generation, drag reduction, thermal ducting, and the fabrication of lightweight composite exterior surfaces. The team pioneers sustainable automotive engineering by utilizing natural Jute-fiber composites.',
    scopeAndMission:
      'Aerodynamics at Team KILOFLIGHT merges cutting-edge CFD numerical simulation with homegrown Bangladeshi sustainability. By developing 7-layer Jute bio-composite matrices, the team produces nose cones, sidepods, and underbody diffusers that reduce drag while demonstrating ecological motorsport materials on the world stage.',
    subsystems: [
      {
        title: '2.1 Sustainable Jute Bio-Composites',
        badge: 'Eco-Innovation',
        description: 'Eco-friendly natural fiber composite manufacturing replacing synthetic fiberglass.',
        bulletPoints: [
          '7-layer cross-woven natural Jute fabric hand layups with sodium silicate and epoxy matrices.',
          'Achieves high tensile-to-weight ratio with superior vibration dampening characteristics.',
          'Vacuum bag cured panels with smooth gel-coat finish for minimum boundary layer skin drag.',
        ],
      },
      {
        title: '2.2 Aerodynamic Downforce Wings & Diffusers',
        badge: 'CFD Optimization',
        description: 'Multi-element front and rear wing profiles balancing cornering grip and top speed.',
        bulletPoints: [
          'Multi-element wing airfoils with chord lengths 180 mm – 230 mm optimized via ANSYS Fluent.',
          'Full-length underbody venturi tunnel creating clean ground-effect suction towards the rear.',
          'Endplate footplates and vortex generators shedding turbulent air around front tires.',
        ],
      },
      {
        title: '2.3 Rule-Compliant Impact Attenuator',
        badge: 'Crash Safety',
        description: 'Crushable composite structure protecting the pilot during full frontal decelerations.',
        bulletPoints: [
          'Constructed from crushable aluminum honeycomb / bio-composite multi-density core.',
          'Absorbs minimum 7,350 Joules of energy under 20G peak deceleration without bulkhead intrusion.',
          'Rigidly mounted to the 4 mm steel anti-intrusion front bulkhead plate.',
        ],
      },
    ],
    engineeringPriorities: [
      {
        component: 'Bio-Resin Curing & Moisture Resistance',
        goal: 'Ensure zero moisture absorption and dimensional stability in tropical humidity.',
        challenge: 'Raw Jute fibers absorb ambient moisture which degrades resin matrix adhesion.',
        solution: 'Pre-treated Jute textiles in chemical baths and applied an aerospace polyurethane sealant topcoat.',
      },
      {
        component: 'Front Wing Wake Management',
        goal: 'Prevent dirty turbulent airflow from entering radiator sidepod inlets.',
        challenge: 'Front wheel rotation creates massive turbulent wake directly in the sidepod path.',
        solution: 'Engineered outward-turned wing endplate cascades that redirect wheel wake outward.',
      },
    ],
    workflow: [
      {
        step: '1',
        name: 'Airfoil & Aerodynamic Numerical CFD',
        desc: 'Design multi-element front and rear wing airfoils (chord lengths 180 mm – 230 mm) and run computational fluid dynamics (CFD) for optimal lift-to-drag ratios.',
        duration: 'Weeks 1–3',
      },
      {
        step: '2',
        name: 'Mold Making & Precision Jute Layup',
        desc: 'Construct precision positive/negative molds for nose cones, sidepods, and undertrays; execute 7-layer Jute composite hand layups with sodium silicate, resin, and hardener matrices.',
        duration: 'Weeks 4–7',
      },
      {
        step: '3',
        name: 'Impact Attenuator Fabrication & Testing',
        desc: 'Build and mount the rule-compliant energy-absorbing impact attenuator to the front anti-intrusion plate.',
        duration: 'Weeks 8–10',
      },
      {
        step: '4',
        name: 'Quick-Release Bodywork Mounting',
        desc: 'Secure panels and wings with quick-release fasteners to chassis hardpoints ensuring minimum vibration and zero dynamic deflection.',
        duration: 'Weeks 11–13',
      },
    ],
    specifications: [
      { label: 'Composite Material', value: '7-Layer Natural Jute Fabric Bio-Composite' },
      { label: 'Matrix System', value: 'Sodium Silicate & Epoxy Hardener' },
      { label: 'Front Wing Span', value: '1100 mm (Multi-Element with Endplates)' },
      { label: 'Rear Wing Height', value: '1150 mm from ground plane' },
      { label: 'Impact Attenuator', value: 'Standard Foam / Honeycomb Core (>7,350 J Absorption)' },
      { label: 'Total Bodywork Mass', value: '< 14 kg (Full Shell + Wings)' },
    ],
    tools: ['ANSYS Fluent CFD', 'Surface Modeling', 'Hand Layup Matrices', 'Sodium Silicate Bio-Resin', 'Quick-Release Fasteners'],
    relatedSubteams: [
      { id: 'chassis', name: 'Chassis & Suspension' },
      { id: 'powertrain', name: 'Mechanical Powertrain' },
    ],
  },
  {
    id: 'electrical',
    slug: 'electrical',
    title: 'Electrical Systems & DAQ',
    shortTitle: 'Electrical',
    divisionNumber: '04',
    badge: '12V Harness, Safety Loop & ECU',
    accentColor: '#16A34A',
    icon: 'bi-cpu-fill',
    coverTagline: 'Powering low-voltage microcontrollers, safety circuits, and live telemetry.',
    executiveSummary:
      'Engineers the low-voltage 12V DC power distribution network, engine control unit (ECU) calibration, in-series safety shutdown loop, sensor array integration, and live telemetry data acquisition.',
    scopeAndMission:
      'The Electrical Systems & DAQ division oversees every milliamp of electrical energy on KILOFLIGHT PHOENIX. From designing aerospace-grade sealed raychem harnesses to programming CAN-bus microcontrollers and logging high-frequency vehicle telemetry, this team delivers electrical reliability and digital insight.',
    subsystems: [
      {
        title: '4.1 In-Series Safety Shutdown Circuit',
        badge: 'Rule Compliance',
        description: 'Fail-safe electrical loop guaranteeing immediate vehicle power disconnection.',
        bulletPoints: [
          'In-series hardwired loop connecting primary battery master switch, cockpit kill switch, and exterior safety toggles.',
          'Mechanical Brake Over-Travel Switch (BOTS) wired through latching relays to kill ignition if brake pedal bottoms out.',
          'Inertia crash shut-off switch cutting fuel pump and ignition upon any 6G deceleration impact.',
        ],
      },
      {
        title: '4.2 Wire Harness Architecture & Power Distribution',
        badge: 'Low-Voltage Hub',
        description: 'Raychem DR-25 heat-shrink loomed wiring harness with Deutsch sealed connectors.',
        bulletPoints: [
          'Solid-state power distribution module replacing conventional fuses with programmable current limiting.',
          'Modular harness sections (Engine, Dashboard, Sensor Bus) allowing rapid sub-assembly swaps.',
          'Dedicated noise-isolated sensor grounding preventing ignition coil interference.',
        ],
      },
      {
        title: '4.3 CAN-Bus Sensor Array & Live Telemetry',
        badge: 'Digital Cockpit',
        description: 'High-frequency data logging measuring real-time race car performance.',
        bulletPoints: [
          'Hall-effect wheel speed sensors logging individual wheel slip for launch control.',
          'Engine monitoring sensors: Oil pressure, coolant temperature, throttle position (TPS), and lambda sensor.',
          'Driver cockpit OLED display showing RPM shift lights, lap timer, and critical diagnostic warnings.',
        ],
      },
    ],
    engineeringPriorities: [
      {
        component: 'Noise Isolation from Single-Cylinder Ignition',
        goal: 'Eliminate false sensor triggers from spark plug electromagnetic interference (EMI).',
        challenge: 'High-voltage spark discharge causes severe inductive spikes in adjacent sensor wires.',
        solution: 'Employed twisted-shielded pair wiring with drain wires grounded solely at a central star ground point.',
      },
      {
        component: 'Waterproof & Vibration Proofing',
        goal: 'Ensure 100% electrical reliability under torrential wet rain race conditions.',
        challenge: 'Water ingress into relay sockets and connectors can ground out the safety loop.',
        solution: 'Standardized on IP67 Deutsch DT/DTM connectors and potted all custom circuit boards in epoxy resin.',
      },
    ],
    workflow: [
      {
        step: '1',
        name: 'System Schematics & Electrical Architecture',
        desc: 'Design complete vehicle wire harness schematics including fusing, master disconnect switches, and relay logic.',
        duration: 'Weeks 1–3',
      },
      {
        step: '2',
        name: 'Safety Shutdown Circuit & BOTS Integration',
        desc: 'Wire the master kill switches, cockpit emergency stop, and the mechanical Brake Over-Travel Switch (BOTS) with latching relays.',
        duration: 'Weeks 4–6',
      },
      {
        step: '3',
        name: 'Sensor Integration & Live DAQ Logging',
        desc: 'Install wheel-speed sensors, throttle position sensors, and temperature probes linked to digital dashboard logging modules.',
        duration: 'Weeks 7–9',
      },
      {
        step: '4',
        name: 'ECU Tuning & Hardware-in-the-Loop Diagnostics',
        desc: 'Map engine ignition and fuel injection curves to match restrictor aerodynamics and validate electrical noise isolation.',
        duration: 'Weeks 10–12',
      },
    ],
    specifications: [
      { label: 'System Voltage', value: '12V DC Nominal (LiFePO4 Lightweight Battery)' },
      { label: 'Safety Loop', value: 'Hardwired in-series fail-safe with latching relay logic' },
      { label: 'Communication Bus', value: 'High-Speed CAN 2.0B (500 kbps / 1 Mbps)' },
      { label: 'Sensors Logged', value: '4x Wheel Speeds, TPS, Coolant Temp, Oil Pressure, Lambda' },
      { label: 'Driver Display', value: 'High-contrast OLED with multi-color sequential shift LEDs' },
      { label: 'Harness Loom', value: 'Raychem DR-25 & Deutsch DTM Sealed Connectors' },
    ],
    tools: ['Wire Harness Schematics', 'BOTS Safety Latch', 'ECU Fuel Mapping', 'CAN Telemetry Sensors', 'Digital Dash Logger'],
    relatedSubteams: [
      { id: 'powertrain', name: 'Mechanical Powertrain' },
      { id: 'braking', name: 'Braking & Steering' },
    ],
  },
  {
    id: 'braking',
    slug: 'braking',
    title: 'Braking & Steering',
    shortTitle: 'Braking & Steering',
    divisionNumber: '05',
    badge: 'CNC 3-Pedal Box & 10% Ackermann',
    accentColor: '#E11D48',
    icon: 'bi-gear-wide-connected',
    coverTagline: 'Precision driver ergonomics, hydraulic bias, and 4-wheel dynamic lockup.',
    executiveSummary:
      'Oversees driver controls, deceleration kinematics, hydraulic circuit independence, pedal box structural integrity, and steering rack geometry.',
    scopeAndMission:
      'Deceleration and steering response define driver confidence on technical Formula Student circuits. The Braking & Steering division manufactures custom CNC aluminum pedal assemblies, dual independent hydraulic master cylinders with an adjustable balance bar, and a quick-ratio rack-and-pinion tuned to 10% Ackermann geometry.',
    subsystems: [
      {
        title: '5.1 Custom CNC 6061-T6 3-Pedal Box',
        badge: 'Driver Controls',
        description: 'Lightweight, adjustable aluminum pedal assembly with customized mechanical advantage ratios.',
        bulletPoints: [
          'CNC milled and laser-cut 6061-T6 aluminum side plates housing throttle, brake, and clutch pedals.',
          'Adjustable pedal ratio (4.5:1 to 5.2:1) allowing drivers to calibrate pedal travel and required foot pressure.',
          'Dual throttle return tension springs mounted with adjustable eye-bolts and integrated mechanical BOTS trigger.',
        ],
      },
      {
        title: '5.2 Dual Independent Hydraulic Brake Circuits',
        badge: 'Hydraulic Bias',
        description: 'Redundant front and rear hydraulic circuits meeting rigorous FSAE safety testing.',
        bulletPoints: [
          'Two independent master cylinders connected via a threaded balance bar for on-the-fly front/rear brake bias adjustment.',
          'Floating stainless steel cross-drilled brake rotors engineered for rapid heat dissipation.',
          'Rigid stainless-steel braided Teflon hydraulic lines delivering zero pedal spongeiness under hard braking.',
        ],
      },
      {
        title: '5.3 Quick-Ratio Rack-and-Pinion Steering',
        badge: 'Kinematic Steering',
        description: 'Compact 300 mm aluminum rack providing razor-sharp feedback with minimal lock-to-lock travel.',
        bulletPoints: [
          'Engineered with 10% Ackermann geometry to eliminate tire scrub and optimize inner-tire slip angle in tight hairpins.',
          'Quick-release steering hub compliant with the mandatory 5-second driver egress regulation.',
          'CNC-machined aluminum steering arms with zero-play rod ends attached directly to wheel uprights.',
        ],
      },
    ],
    engineeringPriorities: [
      {
        component: 'Mandatory 2000 N Dynamic 4-Wheel Brake Lockup',
        goal: 'Lock all 4 wheels simultaneously at race speed to pass Formula Student technical scrutiny.',
        challenge: 'Balancing front/rear hydraulic displacement without causing premature front-only lockup.',
        solution: 'Fine-tuned master cylinder piston diameters (15.8 mm front / 19.0 mm rear) coupled with balance bar bias.',
      },
      {
        component: 'Steering Rack Zero Play & Driver Egress',
        goal: 'Eliminate compliance and permit driver escape in under 5 seconds.',
        challenge: 'Tight space constraints inside the forward driver cell nose bulkhead.',
        solution: 'Mounted steering rack directly atop the lower bulkhead with an FIA-approved quick-release hub.',
      },
    ],
    workflow: [
      {
        step: '1',
        name: 'Pedal Box Kinematic Sizing & CNC Milling',
        desc: 'CNC mill and laser-cut Al 6061 plate assemblies to house throttle, brake, and hydraulic clutch pedals with calculated pedal ratios.',
        duration: 'Weeks 1–3',
      },
      {
        step: '2',
        name: 'Dual Hydraulic Master Cylinder Plumbing',
        desc: 'Integrate two master cylinders connected via a threaded balance bar to allow manual front-to-rear brake bias adjustment.',
        duration: 'Weeks 4–6',
      },
      {
        step: '3',
        name: 'Throttle Redundancy & BOTS Trigger Integration',
        desc: 'Mount dual throttle return tension springs with adjustable eye-bolts and integrate the mechanical BOTS trigger bracket.',
        duration: 'Weeks 7–9',
      },
      {
        step: '4',
        name: 'Steering Assembly & 2000 N Lockup Scrutiny Test',
        desc: 'Mount the 300 mm aluminum rack-and-pinion assembly aligned to 10% Ackermann geometry and validate the mandatory 2000 N 4-wheel dynamic brake lockup test.',
        duration: 'Weeks 10–12',
      },
    ],
    specifications: [
      { label: 'Pedal Box Material', value: 'CNC Milled Al 6061-T6 Aircraft Aluminum' },
      { label: 'Pedal Ratio', value: 'Adjustable 4.8 : 1 Nominal' },
      { label: 'Master Cylinders', value: 'Dual Independent Master Cylinders with Balance Bar' },
      { label: 'Brake Lines', value: 'Stainless Steel Braided PTFE (-3 AN)' },
      { label: 'Steering Rack', value: '300 mm Custom Aluminum Rack & Pinion' },
      { label: 'Steering Geometry', value: '10% Ackermann Kinematics' },
      { label: 'Brake Discs', value: 'Laser-cut 410 Stainless Steel Floating Rotors' },
    ],
    tools: ['CNC Al 6061 Pedal Box', 'Dual Master Cylinders', 'Threaded Balance Bar', '7075-T6 300mm Rack', '2000 N Lockup Rig'],
    relatedSubteams: [
      { id: 'chassis', name: 'Chassis & Suspension' },
      { id: 'electrical', name: 'Electrical Systems & DAQ' },
    ],
  },
  {
    id: 'business',
    slug: 'business',
    title: 'Business, Media & Content',
    shortTitle: 'Business & Media',
    divisionNumber: '06',
    badge: 'Corporate Outreach & Static Events',
    accentColor: '#D97706',
    icon: 'bi-megaphone-fill',
    coverTagline: 'Funding race car fabrication, driving media outreach, and presenting the business case.',
    executiveSummary:
      'Drives corporate fundraising campaigns, brand sponsorships, digital content production, event exhibition coordination, and international competition static event deliverables.',
    scopeAndMission:
      'A Formula Student team is an engineering startup. The Business, Media & Content division secures corporate partnerships, produces world-class digital media, manages community exhibitions, and prepares the static competition reports: Cost & Manufacturing, Business Plan Presentation (BPP), and Engineering Design.',
    subsystems: [
      {
        title: '6.1 Corporate Sponsorships & Partnership Alliances',
        badge: 'Fundraising',
        description: 'Securing industrial partners, material donations, and financial sponsorship tiers.',
        bulletPoints: [
          'Drafted tailored corporate pitch decks targeting leading automotive, steel, and technology firms.',
          'Offers high-visibility brand exposure across team race cars, social media reels, and event exhibitions.',
          'Manages financial accounting, expenditure audits, and sponsor progress reports.',
        ],
      },
      {
        title: '6.2 Digital Media & Brand Storytelling',
        badge: 'Public Relations',
        description: 'Documenting the engineering journey and building a passionate motorsport following.',
        bulletPoints: [
          'Produces cinematic video reels, build vlogs, and technical social media breakdowns.',
          'Manages the official Team KILOFLIGHT web portal, documentation hubs, and newsletters.',
          'Organizes interactive university and national auto expo exhibitions (e.g., Bangladesh AutoFest).',
        ],
      },
      {
        title: '6.3 Competition Static Event Preparation',
        badge: 'FSAE Scoring',
        description: 'Maximizing team points in the three official Formula Student static evaluation events.',
        bulletPoints: [
          'Cost & Manufacturing Report (CRD): Complete Bill of Materials (BOM) auditing every nut, bolt, and weld seam.',
          'Business Plan Presentation (BPP): Pitching a viable 1,000-unit annual commercial production model to VC judges.',
          'Engineering Design Binder: Comprehensive documentation justifying every engineering decision with math and data.',
        ],
      },
    ],
    engineeringPriorities: [
      {
        component: 'Cost Report Audit Accuracy',
        goal: 'Account for 100% of car components with zero cost penalties in tech inspection.',
        challenge: 'Cross-referencing hundreds of custom-machined components against the official FSAE cost table.',
        solution: 'Developed an automated parts inventory tracking spreadsheet connected to CAD assemblies.',
      },
      {
        component: 'Corporate Sponsor Conversion',
        goal: 'Secure industrial backing for raw 4130 steel, composite resins, and CNC machining hours.',
        challenge: 'Educating local Bangladeshi manufacturing enterprises on student motorsport value.',
        solution: 'Emphasized technical R&D publicity, recruitment pipelines for top KUET graduates, and CSR visibility.',
      },
    ],
    workflow: [
      {
        step: '1',
        name: 'Corporate Sponsorship Pitching & Partner Acquisition',
        desc: 'Draft and pitch customized value propositions to automotive, engineering, and logistics corporations.',
        duration: 'Ongoing',
      },
      {
        step: '2',
        name: 'Media, Web Content & Public Relations',
        desc: 'Curate official website content, manage social media reels, publish newsletters, and coordinate live exhibition booths (e.g., Bangladesh AutoFest).',
        duration: 'Weekly',
      },
      {
        step: '3',
        name: 'Cost & Manufacturing Report (CRD) Compilation',
        desc: 'Audit every material, tooling process, and fastener into the official Formula Student BOM template.',
        duration: 'Weeks 8–11',
      },
      {
        step: '4',
        name: 'Business Plan Presentation (BPP) Pitch Defense',
        desc: 'Rehearse commercial pitch presentation to mock investors and simulate judge Q&A cross-examination.',
        duration: 'Weeks 12–14',
      },
    ],
    specifications: [
      { label: 'Static Events Managed', value: 'Cost & Manufacturing (CRD), Business Plan (BPP), Design Event' },
      { label: 'Target Annual Production', value: '1,000 units / year (BPP Case Study)' },
      { label: 'Exhibitions Participated', value: 'KUET Tech Expo, Bangladesh AutoFest, STEM Showcases' },
      { label: 'Digital Channels', value: 'Official Web Portal, YouTube, LinkedIn, Facebook, Instagram' },
      { label: 'Sponsorship Tiers', value: 'Title Partner, Gold, Silver, Material / Technical Partner' },
    ],
    tools: ['Cost & Mfg Report (CRD)', 'Business Plan Presentation', 'Sponsorship Pitch Decks', 'Website & Social Production', 'AutoFest Logistics'],
    relatedSubteams: [
      { id: 'powertrain', name: 'Mechanical Powertrain' },
      { id: 'chassis', name: 'Chassis & Suspension' },
    ],
  },
];

export function getSubteamBySlug(slug: string): SubteamData | undefined {
  return SUBTEAMS_DATA.find((s) => s.slug === slug || s.id === slug);
}

export function getAllSubteamSlugs(): string[] {
  return SUBTEAMS_DATA.map((s) => s.slug);
}
