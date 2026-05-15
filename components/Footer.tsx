import Link from "next/link";
import { getDictionary, localePath, type Locale } from "@/lib/i18n";

export default function Footer({ locale = "tr" }: { locale?: Locale }) {
  const t = getDictionary(locale).footer;
  return (
    <footer className="footer">
      <div className="footer__grid">
        <div className="footer__brand">
          <div className="mark">
            Monterno <em style={{ fontStyle: "italic" }}>Milano</em>
          </div>
          <p>{t.copy}</p>
        </div>
        <div>
          <h4>{t.pages}</h4>
          <ul>
            <li><Link href={localePath(locale, "/")}>{getDictionary(locale).nav.home}</Link></li>
            <li><Link href={localePath(locale, "/gomlekler")}>{getDictionary(locale).nav.shirts}</Link></li>
            <li><Link href={localePath(locale, "/atelier")}>{getDictionary(locale).nav.atelier}</Link></li>
            <li><Link href={localePath(locale, "/atelier#showroom")}>{getDictionary(locale).nav.showroom}</Link></li>
          </ul>
        </div>
        <div>
          <h4>{t.brand}</h4>
          <ul>
            <li><Link href={localePath(locale, "/atelier#filosofia")}>{t.philosophy}</Link></li>
            <li><Link href={localePath(locale, "/atelier#materiali")}>{t.fabrics}</Link></li>
            <li><Link href={localePath(locale, "/atelier#vestibilita")}>{t.fit}</Link></li>
            <li><Link href={localePath(locale, "/#letter")}>{t.newsletter}</Link></li>
          </ul>
        </div>
        <div>
          <h4>{t.contact}</h4>
          <ul>
            <li>{t.address}</li>
            <li>
              <a href="mailto:showroom@monternomilano.com">
               info@mayagmurtextile.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <span>{t.copyright}</span>
      </div>
    </footer>
  );
}
