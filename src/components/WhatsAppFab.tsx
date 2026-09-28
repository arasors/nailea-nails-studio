import { MessageCircle } from "lucide-react";

import { getMessages } from "@/lib/i18n";
import { localePath, type Locale } from "@/lib/locale-config";
import { siteConfig, whatsappMessageFor, whatsappUrl } from "@/lib/site";

export function WhatsAppFab({ locale }: { locale: Locale }) {
  const messages = getMessages(locale);
  return (
    <a
      className="whatsapp-fab"
      href={whatsappUrl(whatsappMessageFor(locale), localePath(locale, "/#book"))}
      target={siteConfig.whatsappNumber ? "_blank" : undefined}
      rel="noreferrer"
      aria-label={messages.common.bookWhatsApp}
    >
      <MessageCircle aria-hidden="true" size={20} />
      <span>{messages.nav.book}</span>
    </a>
  );
}
