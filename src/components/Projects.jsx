import { projects } from "../data";

export default function Projects() {
  return (
    <section className="alt" id="projects">
      <div className="wrap">
        <div className="section-head">
          <span className="path mono">~/projects</span>
          <h2>Featured Projects</h2>
        </div>
        <div className="proj-grid">
          {projects.map((project) => (
            <div className="proj-card" key={project.title}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="proj-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
