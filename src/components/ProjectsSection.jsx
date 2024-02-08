/* eslint-disable react/prop-types */
import Project from "./Project";
import "../assets/styles/ProjectsSection.css";

function ProjectsSection({project}) {
  return (
    <section className="projects" ref={project}>
      <div className="title">
        <h3>Projects</h3>
        <hr />
      </div>
      <div className="projects-content">
        <Project
          title={"Movie search"}
          description={"A movie search engine that shows movies in real time"}
          image={"/projects/movie-search.png"}
          technologies={["React", "CSS", "JSX", "HTML", "API REST"]}
          link={"https://www.tomasmorinigo.dev/"}
          githubLink={"https://github.com/tomimorinigo/"}
          direction={"left"}
        />
        <Project
          title={"Movie search"}
          description={"A movie search engine that shows movies in real time"}
          image={"/projects/movie-search.png"}
          technologies={["React", "CSS", "JSX", "HTML", "API REST"]}
          link={"https://www.tomasmorinigo.dev/"}
          githubLink={"https://github.com/tomimorinigo/"}
          direction={"right"}
        />
        <Project
          title={"Movie search"}
          description={"A movie search engine that shows movies in real time"}
          image={"/projects/movie-search.png"}
          technologies={["React", "CSS", "JSX", "HTML", "API REST"]}
          link={"https://www.tomasmorinigo.dev/"}
          githubLink={"https://github.com/tomimorinigo/"}
          direction={"left"}
        />
      </div>
    </section>
  );
}

export default ProjectsSection;
