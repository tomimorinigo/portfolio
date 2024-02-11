/* eslint-disable react/prop-types */
import { useState } from 'react';
import '../assets/styles/Header.css';

function Header({ handleClick, scrolling, main, about, skills, projects , contact }) {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleClickMenu = (section, e) => {
    if(isMenuOpen){
      toggleMenu();
    }

    handleClick(section, e);
  }

  const headerStyle = {
    transform: scrolling ? "translateY(-100%)" : "translateY(0)",
    transition: "transform 0.3s ease-in-out",
  };

  const openPDF = () => {
    window.open('/me/cv.pdf', '_blank');
  };

  return (
    <header className="header" style={headerStyle}>
      <div className="logo">
        <a href="#" onClick={(e) => handleClickMenu(main, e)}>

          <img src="/me/logo-2.png" alt="Tomas Morinigo logo" />
        </a>
      </div>
      <div className="nav">
        <ul id='menu' className={`${isMenuOpen ? 'open' : ''}`}>
          <li>
            <a onClick={(e) => handleClickMenu(about, e)} href="#">
              About
            </a>
          </li>
          <li>
            <a onClick={(e) => handleClickMenu(skills, e)} href="#">
              Skills
            </a>
          </li>
          <li>
            <a onClick={(e) => handleClickMenu(projects, e)} href="#">Projects</a>
          </li>
          <li>
            <a onClick={(e) => handleClickMenu(contact, e)} href="#contact">Contact</a>
          </li>
          <li>
            <button className='special-button' onClick={openPDF}>
              <span>Resume</span>
            </button>
          </li>
        </ul>
        <button className={`menu-toggle ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <img src={isMenuOpen ? "/media/close.png" : "/media/menu.png"} alt="" />
        </button>
      </div>
    </header>
  );
}

export default Header;
