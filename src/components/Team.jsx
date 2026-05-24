import React from 'react';
import './Team.css';

const teamMembers = [
  {
    id: 1,
    name: 'Muhammad Ali',
    role: 'Founder',
    desc: 'Establishing the vision and groundwork for welfare initiatives.'
  },
  {
    id: 2,
    name: 'Muhammad Abubakar Ejaz',
    role: 'Founder',
    desc: 'Overseeing funding channels to guarantee donor transparency.'
  },
  {
    id: 3,
    name: 'Syed Abdul Hadi Usman',
    role: 'Chief Executive Officer',
    desc: 'Executing the structured roadmap and ensuring zero-waste policies.'
  }
];

const Team = () => {
  return (
    <section id="leadership" className="team-section">
      <div className="container">
        <h2 className="section-title text-center">Leadership & Trust</h2>
        <div className="team-grid">
          {teamMembers.map(member => (
            <div key={member.id} className="team-card">
              <div className="team-avatar-placeholder"></div>
              <h3 className="team-name">{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <p className="team-desc">{member.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;