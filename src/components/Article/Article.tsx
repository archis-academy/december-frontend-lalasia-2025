import styles from "./Article.module.scss";
import ArticleCard from "./ArticleCard";
import { useEffect, useState } from "react";
import { useData } from "@/hooks/useData";
import type { ArticleCardProps, User } from "@/types/types";

export default function Article() {

    const [slideItems, setSlideItems] = useState<ArticleCardProps[]>([]);
    const { data, isLoading } = useData<ArticleCardProps[]>({ endpoint: "articles" });
    const { data: users } = useData<User[]>({ endpoint: "users" });

    useEffect(() => {
        setSlideItems(data || []);
    }, [data]);


    console.log("data: ", data);
    console.log("users: ", users);

    const handleNext = () => {

        setSlideItems((prev) => {
            const [first, ...rest] = prev;
            return [...rest, first];
        })

    }

    const handlePrev = () => {

        setSlideItems((prev) => {
            const last = prev[prev.length - 1];
            const rest = prev.slice(0, -1);
            return [last, ...rest];

        })
    }

    if (isLoading)
        return <div>Loading..</div>

    return (

        <section className={styles.article}>

            <div className={`${styles.swiper}`}>

                <div className={styles.articleTitleWrapper}>
                    <h5 className={styles.sectionTitle}>Articles</h5>
                    <h2 className={styles.mainTitle}>
                        The best furniture comes from Lalasia
                    </h2>
                    <p className={styles.textContent}>Pellentesque etiam blandit in tincidunt at donec. </p>

                </div>

                <div className={`${styles.swiperWrapper}`}>

                    <div className={`${styles.swiperSlide}`}>
                        {slideItems.slice(0, 4).map((slide) => <ArticleCard
                            key={slide.id}
                            className={styles.slideItem}
                            {...slide}
                            users={users || []}
                            handleNext={handleNext}
                            handlePrev={handlePrev}
                        />
                        )}
                    </div>

                </div>

            </div>

        </section>

    )
}