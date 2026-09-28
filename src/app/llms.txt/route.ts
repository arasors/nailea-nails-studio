import { locations, services } from "@/lib/content";
import { siteConfig } from "@/lib/site";

export function GET() {
  const body = `# ${siteConfig.name}

> ${siteConfig.description}

Nailea is a mobile nail service. It does not claim walk-in salons or physical branches in Bali. Every villa, hotel or home visit depends on the exact address, property access, route and schedule confirmation.

## Main pages
- English home: ${siteConfig.url}/en
- Indonesian home: ${siteConfig.url}/id
- Russian home: ${siteConfig.url}/ru
- Services: ${services.map((service) => `${service.name} (${siteConfig.url}/en/services/${service.slug})`).join("; ")}
- Area guides: ${locations.map((location) => `${location.name} (${siteConfig.url}/en/locations/${location.slug})`).join("; ")}
- Journal: ${siteConfig.url}/en/blog
- Reviews: ${siteConfig.url}/en/reviews

Each content page is available under /en, /id and /ru. English is the x-default fallback.

## Booking
Appointments are requested through the contact details configured by the business. Clients should share an exact location, service, preferred time, current nail photo and references. Availability is not guaranteed until Nailea confirms it.
`;

  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
