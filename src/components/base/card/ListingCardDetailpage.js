// import React from 'react';
// import "./card.css";
// import Aziz from "../../../assets/images/card.png";
// import enquire from "../../../assets/images/enquire.png";
// import bed  from "../../../assets/images/bed.png";
// import sq from "../../../assets/images/sq.png";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLocationDot, faPhone,faEnvelope,faBed,faBath,faMapLocationDot } from '@fortawesome/free-solid-svg-icons';
// import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

// function CardArticles() {
//   // Define card data
//   const cardData = [
//     {
//       id: 1,
//       price: "AED 2,370,000",
//       subTitle: "Bolyvourd View | High floor | brand new",
//       title: "Nikki Beach Residency",
//       rooms: "1,2,3,4,5",
//       sqFt: "7235",
//       image: Aziz
//     },
//     {
//       id: 2,
//       price: "AED 2,370,000",
//       subTitle: "Bolyvourd View | High floor | brand new",
//       title: "Nikki Beach Residency",
//       rooms: "1,2,3,4,5",
//       sqFt: "7235",
//       image: Aziz
//     },
//     {
//       id: 3,
//       price: "AED 2,370,000",
//       subTitle: "Bolyvourd View | High floor | brand new",
//       title: "Nikki Beach Residency",
//       rooms: "1,2,3,4,5",
//       sqFt: "7235",
//       image: Aziz
//     },
//     {
//       id: 4,
//       price: "AED 2,370,000",
//       subTitle: "Bolyvourd View | High floor | brand new",
//       title: "Nikki Beach Residency",
//       rooms: "1,2,3,4,5",
//       sqFt: "7235",
//       image: Aziz
//     },
//     {
//       id: 5,
//       price: "AED 2,370,000",
//       subTitle: "Bolyvourd View | High floor | brand new",
//       title: "Nikki Beach Residency",
//       rooms: "1,2,3,4,5",
//       sqFt: "7235",
//       image: Aziz
//     },
//     {
//       id: 6,
//       price: "AED 2,370,000",
//       subTitle: "Bolyvourd View | High floor | brand new",
//       title: "Nikki Beach Residency",
//       rooms: "1,2,3,4,5",
//       sqFt: "7235",
//       image: Aziz
//     },
//     // Add more card objects as needed
//   ];

//   return (
//     <div className='card-flex'>
//       {cardData.map((card) => (
//         <div className="card" key={card.id}>
//           <img
//             className="card-img-top"
//             src={card.image}
            
//           />
//           <span className='payment-tag'>50/50 payment plan</span>
//           <span className='featured-tag'>Featured</span>
//           <span className='appart-tag'>Appartment</span>
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
//               <img src={enquire} style={{ width: "189px" }}/>
//                 <FontAwesomeIcon icon={faEnvelope} style={{    fontSize: "28px",
//     marginLeft: "33px",}} />
//                 <FontAwesomeIcon icon={faWhatsapp} style={{    fontSize: "28px",
//     marginLeft: "33px",}} />
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default CardArticles;



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
import baseUrl from '../../../utils/utils'


function ListingCardDetailpage({projectName, width, community}) {
  const [cardData, setCardData] = useState([]);

  const CurrentDomain = localStorage.getItem("DOMAIN")  
 useEffect(() => {
    // Fetch data using Axios
     axios.get(`https://salwaproperties.com/community_web/api/listing_properties/${CurrentDomain}/${projectName}?X-API-KEY=3064c564d11154da943a1fd968822b6c`)
      .then(response => {
        // Assuming data is an array of objects containing necessary fields like price, subTitle, title, etc.
        setCardData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [CurrentDomain, projectName]);

const handleWhatsAppClick = (property, slug) => {
  const message = `Hi There, I'm interested in ${property}. Kindly send me more information. Thank you! ${baseUrl}/properties-for-sale/${slug}`;
  const whatsappLink = `https://api.whatsapp.com/send/?phone=971524474422&text=${encodeURIComponent(message)}&app_absent=0`;
  window.open(whatsappLink, '_blank');
};

  return (
     <div className='card-flex-filter'>
      {cardData.length === 0  ?  "" : <div className='cards-heading' style={{textAlign:"left"}}>
          <h1>Popular Listing in {community}</h1>
          {/* <p>see all the latest investment attractive new properties for sale in {pageData?.community_name}</p> */}
        </div>}
      {cardData?.map((card) => (
        <div className='card-main-flex-filter'  style={{ width: width ? '100%' : '' }}>
            <div className='image-section-filter-card'>
               <Link to={`${baseUrl}/properties-for-sale/${card.slug}`}> <img
                   className="card-img-top" src={card?.cover_image}/></Link>
            </div>
            <div className='text-section-filter-card'>
                 <h3 className="card-title-filter">{card.starting_price}</h3>
                 <p className='card-sub-title-filter' title={`${card?.subTitle}`}>{card.project_usps}</p>
                 <p className="card-text-filter"> <FontAwesomeIcon icon={faLocationDot} />{card.community_name}</p>
                 
                 <p className="card-text2-filter">{card?.property_name}</p>
            <div className='flex-class'>
            <div className='card-rooms' style={{ borderBottom: "0px" }}>
              <p style={{ width: "100px" }}> <img src={bed} width={"30px"}/> {card.bedroom}</p>
            </div>     
             <div className='card-sq/ft'>
               <p style={{ width: "140px" }}><img src={sq} width={"30px"}/> {card?.size}</p>
             </div> 
             </div>
             <div style={{
    // padding: "0px",
    // width: "350px",
    // padding: "10px",
    display:"flex", gap:"10px"
}}>
    <Link to={`${baseUrl}/properties-for-sale/${card.slug}`}> <button className='enquire' style={{fontSize: "15px"}}>More Details →</button></Link>
               {/* <img src={enquire} style={{ width: "189px" }}/> */}
                 {/* <FontAwesomeIcon icon={faEnvelope} style={{    fontSize: "28px",
                      marginLeft: "33px",}} /> */}

        <PopupCards text={<FontAwesomeIcon icon={faEnvelope} style={{ fontSize: "28px", marginLeft: "33px"}}/>} />


              <button className='whatsapp-link' onClick={() => handleWhatsAppClick(card?.property_name, card.slug)}><img src={whatsapp} style={{    marginLeft: "9px", width: "28px", marginBottom: "13px", }} /></button>

                  
               {/* <FontAwesomeIcon icon={faWhatsapp} style={{    fontSize: "28px",
                     marginLeft: "33px",}} /> */}
              </div>
            </div>
        </div>
      ))}
      {cardData.length === 0  ?  "" : <div className='view-more-button'>
        <button className='vm-btn'>Load More</button>
    </div>}
    </div>
  );
}

export default ListingCardDetailpage;
