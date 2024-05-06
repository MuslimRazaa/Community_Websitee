import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import SwiperCore, {
//   Navigation,
//   Autoplay,
//   Pagination,
//   Keyboard,
// } from "swiper/core";
// import "swiper/swiper-bundle.min.css";
import LUX from "../../../assets/images/nearby6.png"
import LUX2 from "../../../assets/images/nearby3.png"
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import LUX3 from "../../../assets/images/nearby1.png"
// import "../imageCard.css"
// SwiperCore.use([Navigation, Autoplay, Pagination, Keyboard]);

function DetCrousel() {
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


  const data = [
 
    {
    image: LUX,
    },
    {
    image: LUX2,
    },
    {
    image: LUX3,
    },
        {
    image: LUX,
    },
    {
    image: LUX3,
    },

  
  ];

  return (
    <>
     <Carousel centerMode showThumbs={false} infiniteLoop={true}>
                <div>
                  <img src={LUX} style={{ width: "95%", height:"90%" }}/>
        </div>
        <div>
                    <img src={LUX3} style={{ width: "95%", height:"90%" }} />
        </div>
              
                <div>
                    <img src={LUX} style={{ width: "95%", height:"90%" }} />
        </div>
        <div>
                  <img src={LUX3} style={{ width: "95%", height:"90%" }}/>
                </div>
        <div>
                  <img src={LUX} style={{ width: "95%", height:"90%" }}/>
        </div>
          <div>
                    <img src={LUX3} style={{ width: "95%", height:"90%" }} />
        </div>
            </Carousel>
    
    </>
//     <>
    
//       <div className="swiper-buttons">
//               <button className="swiper-prev" style={{
//                 transform: "translateY(17px)",
//         }}>
//           {" "}
//           <FontAwesomeIcon icon={faArrowUp} className='footer-button-arrow' style={{rotate:"295deg"}} />  Previous
//         </button>
//         <button className="swiper-next" style={{
//                 transform: "translateY(17px)"
//         }}>
//           {" "}
//          Next <FontAwesomeIcon icon={faArrowUp} className='footer-button-arrow' style={{rotate:"45deg"}}/>
//         </button>
//       </div>
//       <Swiper {...swiperOptions} className="swiper-wrapper-Award swiper-wrapper">
     
//         {data.map((property, index) => (
//          <SwiperSlide>
//         <div key={index} className="card-img">
//           <img src={property.image} alt="Avatar" style={{ width: "100%", height:"250px" }} />
//         </div>
//         </SwiperSlide>

//       ))}
//       </Swiper>
//       <div className="swiper-pagination"></div>
// </>
      );
}


export default DetCrousel;


