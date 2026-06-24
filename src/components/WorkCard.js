import "./WorkCardStyles.css";
import React from "react";

const WorkCard = ({ projects, title, intro, showGallery = false }) => {
  return (
    <section className="projects-shell section">
      <div className="section-heading">
        {title ? <span className="section-kicker">Selected Work</span> : null}
        {title ? <h2>{title}</h2> : null}
        {intro ? <p>{intro}</p> : null}
      </div>

      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.id}>
            <div className="project-cover">
              <img src={project.coverImage} alt={project.title} />
            </div>

            <div className="project-copy">
              <div className="project-meta">
                <span>{project.category}</span>
                <a href={project.liveUrl} target="_blank" rel="noreferrer">
                  Visit Live Site
                </a>
              </div>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-summary">{project.summary}</p>

              <ul className="project-highlights">
                {project.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <div className="project-tags">
                {project.tech.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              {showGallery ? (
                <div className="project-gallery">
                  {project.gallery.map((image, index) => (
                    <div className="gallery-shot" key={`${project.id}-${index}`}>
                      <img src={image} alt={`${project.title} screenshot ${index + 1}`} />
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default WorkCard;
