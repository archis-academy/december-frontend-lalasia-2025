import React, { useRef, useState } from 'react';
import './HeroSection.scss';

const AboutVideo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const currentProgress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(currentProgress);
    }
  };

  return (
    <section className="about-section">
      <div className="container">
        <header className="about-header">
          <h1>About Us</h1>
          <p>
            We display products based on the latest products we have, if you want 
            to see our old products please enter the name of the item
          </p>
        </header>

        <div className="video-wrapper">
          <video 
            ref={videoRef}
            onTimeUpdate={handleTimeUpdate}
            className="main-video"
            poster="/path-to-your-thumbnail.jpg" // Video yüklenene kadar görünecek resim
          >
            <source src="/3252148-uhd_3840_2160_25fps.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Orta Play Butonu */}
          {!isPlaying && (
            <button className="play-overlay-btn" onClick={togglePlay}>
              <div className="play-icon"></div>
            </button>
          )}

          {/* Video Kontrolleri (Tasarımındaki gibi) */}
          <div className="video-controls">
            <span className="time">01:40</span>
            <div className="progress-bar-container">
              <div 
                className="progress-fill" 
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <span className="time">03:52</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutVideo;