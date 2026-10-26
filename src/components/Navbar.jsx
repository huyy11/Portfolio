import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import "./Navbar.css";

const SECTION_IDS = [
  "home",
  "about",
  "experience",
  "projects",
  "skills",
  "contact",
];

export default function Navbar() {
  const { t, lang, setLang } = useLanguage();
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  const linkClass = (id) =>
    `nav-link${active === id ? " is-active" : ""}`;

  return (
    <header className={`navbar${scrolled ? " is-scrolled" : ""}`}>
      <nav className="navbar__inner" aria-label="Main navigation">
        <a
          href="#home"
          className="navbar__brand"
          onClick={closeMenu}
          data-cursor="link"
        >
          KANG SIVMEY
        </a>

        <ul className="navbar__links">
          {SECTION_IDS.slice(1).map((id) => (
            <li key={id}>
              <a href={`#${id}`} className={linkClass(id)}>
                {t.nav[id]}
              </a>
            </li>
          ))}
        </ul>

        <div
          className="lang-switch"
          role="group"
          aria-label={lang === "kh" ? "ភាសា" : "Language"}
        >
          <button
            type="button"
            className={`lang-switch__btn${lang === "en" ? " is-active" : ""}`}
            onClick={() => setLang("en")}
            aria-pressed={lang === "en"}
          >
            EN
          </button>
          <span className="lang-switch__sep" aria-hidden="true">
            |
          </span>
          <button
            type="button"
            className={`lang-switch__btn${lang === "kh" ? " is-active" : ""}`}
            onClick={() => setLang("kh")}
            aria-pressed={lang === "kh"}
          >
            ខ្មែរ
          </button>
        </div>

        <button
          type="button"
          className="navbar__toggle"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
        >
          <span className="navbar__toggle-bar" />
          <span className="navbar__toggle-bar" />
          <span className="navbar__toggle-bar" />
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`navbar__mobile${open ? " is-open" : ""}`}
        aria-hidden={!open}
      >
        <ul className="navbar__mobile-links">
          {SECTION_IDS.map((id) => (
            <li key={id}>
              <a href={`#${id}`} onClick={closeMenu} tabIndex={open ? 0 : -1}>
                {t.nav[id]}
              </a>
            </li>
          ))}
        </ul>
        <div className="navbar__mobile-lang" aria-hidden={open ? undefined : true}>
          <button
            type="button"
            className={`lang-switch__btn${lang === "en" ? " is-active" : ""}`}
            onClick={() => setLang("en")}
            tabIndex={open ? 0 : -1}
          >
            EN
          </button>
          <span className="lang-switch__sep">|</span>
          <button
            type="button"
            className={`lang-switch__btn${lang === "kh" ? " is-active" : ""}`}
            onClick={() => setLang("kh")}
            tabIndex={open ? 0 : -1}
          >
            ខ្មែរ
          </button>
        </div>
      </div>
    </header>
  );
}
