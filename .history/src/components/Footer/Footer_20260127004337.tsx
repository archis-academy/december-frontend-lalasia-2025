import React from 'react';
import './Footer.scss';

const Footer: React.FC = () => {
  const handleNavigation = () => {
    window.open('https://www.google.com', '_blank');
  };

  return (
    <footer className="footer-wrapper">
      <div className="footer-container">
        
      
        <div className="footer-cta">
          <h2 className="cta-text">Join with me to get special discount</h2>
          <button 
            className="cta-btn" 
            onClick={handleNavigation} 
            type="button"
          >
            Learn More <span className="arrow">→</span>
          </button>
        </div>

        <hr className="footer-line" />

        
        <div className="footer-main">
          
        
          <div className="footer-brand">
            <div className="brand-logo">
              <img 
                src="/icons/Frame.svg" 
                alt="Lalasia Logo" 
                className="logo-img" 
              />
              <span className="logo-text">Lalasia</span>
            </div>
            <p className="brand-desc">
              Lalasia is digital agency that help you make better experience iaculis cras in.
            </p>
          </div>

       
          <div className="footer-links-group">
            <div className="link-col">
              <h4>Product</h4>
              <a href="#new">New Arrivals</a>
              <a href="#best">Best Selling</a>
              <a href="#home">Home Decor</a>
              <a href="#kitchen">Kitchen Set</a>
            </div>
            <div className="link-col">
              <h4>Services</h4>
              <a href="#catalog">Catalog</a>
              <a href="#blog">Blog</a>
              <a href="#faq">FaQ</a>
              <a href="#pricing">Pricing</a>
            </div>
            <div className="link-col">
              <h4>Follow Us</h4>
              <a href="#fb">Facebook</a>
              <a href="#ig">Instagram</a>
              <a href="#tw">Twitter</a>
            </div>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;