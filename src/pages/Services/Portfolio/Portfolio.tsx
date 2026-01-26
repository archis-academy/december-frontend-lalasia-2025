import React from 'react';
import './Portfolio.scss';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  size: 'large' | 'small';
}

const projects: Project[] = [
  {
    id: 1,
    title: "Siska Kohl’s Bedroom",
    description: "We start renovating her bedroom with minimalist...",
    image: "/images/Bedroom-1.png",
    size: "large"
  },
  {
    id: 2,
    title: "Jeruk Veldevana Living Room Design",
    description: "We start renovating her bedroom with minimalist...",
    image: "/images/room.png",
    size: "small"
  },
  {
    id: 3,
    title: "Cozy Co-working space",
    description: "We start renovating her bedroom with minimalist...",
    image: "/images/working-room.png",
    size: "small"
  }
];

const PortfolioSection: React.FC = () => {
  return (
    <section className="portfolio">
      <div className="portfolio__header">
        <div className="portfolio__title-group">
          <span className="portfolio__subtitle">Portofolio</span>
          <h2 className="portfolio__main-title">Amazing project we’ve done before</h2>
        </div>
        <div className="portfolio__intro">
          <p className="portfolio__description">
            Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non.
          </p>
          <a href="#portfolio" className="portfolio__link">View Portofolio</a>
        </div>
      </div>

      <div className="portfolio__grid">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className={`portfolio-card portfolio-card--${project.size}`}
          >
            <img src={project.image} alt={project.title} className="portfolio-card__image" />
            <div className="portfolio-card__overlay">
              <h3 className="portfolio-card__title">{project.title}</h3>
              <p className="portfolio-card__text">{project.description}</p>
              <a href="#" className="portfolio-card__detail-link">See Detail</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;