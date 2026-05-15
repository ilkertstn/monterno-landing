"use client";

import Link from "next/link";
import { useState } from "react";

type Current = "home" | "gomlekler" | "atelier";

const primaryLinks: Array<{ href: string; label: string; key: Current }> = [
  { href: "/", label: "Ana Sayfa", key: "home" },
  { href: "/gomlekler", label: "Gömlekler", key: "gomlekler" },
  { href: "/atelier", label: "Hakkımızda", key: "atelier" },
];

const secondaryLinks = [
  { href: "/#letter", label: "Bülten" },
  { href: "/atelier#showroom", label: "Showroom" },
];

export default function Nav({
  current,
  light = false,
}: {
  current?: Current;
  light?: boolean;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const aria = (key: Current) =>
    current === key ? { "aria-current": "page" as const } : {};

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className={`nav${light ? " is-light" : ""}${isMenuOpen ? " is-menu-open" : ""}`}>
      <div className="nav__links">
        {primaryLinks.map((link) => (
          <Link key={link.href} href={link.href} {...aria(link.key)}>
            {link.label}
          </Link>
        ))}
      </div>
      <Link href="/" className="nav__brand">
        MONTERNO
        <small>Mılano</small>
      </Link>
      <div className="nav__right">
        {secondaryLinks.map((link) => (
          <Link key={link.href} href={link.href} className="ico-btn">
            {link.label}
          </Link>
        ))}
      </div>
      <button
        className="nav__menu-toggle"
        type="button"
        aria-label={isMenuOpen ? "Menüyü kapat" : "Menüyü aç"}
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
            <Link key={link.href} href={link.href} onClick={closeMenu} {...aria(link.key)}>
              {link.label}
            </Link>
          ))}
        </div>
        <div className="nav__mobile-actions">
          {secondaryLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
