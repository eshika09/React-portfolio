import React from 'react';

const About = () => {
  const skills = [
    "JavaScript", "React", "Node.js", "HTML5", "CSS3", 
    "MongoDB", "Git", "Responsive Design"
  ];

  return (
    <div className="about-section">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            I'm a passionate developer with 3+ years of experience in web development. 
            I enjoy creating efficient, scalable solutions and staying up-to-date with 
            the latest technologies.
          </p>
          <p>
            My journey started with curiosity about how websites work, and has evolved 
            into a career focused on creating meaningful digital experiences.
          </p>
        </div>
        <img 
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop" 
          alt="Coding workspace" 
          className="about-image"
        />
      </div>
      
      <div className="skills-container">
        <h3>Skills & Technologies</h3>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <span key={index} className="skill-tag">{skill}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
