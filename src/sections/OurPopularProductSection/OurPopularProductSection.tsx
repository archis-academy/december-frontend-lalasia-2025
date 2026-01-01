import styles from "./OurPopularProductSection.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";

// CSS
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Modüller
import { Navigation, Pagination } from "swiper/modules";

const OurPopularProductSection = () => {
  const blankCards = [1, 2, 3, 4, 5, 6, 7, 8]; // Placeholder for blank cards

  return (
    <section className={styles.ourPopularProductSection}>
      <h5 className={styles.sectionSubtitle}>Product</h5>
      <h2 className={styles.sectionTitle}>Our popular product</h2>
      <p className={styles.sectionDescription}>
        Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim{" "}
        <br />
        placerat nisi, adipiscing mauris non purus parturient.
      </p>

      {/* --- SWIPER BURADA BAŞLIYOR --- */}
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        loop
        centeredSlides={true}
        slidesPerView={2.5}
        /*slidesPerView={"auto"}*/
        spaceBetween={30}
        className={styles.swiperWrapper}
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
            slidesPerView: 2.5,
            spaceBetween: 30,
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
    </section>
  );
};

export default OurPopularProductSection;
