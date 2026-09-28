const experiences = [
  {
    number: "01",
    title: "SHOP",
    copy: "Vintage, Streetwear, Sneakers, Collectibles und besondere Pieces — kuratiert statt beliebig.",
    meta: "CURATED FINDS",
  },
  {
    number: "02",
    title: "DISCOVER",
    copy: "Independent Seller, lokale Brands, Designer und kreative Projekte mit eigener Handschrift.",
    meta: "INDEPENDENT CULTURE",
  },
  {
    number: "03",
    title: "LISTEN",
    copy: "DJs, Sounds und ein Soundtrack, der den Bazaar vom frühen Abend bis in die Nacht begleitet.",
    meta: "SOUND OF THE NIGHT",
  },
  {
    number: "04",
    title: "EAT",
    copy: "Streetfood, Sweet Treats, Coffee und Matcha als fester Teil des Erlebnisses.",
    meta: "FOOD CULTURE",
  },
  {
    number: "05",
    title: "DRINK",
    copy: "Aperitivo, Cocktails, Beer und ausgewählte Drinks für den Abend.",
    meta: "BAR CULTURE",
  },
  {
    number: "06",
    title: "CONNECT",
    copy: "Menschen treffen, Stories austauschen und Teil einer neuen Community in Düsseldorf werden.",
    meta: "COMMUNITY",
  },
];

const bazaarItems = [
  { number: "01", title: "VINTAGE", copy: "Rare finds. Iconic pieces. Second-hand treasures.", meta: "ARCHIVE / SECOND-HAND" },
  { number: "02", title: "STREETWEAR", copy: "Independent labels, classics & new drops.", meta: "LABELS / DROPS" },
  { number: "03", title: "SNEAKERS", copy: "Deadstock, pre-owned, collectibles & grails.", meta: "GRAILS / COLLECTIBLES" },
  { number: "04", title: "DESIGN & ART", copy: "Prints, objects, photography, illustration & creative work.", meta: "OBJECTS / VISUAL CULTURE" },
  { number: "05", title: "FOOD & DRINKS", copy: "Streetfood, coffee, matcha, sweets, aperitivo & drinks.", meta: "EAT / DRINK / STAY" },
  { number: "06", title: "MUSIC & NIGHTLIFE", copy: "DJs, sounds, lights & the atmosphere of the night.", meta: "AFTER DARK" },
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
            <img src="/favicon.png" alt="" />
            <span>
              NIGHT LIGHT
              <small>BAZAAR</small>
            </span>
          </a>

          <div className="nav-links">
            <a href="#concept">Concept</a>
            <a href="#experience">Experience</a>
            <a href="#bazaar">Bazaar</a>
            <a href="#partners">Partner</a>
          </div>

          <a className="pill pill-small" href="#event">
            EVENT INFO
          </a>
        </nav>
      </header>

      <section className="brand-hero" id="top">
        <div className="hero-light-scene" aria-hidden="true">
          <div className="hero-light-ring ring-one" />
          <div className="hero-light-ring ring-two" />
          <div className="hero-light-core" />
        </div>

        <div className="shell brand-hero-inner">
          <div className="hero-topline">
            <p>URBAN MARKET &amp;<br />CULTURE EVENT</p>
            <span className="hero-star" aria-hidden="true">✦</span>
            <p>DÜSSELDORF<br />EDITION 01</p>
          </div>

          <div className="headline-stage" aria-label="Night Light Bazaar">
            <p className="headline-kicker">DÜSSELDORF&apos;S NIGHT VINTAGE &amp; LIFESTYLE MARKET</p>

            <h1 className="headline-title">
              <span className="line solid">NIGHT LIGHT</span>
              <span className="line bazaar-script">BAZAAR</span>
            </h1>

            <p className="hero-subline">Vintage meets Street Culture, Music, Food &amp; Nightlife.</p>

            <div className="hero-status">LOCATION &amp; DATE — COMING SOON</div>

            <div className="hero-actions">
              <a className="hero-cta hero-cta-primary" href="https://www.instagram.com/nightlightbazaar/" target="_blank" rel="noreferrer">
                FOLLOW THE NIGHT <span>↗</span>
              </a>
              <a className="hero-cta hero-cta-secondary" href="mailto:hello@nightlightbazaar.de?subject=Seller%20Application%20%E2%80%94%20Night%20Light%20Bazaar">
                SELL WITH US <span>↗</span>
              </a>
            </div>
          </div>

          <div className="hero-bottomline" aria-label="Night Light Bazaar Kategorien">
            <span>VINTAGE</span><b>/</b><span>STREETWEAR</span><b>/</b><span>SNEAKERS</span><b>/</b><span>DESIGN</span><b>/</b><span>ART</span><b>/</b><span>MUSIC</span><b>/</b><span>FOOD</span>
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
        <a href="#mobile-experience">Highlights</a>
        <a href="#mobile-bazaar">Bazaar</a>
        <a href="#mobile-event">Event</a>
        <a href="#mobile-faq">FAQ</a>
      </nav>


      <section className="mobile-landing" aria-label="Night Light Bazaar Mobile">
        <section className="mobile-intro-card" id="mobile-about">
          <div className="shell">
            <p className="mobile-label">THE NIGHT LIGHT BAZAAR</p>
            <h2>NOT JUST A MARKET.<br /><span>IT&apos;S A NIGHT OUT.</span></h2>
            <p className="mobile-lead">Vintage, Streetwear, Sneakers, Design, Art, Music, Food & Drinks an einem Ort — kuratiert für einen außergewöhnlichen Abend in Düsseldorf.</p>
            <div className="mobile-tags" aria-label="Highlights">
              <span>SHOP</span><span>DISCOVER</span><span>LISTEN</span><span>EAT</span><span>DRINK</span><span>CONNECT</span>
            </div>
          </div>
        </section>

        <section className="mobile-experience-section" id="mobile-experience">
          <div className="shell">
            <p className="mobile-label">THE BAZAAR EXPERIENCE</p>
            <h2>ONE NIGHT.<br />MANY MOMENTS.</h2>
            <div className="mobile-feature-list">
              <article><span>01</span><div><h3>SHOP</h3><p>Vintage, Streetwear, Sneakers, Collectibles & unique finds.</p></div></article>
              <article><span>02</span><div><h3>DISCOVER</h3><p>Independent Seller, lokale Brands, Designer & kreative Projekte.</p></div></article>
              <article><span>03</span><div><h3>LISTEN</h3><p>DJs, Sounds und ein Soundtrack für die Nacht.</p></div></article>
              <article><span>04</span><div><h3>EAT</h3><p>Streetfood, Sweet Treats, Coffee & Matcha.</p></div></article>
              <article><span>05</span><div><h3>DRINK</h3><p>Aperitivo, Cocktails, Beer & ausgewählte Drinks.</p></div></article>
              <article><span>06</span><div><h3>CONNECT</h3><p>Menschen treffen, Stories austauschen und Teil der Community werden.</p></div></article>
            </div>
          </div>
        </section>

        <section className="mobile-bazaar-section" id="mobile-bazaar">
          <div className="shell">
            <p className="mobile-label">WHAT&apos;S AT THE BAZAAR</p>
            <h2>SIX WORLDS.<br />ONE NIGHT.</h2>
            <div className="mobile-bazaar-grid">
              {bazaarItems.map((item) => (
                <article key={item.number}>
                  <span>{item.number}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.copy}</p>
                    <small>{item.meta}</small>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mobile-whos-section" id="mobile-whos-there">
          <div className="shell">
            <p className="mobile-label">WHO'S THERE?</p>
            <h2>CURATED PEOPLE.<br />CURATED CONCEPTS.</h2>
            <div className="mobile-whos-grid">
              <article><span>SELLERS</span><strong>VINTAGE & STREET</strong><p>Ausgewählte Seller und besondere Pieces.</p></article>
              <article><span>MUSIC</span><strong>DJs & SOUNDS</strong><p>Line-up wird nach und nach angekündigt.</p></article>
              <article><span>FOOD</span><strong>FOOD & DRINKS</strong><p>Streetfood, Coffee, Matcha und Drinks.</p></article>
            </div>
            <p className="mobile-soon-note">Erste Namen & Brands folgen bald.</p>
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


        <section className="mobile-arrival-section">
          <div className="shell mobile-arrival-card">
            <div>
              <p className="mobile-label">GETTING THERE</p>
              <h2>DÜSSELDORF.</h2>
            </div>
            <p>Die genaue Location ist noch geheim. ÖPNV-, Fahrrad- und Anreiseinfos folgen direkt mit dem Location Reveal.</p>
            <span>LOCATION · TBA</span>
          </div>
        </section>

        <section className="mobile-partners-section" id="mobile-partners">
          <div className="shell">
            <div className="mobile-partner-head">
              <p className="mobile-label light">SUPPORTED BY</p>
              <p>Partner, die den Abend mit Drinks, Energy und Aperitivo begleiten.</p>
            </div>
            <div className="mobile-partner-rail sponsor-marquee" aria-label="Partner">
              <div className="sponsor-marquee-track">
                <div className="mobile-partner-set">
                  <div><img src="/assets/partners/anheuser-busch.png?v=2" alt="Anheuser-Busch" /></div>
                  <div><img src="/assets/partners/red-bull.png?v=2" alt="Red Bull" /></div>
                  <div><img src="/assets/partners/fritz-kola.png?v=2" alt="fritz-kola" /></div>
                  <div><img src="/assets/partners/aperol.png?v=2" alt="Aperol" /></div>
                </div>
                <div className="mobile-partner-set" aria-hidden="true">
                  <div><img src="/assets/partners/anheuser-busch.png?v=2" alt="" /></div>
                  <div><img src="/assets/partners/red-bull.png?v=2" alt="" /></div>
                  <div><img src="/assets/partners/fritz-kola.png?v=2" alt="" /></div>
                  <div><img src="/assets/partners/aperol.png?v=2" alt="" /></div>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="mobile-faq-section" id="mobile-faq">
          <div className="shell">
            <p className="mobile-label">GOOD TO KNOW</p>
            <h2>FAQ.</h2>
            <div className="faq-list">
              <details><summary>Brauche ich ein Ticket?</summary><p>Ticket- und Einlassinfos werden mit dem offiziellen Event-Launch veröffentlicht.</p></details>
              <details><summary>Wo findet der Bazaar statt?</summary><p>In Düsseldorf. Die genaue Location wird zu einem späteren Zeitpunkt bekannt gegeben.</p></details>
              <details><summary>Was erwartet mich?</summary><p>Vintage, Streetwear, Sneakers, Musik, Food, Drinks und ausgewählte kreative Konzepte.</p></details>
              <details><summary>Kann ich selbst einen Stand machen?</summary><p>Ja. Bewerbungen für Seller, Brands und Food-Konzepte öffnen bald.</p></details>
              <details><summary>Wie komme ich hin?</summary><p>ÖPNV-, Fahrrad- und weitere Anreiseinfos folgen zusammen mit der Location.</p></details>
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

      <section className="intro-story editorial-intro section" id="concept">
        <div className="shell editorial-intro-grid">
          <aside className="editorial-folio" aria-label="Editorial section 01">
            <span>01</span>
            <small>NIGHT LIGHT BAZAAR<br />DÜSSELDORF</small>
          </aside>

          <div className="editorial-intro-copy">
            <p className="section-kicker">THE NIGHT LIGHT BAZAAR</p>
            <h2>
              NOT JUST A MARKET.
              <span>IT&apos;S A NIGHT OUT.</span>
            </h2>
            <p className="intro-story-text">
              NIGHT LIGHT BAZAAR bringt Vintage, Streetwear, Sneakers, Design, Art, Music, Food & Drinks an einem Ort zusammen.
              Kein klassischer Flohmarkt. Keine anonyme Shoppinghalle. Sondern ein kuratierter Treffpunkt für Menschen,
              die besondere Pieces suchen, neue Brands entdecken, gute Musik hören und gemeinsam einen außergewöhnlichen Abend erleben wollen.
            </p>
            <div className="story-signoff">SHOP. DISCOVER. CONNECT. STAY.</div>
          </div>

          <div className="editorial-stamp" aria-hidden="true">
            MORE THAN<br />JUST A MARKET
          </div>
        </div>
      </section>

      <section className="experience section" id="experience">
        <div className="shell">
          <div className="section-head">
            <div>
              <p className="section-kicker">THE BAZAAR EXPERIENCE</p>
              <h2>ONE NIGHT.<br />MANY MOMENTS.</h2>
            </div>
            <p>
              Shoppen, entdecken, zuhören, essen, trinken, connecten — sechs Teile einer gemeinsamen Night-Market-Experience.
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


      <section className="bazaar-worlds section" id="bazaar">
        <div className="shell">
          <div className="bazaar-worlds-head">
            <div>
              <p className="section-kicker">WHAT&apos;S AT THE BAZAAR</p>
              <h2>SIX WORLDS.<br /><span>ONE NIGHT.</span></h2>
            </div>
            <p>Von besonderen Pieces bis zum Sound der Nacht: Jede Kategorie bekommt Raum, Identität und ihren eigenen Moment.</p>
          </div>

          <div className="bazaar-worlds-grid">
            {bazaarItems.map((item) => (
              <article className={"bazaar-world-card bazaar-world-" + item.number} key={item.number}>
                <div className="bazaar-world-visual" aria-hidden="true">
                  <span>{item.number}</span>
                  <i />
                </div>
                <div className="bazaar-world-copy">
                  <small>{item.meta}</small>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </div>
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

      <section className="editorial-marquee" aria-label="Night Light Bazaar Statement">
        <div className="editorial-marquee-track">
          <span>SHOP</span><b>✦</b><span>DISCOVER</span><b>✦</b><span>LISTEN</span><b>✦</b><span>EAT</span><b>✦</b><span>DRINK</span><b>✦</b><span>CONNECT</span><b>✦</b>
          <span>SHOP</span><b>✦</b><span>DISCOVER</span><b>✦</b><span>LISTEN</span><b>✦</b><span>EAT</span><b>✦</b><span>DRINK</span><b>✦</b><span>CONNECT</span><b>✦</b>
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

          <div className="partner-rail sponsor-marquee" aria-label="Partner des Night Light Bazaar">
            <div className="sponsor-marquee-track">
              <div className="partner-set">
                <div className="partner-logo-card"><img src="/assets/partners/anheuser-busch.png?v=2" alt="Anheuser-Busch" /></div>
                <div className="partner-logo-card"><img src="/assets/partners/red-bull.png?v=2" alt="Red Bull" /></div>
                <div className="partner-logo-card"><img src="/assets/partners/fritz-kola.png?v=2" alt="fritz-kola" /></div>
                <div className="partner-logo-card"><img src="/assets/partners/aperol.png?v=2" alt="Aperol" /></div>
              </div>
              <div className="partner-set" aria-hidden="true">
                <div className="partner-logo-card"><img src="/assets/partners/anheuser-busch.png?v=2" alt="" /></div>
                <div className="partner-logo-card"><img src="/assets/partners/red-bull.png?v=2" alt="" /></div>
                <div className="partner-logo-card"><img src="/assets/partners/fritz-kola.png?v=2" alt="" /></div>
                <div className="partner-logo-card"><img src="/assets/partners/aperol.png?v=2" alt="" /></div>
              </div>
            </div>
          </div>

          <div className="partner-note">
            <span>BEVERAGE PARTNERS · EDITION 01</span>
            <span>MORE TO COME</span>
          </div>
        </div>
      </section>

      <section className="event-snapshot" aria-label="Event auf einen Blick">
        <div className="shell event-snapshot-grid">
          <div><small>WHERE</small><strong>DÜSSELDORF</strong></div>
          <div><small>WHEN</small><strong>DATE TBA</strong></div>
          <div><small>TIME</small><strong>17:00 — 00:00</strong></div>
          <div><small>FORMAT</small><strong>NIGHT MARKET</strong></div>
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


      <section className="desktop-enrichment shell section">
        <div className="desktop-whos">
          <div>
            <p className="section-kicker">WHO'S THERE?</p>
            <h2>CURATED PEOPLE.<br />CURATED CONCEPTS.</h2>
          </div>
          <div className="desktop-whos-grid">
            <article><span>SELLERS</span><strong>VINTAGE & STREET</strong><p>Ausgewählte Seller und besondere Pieces.</p></article>
            <article><span>MUSIC</span><strong>DJs & SOUNDS</strong><p>Line-up wird nach und nach angekündigt.</p></article>
            <article><span>FOOD</span><strong>FOOD & DRINKS</strong><p>Streetfood, Coffee, Matcha und Drinks.</p></article>
          </div>
        </div>

        <div className="arrival-card">
          <div><p className="section-kicker light">GETTING THERE</p><h3>DÜSSELDORF · LOCATION TBA</h3></div>
          <p>ÖPNV-, Fahrrad- und Anreiseinfos folgen direkt mit dem Location Reveal.</p>
        </div>

        <div className="desktop-faq" id="faq">
          <div><p className="section-kicker">GOOD TO KNOW</p><h3>FAQ.</h3></div>
          <div className="faq-list">
            <details><summary>Brauche ich ein Ticket?</summary><p>Ticket- und Einlassinfos werden mit dem offiziellen Event-Launch veröffentlicht.</p></details>
            <details><summary>Wo findet der Bazaar statt?</summary><p>In Düsseldorf. Die genaue Location wird später bekannt gegeben.</p></details>
            <details><summary>Was erwartet mich?</summary><p>Vintage, Streetwear, Sneakers, Musik, Food, Drinks und ausgewählte kreative Konzepte.</p></details>
            <details><summary>Kann ich selbst einen Stand machen?</summary><p>Ja. Bewerbungen für Seller, Brands und Food-Konzepte öffnen bald.</p></details>
            <details><summary>Wie komme ich hin?</summary><p>Anreiseinfos folgen zusammen mit dem Location Reveal.</p></details>
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
            <img src="/favicon.png" alt="" />
            <span>
              NIGHT LIGHT
              <small>BAZAAR</small>
            </span>
          </a>
          <div className="footer-links"><a href="/impressum">Impressum</a><a href="/datenschutz">Datenschutz</a></div>
          <a className="footer-back" href="#top">BACK TO TOP ↑</a>
        </div>
      </footer>
    </main>
  );
}
