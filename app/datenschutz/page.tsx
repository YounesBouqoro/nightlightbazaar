export default function DatenschutzPage() {
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
          <h1>DATENSCHUTZ.</h1>

          <div className="legal-copy">
            <section><h2>1. Verantwortlicher</h2><p>Verantwortlich für die Verarbeitung personenbezogener Daten auf dieser Website ist:</p><p><strong>Nourdin Bouqoro</strong><br />Einzelunternehmen<br />Dunantstr. 43a<br />41468 Neuss<br />Deutschland</p><p>E-Mail: <a href="mailto:hello@nightlightbazaar.de">hello@nightlightbazaar.de</a><br />Telefon: <a href="tel:+4915206955117">0152 06955117</a></p></section>

            <section><h2>2. Hosting über GitHub Pages</h2><p>Diese Website wird über GitHub Pages bereitgestellt. Anbieter des Dienstes ist GitHub. Beim Aufruf der Website können technisch erforderliche Verbindungs- und Nutzungsdaten verarbeitet werden, insbesondere die IP-Adresse, Zeitpunkt des Zugriffs, aufgerufene Inhalte sowie technische Informationen zu Browser und Endgerät.</p><p>Die Verarbeitung erfolgt, soweit sie in unserem Verantwortungsbereich liegt, auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse besteht in der sicheren, stabilen und effizienten Bereitstellung dieser Website.</p><p>Eine Verarbeitung von Daten durch GitHub außerhalb der Europäischen Union, insbesondere in den USA, kann nicht ausgeschlossen werden. Weitere Informationen stellt GitHub in seiner Datenschutzerklärung bereit.</p><p><a className="legal-external" href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noopener noreferrer">GitHub Privacy Statement ↗</a></p></section>

            <section><h2>3. Kontaktaufnahme</h2><p>Wenn du uns per E-Mail oder telefonisch kontaktierst, verarbeiten wir die von dir übermittelten Angaben, um deine Anfrage zu bearbeiten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, soweit es um vorvertragliche oder vertragliche Kommunikation geht, und im Übrigen Art. 6 Abs. 1 lit. f DSGVO aufgrund unseres berechtigten Interesses an der Beantwortung von Anfragen.</p><p>Die Daten werden gelöscht, sobald sie für die Bearbeitung nicht mehr erforderlich sind und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.</p></section>

            <section><h2>4. Analyse, Tracking und Newsletter</h2><p>Aktuell setzen wir auf dieser Website keine eigenen Analyse- oder Marketing-Trackingtools ein. Es gibt derzeit außerdem kein aktives Newsletter- oder Kontaktformular, über das personenbezogene Daten direkt auf der Website erhoben werden.</p></section>

            <section><h2>5. Externe Inhalte und Links</h2><p>Partnerlogos und sonstige Bilder werden derzeit direkt über diese Website ausgeliefert. Bei Links zu externen Websites gelten die Datenschutzbestimmungen des jeweiligen Anbieters, sobald du den externen Link aufrufst.</p></section>

            <section><h2>6. Deine Rechte</h2><p>Du hast im Rahmen der gesetzlichen Voraussetzungen insbesondere das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit sowie Widerspruch gegen bestimmte Verarbeitungen. Eine erteilte Einwilligung kannst du jederzeit mit Wirkung für die Zukunft widerrufen.</p><p>Zur Ausübung deiner Rechte kannst du dich an <a href="mailto:hello@nightlightbazaar.de">hello@nightlightbazaar.de</a> wenden.</p></section>

            <section><h2>7. Beschwerderecht</h2><p>Du hast das Recht, dich bei einer Datenschutzaufsichtsbehörde zu beschweren. Für Nordrhein-Westfalen ist dies insbesondere:</p><p>Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen<br />Kavalleriestraße 2–4<br />40213 Düsseldorf<br /><a href="https://www.ldi.nrw.de/" target="_blank" rel="noopener noreferrer">www.ldi.nrw.de ↗</a></p></section>

            <section><h2>8. Aktualisierung dieser Datenschutzerklärung</h2><p>Wir passen diese Datenschutzerklärung an, wenn sich die Website, eingesetzte Dienste oder rechtliche Anforderungen ändern.</p></section>
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
          <div className="footer-links"><a href="/impressum">Impressum</a><a className="is-active" href="/datenschutz">Datenschutz</a></div>
          <a className="footer-back" href="/">STARTSEITE ↑</a>
        </div>
      </footer>
    </main>
  );
}