import React from 'react';
import './testimonials.css';
import IMG from '../../assets/Octocat.png';

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  const testimonials = [
    {
      avatar: IMG,
      name: 'Toallin SouthPark',
      review:
        ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis non distinctio laboriosam veritatis ipsam eos adipisci hic sequi, accusantium fuga dignissimos atque porro placeat officia ipsa ipsum similique culpa quas.',
    },
    {
      avatar: IMG,
      name: 'Toallin SouthPark',
      review:
        ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis non distinctio laboriosam veritatis ipsam eos adipisci hic sequi, accusantium fuga dignissimos atque porro placeat officia ipsa ipsum similique culpa quas.',
    },
    {
      avatar: IMG,
      name: 'Toallin SouthPark',
      review:
        ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis non distinctio laboriosam veritatis ipsam eos adipisci hic sequi, accusantium fuga dignissimos atque porro placeat officia ipsa ipsum similique culpa quas.',
    },
  ];

  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials_container"
        smodules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {testimonials.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client_avatar">
                <img src={avatar} alt="avatar one" />
              </div>
              <h5 className="client_name">{name}</h5>
              <small className="client_review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
