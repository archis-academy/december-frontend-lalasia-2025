import React from "react";
import "./AboutUsHero.scss";

interface AboutUsHeroProps {
  title?: string;
  description?: string;
  videoSrc: string;
}

const AboutUsHero: React.FC<AboutUsHeroProps> = ({
  title = "About Us",
  description = `We display products based on the latest products we have. 
If you want to see our old products please enter the name of the item.`,
  videoSrc,
}) => {
  return (
    <section className="about-hero">
      <div className="about-hero__container">
        <div className="about-hero__content">
          <h1 className="about-hero__title">{title}</h1>
          <p className="about-hero__description">{description}</p>
        </div>

        <div className="about-hero__video-wrapper">
          <video
            className="about-hero__video"
            src={videoSrc}
            controls
            preload="metadata"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUsHero;