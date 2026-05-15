"use client";
import { useState } from "react";

export default function Newsletter() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <section id="letter" className="letter">
      <div className="letter__inner">
        <span className="eyebrow" style={{ color: "rgba(247,245,240,0.55)" }}>
          Bülten
        </span>
        <h2 className="display" style={{ marginTop: 18 }}>
          Yeni sezonlardan ilk siz <em>haberdar</em> olun.
        </h2>
        <p style={{ marginTop: 22 }}>
          Sezonda bir kez gönderilen e-posta bültenimizle yeni koleksiyonlardan,
          sınırlı sayıda üretilen parçalardan ve showroom etkinliklerinden
          haberdar olun.
        </p>

        <form
          className="letter__form"
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
        >
          <input type="email" placeholder="e-posta adresiniz" required />
          <button type="submit">
            {submitted ? "Teşekkürler ✦" : "Kayıt ol →"}
          </button>
        </form>
        <div className="letter__meta">
          Yılda dört bülten · İstediğiniz zaman ayrılabilirsiniz
        </div>
      </div>
    </section>
  );
}
