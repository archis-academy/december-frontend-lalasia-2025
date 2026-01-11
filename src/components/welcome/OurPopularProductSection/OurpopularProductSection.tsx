import styles from "@popular/OurPopularProductSection.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper CSS
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Swiper modülleri
import { Navigation, Pagination } from "swiper/modules";
import { ArrowLeftIcon, ArrowRightIcon } from "@popular/ourpopularIcons";

import { useRef } from "react";

import { useData } from "@/hooks/useData";
import ProductCard from "@/components/ProductCard/ProductCard";
import type { Products } from "@/types/types";

const OurPopularProductSection = () => {
  const {
    data: products,
    isLoading,
    error,
  } = useData<Products[]>({ endpoint: "products" });

  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  if (isLoading) return <p>Yükleniyor...</p>;
  if (error) return <p>Veri alınamadı</p>;

  return (
    <section className={styles.ourPopularProductSection}>
      <h5 className={styles.sectionSubtitle}>Product</h5>
      <h2 className={styles.sectionTitle}>Our popular product</h2>
      <p className={styles.sectionDescription}>
        Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim
        <br />
        placerat nisi, adipiscing mauris non purus parturient.
      </p>

      <Swiper
        modules={[Navigation, Pagination]}
        centeredSlides={true}
        loop={true}
        spaceBetween={30}
        className={styles.swiperWrapper}
        onBeforeInit={(swiper) => {
          if (
            typeof swiper.params.navigation !== "boolean" &&
            swiper.params.navigation
          ) {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }
        }}
        breakpoints={{
          320: { slidesPerView: 1.6, spaceBetween: 15 },
          640: { slidesPerView: 1.8, spaceBetween: 20 },
          1024: { slidesPerView: 2, spaceBetween: 20 },
          1200: { slidesPerView: 2.5, spaceBetween: 20 },
          1440: { slidesPerView: 3, spaceBetween: 20 },
          1600: { slidesPerView: 3.4, spaceBetween: 20 },
          1920: { slidesPerView: 3.8, spaceBetween: 20 },
        }}
      >
        {(products || []).slice(0, 10).map((product) => (
          <SwiperSlide key={product.id} className={styles.card}>
            <ProductCard {...product} />
          </SwiperSlide>
        ))}

        {/* Navigation butonları */}
        <div className={styles.navButtonsWrapper}>
          <button ref={prevRef} className={styles.customPrevBtn}>
            <ArrowLeftIcon />
          </button>
          <button ref={nextRef} className={styles.customNextBtn}>
            <ArrowRightIcon />
          </button>
        </div>
      </Swiper>
    </section>
  );
};

export default OurPopularProductSection;
