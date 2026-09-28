import type { Metadata } from "next";
import { ArrowRight, Camera, Quote, ShieldCheck, Star } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";

import { BookingCta } from "@/components/BookingCta";
import { getMessages } from "@/lib/i18n";
import { formatDate, hasLocale, languageAlternates, localePath } from "@/lib/locale-config";
import { getSampleReviews, sampleReviewAverage } from "@/lib/reviews";
import { siteConfig } from "@/lib/site";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(locale)) return {};
  const copy = getMessages(locale);
  const canonical = localePath(locale, "/reviews");
  return { title: copy.nav.reviews, description: copy.reviews.intro, alternates: { canonical, languages: languageAlternates("/reviews") }, openGraph: { title: copy.nav.reviews, description: copy.reviews.intro, url: canonical } };
}

export default async function ReviewsPage({ params }: Props) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  const copy = getMessages(locale);
  const reviews = getSampleReviews(locale);

  return (
    <main className="inner-page reviews-page">
      <section className="reviews-hero">
        <div><p className="eyebrow">{copy.reviews.eyebrow}</p><h1>{copy.reviews.title}</h1><p>{copy.reviews.intro}</p></div>
        <div className="reviews-hero-art" aria-hidden="true"><Quote /><Image src="/images/nailea/pink-glass.png" alt="" fill sizes="40vw" loading="eager" /></div>
      </section>

      <section className="review-summary section-shell">
        <div className="review-score">
          <span>{sampleReviewAverage.toFixed(1)}</span>
          <div><div className="review-stars" aria-label={`${sampleReviewAverage.toFixed(1)} / 5`}>{Array.from({ length: 5 }, (_, index) => <Star key={index} aria-hidden="true" size={19} fill="currentColor" />)}</div><p>{reviews.length} {copy.reviews.countLabel}</p></div>
        </div>
        <div className="review-summary-copy"><p className="eyebrow">{copy.reviews.verified}</p><h2>{copy.reviews.emptyTitle}</h2><p>{copy.reviews.emptyText}</p></div>
        {siteConfig.instagramUrl ? <a className="button button-dark" href={siteConfig.instagramUrl} target="_blank" rel="noreferrer"><Camera size={17} /> {copy.reviews.instagram} <ArrowRight size={16} /></a> : null}
      </section>

      <section className="sample-review-grid section-shell" aria-label={copy.reviews.verified}>
        {reviews.map((review) => (
          <article className="sample-review-card" key={review.id}>
            <div className="review-card-head">
              <span className={`review-avatar review-avatar-${(review.id % 5) + 1}`}>{review.initials}</span>
              <div><h2>{review.author}</h2><p>{review.service}</p></div>
             
            </div>
            <div className="review-card-meta"><span className="review-stars">{Array.from({ length: 5 }, (_, index) => <Star key={index} aria-hidden="true" size={15} fill={index < review.rating ? "currentColor" : "none"} />)}</span><time dateTime={review.date}>{formatDate(review.date, locale)}</time></div>
            <p className="review-card-text">{review.text}</p>
            
          </article>
        ))}
      </section>

      <section className="experience-section section-shell"><p className="eyebrow">{copy.reviews.standard}</p><div className="experience-grid">{copy.reviews.cards.map((note, index) => <article key={note.title}><span>0{index + 1}</span><h2>{note.title}</h2><p>{note.text}</p></article>)}</div></section>
      <BookingCta locale={locale} compact title={copy.reviews.bookingTitle} />
    </main>
  );
}
