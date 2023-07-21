import React from "react";
import user from "../data/user";
function ProjectItem({ name, about, technologies }) {
  return (
<div>
      {user.projects.map((project) => (
        <div className="project-item" key={project.id}>
          <h3>{project.name}</h3>
          <p>{project.about}</p>
          <div className="technologies">
            {project.technologies.map((technology, index) => (
              <span key={index}>{technology}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectItem;
