import { Swiper, SwiperSlide } from "swiper/react";
import style from "./ProductsHero.module.scss";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css/bundle"; // tüm Swiper stilleri

const ProductsHero = () => {
  return (
    <div className={style.container} >
      <div className={style.overlay}>
        <h1 className={style.overlayTitle}>Products</h1>
        <p className={style.overlayDescription}>
          We display products based on the latest products we have, if you want
          to see our old products please enter the name of the item
        </p>
      </div>
      <div className={style.productsHero}>
        <div className={style.heroContent}>
          <div className={style.discountBadge}>
            <span className={style.discountBadgeText}>Discount</span>
          </div>
          <div className={style.textContent}>
            <h1 className={style.heroTitle}>Ramadhan Sale Offer</h1>
            <p className={style.heroDescription}>
              Get 40% off for the first transaction on Lalasia
            </p>
          </div>
        </div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          simulateTouch={true} // Mouse ile sürüklemeyi aktif eder
          allowTouchMove={true} // Dokunmatik kaydırmayı aktif eder
          grabCursor={true}
        >
          <SwiperSlide>
            <img
              className={style.imageWrapper}
              src="/images/products-hero-section/hero-product-img1.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/images/products-hero-section/hero-product-img2.jpg"
              alt=""
              className={style.imageWrapper}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/images/products-hero-section/hero-product-img3.jpg"
              alt=""
              className={style.imageWrapper}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/images/products-hero-section/hero-product-img4.jpg"
              alt=""
              className={style.imageWrapper}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default ProductsHero;
