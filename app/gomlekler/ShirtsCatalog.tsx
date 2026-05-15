"use client";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type Cat = "all" | "classico" | "lino" | "casual" | "sera";

type Shirt = {
  num: string;
  id?: string;
  cat: Exclude<Cat, "all">;
  name: React.ReactNode;
  meta: [string, string];
  swatches: string[];
  badge?: string;
  tone?: "warm" | "cool" | "dark";
  label: string;
  qv: {
    name: React.ReactNode;
    num: string;
    copy: string;
    fabric: string;
    collar: string;
    button: string;
    made: string;
    tone?: "warm" | "cool" | "dark";
    label: string;
  };
};

const SHIRTS: Shirt[] = [
  {
    num: "01",
    id: "bianca",
    cat: "classico",
    name: (<>La <em>Bianca</em></>),
    meta: ["Pamuk · 120/2", "Klasik"],
    swatches: ["#f5f1e8", "#e6dec9"],
    badge: "Signature",
    label: "Fotoğraf · La Bianca · ön",
    qv: {
      name: (<>La <em>Bianca</em></>),
      num: "N° 01 · FW26",
      copy: "Koleksiyonun en sade kararlarından biri. Como'dan gelen 120/2 pamuk, kapalı klasik yaka, sedef düğme. Beyazın dışında hiçbir şey söylemeyen bir gömlek.",
      fabric: "Cotone 120/2 · Como, İtalya",
      collar: "Klasik · 7cm",
      button: "Sedef · 11mm",
      made: "Sonbahar–Kış 26",
      label: "Fotoğraf · La Bianca · yakın",
    },
  },
  {
    num: "02",
    cat: "classico",
    tone: "cool",
    name: (<>Riga <em>Azzurra</em></>),
    meta: ["Çizgili poplin", "Klasik"],
    swatches: ["#dde5ec", "#c2cbd2"],
    label: "Fotoğraf · Riga Azzurra · ¾",
    qv: {
      name: (<>Riga <em>Azzurra</em></>),
      num: "N° 02 · FW26",
      copy: "İnce mavi şerit, beyaz poplin üzerine. Klasiğin biraz daha hafif kuzeni. Pazartesi sabahları için.",
      fabric: "Poplin çizgili · 100/2",
      collar: "Klasik · 7cm",
      button: "Sedef · 11mm",
      made: "Sonbahar–Kış 26",
      tone: "cool",
      label: "Fotoğraf · Riga Azzurra · yakın",
    },
  },
  {
    num: "03",
    id: "lino",
    cat: "lino",
    tone: "warm",
    name: (<>Lino <em>Naturale</em></>),
    meta: ["Saf keten · Doğal", "Keten"],
    swatches: ["#d8c9b1", "#a8967c", "#ece5d3"],
    badge: "Editör seçimi",
    label: "Fotoğraf · Lino Naturale · ön",
    qv: {
      name: (<>Lino <em>Naturale</em></>),
      num: "N° 03 · FW26",
      copy: "Portekiz'in Atlantik kıyısında dokunan, ön yıkanmış keten. Yıkandıkça yumuşar, ütülenmez — ütülemezsiniz zaten.",
      fabric: "Lino lavato · 240 g/m²",
      collar: "Açık yaka · 6cm",
      button: "Corozo · 13mm",
      made: "Sonbahar–Kış 26",
      tone: "warm",
      label: "Fotoğraf · Lino Naturale · yakın",
    },
  },
  {
    num: "04",
    cat: "lino",
    tone: "warm",
    name: (<>Lino <em>Crema</em></>),
    meta: ["Yıkanmış keten", "Keten"],
    swatches: ["#efe7d3"],
    label: "Fotoğraf · Lino Crema · detay",
    qv: {
      name: (<>Lino <em>Crema</em></>),
      num: "N° 04 · FW26",
      copy: "Aynı keten, daha açık ton. Beyaz yerine kreme dönen, akşamüstü ışığını üzerine çeken renk.",
      fabric: "Lino lavato · 220 g/m²",
      collar: "Açık yaka · 6cm",
      button: "Corozo · 13mm",
      made: "Sonbahar–Kış 26",
      tone: "warm",
      label: "Fotoğraf · Lino Crema · yakın",
    },
  },
  {
    num: "07",
    id: "notte",
    cat: "sera",
    tone: "dark",
    name: (<>Camicia <em>Notte</em></>),
    meta: ["Poplin · Gece mavisi", "Akşam"],
    swatches: ["#1c1f2a", "#2a2d38"],
    badge: "FW26 yeni",
    label: "Fotoğraf · Camicia Notte · ¾",
    qv: {
      name: (<>Camicia <em>Notte</em></>),
      num: "N° 07 · FW26",
      copy: "Gece yarısı mavisi, beyazdan daha resmi. Klasik yaka, kapalı manşet. Akşamın gömleği.",
      fabric: "Poplin · 140/2 · Biella",
      collar: "Klasik · 7cm",
      button: "Sedef · 11mm",
      made: "Sonbahar–Kış 26",
      tone: "dark",
      label: "Fotoğraf · Camicia Notte · yakın",
    },
  },
  {
    num: "05",
    cat: "casual",
    tone: "warm",
    name: (<>Festa <em>Estiva</em></>),
    meta: ["Pamuk + keten · Krem", "Casual"],
    swatches: ["#ede6d6", "#d3c6a9"],
    label: "Fotoğraf · Festa Estiva · ön",
    qv: {
      name: (<>Festa <em>Estiva</em></>),
      num: "N° 05 · FW26",
      copy: "Pamuk ve keten karışımı, hafif. Bir yaz akşamı, kollarını sıvayıp şarap kadehini tutabileceğin gömlek.",
      fabric: "Cotton 60% · Lino 40%",
      collar: "Camp yaka · 5cm",
      button: "Corozo · 12mm",
      made: "Sonbahar–Kış 26",
      tone: "warm",
      label: "Fotoğraf · Festa Estiva · yakın",
    },
  },
  {
    num: "06",
    cat: "casual",
    name: (<>Cuba <em>Aperto</em></>),
    meta: ["Açık yaka · Keten", "Casual"],
    swatches: ["#e7e0cc", "#aaa07f"],
    label: "Fotoğraf · Cuba Aperto · detay",
    qv: {
      name: (<>Cuba <em>Aperto</em></>),
      num: "N° 06 · FW26",
      copy: "Açık camp yaka, kısa etek. Tek başına ya da takım altında — ama her zaman dışarıda.",
      fabric: "Lino lavato · 200 g/m²",
      collar: "Camp yaka · 5cm",
      button: "Corozo · 12mm",
      made: "Sonbahar–Kış 26",
      label: "Fotoğraf · Cuba Aperto · yakın",
    },
  },
  {
    num: "08",
    cat: "sera",
    tone: "dark",
    name: (<>Smoking <em>Bianco</em></>),
    meta: ["Marcella · Fildişi", "Akşam"],
    swatches: ["#f3eddd"],
    badge: "Sınırlı · 24",
    label: "Fotoğraf · Smoking Bianco · ön",
    qv: {
      name: (<>Smoking <em>Bianco</em></>),
      num: "N° 08 · Sınırlı · 24 adet",
      copy: "Marcella ön, gizli düğmeler, sert yaka. Yılda yalnızca yirmi dört adet. Üzerine smokin gerektirir.",
      fabric: "Marcella · Cotone 200/2 · Biella",
      collar: "Diplomatik · 8cm",
      button: "Madreperla nera · 9mm",
      made: "Sonbahar–Kış 26 · Sınırlı seri",
      tone: "dark",
      label: "Fotoğraf · Smoking Bianco · yakın",
    },
  },
];

const CHIPS: { key: Cat; label: string }[] = [
  { key: "all", label: "Tümü" },
  { key: "classico", label: "Klasik" },
  { key: "lino", label: "Keten" },
  { key: "casual", label: "Casual" },
  { key: "sera", label: "Akşam" },
];

export default function ShirtsCatalog() {
  const [filter, setFilter] = useState<Cat>("all");
  const [openQv, setOpenQv] = useState<string | null>(null);

  const visible = useMemo(
    () =>
      filter === "all" ? SHIRTS : SHIRTS.filter((s) => s.cat === filter),
    [filter],
  );

  useEffect(() => {
    if (!openQv) {
      document.body.style.overflow = "";
      return;
    }
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenQv(null);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openQv]);

  const active = openQv ? SHIRTS.find((s) => s.num === openQv) : null;

  return (
    <>
      <div className="filters">
        <div className="filters__inner">
          <div className="chips" id="chips">
            {CHIPS.map((c) => (
              <button
                key={c.key}
                className="chip"
                aria-pressed={filter === c.key}
                onClick={() => setFilter(c.key)}
              >
                {c.label}
              </button>
            ))}
          </div>
          <div className="counter">
            <span>{visible.length}</span> · parça · Sonbahar-Kış 26
          </div>
        </div>
      </div>

      <section className="catalog" id="catalog">
        {visible.map((s) => (
          <article key={s.num} className="card reveal" id={s.id}>
            <div
              className="card__img ph"
              data-tone={s.tone}
              data-label={s.label}
              onClick={() => setOpenQv(s.num)}
            >
              {s.badge ? <span className="badge">{s.badge}</span> : null}
            </div>
            <div className="card__row">
              <div className="card__name">{s.name}</div>
              <div className="card__num">N° {s.num}</div>
            </div>
            <div className="card__meta">
              <span>{s.meta[0]}</span>
              <span>{s.meta[1]}</span>
            </div>
            <div className="swatches">
              {s.swatches.map((c, i) => (
                <div key={i} className="sw" style={{ background: c }} />
              ))}
            </div>
          </article>
        ))}
      </section>

      <section className="closing">
        <div className="closing__inner">
          <div className="reveal">
            <div
              className="ph"
              data-label="Fotoğraf · kumaş kartelası + düğme"
            />
          </div>
          <div className="reveal">
            <span className="eyebrow">Kalıp &amp; Fit</span>
            <h2 className="display" style={{ marginTop: 14 }}>
              Standart bedenler, <em>dürüst</em> oran.
            </h2>
            <p className="lede" style={{ marginTop: 22 }}>
              38&apos;den 44&apos;e yedi beden. Üç yıldır aynı kalıp.
              Showroom&apos;da deneyebilir, hangi modelin sizin gününüze
              oturduğunu birlikte kararlaştırabilirsiniz.
            </p>
            <div
              style={{
                marginTop: 36,
                display: "flex",
                gap: 14,
                flexWrap: "wrap",
              }}
            >
              <Link href="/atelier#showroom" className="btn">
                Showroom&apos;a gelin
              </Link>
              <Link href="/atelier#vestibilita" className="link-arrow">
                Beden &amp; fit notları →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div
        className={`qv${active ? " is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!active}
        onClick={(e) => {
          if (e.target === e.currentTarget) setOpenQv(null);
        }}
      >
        {active ? (
          <div className="qv__panel">
            <button
              className="qv__close"
              aria-label="Kapat"
              onClick={() => setOpenQv(null)}
            >
              Kapat ✕
            </button>
            <div
              className="qv__img ph"
              data-tone={active.qv.tone}
              data-label={active.qv.label}
            />
            <div className="qv__body">
              <h2 className="qv__name">{active.qv.name}</h2>
              <div className="qv__num">{active.qv.num}</div>
              <p className="qv__copy">{active.qv.copy}</p>
              <div className="qv__specs">
                <div className="row">
                  <span>Kumaş</span>
                  <span>{active.qv.fabric}</span>
                </div>
                <div className="row">
                  <span>Yaka</span>
                  <span>{active.qv.collar}</span>
                </div>
                <div className="row">
                  <span>Düğme</span>
                  <span>{active.qv.button}</span>
                </div>
                <div className="row">
                  <span>Sezon</span>
                  <span>{active.qv.made}</span>
                </div>
                <div className="row">
                  <span>Beden</span>
                  <span>38 · 39 · 40 · 41 · 42 · 43 · 44</span>
                </div>
              </div>
              <div className="qv__actions">
                <Link href="/atelier#showroom" className="btn">
                  Showroom&apos;da deneyin
                </Link>
                <Link href="/atelier#materiali" className="link-arrow">
                  Kumaş notları →
                </Link>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}
