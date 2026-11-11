import { NextResponse, type NextRequest } from "next/server";
import { isLocale, localizePath } from "@/content/i18n/config";

const publicRoots = new Set(["", "work", "services", "process", "about", "contact", "privacy", "legal"]);

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (pathname.startsWith("/api/") || pathname.startsWith("/lab") || pathname.startsWith("/_next") || /\.[^/]+$/.test(pathname)) return NextResponse.next();

  const firstSegment = pathname.split("/")[1];
  if (isLocale(firstSegment)) {
    const headers = new Headers(request.headers);
    headers.set("x-lac-locale", firstSegment);
    return NextResponse.next({ request: { headers } });
  }

  if (publicRoots.has(firstSegment)) {
    const url = request.nextUrl.clone();
    url.pathname = localizePath("en", pathname);
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = { matcher: ["/:path*"] };
