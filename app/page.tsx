import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import { getDictionary, localePath, type Locale } from "@/lib/i18n";

export default function HomePage() {
  return <HomeContent locale="tr" />;
}

export function HomeContent({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).home;
  return (
    <>
      <Nav current="home" light locale={locale} />

      {/* HERO */}
      <header className="hero" data-hero-dark="">
        <div className="hero__bg" aria-hidden="true">
          <Image
            alt=""
            className="hero__bgImage"
            fill
            priority
            sizes="100vw"
            src="/images/banner.png"
          />
        </div>

        <div className="hero__inner">
          <div className="flex flex-col justify-center hero__brandLockup">
            <h2 className="display hero__title">Monterno</h2>
            <span className="hero__subtitle">Milano</span>
          </div>

          <div className="hero__cta">
            <Link href={localePath(locale, "/gomlekler")} className="btn btn--light">
              {t.heroCta}
            </Link>
          </div>
        </div>
      </header>

      {/* MANIFESTO */}
      <section className="section">
        <div className="shell manifesto">
          <div className="manifesto__side reveal">
            <span className="eyebrow">{t.philosophy}</span>
            <h3 className="display" style={{ marginTop: 18, marginBottom: 36 }}>
              {t.manifestoTitle[0]}
              <br />
              {t.manifestoTitle[1]}
            </h3>
            <div className="manifesto__image" aria-label="Monterno gömlek detayı" />
          </div>

          <div className="manifesto__body reveal">
            <p className="manifesto__quote">
              {t.manifestoQuote[0]}<em>{t.manifestoQuote[1]}</em>{t.manifestoQuote[2]}
              <em>{t.manifestoQuote[3]}</em>{t.manifestoQuote[4]}
            </p>

            <div className="rule" style={{ margin: "56px 0 28px" }} />

            <p className="lede">{t.manifestoBody}</p>
          </div>
        </div>
      </section>

      {/* PIECES */}
      <section className="section">
        <div className="shell">
          <div className="pieces__head reveal">
            <div>
              <span className="eyebrow">{t.shirts}</span>
              <h2 className="display" style={{ marginTop: 16 }}>
                {t.signaturePieces}
              </h2>
            </div>
            <Link href={localePath(locale, "/gomlekler")} className="link-arrow">
              {t.allCollection}
            </Link>
          </div>

          <div className="pieces__grid">
            <Link className="piece reveal" href={localePath(locale, "/gomlekler#bianca")}>
              <div className="piece__image piece__image--bianca" />
              <div className="piece__row">
                <div className="piece__name">
                  Giacca <em>Avorio</em>
                </div>
                <div className="piece__num">N° 01</div>
              </div>
              <div className="piece__meta">
                <span>{t.pieces.avorio[0]}</span>
                <span>{t.pieces.avorio[1]}</span>
              </div>
            </Link>

            <Link className="piece reveal" href={localePath(locale, "/gomlekler#lino")}>
              <div className="piece__image piece__image--lino" />
              <div className="piece__row">
                <div className="piece__name">
                  Lino <em>Bianco</em>
                </div>
                <div className="piece__num">N° 03</div>
              </div>
              <div className="piece__meta">
                <span>{t.pieces.lino[0]}</span>
                <span>{t.pieces.lino[1]}</span>
              </div>
            </Link>

            <Link className="piece reveal" href={localePath(locale, "/gomlekler#notte")}>
              <div className="piece__image piece__image--notte" />
              <div className="piece__row">
                <div className="piece__name">
                  Zip <em>Notte</em>
                </div>
                <div className="piece__num">N° 07</div>
              </div>
              <div className="piece__meta">
                <span>{t.pieces.notte[0]}</span>
                <span>{t.pieces.notte[1]}</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* FABRIC */}
      <section className="fabric">
        <div className="fabric__inner">
          <div className="reveal">
            <div className="fabric__image" aria-label="Monterno kumaş detayı" />
          </div>
          <div className="fabric__body reveal">
            <span className="eyebrow">{t.fabrics}</span>
            <h2 className="display" style={{ marginTop: 16 }}>
              {t.fabricTitle[0]}<em>{t.fabricTitle[1]}</em>{t.fabricTitle[2]}
            </h2>
            <p className="lede" style={{ marginTop: 26 }}>{t.fabricLead}</p>
            <p>{t.fabricCopy}</p>
          </div>
        </div>
      </section>

      {/* EDITORIAL */}
      <section
        className="editorial"
        style={{
          marginTop: 0,
          paddingTop: "clamp(80px, 12vw, 160px)",
          paddingBottom: "clamp(40px, 6vw, 80px)",
        }}
      >
        <div className="editorial__img reveal" aria-label="Monterno editorial çekimi" />
        <div className="editorial__cap reveal">
          <span>{t.editorial[0]}</span>
          <span className="center">{t.editorial[1]}</span>
          <span className="right">{t.editorial[2]}</span>
        </div>
      </section>

      {/* ATELIER */}
      <section className="section">
        <div className="shell atelier">
          <div className="atelier__intro reveal">
            <span className="eyebrow">{t.principles}</span>
            <h2 className="display" style={{ marginTop: 16, marginBottom: 48 }}>
              {t.principlesTitle[0]}<em>{t.principlesTitle[1]}</em>{t.principlesTitle[2]}
            </h2>
          </div>
          <div className="atelier__media reveal">
            <div className="atelier__image" aria-label="Monterno işçilik detayı" />
          </div>
          <div className="atelier__content reveal">
            <div className="atelier__body">
              <p className="lede">{t.principlesLead}</p>
            </div>

            <div className="atelier__list">
              {t.principleRows.map((row) => (
                <div className="row" key={row[0]}>
                  <div className="num">{row[0]}</div>
                  <div className="ttl">
                    <em>{row[1]}</em> — {row[2]}
                  </div>
                  <div className="yr">{row[3]}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Newsletter locale={locale} />
      <Footer locale={locale} />
    </>
  );
}
