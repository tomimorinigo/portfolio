import "../assets/styles/SkillsSection.css";

// eslint-disable-next-line react/prop-types
function SkillsSection({ skills }) {
  return (
    <section className="skills" id="skills" ref={skills}>
      <div className="title">
        <h3>Skills</h3>
        <hr />
      </div>

      <div className="skills-content">
        <div className="skill">
          <img src="skills/java.png" alt="Java" />
          <p>Java</p>
        </div>
        <div className="skill">
          <img src="skills/spring.png" alt="Spring" />
          <p>Spring</p>
        </div>
        <div className="skill">
          <img src="skills/react.png" alt="React" />
          <p>React</p>
        </div>
        <div className="skill">
          <img src="skills/js.png" alt="Javascript" />
          <p>Javascript</p>
        </div>
        <div className="skill">
          <img src="skills/hibernate.png" alt="Hibernate" />
          <p>Hibernate</p>
        </div>
        <div className="skill">
          <img src="skills/maven.png" alt="Maven" />
          <p>Maven</p>
        </div>
        <div className="skill">
          <img src="skills/html.png" alt="HTML" />
          <p>HTML</p>
        </div>
        <div className="skill">
          <img src="skills/css.png" alt="CSS" />
          <p>CSS</p>
        </div>
        <div className="skill">
          <img src="skills/sql.png" alt="SQL" />
          <p>SQL</p>
        </div>
        <div className="skill">
          <img src="skills/postman.png" alt="Postman" />
          <p>Postman</p>
        </div>
        <div className="skill">
          <img src="skills/linux.png" alt="Linux" />
          <p>Linux</p>
        </div>
        <div className="skill">
          <img src="skills/git.png" alt="Git" />
          <p>Git</p>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
