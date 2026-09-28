import { NextRequest, NextResponse } from "next/server";

import {
  defaultLocale,
  hasLocale,
  localeCookieName,
  localePath,
  type Locale,
} from "@/lib/locale-config";

function localeFromAcceptLanguage(header: string | null): Locale {
  if (!header) return defaultLocale;

  const preferences = header
    .split(",")
    .map((entry) => {
      const [tag, ...parameters] = entry.trim().toLowerCase().split(";");
      const quality = parameters.find((parameter) => parameter.trim().startsWith("q="));
      return { tag, quality: quality ? Number.parseFloat(quality.split("=")[1]) : 1 };
    })
    .filter(({ quality }) => Number.isFinite(quality) && quality > 0)
    .sort((a, b) => b.quality - a.quality);

  for (const { tag } of preferences) {
    const language = tag.split("-")[0];
    if (hasLocale(language)) return language;
  }

  return defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const firstSegment = pathname.split("/").filter(Boolean)[0];

  if (firstSegment && hasLocale(firstSegment)) {
    const response = NextResponse.next();
    response.cookies.set(localeCookieName, firstSegment, {
      maxAge: 60 * 60 * 24 * 365,
      path: "/",
      sameSite: "lax",
    });
    return response;
  }

  const savedLocale = request.cookies.get(localeCookieName)?.value;
  const locale = savedLocale && hasLocale(savedLocale)
    ? savedLocale
    : localeFromAcceptLanguage(request.headers.get("accept-language"));
  const url = request.nextUrl.clone();
  url.pathname = localePath(locale, pathname);
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|images|favicon.ico|robots.txt|sitemap.xml|manifest.webmanifest|llms.txt|llms-full.txt|.*\\..*).*)"],
};
