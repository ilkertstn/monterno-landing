# Monterno Milano — Next.js + Tailwind

`dist/` içindeki üç sayfalık (paketlenmiş) statik site, Next.js 15 App Router'a aktarıldı.
Tailwind CSS yapılandırıldı; orijinal lüks tasarım sistemini birebir korumak için
custom CSS değişkenleri ve sınıfları `app/globals.css` içinde tutuldu — bileşenlerde
ek üslup için Tailwind utility class'ları serbestçe kullanılabilir.

## Sayfalar

| URL              | Kaynak                  |
| ---------------- | ----------------------- |
| `/`              | `dist/index.html`       |
| `/gomlekler`     | `dist/shirts.html`      |
| `/atelier`       | `dist/aboutus.html`     |

## Çalıştırma

```bash
npm install
npm run dev
```

## Yapı

- `app/layout.tsx` — global font (Inter Tight via next/font), `RevealInit` mount
- `app/globals.css` — orijinal tasarım sistemi + Tailwind base/components/utilities
- `app/page.tsx` — Ana sayfa
- `app/gomlekler/page.tsx` + `ShirtsCatalog.tsx` — Filtre + quick-view modalı (client)
- `app/atelier/page.tsx` — Hakkımızda
- `components/Nav.tsx`, `components/Footer.tsx`, `components/Newsletter.tsx`
- `components/RevealInit.tsx` — sticky nav + IntersectionObserver scroll reveal
