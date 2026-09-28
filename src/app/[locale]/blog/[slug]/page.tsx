import type { Metadata } from "next";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

import { BookingCta } from "@/components/BookingCta";
import { JsonLd } from "@/components/JsonLd";
import { getMessages } from "@/lib/i18n";
import { formatDate, formatReadTime, hasLocale, languageAlternates, localePath, locales } from "@/lib/locale-config";
import { getBlogPost, getBlogPosts } from "@/lib/localized-content";
import { absoluteUrl, siteConfig } from "@/lib/site";

type Props = { params: Promise<{ locale: string; slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((locale) => getBlogPosts(locale).map((post) => ({ locale, slug: post.slug })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!hasLocale(locale)) return {};
  const post = getBlogPost(locale, slug);
  if (!post) return {};
  const route = `/blog/${post.slug}`;
  const path = localePath(locale, route);
  return { title: { absolute: post.seoTitle }, description: post.description, alternates: { canonical: path, languages: languageAlternates(route) }, openGraph: { type: "article", title: post.seoTitle, description: post.description, url: path, publishedTime: post.published, images: [siteConfig.ogImage] } };
}

export default async function BlogPostPage({ params }: Props) {
  const { locale, slug } = await params;
  if (!hasLocale(locale)) notFound();
  const post = getBlogPost(locale, slug);
  if (!post) notFound();
  const copy = getMessages(locale);
  const pageUrl = absoluteUrl(localePath(locale, `/blog/${post.slug}`));
  const schema = [
    { "@context": "https://schema.org", "@type": "Article", headline: post.title, description: post.description, datePublished: post.published, dateModified: post.published, mainEntityOfPage: pageUrl, image: absoluteUrl(siteConfig.ogImage), inLanguage: locale, author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@id": `${siteConfig.url}/#business` } },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: copy.common.home, item: absoluteUrl(localePath(locale)) },
      { "@type": "ListItem", position: 2, name: copy.nav.journal, item: absoluteUrl(localePath(locale, "/blog")) },
      { "@type": "ListItem", position: 3, name: post.title, item: pageUrl },
    ] },
  ];
  const related = getBlogPosts(locale).filter((item) => item.slug !== post.slug).slice(0, 2);

  return (
    <main className="inner-page article-page">
      <JsonLd data={schema} />
      <article>
        <header className="article-header">
          <Link href={localePath(locale, "/blog")} className="back-link"><ArrowLeft size={15} /> {copy.blog.back}</Link>
          <p className="eyebrow">{post.category}</p><h1>{post.title}</h1><p className="article-intro">{post.intro}</p>
          <div className="article-meta"><span>{formatDate(post.published, locale)}</span><span>{formatReadTime(post.readTime, locale)}</span><span>{copy.blog.by}</span></div>
        </header>
        <div className="article-layout section-shell">
          <aside><span>{copy.blog.inGuide}</span>{post.sections.map((section, index) => <a href={`#section-${index + 1}`} key={section.heading}>0{index + 1} {section.heading}</a>)}</aside>
          <div className="article-body">
            {post.sections.map((section, index) => <section id={`section-${index + 1}`} key={section.heading}><span>0{index + 1}</span><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{section.points ? <ul>{section.points.map((point) => <li key={point}>{point}</li>)}</ul> : null}</section>)}
            <blockquote><span>{copy.blog.takeaway}</span><p>{post.takeaway}</p></blockquote>
          </div>
        </div>
      </article>
      <section className="article-related section-shell"><p className="eyebrow">{copy.blog.continue}</p><div>{related.map((item) => <Link href={localePath(locale, `/blog/${item.slug}`)} key={item.slug}><span>{item.category}</span><h2>{item.title}</h2><small>{copy.blog.next} <ArrowRight size={14} /></small></Link>)}</div></section>
      <BookingCta locale={locale} compact />
    </main>
  );
}
