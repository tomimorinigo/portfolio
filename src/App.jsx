import './App.css'
import { useRef } from 'react'
import Header from './components/Header';
import Main from './components/Main';
import AsideSocial from './components/AsideSocial';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import { handleClickScroll, useScroll } from './scripts/scroll';

function App() {

  const mainRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  
  const {scrolling} = useScroll();

  return (
    <>
      <Header 
        handleClick={handleClickScroll} 
        scrolling={scrolling} 
        main={mainRef} 
        about={aboutRef} 
        skills={skillsRef}
      />

      <Main  
        handleClick={handleClickScroll}
        main={mainRef} 
        about={aboutRef}
      />

      <AsideSocial />

      <AboutSection about={aboutRef}/>

      <SkillsSection skills={skillsRef}/>
    </>
  )
}

export default App
