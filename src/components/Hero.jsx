import "../styles/Hero.css";
import hero from "../assets/hero.jpg";
import cv from "../assets/mycv.pdf";
import { Typewriter } from "react-simple-typewriter";

function Hero() {
  return (
    <section
      id="home"
      className="hero"
      style={{
        backgroundImage: `url(${hero})`,
      }}
    >
      <div className="overlay">

        <h1>Kang Sivmey</h1>

        <h2>
          I'm{" "}
          <span className="typing">
            <Typewriter
              words={[
                "Computer Science Student",
                "Web Developer",
                "Video Editor",
                "Frontend Developer",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h2>

        <div className="buttons">

         <a href={cv} download className="btn btn-primary">
            Download CV
        </a>

        <a href="#contact" className="btn btn-secondary">
            Contact Me
        </a>

        </div>

      </div>
    </section>
  );
}

export default Hero;