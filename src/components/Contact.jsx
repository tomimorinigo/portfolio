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
          <p>
            Feel free to contact me if you have any questions or if you want to
            work with me.
          </p>
        </div>
        <div className="contact-form">
          <form action="https://formspree.io/" method="POST">
            <div className="form-group">
              <input
                type="text"
                name="name"
                required
                placeholder="Enter your name"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                required
                placeholder="Enter email address"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="subject"
                required
                placeholder="Subject"
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                id="message"
                required
                placeholder="Write me a message"
              />
            </div>
            <button type="submit">Contact me</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
