import { useState } from "react";
import "./Navbar.css";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "Studio", href: "#studio" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
  { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Services");

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <a href="#home" className="navbar__logo">
          Elementum
        </a>

        <nav className={`navbar__links ${open ? "is-open" : ""}`}>
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`navbar__link ${active === link.label ? "is-active" : ""}`}
              onClick={() => {
                setActive(link.label);
                setOpen(false);
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          className={`navbar__toggle ${open ? "is-open" : ""}`}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
