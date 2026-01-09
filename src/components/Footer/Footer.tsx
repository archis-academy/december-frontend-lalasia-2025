import React from "react";
import styles from "./Footer.module.scss";
import FooterColumn from "./FooterColumn";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      {/* Üst banner */}
      <div className={styles.topBanner}>
        <h2>Join with me to get special discount</h2>
        <button className={styles.ctaButton}>
          Learn More <span className={styles.arrow}>→</span>
        </button>
      </div>

      {/* Çizgi */}
      <div className={styles.divider}></div>

      {/* Logo + paragraf */}
      <div className={styles.logoSection}>
        <div className={styles.logoRow}>
          <img src="/images/Lalasia.png" alt="Lalasia Logo" />
          <h2>Lalasia</h2>
        </div>
        <p className={styles.paragraf}>
          Lalasia is digital agency that help you make better <br />
          experience iaculis cras in.
        </p>
      </div>

      {/* En alttaki üçlü blok */}
      <div className={styles.bottomColumns}>
        <div className={styles.spacer}>
          <div className={`${styles.column} ${styles.productColumn}`}>
            <FooterColumn
              title="Product"
              items={[
                "New Arrivals",
                "Best Selling",
                "Home Decor",
                "Kitchen Set",
              ]}
            />
          </div>
          <div className={styles.column}>
            <FooterColumn
              title="Services"
              items={["Catalog", "Blog", "FAQ", "Pricing"]}
            />
          </div>
          <div className={styles.column}>
            <FooterColumn
              title="Follow Us"
              items={["Facebook", "Instagram", "Twitter"]}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
