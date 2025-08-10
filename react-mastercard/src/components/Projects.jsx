import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Website",
      description: "A responsive online shopping platform built with React and Node.js",
      tech: "React, Node.js, MongoDB",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A productivity app for managing daily tasks and projects",
      tech: "React, Firebase, CSS3",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Real-time weather information with location-based forecasts",
      tech: "JavaScript, API Integration, HTML5",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=250&fit=crop"
    }
  ];

  return (
    <div className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <img 
              src={project.image} 
              alt={project.title} 
              className="project-image"
            />
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-stack">{project.tech}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
