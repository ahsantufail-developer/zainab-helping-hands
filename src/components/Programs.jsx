import React from 'react';
import './Programs.css';

const Programs = () => {
  return (
    <section id="campaigns" className="programs-section">
      <div className="container">
        <h2 className="section-title text-center">Active Campaigns</h2>
        <div className="programs-grid">
          <div className="program-card">
            <h3>Food & Nutrition</h3>
            <p>Delivering essential food packs and daily hot meals.</p>
          </div>
          <div className="program-card">
            <h3>Clean Water</h3>
            <p>Installing deep-bore handpumps in deprived villages.</p>
          </div>
          <div className="program-card">
            <h3>Family Support</h3>
            <p>Monthly rashan and emergency cash grants for widows.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;