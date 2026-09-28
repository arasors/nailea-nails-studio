import { notFound } from "next/navigation";

import { HomePage } from "@/components/HomePage";
import { JsonLd } from "@/components/JsonLd";
import { hasLocale, localePath } from "@/lib/locale-config";
import { getServices } from "@/lib/localized-content";
import { absoluteUrl, siteConfig } from "@/lib/site";

type Props = { params: Promise<{ locale: string }> };

export default async function Page({ params }: Props) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  const services = getServices(locale);
  const serviceSchema = {
    "@context": "https://schema.org",
    "@graph": services.slice(0, 6).map((service) => ({
      "@type": "Service",
      name: service.name,
      description: service.seoDescription,
      url: absoluteUrl(localePath(locale, `/services/${service.slug}`)),
      inLanguage: locale,
      areaServed: "Bali, Indonesia",
      provider: { "@id": `${siteConfig.url}/#business` },
    })),
  };

  return <><JsonLd data={serviceSchema} /><HomePage locale={locale} /></>;
}
