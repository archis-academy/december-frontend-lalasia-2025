import React from "react";
import styles from "./Navbar.module.scss";
import { useState } from "react";
import { useLocation } from "react-route";
import { Link } from "react-router-do";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className={styles.navbarSection}>
      <div className={styles.logoArea}>
        <Link
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <img src="/images/navbar-image/navbar-logo.png" />

          <div className={styles.logoBrand}>Lalasia</div>
        </Link>
      </div>
      <div className={`${styles.linkArea} ${isMenuOpen ? styles.open : ""}`}>
        <Link
          to="/products"
          className={isActive("/products") ? styles.active : ""}
        >
          Product
        </Link>
        <Link
          to="/services"
          className={isActive("/services") ? styles.active : ""}
        >
          Services
        </Link>
        <Link
          to="/articles"
          className={isActive("/articles") ? styles.active : ""}
        >
          Article
        </Link>
        <Link
          to="/about-us"
          className={isActive("/about-us") ? styles.active : ""}
        >
          About Us
        </Link>
      </div>
      <div className={styles.icon}>
        <button className={styles.iconButton}>
          <img src="./icons/navbar-icon/hangbag.svg" alt="hangbag-icon" />
        </button>
        <button className={styles.iconButton}>
          <img src="./icons/navbar-icon/userIcon.svg" alt="user-icon" />
        </button>
      </div>
      <div className={styles.hamburgerArea}>
        <button
          className={`${styles.hamburgerMenu} ${isMenuOpen ? styles.active : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
