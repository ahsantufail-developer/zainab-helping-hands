import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import heroImage from '../assets/screenshot.png';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        <div className="hero-grid">
          <div className="hero-content">
            <h1 className="hero-title">
              Together, We Can Bring Hope to Those Who Need It Most.
            </h1>
            <p className="hero-subtitle">
              Structured welfare. Verified families. Documented proof. We deliver your Amanah exactly where it is needed.
            </p>
            <div className="hero-cta-group">
              <a href="#donate" className="btn btn-primary hero-btn">
                Make a Donation <ArrowRight size={18} />
              </a>
            </div>
          </div>
          
          <div className="hero-image-wrapper">
            <img src={heroImage} alt="Zainab Helping Hands" className="hero-main-image" />
            <div className="floating-card card-1">
              <div className="card-stat">1,500+</div>
              <div className="card-text">Families Helped</div>
            </div>
            <div className="floating-card card-2">
              <div className="card-stat">100%</div>
              <div className="card-text">Documented Proof</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;