import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Hakkımızda — Monterno Milano",
};

export default function AtelierPage() {
  return (
    <>
      <Nav current="atelier" />

      <section className="page-head">
        <div className="reveal">
          <span className="eyebrow">Hakkımızda</span>
          <h1 className="display" style={{ marginTop: 18 }}>
            Bir <em>gömlek</em> için modern bir bakış açısı.
          </h1>
        </div>
        <div className="reveal">
          <p className="lede">
            Monterno Milano, İtalyan modasının sessiz disiplininden felsefesini
            alan çağdaş bir gömlek markasıdır. Az parça, doğru kumaş, dürüst
            kesim — gardırobun en sade kararı.
          </p>
        </div>
      </section>

      <section className="feature" id="filosofia">
        <div className="reveal">
          <div
            className="ph feature__img"
            data-tone="warm"
            data-label="Fotoğraf · kumaş kartelası"
          />
        </div>
        <div className="feature__body reveal">
          <span className="eyebrow">Felsefe</span>
          <h2 className="display" style={{ marginTop: 14 }}>
            Az parça, <em>doğru</em> parça.
          </h2>
          <p className="lede" style={{ marginTop: 22 }}>
            Sezonda yüzlerce model üreten bir endüstri içinde, bilerek küçük
            kalmayı seçtik. Bir gömleğin haftada altı kez giyilmeye değdiği bir
            gardırop, yirmi parçanın altı ay sonra unutulduğu bir gardıroptan
            daha tatmin edicidir.
          </p>
          <p>
            Bu yüzden katalog kelimesini sevmeyiz. Az sayıda, iyi düşünülmüş
            gömlek yapmaya çalışıyoruz. Bir parçanın doğruluğundan emin
            olmadan, koleksiyona eklemiyoruz. Hız değil, denge.
          </p>
        </div>
      </section>

      <section className="feature reverse" id="vestibilita">
        <div className="reveal">
          <div
            className="ph feature__img"
            data-label="Fotoğraf · beden kalıbı + ölçü cetveli"
          />
        </div>
        <div className="feature__body reveal">
          <span className="eyebrow">Kalıp &amp; Fit</span>
          <h2 className="display" style={{ marginTop: 14 }}>
            Bedene değil, <em>güne</em> oturur.
          </h2>
          <p className="lede" style={{ marginTop: 22 }}>
            İyi bir gömlek, ne kadar dar olduğuyla değil, gün içinde ne kadar
            unutulduğuyla ölçülür. Omuz çizgisini, yaka rahatlığını ve kol
            boyunu tek bedende üç kez denedik — sonra üç defa daha.
          </p>
          <p>
            Standart bedenlerimiz 38&apos;den 44&apos;e kadar gider.
            Showroom&apos;da deneyebilir, hangi modelin gününüze oturduğunu
            birlikte kararlaştırabilirsiniz.
          </p>
        </div>
      </section>

      <section className="quote-band">
        <p>Az al, doğrusunu seç, uzun süre giy.</p>
      </section>

      <section className="pillars" id="materiali">
        <div className="pillars__inner">
          <div className="pillars__head">
            <div className="reveal">
              <span className="eyebrow">Prensipler</span>
              <h2 className="display" style={{ marginTop: 14 }}>
                Neye
                <br />
                önem veririz.
              </h2>
            </div>
            <p className="lede reveal" style={{ maxWidth: "56ch" }}>
              Monterno Milano&apos;yu birkaç basit ilke üzerine kurduk. Her
              tasarım kararını bu prensiplere göre veriyoruz — gösterişten önce
              anlamlı olmasına bakıyoruz.
            </p>
          </div>

          <div className="pillars__list">
            {[
              {
                n: "N° 01",
                t: "Kalite",
                d: "İyi bir gömlek iyi kumaşla başlar. Doğru malzemeyi seçmek, doğru bir parçanın ilk şartı.",
                h: "Malzeme",
              },
              {
                n: "N° 02",
                t: "Sadelik",
                d: "Trendlere koşmuyoruz. Gardırobunuzda yıllarca yer alacak, zaman dışı tasarımlar peşindeyiz.",
                h: "Tasarım",
              },
              {
                n: "N° 03",
                t: "Denge",
                d: "Modern bir kesim, klasik bir duruş. Çok şık değil, çok rahat değil — ikisinin arasında doğru bir yer.",
                h: "Kalıp",
              },
              {
                n: "N° 04",
                t: "Sessizlik",
                d: "Logo değil, gömleğin kendisi konuşur. Detay görünmez ama hissedilir — yaka, dikiş, düğme.",
                h: "İşçilik",
              },
            ].map((p) => (
              <div key={p.n} className="pillar reveal">
                <div className="n">{p.n}</div>
                <div className="t">
                  <em>{p.t}</em>
                </div>
                <div className="d">{p.d}</div>
                <div className="h">{p.h}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="partners">
        <div className="partners__head reveal">
          <span className="eyebrow">Kumaşlar</span>
          <h2 className="display" style={{ marginTop: 14 }}>
            Üç temel kumaş, <em>tek</em> ölçüt.
          </h2>
          <p className="lede" style={{ marginTop: 22 }}>
            Koleksiyonumuzda üç ana kumaş ailesi kullanıyoruz: pamuk, keten ve
            kıvamlı popeline. Her birinin seçim kriteri aynı — uzun ömürlü
            olması, iyi düşmesi ve giyildikçe karakter kazanması.
          </p>
        </div>

        <div className="partners__grid">
          <div className="partner reveal">
            <div className="ph" data-label="Fotoğraf · pamuk kumaş yakın çekim" />
            <div className="partner__text">
              <span className="where">Klasik · Günlük</span>
              <h3>
                <em>Pamuk</em>
              </h3>
              <p>
                Uzun elyaflı pamuk. Yumuşak ama dirençli, ütülenebilir, mevsime
                aldırmaz. Beyaz ve açık tonların temeli.
              </p>
              <div className="what">Klasik · Riga · Notte</div>
            </div>
          </div>
          <div className="partner reveal">
            <div
              className="ph"
              data-tone="warm"
              data-label="Fotoğraf · keten kumaş yakın çekim"
            />
            <div className="partner__text">
              <span className="where">Casual · Yaz</span>
              <h3>
                <em>Keten</em>
              </h3>
              <p>
                Hafif, nefes alan, sıcakta rahat. Yıkandıkça yumuşar, doğal
                kırışıklığı zamanla karakterine dönüşür.
              </p>
              <div className="what">Lino Naturale · Crema</div>
            </div>
          </div>
          <div className="partner reveal">
            <div
              className="ph"
              data-tone="dark"
              data-label="Fotoğraf · popeline kumaş yakın çekim"
            />
            <div className="partner__text">
              <span className="where">Akşam · Özel günler</span>
              <h3>
                <em>Popeline</em>
              </h3>
              <p>
                Daha sıkı dokuma, hafif parıltılı bir yüzey. Resmi gömlekler ve
                akşam parçaları için gövde ve duruş verir.
              </p>
              <div className="what">Notte · Smoking</div>
            </div>
          </div>
        </div>
      </section>

      <section className="showroom" id="showroom">
        <div className="showroom__head reveal">
          <span className="eyebrow">Mekânlar</span>
          <h2 className="display" style={{ marginTop: 14 }}>
            Bizi <em>ziyaret</em> edin.
          </h2>
          <p className="lede" style={{ marginTop: 22 }}>
            İstanbul showroom randevuyla açıktır. Kumaşları elde tutmak,
            modelleri denemek ve doğru bedeni bulmak için bir saatlik bir
            konuşmaya geliyorsunuz — bir kahve ile.
          </p>
        </div>

        <div className="showroom__grid">
          <div className="showroom__card reveal">
            <div
              className="ph"
              data-tone="cool"
              data-label="Fotoğraf · İstanbul showroom iç mekân"
            />
            <h3>
              Showroom <em>İstanbul</em>
            </h3>
            <div className="meta">
              <div>
                <span>Bölge</span>
                <span>Galata</span>
              </div>
              <div>
                <span>Saat</span>
                <span>Çar–Cmt · 12.00–19.00</span>
              </div>
              <div>
                <span>Randevu</span>
                <span>showroom@monternomilano.com</span>
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
            Randevu alın
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
