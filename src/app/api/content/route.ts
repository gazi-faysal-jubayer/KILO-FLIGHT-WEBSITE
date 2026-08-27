import { NextResponse } from 'next/server';
import { getConsolidatedContentAsync } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const data = await getConsolidatedContentAsync();
    return NextResponse.json({ success: true, data });
  } catch (err) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch site content' },
      { status: 500 }
    );
  }
}
