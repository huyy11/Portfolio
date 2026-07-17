import "../styles/Resume.css";

function Resume() {
  return (
    <section id="resume" className="resume">

      <div className="section-title">
        <h2>Resume</h2>
        <div className="underline"></div>
      </div>

      <div className="resume-container">

        <div className="resume-column">

          <h3>Education</h3>

          <div className="resume-card">
            <h4>Bachelor of Computer Science</h4>
            <span>2025 - Present</span>
            <p>Western University</p>
          </div>

          <div className="resume-card">
            <h4>Net Yang High School</h4>
            <span>2021 - 2024</span>
            <p>Graduated</p>
          </div>

          <div className="resume-card">
            <h4>SPS English School</h4>
            <span>2014 - 2020</span>
          </div>

        </div>

        <div className="resume-column">

          <h3>Experience</h3>

          <div className="resume-card">
            <h4>Associate, Data Delivery</h4>
            <span>October 2025 - Present</span>
            <p>DDD Company</p>
          </div>

          <div className="resume-card">
            <h4>Digital Marketing Intern</h4>
            <span>June - October 2025</span>
            <p>
              Media, Video Editing, Content Creation at Wedu
            </p>
          </div>

          <div className="resume-card">
            <h4>Volunteer</h4>
            <span>June 2025</span>
            <p>Western International School and Western University</p>
          </div>

          <div className="resume-card">
            <h4>Sales Staff</h4>
            <span>2024 - March 2025</span>
            <p>Chip Mong 271 - Prima Company</p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Resume;