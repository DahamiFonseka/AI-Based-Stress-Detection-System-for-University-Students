import React from 'react';
import './aboutUs.css';

const teamMembers = [
  {
    name: 'Dahami Sankalpani',
    role: 'Team Leader',
    photo: require('../img/Dahami.jpg'),
  },
  {
    name: 'Gaviru Nimtharu',
    role: 'AI/Backend Developer',
    photo: require('../img/Nimtharu.jpg'),
  },
  {
    name: 'Mohommad Nazik',
    role: 'Frontend Developer',
    photo: require('../img/Nazik.jpg'),
  },
  {
    name: 'Lalitha Sri Vidhara',
    role: 'Backend/AI Developer',
    photo: require('../img/Lalitha.jpg'),
  },
  
];

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1>About Us</h1>
      <p>We are Group 11, a team of dedicated individuals collaborating to create a powerful stress detection system.</p>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member-card">
            <img src={member.photo} alt={`${member.name}`} className="member-photo" />
            <h2>{member.name}</h2>
            <h3>{member.role}</h3>
            <p>{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
