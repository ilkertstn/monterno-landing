import { NextResponse, type NextRequest } from "next/server";

const LOCALE_COOKIE = "NEXT_LOCALE";

function isPublicFile(pathname: string) {
  return pathname.startsWith("/_next") || pathname.startsWith("/api") || /\.[^/]+$/.test(pathname);
}

function getPreferredLocale(request: NextRequest) {
  const cookieLocale = request.cookies.get(LOCALE_COOKIE)?.value;
  if (cookieLocale === "tr" || cookieLocale === "en" || cookieLocale === "ru") return cookieLocale;

  return "tr";
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

    const response = NextResponse.redirect(cleanUrl);
    response.cookies.set(LOCALE_COOKIE, languageChoice, {
      maxAge: 60 * 60 * 24 * 365,
      path: "/",
      sameSite: "lax",
    });
    return response;
  }

  const preferredLocale = getPreferredLocale(request);
  const isEnglishPath = pathname === "/en" || pathname.startsWith("/en/");
  const isRussianPath = pathname === "/ru" || pathname.startsWith("/ru/");
  const hasLocalePath = isEnglishPath || isRussianPath;

  if (!hasLocalePath && preferredLocale === "en") {
    const redirectUrl = nextUrl.clone();
    redirectUrl.pathname = pathname === "/" ? "/en" : `/en${pathname}`;
    return NextResponse.redirect(redirectUrl);
  }

  if (!hasLocalePath && preferredLocale === "ru") {
    const redirectUrl = nextUrl.clone();
    redirectUrl.pathname = pathname === "/" ? "/ru" : `/ru${pathname}`;
    return NextResponse.redirect(redirectUrl);
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-locale", isRussianPath ? "ru" : isEnglishPath ? "en" : "tr");

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}
