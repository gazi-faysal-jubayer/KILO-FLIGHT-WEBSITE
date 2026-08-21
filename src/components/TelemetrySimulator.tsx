'use client';

import React, { useState, useEffect, useRef } from 'react';

type DriveMode = 'pit' | 'eco' | 'hotlap' | 'rain';

const PROFILES: Record<DriveMode, { maxSpeed: number; maxRPM: number; label: string }> = {
  pit: { maxSpeed: 40, maxRPM: 4500, label: 'Pit Limiter (40 km/h)' },
  eco: { maxSpeed: 105, maxRPM: 7500, label: 'Eco-Composite Endurance' },
  hotlap: { maxSpeed: 155, maxRPM: 12200, label: 'Qualifying Hot Lap (Maximum Attack)' },
  rain: { maxSpeed: 115, maxRPM: 8500, label: 'Rain / Wet Track Setting' },
};

export default function TelemetrySimulator() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [mode, setMode] = useState<DriveMode>('hotlap');
  const [speed, setSpeed] = useState(0);
  const [rpm, setRpm] = useState(0);
  const [gear, setGear] = useState(1);
  const [lapTime, setLapTime] = useState('00:00.00');
  const [latG, setLatG] = useState(0);
  const [tireTemp, setTireTemp] = useState(82);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let simStep = 0;
    let currentSpeed = 0;
    let currentRPM = 2500;
    let lapSeconds = 42.15;
    let currentLatG = 0;
    let currentLongG = 0;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * (window.devicePixelRatio || 1);
      canvas.height = rect.height * (window.devicePixelRatio || 1);
      ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const loop = () => {
      simStep += 0.05;
      const prof = PROFILES[mode] || PROFILES.hotlap;

      const speedWave = Math.sin(simStep * 0.8) * 0.5 + 0.5;
      const targetSpeed = 35 + speedWave * (prof.maxSpeed - 35);
      const targetRPM = 3000 + speedWave * (prof.maxRPM - 3000);

      currentSpeed += (targetSpeed - currentSpeed) * 0.08;
      currentRPM += (targetRPM - currentRPM) * 0.08;

      let g = 1;
      if (currentSpeed < 25) g = 1;
      else if (currentSpeed < 50) g = 2;
      else if (currentSpeed < 80) g = 3;
      else if (currentSpeed < 115) g = 4;
      else if (currentSpeed < 140) g = 5;
      else g = 6;

      currentLatG = Math.sin(simStep * 1.4) * (mode === 'hotlap' ? 1.85 : 1.1);
      currentLongG = Math.cos(simStep * 0.9) * (mode === 'hotlap' ? 1.25 : 0.7);

      lapSeconds += 0.016;
      if (lapSeconds >= 60) lapSeconds = 0;

      // Update local state periodically
      setSpeed(Math.round(currentSpeed));
      setRpm(Math.round(currentRPM));
      setGear(g);
      setLatG(Number(currentLatG.toFixed(2)));
      setTireTemp(Math.round(78 + (currentSpeed / 155) * 18 + Math.abs(currentLatG) * 4));

      const mins = Math.floor(lapSeconds / 60);
      const secs = (lapSeconds % 60).toFixed(2);
      setLapTime(`0${mins}:${Number(secs) < 10 ? '0' : ''}${secs}`);

      // Draw Canvas Visualizer
      const w = canvas.getBoundingClientRect().width;
      const h = canvas.getBoundingClientRect().height;
      ctx.clearRect(0, 0, w, h);

      // Grid (Light Theme)
      ctx.strokeStyle = 'rgba(15, 23, 42, 0.08)';
      ctx.lineWidth = 1;
      const gridStep = 30;
      for (let x = 0; x < w; x += gridStep) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = 0; y < h; y += gridStep) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      // G-Force Polar View
      const centerX = w * 0.3;
      const centerY = h * 0.5;
      const radius = Math.min(w, h) * 0.38;

      ctx.beginPath();
      ctx.arc(centerX, centerY, radius * 0.5, 0, Math.PI * 2);
      ctx.strokeStyle = '#0284C7';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.strokeStyle = '#FF2A2A';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(centerX - radius, centerY);
      ctx.lineTo(centerX + radius, centerY);
      ctx.moveTo(centerX, centerY - radius);
      ctx.lineTo(centerX, centerY + radius);
      ctx.strokeStyle = '#0F172A';
      ctx.lineWidth = 1;
      ctx.stroke();

      // Live G-Force Indicator Ball
      const ballX = centerX + (currentLatG / 2.0) * radius;
      const ballY = centerY - (currentLongG / 2.0) * radius;

      const gradient = ctx.createRadialGradient(ballX, ballY, 2, ballX, ballY, 16);
      gradient.addColorStop(0, '#0284C7');
      gradient.addColorStop(0.5, 'rgba(2, 132, 199, 0.4)');
      gradient.addColorStop(1, 'rgba(2, 132, 199, 0)');

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(ballX, ballY, 16, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#0F172A';
      ctx.beginPath();
      ctx.arc(ballX, ballY, 4, 0, Math.PI * 2);
      ctx.fill();

      // Right Side: RPM LED Array
      const startX = w * 0.58;
      const barY = h * 0.25;
      const barW = w * 0.38;
      const numLEDs = 10;
      const ledW = (barW - (numLEDs - 1) * 6) / numLEDs;

      const maxRPM = 12500;
      const activeLEDs = Math.round((currentRPM / maxRPM) * numLEDs);

      for (let i = 0; i < numLEDs; i++) {
        const lx = startX + i * (ledW + 6);
        let color = '#E2E8F0';

        if (i < activeLEDs) {
          if (i < 5) color = '#0284C7';
          else if (i < 8) color = '#D97706';
          else color = '#FF2A2A';
        }

        ctx.fillStyle = color;
        ctx.fillRect(lx, barY, ledW, 14);
        ctx.strokeStyle = '#0F172A';
        ctx.lineWidth = 1;
        ctx.strokeRect(lx, barY, ledW, 14);
      }

      // Telemetry Velocity Curve
      ctx.beginPath();
      ctx.strokeStyle = '#0284C7';
      ctx.lineWidth = 2.5;
      const waveY = h * 0.7;

      for (let x = 0; x < barW; x += 4) {
        const plotX = startX + x;
        const plotY = waveY + Math.sin(simStep * 2 + x * 0.05) * (currentSpeed * 0.15);
        if (x === 0) ctx.moveTo(plotX, plotY);
        else ctx.lineTo(plotX, plotY);
      }
      ctx.stroke();

      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [mode]);

  return (
    <div className="telemetry-container">
      <div className="telemetry-header">
        <div className="d-flex align-items-center gap-3">
          <span className="badge bg-danger pulse-dot">LIVE CONNECTED</span>
          <span className="text-muted font-monospace small fw-bold">VEHICLE_ID: KF-ALPHA-2026</span>
        </div>

        {/* Mode Selector Buttons */}
        <div className="d-flex gap-2 flex-wrap">
          {(['pit', 'eco', 'hotlap', 'rain'] as DriveMode[]).map((m) => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className={`drive-mode-btn ${mode === m ? 'active' : ''}`}
            >
              {m === 'pit' && 'Pit Limiter'}
              {m === 'eco' && 'Eco Run'}
              {m === 'hotlap' && 'Qualifying Hot Lap'}
              {m === 'rain' && 'Rain Setup'}
            </button>
          ))}
        </div>
      </div>

      <div className="row g-4 align-items-center">
        {/* Canvas */}
        <div className="col-lg-8">
          <div className="position-relative rounded p-2" style={{ background: '#F8FAFC', border: '2px solid #0F172A', boxShadow: '3px 3px 0 #0F172A' }}>
            <canvas ref={canvasRef} style={{ width: '100%', height: '260px', display: 'block' }} />
          </div>
        </div>

        {/* Readouts */}
        <div className="col-lg-4">
          <div className="row g-2">
            <div className="col-6">
              <div className="telemetry-readout">
                <div className="value">{speed}</div>
                <div className="unit">SPEED (KM/H)</div>
              </div>
            </div>
            <div className="col-6">
              <div className="telemetry-readout">
                <div className="value" style={{ color: 'var(--yellow-accent)' }}>{rpm.toLocaleString()}</div>
                <div className="unit">ENGINE RPM</div>
              </div>
            </div>
            <div className="col-6">
              <div className="telemetry-readout">
                <div className="value" style={{ color: 'var(--primary-red)' }}>{gear}</div>
                <div className="unit">GEAR</div>
              </div>
            </div>
            <div className="col-6">
              <div className="telemetry-readout">
                <div className="value" style={{ fontSize: '18px' }}>{lapTime}</div>
                <div className="unit">LAP TIMER</div>
              </div>
            </div>
            <div className="col-6">
              <div className="telemetry-readout">
                <div className="value" style={{ fontSize: '20px' }}>{latG >= 0 ? `+${latG}` : latG} G</div>
                <div className="unit">LATERAL G</div>
              </div>
            </div>
            <div className="col-6">
              <div className="telemetry-readout">
                <div className="value" style={{ fontSize: '20px' }}>{tireTemp} °C</div>
                <div className="unit">TIRE TEMP</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
