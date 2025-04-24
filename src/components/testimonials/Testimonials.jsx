import React from "react";
import "./testimonial.css";
import { Data } from "./Data";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import Pagination from the correct path
import { Pagination } from "swiper/modules";

// Your component
const Testimonials = () => {
  return (
    <section className="testimonial container section">
      <h2 className="section__title">Avis</h2>
      <span className="section__subtitle">Ce que vous pensez de moi</span>

      <Swiper
  className="testimonial__container"
  loop={true}
  grabCursor={true}
  spaceBetween={32}
  pagination={{
    clickable: true,
  }}
  breakpoints={{
    576: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 48,
    },
  }}
  modules={[Pagination]}
>

        {Data.map(({ id, image, title, description }) => {
          return (
            <SwiperSlide className="testimonial__card" key={id}>
              <img src={image} alt="" className="testimonial__img" />
              <h3 className="testimonial__name">{title}</h3>
              <p className="testimonial__description">{description}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
