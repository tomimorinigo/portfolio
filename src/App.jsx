import './App.css'

function App() {

  return (
    <>
      <header className='header'>
        <div className='logo'>
          <img src="logo.png" alt="Tomas Morinigo logo" />
        </div>
        <div className='nav'>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#">Resume</a></li>
          </ul>
        </div>
      </header>
      <main className="main">
        <h1>Tomas Morinigo</h1>
        <div className='main__center'>
          <h2>Work in progress</h2>
          <p>Soon my personal portfolio will be available! <br />
          Thank you for visiting my website
          </p>

          <ul className='social-media'>
            <li><a href="https://github.com/tomimorinigo">
                <i className="fa-brands fa-github"></i>
              </a></li>
            <li><a href="https://www.linkedin.com/in/tomas-morinigo-3508a9204/">
                <i className="fa-brands fa-linkedin"></i>
              </a></li>
            <li><a href="mailto:morinigotomas1@gmail.com">
                <i className="fa-solid fa-envelope"></i>
              </a></li>
          </ul>

        </div>
      </main>
    </>
    
  )
}

export default App
