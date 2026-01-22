import React from 'react';
import styles from "./TestimonialCard.module.scss";
import { QuoteUp } from 'iconsax-react';

const TestimonialCard: React.FC<{ customer: any }> = ({ customer }) => {
  const commentText = customer.comment; 
  const ratingValue = customer.rating;
  
  const userAvatar = `https://i.pravatar.cc/150?u=${customer.userId}`;
  const userName = `Kullanici #${customer.userId}`;

  return (
    <div className={styles.testimonialCard}>
      <div className={styles.quoteWrapper}>
        <QuoteUp 
          size="40" 
          color="#40B4A6" 
          variant="Bold" 
        />
      </div>
      
      <p className={styles.text}>{commentText}</p>
      
      <div className={styles.footer}>
        <div className={styles.user}>
          <img src={userAvatar} alt="User" />
          <span>{userName}</span>
        </div>

        <div className={styles.rating}>
          <img src="/icons/star.svg" alt="star" className={styles.starIcon} />
          <span className={styles.score}>{ratingValue}</span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;