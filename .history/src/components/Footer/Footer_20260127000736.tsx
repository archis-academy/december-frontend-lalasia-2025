import React from 'react';
import './Footer.scss';

const Footer: React.FC = () => {
  return (
    <footer className="footer-container">
      {/* Üst Kısım: CTA (Call to Action) */}
      <div className="cta-section">
        <h2 className="cta-title">Join with me to get special discount</h2>
        <button className="cta-button">
          Learn More <span className="arrow">→</span>
        </button>
      </div>

      <hr className="divider" />

      {/* Alt Kısım: Linkler ve Logo */}
      <div className="footer-content">
        <div className="brand-section">
          <div className="logo-wrapper">
            <div className="logo-icon"></div> {/* Logo ikonu buraya gelecek */}
            <span className="brand-name">Lalasia</span>
          </div>
          <p className="brand-description">
            Lalasia is digital agency that help you make better experience iaculis cras in.
          </p>
        </div>

        <div className="links-section">
          <div className="link-column">
            <h3>Product</h3>
            <ul>
              <li>New Arrivals</li>
              <li>Best Selling</li>
              <li>Home Decor</li>
              <li>Kitchen Set</li>
            </ul>
          </div>

          <div className="link-column">
            <h3>Services</h3>
            <ul>
              <li>Catalog</li>
              <li>Blog</li>
              <li>FaQ</li>
              <li>Pricing</li>
            </ul>
          </div>

          <div className="link-column">
            <h3>Follow Us</h3>
            <ul>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Twitter</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;