import { useParams } from "react-router";
import { useData } from "@/hooks/useData";
import styles from './Hero.module.scss';

const Hero = () => {
  const { id } = useParams<{ id: string }>();
  const heroEndpoint = id ? `slides/${id}` : 'slides';
  const { data, isLoading, error } = useData<any>({ 
    endpoint: heroEndpoint 
  });

  if (isLoading || error) return null;

  const heroData = Array.isArray(data) ? data[0] : data;

  if (!heroData) return null;

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        
        <div className={styles.content}>
          <h1 className={styles.title}>
            {heroData.title}
          </h1>

          <p className={styles.description}>
            {heroData.subTitle}
          </p>

          <div className={styles.searchBarWrapper}>
             <div className={styles.searchBar}>
                <img 
                  className={styles.searchIcon} 
                  src="https://cdn-icons-png.flaticon.com/512/54/54481.png" 
                  alt="Search" 
                />
                <input type="text" placeholder="Search property" />
                <button>Search</button>
            </div>
          </div>
        </div>

        <div className={styles.imageWrapper}>
          <img src={heroData.image} alt={heroData.title} />
        </div>

      </div>
    </section>
  );
};

export default Hero;