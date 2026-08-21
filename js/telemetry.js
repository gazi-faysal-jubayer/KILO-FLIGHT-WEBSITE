/**
 * Team Kilo Flight - Formula Student Real-Time Telemetry Simulator
 * Interactive telemetry dashboard, animated canvas gauges, drive mode controller, and diagnostics.
 */

document.addEventListener('DOMContentLoaded', () => {
    // Canvas & UI Elements
    const canvas = document.getElementById('telemetry-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const speedEl = document.getElementById('telemetry-speed');
    const rpmEl = document.getElementById('telemetry-rpm');
    const gearEl = document.getElementById('telemetry-gear');
    const lapTimeEl = document.getElementById('telemetry-laptime');
    const latGEl = document.getElementById('telemetry-latg');
    const longGEl = document.getElementById('telemetry-longg');
    const brakePressEl = document.getElementById('telemetry-brakepress');
    const tireTempEl = document.getElementById('telemetry-tiretemp');
    const modeBtns = document.querySelectorAll('.drive-mode-btn');

    // Telemetry State
    let currentMode = 'hotlap'; // 'pit', 'eco', 'hotlap', 'rain'
    let currentSpeed = 0;
    let targetSpeed = 85;
    let currentRPM = 2500;
    let targetRPM = 8200;
    let currentGear = 3;
    let lapSeconds = 42.15;
    let latG = 0;
    let longG = 0;
    let brakePress = 12;
    let tireTemp = 82;
    let simStep = 0;

    // Mode profiles
    const profiles = {
        pit: { maxSpeed: 40, maxRPM: 4500, label: 'Pit Limiter (40 km/h)' },
        eco: { maxSpeed: 105, maxRPM: 7500, label: 'Eco-Composite Endurance' },
        hotlap: { maxSpeed: 155, maxRPM: 12200, label: 'Qualifying Hot Lap (Maximum Attack)' },
        rain: { maxSpeed: 115, maxRPM: 8500, label: 'Rain / Wet Track Setting' }
    };

    // Mode selector handlers
    modeBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            modeBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentMode = btn.dataset.mode || 'hotlap';
        });
    });

    // Resize Canvas for crisp high-DPI crisp rendering
    function resizeCanvas() {
        const rect = canvas.getBoundingClientRect();
        canvas.width = rect.width * window.devicePixelRatio;
        canvas.height = rect.height * window.devicePixelRatio;
        ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Simulation loop
    function updateTelemetry() {
        simStep += 0.05;
        const prof = profiles[currentMode] || profiles.hotlap;

        // Simulate racing telemetry sine curves & dynamics
        const speedWave = Math.sin(simStep * 0.8) * 0.5 + 0.5;
        targetSpeed = 35 + speedWave * (prof.maxSpeed - 35);
        targetRPM = 3000 + speedWave * (prof.maxRPM - 3000);

        // Smooth easing towards targets
        currentSpeed += (targetSpeed - currentSpeed) * 0.08;
        currentRPM += (targetRPM - currentRPM) * 0.08;

        // Gear calculation
        if (currentSpeed < 25) currentGear = 1;
        else if (currentSpeed < 50) currentGear = 2;
        else if (currentSpeed < 80) currentGear = 3;
        else if (currentSpeed < 115) currentGear = 4;
        else if (currentSpeed < 140) currentGear = 5;
        else currentGear = 6;

        // G-Force simulation
        latG = Math.sin(simStep * 1.4) * (currentMode === 'hotlap' ? 1.85 : 1.1);
        longG = Math.cos(simStep * 0.9) * (currentMode === 'hotlap' ? 1.25 : 0.7);

        // Brake pressure spikes when decelerating
        if (longG < -0.3) {
            brakePress = Math.min(100, Math.abs(longG) * 65 + Math.random() * 10);
        } else {
            brakePress = Math.max(0, brakePress - 8);
        }

        // Tire temperature simulation
        tireTemp = 78 + (currentSpeed / 155) * 18 + Math.abs(latG) * 4;

        // Lap Timer Increment
        lapSeconds += 0.016;
        if (lapSeconds >= 60) lapSeconds = 0;

        // Update UI Elements
        if (speedEl) speedEl.textContent = Math.round(currentSpeed);
        if (rpmEl) rpmEl.textContent = Math.round(currentRPM).toLocaleString();
        if (gearEl) gearEl.textContent = currentGear;
        if (lapTimeEl) {
            const mins = Math.floor(lapSeconds / 60);
            const secs = (lapSeconds % 60).toFixed(2);
            lapTimeEl.textContent = `0${mins}:${secs < 10 ? '0' : ''}${secs}`;
        }
        if (latGEl) latGEl.textContent = (latG >= 0 ? '+' : '') + latG.toFixed(2) + ' G';
        if (longGEl) longGEl.textContent = (longG >= 0 ? '+' : '') + longG.toFixed(2) + ' G';
        if (brakePressEl) brakePressEl.textContent = Math.round(brakePress) + ' BAR';
        if (tireTempEl) tireTempEl.textContent = Math.round(tireTemp) + ' °C';

        // Draw Canvas Telemetry Visualizer (G-Force Diagram & Tachometer Curve)
        drawTelemetryCanvas();

        requestAnimationFrame(updateTelemetry);
    }

    function drawTelemetryCanvas() {
        const w = canvas.getBoundingClientRect().width;
        const h = canvas.getBoundingClientRect().height;
        ctx.clearRect(0, 0, w, h);

        // Dark Background grid
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.06)';
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

        // Left Side: G-Force Polar Chart Center
        const centerX = w * 0.3;
        const centerY = h * 0.5;
        const radius = Math.min(w, h) * 0.38;

        // Polar Rings (1.0G, 2.0G)
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius * 0.5, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(0, 229, 255, 0.2)';
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(255, 42, 42, 0.3)';
        ctx.stroke();

        // Crosshairs
        ctx.beginPath();
        ctx.moveTo(centerX - radius, centerY);
        ctx.lineTo(centerX + radius, centerY);
        ctx.moveTo(centerX, centerY - radius);
        ctx.lineTo(centerX, centerY + radius);
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
        ctx.stroke();

        // Label G-force chart
        ctx.fillStyle = '#00E5FF';
        ctx.font = '10px "Rajdhani", sans-serif';
        ctx.fillText('1.0G', centerX + 4, centerY - radius * 0.5 - 2);
        ctx.fillStyle = '#FF2A2A';
        ctx.fillText('2.0G MAX', centerX + 4, centerY - radius - 2);

        // G-Force Live Indicator Ball
        const ballX = centerX + (latG / 2.0) * radius;
        const ballY = centerY - (longG / 2.0) * radius;

        // Glow effect
        const gradient = ctx.createRadialGradient(ballX, ballY, 2, ballX, ballY, 16);
        gradient.addColorStop(0, '#00E5FF');
        gradient.addColorStop(0.5, 'rgba(0, 229, 255, 0.4)');
        gradient.addColorStop(1, 'rgba(0, 229, 255, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(ballX, ballY, 16, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#FFFFFF';
        ctx.beginPath();
        ctx.arc(ballX, ballY, 4, 0, Math.PI * 2);
        ctx.fill();

        // Right Side: RPM Shift LED Array & Waveform
        const startX = w * 0.58;
        const barY = h * 0.25;
        const barW = w * 0.38;
        const numLEDs = 10;
        const ledW = (barW - (numLEDs - 1) * 6) / numLEDs;

        const maxRPM = 12500;
        const activeLEDs = Math.round((currentRPM / maxRPM) * numLEDs);

        for (let i = 0; i < numLEDs; i++) {
            const lx = startX + i * (ledW + 6);
            let color = 'rgba(255, 255, 255, 0.1)';

            if (i < activeLEDs) {
                if (i < 5) color = '#00E5FF'; // Cyan green
                else if (i < 8) color = '#F8CB2E'; // Yellow warning
                else color = '#FF2A2A'; // Redline shift
            }

            ctx.fillStyle = color;
            ctx.shadowBlur = i < activeLEDs ? 10 : 0;
            ctx.shadowColor = color;
            ctx.fillRect(lx, barY, ledW, 14);
            ctx.shadowBlur = 0;
        }

        // Live Telemetry Sine Wave (Velocity curve)
        ctx.beginPath();
        ctx.strokeStyle = '#00E5FF';
        ctx.lineWidth = 2;
        const waveY = h * 0.7;

        for (let x = 0; x < barW; x += 4) {
            const plotX = startX + x;
            const plotY = waveY + Math.sin(simStep * 2 + x * 0.05) * (currentSpeed * 0.15);
            if (x === 0) ctx.moveTo(plotX, plotY);
            else ctx.lineTo(plotX, plotY);
        }
        ctx.stroke();
    }

    // Start simulation
    updateTelemetry();
});
