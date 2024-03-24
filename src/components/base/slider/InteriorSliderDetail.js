import React from 'react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import img1 from "../../../assets/images/nearby1.png";
import img2 from  '../../../assets/images/nearby2.png';
import img3 from  '../../../assets/images/nearby3.png';
import "./slider.css"


// Install Swiper modules
SwiperCore.use([Navigation, Pagination, Autoplay]);

const InteriorSliderDetail = ({Interior}) => {
    console.log(Interior, "<------- exterior here")
    const images = Interior?.GallInt;
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={2}
    //   centeredSlides={true}
      loop={true} 
      autoplay={{
        delay: 2500,
        disableOnInteraction: false
      }}
      navigation
      // pagination={{ clickable: true }}
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

export default InteriorSliderDetail;
