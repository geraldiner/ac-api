import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

const isAdminPage = createRouteMatcher(['/admin(.*)']);
const isProtectedApiRoute = createRouteMatcher(['/api/admin(.*)']);

export default clerkMiddleware(async (auth, req) => {
  // No need to check public routes
  if (!isAdminPage(req)) {
    return;
  }

  const { isAuthenticated, redirectToSignIn, sessionClaims } = await auth();

  // Must be signed in to see admin pages
  if (isAdminPage(req)) {
    if (!isAuthenticated) {
      return redirectToSignIn();
    }
  }

  // Must have admin role to access protected API routes
  if (isProtectedApiRoute(req)) {
    if (!isAuthenticated) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const role = sessionClaims?.metadata?.role;
    if (role !== 'admin') {
      return NextResponse.json({ message: 'Forbidden' }, { status: 403 });
    }
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
