"use client";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { getDictionary, localePath, type Locale } from "@/lib/i18n";

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

const SHIRTS_EN: Record<string, Partial<Shirt>> = {
  "01": {
    meta: ["Cotton · 120/2", "Classic"],
    badge: "Signature",
    label: "Photo · La Bianca · front",
    qv: {
      name: (<>La <em>Bianca</em></>),
      num: "N° 01 · FW26",
      copy: "One of the collection's simplest decisions. 120/2 cotton from Como, closed classic collar, mother-of-pearl button. A shirt that says nothing beyond white.",
      fabric: "Cotone 120/2 · Como, Italy",
      collar: "Classic · 7cm",
      button: "Mother-of-pearl · 11mm",
      made: "Autumn-Winter 26",
      label: "Photo · La Bianca · close",
    },
  },
  "02": {
    meta: ["Striped poplin", "Classic"],
    label: "Photo · Riga Azzurra · 3/4",
    qv: {
      name: (<>Riga <em>Azzurra</em></>),
      num: "N° 02 · FW26",
      copy: "A fine blue stripe over white poplin. The slightly lighter cousin of the classic, made for Monday mornings.",
      fabric: "Striped poplin · 100/2",
      collar: "Classic · 7cm",
      button: "Mother-of-pearl · 11mm",
      made: "Autumn-Winter 26",
      tone: "cool",
      label: "Photo · Riga Azzurra · close",
    },
  },
  "03": {
    meta: ["Pure linen · Natural", "Linen"],
    badge: "Editor's pick",
    label: "Photo · Lino Naturale · front",
    qv: {
      name: (<>Lino <em>Naturale</em></>),
      num: "N° 03 · FW26",
      copy: "Pre-washed linen woven on Portugal's Atlantic coast. It softens with every wash and refuses ironing, as linen should.",
      fabric: "Lino lavato · 240 g/m²",
      collar: "Open collar · 6cm",
      button: "Corozo · 13mm",
      made: "Autumn-Winter 26",
      tone: "warm",
      label: "Photo · Lino Naturale · close",
    },
  },
  "04": {
    meta: ["Washed linen", "Linen"],
    label: "Photo · Lino Crema · detail",
    qv: {
      name: (<>Lino <em>Crema</em></>),
      num: "N° 04 · FW26",
      copy: "The same linen in a lighter tone. A shade that turns from white toward cream and catches late afternoon light.",
      fabric: "Lino lavato · 220 g/m²",
      collar: "Open collar · 6cm",
      button: "Corozo · 13mm",
      made: "Autumn-Winter 26",
      tone: "warm",
      label: "Photo · Lino Crema · close",
    },
  },
  "05": {
    meta: ["Cotton + linen · Cream", "Casual"],
    label: "Photo · Festa Estiva · front",
    qv: {
      name: (<>Festa <em>Estiva</em></>),
      num: "N° 05 · FW26",
      copy: "A light cotton and linen blend for a summer evening, sleeves rolled, glass in hand.",
      fabric: "Cotton 60% · Lino 40%",
      collar: "Camp collar · 5cm",
      button: "Corozo · 12mm",
      made: "Autumn-Winter 26",
      tone: "warm",
      label: "Photo · Festa Estiva · close",
    },
  },
  "06": {
    meta: ["Open collar · Linen", "Casual"],
    label: "Photo · Cuba Aperto · detail",
    qv: {
      name: (<>Cuba <em>Aperto</em></>),
      num: "N° 06 · FW26",
      copy: "An open camp collar with a shorter hem. On its own or under tailoring, always worn out.",
      fabric: "Lino lavato · 200 g/m²",
      collar: "Camp collar · 5cm",
      button: "Corozo · 12mm",
      made: "Autumn-Winter 26",
      label: "Photo · Cuba Aperto · close",
    },
  },
  "07": {
    meta: ["Poplin · Midnight navy", "Evening"],
    badge: "FW26 new",
    label: "Photo · Camicia Notte · 3/4",
    qv: {
      name: (<>Camicia <em>Notte</em></>),
      num: "N° 07 · FW26",
      copy: "Midnight navy, more formal than white. Classic collar, closed cuff. The evening shirt.",
      fabric: "Poplin · 140/2 · Biella",
      collar: "Classic · 7cm",
      button: "Mother-of-pearl · 11mm",
      made: "Autumn-Winter 26",
      tone: "dark",
      label: "Photo · Camicia Notte · close",
    },
  },
  "08": {
    meta: ["Marcella · Ivory", "Evening"],
    badge: "Limited · 24",
    label: "Photo · Smoking Bianco · front",
    qv: {
      name: (<>Smoking <em>Bianco</em></>),
      num: "N° 08 · Limited · 24 pieces",
      copy: "Marcella front, hidden buttons, structured collar. Only twenty-four pieces a year. It asks for a dinner jacket.",
      fabric: "Marcella · Cotone 200/2 · Biella",
      collar: "Wing collar · 8cm",
      button: "Black mother-of-pearl · 9mm",
      made: "Autumn-Winter 26 · Limited run",
      tone: "dark",
      label: "Photo · Smoking Bianco · close",
    },
  },
};

const SHIRTS_RU: Record<string, Partial<Shirt>> = {
  "01": {
    meta: ["Хлопок · 120/2", "Классика"],
    badge: "Signature",
    label: "Фото · La Bianca · спереди",
    qv: {
      name: (<>La <em>Bianca</em></>),
      num: "N° 01 · FW26",
      copy: "Одно из самых сдержанных решений коллекции. Хлопок 120/2 из Como, закрытый классический воротник, перламутровая пуговица. Рубашка, которая не говорит ничего лишнего, кроме белого.",
      fabric: "Cotone 120/2 · Como, Италия",
      collar: "Классический · 7cm",
      button: "Перламутр · 11mm",
      made: "Осень-Зима 26",
      label: "Фото · La Bianca · крупный план",
    },
  },
  "02": {
    meta: ["Полосатый поплин", "Классика"],
    label: "Фото · Riga Azzurra · 3/4",
    qv: {
      name: (<>Riga <em>Azzurra</em></>),
      num: "N° 02 · FW26",
      copy: "Тонкая голубая полоска на белом поплине. Более легкий родственник классики, созданный для понедельничного утра.",
      fabric: "Полосатый поплин · 100/2",
      collar: "Классический · 7cm",
      button: "Перламутр · 11mm",
      made: "Осень-Зима 26",
      tone: "cool",
      label: "Фото · Riga Azzurra · крупный план",
    },
  },
  "03": {
    meta: ["Чистый лен · Натуральный", "Лен"],
    badge: "Выбор редакции",
    label: "Фото · Lino Naturale · спереди",
    qv: {
      name: (<>Lino <em>Naturale</em></>),
      num: "N° 03 · FW26",
      copy: "Предварительно выстиранный лен, сотканный на атлантическом побережье Португалии. С каждой стиркой становится мягче и не требует идеальной глажки.",
      fabric: "Lino lavato · 240 g/m²",
      collar: "Открытый воротник · 6cm",
      button: "Corozo · 13mm",
      made: "Осень-Зима 26",
      tone: "warm",
      label: "Фото · Lino Naturale · крупный план",
    },
  },
  "04": {
    meta: ["Стираный лен", "Лен"],
    label: "Фото · Lino Crema · деталь",
    qv: {
      name: (<>Lino <em>Crema</em></>),
      num: "N° 04 · FW26",
      copy: "Тот же лен в более светлом оттенке. Цвет, который уходит от белого к кремовому и ловит свет позднего дня.",
      fabric: "Lino lavato · 220 g/m²",
      collar: "Открытый воротник · 6cm",
      button: "Corozo · 13mm",
      made: "Осень-Зима 26",
      tone: "warm",
      label: "Фото · Lino Crema · крупный план",
    },
  },
  "05": {
    meta: ["Хлопок + лен · Крем", "Casual"],
    label: "Фото · Festa Estiva · спереди",
    qv: {
      name: (<>Festa <em>Estiva</em></>),
      num: "N° 05 · FW26",
      copy: "Легкая смесь хлопка и льна для летнего вечера: закатанные рукава, бокал в руке, ничего лишнего.",
      fabric: "Cotton 60% · Lino 40%",
      collar: "Camp воротник · 5cm",
      button: "Corozo · 12mm",
      made: "Осень-Зима 26",
      tone: "warm",
      label: "Фото · Festa Estiva · крупный план",
    },
  },
  "06": {
    meta: ["Открытый воротник · Лен", "Casual"],
    label: "Фото · Cuba Aperto · деталь",
    qv: {
      name: (<>Cuba <em>Aperto</em></>),
      num: "N° 06 · FW26",
      copy: "Открытый camp воротник и укороченный низ. Самостоятельно или под костюм, но всегда навыпуск.",
      fabric: "Lino lavato · 200 g/m²",
      collar: "Camp воротник · 5cm",
      button: "Corozo · 12mm",
      made: "Осень-Зима 26",
      label: "Фото · Cuba Aperto · крупный план",
    },
  },
  "07": {
    meta: ["Поплин · Полуночный синий", "Вечер"],
    badge: "Новинка FW26",
    label: "Фото · Camicia Notte · 3/4",
    qv: {
      name: (<>Camicia <em>Notte</em></>),
      num: "N° 07 · FW26",
      copy: "Полуночный синий, более формальный, чем белый. Классический воротник, закрытая манжета. Рубашка для вечера.",
      fabric: "Поплин · 140/2 · Biella",
      collar: "Классический · 7cm",
      button: "Перламутр · 11mm",
      made: "Осень-Зима 26",
      tone: "dark",
      label: "Фото · Camicia Notte · крупный план",
    },
  },
  "08": {
    meta: ["Marcella · Айвори", "Вечер"],
    badge: "Лимит · 24",
    label: "Фото · Smoking Bianco · спереди",
    qv: {
      name: (<>Smoking <em>Bianco</em></>),
      num: "N° 08 · Лимит · 24 шт.",
      copy: "Перед Marcella, скрытые пуговицы, жесткий воротник. Всего двадцать четыре экземпляра в год. Просит смокинг.",
      fabric: "Marcella · Cotone 200/2 · Biella",
      collar: "Дипломатический · 8cm",
      button: "Черный перламутр · 9mm",
      made: "Осень-Зима 26 · Лимитированная серия",
      tone: "dark",
      label: "Фото · Smoking Bianco · крупный план",
    },
  },
};

function localizedShirt(shirt: Shirt, locale: Locale): Shirt {
  if (locale === "tr") return shirt;
  const translated = locale === "ru" ? SHIRTS_RU[shirt.num] : SHIRTS_EN[shirt.num];
  return {
    ...shirt,
    ...translated,
    qv: {
      ...shirt.qv,
      ...translated?.qv,
    },
  };
}

export default function ShirtsCatalog({ locale = "tr" }: { locale?: Locale }) {
  const t = getDictionary(locale).shirts;
  const [filter, setFilter] = useState<Cat>("all");
  const [openQv, setOpenQv] = useState<string | null>(null);

  const shirts = useMemo(() => SHIRTS.map((shirt) => localizedShirt(shirt, locale)), [locale]);
  const visible = useMemo(
    () =>
      filter === "all" ? shirts : shirts.filter((s) => s.cat === filter),
    [filter, shirts],
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

  const active = openQv ? shirts.find((s) => s.num === openQv) : null;
  const chips = (Object.keys(t.chips) as Cat[]).map((key) => ({
    key,
    label: t.chips[key],
  }));

  return (
    <>
      <div className="filters">
        <div className="filters__inner">
          <div className="chips" id="chips">
            {chips.map((c) => (
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
            <span>{visible.length}</span> · {t.counter}
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
            <span className="eyebrow">{t.closing.eyebrow}</span>
            <h2 className="display" style={{ marginTop: 14 }}>
              {t.closing.title[0]}<em>{t.closing.title[1]}</em>{t.closing.title[2]}
            </h2>
            <p className="lede" style={{ marginTop: 22 }}>{t.closing.copy}</p>
            <div
              style={{
                marginTop: 36,
                display: "flex",
                gap: 14,
                flexWrap: "wrap",
              }}
            >
              <Link href={localePath(locale, "/atelier#showroom")} className="btn">
                {t.actions.visit}
              </Link>
              <Link href={localePath(locale, "/atelier#vestibilita")} className="link-arrow">
                {t.actions.fitNotes}
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
              {t.close} ✕
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
                  <span>{t.specs.fabric}</span>
                  <span>{active.qv.fabric}</span>
                </div>
                <div className="row">
                  <span>{t.specs.collar}</span>
                  <span>{active.qv.collar}</span>
                </div>
                <div className="row">
                  <span>{t.specs.button}</span>
                  <span>{active.qv.button}</span>
                </div>
                <div className="row">
                  <span>{t.specs.season}</span>
                  <span>{active.qv.made}</span>
                </div>
                <div className="row">
                  <span>{t.specs.size}</span>
                  <span>38 · 39 · 40 · 41 · 42 · 43 · 44</span>
                </div>
              </div>
              <div className="qv__actions">
                <Link href={localePath(locale, "/atelier#showroom")} className="btn">
                  {t.actions.showroom}
                </Link>
                <Link href={localePath(locale, "/atelier#materiali")} className="link-arrow">
                  {t.actions.fabricNotes}
                </Link>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}
