import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";

import { JsonLd } from "@/components/JsonLd";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { TrackingScripts } from "@/components/analytics/TrackingScripts";
import { getMessages } from "@/lib/i18n";
import { hasLocale, languageAlternates, localePath, locales } from "@/lib/locale-config";
import { absoluteUrl, siteConfig } from "@/lib/site";

import "../globals.css";

type LayoutProps = Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LayoutProps): Promise<Metadata> {
  const { locale: value } = await params;
  if (!hasLocale(value)) return {};
  const copy = getMessages(value);
  const canonical = localePath(value);

  return {
    metadataBase: new URL(siteConfig.url),
    title: { default: copy.meta.title, template: `%s | ${siteConfig.name}` },
    description: copy.meta.description,
    applicationName: siteConfig.name,
    keywords: ["nail art Bali", "home nail service Bali", "manicure Bali", "pedicure Bali", "gel nails Bali", "mobile nail artist Bali"],
    alternates: { canonical, languages: languageAlternates() },
    openGraph: {
      type: "website",
      locale: copy.meta.locale,
      siteName: siteConfig.name,
      title: copy.meta.title,
      description: copy.meta.description,
      url: canonical,
      images: [{ url: siteConfig.ogImage, width: 2033, height: 774, alt: siteConfig.name }],
    },
    twitter: { card: "summary_large_image", title: copy.meta.title, description: copy.meta.description, images: [siteConfig.ogImage] },
    icons: { icon: "/images/nailea/logo-square.png", apple: "/images/nailea/logo-square.png" },
    verification: {
      google: process.env.GOOGLE_SITE_VERIFICATION || undefined,
      yandex: process.env.YANDEX_SITE_VERIFICATION || undefined,
      other: process.env.BING_SITE_VERIFICATION ? { "msvalidate.01": process.env.BING_SITE_VERIFICATION } : undefined,
    },
  };
}

export const viewport: Viewport = { themeColor: "#f2b7c3", colorScheme: "light" };

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { locale: value } = await params;
  if (!hasLocale(value)) notFound();
  const copy = getMessages(value);
  const sameAs = siteConfig.instagramUrl ? [siteConfig.instagramUrl] : undefined;
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "@id": `${siteConfig.url}/#business`,
    name: siteConfig.name,
    description: copy.meta.description,
    url: absoluteUrl(localePath(value)),
    image: absoluteUrl(siteConfig.ogImage),
    logo: absoluteUrl("/images/nailea/logo-square.png"),
    inLanguage: value,
    areaServed: { "@type": "AdministrativeArea", name: "Bali" },
    sameAs,
    email: siteConfig.email || undefined,
    telephone: siteConfig.whatsappNumber ? `+${siteConfig.whatsappNumber}` : undefined,
  };

  return (
    <html lang={value} data-scroll-behavior="smooth">
      <body>
        <JsonLd data={businessSchema} />
        <TrackingScripts />
        <SiteHeader locale={value} copy={copy.nav} />
        {children}
        <SiteFooter locale={value} />
        <WhatsAppFab locale={value} />
      </body>
    </html>
  );
}
