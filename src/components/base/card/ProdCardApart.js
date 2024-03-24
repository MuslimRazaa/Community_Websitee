
import React, { useState, useEffect } from 'react';
import "./card.css";
import axios from 'axios'; // Import Axios
import bed from "../../../assets/images/bed.png";
import sq from "../../../assets/images/sq.png";
import enquire from "../../../assets/images/enquire.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faWhatsapp } from '@fortawesome/free-solid-svg-icons';
import { faSquareWhatsapp } from '@fortawesome/free-brands-svg-icons';
import whatsapp from "../../../assets/images/whatsapp-color-svgre.svg";
import { Link, useParams } from 'react-router-dom';
// import baseUrl from '../../../utils/utils'

function ProdCardApart() {
  const [cardData, setCardData] = useState([]);
  const [domain, setDomain] = useState('');
  const [firstParameter, setFirstParameter] = useState('');

  useEffect(() => {
    // Get the domain
    const currentDomain = window.location.hostname;
    setDomain(currentDomain);

    // Get the first parameter
    const pathArray = window.location.pathname.split('/');
    const firstParam = pathArray[1]; // Assuming first parameter is at index 1
    setFirstParameter(firstParam);
  }, []);

  const CurrentDomain = localStorage.getItem("DOMAIN")
 useEffect(() => {
    // Fetch data using Axios
    axios.get(`https://salwaproperties.com/community_web/api/featured_projects/${CurrentDomain}?X-API-KEY=3064c564d11154da943a1fd968822b6c`)
      .then(response => {
        setCardData(response.data);
        console.log(`https://salwaproperties.com/community_web/api/featured_projects/${CurrentDomain}?X-API-KEY=3064c564d11154da943a1fd968822b6c`)
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [CurrentDomain]);

        console.log(cardData, "card data")
  const baseUrl = `http://localhost:3000/${CurrentDomain}/projects`

  return (
    <div className='card-flex'>
      {cardData?.map(card => (
          <div className="card" key={card.id}>
            <Link to={`${baseUrl}/${card.slug}`} ><img
              className="card-img-top"
              src={card.cover_image}
              alt={card.title}
            /></Link>
            <span className='payment-tag'>{card.payment_plan}</span>
            <span className='featured-tag'>{card.status}</span>
            <span className='appart-tag'>{card.type_name}</span>
            <div className="card-body">
              <h3 className="card-title">{card.starting_price}</h3>
              <p className='card-sub-title'>{card.project_usps ? card.project_usps : "usps not available"}</p>
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
                <img src={whatsapp} style={{width:"28px",height:"28px", fontSize: "28px", marginLeft: "33px",     marginBottom: "13px", }} />               
              </div>  
            </div>
          </div>
        ))}
    </div>
  );
}

export default ProdCardApart;
