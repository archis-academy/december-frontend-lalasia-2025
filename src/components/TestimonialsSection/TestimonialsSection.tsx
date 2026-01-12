import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules"; 
import { Star, Quote } from "lucide-react"; 

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from "./TestimonialsSection.module.scss";
import { useData } from "@/hooks/useData";


interface TestimonialItem {
  name: string;
  text: string;
  avatar: string;
  score: number;
}

const TestimonialsSection: React.FC = () => {
  const { data: testimonials, isLoading, error } = useData("users/customerSays");

  if (isLoading) return <div className={styles.loading}>Loading...</div>;
  if (error) return <div className={styles.error}>Error loading testimonials</div>;
  if (!testimonials || testimonials.length === 0) return null;

  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.container}>
        <h4 className={styles.subHeading}>Testimonials</h4>
        <h2 className={styles.heading}>What our customer say</h2>
        <p className={styles.description}>
          Pellentesque etiam blandit in tincidunt at donec.
        </p>

        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true, dynamicBullets: true }}
          navigation={false} 
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className={styles.mySwiper}
        >
          {testimonials.map((item: TestimonialItem, index: number) => (
            <SwiperSlide key={index}>
              <div className={styles.card}>
                <div className={styles.quoteIcon}>
                  <Quote size={32} fill="#2DD4BF" stroke="none" opacity={0.5} />
                </div>
                
                <p className={styles.text}>{item.text}</p>
                
                <div className={styles.footer}>
                  <div className={styles.userInfo}>
                    <img src={item.avatar} alt={item.name} className={styles.avatar} />
                    <span className={styles.name}>{item.name}</span>
                  </div>
                  <div className={styles.rating}>
                    <Star size={16} fill="#FB923C" stroke="none" />
                    <span className={styles.score}>{item.score}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialsSection;