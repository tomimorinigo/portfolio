import './App.css'

function App() {

  return (
    <>
      <header className='header'>
        <div className='logo'>
          <a href="/">
            <img src="logo-3.png" alt="Tomas Morinigo logo" />
          </a>
        </div>
        <div className='nav'>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#" id="resume"><span>Resume</span></a></li>
          </ul>
        </div>
      </header>

      <main className="main">
        <section className='main-section'>
          <p>Hi, I&apos;m</p>
          <h1>Tomas Morinigo</h1>
          <h2>A <span>Full-Stack Web Developer</span> with Java, Spring and React</h2>
        </section>
        <a href="#about">
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
    </>
  )
}

export default App
