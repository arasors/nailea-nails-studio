import { ArrowRight, Check, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import type { Service } from "@/lib/content";
import { getMessages } from "@/lib/i18n";
import { localePath, type Locale } from "@/lib/locale-config";
import { getServices } from "@/lib/localized-content";
import { siteConfig, whatsappUrl } from "@/lib/site";

import { BookingCta } from "./BookingCta";

function serviceQuestion(locale: Locale, service: string) {
  if (locale === "id") return `Halo Nailea! Saya ingin bertanya tentang ${service}.`;
  if (locale === "ru") return `Здравствуйте, Nailea! Хочу узнать об услуге: ${service}.`;
  return `Hi Nailea! I would like to ask about ${service}.`;
}

export function ServiceLanding({ service, locale }: { service: Service; locale: Locale }) {
  const messages = getMessages(locale);
  const copy = messages.servicePage;
  const related = getServices(locale).filter((item) => item.slug !== service.slug).slice(0, 3);

  return (
    <main className="inner-page">
      <section className="inner-hero service-hero">
        <div className="inner-hero-copy">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link href={localePath(locale)}>{messages.common.home}</Link><span>/</span><Link href={localePath(locale, "/#services")}>{messages.common.services}</Link><span>/</span><span>{service.shortName}</span>
          </nav>
          <p className="eyebrow">{service.eyebrow}</p><h1>{service.headline}</h1><p className="inner-hero-lede">{service.intro}</p>
          <a className="button button-dark" href={whatsappUrl(serviceQuestion(locale, service.name), localePath(locale, "/#book"))} target={siteConfig.whatsappNumber ? "_blank" : undefined} rel="noreferrer"><MessageCircle size={18} /> {copy.ask}</a>
        </div>
        <div className="service-hero-art" aria-hidden="true">
          <span className="service-hero-number">{service.number}</span><div className="service-hero-triangle" />
          <div className="service-hero-image"><Image src="/images/nailea/hand-satin.png" alt="" fill sizes="(max-width: 900px) 90vw, 48vw" loading="eager" /></div>
          <div className="service-hero-drop"><Image src="/images/nailea/polish-drops.png" alt="" fill sizes="25vw" /></div>
        </div>
      </section>

      <section className="service-story section-shell">
        <div><p className="section-index">{service.number} / {copy.notes}</p><h2>{service.name}</h2></div>
        <div className="service-story-copy"><p>{service.detail}</p><p>{service.finish}</p></div>
      </section>

      <section className="service-highlights section-shell">{service.highlights.map((item, index) => <article key={item.title}><span>0{index + 1}</span><h2>{item.title}</h2><p>{item.text}</p></article>)}</section>

      <section className="ideal-section section-shell">
        <div className="ideal-art" aria-hidden="true"><Image src="/images/nailea/polish-pour.png" alt="" fill sizes="(max-width: 800px) 90vw, 45vw" /></div>
        <div className="ideal-copy"><p className="eyebrow">{copy.suits}</p><h2>{copy.suitsTitle}</h2><ul>{service.idealFor.map((item) => <li key={item}><Check size={18} />{item}</li>)}</ul><p className="ideal-note">{copy.unsure}</p></div>
      </section>

      <section className="faq-section section-shell inner-faq">
        <div className="faq-heading"><p className="eyebrow">{copy.faq}</p><h2>{copy.faqTitle}</h2></div>
        <div className="faq-list">{service.faqs.map((item, index) => <details key={item.question} open={index === 0}><summary><span>0{index + 1}</span>{item.question}<i>+</i></summary><p>{item.answer}</p></details>)}</div>
      </section>

      <section className="related-section section-shell">
        <div className="section-heading-row"><div><p className="eyebrow">{copy.related}</p><h2>{copy.relatedTitle}</h2></div></div>
        <div className="related-grid">{related.map((item) => <Link href={localePath(locale, `/services/${item.slug}`)} key={item.slug}><span>{item.number}</span><h3>{item.shortName}</h3><p>{item.seoDescription}</p><small>{messages.common.viewService} <ArrowRight size={14} /></small></Link>)}</div>
      </section>

      <BookingCta locale={locale} compact title={`${copy.readyPrefix} ${service.shortName.toLowerCase()}?`} />
    </main>
  );
}
