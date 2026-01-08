import styles from "./ArticleCard.module.scss";
import { type ArticleCardProps } from '@/types/types';

export default function ArticleCard({
    imagePath,
    avatarPath,
    title,
    description,
    category,
    authorName,
    date

}: ArticleCardProps) {

    return (
        <div className={styles.articleCard}>

            <div className={styles.articleCardImageWrapper}>
                <img className={styles.image} src={imagePath} alt='image' />
            </div>

            <div className={styles.articleCardContent}>

                <div className={styles.articleCardTop}>
                    <span className={styles.articleCardCategory}>{category}</span>

                    <div className={styles.articleCardTitleWrapper}>
                        <h3 className={styles.articleCardTitle}>{title}</h3>
                        <p className={styles.articleCardDescription}>{description}</p>
                    </div>
                </div>

                <div className={styles.articleCardBottom}>
                    <p className={styles.articleCardAuthor}>
                        <img src={avatarPath} alt="author-1" />
                        <span className={styles.articleCardAuthorName}>{authorName}</span>
                    </p>
                    <span className={styles.articleCardBottomDate}>{date}</span>
                </div>

            </div>

        </div>
    )
}