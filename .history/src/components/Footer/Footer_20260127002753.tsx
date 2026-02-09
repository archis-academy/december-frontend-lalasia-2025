import React from 'react';
import './Footer.scss';

const Footer: React.FC = () => {
  // Yönlendirme Fonksiyonu
  const handleNavigation = () => {
    // Örnek: Dış bir linke gitmek için
    window.location.href = 'https://google.com'; 
    
    // VEYA React Router kullanıyorsan:
    // navigate('/target-page');
  };

  return (
    <footer className="footer-wrapper">
      <div className="footer-container">
        
        {/* CTA Section */}
        <div className="footer-cta">
          <h2 className="cta-text">Join with me to get special discount</h2>
          {/* Tıklanabilir Buton */}
          <button className="cta-btn" onClick={handleNavigation} type="button">
            Learn More <span className="arrow">→</span>
          </button>
        </div>

        <hr className="footer-line" />

        <div className="footer-main">
          {/* Logo Bölümü */}
          <div className="footer-brand">
            <div className="brand-logo">
              <div className="logo-icon"></div>
              <span className="logo-text">Lalasia</span>
            </div>
            <p className="brand-desc">
              Lalasia is digital agency that help you make better experience iaculis cras in.
            </p>
          </div>

          {/* Link Grupları */}
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