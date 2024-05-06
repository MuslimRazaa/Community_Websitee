import React from 'react';
import "./card.css";
import Aziz from "../../../assets/images/card.png";
import enquire from "../../../assets/images/enquire.png";
import bed  from "../../../assets/images/bed.png";
import sq from "../../../assets/images/sq.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone,faEnvelope,faBed,faBath,faMapLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function PropertyCard() {
  // Define card data
  const cardData = [
    {
      id: 1,
      price: "AED 2,370,000",
      subTitle: "Bolyvourd View | High floor | brand new",
      title: "Nikki Beach Residency",
      rooms: "1,2,3,4,5",
      sqFt: "7235",
      image: Aziz
    },
    {
      id: 2,
      price: "AED 2,370,000",
      subTitle: "Bolyvourd View | High floor | brand new",
      title: "Nikki Beach Residency",
      rooms: "1,2,3,4,5",
      sqFt: "7235",
      image: Aziz
    },
    {
      id: 3,
      price: "AED 2,370,000",
      subTitle: "Bolyvourd View | High floor | brand new",
      title: "Nikki Beach Residency",
      rooms: "1,2,3,4,5",
      sqFt: "7235",
      image: Aziz
    },
    {
      id: 4,
      price: "AED 2,370,000",
      subTitle: "Bolyvourd View | High floor | brand new",
      title: "Nikki Beach Residency",
      rooms: "1,2,3,4,5",
      sqFt: "7235",
      image: Aziz
    },
    {
      id: 5,
      price: "AED 2,370,000",
      subTitle: "Bolyvourd View | High floor | brand new",
      title: "Nikki Beach Residency",
      rooms: "1,2,3,4,5",
      sqFt: "7235",
      image: Aziz
    },
    {
      id: 6,
      price: "AED 2,370,000",
      subTitle: "Bolyvourd View | High floor | brand new",
      title: "Nikki Beach Residency",
      rooms: "1,2,3,4,5",
      sqFt: "7235",
      image: Aziz
    },
    // Add more card objects as needed
  ];

  return (
    <div className='card-flex'>
      {cardData?.map((card) => (
        <div className="card" key={card.id}>
          <img
            className="card-img-top"
            src={card.image}
            
          />
          <span className='payment-tag'>50/50 payment plan</span>
          <span className='featured-tag'>Featured</span>
          <span className='appart-tag'>Appartment</span>
          <div className="card-body">
            <h3 className="card-title">{card.price}</h3>
            <p className='card-sub-title'>{card.subTitle}</p>
            <p className="card-text">{card.title}</p>
            <div className='card-rooms' style={{ borderBottom: "0px" }}>
              <p style={{ width: "100px" }}> <img src={bed} width={"30px"}/> {card.rooms}</p>
            </div>          
            <div className='card-sq/ft'>
              <p style={{ width: "140px" }}><img src={sq} width={"30px"}/> {card.sqFt} sq/fts</p>
            </div>
            <div>
                              <button className='enquire'>Enquire Now</button>
              {/* <img src={enquire} style={{ width: "189px" }}/> */}
                <FontAwesomeIcon icon={faEnvelope} style={{    fontSize: "28px",
    marginLeft: "33px",}} />
                <FontAwesomeIcon icon={faWhatsapp} style={{    fontSize: "28px",
    marginLeft: "33px",}} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PropertyCard;
