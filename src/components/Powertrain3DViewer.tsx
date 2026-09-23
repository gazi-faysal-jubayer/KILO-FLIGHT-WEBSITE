'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface Hotspot {
  id: number;
  name: string;
  badge: string;
  description: string;
  position: [number, number, number];
  cameraTarget: [number, number, number];
}

const HOTSPOTS: Hotspot[] = [
  {
    id: 1,
    name: 'CFMoto 292cc DOHC Engine Block',
    badge: 'Propulsion Unit',
    description: 'Liquid-cooled 4-stroke single cylinder with 4 valves and dual overhead cams. Delivers 25.0 Nm torque @ 7,000 RPM with 12° forward tilt for mass centralization.',
    position: [0, 0.4, 0],
    cameraTarget: [0, 0.5, 2.2],
  },
  {
    id: 2,
    name: '3D CNC 6061-T6 Aluminum Cradle',
    badge: 'Mounting & Dampers',
    description: 'Precision milled side plates rigidly secured to crankcase bosses. High-durometer polyurethane bushings isolate single-cylinder primary harmonic vibrations.',
    position: [0, -0.4, 0],
    cameraTarget: [0, -0.3, 2.0],
  },
  {
    id: 3,
    name: '520 Chain & CNC Rear Sprocket',
    badge: 'Torque Transfer',
    description: 'High-tensile 520 O-ring racing chain transferring torque from countershaft sprocket to rear differential. 3.428 final drive ratio (14T / 48T).',
    position: [1.2, -0.2, 0.2],
    cameraTarget: [1.2, 0, 2.0],
  },
  {
    id: 4,
    name: 'Tuned 304 Stainless Exhaust Header',
    badge: 'Gas Scavenging',
    description: 'Stepped primary header length tuned for maximum mid-range torque pulse extraction. Routes tightly over driveshafts avoiding suspension A-arms.',
    position: [0.5, 0.8, -0.4],
    cameraTarget: [0.6, 0.8, 1.8],
  },
  {
    id: 5,
    name: 'Aluminum 5052 Baffled Fuel Cell',
    badge: 'Fuel Containment',
    description: '4.8L custom TIG-welded tank with multi-chamber anti-slosh vertical baffles, internal Bosch EFI high-pressure pump, and rollover breather valve.',
    position: [-1.4, -0.1, 0.2],
    cameraTarget: [-1.4, 0.2, 2.2],
  },
];

export default function Powertrain3DViewer() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(null);
  const [isExploded, setIsExploded] = useState<boolean>(false);
  const [isAutoRotate, setIsAutoRotate] = useState<boolean>(true);
  const [rpm, setRpm] = useState<number>(3500);
  const [isRevving, setIsRevving] = useState<boolean>(false);

  // References to 3D sub-objects for animation
  const engineGroupRef = useRef<THREE.Group | null>(null);
  const exhaustGroupRef = useRef<THREE.Group | null>(null);
  const fuelTankGroupRef = useRef<THREE.Group | null>(null);
  const chainGroupRef = useRef<THREE.Group | null>(null);
  const radiatorGroupRef = useRef<THREE.Group | null>(null);
  const cradleGroupRef = useRef<THREE.Group | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight || 480;

    // 1. Scene Setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0f1d); // Dark motorsport slate navy
    scene.fog = new THREE.FogExp2(0x0a0f1d, 0.12);

    // 2. Camera Setup
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(2.8, 2.0, 3.8);
    cameraRef.current = camera;

    // 3. Renderer Setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // 4. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 1.4);
    dirLight1.position.set(5, 8, 5);
    dirLight1.castShadow = true;
    scene.add(dirLight1);

    const cyanRimLight = new THREE.PointLight(0x0284c7, 3.5, 12);
    cyanRimLight.position.set(-4, 3, -3);
    scene.add(cyanRimLight);

    const redAccentLight = new THREE.PointLight(0xff2a2a, 2.5, 10);
    redAccentLight.position.set(3, -2, 2);
    scene.add(redAccentLight);

    // 5. Floor Grid
    const gridHelper = new THREE.GridHelper(10, 20, 0xff2a2a, 0x1e293b);
    gridHelper.position.y = -1.2;
    scene.add(gridHelper);

    // Subtle turntable base ring
    const ringGeo = new THREE.RingGeometry(2.4, 2.45, 64);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0x0284c7, side: THREE.DoubleSide });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.rotation.x = Math.PI / 2;
    ringMesh.position.y = -1.19;
    scene.add(ringMesh);

    // 6. Materials
    const metalMat = new THREE.MeshStandardMaterial({
      color: 0x334155,
      metalness: 0.85,
      roughness: 0.25,
    });

    const cylinderHeadMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      metalness: 0.9,
      roughness: 0.2,
    });

    const cradleMat = new THREE.MeshStandardMaterial({
      color: 0x94a3b8,
      metalness: 0.75,
      roughness: 0.3,
    });

    const stainlessExhaustMat = new THREE.MeshStandardMaterial({
      color: 0xd97706,
      metalness: 0.8,
      roughness: 0.35,
    });

    const aluminumTankMat = new THREE.MeshStandardMaterial({
      color: 0xe2e8f0,
      metalness: 0.88,
      roughness: 0.22,
    });

    const chainMat = new THREE.MeshStandardMaterial({
      color: 0xffd700,
      metalness: 0.9,
      roughness: 0.3,
    });

    const radiatorMat = new THREE.MeshStandardMaterial({
      color: 0x475569,
      metalness: 0.7,
      roughness: 0.4,
    });

    // 7. Construct 3D Assembly Groups
    const masterAssembly = new THREE.Group();
    scene.add(masterAssembly);

    // A. Engine Block Group
    const engineGroup = new THREE.Group();
    engineGroupRef.current = engineGroup;

    // Crankcase
    const crankcaseGeo = new THREE.BoxGeometry(0.85, 0.65, 0.9);
    const crankcaseMesh = new THREE.Mesh(crankcaseGeo, metalMat);
    crankcaseMesh.castShadow = true;
    engineGroup.add(crankcaseMesh);

    // Inclined Cylinder Barrel (12 deg forward)
    const cylinderGeo = new THREE.CylinderGeometry(0.3, 0.32, 0.75, 24);
    const cylinderMesh = new THREE.Mesh(cylinderGeo, cylinderHeadMat);
    cylinderMesh.position.set(0, 0.55, -0.05);
    cylinderMesh.rotation.z = -0.15; // 12 deg tilt
    cylinderMesh.castShadow = true;
    engineGroup.add(cylinderMesh);

    // DOHC Head Cover
    const headCoverGeo = new THREE.BoxGeometry(0.55, 0.25, 0.5);
    const headCoverMesh = new THREE.Mesh(headCoverGeo, metalMat);
    headCoverMesh.position.set(-0.1, 0.98, -0.05);
    headCoverMesh.rotation.z = -0.15;
    engineGroup.add(headCoverMesh);

    // Spark Plug detail
    const plugGeo = new THREE.CylinderGeometry(0.04, 0.04, 0.15, 12);
    const plugMat = new THREE.MeshStandardMaterial({ color: 0xff2a2a, metalness: 0.5 });
    const plugMesh = new THREE.Mesh(plugGeo, plugMat);
    plugMesh.position.set(-0.1, 1.15, -0.05);
    engineGroup.add(plugMesh);

    masterAssembly.add(engineGroup);

    // B. Engine Mounting Cradle Group
    const cradleGroup = new THREE.Group();
    cradleGroupRef.current = cradleGroup;

    // Left & Right Aluminum plates
    const plateGeo = new THREE.BoxGeometry(0.95, 0.08, 1.1);
    const bottomPlate = new THREE.Mesh(plateGeo, cradleMat);
    bottomPlate.position.set(0, -0.38, 0);
    cradleGroup.add(bottomPlate);

    const sidePlateGeo = new THREE.BoxGeometry(0.08, 0.6, 1.0);
    const leftPlate = new THREE.Mesh(sidePlateGeo, cradleMat);
    leftPlate.position.set(-0.46, -0.1, 0);
    cradleGroup.add(leftPlate);

    const rightPlate = new THREE.Mesh(sidePlateGeo, cradleMat);
    rightPlate.position.set(0.46, -0.1, 0);
    cradleGroup.add(rightPlate);

    // Polyurethane dampers (colored red/orange)
    const bushingMat = new THREE.MeshStandardMaterial({ color: 0xff2a2a, roughness: 0.5 });
    for (let bx of [-0.48, 0.48]) {
      for (let bz of [-0.4, 0.4]) {
        const bushing = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 0.16, 16), bushingMat);
        bushing.position.set(bx, -0.4, bz);
        cradleGroup.add(bushing);
      }
    }
    masterAssembly.add(cradleGroup);

    // C. Exhaust Header Group
    const exhaustGroup = new THREE.Group();
    exhaustGroupRef.current = exhaustGroup;

    // Sweeping header curve
    const headerCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0.1, 0.7, 0.1),
      new THREE.Vector3(0.35, 0.75, 0.2),
      new THREE.Vector3(0.65, 0.6, 0.0),
      new THREE.Vector3(0.75, 0.2, -0.3),
      new THREE.Vector3(0.85, -0.1, -0.8),
    ]);
    const headerTubeGeo = new THREE.TubeGeometry(headerCurve, 32, 0.08, 16, false);
    const headerMesh = new THREE.Mesh(headerTubeGeo, stainlessExhaustMat);
    exhaustGroup.add(headerMesh);

    // Muffler Canister
    const mufflerGeo = new THREE.CylinderGeometry(0.14, 0.14, 0.9, 20);
    const mufflerMesh = new THREE.Mesh(mufflerGeo, metalMat);
    mufflerMesh.position.set(0.85, -0.1, -1.25);
    mufflerMesh.rotation.x = Math.PI / 2;
    exhaustGroup.add(mufflerMesh);

    masterAssembly.add(exhaustGroup);

    // D. Driveline & Chain Group
    const chainGroup = new THREE.Group();
    chainGroupRef.current = chainGroup;

    // Countershaft front sprocket (14T)
    const frontSprocketGeo = new THREE.CylinderGeometry(0.18, 0.18, 0.06, 24);
    const frontSprocket = new THREE.Mesh(frontSprocketGeo, chainMat);
    frontSprocket.rotation.x = Math.PI / 2;
    frontSprocket.position.set(0.48, -0.1, 0.4);
    chainGroup.add(frontSprocket);

    // Rear Axle Driven Sprocket (48T)
    const rearSprocketGeo = new THREE.CylinderGeometry(0.48, 0.48, 0.06, 32);
    const rearSprocket = new THREE.Mesh(rearSprocketGeo, metalMat);
    rearSprocket.rotation.x = Math.PI / 2;
    rearSprocket.position.set(1.4, -0.1, 0.4);
    chainGroup.add(rearSprocket);

    // Chain links (upper and lower strands)
    const upperChainGeo = new THREE.BoxGeometry(0.95, 0.035, 0.05);
    const upperChain = new THREE.Mesh(upperChainGeo, chainMat);
    upperChain.position.set(0.94, 0.15, 0.4);
    chainGroup.add(upperChain);

    const lowerChain = new THREE.Mesh(upperChainGeo, chainMat);
    lowerChain.position.set(0.94, -0.35, 0.4);
    chainGroup.add(lowerChain);

    masterAssembly.add(chainGroup);

    // E. Baffled Aluminum Fuel Tank Group
    const fuelTankGroup = new THREE.Group();
    fuelTankGroupRef.current = fuelTankGroup;

    const tankGeo = new THREE.BoxGeometry(0.8, 0.65, 0.7);
    const tankMesh = new THREE.Mesh(tankGeo, aluminumTankMat);
    tankMesh.position.set(-1.2, -0.05, 0.1);
    fuelTankGroup.add(tankMesh);

    // Filler neck & red cap
    const neckGeo = new THREE.CylinderGeometry(0.09, 0.09, 0.18, 20);
    const capMat = new THREE.MeshStandardMaterial({ color: 0xff2a2a, metalness: 0.8 });
    const neckMesh = new THREE.Mesh(neckGeo, capMat);
    neckMesh.position.set(-1.2, 0.35, 0.1);
    fuelTankGroup.add(neckMesh);

    // Level sight tube on side
    const sightTubeGeo = new THREE.CylinderGeometry(0.02, 0.02, 0.45, 12);
    const sightMat = new THREE.MeshStandardMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.85 });
    const sightMesh = new THREE.Mesh(sightTubeGeo, sightMat);
    sightMesh.position.set(-0.78, -0.05, 0.1);
    fuelTankGroup.add(sightMesh);

    masterAssembly.add(fuelTankGroup);

    // F. Radiator & Air Cooling Shroud Group
    const radiatorGroup = new THREE.Group();
    radiatorGroupRef.current = radiatorGroup;

    const radCoreGeo = new THREE.BoxGeometry(0.65, 0.65, 0.12);
    const radCore = new THREE.Mesh(radCoreGeo, radiatorMat);
    radCore.position.set(-0.2, 0.1, 0.95);
    radCore.rotation.y = 0.2;
    radiatorGroup.add(radCore);

    // Fan shroud
    const fanGeo = new THREE.CylinderGeometry(0.24, 0.24, 0.06, 24);
    const fanMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, metalness: 0.5 });
    const fanMesh = new THREE.Mesh(fanGeo, fanMat);
    fanMesh.rotation.x = Math.PI / 2;
    fanMesh.position.set(-0.2, 0.1, 0.88);
    fanMesh.rotation.y = 0.2;
    radiatorGroup.add(fanMesh);

    masterAssembly.add(radiatorGroup);

    // 8. Mouse Orbit Controls Logic (Zero Dependency)
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    let rotationVelocity = { x: 0, y: 0 };
    let sphericalCoords = { radius: 4.8, theta: 0.8, phi: 1.1 };

    const updateCameraFromSpherical = () => {
      camera.position.x = sphericalCoords.radius * Math.sin(sphericalCoords.phi) * Math.sin(sphericalCoords.theta);
      camera.position.y = sphericalCoords.radius * Math.cos(sphericalCoords.phi);
      camera.position.z = sphericalCoords.radius * Math.sin(sphericalCoords.phi) * Math.cos(sphericalCoords.theta);
      camera.lookAt(0, 0.1, 0);
    };

    updateCameraFromSpherical();

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      setIsAutoRotate(false);
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - previousMousePosition.x;
      const deltaY = e.clientY - previousMousePosition.y;

      sphericalCoords.theta -= deltaX * 0.007;
      sphericalCoords.phi = Math.max(0.2, Math.min(Math.PI / 2 - 0.05, sphericalCoords.phi - deltaY * 0.007));

      updateCameraFromSpherical();
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      sphericalCoords.radius = Math.max(2.2, Math.min(8.0, sphericalCoords.radius + e.deltaY * 0.004));
      updateCameraFromSpherical();
    };

    // Touch Support
    let touchStartDist = 0;
    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDragging = true;
        setIsAutoRotate(false);
        previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      } else if (e.touches.length === 2) {
        touchStartDist = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY
        );
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 1 && isDragging) {
        const deltaX = e.touches[0].clientX - previousMousePosition.x;
        const deltaY = e.touches[0].clientY - previousMousePosition.y;
        sphericalCoords.theta -= deltaX * 0.007;
        sphericalCoords.phi = Math.max(0.2, Math.min(Math.PI / 2 - 0.05, sphericalCoords.phi - deltaY * 0.007));
        updateCameraFromSpherical();
        previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      } else if (e.touches.length === 2) {
        const dist = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY
        );
        const diff = touchStartDist - dist;
        sphericalCoords.radius = Math.max(2.2, Math.min(8.0, sphericalCoords.radius + diff * 0.008));
        updateCameraFromSpherical();
        touchStartDist = dist;
      }
    };

    const onTouchEnd = () => {
      isDragging = false;
    };

    container.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    container.addEventListener('wheel', onWheel, { passive: false });
    container.addEventListener('touchstart', onTouchStart, { passive: true });
    container.addEventListener('touchmove', onTouchMove, { passive: true });
    container.addEventListener('touchend', onTouchEnd, { passive: true });

    // 9. Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const delta = clock.getDelta();

      // Auto rotation
      if (isAutoRotate && !isDragging) {
        sphericalCoords.theta += 0.35 * delta;
        updateCameraFromSpherical();
      }

      // Chain and sprocket rotation simulation
      const currentRpm = isRevving ? 8500 : rpm;
      const rotSpeed = (currentRpm / 60) * Math.PI * 2 * 0.05 * delta;
      if (frontSprocket) frontSprocket.rotation.z += rotSpeed;
      if (rearSprocket) rearSprocket.rotation.z += rotSpeed * (14 / 48);

      // Subtle pulse to exhaust if high RPM
      if (isRevving && exhaustGroupRef.current) {
        stainlessExhaustMat.emissive.setHex(0x551100);
      } else {
        stainlessExhaustMat.emissive.setHex(0x000000);
      }

      renderer.render(scene, camera);
    };

    animate();

    // Resize handler
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight || 480;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      container.removeEventListener('wheel', onWheel);
      container.removeEventListener('touchstart', onTouchStart);
      container.removeEventListener('touchmove', onTouchMove);
      container.removeEventListener('touchend', onTouchEnd);
      window.removeEventListener('resize', handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [isAutoRotate, rpm, isRevving]);

  // Handle Exploded View animation smoothly
  useEffect(() => {
    const cradle = cradleGroupRef.current;
    const exhaust = exhaustGroupRef.current;
    const tank = fuelTankGroupRef.current;
    const rad = radiatorGroupRef.current;
    const chain = chainGroupRef.current;

    if (!cradle || !exhaust || !tank || !rad || !chain) return;

    if (isExploded) {
      cradle.position.set(0, -0.6, 0);
      exhaust.position.set(0.4, 0.4, -0.4);
      tank.position.set(-0.6, 0, 0);
      rad.position.set(0, 0.2, 0.6);
      chain.position.set(0.5, 0, 0.2);
    } else {
      cradle.position.set(0, 0, 0);
      exhaust.position.set(0, 0, 0);
      tank.position.set(0, 0, 0);
      rad.position.set(0, 0, 0);
      chain.position.set(0, 0, 0);
    }
  }, [isExploded]);

  const handleSelectHotspot = (spot: Hotspot) => {
    setActiveHotspot(spot);
    setIsAutoRotate(false);
  };

  return (
    <div
      className="p-4 p-md-5 rounded position-relative overflow-hidden mb-5"
      style={{
        background: '#0F172A',
        color: '#FFFFFF',
        border: '2px solid #0F172A',
        boxShadow: '5px 5px 0 #0284C7',
      }}
    >
      {/* Header Bar */}
      <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
        <div>
          <span className="badge-motorsport red mb-1">Interactive 3D Engineering Model</span>
          <h3 className="font-orbitron mb-0" style={{ color: '#FFFFFF', fontWeight: 900 }}>
            CFMOTO 300SR POWERTRAIN 3D DIGITAL TWIN
          </h3>
        </div>
        <div className="d-flex gap-2 align-items-center flex-wrap">
          <button
            type="button"
            onClick={() => setIsAutoRotate(!isAutoRotate)}
            className="btn btn-sm d-inline-flex align-items-center gap-1"
            style={{
              background: isAutoRotate ? '#0284C7' : '#1E293B',
              color: '#FFFFFF',
              border: '1px solid #38BDF8',
              fontWeight: 700,
              fontSize: '12px',
              padding: '6px 12px',
            }}
          >
            <i className={`bi ${isAutoRotate ? 'bi-pause-fill' : 'bi-play-fill'}`}></i>
            {isAutoRotate ? 'Pause Orbit' : 'Auto-Orbit'}
          </button>

          <button
            type="button"
            onClick={() => setIsExploded(!isExploded)}
            className="btn btn-sm d-inline-flex align-items-center gap-1"
            style={{
              background: isExploded ? '#FF2A2A' : '#1E293B',
              color: '#FFFFFF',
              border: '1px solid #FF2A2A',
              fontWeight: 700,
              fontSize: '12px',
              padding: '6px 12px',
            }}
          >
            <i className="bi bi-arrows-fullscreen"></i>
            {isExploded ? 'Assemble Model' : 'Exploded View'}
          </button>
        </div>
      </div>

      <p className="small text-muted mb-3" style={{ color: '#94A3B8' }}>
        Click and drag to rotate in 360°, scroll to zoom, and click any component tag below to inspect detailed CAD specifications.
      </p>

      {/* Hotspots Quick Switcher */}
      <div className="d-flex gap-2 flex-wrap mb-3">
        {HOTSPOTS.map((spot) => (
          <button
            key={spot.id}
            type="button"
            onClick={() => handleSelectHotspot(spot)}
            className="btn btn-sm"
            style={{
              background: activeHotspot?.id === spot.id ? '#0284C7' : 'rgba(30, 41, 59, 0.8)',
              color: '#FFFFFF',
              border: activeHotspot?.id === spot.id ? '1.5px solid #38BDF8' : '1px solid #334155',
              fontSize: '11px',
              fontWeight: 700,
              padding: '4px 10px',
              borderRadius: '6px',
            }}
          >
            <span className="me-1" style={{ color: activeHotspot?.id === spot.id ? '#FFFFFF' : '#38BDF8' }}>
              #{spot.id}
            </span>
            {spot.name}
          </button>
        ))}
        {activeHotspot && (
          <button
            type="button"
            onClick={() => setActiveHotspot(null)}
            className="btn btn-sm text-danger"
            style={{ background: 'transparent', border: 'none', fontSize: '11px', fontWeight: 700 }}
          >
            Clear Selection
          </button>
        )}
      </div>

      {/* 3D WebGL Canvas Container */}
      <div className="position-relative" style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid #1E293B' }}>
        <div
          ref={mountRef}
          style={{
            width: '100%',
            height: '460px',
            cursor: 'grab',
          }}
        />

        {/* 3D Viewport Badges */}
        <div
          className="position-absolute d-flex gap-2 flex-column"
          style={{ top: '14px', left: '14px', zIndex: 10, pointerEvents: 'none' }}
        >
          <span
            className="badge"
            style={{ background: 'rgba(15, 23, 42, 0.85)', color: '#38BDF8', border: '1px solid #0284C7', padding: '6px 10px', fontSize: '11px' }}
          >
            <i className="bi bi-camera-video me-1"></i> WebGL 3D Real-time
          </span>
          {isExploded && (
            <span
              className="badge"
              style={{ background: 'rgba(255, 42, 42, 0.85)', color: '#FFFFFF', padding: '6px 10px', fontSize: '11px' }}
            >
              EXPLODED CAD VIEW
            </span>
          )}
        </div>

        {/* Live Dyno RPM Simulator Bar in Bottom of 3D Canvas */}
        <div
          className="position-absolute d-flex align-items-center justify-content-between p-2 px-3"
          style={{
            bottom: '12px',
            left: '12px',
            right: '12px',
            background: 'rgba(15, 23, 42, 0.88)',
            backdropFilter: 'blur(8px)',
            borderRadius: '8px',
            border: '1px solid #334155',
            zIndex: 10,
          }}
        >
          <div className="d-flex align-items-center gap-2">
            <span className="small fw-bold text-uppercase" style={{ color: '#38BDF8', fontSize: '11px' }}>
              Dyno Throttle:
            </span>
            <button
              type="button"
              onMouseDown={() => setIsRevving(true)}
              onMouseUp={() => setIsRevving(false)}
              onTouchStart={() => setIsRevving(true)}
              onTouchEnd={() => setIsRevving(false)}
              className="btn btn-sm"
              style={{
                background: isRevving ? '#FF2A2A' : '#1E293B',
                color: '#FFFFFF',
                border: '1px solid #FF2A2A',
                fontWeight: 800,
                fontSize: '11px',
                padding: '4px 12px',
              }}
            >
              <i className="bi bi-speedometer2 me-1"></i>
              {isRevving ? 'WOT 8,500 RPM!' : 'Hold for Full Throttle'}
            </button>
          </div>

          <div className="d-flex align-items-center gap-2">
            <span className="small text-muted" style={{ fontSize: '11px' }}>
              Engine Speed:
            </span>
            <span className="font-orbitron fw-bold" style={{ color: isRevving ? '#FF2A2A' : '#38BDF8', fontSize: '14px' }}>
              {isRevving ? '8,500' : rpm} RPM
            </span>
          </div>
        </div>
      </div>

      {/* Selected Component Information Overlay Box */}
      {activeHotspot && (
        <div
          className="p-3 p-md-4 mt-3 rounded"
          style={{
            background: '#1E293B',
            border: '1.5px solid #0284C7',
            boxShadow: '3px 3px 0 #0284C7',
          }}
        >
          <div className="d-flex align-items-center justify-content-between mb-2">
            <div className="d-flex align-items-center gap-2">
              <span className="badge" style={{ background: '#0284C7', color: '#FFFFFF', fontSize: '11px' }}>
                {activeHotspot.badge}
              </span>
              <h5 className="font-orbitron mb-0" style={{ color: '#FFFFFF', fontWeight: 800 }}>
                {activeHotspot.name}
              </h5>
            </div>
            <button
              type="button"
              onClick={() => setActiveHotspot(null)}
              className="btn-close btn-close-white"
              aria-label="Close"
            ></button>
          </div>
          <p className="small mb-0" style={{ color: '#CBD5E1', lineHeight: '1.6' }}>
            {activeHotspot.description}
          </p>
        </div>
      )}
    </div>
  );
}
