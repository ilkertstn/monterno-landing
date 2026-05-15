import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__grid">
        <div className="footer__brand">
          <div className="mark">
            Monterno <em style={{ fontStyle: "italic" }}>Milano</em>
          </div>
          <p>
            İtalyan modasının sessiz disiplininden ilham alan çağdaş bir gömlek
            markası. Doğru kumaş, dengeli kalıp, zaman dışı kesim.
          </p>
        </div>
        <div>
          <h4>Sayfalar</h4>
          <ul>
            <li><Link href="/">Ana Sayfa</Link></li>
            <li><Link href="/gomlekler">Gömlekler</Link></li>
            <li><Link href="/atelier">Hakkımızda</Link></li>
            <li><Link href="/atelier#showroom">Showroom</Link></li>
          </ul>
        </div>
        <div>
          <h4>Marka</h4>
          <ul>
            <li><Link href="/atelier#filosofia">Felsefe</Link></li>
            <li><Link href="/atelier#materiali">Kumaşlar</Link></li>
            <li><Link href="/atelier#vestibilita">Beden &amp; Fit</Link></li>
            <li><Link href="/#letter">Bülten</Link></li>
          </ul>
        </div>
        <div>
          <h4>İletişim</h4>
          <ul>
            <li>İstanbul · Galata Showroom</li>
            <li>
              <a href="mailto:showroom@monternomilano.com">
                showroom@monternomilano.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <span>© 2026 Monterno Milano</span>
      </div>
    </footer>
  );
}
