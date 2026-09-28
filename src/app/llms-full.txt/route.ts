import { blogPosts, locations, services } from "@/lib/content";
import { siteConfig } from "@/lib/site";

export function GET() {
  const serviceText = services
    .map((service) => `### ${service.name}\n${service.intro}\n${service.detail}\nURL: ${siteConfig.url}/en/services/${service.slug}`)
    .join("\n\n");
  const locationText = locations
    .map((location) => `### ${location.name}\n${location.intro}\n${location.localNote}\nURL: ${siteConfig.url}/en/locations/${location.slug}`)
    .join("\n\n");
  const articleText = blogPosts
    .map((post) => `- ${post.title}: ${post.description} (${siteConfig.url}/en/blog/${post.slug})`)
    .join("\n");

  const body = `# ${siteConfig.name}: full website context

${siteConfig.description}

The website is fully available in English (/en), Bahasa Indonesia (/id) and Russian (/ru). Equivalent paths contain localized content; English is the default fallback.

## Important accuracy notes
Nailea is presented as a mobile service for selected Bali addresses, not as a chain of salons. The website intentionally omits unconfirmed prices, opening hours, street addresses and client testimonials. Location pages are practical area guides and do not represent physical branches. Exact availability must be confirmed for each booking.

## Services
${serviceText}

## Bali area guides
${locationText}

## Editorial guides
${articleText}
`;

  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
