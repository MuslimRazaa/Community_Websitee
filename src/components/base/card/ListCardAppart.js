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
import "./card.css";
import axios from 'axios'; // Import Axios
import bed from "../../../assets/images/bed.png";
import sq from "../../../assets/images/sq.png";
import enquire from "../../../assets/images/enquire.png";
import whatsapp from "../../../assets/images/whatsapp-color-svgre.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faWhatsapp, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { Link, useParams } from 'react-router-dom';
import Popup2 from '../Popup2';
import PopupCardsGmail from '../PopupCardsGmail';
import requast from '../../../assets/images/Button-01.svg'
import salwlogo from '../../../assets/images/salwa-inverted-logo.png'


function ListCardAppart(text) {
  const [cardData, setCardData] = useState([]);
  const CurrentDomain = localStorage.getItem("DOMAIN")
  const [isDesktopModal, setIsDesktopModal] = useState(true);

 useEffect(() => {
    // Fetch data using Axios
    // axios.get(`https://salwaproperties.com/community_web/api/sale_featured_properties/${CurrentDomain}?X-API-KEY=3064c564d11154da943a1fd968822b6c`)
    axios.get(`https://salwaproperties.com/community_web/api/sale_featured_properties/${CurrentDomain}?X-API-KEY=3064c564d11154da943a1fd968822b6c`)
      .then(response => {
        // Assuming data is an array of objects containing necessary fields like price, subTitle, title, etc.
        setCardData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [CurrentDomain]);
  const baseUrl = `http://localhost:3000/${CurrentDomain}/properties-for-sale`
  // const baseUrl = `https://${CurrentDomain}/properties-for-sale`
const handleWhatsAppClick = (property, slug) => {
  const message = `Hi There, I'm interested in ${property}. Kindly send me more information. Thank you! ${baseUrl}/${slug}`;
  const whatsappLink = `https://api.whatsapp.com/send/?phone=971524474422&text=${encodeURIComponent(message)}&app_absent=0`;
  window.open(whatsappLink, '_blank');
};

  return (
      <div className='card-flex'>
      {cardData?.map(card => (
          <div className="card" key={card.id}>
            <div className='image-hover-div'>
           <Link to={`${baseUrl}/${card.slug}`}><img
              className="card-img-top"
              src={card.cover_image}
              alt={card.title}
            /></Link> 
            </div>
            {/* <span className='featured-tag'>{card.status}</span> */}
            <span className='appart-tag'>{card.type_name}</span>
            <div className="card-body">
              <h3 className="list-card-title">{card.starting_price}</h3>
              <p className='list-card-community'><FontAwesomeIcon icon={faLocationDot} />{card.community_name}</p>
              <p className='list-card-sub-title'>{card.project_usps}</p>
              <p className="list-card-text" title={card.property_name}>{card.property_name}</p>
              <div className='list-card-icon-flex'>
              <div className='card-rooms' style={{ borderBottom: "0px" }}>
                <p style={{ width: "100px" }}> <img src={bed} width={"30px"} /> {card.bedroom}</p>
              </div>
              <div className='card-sq/ft'>
                <p style={{ width: "140px" }}><img src={sq} width={"30px"} /> {card.size} </p>
              </div>
              </div>
              <div  style={{display:"flex", gap:"10px"}}>
                 <Link to={`${baseUrl}/${card.slug}`}><button className='enquire' style={{width:"145px"}}>More Detail</button></Link>

              {/* modal openning */}
               <PopupCardsGmail text={<FontAwesomeIcon icon={faEnvelope} style={{ fontSize: "28px"}}/>} />



                {/* <Link to={`https://api.whatsapp.com/send/?phone=971524474422&amp;text=Hi+There%2C+I%27m+interested+in+${card?.property_name}+Kindly+send+me+more+information.+Thank+you%21+${`${baseUrl}/${card.slug}`}&amp;type=phone_number&amp;app_absent=0` } type="button" target="_blank" ><img src={whatsapp} style={{width:"28px",height:"28px", fontSize: "28px", marginLeft: "33px",     marginBottom: "13px", }} /></Link>                */}
                <button className='whatsapp-link' onClick={() => handleWhatsAppClick(card?.property_name, card.slug)}><img src={whatsapp} style={{width:"28px",height:"28px", fontSize: "28px", marginLeft: "30px",    marginBottom: "13px", }} /></button>

              
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}



function DesktopModal() {
    return (
        <div className="modal fade modal-cautom myresmodal" id="exampleModalpop1" tabIndex="-1" aria-labelledby="exampleModalpop1Label" aria-hidden="true">
            <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content popup1">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-4 popup1-img d-flex">
                                <div className="col-md-7 img-katext">
                                    <h5>Faisal Iqbal</h5>
                                    <p>Senior Sales Advisor on<br />Salwa Real Estate</p>
                                </div>
                            </div>
                            <div className="col-md-7 pop1-detal">
                                <h4>REQUEST CALLBACK</h4>
                                <p>Our Agent Will Help You.</p>
                                <form>
                                    <div className="mb-2">
                                        <label htmlFor="fullName" className="form-label form-labelapnahy">Full Name</label>
                                        <input type="text" className="form-control custom-input" id="fullName" placeholder="Your Name" />
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="phone" className="form-label form-labelapnahy">Phone</label>
                                        <input type="text" className="form-control custom-input" id="phone" placeholder="Phone" />
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="email" className="form-label form-labelapnahy">Email</label>
                                        <input type="text" className="form-control custom-input" id="email" placeholder="Email" />
                                    </div>
                                    <div className='d-flex'>
                                        <div className='col-12 resq-btn'><img src={requast} alt="Request Button" /></div>
                                        <div className="col-md-12 salwapop-logo">
                                            <img src={salwlogo} alt="Salwa Logo" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{ position: "absolute", top: "10px", right: "10px" }}></button>
        </div>
    );
}




export default ListCardAppart;
