const experiences = [
  {
    number: "01",
    title: "SHOP",
    copy: "Besondere Pieces, Secondhand, Vintage und kleine Labels — entspannt entdecken statt durchhetzen.",
    meta: "CURATED FINDS",
  },
  {
    number: "02",
    title: "SOUND",
    copy: "Chillige DJ-Sets begleiten den Abend. Kein Clubstress. Einfach guter Sound für den richtigen Vibe.",
    meta: "DJ SETS",
  },
  {
    number: "03",
    title: "FOOD",
    copy: "Herzhaft oder süß: wechselnde Foodstände machen aus Shopping einen ganzen Abend.",
    meta: "SWEET × SAVOURY",
  },
  {
    number: "04",
    title: "DRINKS",
    copy: "Cold drinks, Aperitivo und Specials unserer Partner — von Softdrinks bis zum Feierabend-Drink.",
    meta: "STAY A LITTLE LONGER",
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
            <a href="#partners">Partner</a>
          </div>

          <a className="pill pill-small" href="#event">
            EVENT INFO
          </a>
        </nav>
      </header>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="status-dot" />
            DÜSSELDORF · DATE TBA
          </div>

          <h1>
            NIGHT
            <span className="outline">SHOPPING</span>
            REIMAGINED.
          </h1>

          <p className="hero-lead">
            Ein Abend zwischen Market, Musik, Food und Drinks. Komm zum Stöbern.
            Bleib für den Vibe.
          </p>

          <div className="hero-actions">
            <a className="pill" href="#experience">
              DISCOVER THE NIGHT
              <span aria-hidden="true">↘</span>
            </a>
            <span className="micro">17:00 — 00:00 · DÜSSELDORF</span>
          </div>
        </div>

        <div className="hero-art" aria-label="Night Light Bazaar Visual">
          <div className="noise" />
          <div className="arch">
            <div className="star star-one">✦</div>
            <div className="star star-two">✦</div>
            <div className="sun" />
            <div className="reflection">
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
          <div className="art-label">
            <span>SHOP</span>
            <span>•</span>
            <span>EAT</span>
            <span>•</span>
            <span>DRINK</span>
            <span>•</span>
            <span>VIBE</span>
          </div>
        </div>
      </section>

      <section className="ticker" aria-label="Event Highlights">
        <div className="ticker-track">
          <span>NIGHT MARKET</span><b>✦</b>
          <span>DÜSSELDORF</span><b>✦</b>
          <span>DJ SETS</span><b>✦</b>
          <span>STREET FOOD</span><b>✦</b>
          <span>DRINKS</span><b>✦</b>
          <span>17 — 00 UHR</span><b>✦</b>
          <span>NIGHT MARKET</span><b>✦</b>
          <span>DÜSSELDORF</span><b>✦</b>
          <span>DJ SETS</span><b>✦</b>
          <span>STREET FOOD</span><b>✦</b>
          <span>DRINKS</span><b>✦</b>
        </div>
      </section>

      <section className="concept shell section" id="concept">
        <p className="section-kicker">THE CONCEPT</p>
        <div className="concept-grid">
          <h2>NOT YOUR<br />USUAL MARKET.</h2>
          <div className="concept-copy">
            <p>
              Night Light Bazaar bringt das Gefühl eines entspannten Abends mit
              dem Entdecken eines besonderen Marktes zusammen.
            </p>
            <p>
              Weniger klassischer Flohmarkt. Mehr Atmosphäre, gute Musik,
              ausgewählte Stände, gutes Essen und Drinks — an einem Ort, an den
              man nicht nur zum Kaufen kommt.
            </p>
            <div className="concept-note">
              <span>COME FOR THE FINDS.</span>
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
              <h2>FOUR REASONS<br />TO STAY.</h2>
            </div>
            <p>
              Von 17 Uhr bis Mitternacht. Alles an einem Ort, alles Teil eines
              Abends.
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

      <section className="manifesto section">
        <div className="manifesto-glow" />
        <div className="shell manifesto-inner">
          <p className="section-kicker">AFTER DARK</p>
          <h2>
            SHOPPING HITS
            <span>DIFFERENT</span>
            AFTER DARK.
          </h2>
          <p>
            Night Light Bazaar soll kein Event sein, das man abhakt. Es soll
            der Abend sein, bei dem man länger bleibt als geplant.
          </p>
        </div>
      </section>

      <section className="partners shell section" id="partners">
        <div className="section-head partner-head">
          <div>
            <p className="section-kicker">DRINKS BY OUR PARTNERS</p>
            <h2>GOOD NIGHTS<br />NEED GOOD DRINKS.</h2>
          </div>
          <p>
            Unsere Partner begleiten die Night mit Drinks und Specials.
            Weitere Partner folgen.
          </p>
        </div>

        <div className="partner-list">
          {partners.map((partner, index) => (
            <div className="partner-row" key={partner}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{partner}</strong>
              <span>↗</span>
            </div>
          ))}
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
              Du möchtest mit einem Stand, Food-Konzept oder als Partner dabei
              sein? Die Bewerbungsphase für die erste Edition startet bald.
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
