import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { getDictionary, type Locale } from "@/lib/i18n";

export const metadata = {
  title: "Hakkımızda — Monterno Milano",
};

export default function AtelierPage() {
  return <AtelierContent locale="tr" />;
}

export function AtelierContent({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).atelier;
  return (
    <>
      <Nav current="atelier" locale={locale} />

      <section className="page-head about-head">
        <div className="reveal">
          <span className="eyebrow">{t.eyebrow}</span>
          <h1 className="display" style={{ marginTop: 18 }}>
            {t.title[0]}<em>{t.title[1]}</em>{t.title[2]}
          </h1>
        </div>
        <div className="about-head__content reveal">
          <p className="lede">{t.lead}</p>
          <div className="about-head__notes" aria-label="Monterno yaklaşımı">
            {t.notes.map((note) => <span key={note}>{note}</span>)}
          </div>
        </div>
      </section>

      <section className="feature" id="filosofia">
        <div className="reveal">
          <div
            className="feature__img feature__img--philosophy"
            aria-label="Monterno gömlek detayı"
          />
        </div>
        <div className="feature__body reveal">
          <span className="eyebrow">{t.philosophy.eyebrow}</span>
          <h2 className="display" style={{ marginTop: 14 }}>
            {t.philosophy.title[0]}<em>{t.philosophy.title[1]}</em>{t.philosophy.title[2]}
          </h2>
          <p className="lede" style={{ marginTop: 22 }}>{t.philosophy.lead}</p>
          <p>{t.philosophy.copy}</p>
        </div>
      </section>

      <section className="feature reverse" id="vestibilita">
        <div className="reveal">
          <div
            className="feature__img feature__img--fit"
            aria-label="Monterno gömlek kalıp ve fit detayı"
          />
        </div>
        <div className="feature__body reveal">
          <span className="eyebrow">{t.fit.eyebrow}</span>
          <h2 className="display" style={{ marginTop: 14 }}>
            {t.fit.title[0]}<em>{t.fit.title[1]}</em>{t.fit.title[2]}
          </h2>
          <p className="lede" style={{ marginTop: 22 }}>{t.fit.lead}</p>
          <p>{t.fit.copy}</p>
        </div>
      </section>

      <section className="quote-band">
        <p>{t.quote}</p>
      </section>

      <section className="pillars" id="materiali">
        <div className="pillars__inner">
          <div className="pillars__head">
            <div className="reveal">
              <span className="eyebrow">{t.principles.eyebrow}</span>
              <h2 className="display" style={{ marginTop: 14 }}>
                {t.principles.title[0]}
                <br />
                {t.principles.title[1]}
              </h2>
            </div>
            <p className="lede reveal" style={{ maxWidth: "56ch" }}>
              {t.principles.lead}
            </p>
          </div>

          <div className="pillars__list">
            {t.principles.rows.map((p) => (
              <div key={p[0]} className="pillar reveal">
                <div className="n">{p[0]}</div>
                <div className="t">
                  <em>{p[1]}</em>
                </div>
                <div className="d">{p[2]}</div>
                <div className="h">{p[3]}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="partners">
        <div className="partners__head reveal">
          <span className="eyebrow">{t.fabrics.eyebrow}</span>
          <h2 className="display" style={{ marginTop: 14 }}>
            {t.fabrics.title[0]}<em>{t.fabrics.title[1]}</em>{t.fabrics.title[2]}
          </h2>
          <p className="lede" style={{ marginTop: 22 }}>{t.fabrics.lead}</p>
        </div>

        <div className="partners__grid">
          {t.fabrics.rows.map((fabric, index) => (
          <div className="partner reveal" key={fabric[1]}>
            <div
              className={`partner__image ${index === 0 ? "partner__image--pamuk" : index === 1 ? "partner__image--keten" : "partner__image--poplin"}`}
              aria-label="Pamuk gömlek kumaşı yakın çekim"
            />
            <div className="partner__text">
              <span className="where">{fabric[0]}</span>
              <h3>
                <em>{fabric[1]}</em>
              </h3>
              <p>{fabric[2]}</p>
              <div className="what">{fabric[3]}</div>
            </div>
          </div>
          ))}
        </div>
      </section>

      <section className="showroom" id="showroom">
        <div className="showroom__head reveal">
          <span className="eyebrow">{t.showroom.eyebrow}</span>
          <h2 className="display" style={{ marginTop: 14 }}>
            {t.showroom.title[0]}<em>{t.showroom.title[1]}</em>{t.showroom.title[2]}
          </h2>
          <p className="lede" style={{ marginTop: 22 }}>{t.showroom.lead}</p>
        </div>

        <div className="showroom__grid">
          <div className="showroom__card reveal">
            <div
              className="ph"
              data-tone="cool"
              data-label="Fotoğraf · İstanbul showroom iç mekân"
            />
            <h3>
              {t.showroom.titleCard} <em>{t.showroom.city}</em>
            </h3>
            <div className="meta">
              <div>
                <span>{t.showroom.region}</span>
                <span>{t.showroom.regionValue}</span>
              </div>
              <div>
                <span>{t.showroom.hours}</span>
                <span>{t.showroom.hoursValue}</span>
              </div>
              <div>
                <span>{t.showroom.appointment}</span>
                <span>info@mayagmurtextile.com</span>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            marginTop: 64,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Link href="mailto:showroom@monternomilano.com" className="btn">
            {t.showroom.cta}
          </Link>
        </div>
      </section>

      <Footer locale={locale} />
    </>
  );
}
