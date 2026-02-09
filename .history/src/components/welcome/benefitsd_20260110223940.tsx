import React from 'react';
import './Benefits.scss';

interface BenefitCard {
  id: number;
  title: string;
  description: string;
  iconUrl: string; 
  isActive?: boolean;
}

const benefitsData: BenefitCard[] = [
  {
    id: 1,
    title: "Many Choices",
    description: "Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non.",
    iconUrl: "/icons/calendar-icon.svg",
  },
  {
    id: 2,
    title: "Fast and On Time",
    description: "Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non.",
   iconUrl: "https://img.icons8.com/fluency/48/calendar.png",
  },
  {
    id: 3,
    title: "Affordable Price",
    description: "Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non.",
    iconUrl: "https://img.icons8.com/fluency/48/wallet.png",
    isActive: true,
  }
];

const Benefits: React.FC = () => {
  return (
    <section className="benefits-section">
      <div className="container">
        <div className="header-wrapper">
          <div className="title-area">
            <span className="subtitle">Benefits</span>
            <h2 className="main-title">Benefits when using our services</h2>
          </div>
          <div className="description-area">
            <p>Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non purus parturient.</p>
          </div>
        </div>

        <div className="benefits-grid">
          {benefitsData.map((benefit) => (
            <div 
              key={benefit.id} 
              className={`benefit-card ${benefit.isActive ? 'active' : ''}`}
            >
              <div className="icon-container">
               
                <img src={benefit.iconUrl} alt={benefit.title} className="benefit-icon" />
              </div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;