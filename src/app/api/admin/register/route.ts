import connectDB from '@lib/mongodb';
import SongModel from '@models/Song';

const RESOURCE_TYPE_TO_MODEL = {
  song: SongModel,
};

export async function POST(request: Request) {
  const data = await request.json();
  const resourceType = data.resourceType as keyof typeof RESOURCE_TYPE_TO_MODEL;
  const Model = RESOURCE_TYPE_TO_MODEL[resourceType];

  const newDocument = new Model({
    key: data.key,
    title: data.title,
    artist: data.artist,
    audioBlobUriPath: data.audioBlobUriPath,
    coverImageBlobUriPath: data.coverImageBlobUriPath,
    tags: data.tags,
    mood: data.mood,
  });

  await connectDB();

  const existing = await Model.findOne({ key: data.key });
  if (existing) {
    return Response.json(
      { message: `Document already exists for key: ${data.key}` },
      { status: 400 },
    );
  }

  try {
    await newDocument.save();
    return Response.json({ message: 'Metadata registered' }, { status: 200 });
  } catch (error) {
    return Response.json({ message: error }, { status: 500 });
  }
}
