import { NextResponse } from 'next/server';

export function middleware(request) {
    const token = request.cookies.get('token')?.value;

    const loggedInUserCantAccessPaths =
        request.nextUrl.pathname === '/login' ||
        request.nextUrl.pathname === '/signup' ||
        request.nextUrl.pathname === '/api/login' ||
        request.nextUrl.pathname === '/api/users';

    // If the request is not authenticated, return a redirect
    // response to the login page.
    if (loggedInUserCantAccessPaths) {
        if (token) {
            return NextResponse.redirect(
                new URL('/profile/user', request.nextUrl)
            );
        }
    } else {
        if (!token) {
            return NextResponse.redirect(new URL('/login', request.nextUrl));
        }
    }

    // If the request is authenticated, continue.
    return NextResponse.next();
}

// On which paths should the middleware be executed?
// The matcher is a string or an array of strings with path patterns.
export const config = {
    matcher: [
        '/',
        '/tasks/:path*',
        '/login',
        '/signup',
        '/api/:path*',
        '/profile/:path*',
    ],
};
