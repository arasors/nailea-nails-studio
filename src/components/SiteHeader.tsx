"use client";

import { ArrowUpRight, Camera, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import type { Messages } from "@/lib/i18n";
import { localePath, type Locale } from "@/lib/locale-config";
import { siteConfig, whatsappMessageFor, whatsappUrl } from "@/lib/site";

import { LanguageSwitcher } from "./LanguageSwitcher";

export function SiteHeader({ locale, copy }: { locale: Locale; copy: Messages["nav"] }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = [
    { label: copy.services, href: localePath(locale, "/#services") },
    { label: copy.areas, href: localePath(locale, "/#areas") },
    { label: copy.journal, href: localePath(locale, "/blog") },
    { label: copy.reviews, href: localePath(locale, "/reviews") },
  ];

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className="site-header">
        <Link href={localePath(locale)} className="brand-lockup" aria-label="Nailea home" onClick={() => setMenuOpen(false)}>
          <span className="brand-mark">
            <Image
              src="/images/nailea/logo-square.png"
              alt=""
              width={1063}
              height={1063}
              loading="eager"
            />
          </span>
          <span>
            <span className="brand-name">NAILEA</span>
            <span className="brand-subtitle">NAILS ART STUDIO</span>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <LanguageSwitcher locale={locale} label={copy.language} onSelect={() => setMenuOpen(false)} />
          <a className="header-book" href={whatsappUrl(whatsappMessageFor(locale), localePath(locale, "/#book"))} target={siteConfig.whatsappNumber ? "_blank" : undefined} rel="noreferrer">
            {copy.book}
            <ArrowUpRight aria-hidden="true" size={15} />
          </a>
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? copy.menuClose : copy.menuOpen}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </header>

      <div className={`mobile-menu ${menuOpen ? "is-open" : ""}`} aria-hidden={!menuOpen}>
        <div className="mobile-menu-art" aria-hidden="true">
          <Image src="/images/nailea/satin-ribbon.png" alt="" fill sizes="70vw" />
        </div>
        <p className="mobile-menu-kicker">{copy.mobileKicker}</p>
        <nav aria-label="Mobile navigation">
          {navItems.map((item, index) => (
            <Link key={item.label} href={item.href} tabIndex={menuOpen ? 0 : -1} onClick={() => setMenuOpen(false)}>
              <span>0{index + 1}</span>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="mobile-menu-footer">
          <a href={whatsappUrl(whatsappMessageFor(locale), localePath(locale, "/#book"))} target={siteConfig.whatsappNumber ? "_blank" : undefined} rel="noreferrer" tabIndex={menuOpen ? 0 : -1}>
            {copy.bookingLink} <ArrowUpRight size={18} />
          </a>
          {siteConfig.instagramUrl ? (
            <a href={siteConfig.instagramUrl} target="_blank" rel="noreferrer" tabIndex={menuOpen ? 0 : -1}>
              <Camera size={18} /> Instagram
            </a>
          ) : null}
        </div>
      </div>
    </>
  );
}
