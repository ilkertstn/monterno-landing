"use client";
import { useState } from "react";
import { getDictionary, type Locale } from "@/lib/i18n";

export default function Newsletter({ locale = "tr" }: { locale?: Locale }) {
  const t = getDictionary(locale).newsletter;
  const [submitted, setSubmitted] = useState(false);
  return (
    <section id="letter" className="letter">
      <div className="letter__inner">
        <span className="eyebrow" style={{ color: "rgba(247,245,240,0.55)" }}>
          {t.eyebrow}
        </span>
        <h2 className="display" style={{ marginTop: 18 }}>
          {t.title[0]}<em>{t.title[1]}</em>{t.title[2]}
        </h2>
        <p style={{ marginTop: 22 }}>{t.copy}</p>

        <form
          className="letter__form"
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
        >
          <input type="email" placeholder={t.placeholder} required />
          <button type="submit">
            {submitted ? t.thanks : t.submit}
          </button>
        </form>
        <div className="letter__meta">{t.meta}</div>
      </div>
    </section>
  );
}
