import { getStore } from '@netlify/blobs';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ key: string }> },
) {
  const { key } = await params;
  const store = getStore('audio', {
    siteID: process.env.NETLIFY_BLOBS_SITE_ID!,
    token: process.env.NETLIFY_PERSONAL_ACCESS_TOKEN!,
  });

  const blob: ArrayBuffer = await store.get(`kk/${key}`, {
    type: 'arrayBuffer',
  });
  if (!blob) {
    return new Response('Blob not found', { status: 404 });
  }

  const buffer: Buffer<ArrayBuffer> = Buffer.from(blob);

  return new Response(buffer, {
    headers: {
      'Content-Type': 'audio/mpeg',
      'Content-Length': buffer.length.toString(),
      'Accept-Ranges': 'bytes',
    },
  });
}
