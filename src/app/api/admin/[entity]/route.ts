import { NextResponse } from 'next/server';
import { getCollectionAsync, saveCollectionAsync } from '@/lib/db';
import { verifyAdminSession } from '@/lib/auth';

const ALLOWED_ENTITIES = ['settings', 'cars', 'subteams', 'sponsorship', 'achievements', 'team'];

export async function GET(
  req: Request,
  { params }: { params: Promise<{ entity: string }> }
) {
  const isAuthed = await verifyAdminSession();
  if (!isAuthed) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
  }

  const { entity } = await params;
  if (!ALLOWED_ENTITIES.includes(entity)) {
    return NextResponse.json({ success: false, error: 'Invalid entity' }, { status: 400 });
  }

  const data = await getCollectionAsync(entity);
  return NextResponse.json({ success: true, data });
}

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ entity: string }> }
) {
  const isAuthed = await verifyAdminSession();
  if (!isAuthed) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
  }

  const { entity } = await params;
  if (!ALLOWED_ENTITIES.includes(entity)) {
    return NextResponse.json({ success: false, error: 'Invalid entity' }, { status: 400 });
  }

  try {
    const body = await req.json();
    const success = await saveCollectionAsync(entity, body);
    if (!success) {
      return NextResponse.json({ success: false, error: 'Failed to write data' }, { status: 500 });
    }
    return NextResponse.json({ success: true, data: body });
  } catch (err) {
    return NextResponse.json({ success: false, error: 'Invalid request body' }, { status: 400 });
  }
}

export async function POST(
  req: Request,
  { params }: { params: Promise<{ entity: string }> }
) {
  const isAuthed = await verifyAdminSession();
  if (!isAuthed) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
  }

  const { entity } = await params;
  if (!ALLOWED_ENTITIES.includes(entity) || entity === 'settings') {
    return NextResponse.json({ success: false, error: 'Invalid entity for item creation' }, { status: 400 });
  }

  try {
    const newItem = await req.json();
    if (!newItem.id) {
      newItem.id = `${entity}-${Date.now()}`;
    }
    const currentList = (await getCollectionAsync<any[]>(entity)) || [];
    const updatedList = [newItem, ...currentList];
    await saveCollectionAsync(entity, updatedList);
    return NextResponse.json({ success: true, data: newItem });
  } catch (err) {
    return NextResponse.json({ success: false, error: 'Failed to create item' }, { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ entity: string }> }
) {
  const isAuthed = await verifyAdminSession();
  if (!isAuthed) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
  }

  const { entity } = await params;
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');

  if (!id) {
    return NextResponse.json({ success: false, error: 'Missing item ID' }, { status: 400 });
  }

  const currentList = (await getCollectionAsync<any[]>(entity)) || [];
  const updatedList = currentList.filter((item: any) => item.id !== id);
  await saveCollectionAsync(entity, updatedList);

  return NextResponse.json({ success: true, message: 'Item deleted successfully' });
}
