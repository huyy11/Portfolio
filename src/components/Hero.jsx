import { motion, useReducedMotion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import Magnetic from "./Magnetic";
import "./Hero.css";

export default function Hero() {
  const { t } = useLanguage();
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  };

  const item = reduce
    ? {}
    : {
        hidden: { opacity: 0, y: 26 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
        },
      };

  return (
    <section id="home" className="hero">
      <div className="hero__grid" aria-hidden="true" />
      <div className="hero__orb hero__orb--blue" aria-hidden="true" />
      <div className="hero__orb hero__orb--violet" aria-hidden="true" />

      <div className="container hero__content">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p variants={item} className="hero__availability">
            <span className="hero__pulse" aria-hidden="true" />
            {t.hero.availability}
          </motion.p>

          <motion.h1 variants={item} className="hero__name">
            {t.hero.name}
          </motion.h1>

          <motion.p variants={item} className="hero__role">
            {t.hero.role}
          </motion.p>

          <motion.h2 variants={item} className="hero__headline">
            {t.hero.headlineA}
            <br />
            <span className="hero__headline-gradient">
              {t.hero.headlineB}
            </span>
          </motion.h2>

          <motion.p variants={item} className="hero__intro">
            {t.hero.intro}
          </motion.p>

          <motion.div variants={item} className="hero__actions">
            <Magnetic>
              <a href="#projects" className="btn btn--primary">
                {t.hero.explore}
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
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
            </Magnetic>
            <Magnetic>
              <a href="#contact" className="btn btn--outline">
                {t.hero.contactMe}
              </a>
            </Magnetic>
          </motion.div>
        </motion.div>
      </div>

      <a href="#about" className="hero__scroll-hint" aria-label="Scroll down">
        <span />
      </a>
    </section>
  );
}
