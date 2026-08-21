const fs = require('fs');
const path = require('path');

const nextDir = path.join(__dirname, '..', '.next');

try {
  if (fs.existsSync(nextDir)) {
    fs.rmSync(nextDir, { recursive: true, force: true });
    console.log('✓ Cleared stale .next cache successfully.');
  }
} catch (err) {
  // ignore if already clean
}
