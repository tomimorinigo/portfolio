// eslint-disable-next-line react/prop-types
function Main({ main, about, handleClick }) {
  return (
    <main className="main" id="main" ref={main}>
      <section className="main-section">
        <p>Hi, I&apos;m</p>
        <h1>Tomas Morinigo</h1>
        <h2>
          A <span className="text-hover">Full-Stack Web Developer</span> with
          Java, Spring and React
        </h2>
      </section>
      <a onClick={handleClick(about)} href="#">
        <svg className="arrows">
          <path className="a1" d="M0 0 L30 32 L60 0"></path>
          <path className="a2" d="M0 20 L30 52 L60 20"></path>
          <path className="a3" d="M0 40 L30 72 L60 40"></path>
        </svg>
      </a>
    </main>
  );
}

export default Main;
