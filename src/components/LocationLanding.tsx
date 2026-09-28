import { ArrowRight, MapPin, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import type { LocationPage } from "@/lib/content";
import { getMessages } from "@/lib/i18n";
import { localePath, type Locale } from "@/lib/locale-config";
import { getServices } from "@/lib/localized-content";
import { siteConfig, whatsappUrl } from "@/lib/site";

import { BookingCta } from "./BookingCta";

function addressQuestion(locale: Locale, location: string) {
  if (locale === "id") return `Halo Nailea! Saya ingin mengecek ketersediaan janji temu di ${location}.`;
  if (locale === "ru") return `Здравствуйте, Nailea! Хочу уточнить возможность записи в районе ${location}.`;
  return `Hi Nailea! I would like to check appointment availability in ${location}.`;
}

export function LocationLanding({ location, locale }: { location: LocationPage; locale: Locale }) {
  const messages = getMessages(locale);
  const copy = messages.locationPage;
  const services = getServices(locale);
  const suggested = location.suggestedServices.map((slug) => services.find((service) => service.slug === slug)).filter((service): service is NonNullable<typeof service> => Boolean(service));

  return (
    <main className="inner-page">
      <section className="location-hero">
        <div className="location-hero-art" aria-hidden="true">
          <div className="location-pink-plane" /><div className="location-ribbon"><Image src="/images/nailea/satin-ribbon.png" alt="" fill sizes="60vw" loading="eager" /></div><div className="location-polish"><Image src="/images/nailea/polish-spill.png" alt="" fill sizes="34vw" loading="eager" /></div><span>{copy.mobileStudio}</span>
        </div>
        <div className="location-hero-copy">
          <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href={localePath(locale)}>{messages.common.home}</Link><span>/</span><Link href={localePath(locale, "/#areas")}>{messages.common.areas}</Link><span>/</span><span>{location.name}</span></nav>
          <p className="eyebrow"><MapPin size={14} /> {location.name}, Bali</p><h1>{location.headline}</h1><p>{location.intro}</p>
          <a className="button button-dark" href={whatsappUrl(addressQuestion(locale, location.name), localePath(locale, "/#book"))} target={siteConfig.whatsappNumber ? "_blank" : undefined} rel="noreferrer"><MessageCircle size={18} /> {copy.checkAddress}</a>
        </div>
      </section>

      <section className="location-notes section-shell">
        <article><span>01</span><p className="eyebrow">{copy.routeReality}</p><h2>{copy.routeTitle}</h2><p>{location.localNote}</p></article>
        <article><span>02</span><p className="eyebrow">{copy.planSpace}</p><h2>{copy.planTitle}</h2><p>{location.planning}</p></article>
      </section>

      <section className="location-moments section-shell"><div className="section-heading-row"><div><p className="eyebrow">{copy.appointmentsIn} {location.name}</p><h2>{copy.momentsTitle}</h2></div></div><div className="moments-grid">{location.moments.map((moment, index) => <article key={moment.title}><span>0{index + 1}</span><h3>{moment.title}</h3><p>{moment.text}</p></article>)}</div></section>

      <section className="location-services"><div className="section-shell"><p className="eyebrow eyebrow-light">{copy.startingPoints}</p><h2>{copy.popularPrefix} {location.name}.</h2><div className="location-service-grid">{suggested.map((service) => <Link href={localePath(locale, `/services/${service.slug}`)} key={service.slug}><span>{service.number}</span><h3>{service.shortName}</h3><p>{service.intro}</p><small>{messages.common.exploreService} <ArrowRight size={14} /></small></Link>)}</div></div></section>

      <section className="faq-section section-shell inner-faq">
        <div className="faq-heading"><p className="eyebrow">{location.name} {copy.faqSuffix}</p><h2>{copy.faqTitle}</h2></div>
        <div className="faq-list">
          {location.faqs.map((item, index) => <details key={item.question} open={index === 0}><summary><span>0{index + 1}</span>{item.question}<i>+</i></summary><p>{item.answer}</p></details>)}
          <details><summary><span>0{location.faqs.length + 1}</span>{copy.branchQuestion}<i>+</i></summary><p>{copy.branchAnswer}</p></details>
        </div>
      </section>

      <BookingCta locale={locale} compact title={`${copy.sendPin} ${location.name}`} text={copy.sendPinText} />
    </main>
  );
}
