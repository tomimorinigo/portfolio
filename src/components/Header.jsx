// eslint-disable-next-line react/prop-types
function Header({ handleClick, scrolling, main, about, skills }) {
  const headerStyle = {
    transform: scrolling ? "translateY(-100%)" : "translateY(0)",
    transition: "transform 0.3s ease-in-out",
  };

  return (
    <header className="header" style={headerStyle}>
      <div className="logo">
        <a href="#" onClick={handleClick(main)}>
          <img src="/me/logo-3.png" alt="Tomas Morinigo logo" />
        </a>
      </div>
      <div className="nav">
        <ul>
          <li>
            <a onClick={handleClick(about)} href="#">
              About
            </a>
          </li>
          <li>
            <a onClick={handleClick(skills)} href="#">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#" id="resume">
              <span>Resume</span>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
