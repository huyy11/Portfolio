import { useLanguage } from "../context/LanguageContext";
import Reveal from "./Reveal";
import "./Experience.css";

export default function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="experience">
      <div className="container">
        <Reveal>
          <p className="section-label">{t.experience.label}</p>
          <h2 className="section-title">{t.experience.title}</h2>
        </Reveal>

        <ol className="timeline">
          {t.experience.items.map((item, i) => (
            <li className="timeline__item" key={item.org}>
              <span className="timeline__dot" aria-hidden="true" />
              <Reveal delay={0.05 + i * 0.07} className="timeline__card-wrap">
                <article className="timeline__card">
                  <div className="timeline__meta">
                    <span className="timeline__period">{item.period}</span>
                    {item.current && (
                      <span className="timeline__current">
                        <span className="timeline__current-dot" aria-hidden="true" />
                        {item.current}
                      </span>
                    )}
                  </div>
                  <h3 className="timeline__role">{item.role}</h3>
                  <p className="timeline__org">
                    {item.org}
                    {item.location && (
                      <span className="timeline__location">
                        {" "}
                        · {item.location}
                      </span>
                    )}
                  </p>
                  {item.client && (
                    <p className="timeline__client">{item.client}</p>
                  )}
                  <p className="timeline__description">{item.description}</p>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
