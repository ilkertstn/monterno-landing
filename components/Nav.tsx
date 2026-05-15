"use client";

import Link from "next/link";
import { useState } from "react";
import { getDictionary, localePath, localePreferencePath, locales, type Locale } from "@/lib/i18n";

type Current = "home" | "gomlekler" | "atelier";

const primaryLinks: Array<{ href: string; labelKey: "home" | "shirts" | "atelier"; key: Current }> = [
  { href: "/", labelKey: "home", key: "home" },
  { href: "/gomlekler", labelKey: "shirts", key: "gomlekler" },
  { href: "/atelier", labelKey: "atelier", key: "atelier" },
];

const secondaryLinks = [
  { href: "/#letter", labelKey: "newsletter" as const },
  { href: "/atelier#showroom", labelKey: "showroom" as const },
];

export default function Nav({
  current,
  light = false,
  locale = "tr",
}: {
  current?: Current;
  light?: boolean;
  locale?: Locale;
}) {
  const t = getDictionary(locale).nav;
  const switchPath =
    current === "gomlekler"
      ? "/gomlekler"
      : current === "atelier"
        ? "/atelier"
        : "/";
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const aria = (key: Current) =>
    current === key ? { "aria-current": "page" as const } : {};
  const languageOptions = locales.filter((option) => option !== locale);

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsLangOpen(false);
  };

  return (
    <nav className={`nav${light ? " is-light" : ""}${isMenuOpen ? " is-menu-open" : ""}`}>
      <div className="nav__links">
        {primaryLinks.map((link) => (
          <Link key={link.href} href={localePath(locale, link.href)} {...aria(link.key)}>
            {t[link.labelKey]}
          </Link>
        ))}
      </div>
      <Link href={localePath(locale, "/")} className="nav__brand">
        MONTERNO
        <small>Mılano</small>
      </Link>
      <div className="nav__right">
        {secondaryLinks.map((link) => (
          <Link key={link.href} href={localePath(locale, link.href)} className="ico-btn">
            {t[link.labelKey]}
          </Link>
        ))}
        <div className={`lang-select${isLangOpen ? " is-open" : ""}`}>
          <button
            type="button"
            className="lang-select__button"
            aria-label="Language"
            aria-expanded={isLangOpen}
            onClick={() => setIsLangOpen((open) => !open)}
          >
            <span>{locale.toUpperCase()}</span>
            <span className="lang-select__chevron" aria-hidden="true" />
          </button>
          <div className="lang-select__menu">
            {languageOptions.map((option) => (
              <Link
                key={option}
                href={localePreferencePath(option, switchPath)}
                onClick={() => setIsLangOpen(false)}
              >
                {option.toUpperCase()}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <button
        className="nav__menu-toggle"
        type="button"
        aria-label={isMenuOpen ? t.closeMenu : t.openMenu}
        aria-controls="mobile-menu"
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        <span />
        <span />
      </button>
      <div className="nav__mobile-panel" id="mobile-menu">
        <div className="nav__mobile-links">
          {primaryLinks.map((link) => (
            <Link key={link.href} href={localePath(locale, link.href)} onClick={closeMenu} {...aria(link.key)}>
              {t[link.labelKey]}
            </Link>
          ))}
        </div>
        <div className="nav__mobile-actions">
          {secondaryLinks.map((link) => (
            <Link key={link.href} href={localePath(locale, link.href)} onClick={closeMenu}>
              {t[link.labelKey]}
            </Link>
          ))}
          <div className="nav__mobile-lang" aria-label="Language">
            <span>{locale.toUpperCase()}</span>
            {languageOptions.map((option) => (
              <Link
                key={option}
                href={localePreferencePath(option, switchPath)}
                onClick={closeMenu}
              >
                {option.toUpperCase()}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
