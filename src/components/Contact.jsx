import "../assets/styles/Contact.css";

// eslint-disable-next-line react/prop-types
function Contact({ contact }) {
  return (
    <section className="contact" ref={contact}>
      <div className="title contact-title">
        <h3>Get in touch</h3>
        <hr />
      </div>
    </section>
  );
}

export default Contact;
