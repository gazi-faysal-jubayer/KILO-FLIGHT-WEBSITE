import { cookies } from 'next/headers';
import { getCollection } from './db';

const SESSION_COOKIE_NAME = 'kiloflight_admin_session';

export async function verifyAdminSession(): Promise<boolean> {
  try {
    const cookieStore = await cookies();
    const sessionCookie = cookieStore.get(SESSION_COOKIE_NAME);
    if (!sessionCookie || !sessionCookie.value) {
      return false;
    }
    const settings = getCollection<any>('settings');
    const validPasscode = settings?.security?.adminPasscode || 'kiloflight2027';
    // Validate session token matching the current passcode
    const expectedToken = Buffer.from(`admin:${validPasscode}`).toString('base64');
    return sessionCookie.value === expectedToken;
  } catch (err) {
    return false;
  }
}

export function generateSessionToken(passcode: string): string {
  return Buffer.from(`admin:${passcode}`).toString('base64');
}

export { SESSION_COOKIE_NAME };
