import React from 'react';

const Contact = () => {
  const contactInfo = [
    { label: 'Email', value: 'john.doe@email.com' },
    { label: 'Phone', value: '+1 (555) 123-4567' },
    { label: 'LinkedIn', value: 'linkedin.com/in/johndoe' },
    { label: 'GitHub', value: 'github.com/johndoe' }
  ];

  return (
    <div className="contact-section">
      <h2>Contact Me</h2>
      <div className="contact-content">
        <div className="contact-info">
          {contactInfo.map((item, index) => (
            <div key={index} className="contact-item">
              <strong>{item.label}:</strong> {item.value}
            </div>
          ))}
        </div>
        <img 
          src="https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=400&h=300&fit=crop" 
          alt="Contact illustration" 
          className="contact-image"
        />
      </div>
    </div>
  );
};

export default Contact;
