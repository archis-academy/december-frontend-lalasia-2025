import React from 'react'
import styles from './Navbar.module.scss';


const Navbar: React.FC = () => {
    return (
        <header className={styles.navbarSection}>
            <div className={styles.logoArea}>
                <img src="/images/navbar-image/navbar-logo.png"  />
                <div className={styles.logoBrand}>
                Lalasia
                </div>
            </div>
           <div className={styles.linkArea}>
         <a href="#" >Product</a>
         <a href="#" >Services</a>
         <a href="#" >Article</a>
         <a href="#" >About Us</a>
           </div>
          <div className={styles.buttonArea}>
                <button className={styles.navButtonBag}>
                    
                <button className={styles.navButtonUse}>
                  
                    </button>  
                </button>
            </div>
        </header>
    );
};

export default Navbar;