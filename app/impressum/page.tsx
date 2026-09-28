export const metadata = {
  title: "Impressum — Night Light Bazaar",
  description: "Impressum und Kontaktangaben von Night Light Bazaar.",
};

export default function ImpressumPage() {
  return (
    <main className="legal-body">
      <header className="nav-wrap">
        <nav className="nav shell" aria-label="Hauptnavigation">
          <a className="brand" href="/" aria-label="Night Light Bazaar Startseite">
            <span>NIGHT LIGHT<small>BAZAAR</small></span>
          </a>
          <a className="pill pill-small" href="/">ZUR STARTSEITE</a>
        </nav>
      </header>

      <section className="legal-page">
        <div className="shell legal-shell">
          <p className="section-kicker">LEGAL · NIGHT LIGHT BAZAAR</p>
          <h1>IMPRESSUM.</h1>

          <div className="legal-grid">
            <section>
              <h2>Angaben gemäß § 5 DDG</h2>
              <p><strong>Nourdin Bouqoro</strong><br />Einzelunternehmen</p>
              <p>Dunantstr. 43a<br />41468 Neuss<br />Deutschland</p>
            </section>

            <section>
              <h2>Kontakt</h2>
              <p>
                E-Mail: <a href="mailto:hello@nightlightbazaar.de">hello@nightlightbazaar.de</a><br />
                Telefon: <a href="tel:+4915206955117">+49 152 069 55 117</a><br />
                Website: <a href="https://nightlightbazaar.de/">nightlightbazaar.de</a>
              </p>
            </section>

            <section>
              <h2>Verantwortlich für den Internetauftritt</h2>
              <p>Nourdin Bouqoro<br />Dunantstr. 43a<br />41468 Neuss<br />Deutschland</p>
            </section>
          </div>

          <div className="legal-contact-card">
            <span>NIGHT LIGHT BAZAAR · CONTACT</span>
            <a href="mailto:hello@nightlightbazaar.de">HELLO@NIGHTLIGHTBAZAAR.DE ↗</a>
          </div>

          <div className="legal-note">
            <span>Night Light Bazaar</span>
            <span>Stand · September 2026</span>
          </div>
        </div>
      </section>

      <footer className="footer legal-footer">
        <div className="shell legal-footer-grid">
          <a className="brand footer-brand" href="/" aria-label="Night Light Bazaar Startseite"><span>NIGHT LIGHT<small>BAZAAR</small></span></a>
          <div className="legal-footer-contact">
            <a href="mailto:hello@nightlightbazaar.de">hello@nightlightbazaar.de</a>
            <a href="tel:+4915206955117">+49 152 069 55 117</a>
          </div>
          <div className="footer-legal-links">
            <a className="is-active" href="/impressum">Impressum</a>
            <a href="/datenschutz">Datenschutz</a>
          </div>
          <a className="footer-back" href="/">STARTSEITE ↑</a>
        </div>
      </footer>
    </main>
  );
}