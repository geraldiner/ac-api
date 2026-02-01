import { getStore } from '@netlify/blobs';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ key: Array<string> }> },
) {
  const { key } = await params;
  const keyStr = key.join('/');
  const store = getStore('icons', {
    siteID: process.env.NETLIFY_BLOBS_SITE_ID!,
    token: process.env.NETLIFY_PERSONAL_ACCESS_TOKEN!,
  });

  const blob = await store.get(keyStr, { type: 'blob' });

  if (!blob) {
    return new Response('Blob not found', { status: 404 });
  }

  return new Response(blob);
}
