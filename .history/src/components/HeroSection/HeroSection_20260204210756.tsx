import React, { useState } from 'react';
import './HeroSection.scss';

const AboutUs: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="about-section">
      <div className="content">
        <h2 className="title">About Us</h2>
        <p className="subtitle">
          We display products based on the latest products we have, if you want 
          to see our old products please enter the name of the item
        </p>
      </div>

      <div className="video-container">
        {/* Kontrolleri olan gerçek bir video elementi */}
        <video 
          className="main-video"
          poster="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200"
          controls={isPlaying}
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
          Tarayıcınız video etiketini desteklemiyor.
        </video>

        {!isPlaying && (
          <button className="custom-play-button" onClick={() => setIsPlaying(true)}>
            <div className="play-icon"></div>
          </button>
        )}
      </div>
    </section>
  );
};

export default AboutUs;