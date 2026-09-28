"use client";

import { Check, ChevronDown, Languages } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import {
  localeLabels,
  localePath,
  locales,
  pathWithoutLocale,
  type Locale,
} from "@/lib/locale-config";

type LanguageSwitcherProps = {
  locale: Locale;
  label: string;
  onSelect?: () => void;
};

export function LanguageSwitcher({ locale, label, onSelect }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const closeOnOutsideClick = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("mousedown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  function selectLocale(nextLocale: Locale) {
    const hash = window.location.hash;
    router.push(`${localePath(nextLocale, pathWithoutLocale(pathname))}${hash}`);
    setOpen(false);
    onSelect?.();
  }

  return (
    <div className={`language-switcher ${open ? "is-open" : ""}`} ref={rootRef}>
      <button
        type="button"
        className="language-trigger"
        aria-label={`${label}: ${localeLabels[locale].native}`}
        aria-expanded={open}
        aria-haspopup="listbox"
        onClick={() => setOpen((value) => !value)}
      >
        <Languages aria-hidden="true" size={15} />
        <span>{localeLabels[locale].short}</span>
        <ChevronDown aria-hidden="true" size={13} />
      </button>
      <div className="language-popover" role="listbox" aria-label={label}>
        <span>{label}</span>
        {locales.map((item) => (
          <button
            type="button"
            role="option"
            aria-selected={item === locale}
            key={item}
            onClick={() => selectLocale(item)}
          >
            <b>{localeLabels[item].short}</b>
            {localeLabels[item].native}
            {item === locale ? <Check aria-hidden="true" size={14} /> : null}
          </button>
        ))}
      </div>
    </div>
  );
}
