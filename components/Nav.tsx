import Link from "next/link";

type Current = "home" | "gomlekler" | "atelier";

export default function Nav({
  current,
  light = false,
}: {
  current?: Current;
  light?: boolean;
}) {
  const aria = (key: Current) =>
    current === key ? { "aria-current": "page" as const } : {};
  return (
    <nav className={`nav${light ? " is-light" : ""}`}>
      <div className="nav__links">
        <Link href="/" {...aria("home")}>
          Ana Sayfa
        </Link>
        <Link href="/gomlekler" {...aria("gomlekler")}>
          Gömlekler
        </Link>
        <Link href="/atelier" {...aria("atelier")}>
          Hakkımızda
        </Link>
      </div>
      <Link href="/" className="nav__brand">
        MONTERNO
        <small>Mılano</small>
      </Link>
      <div className="nav__right">
        <Link href="/#letter" className="ico-btn">
          Bülten
        </Link>
        <Link href="/atelier#showroom" className="ico-btn">
          Showroom
        </Link>
      </div>
    </nav>
  );
}
