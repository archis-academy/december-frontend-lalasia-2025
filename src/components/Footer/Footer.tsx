import React from "react";
import styles from "./Footer.module.scss";
import FooterColumn from "./FooterColumn";
import { FooterIcon, FooterLine } from "./FooterIcon";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.topBanner}>
        <h2>Join with me to get special discount</h2>
        <button className={styles.ctaButton}>
          Learn More <span className={styles.arrow}>→</span>
        </button>
      </div>

      <FooterLine />

      <div className={styles.columns}>
        {/* SOL TARAF */}
        <div className={styles.logoSection}>
          <div className={styles.logoRow}>
            <FooterIcon />
            <h2>Lalasia</h2>
          </div>
          <p>
            Lalasia is digital agency that help you make better <br />
            experience iaculis cras in.
          </p>
        </div>

        {/* SAĞ TARAF — ÜÇ KOLON BURADA OLMALI */}
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
