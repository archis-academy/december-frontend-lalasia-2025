import styles from "./PopularProducts.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import 'swiper/swiper-bundle.css';


type Props = {}

export default function PopularProducts({ }: Props) {

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
                modules={[Navigation]}
                loop={true}
                autoplay={true}
                navigation={true}
                pagination={true}
                slidesPerView={4}
                spaceBetween={29}
            >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
            </Swiper>


        </section>
    )
}