import { Swiper, SwiperSlide } from "swiper/react";
import style from "./ProductsHero.module.scss";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css/bundle"; // tüm Swiper stilleri
import { useData } from "@/hooks/useData";
import type { Slides } from "@/types/types";

const ProductsHero = () => {
  const { data } = useData<Slides[]>({
    endpoint: "slides",
  });

  return (
    <div className={style.container}>
      <div className={style.overlay}>
        <h1 className={style.overlayTitle}>Products</h1>
        <p className={style.overlayDescription}>
          We display products based on the latest products we have, if you want
          to see our old products please enter the name of the item
        </p>
      </div>
      <div className={style.productsHero}>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={0}
          slidesPerView={1}
          navigation={true} 
          pagination={{ clickable: true }}
          simulateTouch={true} // Mouse ile sürüklemeyi aktif eder
          allowTouchMove={true} // Dokunmatik kaydırmayı aktif eder
          grabCursor={true}
        >
          {data?.map((slide) => (
            <SwiperSlide key={slide.id}>
              <img className={style.imageWrapper} src={slide.image} alt="" />
              <div className={style.heroContent}>
                <div className={style.discountBadge}>
                  <span className={style.discountBadgeText}>{slide.label}</span>
                </div>
                <div className={style.textContent}>
                  <h1 className={style.heroTitle}> {slide.title} </h1>
                  <p className={style.heroDescription}>{slide.subTitle}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductsHero;
