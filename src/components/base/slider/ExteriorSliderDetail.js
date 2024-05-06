import React from 'react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import img1 from "../../../assets/images/nearby1.png";
import img2 from  '../../../assets/images/nearby2.png';
import img3 from  '../../../assets/images/nearby3.png';
import "./slider.css"


// Install Swiper modules
// SwiperCore.use([Navigation, Pagination, Autoplay]);

const ExteriorSliderDetail = ({Exterior}) => {

    const images = Exterior?.GallInt;
  return (
     <Swiper
      spaceBetween={30}
      loop={true} 
      autoplay={{
        delay: 2500,
        disableOnInteraction: true
      }}
      breakpoints={{
        // When window width is >= 500px
        500: {
          slidesPerView: 1
        },
        // When window width is >= 768px
        768: {
          slidesPerView: 2
        }
      }}
      Pagination={{ clickable: true }}
    >
      {images?.map((image, index) => (
        <SwiperSlide key={index}>
          <img src={image} alt={`Slide ${index}`} style={{
                height: "330px",
          }}/>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ExteriorSliderDetail;
