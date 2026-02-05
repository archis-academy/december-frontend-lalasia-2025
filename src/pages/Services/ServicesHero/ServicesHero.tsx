import styles from './ServicesHero.module.scss';

const ServicesHero = () => {
  return (
    <div className={styles['hero-container']}>
      <h1 className={styles['title']}>Services</h1>
      <p className={styles['description']}>
        The product crafted by talented crafter and using high 
        quality material with love inside
      </p>
      
      <div className={styles['image-wrapper']}>
        <img 
          src="/serviceshero/working-room.png" 
          alt="Services Hero" 
        />
      </div>
    </div>
  );
};

export default ServicesHero;