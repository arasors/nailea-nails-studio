import type { MetadataRoute } from "next";

import { blogPosts, locations, services } from "@/lib/content";
import { localePath, locales } from "@/lib/locale-config";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const translatedLinks = (path = "/") => ({
    languages: Object.fromEntries(locales.map((locale) => [locale, absoluteUrl(localePath(locale, path))])),
  });
  const staticRoutes = [
    { path: "/", changeFrequency: "monthly" as const, priority: 1 },
    { path: "/blog", changeFrequency: "monthly" as const, priority: 0.75 },
    { path: "/reviews", changeFrequency: "monthly" as const, priority: 0.6 },
  ];
  const staticPages: MetadataRoute.Sitemap = locales.flatMap((locale) => staticRoutes.map((page) => ({
    url: absoluteUrl(localePath(locale, page.path)),
    lastModified: now,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
    alternates: translatedLinks(page.path),
  })));

  const servicePages: MetadataRoute.Sitemap = locales.flatMap((locale) => services.map((service) => ({
    url: absoluteUrl(localePath(locale, `/services/${service.slug}`)),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
    alternates: translatedLinks(`/services/${service.slug}`),
  })));

  const locationPages: MetadataRoute.Sitemap = locales.flatMap((locale) => locations.map((location) => ({
    url: absoluteUrl(localePath(locale, `/locations/${location.slug}`)),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
    alternates: translatedLinks(`/locations/${location.slug}`),
  })));

  const articlePages: MetadataRoute.Sitemap = locales.flatMap((locale) => blogPosts.map((post) => ({
    url: absoluteUrl(localePath(locale, `/blog/${post.slug}`)),
    lastModified: new Date(post.published),
    changeFrequency: "yearly",
    priority: 0.65,
    alternates: translatedLinks(`/blog/${post.slug}`),
  })));

  return [...staticPages, ...servicePages, ...locationPages, ...articlePages];
}
