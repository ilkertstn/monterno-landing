import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";

export default function HomePage() {
  return (
    <>
      <Nav current="home" light />

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
            <Link href="/gomlekler" className="btn btn--light">
              Koleksiyonu görün
            </Link>
          </div>
        </div>
      </header>

      {/* MANIFESTO */}
      <section className="section">
        <div className="shell manifesto">
          <div className="manifesto__side reveal">
            <span className="eyebrow">Felsefe</span>
            <h3 className="display" style={{ marginTop: 18, marginBottom: 36 }}>
              İyi bir gömlek
              <br />
              sessizce konuşur.
            </h3>
            <div className="manifesto__image" aria-label="Monterno gömlek detayı" />
          </div>

          <div className="manifesto__body reveal">
            <p className="manifesto__quote">
              Modern <em>İtalyan</em> sadeliği. Doğru kumaş, net form, dürüst{" "}
              <em>kesim</em>.
            </p>

            <div className="rule" style={{ margin: "56px 0 28px" }} />

            <p className="lede">
              Monterno Milano, İtalyan modasının sessiz disiplininden ilham alan
              çağdaş bir gömlek markasıdır. Kaliteli kumaş, dengeli kalıp ve
              dürüst kesim üzerine kuruludur. Trende karışmayan, mevsime
              aldırmayan, üzerinize zamanla yerleşen bir gardırop için.
            </p>
          </div>
        </div>
      </section>

      {/* PIECES */}
      <section className="section">
        <div className="shell">
          <div className="pieces__head reveal">
            <div>
              <span className="eyebrow">Gömlekler</span>
              <h2 className="display" style={{ marginTop: 16 }}>
                İmza parçalar.
              </h2>
            </div>
            <Link href="/gomlekler" className="link-arrow">
              Tüm koleksiyon →
            </Link>
          </div>

          <div className="pieces__grid">
            <Link className="piece reveal" href="/gomlekler#bianca">
              <div className="piece__image piece__image--bianca" />
              <div className="piece__row">
                <div className="piece__name">
                  Giacca <em>Avorio</em>
                </div>
                <div className="piece__num">N° 01</div>
              </div>
              <div className="piece__meta">
                <span>Pamuk · Ekru</span>
                <span>Overshirt</span>
              </div>
            </Link>

            <Link className="piece reveal" href="/gomlekler#lino">
              <div className="piece__image piece__image--lino" />
              <div className="piece__row">
                <div className="piece__name">
                  Lino <em>Bianco</em>
                </div>
                <div className="piece__num">N° 03</div>
              </div>
              <div className="piece__meta">
                <span>Keten · Beyaz</span>
                <span>Rahat</span>
              </div>
            </Link>

            <Link className="piece reveal" href="/gomlekler#notte">
              <div className="piece__image piece__image--notte" />
              <div className="piece__row">
                <div className="piece__name">
                  Zip <em>Notte</em>
                </div>
                <div className="piece__num">N° 07</div>
              </div>
              <div className="piece__meta">
                <span>Dokulu kumaş · Lacivert</span>
                <span>Kısa kol</span>
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
            <span className="eyebrow">Kumaşlar</span>
            <h2 className="display" style={{ marginTop: 16 }}>
              Kumaşın <em>doğruluğu</em>.
            </h2>
            <p className="lede" style={{ marginTop: 26 }}>
              Her kumaşı tek tek seçiyoruz. Como poplin&apos;i ve uzun elyaflı
              pamuğu Kuzey İtalya&apos;dan, hafif keteni Portekiz&apos;in batı
              kıyısından, gece gömlekleri için yoğun poplin&apos;i ise
              Biella&apos;dan alıyoruz.
            </p>
            <p>
              Sertifika kumaşın hikâyesinin yarısı; gerçek ölçüt elde tutmak,
              gün boyu giymek ve birkaç yıkama sonra hâlâ aynı düşmesini
              beklemektir.
            </p>

            <div className="fabric__numbers">
              <div>
                <div className="n">05</div>
                <div className="l">Model · per Stagione</div>
              </div>
              <div>
                <div className="n">03</div>
                <div className="l">Kumaş ortağı</div>
              </div>
              <div>
                <div className="n">120/2</div>
                <div className="l">İplik · Cotone</div>
              </div>
            </div>
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
          <span>Fotoğraf 04 / 12</span>
          <span className="center">Editorial · Sonbahar–Kış 26</span>
          <span className="right">Monterno Milano</span>
        </div>
      </section>

      {/* ATELIER */}
      <section className="section">
        <div className="shell atelier">
          <div className="atelier__intro reveal">
            <span className="eyebrow">Prensipler</span>
            <h2 className="display" style={{ marginTop: 16, marginBottom: 48 }}>
              Neye <em>önem</em> veririz.
            </h2>
          </div>
          <div className="atelier__media reveal">
            <div className="atelier__image" aria-label="Monterno işçilik detayı" />
          </div>
          <div className="atelier__content reveal">
            <div className="atelier__body">
              <p className="lede">
                Monterno Milano&apos;yu birkaç basit ilke üzerine kurduk. Her
                tasarım kararını bu prensiplere göre veriyoruz — gösterişten
                önce anlamlı olmasına bakıyoruz.
              </p>
            </div>

            <div className="atelier__list">
              <div className="row">
                <div className="num">01</div>
                <div className="ttl">
                  <em>Kalite</em> — iyi bir gömlek iyi kumaşla başlar.
                </div>
                <div className="yr">Malzeme</div>
              </div>
              <div className="row">
                <div className="num">02</div>
                <div className="ttl">
                  <em>Sadelik</em> — trende değil, zaman dışı tasarıma
                  odaklıyız.
                </div>
                <div className="yr">Tasarım</div>
              </div>
              <div className="row">
                <div className="num">03</div>
                <div className="ttl">
                  <em>Denge</em> — modern kesim, klasik duruş.
                </div>
                <div className="yr">Kalıp</div>
              </div>
              <div className="row">
                <div className="num">04</div>
                <div className="ttl">
                  <em>Sessizlik</em> — logo değil, gömleğin kendisi konuşur.
                </div>
                <div className="yr">İşçilik</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </>
  );
}
