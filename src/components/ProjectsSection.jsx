/* eslint-disable react/prop-types */
import Project from "./Project";
import "../assets/styles/ProjectsSection.css";

function ProjectsSection({project}) {
  return (
    <section className="projects" ref={project}>
      <div className="title" >
        <h3>Projects</h3>
        <hr />
      </div>
      <div className="projects-content" >
        
        <Project
          title={"CRUD JWT Spring"}
          description={"CRUD of products and clients carried out in Spring boot and React. With session management and authentication using JWT and Spring Security"}
          image={"/projects/crud-jwt-spring.jpg"}
          technologies={["Spring", "React", "JWT", "Security"]}
          githubLink={"https://github.com/tomimorinigo/google-clon"}
          direction={"left"}
        />
        <Project
          title={"Google Clon"}
          description={"A Google clone built with spring and hibernate, using spiders to index websites."}
          image={"/projects/google-clon.jpg"}
          technologies={["Spring", "Java", "Hibernate", "Spiders"]}
          githubLink={"https://github.com/tomimorinigo/google-clon"}
          direction={"right"}
        />
        <Project
          title={"Movie search"}
          description={"A movie search engine that shows movies in real time"}
          image={"/projects/movie-search.png"}
          technologies={["React", "CSS", "JSX", "HTML"]}
          link={"https://movies-searcher-tomas.netlify.app/"}
          githubLink={"https://github.com/tomimorinigo/mini-projects-react/tree/main/projects/05-movie-search"}
          direction={"left"}
        />
        <Project
          title={"NBU calculator"}
          description={"NBU calculator for laboratory budgets in Argentina. Created with Electron, for a client in the industry"}
          image={"/projects/nbu-calculator.jpg"}
          technologies={["Electron", "JS", "NodeJs", "CSS"]}
          githubLink={"https://github.com/tomimorinigo/nbu-calculator"}
          direction={"right"}
        />
      </div>
    </section>
  );
}

export default ProjectsSection;
