import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";
import RevealInit from "@/components/RevealInit";

const interTight = Inter_Tight({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Monterno Milano — Modern İtalyan Gömleği",
  description:
    "İtalyan modasının sessiz disiplininden ilham alan çağdaş bir gömlek markası.",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const headerLocale = (await headers()).get("x-locale");
  const locale = headerLocale === "en" || headerLocale === "ru" ? headerLocale : "tr";
  return (
    <html lang={locale} className={interTight.className}>
      <body>
        {children}
        <RevealInit />
      </body>
    </html>
  );
}
