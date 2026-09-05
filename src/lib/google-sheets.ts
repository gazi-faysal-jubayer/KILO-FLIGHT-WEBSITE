import { TeamMember, MemberCategory } from '@/types/team';
import { FALLBACK_TEAM_DATA } from './fallback-data';

// ==========================================
// CONFIGURATION (Team Directory Google Sheet)
// Target Sheet: https://docs.google.com/spreadsheets/d/11V8Craw4Q8c6PlKQUCCAFZIpw3sonxeDN4E5BTjj-hI/edit
// ==========================================
export const GOOGLE_SHEET_CONFIG = {
  sheetId: '11V8Craw4Q8c6PlKQUCCAFZIpw3sonxeDN4E5BTjj-hI',
  seasonTabs: ['Season 2026', 'Season 2025', 'Season 2024'],
};

// Convert Google Drive share links to direct high-speed embed image URLs
export function formatImageUrl(url?: string): string {
  if (!url || typeof url !== 'string' || url.trim() === '') {
    return '/images/logo.png';
  }
  url = url.trim();

  // If local path starts with images/
  if (url.startsWith('images/')) {
    return `/${url}`;
  }

  // If already relative path starting with /
  if (url.startsWith('/')) {
    return url;
  }

  // Extract Google Drive File ID and serve via high-speed lh3 CDN
  const driveMatch = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/) || url.match(/[?&]id=([a-zA-Z0-9_-]+)/) || url.match(/\/d\/([a-zA-Z0-9_-]+)/);
  if (driveMatch && driveMatch[1]) {
    return `https://lh3.googleusercontent.com/d/${driveMatch[1]}`;
  }

  // Standard http / https
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url;
  }

  return '/images/logo.png';
}

// Clean and categorize members based on Teacher? column (1 = teacher, 0 = student) and role
export function formatCategory(isTeacher: boolean, role?: string): MemberCategory {
  if (isTeacher) {
    return 'advisor'; // Teacher / Faculty / Moderator
  }

  const r = (role || '').toLowerCase();
  if (r.includes('captain') || r.includes('director') || r.includes('chief') || r.includes('officer')) {
    return 'captain';
  }
  if (r.includes('lead') || r.includes('head') || r.includes('manager') || r.includes('treasurer')) {
    return 'lead';
  }
  if (r.includes('alumni') || r.includes('founder')) {
    return 'alumni';
  }

  return 'member';
}

// Fetch a single season tab from Google Sheets GViz endpoint
async function fetchSeasonTab(sheetId: string, tabName: string): Promise<TeamMember[]> {
  try {
    const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json&sheet=${encodeURIComponent(tabName)}`;
    const response = await fetch(url, { next: { revalidate: 60 } });

    if (!response.ok) {
      return [];
    }

    const text = await response.text();
    const jsonStart = text.indexOf('{');
    const jsonEnd = text.lastIndexOf('}');

    if (jsonStart === -1 || jsonEnd === -1) {
      return [];
    }

    const rawJson = JSON.parse(text.substring(jsonStart, jsonEnd + 1));
    const rows = rawJson.table?.rows || [];

    if (rows.length === 0) {
      return [];
    }

    const seasonYear = tabName.replace('Season', '').trim();

    const members: TeamMember[] = [];

    for (const r of rows) {
      const c = r.c || [];
      const rawName = (c[0]?.v || '').toString().trim().replace(/^[\r\n]+/, '');
      if (!rawName || rawName.toLowerCase() === 'name') {
        continue; // Skip headers or empty rows
      }

      const role = (c[1]?.v || 'Engineer').toString().trim();
      const department = (c[2]?.v || 'KUET').toString().trim();
      const seasonVal = (c[3]?.v || seasonYear).toString().trim();
      const rawImage = (c[4]?.v || '').toString().trim();
      const image = formatImageUrl(rawImage);
      const linkedin = (c[5]?.v || '').toString().trim();
      const bio = (c[6]?.v || '').toString().trim();

      // Teacher? column (1 = Teacher, 0 = Student)
      const isTeacherVal = c[7]?.v;
      const isTeacher =
        isTeacherVal === 1 ||
        isTeacherVal === '1' ||
        isTeacherVal === true ||
        String(isTeacherVal).toLowerCase() === 'true';

      const category = formatCategory(isTeacher, role);

      members.push({
        name: rawName,
        role,
        category,
        department,
        season: seasonVal || seasonYear,
        image,
        linkedin: linkedin || undefined,
        bio: bio || undefined,
        isTeacher,
      });
    }

    return members;
  } catch (error) {
    console.warn(`[GoogleSheets] Failed to fetch tab "${tabName}":`, error);
    return [];
  }
}

// Fetch all seasons from live Google Sheets workbook
export async function fetchTeamDataFromGoogleSheets(): Promise<{ data: TeamMember[]; isLive: boolean }> {
  try {
    const promises = GOOGLE_SHEET_CONFIG.seasonTabs.map((tab) =>
      fetchSeasonTab(GOOGLE_SHEET_CONFIG.sheetId, tab)
    );

    const results = await Promise.all(promises);
    const combinedMembers = results.flat();

    if (combinedMembers.length > 0) {
      return { data: combinedMembers, isLive: true };
    }
  } catch (error) {
    console.warn('[GoogleSheets] Live team fetch failed, using updated fallback dataset:', error);
  }

  return { data: FALLBACK_TEAM_DATA, isLive: false };
}
