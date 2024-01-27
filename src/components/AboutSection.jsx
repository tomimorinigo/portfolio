// eslint-disable-next-line react/prop-types
function AboutSection({ about }) {
  return (
    <section className="about" id="about" ref={about}>
      <div className="title">
        <h3>About me</h3>
        <hr />
      </div>

      <div className="about-content">
        <p>
          Hi! I&apos;m Tomas, a <span>Full-Stack Web Developer</span> with Java,
          Spring and React as main technologies, with extra knowledge in HTML,
          CSS, Javascript, Git / Github, SQL, Linux and agile methodologies.{" "}
          <br /> <br />
          I&apos;m currently in my 3rd year of <span>
            Systems Engineering
          </span>{" "}
          at UTN FRC, and I&apos;m training on my own in new technologies.{" "}
          <br /> <br />
          I consider myself a person ready to face new challenges, along with my
          desire to constantly learn and my easy adaptability to new
          environments. <br /> <br />
          I&apos;m currently <span>looking for new opportunities</span> that
          allow me to grow professionally and as a person.
        </p>
        <div className="img-wrapper">
          <div className="filter"></div>
          <img src="me/profile.jpg" alt="Tomas Morinigo Profile" />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;