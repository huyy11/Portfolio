import { useLanguage } from "../context/LanguageContext";
import Reveal from "./Reveal";
import TiltCard from "./TiltCard";
import "./Projects.css";

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="projects">
      <div className="container">
        <Reveal>
          <p className="section-label">{t.projects.label}</p>
          <h2 className="section-title">{t.projects.title}</h2>
        </Reveal>

        <div className="projects__grid">
          {t.projects.items.map((p, i) => (
            <Reveal key={p.name} delay={0.05 + i * 0.08}>
              <TiltCard className="project-card" data-cursor="view">
                <div className="project-card__visual">
                  <span className="project-card__number">{p.number}</span>
                  <span className="project-card__cta">{p.cta}</span>
                </div>

                <div className="project-card__body">
                  <div className="project-card__head">
                    <h3 className="project-card__name">{p.name}</h3>
                    <span className="project-card__status">{p.status}</span>
                  </div>

                  <p className="project-card__role">{p.role}</p>

                  <dl className="project-card__details">
                    <div>
                      <dt>{t.projects.objectiveLabel}</dt>
                      <dd>{p.objective}</dd>
                    </div>
                    <div>
                      <dt>{t.projects.skillsLabel}</dt>
                      <dd>
                        <ul className="project-card__skills">
                          {p.skills.map((s) => (
                            <li key={s}>{s}</li>
                          ))}
                        </ul>
                      </dd>
                    </div>
                  </dl>

                  {p.disclaimer && (
                    <p className="project-card__disclaimer">
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 8v4M12 16h.01" />
                      </svg>
                      {p.disclaimer}
                    </p>
                  )}

                  <ul className="project-card__tags">
                    {p.tags.map((tag) => (
                      <li className="tag" key={tag}>
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
