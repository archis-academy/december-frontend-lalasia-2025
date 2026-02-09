import React from 'react';
import './Footer.scss';

const Footer: React.FC = () => {
  return (
    <footer className="footer-wrapper">
      <div className="footer-container">
        
        {/* Üst Kısım: CTA Bölümü */}
        <div className="footer-cta">
          <h2 className="cta-text">Join with me to get special discount</h2>
          <button className="cta-btn" onClick={() => console.log("Tıklandı!")}>
            Learn More <span className="arrow">→</span>
          </button>
        </div>

        <hr className="footer-line" />

        {/* Alt Kısım: İçerik */}
        <div className="footer-main">
          {/* Sol: Logo ve Açıklama */}
          <div className="footer-brand">
            <div className="brand-logo">
              <span className="logo-box"></span>
              <span className="logo-text">Lalasia</span>
            </div>
            <p className="brand-desc">
              Lalasia is digital agency that help you make better experience iaculis cras in.
            </p>
          </div>

          {/* Sağ: Link Grupları */}
          <div className="footer-links-group">
            <div className="link-col">
              <h4>Product</h4>
              <a href="#">New Arrivals</a>
              <a href="#">Best Selling</a>
              <a href="#">Home Decor</a>
              <a href="#">Kitchen Set</a>
            </div>
            <div className="link-col">
              <h4>Services</h4>
              <a href="#">Catalog</a>
              <a href="#">Blog</a>
              <a href="#">FaQ</a>
              <a href="#">Pricing</a>
            </div>
            <div className="link-col">
              <h4>Follow Us</h4>
              <a href="#">Facebook</a>
              <a href="#">Instagram</a>
              <a href="#">Twitter</a>
            </div>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;