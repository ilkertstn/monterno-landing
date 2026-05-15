"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function RevealInit() {
  const pathname = usePathname();

  useEffect(() => {
    const nav = document.querySelector<HTMLElement>(".nav");
    const hero = document.querySelector<HTMLElement>("[data-hero-dark]");

    const onScroll = () => {
      if (!nav) return;
      const y = window.scrollY;
      nav.classList.toggle("is-scrolled", y > 24);
      if (hero) {
        const r = hero.getBoundingClientRect();
        const overlapping = r.top <= 60 && r.bottom > 60;
        nav.classList.toggle("is-light", overlapping && y < r.bottom - 60);
      } else {
        nav.classList.remove("is-light");
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, [pathname]);

  return null;
}
