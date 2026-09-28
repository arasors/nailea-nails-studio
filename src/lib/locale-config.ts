export const locales = ["en", "id", "ru"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";
export const localeCookieName = "nailea_locale";

export const localeLabels: Record<Locale, { short: string; native: string }> = {
  en: { short: "EN", native: "English" },
  id: { short: "ID", native: "Bahasa Indonesia" },
  ru: { short: "RU", native: "Русский" },
};

export function hasLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function localePath(locale: Locale, path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return normalizedPath === "/" ? `/${locale}` : `/${locale}${normalizedPath}`;
}

export function pathWithoutLocale(pathname: string) {
  const segments = pathname.split("/").filter(Boolean);
  if (segments[0] && hasLocale(segments[0])) segments.shift();
  return segments.length ? `/${segments.join("/")}` : "/";
}

export function languageAlternates(path = "/") {
  return {
    en: localePath("en", path),
    id: localePath("id", path),
    ru: localePath("ru", path),
    "x-default": localePath(defaultLocale, path),
  };
}

export function formatDate(value: string, locale: Locale) {
  const intlLocale = locale === "id" ? "id-ID" : locale === "ru" ? "ru-RU" : "en-GB";
  return new Intl.DateTimeFormat(intlLocale, {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(value));
}

export function formatReadTime(value: string, locale: Locale) {
  const minutes = value.match(/\d+/)?.[0] || value;
  if (locale === "id") return `${minutes} menit baca`;
  if (locale === "ru") return `${minutes} мин чтения`;
  return `${minutes} min read`;
}
