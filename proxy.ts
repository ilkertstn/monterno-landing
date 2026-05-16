import { NextResponse, type NextRequest } from "next/server";

const LOCALE_COOKIE = "NEXT_LOCALE";
type Locale = "tr" | "en" | "ru";

function isPublicFile(pathname: string) {
  return pathname.startsWith("/_next") || pathname.startsWith("/api") || /\.[^/]+$/.test(pathname);
}

function getPathLocale(pathname: string): Locale {
  if (pathname === "/en" || pathname.startsWith("/en/")) return "en";
  if (pathname === "/ru" || pathname.startsWith("/ru/")) return "ru";
  return "tr";
}

function stripLocale(pathname: string): string {
  if (pathname === "/en" || pathname === "/ru") return "/";
  if (pathname.startsWith("/en/") || pathname.startsWith("/ru/")) return pathname.slice(3);
  return pathname;
}

function withLocale(pathname: string, locale: Locale): string {
  if (locale === "tr") return pathname;
  if (pathname === "/") return `/${locale}`;
  return `/${locale}${pathname}`;
}

export function proxy(request: NextRequest) {
  const { nextUrl } = request;
  const pathname = nextUrl.pathname;

  if (isPublicFile(pathname)) {
    return NextResponse.next();
  }

  const languageChoice = nextUrl.searchParams.get("lang");
  if (languageChoice === "tr" || languageChoice === "en" || languageChoice === "ru") {
    const cleanUrl = nextUrl.clone();
    cleanUrl.searchParams.delete("lang");
    cleanUrl.pathname = withLocale(stripLocale(cleanUrl.pathname), languageChoice);

    const response = NextResponse.redirect(cleanUrl);
    response.cookies.set(LOCALE_COOKIE, languageChoice, {
      maxAge: 60 * 60 * 24 * 365,
      path: "/",
      sameSite: "lax",
    });
    return response;
  }

  const pathLocale = getPathLocale(pathname);

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-locale", pathLocale);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}
