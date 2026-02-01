import { auth } from '@clerk/nextjs/server';

export async function POST(request: Request) {
  const { isAuthenticated, sessionClaims } = await auth();

  if (!isAuthenticated) {
    return Response.json({ error: 'User is not signed in' }, { status: 401 });
  }

  const canPost = sessionClaims?.metadata.role === 'admin';

  if (!canPost) {
    return Response.json(
      { error: 'User is not authorized to perform this action' },
      { status: 403 },
    );
  }

  // Do the upload here
  return Response.json({ message: 'Upload successful' }, { status: 200 });
}
