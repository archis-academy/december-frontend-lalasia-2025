import React from 'react';
import './Footer.scss';

const Footer: React.FC = () => {
  // Butona tıklandığında çalışacak fonksiyon
  const handleLearnMore = () => {
    alert("Yönlendiriliyorsunuz...");
    // window.location.href = "/details"; // Gerçek bir yönlendirme için
  };

  return (
    <footer className="footer-container">
      <div className="cta-section">
        <h2 className="cta-title">Join with me to get special discount</h2>
        
        {/* Tıklanabilir Buton */}
        <button 
          className="cta-button" 
          onClick={handleLearnMore}
          aria-label="Learn more about discounts"
        >
          Learn More <span className="arrow">→</span>
        </button>
      </div>

      <hr className="divider" />

      <div className="footer-content">
        <div className="brand-section">
          <div className="logo-wrapper">
             <div className="logo-icon">
                {/* Basit bir SVG logo temsili */}
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                </svg>
             </div>
            <span className="brand-name">Lalasia</span>
          </div>
          <p className="brand-description">
            Lalasia is digital agency that help you make better experience iaculis cras in.
          </p>
        </div>

        <div className="links-section">
          {/* Linkleri bir dizi olarak map'lemek daha temizdir */}
          <div className="link-column">
            <h3>Product</h3>
            <ul>
              {["New Arrivals", "Best Selling", "Home Decor", "Kitchen Set"].map(item => (
                <li key={item}><a href={`#${item}`}>{item}</a></li>
              ))}
            </ul>
          </div>

          <div className="link-column">
            <h3>Services</h3>
            <ul>
              {["Catalog", "Blog", "FaQ", "Pricing"].map(item => (
                <li key={item}><a href={`#${item}`}>{item}</a></li>
              ))}
            </ul>
          </div>

          <div className="link-column">
            <h3>Follow Us</h3>
            <ul>
              {["Facebook", "Instagram", "Twitter"].map(item => (
                <li key={item}><a href={`#${item}`}>{item}</a></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;