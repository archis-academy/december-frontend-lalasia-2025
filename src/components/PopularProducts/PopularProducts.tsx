import 'swiper/swiper-bundle.css';
import styles from "./PopularProducts.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
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

    console.log(popularProducts);


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
                autoplay={true}
                navigation={true}
                spaceBetween={29}
                centeredSlides={true}
                slidesPerView={'auto'}
                modules={[Navigation]}
                className={styles.popularSwiper}
            >

                {popularProducts.map((card) =>
                    <SwiperSlide
                        style={{ width: 'fit-content' }}
                    >
                        <ProductCard key={card.id} {...card} />
                    </SwiperSlide>
                )}


            </Swiper>


        </section>
    )
}