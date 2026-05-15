import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ShirtsCatalog from "./ShirtsCatalog";
import { getDictionary, type Locale } from "@/lib/i18n";

export const metadata = {
  title: "Gömlekler — Monterno Milano",
};

export default function ShirtsPage() {
  return <ShirtsPageContent locale="tr" />;
}

export function ShirtsPageContent({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).shirts;
  return (
    <>
      <Nav current="gomlekler" locale={locale} />

      <section className="page-head">
        <div className="reveal">
          <span className="eyebrow">{t.eyebrow}</span>
          <h1 className="display" style={{ marginTop: 18 }}>
            {t.title[0]}<em>{t.title[1]}</em>{t.title[2]}
          </h1>
        </div>
        <div className="reveal">
          <p className="lede">{t.lead}</p>
        </div>
      </section>

      <ShirtsCatalog locale={locale} />

      <Footer locale={locale} />
    </>
  );
}
