import { ArrowUpRight, Camera } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { getMessages } from "@/lib/i18n";
import { type Locale, localePath } from "@/lib/locale-config";
import { getLocations, getServices } from "@/lib/localized-content";
import { siteConfig, whatsappMessageFor, whatsappUrl } from "@/lib/site";

export function SiteFooter({ locale }: { locale: Locale }) {
  const messages = getMessages(locale);
  const services = getServices(locale);
  const locations = getLocations(locale);

  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <Image src="/images/nailea/logo.png" alt="Nailea Nails Art Studio" width={1063} height={866} />
          <p>{messages.footer.description}</p>
        </div>

        <div className="footer-links">
          <div>
            <p className="footer-label">{messages.common.services}</p>
            {services.slice(0, 5).map((service) => (
              <Link href={localePath(locale, `/services/${service.slug}`)} key={service.slug}>{service.shortName}</Link>
            ))}
          </div>
          <div>
            <p className="footer-label">{messages.common.areas}</p>
            {locations.map((location) => (
              <Link href={localePath(locale, `/locations/${location.slug}`)} key={location.slug}>{location.name}</Link>
            ))}
          </div>
          <div>
            <p className="footer-label">{messages.footer.explore}</p>
            <Link href={localePath(locale, "/blog")}>{messages.nav.journal}</Link>
            <Link href={localePath(locale, "/reviews")}>{messages.nav.reviews}</Link>
            <Link href={localePath(locale, "/#faq")}>{messages.footer.faq}</Link>
            <a href={whatsappUrl(whatsappMessageFor(locale), localePath(locale, "/#book"))} target={siteConfig.whatsappNumber ? "_blank" : undefined} rel="noreferrer">{messages.footer.whatsapp}</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Nailea Nails Art Studio</span>
        <span>{messages.footer.mobileOnly}</span>
        {siteConfig.instagramUrl ? (
          <a href={siteConfig.instagramUrl} target="_blank" rel="noreferrer">
            <Camera size={15} /> {siteConfig.instagramHandle || "Instagram"} <ArrowUpRight size={14} />
          </a>
        ) : (
          <span>{messages.footer.signoff}</span>
        )}
      </div>
    </footer>
  );
}
