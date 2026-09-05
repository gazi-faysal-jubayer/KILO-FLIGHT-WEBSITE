// Utility to format and forward recruitment applications to Google Sheets Webhook

export const RECRUITMENT_SHEET_HEADERS = [
  'Timestamp (BST)',
  'Full Name',
  'Roll Number',
  'Department',
  'Institutional Email',
  'WhatsApp Number',
  'Primary Sub-Team',
  'Secondary Sub-Team',
  'Technical Software & Skills',
  'Workshop Learnings Summary',
  'Statement of Purpose & Availability',
  'Portfolio / CV Link',
];

export interface RecruitmentPayload {
  id?: string;
  fullName: string;
  rollNumber: string;
  department: string;
  institutionalEmail: string;
  whatsappNumber: string;
  primarySubteam: string;
  secondarySubteam: string;
  softwareSkills: string[] | string;
  workshopSummary: string;
  statementOfPurpose: string;
  portfolioLink?: string;
  createdAt?: string;
}

export const DEFAULT_RECRUITMENT_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbxQJG1FdMZgoqp9ioe63b3TMSt5M8s5flT9skujs-hhiVjsID68eb3dhrcHF_0r9ZUu/exec';

export async function forwardApplicationToGoogleSheet(app: RecruitmentPayload): Promise<{ success: boolean; error?: string }> {
  const webhookUrl =
    process.env.GOOGLE_SCRIPT_RECRUITMENT_URL ||
    process.env.GOOGLE_SHEET_RECRUITMENT_WEBHOOK_URL ||
    DEFAULT_RECRUITMENT_SCRIPT_URL;

  if (!webhookUrl) {
    console.info('[GoogleSheets] GOOGLE_SCRIPT_RECRUITMENT_URL not configured in environment. Application safely stored in database.');
    return { success: false, error: 'GOOGLE_SCRIPT_RECRUITMENT_URL not configured' };
  }

  try {
    const formattedSkills = Array.isArray(app.softwareSkills) 
      ? app.softwareSkills.join(', ') 
      : (app.softwareSkills || '');

    let sanitizedPhone = (app.whatsappNumber || '').trim();
    if (sanitizedPhone.startsWith('+')) {
      sanitizedPhone = `'${sanitizedPhone}`;
    }

    const payload = {
      timestamp: app.createdAt || new Date().toISOString(),
      fullName: app.fullName,
      rollNumber: app.rollNumber,
      department: app.department,
      institutionalEmail: app.institutionalEmail,
      whatsappNumber: sanitizedPhone,
      primarySubteam: app.primarySubteam,
      secondarySubteam: app.secondarySubteam,
      softwareSkills: formattedSkills,
      workshopSummary: app.workshopSummary,
      statementOfPurpose: app.statementOfPurpose,
      portfolioLink: app.portfolioLink || '',
    };

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
      redirect: 'follow',
    });

    if (!response.ok) {
      const errText = await response.text();
      console.warn(`[GoogleSheets] Webhook responded with status ${response.status}: ${errText}`);
      return { success: false, error: `Google Sheets HTTP ${response.status}` };
    }

    const json = await response.json().catch(() => ({ status: 'ok' }));
    return { success: true };
  } catch (err: any) {
    console.error('[GoogleSheets] Failed to forward to Google Sheets:', err.message || err);
    return { success: false, error: err.message };
  }
}
