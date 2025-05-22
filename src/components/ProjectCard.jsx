// File: src/components/ProjectCard.jsx
import React from 'react';

function ProjectCard({ title, image, description, tech, link }) {
  return (
    <div className="project-card">
      {image && <img src={image} alt={`${title} screenshot`} />}
      <div className="project-info">
        <h3>{title}</h3>
        <p>{description}</p>
        {tech && <p><strong>Tech:</strong> {tech}</p>}
        {link && <p><a href={link} target="_blank" rel="noopener noreferrer">View More →</a></p>}
      </div>
    </div>
  );
}

export default ProjectCard;