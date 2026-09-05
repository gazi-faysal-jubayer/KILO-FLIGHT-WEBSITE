import { NextResponse } from 'next/server';
import { getCollectionAsync, saveCollectionAsync } from '@/lib/db';
import { verifyAdminSession } from '@/lib/auth';
import { forwardApplicationToGoogleSheet } from '@/lib/recruitment-sheets';

// Public candidate application submission (POST)
export async function POST(req: Request) {
  try {
    const data = await req.json();

    // Validate essential fields
    if (!data.fullName || !data.rollNumber || !data.institutionalEmail || !data.whatsappNumber) {
      return NextResponse.json(
        { success: false, error: 'Please fill in all mandatory fields' },
        { status: 400 }
      );
    }

    const newApplication = {
      id: `app-${Date.now()}`,
      fullName: String(data.fullName).trim(),
      rollNumber: String(data.rollNumber).trim(),
      department: data.department || 'ME',
      institutionalEmail: String(data.institutionalEmail).trim(),
      whatsappNumber: String(data.whatsappNumber).trim(),
      primarySubteam: data.primarySubteam || '',
      secondarySubteam: data.secondarySubteam || '',
      workshopSummary: data.workshopSummary || '',
      softwareSkills: Array.isArray(data.softwareSkills) ? data.softwareSkills : [],
      statementOfPurpose: data.statementOfPurpose || '',
      portfolioLink: data.portfolioLink || '',
      status: 'Pending Review',
      reviewerNotes: '',
      createdAt: new Date().toISOString(),
    };

    // 1. Safely persist in database
    const applications = (await getCollectionAsync<any[]>('applications')) || [];
    const updated = [newApplication, ...applications];
    await saveCollectionAsync('applications', updated);

    // 2. Real-time forward to Google Sheets table
    const sheetResult = await forwardApplicationToGoogleSheet(newApplication);

    return NextResponse.json({
      success: true,
      message: 'Application submitted successfully',
      id: newApplication.id,
      savedToSheet: sheetResult.success,
    });
  } catch (err) {
    return NextResponse.json(
      { success: false, error: 'Failed to process recruitment submission' },
      { status: 500 }
    );
  }
}

// Admin fetch applications (GET)
export async function GET(req: Request) {
  const isAuthed = await verifyAdminSession();
  if (!isAuthed) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const search = searchParams.get('search')?.toLowerCase() || '';
  const status = searchParams.get('status') || 'all';

  let applications = (await getCollectionAsync<any[]>('applications')) || [];

  if (status !== 'all') {
    applications = applications.filter((app) => app.status === status);
  }

  if (search) {
    applications = applications.filter((app) =>
      `${app.fullName} ${app.rollNumber} ${app.department} ${app.institutionalEmail} ${app.primarySubteam}`
        .toLowerCase()
        .includes(search)
    );
  }

  return NextResponse.json({ success: true, data: applications });
}

// Admin update application status or notes (PUT)
export async function PUT(req: Request) {
  const isAuthed = await verifyAdminSession();
  if (!isAuthed) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await req.json();
    const { id, status, reviewerNotes } = body;

    if (!id) {
      return NextResponse.json({ success: false, error: 'Missing application ID' }, { status: 400 });
    }

    const applications = (await getCollectionAsync<any[]>('applications')) || [];
    const updated = applications.map((app) => {
      if (app.id === id) {
        return {
          ...app,
          status: status !== undefined ? status : app.status,
          reviewerNotes: reviewerNotes !== undefined ? reviewerNotes : app.reviewerNotes,
          updatedAt: new Date().toISOString(),
        };
      }
      return app;
    });

    await saveCollectionAsync('applications', updated);
    return NextResponse.json({ success: true, message: 'Application updated successfully' });
  } catch (err) {
    return NextResponse.json({ success: false, error: 'Update failed' }, { status: 500 });
  }
}

// Admin delete application (DELETE)
export async function DELETE(req: Request) {
  const isAuthed = await verifyAdminSession();
  if (!isAuthed) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');

  if (!id) {
    return NextResponse.json({ success: false, error: 'Missing application ID' }, { status: 400 });
  }

  const applications = (await getCollectionAsync<any[]>('applications')) || [];
  const updated = applications.filter((app) => app.id !== id);
  await saveCollectionAsync('applications', updated);

  return NextResponse.json({ success: true, message: 'Application deleted' });
}
