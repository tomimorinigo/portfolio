import "./App.css";
import { useRef } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import AsideSocial from "./components/AsideSocial";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectsSection from "./components/ProjectsSection";
import Loader from "./components/Loader";
import { handleClickScroll, useScroll } from "./scripts/scroll";
import { useIntersectionObserver } from "./scripts/useIntersectionObserver";
import { useState, useEffect } from "react";

function App() {
  // Refs
  const mainRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  // Customs Hooks
  const { scrolling } = useScroll();
  const viewPortInContact = useIntersectionObserver(contactRef);

  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Mostrar el contenido después de la carga
    if (!isLoading) {
      setShowContent(true);
    }
  }, [isLoading]);

  return (
    <div className={`${showContent ? 'fade-in' : ''}`}>
      {isLoading ? (
        <Loader showContent={showContent} />
      ) : (
        <>
          <Header
            handleClick={handleClickScroll}
            scrolling={scrolling}
            main={mainRef}
            about={aboutRef}
            skills={skillsRef}
            projects={projectRef}
            contact={contactRef}
          />

          <Main
            handleClick={handleClickScroll}
            main={mainRef}
            about={aboutRef}
          />

          <AsideSocial scrollState={viewPortInContact} />

          <AboutSection about={aboutRef} />

          <SkillsSection skills={skillsRef} />

          <ProjectsSection project={projectRef} />

          <Contact contact={contactRef} />

          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
