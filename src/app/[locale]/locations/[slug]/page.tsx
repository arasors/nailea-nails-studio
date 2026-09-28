import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { JsonLd } from "@/components/JsonLd";
import { LocationLanding } from "@/components/LocationLanding";
import { getMessages } from "@/lib/i18n";
import { hasLocale, languageAlternates, localePath, locales } from "@/lib/locale-config";
import { getLocation, getLocations } from "@/lib/localized-content";
import { absoluteUrl, siteConfig } from "@/lib/site";

type Props = { params: Promise<{ locale: string; slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((locale) => getLocations(locale).map((location) => ({ locale, slug: location.slug })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!hasLocale(locale)) return {};
  const location = getLocation(locale, slug);
  if (!location) return {};
  const route = `/locations/${location.slug}`;
  const path = localePath(locale, route);
  return { title: { absolute: location.seoTitle }, description: location.seoDescription, alternates: { canonical: path, languages: languageAlternates(route) }, openGraph: { title: location.seoTitle, description: location.seoDescription, url: path, images: [siteConfig.ogImage] } };
}

export default async function LocationPage({ params }: Props) {
  const { locale, slug } = await params;
  if (!hasLocale(locale)) notFound();
  const location = getLocation(locale, slug);
  if (!location) notFound();
  const messages = getMessages(locale);
  const pageUrl = absoluteUrl(localePath(locale, `/locations/${location.slug}`));
  const allFaqs = [...location.faqs, { question: messages.locationPage.branchQuestion, answer: messages.locationPage.branchAnswer }];
  const schema = [
    { "@context": "https://schema.org", "@type": "Service", name: `${siteConfig.name} — ${location.name}`, description: location.seoDescription, url: pageUrl, inLanguage: locale, areaServed: { "@type": "Place", name: `${location.name}, Bali, Indonesia` }, provider: { "@id": `${siteConfig.url}/#business` } },
    { "@context": "https://schema.org", "@type": "FAQPage", inLanguage: locale, mainEntity: allFaqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: messages.common.home, item: absoluteUrl(localePath(locale)) },
      { "@type": "ListItem", position: 2, name: messages.common.areas, item: absoluteUrl(localePath(locale, "/#areas")) },
      { "@type": "ListItem", position: 3, name: location.name, item: pageUrl },
    ] },
  ];

  return <><JsonLd data={schema} /><LocationLanding location={location} locale={locale} /></>;
}
