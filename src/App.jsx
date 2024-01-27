import './App.css'
import { useRef, useEffect, useState } from 'react'

function App() {

  const main = useRef(null);
  const about = useRef(null);
  const skills = useRef(null);

  const scrollToRef = (ref) => {
    const element = ref.current;
  
    if (element) {
      const rect = element.getBoundingClientRect();
      const offset = window.scrollY || document.documentElement.scrollTop;
      const centerOffset = window.innerHeight / 2 - rect.height / 2;
  
      window.scrollTo({
        top: rect.top + offset - centerOffset - 75,
        behavior: 'smooth',
      });
    }
  };
  
  const handleClick = (ref) => (e) => {
    e.preventDefault();
    scrollToRef(ref);
  };

  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {

    const handleScroll = () => {
      const currentPosition = window.scrollY || document.documentElement.scrollTop;
      setScrolling(currentPosition > scrollTop);
      setScrollTop(currentPosition);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollTop]);

  const headerStyle = {
    transform: scrolling ? 'translateY(-100%)' : 'translateY(0)',
    transition: 'transform 0.3s ease-in-out',
  };

  return (
    <>
      <header className='header' style={headerStyle}>
        <div className='logo'>
          <a href="#" onClick={handleClick(main)}>
            <img src="logo-3.png" alt="Tomas Morinigo logo" />
          </a>
        </div>
        <div className='nav'>
          <ul>
            <li><a onClick={handleClick(about)} href='#'>About</a></li>
            <li><a onClick={handleClick(skills)} href="#">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#" id="resume"><span>Resume</span></a></li>
          </ul>
        </div>
      </header>

      <main className="main" id="main" ref={main}>
        <section className='main-section'>
          <p>Hi, I&apos;m</p>
          <h1>Tomas Morinigo</h1>
          <h2>A <span  className='text-hover'>Full-Stack Web Developer</span> with Java, Spring and React</h2>
        </section>
        <a onClick={handleClick(about)} href='#'>
          <svg className="arrows">
            <path className="a1" d="M0 0 L30 32 L60 0"></path>
            <path className="a2" d="M0 20 L30 52 L60 20"></path>
            <path className="a3" d="M0 40 L30 72 L60 40"></path>
          </svg>
        </a>
      </main>

      <aside className='aside-social'>
        <a href="https://github.com/tomimorinigo">
              <i className="fa-brands fa-github"></i>
          </a>
        <a href="https://www.linkedin.com/in/tomas-morinigo-3508a9204/">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        <a href="mailto:morinigotomas1@gmail.com">
            <i className="fa-solid fa-envelope"></i>
          </a>
          <hr className="white-line" />
      </aside>

      <section className='about' id="about" ref={about}>
        <div className="title">
          <h3>About me</h3>
          <hr />
        </div>

        <div className="about-content">
          <p>
            Hi! I&apos;m Tomas, a <span>Full-Stack Web Developer</span> with Java, Spring and React as main technologies, 
            with extra knowledge in HTML, CSS, Javascript, Git / Github, SQL, Linux and agile methodologies. <br /> <br />
            I&apos;m currently in my 3rd year of <span>Systems Engineering</span> at UTN FRC, and I&apos;m training on my own 
            in new technologies. <br /> <br />
            I consider myself a person ready to face new challenges, along with my desire to constantly learn 
            and my easy adaptability to new environments. <br /> <br />
            I&apos;m currently <span>looking for new opportunities</span> that allow me to grow professionally and as a person.
          </p>
          <div className='img-wrapper'>
            <div className='filter'></div>
            <img src="profile.jpg" alt="Tomas Morinigo Profile" />
          </div>
        </div>
      </section>

      <section className='skills' id='skills' ref={skills}>
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
    </>
  )
}

export default App
