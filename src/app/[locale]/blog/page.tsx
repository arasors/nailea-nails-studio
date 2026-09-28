import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { BookingCta } from "@/components/BookingCta";
import { getMessages } from "@/lib/i18n";
import { formatDate, formatReadTime, hasLocale, languageAlternates, localePath } from "@/lib/locale-config";
import { getBlogPosts } from "@/lib/localized-content";

type Props = { params: Promise<{ locale: string }> };

const artImages = ["hand-satin.png", "polish-pour.png", "pink-glass.png", "polish-drops.png", "satin-ribbon.png", "polish-spill.png"];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(locale)) return {};
  const copy = getMessages(locale);
  const canonical = localePath(locale, "/blog");
  return { title: copy.blog.eyebrow, description: copy.blog.intro, alternates: { canonical, languages: languageAlternates("/blog") }, openGraph: { title: copy.blog.eyebrow, description: copy.blog.intro, url: canonical } };
}

export default async function BlogPage({ params }: Props) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  const copy = getMessages(locale);
  const blogPosts = getBlogPosts(locale);

  return (
    <main className="inner-page">
      <section className="journal-hero">
        <div><p className="eyebrow">{copy.blog.eyebrow}</p><h1>{copy.blog.title}</h1><p>{copy.blog.intro}</p></div>
        <div className="journal-hero-art" aria-hidden="true"><Image src="/images/nailea/polish-spill.png" alt="" fill sizes="45vw" loading="eager" /><span>NAILEA / {copy.blog.eyebrow}</span></div>
      </section>

      <section className="blog-grid section-shell">
        {blogPosts.map((post, index) => (
          <Link href={localePath(locale, `/blog/${post.slug}`)} key={post.slug} className="blog-card">
            <div className={`blog-card-art blog-card-art-${(index % 3) + 1}`}><Image src={`/images/nailea/${artImages[index]}`} alt="" fill sizes="(max-width: 700px) 100vw, 33vw" /><span>{post.category}</span></div>
            <p>{formatDate(post.published, locale)} · {formatReadTime(post.readTime, locale)}</p><h2>{post.title}</h2><small>{copy.blog.read} <ArrowRight size={14} /></small>
          </Link>
        ))}
      </section>

      <BookingCta locale={locale} compact title={copy.blog.bookingTitle} text={copy.blog.bookingText} />
    </main>
  );
}
