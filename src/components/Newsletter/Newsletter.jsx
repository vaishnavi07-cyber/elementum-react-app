import "./Newsletter.css";

const FOOTER_COLUMNS = [
  {
    heading: "Company",
    links: ["Home", "Studio", "Service", "Blog"],
  },
  {
    heading: "Terms & Policies",
    links: ["Privacy Policy", "Terms & Conditions", "Explore", "Accessibility"],
  },
  {
    heading: "Follow Us",
    links: ["Instagram", "LinkedIn", "Youtube", "Twitter"],
  },
];

export default function Newsletter() {
  return (
    <section className="newsletter" id="contact">
      <div className="container newsletter__inner">
        <svg className="newsletter__arrows" viewBox="0 0 120 60" aria-hidden="true">
          <path d="M20 4 C 20 34, 30 44, 38 52" stroke="#ef6152" strokeWidth="2" fill="none" markerEnd="url(#arrow)" />
          <path d="M50 4 C 50 30, 58 40, 64 50" stroke="#ef6152" strokeWidth="2" fill="none" markerEnd="url(#arrow)" />
          <defs>
            <marker id="arrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
              <path d="M0 0 L8 4 L0 8 Z" fill="#ef6152" />
            </marker>
          </defs>
        </svg>

        <svg className="newsletter__blob" viewBox="0 0 90 110" aria-hidden="true">
          <path
            d="M45 2C70 2 88 30 88 58C88 90 66 108 40 108C15 108 2 82 2 54C2 26 20 2 45 2Z"
            fill="var(--color-purple)"
          />
        </svg>

        <div className="newsletter__cta">
          <h2 className="newsletter__heading">Subscribe to our newsletter</h2>
          <p className="newsletter__copy">To make your stay special and even more memorable</p>
          <button className="newsletter__button" type="button">
            Subscribe Now
          </button>
        </div>

        <div className="newsletter__divider" />

        <footer className="footer">
          <div className="footer__grid">
            {FOOTER_COLUMNS.map((col) => (
              <div className="footer__col" key={col.heading}>
                <h4 className="footer__heading">{col.heading}</h4>
                <ul>
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="footer__link">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="footer__col">
              <h4 className="footer__heading">Terms &amp; Policies</h4>
              <p className="footer__address">
                1498w Fluton ste, STE
                <br />
                2D Chicgo, IL 63867.
              </p>
              <p className="footer__address">(123) 456789000</p>
              <p className="footer__address">info@elementum.com</p>
            </div>
          </div>

          <p className="footer__copyright">©2023 Elementum. All rights reserved</p>
        </footer>
      </div>
    </section>
  );
}
