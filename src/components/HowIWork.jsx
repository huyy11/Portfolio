import { useLanguage } from "../context/LanguageContext";
import Reveal from "./Reveal";
import "./HowIWork.css";

const icons = [
  // Understand the problem — magnifier
  <svg
    key="a"
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="11" cy="11" r="7" />
    <path d="M21 21l-4.3-4.3" />
  </svg>,
  // Plan the experience — wireframe/pen
  <svg
    key="b"
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="3" y="3" width="18" height="18" rx="3" />
    <path d="M3 9h18M9 21V9" />
  </svg>,
  // Build & test iteratively — refresh loop
  <svg
    key="c"
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M21 12a9 9 0 1 1-2.6-6.4" />
    <path d="M21 3v6h-6" />
  </svg>,
  // Learn & improve — trending up
  <svg
    key="d"
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M3 17l6-6 4 4 8-8" />
    <path d="M15 7h6v6" />
  </svg>,
];

export default function HowIWork() {
  const { t } = useLanguage();

  return (
    <section id="how-i-work" className="how">
      <div className="container">
        <Reveal>
          <p className="section-label">{t.how.label}</p>
          <h2 className="section-title">{t.how.title}</h2>
        </Reveal>

        <div className="how__grid">
          {t.how.principles.map((p, i) => (
            <Reveal key={p.title} delay={0.05 + i * 0.07}>
              <article className="how-card">
                <span className="how-card__icon">{icons[i]}</span>
                <span className="how-card__step" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="how-card__title">{p.title}</h3>
                <p className="how-card__text">{p.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
