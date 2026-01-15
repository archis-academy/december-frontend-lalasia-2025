
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { useData } from "@/hooks/useData";
import TestimonialCard from "./TestimonialCard";

import "swiper/css";
import "swiper/css/pagination";
import styles from "./TestimonialsSection.module.scss";

const TestimonialsSection: React.FC = () => {
  const { data: testimonials, isLoading, error } = useData("users/customerSays");

  if (isLoading) return <div className={styles.loading}>Yükleniyor...</div>;
  if (error) return <div className={styles.error}>Hata oluştu.</div>;
  if (!testimonials?.length) return null;

  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h4 className={styles.subHeading}>Testimonials</h4>
          <h2 className={styles.heading}>What our customer say</h2>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className={styles.mySwiper}
        >
          {testimonials.map((item: any, index: number) => (
            <SwiperSlide key={item.id || index}>
              <TestimonialCard {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialsSection;