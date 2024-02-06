import './App.css'
import { useRef, useState, useEffect } from 'react'
import Header from './components/Header';
import Main from './components/Main';
import AsideSocial from './components/AsideSocial';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import Contact from './components/Contact';
import { handleClickScroll, useScroll } from './scripts/scroll';

function App() {

  const [scrollPosition, setScrollPosition] = useState(0);
  const [valorEstado, setValorEstado] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
      
      // Cambiar el valor del estado cuando se llega a cierto punto del scroll
      if (position > 2100) { // Cambia 500 por el punto específico en el que deseas cambiar el estado
        setValorEstado(true);
      } else {
        setValorEstado(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    console.log(scrollPosition);
    console.log(valorEstado);

    // Eliminar el event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition, valorEstado]);

  const mainRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);
  
  const {scrolling} = useScroll();


  return (
    <>
      <Header 
        handleClick={handleClickScroll} 
        scrolling={scrolling} 
        main={mainRef} 
        about={aboutRef} 
        skills={skillsRef}
        contact={contactRef}
      />

      <Main  
        handleClick={handleClickScroll}
        main={mainRef} 
        about={aboutRef}
      />

      <AsideSocial scrollState={valorEstado} />
      
      <AboutSection about={aboutRef}/>

      <SkillsSection skills={skillsRef}/>

      <Contact contact={contactRef}/>
    </>
  )
}

export default App
