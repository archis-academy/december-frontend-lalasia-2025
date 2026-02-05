import React, { useState, useRef } from 'react';
import './HeroSection.scss';

const AboutUs: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
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
          <div className={`video-container ${isPlaying ? 'is-playing' : ''}`}>
            <video 
              ref={videoRef}
              className="main-video"
              onPause={() => setIsPlaying(false)}
              onPlay={() => setIsPlaying(true)}
              controls={isPlaying} // Oynatılmaya başlandığında varsayılan kontrolleri göster
            >
              <source src="/assets/videos/hero.mp4" type="video/mp4" />
              Tarayıcınız video etiketini desteklemiyor.
            </video>
            
            {!isPlaying && (
              <button className="play-overlay-button" onClick={handlePlay}>
                <div className="play-icon"></div>
              </button>
            )}

            {/* Tasarımdaki özel ilerleme çubuğu (Sadece video durduğunda veya dekoratif olarak) */}
            {!isPlaying && (
              <div className="video-controls-overlay">
                <span className="time">00:00</span>
                <div className="progress-bar">
                  <div className="progress-filled" style={{ width: '40%' }}></div>
                </div>
                <span className="time">00:10</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;