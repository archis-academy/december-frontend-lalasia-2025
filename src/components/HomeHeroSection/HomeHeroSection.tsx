import styles from './HomeHeroSection.module.scss';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        
        <div className={styles.contentWrapper}>
          <img 
            className={styles.arrowIcon} 
            src="/hero-home/vector.svg" 
            alt="Arrow Decor" 
          />
          <img 
            className={styles.starIcon} 
            src="/hero-home/star.svg" 
            alt="Star Decor" 
          />
          
          <h1 className={styles.title}>
            Discover Furniture With High Quality Wood
          </h1>

          <p className={styles.description}>
            Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non. Purus parturient viverra nunc, tortor sit laoreet. Quam tincidunt aliquam adipiscing tempor.
          </p>

          <div className={styles.searchBarWrapper}>
             <div className={styles.searchBar}>
                <img className={styles.searchIcon} src="/hero-home/search.svg" alt="Search" />
                <input type="text" placeholder="Search property" />
                <button>Search</button>
             </div>
          </div>
        </div>

        <div className={styles.imageWrapper}>
          <img src="/hero-home/home.png" alt="Hero Home" />
        </div>

      </div>
    </section>
  );
};

export default Hero;