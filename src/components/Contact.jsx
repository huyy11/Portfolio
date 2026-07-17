import "../styles/Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">

      <div className="section-title">
        <h2>Contact Me</h2>
        <div className="underline"></div>
      </div>

      <div className="contact-container">

        <div className="contact-info">

            <div className="contact-map">
                <iframe
                    src="https://www.google.com/maps?q=Western%20University%20Steung%20Mean%20Chey,%20Phnom%20Penh&output=embed"
                    width="100%"
                    height="350"
                    style={{ border: 0, borderRadius: "10px" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Western University"
                ></iframe>
            </div>

          <div className="info-box">
            <i className="bi bi-geo-alt-fill"></i>

            <div>
              <h4>Location</h4>
              <p>Phnom Penh, Cambodia</p>
            </div>

          </div>

          <div className="info-box">
            <i className="bi bi-envelope-fill"></i>

            <div>
              <h4>Email</h4>
              <p>sivmeybtb199@gmail.com</p>
            </div>

          </div>

          <div className="info-box">
            <i className="bi bi-phone-fill"></i>

            <div>
              <h4>Phone</h4>
              <p>093 586 328</p>
            </div>

          </div>

        </div>

        <form className="contact-form">

          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Your Email"
          />

          <input
            type="text"
            placeholder="Subject"
          />

          <textarea
            rows="6"
            placeholder="Your Message"
          ></textarea>

          <button>
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;