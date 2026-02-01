import type { Song } from '@customTypes/metadata';
import SongModel from '@lib/models/Song';
import connectDB from '@lib/mongodb';
import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ key: string }> },
) {
  const { key } = await params;

  await connectDB();

  const song: Song | null = await SongModel.findOne(
    { key },
    '-_id -__v',
  ).lean();

  if (!song) {
    return NextResponse.json({ message: 'Song not found', status: 'ok' });
  }
  return NextResponse.json({ song, status: 'ok' });
}
