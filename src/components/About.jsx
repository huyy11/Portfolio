import { useLanguage } from "../context/LanguageContext";
import Reveal from "./Reveal";
import "./About.css";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="about">
      <div className="container">
        <Reveal>
          <p className="section-label">{t.about.label}</p>
          <h2 className="section-title">{t.about.title}</h2>
        </Reveal>

        <div className="about__grid">
          <Reveal className="about__photo-col" delay={0.05}>
            <div className="about__photo" role="img" aria-label="Kang Sivmey">
              <span className="about__initials">KS</span>
              <span className="about__photo-caption">
                {t.about.photoCaption}
              </span>
            </div>
          </Reveal>

          <div className="about__text">
            <Reveal delay={0.1}>
              <p className="about__p">{t.about.p1}</p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="about__p">{t.about.p2}</p>
            </Reveal>

            <Reveal delay={0.2}>
              <h3 className="about__highlights-title">
                {t.about.highlightsTitle}
              </h3>
              <ul className="about__highlights">
                {t.about.highlights.map((h) => (
                  <li key={h}>
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
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    {h}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
