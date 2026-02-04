import React, { useState } from 'react';
import './HeroSection.scss';

const AboutSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const toggleVideo = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="about-section">
      <div className="container">
        <header className="about-header">
          <h2 className="title">About Us</h2>
          <p className="description">
            We display products based on the latest products we have, if you want 
            to see our old products please enter the name of the item
          </p>
        </header>

        <div className="video-wrapper">
          <div className="video-container">
            {/* Arka plan görseli veya Video elementi buraya gelecek */}
            <img 
              src="./videos/hero.mp4" 
              alt="Team working" 
              className="video-poster"
            />
            
            <button className={`play-button ${isPlaying ? 'playing' : ''}`} onClick={toggleVideo}>
              <div className="play-icon"></div>
            </button>

            <div className="video-controls">
              <span className="time">01:40</span>
              <div className="progress-bar">
                <div className="progress-filled" style={{ width: '40%' }}></div>
              </div>
              <span className="time">03:52</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;