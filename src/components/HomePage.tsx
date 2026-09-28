import {
  ArrowDownRight,
  ArrowRight,
  Clock3,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

import { getMessages } from "@/lib/i18n";
import { formatDate, formatReadTime, localePath, type Locale } from "@/lib/locale-config";
import { getBlogPosts, getLocations, getServices } from "@/lib/localized-content";
import { siteConfig, whatsappMessageFor, whatsappUrl } from "@/lib/site";

import { BookingCta } from "./BookingCta";
import { BaliNeonMap } from "./BaliNeonMap";

export function HomePage({ locale }: { locale: Locale }) {
  const messages = getMessages(locale);
  const services = getServices(locale);
  const locations = getLocations(locale);
  const blogPosts = getBlogPosts(locale);
  const { hero, home, common } = messages;
  const marquee = [...home.marquee, ...home.marquee];

  return (
    <main>
      <section className="home-hero">
        <div className="hero-grid-lines" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1>{hero.title}<span>{hero.accent}</span></h1>
          <p className="hero-lede">{hero.lede}</p>
          <div className="hero-actions">
            <a className="button button-dark" href={whatsappUrl(whatsappMessageFor(locale), localePath(locale, "/#book"))} target={siteConfig.whatsappNumber ? "_blank" : undefined} rel="noreferrer">
              <MessageCircle size={18} aria-hidden="true" /> {common.bookWhatsApp}
            </a>
            <a className="text-link" href="#services">{hero.explore} <ArrowDownRight size={17} aria-hidden="true" /></a>
          </div>
          <div className="hero-notes" aria-label={home.servicesEyebrow}>
            <span><Sparkles size={14} /> {hero.notes[0]}</span>
            <span><MapPin size={14} /> {hero.notes[1]}</span>
            <span><ShieldCheck size={14} /> {hero.notes[2]}</span>
          </div>
        </div>

        <div className="hero-visual" aria-label="Nailea nude pink manicure">
          <div className="hero-triangle" aria-hidden="true" />
          <div className="hero-hand"><Image src="/images/nailea/hand-satin.png" alt="Nailea nude pink manicure" fill sizes="(max-width: 900px) 95vw, 56vw" loading="eager" /></div>
          <div className="hero-polish" aria-hidden="true"><Image src="/images/nailea/polish-pour.png" alt="" fill sizes="24vw" loading="eager" /></div>
          <div className="hero-stamp"><span>NAILEA</span><small>{hero.stamp}</small></div>
        </div>

        <div className="hero-side-note"><span>01</span><p>{hero.sideNote}</p></div>
      </section>

      <div className="brand-marquee" aria-label="Nailea"><div>{marquee.map((item, index) => <Fragment key={`${item}-${index}`}><span>{item}</span><i>✦</i></Fragment>)}</div></div>

      <section className="editorial-intro section-shell">
        <div className="section-index">{home.studioIndex}</div>
        <div className="editorial-intro-copy"><p className="eyebrow">{home.studioEyebrow}</p><h2>{home.studioTitle}</h2><p>{home.studioText}</p></div>
        <div className="editorial-intro-card">
          <div className="intro-card-image"><Image src="/images/nailea/pink-glass.png" alt="Nailea" fill sizes="25vw" /></div>
          <p>{home.studioValues.map((value) => <span key={value}>{value}<br /></span>)}</p>
        </div>
      </section>

      <section id="services" className="services-section section-shell">
        <div className="section-heading-row"><div><p className="eyebrow">{home.servicesEyebrow}</p><h2>{home.servicesTitle}</h2></div><p>{home.servicesText}</p></div>
        <div className="service-list">
          {services.map((service) => (
            <Link href={localePath(locale, `/services/${service.slug}`)} className="service-row" key={service.slug}>
              <span>{service.number}</span><h3>{service.shortName}</h3><p>{service.eyebrow}</p><span className="service-arrow"><ArrowRight aria-hidden="true" /></span>
            </Link>
          ))}
        </div>
      </section>

      <section className="home-service-feature">
        <div className="home-service-image"><BaliNeonMap locale={locale} /></div>
        <div className="home-service-copy">
          <p className="eyebrow eyebrow-light">{home.homeEyebrow}</p><h2>{home.homeTitle}</h2><p>{home.homeText}</p>
          <div className="feature-points">
            {home.homePoints.map((point, index) => <div key={point.title}>{index === 0 ? <MapPin /> : index === 1 ? <Clock3 /> : <Sparkles />}<span><strong>{point.title}</strong>{point.text}</span></div>)}
          </div>
          <Link className="button button-light" href={localePath(locale, "/services/home-service-nails-bali")}>{home.homeLink} <ArrowRight size={17} /></Link>
        </div>
      </section>

      <section className="style-section section-shell">
        <div className="style-art" aria-hidden="true">
          <div className="style-art-drop"><Image src="/images/nailea/polish-drops.png" alt="" fill sizes="45vw" /></div>
          <div className="style-art-ribbon"><Image src="/images/nailea/satin-ribbon.png" alt="" fill sizes="44vw" /></div>
          <span>NAILEA / {home.styleEyebrow}</span>
        </div>
        <div className="style-copy"><p className="eyebrow">{home.styleEyebrow}</p><h2>{home.styleTitle}</h2><p>{home.styleText}</p><div className="style-tags">{home.styleDirections.map((style, index) => <span key={style}><small>0{index + 1}</small>{style}</span>)}</div></div>
      </section>

      <section className="process-section section-shell">
        <div className="section-heading-row"><div><p className="eyebrow">{home.processEyebrow}</p><h2>{home.processTitle}</h2></div><p>{home.processText}</p></div>
        <ol className="process-grid">{home.process.map((step, index) => <li key={step.title}><span>0{index + 1}</span><h3>{step.title}</h3><p>{step.text}</p></li>)}</ol>
      </section>

      <section id="areas" className="areas-section">
        <div className="areas-heading section-shell"><p className="eyebrow eyebrow-light">{home.areasEyebrow}</p><h2>{home.areasTitle}</h2><p>{home.areasText}</p></div>
        <div className="area-grid section-shell">
          {locations.map((location, index) => (
            <Link href={localePath(locale, `/locations/${location.slug}`)} key={location.slug} className="area-card"><span>0{index + 1}</span><h3>{location.name}</h3><p>{location.intro}</p><small>{home.areaLink} <ArrowRight size={14} /></small></Link>
          ))}
        </div>
        <p className="coverage-note section-shell">{common.currentAreaSummary}: {siteConfig.serviceAreas.join(" · ")}. {common.availabilityNote}</p>
      </section>

      <section className="journal-preview section-shell">
        <div className="section-heading-row"><div><p className="eyebrow">{home.journalEyebrow}</p><h2>{home.journalTitle}</h2></div><Link className="text-link" href={localePath(locale, "/blog")}>{home.journalLink} <ArrowRight size={16} /></Link></div>
        <div className="journal-grid">
          {blogPosts.slice(0, 3).map((post, index) => (
            <Link href={localePath(locale, `/blog/${post.slug}`)} key={post.slug} className="journal-card">
              <div className={`journal-art journal-art-${index + 1}`}><span>{post.category}</span>{index === 0 ? <Image src="/images/nailea/hand-satin.png" alt="" fill sizes="33vw" loading="eager" /> : null}{index === 1 ? <Image src="/images/nailea/polish-pour.png" alt="" fill sizes="33vw" /> : null}{index === 2 ? <Image src="/images/nailea/pink-glass.png" alt="" fill sizes="33vw" /> : null}</div>
              <p>{formatDate(post.published, locale)} · {formatReadTime(post.readTime, locale)}</p><h3>{post.title}</h3><span>{home.readArticle} <ArrowRight size={14} /></span>
            </Link>
          ))}
        </div>
      </section>

      <section id="faq" className="faq-section section-shell">
        <div className="faq-heading"><p className="eyebrow">{home.faqEyebrow}</p><h2>{home.faqTitle}</h2></div>
        <div className="faq-list">{home.faq.map((item, index) => <details key={item.question} open={index === 0}><summary><span>0{index + 1}</span>{item.question}<i>+</i></summary><p>{item.answer}</p></details>)}</div>
      </section>

      <BookingCta locale={locale} />
    </main>
  );
}
