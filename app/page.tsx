const experiences = [
  {
    number: "01",
    title: "DISCOVER",
    copy: "Vintage Fashion, Streetwear, Sneakers, Design und Kunst — ausgewählt statt beliebig.",
    meta: "CURATED FINDS",
  },
  {
    number: "02",
    title: "SHOP",
    copy: "Vintage Seller, Streetwear- und Sneaker-Händler, Designer, Artists und lokale Brands mit eigener Handschrift.",
    meta: "SELECTED SELLERS",
  },
  {
    number: "03",
    title: "CONNECT",
    copy: "DJ-Sets, Kreative, Sammler und eine Community, die Fashion, Musik und Kultur zusammenbringt.",
    meta: "MUSIC × COMMUNITY",
  },
  {
    number: "04",
    title: "STAY",
    copy: "Streetfood, Coffee, Matcha und Drinks machen aus dem Market einen Abend, bei dem man gerne länger bleibt.",
    meta: "FOOD × COFFEE × DRINKS",
  },
];

const partners = [
  "ANHEUSER-BUSCH",
  "RED BULL",
  "FRITZ-KOLA",
  "APEROL",
  "MORE TO COME",
];

export default function Home() {
  return (
    <main>
      <header className="nav-wrap">
        <nav className="nav shell" aria-label="Hauptnavigation">
          <a className="brand" href="#top" aria-label="Night Light Bazaar Startseite">
            <img src="/brand-mark.svg" alt="" />
            <span>
              NIGHT LIGHT
              <small>BAZAAR</small>
            </span>
          </a>

          <div className="nav-links">
            <a href="#concept">Concept</a>
            <a href="#experience">Experience</a>
            <a href="#selection">Selection</a>
            <a href="#partners">Partner</a>
          </div>

          <a className="pill pill-small" href="#event">
            EVENT INFO
          </a>
        </nav>
      </header>

      <section className="brand-hero" id="top">
        <div className="shell brand-hero-inner">
          <p className="headline-kicker">AFTER DARK · DÜSSELDORF</p>

          <div className="headline-stage" aria-label="Night Light Bazaar">
            <div className="headline-moon" />

            <h1 className="headline-title">
              <span className="line solid">NIGHT LIGHT</span>
              <span className="line outline">BAZAAR</span>
            </h1>

            <div className="hero-meta">
              <span>17:00 — 00:00</span>
              <span>NIGHT VINTAGE & LIFESTYLE MARKET</span>
              <span>DATE TBA</span>
            </div>
          </div>
        </div>
      </section>

      <section className="ticker" aria-label="Event Highlights">
        <div className="ticker-track">
          <span>VINTAGE FASHION</span><b>✦</b>
          <span>STREETWEAR</span><b>✦</b>
          <span>SNEAKERS</span><b>✦</b>
          <span>DESIGN & ART</span><b>✦</b>
          <span>DJ SETS</span><b>✦</b>
          <span>STREETFOOD</span><b>✦</b>
          <span>COFFEE & MATCHA</span><b>✦</b>
          <span>NIGHTLIFE</span><b>✦</b>
          <span>VINTAGE FASHION</span><b>✦</b>
          <span>STREETWEAR</span><b>✦</b>
          <span>SNEAKERS</span><b>✦</b>
          <span>DESIGN & ART</span><b>✦</b>
        </div>
      </section>


      <nav className="mobile-quick-nav" aria-label="Schnellnavigation">
        <a href="#mobile-about">About</a>
        <a href="#mobile-experience">Experience</a>
        <a href="#mobile-event">Event</a>
        <a href="#mobile-partners">Partner</a>
      </nav>


      <section className="mobile-landing" aria-label="Night Light Bazaar Mobile">
        <section className="mobile-intro-card" id="mobile-about">
          <div className="shell">
            <p className="mobile-label">NIGHT LIGHT BAZAAR</p>
            <h2>NIGHT MARKET.<br />AFTER DARK.</h2>
            <p className="mobile-lead">Vintage, Streetwear, Sneakers, Musik, Food & Drinks — als modernes Night-Market-Erlebnis in Düsseldorf.</p>
            <div className="mobile-tags" aria-label="Highlights">
              <span>VINTAGE</span><span>STREETWEAR</span><span>SNEAKERS</span><span>MUSIC</span><span>FOOD & DRINKS</span>
            </div>
          </div>
        </section>

        <section className="mobile-experience-section" id="mobile-experience">
          <div className="shell">
            <p className="mobile-label">THE EXPERIENCE</p>
            <h2>WHAT TO EXPECT.</h2>
            <div className="mobile-feature-list">
              <article><span>01</span><div><h3>SHOP</h3><p>Kuratiertes Vintage, Streetwear und besondere Pieces.</p></div></article>
              <article><span>02</span><div><h3>MUSIC</h3><p>DJ-Sets und entspannte Nightlife-Atmosphäre.</p></div></article>
              <article><span>03</span><div><h3>FOOD & DRINKS</h3><p>Streetfood, Coffee, Matcha und ausgewählte Drinks.</p></div></article>
              <article><span>04</span><div><h3>CONNECT</h3><p>Entdecken, Leute treffen und gemeinsam den Abend erleben.</p></div></article>
            </div>
          </div>
        </section>

        <section className="mobile-event-section" id="mobile-event">
          <div className="shell">
            <div className="mobile-event-card">
              <p className="mobile-label light">EVENT INFO · EDITION 01</p>
              <h2>MEET US<br />AFTER DARK.</h2>
              <div className="mobile-event-facts">
                <div><small>WHEN</small><strong>DATE TBA</strong></div>
                <div><small>TIME</small><strong>17:00 — 00:00</strong></div>
                <div><small>WHERE</small><strong>DÜSSELDORF</strong><span>Location wird bekannt gegeben.</span></div>
              </div>
              <p className="mobile-event-note">Updates zu Datum, Location und Tickets folgen.</p>
            </div>
          </div>
        </section>

        <section className="mobile-partners-section" id="mobile-partners">
          <div className="shell">
            <div className="mobile-partner-head">
              <p className="mobile-label light">SUPPORTED BY</p>
              <p>Partner, die den Abend mit Drinks, Energy und Aperitivo begleiten.</p>
            </div>
            <div className="mobile-partner-rail" aria-label="Partner">
              <div><img src="/assets/partners/anheuser-busch.png?v=2" alt="Anheuser-Busch" /></div>
              <div><img src="/assets/partners/red-bull.png?v=2" alt="Red Bull" /></div>
              <div><img src="/assets/partners/fritz-kola.png?v=2" alt="fritz-kola" /></div>
              <div><img src="/assets/partners/aperol.png?v=2" alt="Aperol" /></div>
            </div>
          </div>
        </section>

        <section className="mobile-vendor-section">
          <div className="shell">
            <p className="mobile-label">BE PART OF THE NIGHT</p>
            <h2>JOIN THE BAZAAR.</h2>
            <p>Du möchtest als Seller, Food-Konzept oder Partner dabei sein?</p>
            <span className="mobile-coming-soon">APPLICATIONS · COMING SOON</span>
          </div>
        </section>
      </section>

      <section className="intro-story section">
        <div className="shell intro-story-grid">
          <p className="section-kicker">THE NIGHT LIGHT BAZAAR</p>
          <p className="intro-story-text">
            Ein kuratierter Night Vintage & Lifestyle Market in Düsseldorf — irgendwo zwischen Vintage Market,
            Street Culture, Pop-up Event und Nightlife. Discover. Shop. Connect. Stay for the Night.
          </p>
        </div>
      </section>

      <section className="concept shell section" id="concept">
        <p className="section-kicker">THE CONCEPT</p>
        <div className="concept-grid">
          <h2>MORE THAN<br />A MARKET.</h2>
          <div className="concept-copy">
            <p>
              Vintage trifft Street Culture, Musik und Nightlife. NIGHT LIGHT BAZAAR verbindet einen kuratierten Market mit der Energie eines urbanen Abends.
            </p>
            <p>
              Hochwertig, kreativ und visuell besonders: ausgewählte Produkte, gutes Licht, DJ-Sets und ein Food-&-Beverage-Angebot, das zum Konzept passt. Bewusst kein Massenmarkt.
            </p>
            <div className="market-tags"><span>VINTAGE FASHION</span><span>STREETWEAR</span><span>SNEAKERS</span><span>DESIGN</span><span>ART</span><span>LOCAL BRANDS</span></div>
            <div className="concept-note">
              <span>DISCOVER. SHOP. CONNECT.</span>
              <span>STAY FOR THE NIGHT.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="experience section" id="experience">
        <div className="shell">
          <div className="section-head">
            <div>
              <p className="section-kicker">THE EXPERIENCE</p>
              <h2>DISCOVER.<br />SHOP. STAY.</h2>
            </div>
            <p>
              Ein Abend zwischen Vintage Market, Street Culture, Pop-up Event und Nightlife — von 17 Uhr bis Mitternacht.
            </p>
          </div>

          <div className="experience-grid">
            {experiences.map((item) => (
              <article className="experience-card" key={item.number}>
                <div className="card-top">
                  <span>{item.number}</span>
                  <span className="card-arrow">↗</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
                <small>{item.meta}</small>
              </article>
            ))}
          </div>
        </div>
      </section>


      <section className="selection shell section" id="selection">
        <div className="selection-intro">
          <p className="section-kicker">THE SELECTION</p>
          <div className="selection-heading">
            <h2>CURATED.<br />NOT CROWDED.</h2>
            <p>Jeder Stand soll zum NIGHT LIGHT BAZAAR passen. Qualität, Stil und Persönlichkeit stehen vor Masse.</p>
          </div>
        </div>
        <div className="selection-list">
          <article><span>01</span><div><h3>VINTAGE & STREET</h3><p>Ausgewählte Vintage Seller, Streetwear- und Sneaker-Händler mit besonderen Pieces und Sammlerstücken.</p></div></article>
          <article><span>02</span><div><h3>DESIGN & ART</h3><p>Designer, Artists und Kreative, die Produkte, Prints, Objects und eigene Ideen mitbringen.</p></div></article>
          <article><span>03</span><div><h3>LOCAL & CONCEPT</h3><p>Lokale Brands und besondere Concept Stores, die zur urbanen Kultur des Events passen.</p></div></article>
          <article><span>04</span><div><h3>FOOD & BEVERAGE</h3><p>Ausgewählte Streetfood-, Coffee-, Matcha- und Beverage-Konzepte statt klassischer Event-Gastro.</p></div></article>
        </div>
        <div className="audience-strip">
          <span>FOR</span>
          <strong>FASHION LOVERS</strong><strong>SNEAKERHEADS</strong><strong>CREATIVES</strong><strong>COLLECTORS</strong><strong>NIGHT OWLS</strong>
        </div>
      </section>

      <section className="manifesto section">
        <div className="manifesto-glow" />
        <div className="shell manifesto-inner">
          <p className="section-kicker">AFTER DARK</p>
          <h2>
            VINTAGE MEETS
            <span>NIGHTLIFE</span>
            IN DÜSSELDORF.
          </h2>
          <p>
            Nicht einfach ein Markt, sondern eine eigene Lifestyle Experience: entdecken, shoppen, Leute treffen, Musik hören — und für die Nacht bleiben.
          </p>
        </div>
      </section>

      <section className="partners-carousel section" id="partners">
        <div className="shell">
          <div className="partner-carousel-head">
            <div>
              <p className="section-kicker light">OFFICIAL PARTNERS</p>
              <h2>POWERING<br />THE NIGHT.</h2>
            </div>
            <p>Drinks, Energy und Aperitivo von ausgewählten Partnern — passend zum NIGHT LIGHT BAZAAR.</p>
          </div>

          <div className="partner-rail" aria-label="Partner des Night Light Bazaar">
            <div className="partner-logo-card">
              <img src="/assets/partners/anheuser-busch.png?v=2" alt="Anheuser-Busch" />
            </div>
            <div className="partner-logo-card">
              <img src="/assets/partners/red-bull.png?v=2" alt="Red Bull" />
            </div>
            <div className="partner-logo-card">
              <img src="/assets/partners/fritz-kola.png?v=2" alt="fritz-kola" />
            </div>
            <div className="partner-logo-card">
              <img src="/assets/partners/aperol.png?v=2" alt="Aperol" />
            </div>
          </div>

          <div className="partner-note">
            <span>BEVERAGE PARTNERS · EDITION 01</span>
            <span>MORE TO COME</span>
          </div>
        </div>
      </section>

      <section className="event shell section" id="event">
        <div className="event-card">
          <div className="event-copy">
            <p className="section-kicker light">NIGHT LIGHT BAZAAR · EDITION 01</p>
            <h2>MEET US<br />AFTER DARK.</h2>
          </div>

          <div className="event-facts">
            <div>
              <small>WHEN</small>
              <strong>DATE TBA</strong>
            </div>
            <div>
              <small>TIME</small>
              <strong>17:00 — 00:00</strong>
            </div>
            <div>
              <small>WHERE</small>
              <strong>DÜSSELDORF</strong>
              <span>Location wird bekannt gegeben.</span>
            </div>
          </div>

          <div className="event-footer">
            <p>
              Updates zu Datum, Location, DJs, Ständen und Tickets folgen.
            </p>
            <div className="event-tag">SECRET LOCATION · REVEALED SOON</div>
          </div>
        </div>
      </section>

      <section className="vendor shell section">
        <div className="vendor-card">
          <div>
            <p className="section-kicker">BE PART OF THE NIGHT</p>
            <h2>SELL.<br />SERVE.<br />COLLAB.</h2>
          </div>
          <div className="vendor-copy">
            <p>
              Du bist Vintage Seller, Streetwear- oder Sneaker-Händler, Designer, Artist, lokale Brand, Concept Store oder hast ein passendes Food-, Coffee- oder Matcha-Konzept? Die Bewerbungsphase für Edition 01 startet bald.
            </p>
            <span className="coming-soon">APPLICATIONS · COMING SOON</span>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="shell footer-inner">
          <a className="brand footer-brand" href="#top">
            <img src="/brand-mark.svg" alt="" />
            <span>
              NIGHT LIGHT
              <small>BAZAAR</small>
            </span>
          </a>
          <p>DÜSSELDORF · 17:00 — 00:00 · EDITION 01</p>
          <a href="#top">BACK TO TOP ↑</a>
        </div>
      </footer>
    </main>
  );
}
