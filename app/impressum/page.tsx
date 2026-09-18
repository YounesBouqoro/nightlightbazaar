export default function ImpressumPage() {
  return (
    <main className="legal-body">
      <header className="nav-wrap">
        <nav className="nav shell">
          <a className="brand" href="/" aria-label="Night Light Bazaar Startseite">
            <img src="/favicon.png" alt="" />
            <span>NIGHT LIGHT<small>BAZAAR</small></span>
          </a>
          <a className="pill pill-small" href="/">ZUR STARTSEITE</a>
        </nav>
      </header>

      <section className="legal-page">
        <div className="shell legal-shell">
          <p className="section-kicker">LEGAL</p>
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
                Telefon: <a href="tel:+4915206955117">0152 06955117</a>
              </p>
            </section>

            <section>
              <h2>Verantwortlich für den Internetauftritt</h2>
              <p>Nourdin Bouqoro<br />Dunantstr. 43a<br />41468 Neuss</p>
            </section>
          </div>

          <div className="legal-note">
            <span>Night Light Bazaar</span>
            <span>Stand · September 2026</span>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="shell footer-inner">
          <a className="brand footer-brand" href="/"><img src="/favicon.png" alt="" /><span>NIGHT LIGHT<small>BAZAAR</small></span></a>
          <div className="footer-links"><a className="is-active" href="/impressum">Impressum</a><a href="/datenschutz">Datenschutz</a></div>
          <a className="footer-back" href="/">STARTSEITE ↑</a>
        </div>
      </footer>
    </main>
  );
}