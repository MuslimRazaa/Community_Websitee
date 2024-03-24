import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SwiperCore, {
  Navigation,
  Autoplay,
  Pagination,
  Keyboard,
} from "swiper/core";
import "swiper/swiper-bundle.min.css";
import Card from "../card/card"

function Crousel() {
  const swiperOptions = {
    spaceBetween: 40, // Adjust the space between slides here
    speed: 1000,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-next",
      prevEl: ".swiper-prev",
    },
    mousewheel: false,
    keyboard: true,
    autoplay: {
      delay: 5000,
    },
    loop: true,
    breakpoints: {
  0: {
    slidesPerView: 1,
    },
      
  400: {
    slidesPerView: 1.2,
  },
  480: {
    slidesPerView: 1.5,
  },
  625: {
    slidesPerView: 1.5,
  },
  768: {
    slidesPerView: 2,
  },
  991: {
    slidesPerView: 3.2,
  },
  1150: {
    slidesPerView: 3.3,
  },
  1200: {
    slidesPerView: 4,
  },
}
  };

  return (
    <>
    
      <div className="swiper-buttons">
        <button className="swiper-prev">
          {" "}
          <FontAwesomeIcon icon={faArrowUp} className='footer-button-arrow' style={{rotate:"295deg"}} />  Previous
        </button>
        
        <button className="swiper-next">
          {" "}
         Next <FontAwesomeIcon icon={faArrowUp} className='footer-button-arrow' style={{rotate:"45deg"}}/>
        </button>
      </div>
      <Swiper {...swiperOptions} className="swiper-wrapper-Award swiper-wrapper">
        
                 <SwiperSlide>
                    <Card />
                  </SwiperSlide>
                 <SwiperSlide>
                    <Card />
                  </SwiperSlide>
                 <SwiperSlide>
                    <Card />
                  </SwiperSlide>
                 <SwiperSlide>
                    <Card />
                  </SwiperSlide>
       
      </Swiper> 
      <div className="swiper-pagination"></div>
</>
      );
}

export default Crousel;


