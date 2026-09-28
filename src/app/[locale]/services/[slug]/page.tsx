import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { JsonLd } from "@/components/JsonLd";
import { ServiceLanding } from "@/components/ServiceLanding";
import { getMessages } from "@/lib/i18n";
import { hasLocale, languageAlternates, localePath, locales } from "@/lib/locale-config";
import { getService, getServices } from "@/lib/localized-content";
import { absoluteUrl, siteConfig } from "@/lib/site";

type Props = { params: Promise<{ locale: string; slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((locale) => getServices(locale).map((service) => ({ locale, slug: service.slug })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!hasLocale(locale)) return {};
  const service = getService(locale, slug);
  if (!service) return {};
  const route = `/services/${service.slug}`;
  const path = localePath(locale, route);
  return { title: { absolute: service.seoTitle }, description: service.seoDescription, alternates: { canonical: path, languages: languageAlternates(route) }, openGraph: { title: service.seoTitle, description: service.seoDescription, url: path, images: [siteConfig.ogImage] } };
}

export default async function ServicePage({ params }: Props) {
  const { locale, slug } = await params;
  if (!hasLocale(locale)) notFound();
  const service = getService(locale, slug);
  if (!service) notFound();
  const messages = getMessages(locale);
  const pageUrl = absoluteUrl(localePath(locale, `/services/${service.slug}`));
  const schema = [
    { "@context": "https://schema.org", "@type": "Service", name: service.name, description: service.seoDescription, url: pageUrl, inLanguage: locale, areaServed: "Bali, Indonesia", provider: { "@id": `${siteConfig.url}/#business` } },
    { "@context": "https://schema.org", "@type": "FAQPage", inLanguage: locale, mainEntity: service.faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: messages.common.home, item: absoluteUrl(localePath(locale)) },
      { "@type": "ListItem", position: 2, name: messages.common.services, item: absoluteUrl(localePath(locale, "/#services")) },
      { "@type": "ListItem", position: 3, name: service.name, item: pageUrl },
    ] },
  ];

  return <><JsonLd data={schema} /><ServiceLanding service={service} locale={locale} /></>;
}
