import React from 'react';
import './ProjectItem.css';

function ProjectItem({ title, description, technologies, backendLink, frontendLink, profileLink, deployedLink }) {
  return (
    <div className="project-item">
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        {technologies && (
          <div className="project-technologies">
            <h4>Technologien:</h4>
            <ul>
              {technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>
        )}
        <div className="project-links">
          {backendLink && (
            <a href={backendLink} target="_blank" rel="noopener noreferrer" className="project-link">
              Backend <span className="arrow-icon">→</span>
            </a>
          )}
          {frontendLink && (
            <a href={frontendLink} target="_blank" rel="noopener noreferrer" className="project-link">
              Frontend <span className="arrow-icon">→</span>
            </a>
          )}
          {deployedLink && (
            <a href={deployedLink} target="_blank" rel="noopener noreferrer" className="project-link">
              Live Demo <span className="arrow-icon">→</span>
            </a>
          )}
          {profileLink && (
            <a href={profileLink} target="_blank" rel="noopener noreferrer" className="project-link">
              GitHub Profil <span className="arrow-icon">→</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
