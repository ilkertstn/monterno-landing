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

      <section className="page-head about-head">
        <div className="reveal">
          <span className="eyebrow">Hakkımızda</span>
          <h1 className="display" style={{ marginTop: 18 }}>
            Gömleğin <em>sessiz</em> detaylarıyla ilgileniyoruz.
          </h1>
        </div>
        <div className="about-head__content reveal">
          <p className="lede">
            Monterno Milano, İtalyan giyim kültürünün ölçülü zarafetinden ilham
            alan çağdaş bir gömlek markasıdır. Kumaş, kalıp ve işçilik bizim
            için aynı bütünün parçalarıdır; iyi bir gömlek önce hissedilir.
          </p>
          <div className="about-head__notes" aria-label="Monterno yaklaşımı">
            <span>Kumaş seçimi</span>
            <span>Kalıp dengesi</span>
            <span>Sessiz işçilik</span>
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
          <span className="eyebrow">Felsefe</span>
          <h2 className="display" style={{ marginTop: 14 }}>
            Gösterişsiz, <em>net</em> bir duruş.
          </h2>
          <p className="lede" style={{ marginTop: 22 }}>
            Bir gömlek ilk bakışta sakin görünebilir; asıl karakteri gün
            içinde ortaya çıkar. Yaka formu, omuz çizgisi, kumaşın düşüşü ve
            düğmenin elde bıraktığı his bizim için tasarımın kendisidir.
          </p>
          <p>
            Koleksiyona bir model eklerken önce kullanımını düşünürüz: sabah
            toplantısında, akşam yemeğinde, seyahatte ya da sıradan bir
            pazarteside nasıl duracağını. Hız değil, denge.
          </p>
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
          <span className="eyebrow">Kalıp &amp; Fit</span>
          <h2 className="display" style={{ marginTop: 14 }}>
            Gün boyu <em>dengeli</em> bir kalıp.
          </h2>
          <p className="lede" style={{ marginTop: 22 }}>
            İyi bir gömlek yalnızca aynada değil, gün boyunca kendini belli
            eder. Omuz çizgisi yerinde durmalı, yaka sıkmadan formunu korumalı,
            kol boyu hareket ederken de doğru kalmalıdır.
          </p>
          <p>
            Bedenlerimiz 38&apos;den 44&apos;e kadar uzanır. Showroom&apos;da
            modelleri deneyebilir, üzerinizde en iyi duran kalıbı birlikte
            seçebiliriz.
          </p>
        </div>
      </section>

      <section className="quote-band">
        <p>Doğru kumaş, doğru kalıp, sessiz bir duruş.</p>
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
                d: "İyi bir gömlek kumaşla başlar. Dokusu, ağırlığı ve düşüşü doğru değilse tasarımın geri kalanı da eksik kalır.",
                h: "Malzeme",
              },
              {
                n: "N° 02",
                t: "Sadelik",
                d: "Fazla detay yerine net çizgiler arıyoruz. Gömleğin yıllar sonra da güncel kalması, ilk bakışta bağırmamasından gelir.",
                h: "Tasarım",
              },
              {
                n: "N° 03",
                t: "Denge",
                d: "Modern bir kesim, klasik bir duruş. Kalıp ne fazla dar ne fazla rahat; hareketin içinde formunu koruyan bir yerde durur.",
                h: "Kalıp",
              },
              {
                n: "N° 04",
                t: "Sessizlik",
                d: "Logo yerine yaka, dikiş ve düğme konuşur. Detaylar kendini göstermek için değil, gömleği daha iyi hissettirmek için vardır.",
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
            Kumaşı önce <em>elde</em> anlarız.
          </h2>
          <p className="lede" style={{ marginTop: 22 }}>
            Pamuk, keten ve poplin bizim için yalnızca kategori değil;
            gömleğin gün içinde nasıl duracağını belirleyen üç ayrı
            karakterdir. Her kumaşı dokusu, düşüşü ve zamanla nasıl yaşlandığı
            üzerinden seçeriz.
          </p>
        </div>

        <div className="partners__grid">
          <div className="partner reveal">
            <div
              className="partner__image partner__image--pamuk"
              aria-label="Pamuk gömlek kumaşı yakın çekim"
            />
            <div className="partner__text">
              <span className="where">Klasik · Günlük</span>
              <h3>
                <em>Pamuk</em>
              </h3>
              <p>
                Temiz duruşlu, yumuşak ama dirençli. Günlük kullanımda formunu
                koruması ve ciltte bıraktığı sakin his için seçeriz.
              </p>
              <div className="what">Temiz duruş · Günlük kullanım</div>
            </div>
          </div>
          <div className="partner reveal">
            <div
              className="partner__image partner__image--keten"
              aria-label="Keten gömlek kumaşı yakın çekim"
            />
            <div className="partner__text">
              <span className="where">Casual · Yaz</span>
              <h3>
                <em>Keten</em>
              </h3>
              <p>
                Nefes alan, hafif ve doğal kırışıklığıyla yaşayan bir kumaş.
                Yazlık rahatlığı, kusursuz görünmeye çalışmamasından gelir.
              </p>
              <div className="what">Nefes alır · Karakter kazanır</div>
            </div>
          </div>
          <div className="partner reveal">
            <div
              className="partner__image partner__image--poplin"
              aria-label="Poplin gömlek kumaşı yakın çekim"
            />
            <div className="partner__text">
              <span className="where">Akşam · Özel günler</span>
              <h3>
                <em>Poplin</em>
              </h3>
              <p>
                Sıkı dokusu ve net yüzeyiyle daha şehirli bir duruş verir.
                Yaka, pat ve manşette temiz form aradığımız gömleklerde öne
                çıkar.
              </p>
              <div className="what">Net form · Şehirli duruş</div>
            </div>
          </div>
        </div>
      </section>

      <section className="showroom" id="showroom">
        <div className="showroom__head reveal">
          <span className="eyebrow">Showroom</span>
          <h2 className="display" style={{ marginTop: 14 }}>
            Bizi <em>ziyaret</em> edin.
          </h2>
          <p className="lede" style={{ marginTop: 22 }}>
            İstanbul showroom randevuyla açıktır. Kumaşları elde görmek,
            modelleri denemek ve doğru bedeni sakin bir ortamda bulmak için
            sizi İstanbul&apos;daki showroom&apos;a bekleriz.
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
            Randevu alın
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
