import styles from "./OurPopularProductSection.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";

// CSS
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Modüller
import { Navigation, Pagination } from "swiper/modules";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
} from "../../../public/icons/OurProductSection/icons";

import { useRef } from "react";

const OurPopularProductSection = () => {
  const blankCards = [1, 2, 3, 4, 5, 6, 7, 8];
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className={styles.ourPopularProductSection}>
      <h5 className={styles.sectionSubtitle}>Product</h5>
      <h2 className={styles.sectionTitle}>Our popular product</h2>
      <p className={styles.sectionDescription}>
        Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim{" "}
        <br />
        placerat nisi, adipiscing mauris non purus parturient.
      </p>

      <Swiper
        modules={[Navigation, Pagination]}
        centeredSlides={true}
        loop
        spaceBetween={30}
        className={styles.swiperWrapper}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1.2,
            spaceBetween: 15,
          },
          640: {
            slidesPerView: 1.8,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3.5,
            spaceBetween: 20,
          },
        }}
      >
        {blankCards.map((item) => (
          <SwiperSlide key={item} className={styles.card}>
            <div className={styles.cardInner}>
              <p>blankCards {item}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.navButtonsWrapper}>
        <button ref={prevRef} className={styles.customPrevBtn}>
          <ArrowLeftIcon />
        </button>
        <button ref={nextRef} className={styles.customNextBtn}>
          <ArrowRightIcon />
        </button>
      </div>
    </section>
  );
};

export default OurPopularProductSection;
