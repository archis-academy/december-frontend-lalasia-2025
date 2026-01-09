import styles from "./ArticleCard.module.scss";
import type { ArticleCardProps } from '@/types/types';

export default function ArticleCard({
    image,
    title,
    context,
    category,
    date,
    autherId,
    users
}: ArticleCardProps) {

    const user = users.find((value) => Number(value.id) === Number(autherId));

    return (
        <div className={`${styles.articleCard}`}>


            <div className={styles.imageWrapper}>
                <div className={styles.imageShadow}></div>
                <img className={styles.image} src={image} alt='image' />
            </div>

            <div className={styles.cardContent}>

                <div className={styles.cardTextWrapper}>
                    <div className={styles.cardTop}>
                        <span className={styles.cardCategory}>{category}</span>
                        <div className={styles.titleWrapper}>
                            <h3 className={styles.cardTitle}>{title}</h3>
                            <p className={styles.cardDescription}>{context}</p>
                        </div>
                    </div>
                    <a className={styles.readMoreBtn} href="#">Read More</a>
                    <div className={styles.cardBottom}>
                        <p className={styles.cardAuthor}>
                            <img src={user?.image} alt="author-1" />
                            <span className={styles.cardAuthorName}>{user?.fullName}</span>
                        </p>
                        <span className={styles.cardDate}>{date}</span>
                    </div>
                </div>
            </div>

        </div>
    )
}