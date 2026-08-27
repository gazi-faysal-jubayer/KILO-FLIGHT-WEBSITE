import { NextResponse } from 'next/server';
import { getCollection, saveCollection } from '@/lib/db';
import { verifyAdminSession } from '@/lib/auth';

// Public contact inquiry submission (POST)
export async function POST(req: Request) {
  try {
    const data = await req.json();

    if (!data.fullName || !data.email || !data.message) {
      return NextResponse.json(
        { success: false, error: 'Please provide name, email, and message' },
        { status: 400 }
      );
    }

    const newInquiry = {
      id: `inq-${Date.now()}`,
      fullName: String(data.fullName).trim(),
      email: String(data.email).trim(),
      inquiryType: data.inquiryType || 'general',
      message: String(data.message).trim(),
      status: 'Unread',
      createdAt: new Date().toISOString(),
    };

    const inquiries = getCollection<any[]>('inquiries') || [];
    const updated = [newInquiry, ...inquiries];
    saveCollection('inquiries', updated);

    return NextResponse.json({
      success: true,
      message: 'Your message has been delivered to Team KILOFLIGHT.',
      id: newInquiry.id,
    });
  } catch (err) {
    return NextResponse.json(
      { success: false, error: 'Failed to send message' },
      { status: 500 }
    );
  }
}

// Admin fetch contact inquiries (GET)
export async function GET() {
  const isAuthed = await verifyAdminSession();
  if (!isAuthed) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
  }

  const inquiries = getCollection<any[]>('inquiries') || [];
  return NextResponse.json({ success: true, data: inquiries });
}

// Admin update inquiry status (PUT)
export async function PUT(req: Request) {
  const isAuthed = await verifyAdminSession();
  if (!isAuthed) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await req.json();
    const { id, status } = body;

    const inquiries = getCollection<any[]>('inquiries') || [];
    const updated = inquiries.map((inq) => (inq.id === id ? { ...inq, status } : inq));
    saveCollection('inquiries', updated);

    return NextResponse.json({ success: true, message: 'Status updated' });
  } catch (err) {
    return NextResponse.json({ success: false, error: 'Update failed' }, { status: 500 });
  }
}

// Admin delete inquiry (DELETE)
export async function DELETE(req: Request) {
  const isAuthed = await verifyAdminSession();
  if (!isAuthed) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');

  const inquiries = getCollection<any[]>('inquiries') || [];
  const updated = inquiries.filter((inq) => inq.id !== id);
  saveCollection('inquiries', updated);

  return NextResponse.json({ success: true, message: 'Inquiry removed' });
}
