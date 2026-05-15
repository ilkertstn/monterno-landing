import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={interTight.className}>
      <body>
        {children}
        <RevealInit />
      </body>
    </html>
  );
}
