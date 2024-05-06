
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
import PopupCards from '../PopupCards';
import baseUrl from "../../../utils/utils"

function ProdCardApart({community, text}) {
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
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [CurrentDomain]);


const handleWhatsAppClick = (property, slug) => {
  const message = `Hi There, I'm interested in ${property}. Kindly send me more information. Thank you! ${baseUrl}/projects/${slug}`;
  const whatsappLink = `https://api.whatsapp.com/send/?phone=971524474422&text=${encodeURIComponent(message)}&app_absent=0`;
  window.open(whatsappLink, '_blank');
};
console.log(baseUrl, "base url utills current domain")

  return (
    <>
    {cardData.length === 0 ? "" : <div className='cards-heading'>
          <h1>Offplan Projects in {community}</h1>
          {/* <p>see all the latest investment attractive new properties for sale in {bannerData?.community_name}</p> */}
      </div>}
    <div className='card-flex'>
      {cardData?.map(card => (
          <div className="card" key={card.id}>
           <div className='image-hover-div'>
            <Link to={`${baseUrl}/projects/${card.slug}`} ><img
              className="card-img-top"
              src={card.cover_image}
              alt={card.title}
            /></Link>
            </div>
            <span className='payment-tag'>{card.payment_plan}</span>
            <span className='featured-tag'>{card.status}</span>
            <span className='appart-tag'>{card.type_name}</span>
            <div className="card-body">
              <h3 className="card-title">{card.starting_price}</h3>
              <p className='list-card-sub-title' title={card?.project_usps}>{card.project_usps ? card.project_usps : "usps not available"}</p>
              <p className="card-text">{card.property_name}</p>
              <div className='list-card-icon-flex'>
              <div className='card-rooms' style={{ borderBottom: "0px" }}>
                <p style={{ width: "100px" }}> <img src={bed} width={"30px"} /> {card.bedroom}</p>
              </div>
              <div className='card-sq/ft'>
                <p style={{ width: "140px" }}><img src={sq} width={"30px"} /> {card.size} </p>
              </div>
              </div>
              <div style={{display:"flex", gap:"10px"}}>
                <Link to={`${baseUrl}/projects/${card.slug}`}  ><button className='enquire' style={{width:"145px"}}>More Details</button></Link>          
                <PopupCards text={<FontAwesomeIcon icon={faEnvelope} style={{ fontSize: "28px", marginLeft: "33px"}}/>}/>
                <button className='whatsapp-link' onClick={() => handleWhatsAppClick(card?.property_name, card.slug)}><img src={whatsapp} style={{width:"28px",height:"28px", fontSize: "28px", marginLeft: "30px",    marginBottom: "13px", }} /></button>
              </div>  
            </div>
          </div>
        ))}
    </div>
{cardData.length === 0 ? ""  :  <div className='view-more-button'>
        <Link to="/projects"><button className='vm-btn' >View All</button></Link>
    </div> }
    </>
  );
}

// style={{width:"100px"}}
export default ProdCardApart;
