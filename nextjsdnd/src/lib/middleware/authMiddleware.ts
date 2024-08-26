import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request:NextRequest){
    const path = request.nextUrl.pathname;

    // define public paths that can  be accessed without a token
    const isPublicPath = path === '/auth';

    const token = request.cookies.get("token")?.value || "";

    // if user is trying to access a public path with a token, we redirect em to the homepage
    if(isPublicPath && token){
        return NextResponse.redirect(new URL('/', request.nextUrl));
    }
}

// this will specify the paths this middleware should be executed from.
// we will add to this as the app gets larger
export const config = {
    matcher:[
        '/',
        '/auth',
        '/profile',
    ]
}