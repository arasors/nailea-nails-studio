function cleanSiteUrl(value: string | undefined) {
  const vercelHost =
    process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;
  const fallbackSiteUrl = vercelHost
    ? `https://${vercelHost}`
    : "http://localhost:3000";

  return (value || fallbackSiteUrl).replace(/\/$/, "");
}

function cleanWhatsAppNumber(value: string | undefined) {
  return (value || "").replace(/\D/g, "");
}

function parseServiceAreas(value: string | undefined) {
  const items = (value || "Canggu,Seminyak,Kerobokan,Ubud,Sanur,Uluwatu")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

  return [...new Set(items)];
}

export const siteConfig = {
  name: "Nailea Nails Art Studio",
  shortName: "Nailea",
  description:
    "Premium manicure, pedicure and custom nail art brought to selected homes, villas and hotels across Bali.",
  url: cleanSiteUrl(process.env.NEXT_PUBLIC_SITE_URL),
  locale: "en_ID",
  areaServed: "Bali, Indonesia",
  email: process.env.NEXT_PUBLIC_BUSINESS_EMAIL?.trim() || "",
  instagramUrl: process.env.NEXT_PUBLIC_INSTAGRAM_URL?.trim() || "",
  instagramHandle: process.env.NEXT_PUBLIC_INSTAGRAM_HANDLE?.trim() || "",
  whatsappNumber: cleanWhatsAppNumber(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER),
  whatsappMessage:
    process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE?.trim() ||
    "Hi Nailea! I would like to book a nail appointment in Bali.",
  serviceAreas: parseServiceAreas(process.env.NEXT_PUBLIC_SERVICE_AREAS),
  ogImage: "/images/nailea/social-cover.png",
} as const;

export function whatsappMessageFor(locale: Locale) {
  if (locale === "id") {
    return (
      process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE_ID?.trim() ||
      "Halo Nailea! Saya ingin memesan janji temu kuku di Bali."
    );
  }

  if (locale === "ru") {
    return (
      process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE_RU?.trim() ||
      "Здравствуйте, Nailea! Я хочу записаться на маникюр на Бали."
    );
  }

  return siteConfig.whatsappMessage;
}

export function whatsappUrl(message = siteConfig.whatsappMessage, fallback = "/#book") {
  if (!siteConfig.whatsappNumber) return fallback;

  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function absoluteUrl(path = "") {
  if (!path) return siteConfig.url;
  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}
import type { Locale } from "./locale-config";
