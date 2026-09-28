import { ArrowRight, MessageCircle } from "lucide-react";
import Image from "next/image";

import { getMessages } from "@/lib/i18n";
import { localePath, type Locale } from "@/lib/locale-config";
import { siteConfig, whatsappMessageFor, whatsappUrl } from "@/lib/site";

type BookingCtaProps = {
  compact?: boolean;
  title?: string;
  text?: string;
  locale: Locale;
};

export function BookingCta({
  locale,
  compact = false,
  title,
  text,
}: BookingCtaProps) {
  const messages = getMessages(locale);

  return (
    <section id="book" className={`booking-cta ${compact ? "booking-cta-compact" : ""}`}>
      <div className="booking-cta-copy">
        <p className="eyebrow eyebrow-light">{messages.common.bookingEyebrow}</p>
        <h2>{title || messages.booking.title}</h2>
        <p>{text || messages.booking.text}</p>
        <a className="button button-light" href={whatsappUrl(whatsappMessageFor(locale), localePath(locale, "/#book"))} target={siteConfig.whatsappNumber ? "_blank" : undefined} rel="noreferrer">
          <MessageCircle aria-hidden="true" size={18} />
          {messages.common.bookWhatsApp}
          <ArrowRight aria-hidden="true" size={17} />
        </a>
      </div>
      {!compact ? (
        <div className="booking-cta-art" aria-hidden="true">
          <Image src="/images/nailea/polish-spill.png" alt="" fill sizes="(max-width: 800px) 80vw, 42vw" />
        </div>
      ) : null}
    </section>
  );
}
