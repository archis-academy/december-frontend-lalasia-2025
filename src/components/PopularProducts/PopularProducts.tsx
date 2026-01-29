import 'swiper/swiper-bundle.css';
import styles from "./PopularProducts.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import ProductCard from "../ProductCard/ProductCard";
import { useData } from "@/hooks/useData";
import { type Product } from "@/types/types";
import { useMemo } from "react";

export default function PopularProducts() {

    const { data, isLoading } = useData<Product[]>({ endpoint: "products" });

    const popularProducts = useMemo(
        () => {
            if (!data) return [];
            return data.slice(0, 30);
        },
        [data]
    );

    if (isLoading) return <div>Loading...</div>

    return (
        <section className={styles.popular}>

            <div className={styles.titleWrapper}>
                <h5 className={styles.sectionTitle}>Product</h5>
                <h2 className={styles.mainTitle}>Our popular product</h2>
            </div>

            <p className={styles.popularText}>
                Pellentesque etiam blandit in tincidunt at donec.
                Eget ipsum dignissim placerat nisi, adipiscing mauris non purus parturient.
            </p>

            <Swiper
                loop={true}
                autoplay={{ delay: 2000 }}
                navigation={{
                    nextEl: `.${styles.swiperNextButton}`,
                    prevEl: `.${styles.swiperPrevButton}`,
                }}
                spaceBetween={29}
                centeredSlides={true}
                slidesPerView={'auto'}
                modules={[Navigation, Autoplay]}
                className={styles.popularSwiper}
            >

                {popularProducts.map((card) =>
                    <SwiperSlide
                        style={{ width: 'fit-content' }}
                    >
                        <ProductCard key={card.id} {...card} />
                    </SwiperSlide>
                )}

                <button className={styles.swiperPrevButton}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.0898 19.92L8.56984 13.4C7.79984 12.63 7.79984 11.37 8.56984 10.6L15.0898 4.08" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>

                <button className={styles.swiperNextButton}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.91016 19.92L15.4302 13.4C16.2002 12.63 16.2002 11.37 15.4302 10.6L8.91016 4.08" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>

            </Swiper>

        </section>
    )
}