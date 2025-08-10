import React from 'react';

const Home = ({ setActiveSection }) => {
  return (
    <div className="home-section">
      <div className="hero-content">
        <img 
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face" 
          alt="Profile" 
          className="profile-image"
        />
        <h1 className="hero-title">Hi, I'm John Doe</h1>
        <p className="hero-subtitle">Full Stack Developer</p>
        <p className="hero-description">
          I create modern web applications with clean code and user-friendly designs. 
          Passionate about learning new technologies and solving complex problems.
        </p>
        <button 
          className="cta-button" 
          onClick={() => setActiveSection('contact')}
        >
          Get In Touch
        </button>
      </div>
    </div>
  );
};

export default Home;
