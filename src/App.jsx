import { useState } from "react";
import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail, FiMenu, FiX } from "react-icons/fi";
import profile from "./assets/profile.jpg";
import cv from "./assets/mycv.pdf";

const projects = [
  { number: "01", title: "Campus Connect", type: "Web application", description: "A friendly student community platform for finding events, resources, and people on campus.", tags: ["React", "Node.js"] },
  { number: "02", title: "Frame by Frame", type: "Creative direction", description: "A visual storytelling system for a new generation of independent filmmakers and editors.", tags: ["Branding", "Motion"] },
  { number: "03", title: "Tiny Habits", type: "Product design", description: "A focused habit companion that turns small daily intentions into lasting routines.", tags: ["UX / UI", "Prototyping"] },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="wordmark" href="#top" onClick={closeMenu}>KS<span>.</span></a>
        <button className="menu-toggle" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
        <nav className={menuOpen ? "nav-links is-open" : "nav-links"} aria-label="Main navigation">
          <a href="#work" onClick={closeMenu}>Selected work</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>
        <a className="availability" href="#contact"><span />Available for work</a>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-copy">
            <p className="eyebrow">Portfolio / 2025—26</p>
            <h1>I make digital<br /><em>things</em> with care.</h1>
            <p className="hero-intro">Hi, I&apos;m Kang Sivmey — a computer science student and web developer building thoughtful, useful experiences for the web.</p>
            <a className="text-link" href="#work">See selected work <FiArrowUpRight /></a>
          </div>
          <div className="hero-portrait-wrap">
            <div className="portrait-frame"><img src={profile} alt="Kang Sivmey smiling" /></div>
            <span className="portrait-label">Based in Phnom Penh<br />Working everywhere</span>
            <span className="hero-stamp">KS<br /><small>24°59&apos;N</small></span>
          </div>
        </section>

        <section className="marquee" aria-label="Skills">
          <div>DEVELOPMENT <span>✳</span> DESIGN <span>✳</span> VIDEO <span>✳</span> IDEAS <span>✳</span> DEVELOPMENT <span>✳</span> DESIGN</div>
        </section>

        <section className="work-section section-pad" id="work">
          <div className="section-heading"><p className="eyebrow">01 / Selected work</p><p className="section-note">A few things I&apos;ve made<br />along the way.</p></div>
          <div className="project-list">
            {projects.map((project) => <article className="project-card" key={project.number}><div className="project-number">{project.number}</div><div className="project-main"><p className="project-type">{project.type}</p><h2>{project.title}</h2><p>{project.description}</p><div className="tag-row">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div><a className="round-arrow" href="#contact" aria-label={`Ask about ${project.title}`}><FiArrowUpRight /></a></article>)}
          </div>
        </section>

        <section className="about-section section-pad" id="about">
          <div className="section-heading"><p className="eyebrow">02 / A little about me</p></div>
          <div className="about-grid"><h2>Curious by nature.<br /><em>Intentional</em> by design.</h2><div className="about-body"><p>I&apos;m a second-year Computer Science student at Western University who likes turning complex problems into clear, human experiences.</p><p>When I&apos;m not writing code, you&apos;ll find me editing video, exploring new ideas, or learning something that makes the next project a little better.</p><a className="text-link" href={cv} download>Download my CV <FiArrowUpRight /></a></div></div>
          <div className="stat-row"><div><strong>03+</strong><span>Years learning<br />& building</span></div><div><strong>12</strong><span>Projects<br />completed</span></div><div><strong>∞</strong><span>Ideas still<br />to explore</span></div></div>
        </section>

        <section className="contact-section section-pad" id="contact">
          <div className="contact-top"><p className="eyebrow">03 / Let&apos;s talk</p><h2>Have a good idea?<br /><em>Let&apos;s make it real.</em></h2></div>
          <div className="contact-grid"><div><p className="contact-copy">I&apos;m currently open to internships, collaborations, and interesting conversations.</p><a className="email-link" href="mailto:sivmeybtb199@gmail.com">sivmeybtb199@gmail.com <FiArrowUpRight /></a><div className="social-links"><a href="https://github.com" target="_blank" rel="noreferrer"><FiGithub /> GitHub</a><a href="https://linkedin.com" target="_blank" rel="noreferrer"><FiLinkedin /> LinkedIn</a></div></div><form onSubmit={(event) => { event.preventDefault(); setSent(true); }}><label>Your name<input required name="name" placeholder="Jane Smith" /></label><label>Your email<input required type="email" name="email" placeholder="jane@company.com" /></label><label>Tell me about it<textarea required name="message" rows="3" placeholder="I have an idea..."></textarea></label><button type="submit">{sent ? "Message noted — thank you" : "Send a message"} <FiArrowUpRight /></button></form></div>
        </section>
      </main>
      <footer><span>© 2026 Kang Sivmey</span><span>Designed & built with care</span><a href="#top">Back to top ↑</a></footer>
    </div>
  );
}

export default App;
