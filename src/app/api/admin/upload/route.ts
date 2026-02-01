import type {
  FileType,
  GameInstallment,
  ResourceType,
} from '@customTypes/upload';
import { buildBlobKey } from '@lib/utils';
import { getStore } from '@netlify/blobs';

export async function POST(request: Request) {
  const formData = await request.formData();
  const file = formData.get('file') as File | null;
  const fileType = formData.get('fileType') as FileType | null;
  const game = formData.get('game') as GameInstallment | null;
  const resourceType = formData.get('resourceType') as ResourceType | null;

  if (!file) {
    return Response.json({ message: 'No file uploaded' }, { status: 400 });
  }

  const store = getStore(fileType as string, {
    siteID: process.env.NETLIFY_BLOBS_SITE_ID!,
    token: process.env.NETLIFY_PERSONAL_ACCESS_TOKEN!,
  });

  const blobKey = buildBlobKey(
    fileType!,
    resourceType!,
    file.name,
    game || undefined,
  );

  try {
    await store.set(blobKey, file);
    return Response.json({ message: 'Upload successful' }, { status: 200 });
  } catch (error) {
    console.error('Error uploading blob:', error);
    return Response.json({ message: 'Error uploading blob' }, { status: 500 });
  }
}
