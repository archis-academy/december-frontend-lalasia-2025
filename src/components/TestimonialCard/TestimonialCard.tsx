
import styles from "./TestimonialCard.module.scss";

const TestimonialCard = () => {
  return (
    <div className={styles.testimonial}>
    <div className={styles.testimonialCard}>
      <span className={styles.quote}>“</span>

      <p className={styles.text}>
        Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim
        placerat nisi, adipiscing mauris non.
      </p>

      <div className={styles.footer}>
        <div className={styles.user}>
          <img
            src="/images/testimonial.png"
            alt="Janne Cooper"
            className={styles.avatar}
          />
          <span className={styles.name}>Janne Cooper</span>
        </div>

        <div className={styles.rating}>
          <img
            src="/icons/star.svg"
            alt="Star"
            className={styles.starIcon}
          />
          <span className={styles.score}>4.3</span>
        </div>
      </div>
    </div>
    </div>
  );
};

export default TestimonialCard;