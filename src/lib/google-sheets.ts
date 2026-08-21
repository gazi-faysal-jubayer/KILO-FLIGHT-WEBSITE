import { TeamMember, MemberCategory } from '@/types/team';
import { FALLBACK_TEAM_DATA } from './fallback-data';

// ==========================================
// CONFIGURATION (Editable for Non-Tech Team)
// ==========================================
export const GOOGLE_SHEET_CONFIG = {
  sheetId: '1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms', // Replace with your Google Sheet ID
  tabName: 'Sheet1',
};

// Convert Google Drive share links to direct embed image URLs & validate
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

  // Check if Google Drive link
  const driveMatch = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/) || url.match(/id=([a-zA-Z0-9_-]+)/);
  if (driveMatch && driveMatch[1]) {
    return `https://drive.google.com/uc?export=view&id=${driveMatch[1]}`;
  }

  // Must start with http:// or https:// and look like a URL
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url;
  }

  // Safe fallback if text is not a URL (e.g. non-tech user entered plain text in sheet)
  return '/images/logo.png';
}

// Clean and categorize strings
export function formatCategory(cat?: string): MemberCategory {
  if (!cat) return 'member';
  const c = cat.toString().trim().toLowerCase();
  if (c.includes('adv')) return 'advisor';
  if (c.includes('cap')) return 'captain';
  if (c.includes('lead')) return 'lead';
  if (c.includes('alum') || c.includes('found')) return 'alumni';
  return 'member';
}

// Fetch and parse live Google Sheets GViz JSON endpoint
export async function fetchTeamDataFromGoogleSheets(): Promise<{ data: TeamMember[]; isLive: boolean }> {
  try {
    const url = `https://docs.google.com/spreadsheets/d/${GOOGLE_SHEET_CONFIG.sheetId}/gviz/tq?tqx=out:json&sheet=${encodeURIComponent(GOOGLE_SHEET_CONFIG.tabName)}`;
    const response = await fetch(url, { next: { revalidate: 60 } });

    if (!response.ok) {
      throw new Error(`Google Sheets responded with status ${response.status}`);
    }

    const text = await response.text();
    const jsonStart = text.indexOf('{');
    const jsonEnd = text.lastIndexOf('}');

    if (jsonStart === -1 || jsonEnd === -1) {
      throw new Error('Invalid JSON structure from Google Sheets endpoint');
    }

    const rawJson = JSON.parse(text.substring(jsonStart, jsonEnd + 1));
    const cols = (rawJson.table.cols || []).map((c: { label?: string }) => (c.label || '').trim().toLowerCase());
    const rows = rawJson.table.rows || [];

    if (rows.length === 0) {
      throw new Error('Google Sheet returned empty rowset');
    }

    // Helper for finding column values
    const getColVal = (rowObj: { c?: Array<{ v?: string | number | null }> }, colNames: string[]) => {
      for (const name of colNames) {
        const idx = cols.findIndex((c: string) => c.includes(name));
        if (idx !== -1 && rowObj.c && rowObj.c[idx] && rowObj.c[idx]?.v !== null && rowObj.c[idx]?.v !== undefined) {
          return rowObj.c[idx]?.v?.toString().trim() || '';
        }
      }
      return '';
    };

    const parsedMembers: TeamMember[] = rows.map((r: { c?: Array<{ v?: string | number | null }> }, i: number) => {
      const c = r.c || [];
      const name = getColVal(r, ['name']) || (c[0]?.v ? c[0].v.toString() : `Member ${i + 1}`);
      const role = getColVal(r, ['role', 'title', 'position']) || (c[1]?.v ? c[1].v.toString() : 'Engineer');
      const category = formatCategory(getColVal(r, ['category', 'type', 'cat']) || (c[2]?.v ? c[2].v.toString() : 'member'));
      const department = getColVal(r, ['department', 'dept', 'batch']) || (c[3]?.v ? c[3].v.toString() : 'KUET');
      const season = (getColVal(r, ['season', 'year']) || (c[4]?.v ? c[4].v.toString() : '2026')).toLowerCase();
      const rawImage = getColVal(r, ['image', 'photo', 'img', 'url']) || (c[5]?.v ? c[5].v.toString() : '');
      const image = formatImageUrl(rawImage);
      const linkedin = getColVal(r, ['linkedin', 'link']) || (c[6]?.v ? c[6].v.toString() : 'https://linkedin.com');
      const bio = getColVal(r, ['bio', 'description', 'about']) || (c[7]?.v ? c[7].v.toString() : '');

      return { name, role, category, department, season, image, linkedin, bio };
    }).filter((m: TeamMember) => m.name && m.name.trim() !== '');

    if (parsedMembers.length > 0) {
      return { data: parsedMembers, isLive: true };
    }
  } catch (error) {
    console.warn('Google Sheet live fetch failed, using fallback dataset:', error);
  }

  return { data: FALLBACK_TEAM_DATA, isLive: false };
}
