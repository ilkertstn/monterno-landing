import { NextResponse, type NextRequest } from "next/server";

const LOCALE_COOKIE = "NEXT_LOCALE";
type Locale = "tr" | "en" | "ru";

function isPublicFile(pathname: string) {
  return pathname.startsWith("/_next") || pathname.startsWith("/api") || /\.[^/]+$/.test(pathname);
}

function getCountry(request: NextRequest) {
  return (
    request.headers.get("x-vercel-ip-country") ||
    request.headers.get("cf-ipcountry") ||
    request.headers.get("x-country-code")
  )?.toUpperCase();
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

function getCookieLocale(request: NextRequest): Locale | null {
  const value = request.cookies.get(LOCALE_COOKIE)?.value;
  return value === "tr" || value === "en" || value === "ru" ? value : null;
}

function getGeoLocale(request: NextRequest): Locale {
  const country = getCountry(request);
  if (country === "TR") return "tr";
  if (country) return "en";

  const acceptLanguage = request.headers.get("accept-language") || "";
  return acceptLanguage.toLowerCase().startsWith("tr") ? "tr" : "en";
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
  const cookieLocale = getCookieLocale(request);

  if (cookieLocale && cookieLocale !== pathLocale) {
    const redirectUrl = nextUrl.clone();
    redirectUrl.pathname = withLocale(stripLocale(pathname), cookieLocale);
    return NextResponse.redirect(redirectUrl);
  }

  if (!cookieLocale && pathLocale === "tr") {
    const geoLocale = getGeoLocale(request);
    if (geoLocale !== "tr") {
      const redirectUrl = nextUrl.clone();
      redirectUrl.pathname = withLocale(pathname, geoLocale);
      return NextResponse.redirect(redirectUrl);
    }
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-locale", pathLocale);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}
