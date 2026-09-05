const fs = require('fs');
const path = require('path');

async function generateRealFallback() {
  const sheetId = '11V8Craw4Q8c6PlKQUCCAFZIpw3sonxeDN4E5BTjj-hI';
  const tabs = ['Season 2026', 'Season 2025'];
  
  function formatImageUrl(url) {
    if (!url || typeof url !== 'string' || url.trim() === '') {
      return '/images/logo.png';
    }
    url = url.trim();
    const driveMatch = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/) || url.match(/id=([a-zA-Z0-9_-]+)/);
    if (driveMatch && driveMatch[1]) {
      return `https://lh3.googleusercontent.com/d/${driveMatch[1]}`;
    }
    return url;
  }

  function formatCategory(isTeacher, role) {
    if (isTeacher) return 'advisor';
    const r = (role || '').toLowerCase();
    if (r.includes('captain') || r.includes('director') || r.includes('chief') || r.includes('officer')) {
      return 'captain';
    }
    if (r.includes('lead') || r.includes('head') || r.includes('manager') || r.includes('treasurer')) {
      return 'lead';
    }
    return 'member';
  }

  const allMembers = [];

  for (const tab of tabs) {
    const gvizUrl = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json&sheet=${encodeURIComponent(tab)}`;
    const res = await fetch(gvizUrl);
    const text = await res.text();
    const jsonStart = text.indexOf('{');
    const jsonEnd = text.lastIndexOf('}');
    if (jsonStart === -1 || jsonEnd === -1) continue;
    
    const data = JSON.parse(text.substring(jsonStart, jsonEnd + 1));
    const rows = data.table?.rows || [];
    const seasonYear = tab.replace('Season', '').trim();
    
    for (const r of rows) {
      const c = r.c || [];
      const name = (c[0]?.v || '').toString().trim().replace(/^[\r\n]+/, '');
      if (!name || name.toLowerCase() === 'name') continue;
      
      const role = (c[1]?.v || '').toString().trim();
      const department = (c[2]?.v || '').toString().trim();
      const seasonVal = (c[3]?.v || seasonYear).toString().trim();
      const rawImg = (c[4]?.v || '').toString().trim();
      const image = formatImageUrl(rawImg);
      const linkedin = (c[5]?.v || '').toString().trim();
      const bio = (c[6]?.v || '').toString().trim();
      const isTeacherVal = c[7]?.v;
      const isTeacher = isTeacherVal === 1 || isTeacherVal === '1' || String(isTeacherVal).toLowerCase() === 'true';
      const category = formatCategory(isTeacher, role);

      allMembers.push({
        name,
        role,
        category,
        department,
        season: seasonVal || seasonYear,
        image,
        linkedin: linkedin || undefined,
        bio: bio || undefined,
        isTeacher
      });
    }
  }

  console.log(`Extracted ${allMembers.length} real members.`);
  
  // Format as TypeScript export
  const tsContent = `import { TeamMember } from '@/types/team';

// Real live data from Google Sheet: https://docs.google.com/spreadsheets/d/11V8Craw4Q8c6PlKQUCCAFZIpw3sonxeDN4E5BTjj-hI/edit
export const FALLBACK_TEAM_DATA: TeamMember[] = ${JSON.stringify(allMembers, null, 2)};
`;

  const targetFile = path.join(__dirname, '..', 'src', 'lib', 'fallback-data.ts');
  fs.writeFileSync(targetFile, tsContent, 'utf8');
  console.log(`Successfully updated ${targetFile} with ${allMembers.length} real team members!`);
}

generateRealFallback();
