import React, { useState, useEffect } from 'react';
import "../card/card.css";
import axios from 'axios'; // Import Axios
import Aziz from "../../../assets/images/card.png";
import bed from "../../../assets/images/bed.png";
import sq from "../../../assets/images/sq.png";
import whatsapp from "../../../assets/images/whatsapp-color-svgre.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faLocationDot, faWhatsapp } from '@fortawesome/free-solid-svg-icons';
import { faSquareWhatsapp, faWhatsappSquare } from '@fortawesome/free-brands-svg-icons';
import { Link, useParams } from 'react-router-dom';
import PopupCards from '../PopupCards';

// import baseUrl from '../../../utils/utils'

function FilterCards({width}) {
  const cardData = [
    {
      id: 1,
      price: "AED 2,370,000",
      subTitle: "Bolyvourd View | High floor | brand new",
      title: "Nikki Beach Residency",
      rooms: "1,2,3,4,5",
      sqFt: "7235",
      image: Aziz,
      slug: "4-br-apartments-for-sale-in-caya-villas-2-1453",
      property_name: "Demo Property"
    },
    {
      id: 2,
      price: "AED 2,370,000",
      subTitle: "Bolyvourd View | High floor | brand new",
      title: "Nikki Beach Residency",
      rooms: "1,2,3,4,5",
      sqFt: "7235",
      image: Aziz,
            slug: "4-br-apartments-for-sale-in-caya-villas-2-1453",
      property_name: "Demo Property"

    },
    {
      id: 3,
      price: "AED 2,370,000",
      subTitle: "Bolyvourd View | High floor | brand new",
      title: "Nikki Beach Residency",
      rooms: "1,2,3,4,5",
      sqFt: "7235",
      image: Aziz,
      slug: "4-br-apartments-for-sale-in-caya-villas-2-1453",
      property_name: "Demo Property"

    },
    {
      id: 4,
      price: "AED 2,370,000",
      subTitle: "Bolyvourd View | High floor | brand new",
      title: "Nikki Beach Residency",
      rooms: "1,2,3,4,5",
      sqFt: "7235",
      image: Aziz,
            slug: "4-br-apartments-for-sale-in-caya-villas-2-1453",
      property_name: "Demo Property"

    },
    {
      id: 5,
      price: "AED 2,370,000",
      subTitle: "Bolyvourd View | High floor | brand new",
      title: "Nikki Beach Residency",
      rooms: "1,2,3,4,5",
      sqFt: "7235",
      image: Aziz,
            slug: "4-br-apartments-for-sale-in-caya-villas-2-1453",
      property_name: "Demo Property"

    },
    {
      id: 6,
      price: "AED 2,370,000",
      subTitle: "Bolyvourd View | High floor | brand new",
      title: "Nikki Beach Residency",
      rooms: "1,2,3,4,5",
      sqFt: "7235",
      image: Aziz,
            slug: "4-br-apartments-for-sale-in-caya-villas-2-1453",
      property_name: "Demo Property"

    },
    // Add more card objects as needed
  ];
  const CurrentDomain = localStorage.getItem("DOMAIN")
    const baseUrl = `http://localhost:3000/${CurrentDomain}/properties-for-sale`


const handleWhatsAppClick = (property, slug) => {
  const message = `Hi There, I'm interested in ${property}. Kindly send me more information. Thank you! ${baseUrl}/${slug}`;
  const whatsappLink = `https://api.whatsapp.com/send/?phone=971524474422&text=${encodeURIComponent(message)}&app_absent=0`;
  window.open(whatsappLink, '_blank');
};
  return (
    <div className='card-flex-filter'>
      {cardData?.map((card) => (
        <div className='card-main-flex-filter'  style={{ width: width ? '100%' : '' }}>
            <div className='image-section-filter-card'>
               <Link to={`${baseUrl}/${card.slug}`}> <img
                   className="card-img-top" src={card.image}/></Link>
            </div>
            <div className='text-section-filter-card'>
                 <h3 className="card-title-filter">{card.price}</h3>
                 <p className='card-sub-title-filter' title={`${card?.subTitle}`}>{card.subTitle}</p>
                 <p className="card-text-filter"> <FontAwesomeIcon icon={faLocationDot} />Arabian Raches</p>
                 <p className="card-text2-filter">4 Br Town Houses For Sale in Arabian Ranches</p>
            <div className='flex-class'>
            <div className='card-rooms' style={{ borderBottom: "0px" }}>
              <p style={{ width: "100px" }}> <img src={bed} width={"30px"}/> {card.rooms}</p>
            </div>     
             <div className='card-sq/ft'>
               <p style={{ width: "140px" }}><img src={sq} width={"30px"}/> {card.sqFt} sq/fts</p>
             </div> 
             </div>
             <div style={{
    padding: "0px",
    width: "350px",
    padding: "10px",
}}>
    <Link to={`${baseUrl}/${card.slug}`}> <button className='enquire' style={{width:"50%"}}>More Details →</button></Link>
               {/* <img src={enquire} style={{ width: "189px" }}/> */}
                 <FontAwesomeIcon icon={faEnvelope} style={{    fontSize: "28px",
                      marginLeft: "33px",}} />

              <button className='whatsapp-link' onClick={() => handleWhatsAppClick(card?.property_name, card.slug)}><img src={whatsapp} style={{     marginLeft: "27px", width: "30px", marginBottom: "13px", }} /></button>

                  
               {/* <FontAwesomeIcon icon={faWhatsapp} style={{    fontSize: "28px",
                     marginLeft: "33px",}} /> */}
              </div>
            </div>
        </div>
      ))}
    </div>
  );
}


export default FilterCards




// <div className="card" key={card.id}>
//             <div>
//                 <img
//                     className="card-img-top"
//                     src={card.image}
//                     />
//            <span className='payment-tag'>50/50 payment plan</span>
//           <span className='featured-tag'>Featured</span>
//           <span className='appart-tag'>Appartment</span>
//             </div>
//             <div>

//           <div className="card-body">
//             <h3 className="card-title">{card.price}</h3>
//             <p className='card-sub-title'>{card.subTitle}</p>
//             <p className="card-text">{card.title}</p>
//             <div className='card-rooms' style={{ borderBottom: "0px" }}>
//               <p style={{ width: "100px" }}> <img src={bed} width={"30px"}/> {card.rooms}</p>
//             </div>          
//             <div className='card-sq/ft'>
//               <p style={{ width: "140px" }}><img src={sq} width={"30px"}/> {card.sqFt} sq/fts</p>
//             </div>
//             <div>
//                               <button className='enquire'>Enquire Now</button>
//               {/* <img src={enquire} style={{ width: "189px" }}/> */}
//                 <FontAwesomeIcon icon={faEnvelope} style={{    fontSize: "28px",
//                      marginLeft: "33px",}} />
//               {/* <FontAwesomeIcon icon={faWhatsapp} style={{    fontSize: "28px",
//                     marginLeft: "33px",}} /> */}
//             </div>
//           </div>
//         </div>
//         </div>