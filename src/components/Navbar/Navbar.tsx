import React from 'react'
import styles from './Navbar.module.scss';
import { useState } from "react";
import { useLocation } from "react-router";

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
                <img src="/images/navbar-image/navbar-logo.png"  />
                <div className={styles.logoBrand}>
                Lalasia
                </div>
            </div>
            <div className={`${styles.linkArea} ${isMenuOpen ? styles.open : ""}`}>
      <a href="/products" className={isActive("/products") ? styles.active : ""}>Product</a>
      <a href="/services" className={isActive("/services") ? styles.active : ""}>Services</a>
      <a href="/articles" className={isActive("/articles") ? styles.active : ""}>Article</a>
      <a href="/about-us" className={isActive("/about-us") ? styles.active : ""}>About Us</a>
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
        <button className={`${styles.hamburgerMenu} ${isMenuOpen ? styles.active : ""}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        </div>
        </header>
    );
};

export default Navbar;