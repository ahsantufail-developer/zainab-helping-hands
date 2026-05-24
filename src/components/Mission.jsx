import React from 'react';
import { ShieldCheck, FileText, Camera } from 'lucide-react';
import './Mission.css';

const Mission = () => {
  return (
    <section id="mission" className="mission-section">
      <div className="container">
        <div className="mission-header">
          <h2 className="section-title">We Don't Just Collect Donations.</h2>
          <h2 className="section-title title-highlight">We Deliver Proof.</h2>
        </div>
        
        <div className="mission-layout">
          <div className="mission-card chapter-1">
            <ShieldCheck className="mission-icon" size={32} />
            <h3>Chapter 1: Field Verification</h3>
            <p>Every case is assessed on the ground before approval.</p>
          </div>
          <div className="mission-card chapter-2">
            <FileText className="mission-icon" size={32} />
            <h3>Chapter 2: Documented Records</h3>
            <p>We maintain meticulous files to ensure absolute accountability.</p>
          </div>
          <div className="mission-card chapter-3">
            <Camera className="mission-icon" size={32} />
            <h3>Chapter 3: The Proof</h3>
            <p>Visual confirmation of your impact is always secured.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;