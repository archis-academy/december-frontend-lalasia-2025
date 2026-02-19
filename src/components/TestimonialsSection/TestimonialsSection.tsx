import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Autoplay, Navigation } from 'swiper/modules'; 
import  { useData } from '@/hooks/useData'; 
import TestimonialCard from '../TestimonialCard/TestimonialCard';

import 'swiper/css';
import 'swiper/css/navigation'; 
import styles from './TestimonialsSection.module.scss';
import "./TestimonialCardSwiper.scss";


const TestimonialsSection: React.FC = () => {
  const { data, isLoading, error } = useData({ endpoint: "customerSays" });

  if (isLoading) return <div className={styles.loading}>Yükleniyor...</div>;
  if (error) return <div className={styles.error}>Hata oluştu!</div>;

return (
    <section className={styles.testimonialsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.subHeading}>Testimonials</span>
          <h2 className={styles.heading}>What our customer say</h2>
          <p className={styles.description}>
            Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim
            placerat nisi, adipiscing mauris non purus parturient.
          </p>
        </div>

     <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={5}
          slidesPerView={"auto"}   
          centeredSlides={true}    
          loop={true}             
          navigation={true} 
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className={styles.swiperContainer}
        >
          {data && data.map((item: any) => (
            <SwiperSlide key={item.id}>
              <TestimonialCard customer={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialsSection;