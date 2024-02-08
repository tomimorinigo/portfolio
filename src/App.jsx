import "./App.css";
import { useRef } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import AsideSocial from "./components/AsideSocial";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { handleClickScroll, useScroll } from "./scripts/scroll";
import { useIntersectionObserver } from "./scripts/useIntersectionObserver";

function App() {
  const mainRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  const { scrolling } = useScroll();
  const viewPortInContact = useIntersectionObserver(contactRef);

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

      <Main handleClick={handleClickScroll} main={mainRef} about={aboutRef} />

      <AsideSocial scrollState={viewPortInContact} />

      <AboutSection about={aboutRef} />

      <SkillsSection skills={skillsRef} />

      <Contact contact={contactRef} />

      <Footer />
    </>
  );
}

export default App;
