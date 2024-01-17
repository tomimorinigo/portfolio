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
