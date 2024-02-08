import "../assets/styles/Contact.css";

// eslint-disable-next-line react/prop-types
function Contact({ contact }) {
  return (
    <section className="contact" ref={contact}>
      <div className="title contact-title">
        <h3>Get in touch</h3>
        <hr />
      </div>
      <div className="contact-content">
        <div className="left-contact-side">
          <p>
            I&apos;m looking for my first work experience, with the aim of
            growing professionally and personally.
          </p>
          <br />
          <p>
            Feel free to contact me if you have any questions or if you want to
            work with me.
          </p>
          <div className="social">
            <a
              className="social-icon"
              href="https://github.com/tomimorinigo"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/media/github.png" alt="GitHub Profile" />
            </a>
            <a
              className="social-icon"
              href="https://www.linkedin.com/in/tomas-morinigo-3508a9204/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/media/linkedin.png" alt="Linkedin Profile" />
            </a>
            <a className="social-icon" href="mailto:morinigotomas1@gmail.com">
              <img src="/media/email.png" alt="GitHub Profile" />
            </a>
          </div>
        </div>
        <div className="contact-form">
          <form action="https://formsubmit.co/morinigotomas1@gmail.com" method="POST">
            <input
              type="text"
              name="name"
              required
              placeholder="Enter your name"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Enter email address"
            />
            <input type="text" name="subject" required placeholder="Subject" />
            <textarea
              name="message"
              id="message"
              required
              placeholder="Write me a message"
            />
            <button type="submit" className="special-button">
              <span>Contact me</span>
            </button>
            <input type="hidden" name="_next" value="https://www.google.com/" />
            <input type="hidden" name="_captcha" value="false" />
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
