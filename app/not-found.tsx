export default function NotFound() {
  return (
    <main className="legal-body">
      <header className="nav-wrap">
        <nav className="nav shell" aria-label="Hauptnavigation">
          <a className="brand" href="/" aria-label="Night Light Bazaar Startseite"><span>NIGHT LIGHT<small>BAZAAR</small></span></a>
          <a className="pill pill-small" href="/">ZUR STARTSEITE</a>
        </nav>
      </header>
      <section className="legal-page">
        <div className="shell legal-shell">
          <p className="section-kicker">404 · LOST AFTER DARK</p>
          <h1>PAGE<br />NOT FOUND.</h1>
          <div className="legal-contact-card">
            <span>THIS WAY BACK TO THE NIGHT</span>
            <a href="/">BACK TO NIGHT LIGHT BAZAAR ↑</a>
          </div>
        </div>
      </section>
    </main>
  );
}