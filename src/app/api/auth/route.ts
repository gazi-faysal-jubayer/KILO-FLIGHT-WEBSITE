import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { getCollection } from '@/lib/db';
import { generateSessionToken, SESSION_COOKIE_NAME, verifyAdminSession } from '@/lib/auth';

// GET: Check authentication status
export async function GET() {
  const authenticated = await verifyAdminSession();
  return NextResponse.json({ authenticated });
}

// POST: Log in with passcode
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { passcode } = body;

    const settings = getCollection<any>('settings');
    const validPasscode = settings?.security?.adminPasscode || 'kiloflight2027';

    if (passcode !== validPasscode) {
      return NextResponse.json(
        { success: false, error: 'Invalid admin passcode' },
        { status: 401 }
      );
    }

    const token = generateSessionToken(passcode);
    const cookieStore = await cookies();
    cookieStore.set(SESSION_COOKIE_NAME, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    return NextResponse.json({ success: true, message: 'Authenticated successfully' });
  } catch (err) {
    return NextResponse.json(
      { success: false, error: 'Authentication failed' },
      { status: 500 }
    );
  }
}

// DELETE: Log out
export async function DELETE() {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE_NAME);
  return NextResponse.json({ success: true, message: 'Logged out successfully' });
}
