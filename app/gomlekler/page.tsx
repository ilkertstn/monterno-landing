import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ShirtsCatalog from "./ShirtsCatalog";

export const metadata = {
  title: "Gömlekler — Monterno Milano",
};

export default function ShirtsPage() {
  return (
    <>
      <Nav current="gomlekler" />

      <section className="page-head">
        <div className="reveal">
          <span className="eyebrow">Gömlekler</span>
          <h1 className="display" style={{ marginTop: 18 }}>
            Az parça. <em>Sessiz</em> bir koleksiyon.
          </h1>
        </div>
        <div className="reveal">
          <p className="lede">
            Az sayıda model, kaliteli kumaş, zaman dışı kesim. Aşağıdaki sayfa
            bir satış vitrini değil — koleksiyonun kataloğudur. Beğendiğinizi
            İstanbul showroom&apos;da deneyebilirsiniz.
          </p>
        </div>
      </section>

      <ShirtsCatalog />

      <Footer />
    </>
  );
}
