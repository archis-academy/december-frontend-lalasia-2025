import styles from "./Article.module.scss";
import ArticleCard from "./ArticleCard";
import CustomButton from "../CustomButton/CustomButton";
import Arrow from "../Arrow/Arrow";
import { articleCards } from "@/constants/constants";

export default function Article() {
    return (

        <section className={styles.article}>

            {/* left content */}
            <div className={styles.leftContent}>

                {/* first child */}
                <div className={styles.leftContentHeader}>
                    <h5 className={styles.sectionTitle}>Articles</h5>
                    <h2 className={styles.leftContentTitle}>
                        The best furniture comes from Lalasia
                    </h2>
                </div>

                {/* second child */}
                <p className={styles.leftContentText}>Pellentesque etiam blandit in tincidunt at donec. </p>

                {/* thirth child */}
                <div className={styles.imageWrapper}>
                    {/* image */}
                    <div className={styles.imageShadow}></div>
                    <img className={styles.leftContentImage} src="/images/left-content-image.jpg" alt="image-1" />

                    {/* image text */}
                    <div className={styles.imageTextWrapper}>
                        <span className={styles.categoryText}>Tips and Trick</span>
                        <div className={styles.imageDescriptionWrapper}>
                            <div className={styles.imageTitleWrapper}>
                                <span className={styles.imageTitle}>Create Cozy Dinning Room Vibes</span>
                                <p className={styles.description}>Decorating with neutrals brings balance to the dining room.
                                    With eclectic decoration on the sides,
                                    Caruso Dining Table and Cyrillo Dining Chairs elevate the tonal base of the room.
                                    The modern furniture set gives personality to any space in all types of architecture.
                                    ‎ The wide volume enables everyone to sit back and relax, be it in the dining room,
                                    conference, or office.
                                </p>
                            </div>
                            <button className={styles.readMoreBtn}>
                                <span className={styles.readMoreText}>Read More</span>
                            </button>
                        </div>
                    </div>

                    {/* direction buttons */}
                    <div className={styles.directionButtons}>
                        <CustomButton className={styles.directionBtn}>
                            <Arrow />
                        </CustomButton>
                        <CustomButton className={styles.directionBtn}>
                            <Arrow />
                        </CustomButton>
                    </div>

                </div>
            </div>

            {/* right content */}
            <div className={styles.rightContent}>
                {articleCards.map((card, index) => <ArticleCard {...card} key={index} />)}
            </div>
        </section>

    )
}