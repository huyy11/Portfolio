import { useLanguage } from "../context/LanguageContext";
import "./Footer.css";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <p className="footer__brand">KANG SIVMEY</p>
          <p className="footer__tagline">{t.footer.tagline}</p>
        </div>
        <div className="footer__right">
          <p className="footer__rights">{t.footer.rights}</p>
          <a href="#home" className="footer__top" data-cursor="link">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
            {t.footer.backToTop}
          </a>
        </div>
      </div>
    </footer>
  );
}
