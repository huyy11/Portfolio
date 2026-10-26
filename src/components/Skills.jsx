import { useLanguage } from "../context/LanguageContext";
import Reveal from "./Reveal";
import "./Skills.css";

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="skills">
      <div className="container">
        <Reveal>
          <p className="section-label">{t.skills.label}</p>
          <h2 className="section-title">{t.skills.title}</h2>
        </Reveal>

        <div className="skills__grid">
          {t.skills.groups.map((group, i) => (
            <Reveal key={group.title} delay={0.05 + i * 0.06}>
              <article className="skill-card">
                <span className="skill-card__index" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="skill-card__title">{group.title}</h3>
                <ul className="skill-card__list">
                  {group.skills.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
