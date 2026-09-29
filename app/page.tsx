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

export default function Home() {
  return (
    <>
      <header className="nav-wrap">
        <nav className="nav shell" aria-label="Hauptnavigation">
          <a className="brand" href="#top" aria-label="Night Light Bazaar Startseite">
            <span>
              NIGHT LIGHT
              <small>BAZAAR</small>
            </span>
          </a>

          <div className="nav-links">
            <a href="#concept">Concept</a>
            <a href="#experience">Experience</a>
            <a href="#sellers">Sellers</a>
            <a href="#event">Event</a>
            <a href="#faq">FAQ</a>
          </div>

          <a className="pill pill-small desktop-header-cta" href="#sellers">
            SELL WITH US
          </a>
          <a className="pill pill-small mobile-header-cta" href="#mobile-sellers">
            SELL WITH US
          </a>
        </nav>
      </header>

      <main>
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
              <a className="hero-cta hero-cta-secondary" href="#sellers">
                SELL WITH US <span>↓</span>
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
        <a href="#mobile-about">About</a>
        <a href="#mobile-experience">Experience</a>
        <a href="#mobile-sellers">Sellers</a>
        <a href="#mobile-event">Reveal</a>
        <a href="#mobile-faq">FAQ</a>
      </nav>


      <section className="mobile-landing" aria-label="Night Light Bazaar Mobile">
        <section className="mobile-intro-card" id="mobile-about" data-chapter="01">
          <div className="shell">
            <p className="mobile-label">THE NIGHT LIGHT BAZAAR</p>
            <h2>NOT JUST A MARKET.<br /><span>IT&apos;S A NIGHT OUT.</span></h2>
            <p className="mobile-lead">Vintage, Streetwear, Sneakers, Design, Art, Music, Food & Drinks an einem Ort — kuratiert für einen außergewöhnlichen Abend in Düsseldorf.</p>
            <div className="mobile-tags" aria-label="Highlights">
              <span>SHOP</span><span>DISCOVER</span><span>LISTEN</span><span>EAT</span><span>DRINK</span><span>CONNECT</span>
            </div>
          </div>
        </section>

        <section className="mobile-experience-section" id="mobile-experience" data-chapter="02">
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

        <section className="mobile-bazaar-section" id="mobile-bazaar" data-chapter="03">
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

        <section className="mobile-curated-section" id="mobile-curated" data-chapter="04">
          <div className="shell">
            <p className="mobile-label">THE STANDARD</p>
            <h2>CURATED.<br /><span>NOT CROWDED.</span></h2>
            <p className="mobile-curated-lead">We don&apos;t want hundreds of random stalls. We want the right ones.</p>

            <div className="mobile-curated-rules">
              <article><span>01</span><div><strong>QUALITY</strong><em>OVER QUANTITY.</em></div></article>
              <article><span>02</span><div><strong>STYLE</strong><em>OVER STANDARD.</em></div></article>
              <article><span>03</span><div><strong>COMMUNITY</strong><em>OVER CROWD.</em></div></article>
            </div>

            <div className="mobile-curated-signoff">
              <span>SELECTED.</span><span>AUTHENTIC.</span><span>DIFFERENT.</span>
            </div>
          </div>
        </section>

        <section className="mobile-seller-call" id="mobile-sellers" data-chapter="05">
          <div className="shell">
            <p className="mobile-label">CALL FOR EXHIBITORS &amp; CREATIVES</p>
            <h2>BRING YOUR PIECES<br /><span>TO THE NIGHT.</span></h2>
            <p className="mobile-seller-lead">Du machst etwas Besonderes? Zeig es einer Community, die es versteht. Die Standplätze für Edition 01 sind limitiert und werden kuratiert vergeben.</p>

            <div className="mobile-seller-types">
              <article><span>01</span><div><strong>FASHION &amp; VINTAGE</strong><p>Archive, High-End Secondhand, Y2K, Streetwear, Upcycling &amp; Independent Labels.</p></div></article>
              <article><span>02</span><div><strong>DESIGNER &amp; KREATIVE</strong><p>Produktdesign, Homeware, Prints, Illustration, Photography, Schmuck &amp; Handgemachtes.</p></div></article>
              <article><span>03</span><div><strong>ARTISTS &amp; MAKERS</strong><p>Artists, Customizer, Live-Art und interaktive Craft-Formate.</p></div></article>
              <article><span>04</span><div><strong>FOOD &amp; BEVERAGE</strong><p>Streetfood, Specialty Coffee, Matcha, Drinks &amp; Fine Snacks.</p></div></article>
            </div>

            <div className="mobile-seller-cta">
              <a href="mailto:hello@nightlightbazaar.de?subject=Bewerbung%20als%20Aussteller%20%E2%80%94%20Night%20Light%20Bazaar&body=Name%20%2F%20Brand%3A%0AKategorie%3A%0AInstagram%20%2F%20Website%3A%0AWas%20bietest%20du%20an%3F%3A%0AStandort%3A%0AWeitere%20Infos%3A">
                APPLY AS A SELLER <span>↗</span>
              </a>
              <a href="https://www.instagram.com/nightlightbazaar/" target="_blank" rel="noreferrer">OR DM @NIGHTLIGHTBAZAAR</a>
            </div>
          </div>
        </section>

        <section className="mobile-whos-section" id="mobile-whos-there" data-chapter="06">
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

        <section className="mobile-sound-section" id="mobile-music" data-chapter="07">
          <div className="shell">
            <p className="mobile-label">SOUND OF THE NIGHT</p>
            <h2>MUSIC IS PART<br /><span>OF THE EXPERIENCE.</span></h2>
            <p className="mobile-sound-lead">Selected DJs begleiten den Bazaar vom frühen Abend bis in die Nacht — nicht als Hintergrund, sondern als Teil der Atmosphäre.</p>

            <div className="mobile-sound-genres" aria-label="Music styles">
              <span>HIP-HOP</span><span>HOUSE</span><span>R&amp;B</span><span>AFRO</span><span>SOUL</span><span>STREET CULTURE</span>
            </div>

            <div className="mobile-sound-visual" aria-hidden="true">
              <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
            </div>

            <div className="mobile-sound-footer">
              <span>FIRST NAMES · COMING SOON</span>
              <a href="https://www.instagram.com/nightlightbazaar/" target="_blank" rel="noreferrer">FOLLOW THE LINE-UP ↗</a>
            </div>
          </div>
        </section>

        <section className="mobile-food-section" id="mobile-food" data-chapter="08">
          <div className="shell">
            <p className="mobile-label">EAT · DRINK · STAY</p>
            <h2>COME FOR VINTAGE.<br /><span>STAY FOR MORE.</span></h2>
            <p className="mobile-food-lead">Shopping macht hungrig. Deshalb gehören ausgewählte Food- und Drink-Konzepte genauso zum NIGHT LIGHT BAZAAR wie Fashion und Music.</p>

            <div className="mobile-food-grid">
              <article><span>01</span><strong>STREETFOOD</strong></article>
              <article><span>02</span><strong>SWEET TREATS</strong></article>
              <article><span>03</span><strong>COFFEE</strong></article>
              <article><span>04</span><strong>MATCHA</strong></article>
              <article><span>05</span><strong>APERITIVO</strong></article>
              <article><span>06</span><strong>DRINKS</strong></article>
            </div>

            <div className="mobile-food-signoff">
              <span>COME FOR VINTAGE.</span>
              <span>STAY FOR FOOD.</span>
              <strong>STAY LONGER FOR MUSIC.</strong>
            </div>
          </div>
        </section>

        <section className="mobile-edition-reveal" id="mobile-event" data-chapter="09">
          <div className="shell">
            <p className="mobile-label">NIGHT LIGHT BAZAAR · EDITION 01</p>
            <div className="mobile-edition-status">EDITION 01 — COMING SOON</div>
            <h2>ONE NIGHT.<br /><span>ONE SPECIAL PLACE.</span></h2>
            <p className="mobile-edition-lead">Düsseldorf ist gesetzt. Datum, genaue Location, Zeit und Ticketinfos werden mit dem offiziellen Reveal veröffentlicht.</p>

            <div className="mobile-reveal-grid" aria-label="Edition 01 reveal status">
              <article><small>CITY</small><strong>DÜSSELDORF</strong><span>CONFIRMED</span></article>
              <article><small>DATE</small><strong>COMING SOON</strong><span>REVEAL PENDING</span></article>
              <article><small>LOCATION</small><strong>UNDER WRAPS</strong><span>FOLLOW THE CLUES</span></article>
              <article><small>TICKETS</small><strong>COMING SOON</strong><span>AFTER THE REVEAL</span></article>
            </div>

            <div className="mobile-clue-visual" aria-hidden="true">
              <span>NLB / DUS / 01</span>
              <i></i><i></i><i></i>
              <strong>?</strong>
            </div>

            <a className="mobile-clue-cta" href="https://www.instagram.com/nightlightbazaar/" target="_blank" rel="noreferrer">
              FOLLOW THE CLUES <span>↗</span>
            </a>
          </div>
        </section>

        <section className="mobile-brand-partnerships" id="mobile-partners" data-chapter="10">
          <div className="shell">
            <p className="mobile-label">BRAND PARTNERSHIPS</p>
            <h2>YOUR BRAND.<br /><span>OUR NIGHT.</span></h2>
            <p className="mobile-brand-lead">NIGHT LIGHT BAZAAR ist eine physische Plattform für Brands, die Fashion, Culture, Music und eine junge urbane Community nicht nur erreichen, sondern aktiv erleben wollen.</p>

            <div className="mobile-activation-grid">
              <span>POP-UPS</span>
              <span>BRAND ACTIVATIONS</span>
              <span>SAMPLING</span>
              <span>PRODUCT LAUNCHES</span>
              <span>CONTENT CREATION</span>
              <span>BRANDED AREAS</span>
              <span>MUSIC INTEGRATION</span>
              <span>COMMUNITY ACTIVATIONS</span>
            </div>

            <blockquote className="mobile-brand-statement">
              <span>WE DON&apos;T JUST PUT LOGOS ON BANNERS.</span>
              <strong>WE CREATE EXPERIENCES PEOPLE REMEMBER.</strong>
            </blockquote>

            <a className="mobile-brand-cta" href="mailto:hello@nightlightbazaar.de?subject=Brand%20Partnership%20%E2%80%94%20Night%20Light%20Bazaar&body=Brand%3A%0AKontaktperson%3A%0AWebsite%20%2F%20Instagram%3A%0AWelche%20Art%20der%20Aktivierung%20interessiert%20euch%3F%3A%0AZiel%20der%20Partnerschaft%3A%0AWeitere%20Infos%3A">
              BECOME A PARTNER <span>↗</span>
            </a>

            <p className="mobile-partner-reveal-note">Confirmed partner reveals follow with the official Edition 01 announcements.</p>
          </div>
        </section>

        <section className="mobile-faq-section" id="mobile-faq" data-chapter="11">
          <div className="shell">
            <p className="mobile-label">GOOD TO KNOW</p>
            <h2>FAQ.</h2>
            <div className="faq-list">
              <details><summary>Wann findet der Bazaar statt?</summary><p>Edition 01 wird bald angekündigt. Datum, Zeit und Ticketinformationen folgen mit dem offiziellen Reveal.</p></details>
              <details><summary>Wo findet der Bazaar statt?</summary><p>In Düsseldorf. Die genaue Location wird mit dem offiziellen Event- und Location-Reveal bekannt gegeben.</p></details>
              <details><summary>Kann ich beim Bazaar verkaufen?</summary><p>Ja. Gesucht werden ausgewählte Vintage- und Streetwear-Seller, Sneaker-Collector, Artists, Designer und Kreative. Die Plätze sind limitiert und werden kuratiert vergeben.</p></details>
              <details><summary>Können Brands teilnehmen?</summary><p>Ja. Für Brands sind unter anderem Pop-ups, Activations, Sampling, Product Launches, Branded Areas sowie Music- und Community-Integrationen möglich.</p></details>
              <details><summary>Gibt es Food &amp; Drinks?</summary><p>Ja. Ausgewählte Food- und Beverage-Konzepte sind Teil des Bazaar.</p></details>
              <details><summary>Gibt es Musik?</summary><p>Ja. DJs und Music sind ein fester Bestandteil der NIGHT LIGHT BAZAAR Experience.</p></details>
              <details><summary>Ist NIGHT LIGHT BAZAAR ein klassischer Flohmarkt?</summary><p>Nicht genau. NIGHT LIGHT BAZAAR verbindet Vintage Market, Street Culture, Lifestyle, Food, Music und Nightlife in einem kuratierten Format.</p></details>
              <details><summary>Wie bleibe ich auf dem Laufenden?</summary><p>Folge @nightlightbazaar auf Instagram. Dort erscheinen Location-Clues, Seller-Reveals, Brand-Ankündigungen, DJ-Line-ups und weitere Edition-01-Updates.</p></details>
            </div>
          </div>
        </section>

      </section>

      <nav className="mobile-bottom-dock" aria-label="Night Light Bazaar Schnellaktionen">
        <a className="mobile-dock-follow" href="https://www.instagram.com/nightlightbazaar/" target="_blank" rel="noreferrer">
          <span>FOLLOW</span><strong>THE NIGHT ↗</strong>
        </a>
        <a className="mobile-dock-sell" href="#mobile-sellers">
          <span>SELL</span><strong>WITH US ↑</strong>
        </a>
      </nav>

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

      <section className="selection curated-principle section" id="selection">
        <div className="shell">
          <div className="curated-head">
            <div>
              <p className="section-kicker">THE STANDARD</p>
              <h2>CURATED.<span>NOT CROWDED.</span></h2>
            </div>
            <div className="curated-head-copy">
              <p>We don&apos;t want hundreds of random stalls.</p>
              <strong>WE WANT THE RIGHT ONES.</strong>
              <small>Carefully selected sellers, brands, creatives, food concepts and experiences.</small>
            </div>
          </div>

          <div className="curated-rules">
            <article>
              <span>01</span>
              <div><strong>QUALITY</strong><em>OVER QUANTITY.</em></div>
              <p>Weniger Stände, dafür ein Mix, der bewusst ausgewählt ist und als Ganzes funktioniert.</p>
            </article>
            <article>
              <span>02</span>
              <div><strong>STYLE</strong><em>OVER STANDARD.</em></div>
              <p>Keine beliebige Marktoptik. Jeder Auftritt soll Haltung, Ästhetik und eine eigene Handschrift mitbringen.</p>
            </article>
            <article>
              <span>03</span>
              <div><strong>COMMUNITY</strong><em>OVER CROWD.</em></div>
              <p>Nicht einfach möglichst viele Menschen — sondern die richtige Community für Fashion, Culture, Food und Nightlife.</p>
            </article>
          </div>

          <div className="curated-signoff" aria-label="Night Light Bazaar Brand Promise">
            <span>SELECTED.</span>
            <span>AUTHENTIC.</span>
            <span>DIFFERENT.</span>
          </div>
        </div>
      </section>

      <section className="seller-call section" id="sellers">
        <div className="shell">
          <div className="seller-call-head">
            <div>
              <p className="section-kicker">CALL FOR EXHIBITORS &amp; CREATIVES</p>
              <h2>BRING YOUR PIECES<span>TO THE NIGHT.</span></h2>
            </div>
            <div className="seller-call-intro">
              <p>Du machst etwas Besonderes? Zeig es einer Community, die es versteht.</p>
              <strong>SELECTED SELLERS ONLY.</strong>
              <small>Die Standplätze für den kommenden NIGHT LIGHT BAZAAR sind limitiert und werden kuratiert vergeben.</small>
            </div>
          </div>

          <div className="seller-types">
            <article>
              <span>01</span>
              <div className="seller-type-title"><small>WHO WE&apos;RE LOOKING FOR</small><h3>FASHION &amp;<br />VINTAGE SELLER</h3></div>
              <p>Vintage-Archive, High-End Secondhand, Y2K &amp; Streetwear, Upcycling, exklusive Drops &amp; Independent Labels.</p>
            </article>
            <article>
              <span>02</span>
              <div className="seller-type-title"><small>WHO WE&apos;RE LOOKING FOR</small><h3>DESIGNER &amp;<br />KREATIVE</h3></div>
              <p>Produktdesign, Homeware, Prints, Illustrationen, Photography, Schmuck, Keramik &amp; Handgemachtes.</p>
            </article>
            <article>
              <span>03</span>
              <div className="seller-type-title"><small>WHO WE&apos;RE LOOKING FOR</small><h3>ARTISTS &amp;<br />MAKERS</h3></div>
              <p>Künstler, Customizer für Sneaker, Denim oder Print, Live-Art und interaktive Craft-Formate.</p>
            </article>
            <article>
              <span>04</span>
              <div className="seller-type-title"><small>WHO WE&apos;RE LOOKING FOR</small><h3>SPECIALTY FOOD<br />&amp; BEVERAGE</h3></div>
              <p>Kuratierte Streetfood-Konzepte, Specialty Coffee, Matcha, Drinks &amp; Fine Snacks.</p>
            </article>
          </div>

          <div className="seller-benefits">
            <div className="seller-benefits-head">
              <p className="section-kicker">WHY JOIN THE NIGHT?</p>
              <h3>YOUR WORK.<br />THE RIGHT CROWD.</h3>
            </div>
            <div className="seller-benefit-grid">
              <article><span>01</span><strong>THE RIGHT AUDIENCE</strong><p>Eine urbane, trendbewusste Zielgruppe, die Qualität, Besonderheit und Ästhetik schätzt.</p></article>
              <article><span>02</span><strong>PROFESSIONAL FRAME</strong><p>Ein klares, stilvolles Gesamtkonzept statt Durcheinander und klassischer Marktoptik.</p></article>
              <article><span>03</span><strong>DAY-TO-NIGHT ENERGY</strong><p>Licht-Inszenierung, DJs und Bar-Kultur verwandeln den Markt mit zunehmender Dunkelheit in ein urbanes Erlebnis.</p></article>
              <article><span>04</span><strong>REACH &amp; CONTENT</strong><p>Social-Media-Marketing, Creator-Einbindungen und professionelle Event-Fotografie und -Videografie.</p></article>
            </div>
          </div>

          <div className="seller-apply">
            <div>
              <p className="section-kicker light">EDITION 01 · APPLICATION</p>
              <h3>READY TO<br />JOIN THE NIGHT?</h3>
              <p>Schick uns deine Brand, dein Konzept und einen Link zu Instagram oder deiner Website. Wir kuratieren den Mix für Edition 01.</p>
            </div>
            <div className="seller-apply-actions">
              <a className="seller-apply-primary" href="mailto:hello@nightlightbazaar.de?subject=Bewerbung%20als%20Aussteller%20%E2%80%94%20Night%20Light%20Bazaar&body=Name%20%2F%20Brand%3A%0AKategorie%3A%0AInstagram%20%2F%20Website%3A%0AWas%20bietest%20du%20an%3F%3A%0AStandort%3A%0AWeitere%20Infos%3A">
                APPLY AS A SELLER <span>↗</span>
              </a>
              <a className="seller-apply-secondary" href="https://www.instagram.com/nightlightbazaar/" target="_blank" rel="noreferrer">
                INSTAGRAM DM · @NIGHTLIGHTBAZAAR
              </a>
              <small>LIMITED SPOTS · CURATED SELECTION</small>
            </div>
          </div>
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

      <section className="sound-of-night section" id="music">
        <div className="shell sound-grid">
          <div className="sound-copy">
            <p className="section-kicker">SOUND OF THE NIGHT</p>
            <h2>MUSIC IS PART<span>OF THE EXPERIENCE.</span></h2>
            <p>Selected DJs begleiten den NIGHT LIGHT BAZAAR vom frühen Abend bis in die Nacht. Der Sound verändert sich mit der Stimmung — laid-back zum Ankommen, mehr Energie wenn es später wird.</p>

            <div className="sound-genres" aria-label="Music styles">
              <span>HIP-HOP</span><b>·</b><span>HOUSE</span><b>·</b><span>R&amp;B</span><b>·</b><span>AFRO</span><b>·</b><span>SOUL</span><b>·</b><span>STREET CULTURE</span>
            </div>

            <div className="sound-actions">
              <a href="https://www.instagram.com/nightlightbazaar/" target="_blank" rel="noreferrer">FOLLOW THE LINE-UP <span>↗</span></a>
              <small>FIRST NAMES · COMING SOON</small>
            </div>
          </div>

          <div className="sound-stage" aria-hidden="true">
            <div className="sound-stage-index">NLB / SOUND / 01</div>
            <div className="sound-bars">
              <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
            </div>
            <strong>AFTER DARK</strong>
          </div>
        </div>
      </section>

      <section className="eat-drink-stay section" id="food">
        <div className="shell">
          <div className="food-head">
            <div>
              <p className="section-kicker">EAT · DRINK · STAY</p>
              <h2>COME FOR VINTAGE.<span>STAY FOR MORE.</span></h2>
            </div>
            <p>Shopping macht hungrig. Deshalb gehören ausgewählte Food- und Drink-Konzepte genauso zum NIGHT LIGHT BAZAAR wie Fashion, Design und Music.</p>
          </div>

          <div className="food-grid">
            <article><span>01</span><strong>STREETFOOD</strong><small>SAVOURY / FRESH / CURATED</small></article>
            <article><span>02</span><strong>SWEET TREATS</strong><small>DESSERTS / BITES / LATE-NIGHT</small></article>
            <article><span>03</span><strong>COFFEE</strong><small>SPECIALTY / HOT / ICED</small></article>
            <article><span>04</span><strong>MATCHA</strong><small>HOT / ICED / CLEAN</small></article>
            <article><span>05</span><strong>APERITIVO</strong><small>EARLY EVENING / SOCIAL</small></article>
            <article><span>06</span><strong>DRINKS</strong><small>BAR / NIGHT / STAY</small></article>
          </div>

          <div className="food-statement">
            <span>COME FOR VINTAGE.</span>
            <span>STAY FOR FOOD.</span>
            <strong>STAY LONGER FOR MUSIC.</strong>
          </div>
        </div>
      </section>

      <section className="brand-partnerships section" id="partners">
        <div className="shell">
          <div className="brand-partnerships-head">
            <div>
              <p className="section-kicker">BRAND PARTNERSHIPS</p>
              <h2>YOUR BRAND.<span>OUR NIGHT.</span></h2>
            </div>
            <div className="brand-partnerships-intro">
              <p>NIGHT LIGHT BAZAAR ist eine physische Plattform für Brands, die Culture, Fashion, Music und eine junge urbane Community nicht nur erreichen, sondern aktiv erleben wollen.</p>
              <strong>MAKE YOUR BRAND PART OF THE EXPERIENCE.</strong>
            </div>
          </div>

          <div className="activation-grid" aria-label="Brand partnership formats">
            <article><span>01</span><strong>POP-UPS</strong><small>Own your space.</small></article>
            <article><span>02</span><strong>BRAND ACTIVATIONS</strong><small>Create interaction.</small></article>
            <article><span>03</span><strong>SAMPLING</strong><small>Put product in hand.</small></article>
            <article><span>04</span><strong>PRODUCT LAUNCHES</strong><small>Launch in culture.</small></article>
            <article><span>05</span><strong>CONTENT CREATION</strong><small>Turn the night into content.</small></article>
            <article><span>06</span><strong>BRANDED AREAS</strong><small>Build a world around your brand.</small></article>
            <article><span>07</span><strong>MUSIC INTEGRATION</strong><small>Connect through sound.</small></article>
            <article><span>08</span><strong>COMMUNITY ACTIVATIONS</strong><small>Meet people, not impressions.</small></article>
          </div>

          <div className="brand-manifesto">
            <div className="brand-manifesto-index" aria-hidden="true">NLB / BRANDS / 01</div>
            <p>WE DON&apos;T JUST PUT<br />LOGOS ON BANNERS.</p>
            <strong>WE CREATE EXPERIENCES<br />PEOPLE REMEMBER.</strong>
          </div>

          <div className="brand-partner-cta">
            <div>
              <p className="section-kicker light">PARTNER WITH THE NIGHT</p>
              <h3>BUILD SOMETHING<br />PEOPLE FEEL.</h3>
              <p>Tell us about your brand, your goal and the kind of activation you have in mind. We&apos;ll shape the right format together around the NIGHT LIGHT BAZAAR experience.</p>
            </div>
            <div className="brand-partner-actions">
              <a className="brand-partner-primary" href="mailto:hello@nightlightbazaar.de?subject=Brand%20Partnership%20%E2%80%94%20Night%20Light%20Bazaar&body=Brand%3A%0AKontaktperson%3A%0AWebsite%20%2F%20Instagram%3A%0AWelche%20Art%20der%20Aktivierung%20interessiert%20euch%3F%3A%0AZiel%20der%20Partnerschaft%3A%0AWeitere%20Infos%3A">
                BECOME A PARTNER <span>↗</span>
              </a>
              <a className="brand-partner-secondary" href="mailto:hello@nightlightbazaar.de?subject=Partnership%20Deck%20Request%20%E2%80%94%20Night%20Light%20Bazaar">
                REQUEST PARTNERSHIP INFO
              </a>
              <small>PARTNER ANNOUNCEMENTS · EDITION 01 · COMING WITH THE OFFICIAL REVEAL</small>
            </div>
          </div>
        </div>
      </section>

      <section className="edition-reveal section" id="event">
        <div className="shell">
          <div className="edition-reveal-head">
            <div>
              <p className="section-kicker">NIGHT LIGHT BAZAAR · EDITION 01</p>
              <div className="edition-reveal-badge">EDITION 01 — COMING SOON</div>
              <h2>ONE NIGHT.<span>ONE SPECIAL PLACE.</span></h2>
            </div>
            <div className="edition-reveal-intro">
              <p>Düsseldorf ist gesetzt. Alles Weitere bleibt bis zum offiziellen Reveal unter Verschluss.</p>
              <strong>FOLLOW THE CLUES.</strong>
              <small>Datum, genaue Location, Zeit und Ticketinformationen werden Schritt für Schritt veröffentlicht.</small>
            </div>
          </div>

          <div className="reveal-board" aria-label="Edition 01 reveal status">
            <article>
              <span>01</span>
              <small>CITY</small>
              <strong>DÜSSELDORF</strong>
              <em>CONFIRMED</em>
            </article>
            <article>
              <span>02</span>
              <small>DATE</small>
              <strong>COMING SOON</strong>
              <em>REVEAL PENDING</em>
            </article>
            <article>
              <span>03</span>
              <small>LOCATION</small>
              <strong>UNDER WRAPS</strong>
              <em>FOLLOW THE CLUES</em>
            </article>
            <article>
              <span>04</span>
              <small>TICKETS</small>
              <strong>COMING SOON</strong>
              <em>AFTER THE REVEAL</em>
            </article>
          </div>

          <div className="location-mystery">
            <div className="location-mystery-meta">
              <span>NLB / DUS / EDITION 01</span>
              <span>LOCATION FILE · LOCKED</span>
            </div>

            <div className="location-mystery-visual" aria-hidden="true">
              <div className="mystery-ring mystery-ring-a" />
              <div className="mystery-ring mystery-ring-b" />
              <div className="mystery-grid-lines" />
              <strong>?</strong>
            </div>

            <div className="location-mystery-copy">
              <p>ONE NIGHT.<br />ONE SPECIAL PLACE.</p>
              <span>Die genaue Location wird mit einer eigenen Announcement bekannt gegeben.</span>
            </div>
          </div>

          <div className="reveal-actions">
            <a className="reveal-primary" href="https://www.instagram.com/nightlightbazaar/" target="_blank" rel="noreferrer">
              FOLLOW THE CLUES <span>↗</span>
            </a>
            <div className="reveal-note">
              <span>LOCATION REVEAL</span>
              <strong>COMING SOON</strong>
            </div>
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

        <div className="desktop-faq" id="faq">
          <div><p className="section-kicker">GOOD TO KNOW</p><h3>FAQ.</h3></div>
          <div className="faq-list">
            <details><summary>Wann findet der Bazaar statt?</summary><p>Edition 01 wird bald angekündigt. Datum, Zeit und Ticketinformationen folgen mit dem offiziellen Reveal.</p></details>
            <details><summary>Wo findet der Bazaar statt?</summary><p>In Düsseldorf. Die genaue Location wird mit dem offiziellen Event- und Location-Reveal bekannt gegeben.</p></details>
            <details><summary>Kann ich beim Bazaar verkaufen?</summary><p>Ja. Gesucht werden ausgewählte Vintage- und Streetwear-Seller, Sneaker-Collector, Artists, Designer und Kreative. Die Plätze sind limitiert und werden kuratiert vergeben.</p></details>
            <details><summary>Können Brands teilnehmen?</summary><p>Ja. Für Brands sind unter anderem Pop-ups, Activations, Sampling, Product Launches, Branded Areas sowie Music- und Community-Integrationen möglich.</p></details>
            <details><summary>Gibt es Food &amp; Drinks?</summary><p>Ja. Ausgewählte Food- und Beverage-Konzepte sind Teil des Bazaar.</p></details>
            <details><summary>Gibt es Musik?</summary><p>Ja. DJs und Music sind ein fester Bestandteil der NIGHT LIGHT BAZAAR Experience.</p></details>
            <details><summary>Ist NIGHT LIGHT BAZAAR ein klassischer Flohmarkt?</summary><p>Nicht genau. NIGHT LIGHT BAZAAR verbindet Vintage Market, Street Culture, Lifestyle, Food, Music und Nightlife in einem kuratierten Format.</p></details>
            <details><summary>Wie bleibe ich auf dem Laufenden?</summary><p>Folge @nightlightbazaar auf Instagram. Dort erscheinen Location-Clues, Seller-Reveals, Brand-Ankündigungen, DJ-Line-ups und weitere Edition-01-Updates.</p></details>
          </div>
        </div>
      </section>



      </main>

      <footer className="footer site-footer">
        <div className="shell footer-main-grid">
          <div className="footer-brand-block">
            <a className="brand footer-brand" href="#top" aria-label="Night Light Bazaar Startseite">
              <span>NIGHT LIGHT<small>BAZAAR</small></span>
            </a>
            <h2>FOLLOW<br />THE NIGHT.</h2>
            <p>Düsseldorf&apos;s curated Night Vintage &amp; Lifestyle Market. Edition 01 coming soon.</p>
            <a className="footer-mail" href="mailto:hello@nightlightbazaar.de">hello@nightlightbazaar.de ↗</a>
          </div>

          <nav className="footer-column" aria-label="Footer Navigation">
            <strong>EXPLORE</strong>
            <div className="footer-link-set footer-desktop-links">
              <a href="#concept">Concept</a>
              <a href="#experience">Experience</a>
              <a href="#sellers">Sellers</a>
              <a href="#event">Edition 01</a>
              <a href="#faq">FAQ</a>
            </div>
            <div className="footer-link-set footer-mobile-links">
              <a href="#mobile-about">About</a>
              <a href="#mobile-experience">Experience</a>
              <a href="#mobile-sellers">Sellers</a>
              <a href="#mobile-event">Edition 01</a>
              <a href="#mobile-faq">FAQ</a>
            </div>
          </nav>

          <div className="footer-column">
            <strong>JOIN</strong>
            <div className="footer-link-set footer-desktop-links">
              <a href="#sellers">Become a Seller</a>
              <a href="#partners">Become a Partner</a>
            </div>
            <div className="footer-link-set footer-mobile-links">
              <a href="#mobile-sellers">Become a Seller</a>
              <a href="#mobile-partners">Become a Partner</a>
            </div>
            <a href="mailto:hello@nightlightbazaar.de">Contact</a>
          </div>

          <div className="footer-column footer-social">
            <strong>SOCIAL</strong>
            <a href="https://www.instagram.com/nightlightbazaar/" target="_blank" rel="noreferrer">Instagram ↗</a>
            <span>TikTok · @nightlightbazaar</span>
          </div>

          <div className="footer-column footer-legal">
            <strong>LEGAL</strong>
            <a href="/impressum">Impressum</a>
            <a href="/datenschutz">Datenschutz</a>
          </div>
        </div>

        <div className="shell footer-bottom">
          <span>© 2026 NIGHT LIGHT BAZAAR · DÜSSELDORF</span>
          <span>EDITION 01 · COMING SOON</span>
          <a className="footer-back" href="#top">BACK TO TOP ↑</a>
        </div>
      </footer>
    </>
  );
}
