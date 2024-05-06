import React, { useState, useEffect } from 'react';
import "./card.css";
import axios from 'axios'; // Import Axios
import bed from "../../../assets/images/bed.png";
import sq from "../../../assets/images/sq.png";
import enquire from "../../../assets/images/enquire.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faWhatsapp } from '@fortawesome/free-solid-svg-icons';

function ProdCardTown() {
  const [cardData, setCardData] = useState([]);

 useEffect(() => {
    // Fetch data using Axios
    axios.get('https://salwaproperties.com/community_web/api/featured_projects/damachills.community?X-API-KEY=3064c564d11154da943a1fd968822b6c')
      .then(response => {
        // Assuming data is an array of objects containing necessary fields like price, subTitle, title, etc.
        setCardData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
<div className='card-flex'>
      {cardData
        .filter(card => card.type_name === "Townhouses") // Filter cards where status is "villas"
        .map(card => (
          <div className="card" key={card.id}>
            <img
              className="card-img-top"
              src={card.cover_image}
              alt={card.title}
            />
            <span className='payment-tag'>{card.payment_plan}</span>
            <span className='featured-tag'>{card.status}</span>
            <span className='appart-tag'>{card.type_name}</span>
            <div className="card-body">
              <h3 className="card-title">{card.starting_price}</h3>
              <p className='card-sub-title'>{card.project_usps}</p>
              <p className="card-text">{card.property_name}</p>
              <div className='card-rooms' style={{ borderBottom: "0px" }}>
                <p style={{ width: "100px" }}> <img src={bed} width={"30px"} /> {card.bedroom}</p>
              </div>
              <div className='card-sq/ft'>
                <p style={{ width: "140px" }}><img src={sq} width={"30px"} /> {card.size} </p>
              </div>
              <div>
                <img src={enquire} style={{ width: "189px" }} alt="Enquire" />
                <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: "28px", marginLeft: "33px" }} />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}


export default ProdCardTown;
