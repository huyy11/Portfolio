import "../styles/About.css";
import profile from "../assets/profile.jpg";

function About() {
  return (
    <section id="about" className="about">

      <div className="title">
        <h2>About Me</h2>
        <div className="line"></div>
      </div>

      <p className="intro">
        Hello! I'm <strong>Kang Sivmey</strong>, a second-year Computer Science
        student at Western University. I enjoy programming, web development,
        and learning new technologies. My goal is to become a professional
        software developer.
      </p>

      <div className="about-container">

        <div className="left">
          <img src={profile} alt="profile" />
        </div>

        <div className="right">

          <h3>Computer Science Student & Web Developer</h3>

          <div className="info">

            <div>
              <p><strong>Name:</strong> Kang Sivmey</p>
              <p><strong>University:</strong> Western University</p>
              <p><strong>Degree:</strong> Bachelor of Computer Science</p>
              <p><strong>Phone:</strong> 093 586 328</p>
            </div>

            <div>
              <p><strong>Email:</strong> sivmeybtb199@gmail.com</p>
              <p><strong>Location:</strong> Phnom Penh, Cambodia</p>
              <p><strong>Languages:</strong> Khmer, English</p>
              <p><strong>Status:</strong> Available for Internship</p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;