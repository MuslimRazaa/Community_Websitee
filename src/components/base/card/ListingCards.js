// import React, { useState, useEffect } from 'react';
// import "./card.css";
// import axios from 'axios';
// import bed from "../../../assets/images/bed.png";
// import sq from "../../../assets/images/sq.png";
// import enquire from "../../../assets/images/enquire.png";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import whatsapp from "../../../assets/images/whatsapp-color-svgre.svg";
// import { faEnvelope, faWhatsapp } from '@fortawesome/free-solid-svg-icons';
// import PopupCardsGmail from '../PopupCardsGmail';
// import PopupProjCards from '../PopupProjCards';
// import { Link } from 'react-router-dom';

// function ListingCards() {
//   const [offlanProjects, setOfflanProjects] = useState([]);
//   const [visibleCards, setVisibleCards] = useState(6); // Number of cards initially visible
//   const [remainingCards, setRemainingCards] = useState(0);
//   const CurrentDomain = localStorage.getItem("DOMAIN")

//   // replace with listing api of cardss
//   useEffect(() => {
//     axios.get(`https://salwaproperties.com/community_web/api/new_projects/${CurrentDomain}?X-API-KEY=3064c564d11154da943a1fd968822b6c`)
//       .then(response => {
//         setOfflanProjects(response.data?.offplan_projects || []);
//         setRemainingCards(response.data?.offplan_projects?.length || 0);
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);

//   const handleLoadMore = () => {
//     setVisibleCards(prevVisibleCards => prevVisibleCards + 6); // Increase the number of visible cards
//   };

    
//     // const baseUrl = `https://${CurrentDomain}/projects`
//     const baseUrl = `http://localhost:3000/${CurrentDomain}/projects`
// const handleWhatsAppClick = (property, slug) => {
//   const message = `Hi There, I'm interested in ${property}. Kindly send me more information. Thank you! ${baseUrl}/${slug}`;
//   const whatsappLink = `https://api.whatsapp.com/send/?phone=971524474422&text=${encodeURIComponent(message)}&app_absent=0`;
//   window.open(whatsappLink, '_blank');
// };
//   return (
//     <div className='card-flex'>
//       {offlanProjects.slice(0, visibleCards).map(card => (
//         <div className="card" key={card.id}>
//          <Link to={`${baseUrl}/${card?.slug}`}><img
//             className="card-img-top"
//             src={card.cover_image}
//             alt={card.title}
//           /> </Link>
//           <span className='payment-tag'>{card.payment_plan}</span>
//           <span className='featured-tag'>{card.status}</span>
//           <span className='appart-tag'>{card.type_name}</span>
//           <div className="card-body">
//             <h3 className="card-title">{card.starting_price}</h3>
//             <p className='list-card-sub-title' title={card?.project_usps}>{card.project_usps ? card.project_usps : "usps not available"}</p>
//             <p className="card-text">{card.property_name}</p>
//             <div className='list-card-icon-flex'>
//               <div className='card-rooms' style={{ borderBottom: "0px" }}>
//                 <p style={{ width: "100px" }}> <img src={bed} width={"30px"} /> {card.bedroom}</p>
//               </div>
//               <div className='card-sq/ft'>
//                 <p style={{ width: "140px" }}><img src={sq} width={"30px"} /> {card.size} </p>
//               </div>
//             </div>
//             <div style={{display:"flex"}}>
//               <button className='enquire'> <Link to={`${baseUrl}/${card?.slug}`} style={{textDecoration:"none", color:"white"}}>More Detail</Link></button>
//               <PopupProjCards />
//               {/* <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: "28px", marginLeft: "33px" }} /> */}
//               {/* <Link to={`https://api.whatsapp.com/send/?phone=971524474422&amp;text=Hi+There%2C+I%27m+interested+in+${card?.property_name}+Kindly+send+me+more+information.+Thank+you%21+${`${baseUrl}/${card.slug}`}&amp;type=phone_number&amp;app_absent=0` } type="button" target="_blank" ><img src={whatsapp} style={{width:"28px",height:"28px", fontSize: "28px", marginLeft: "33px",marginBottom: "13px", }} /></Link>         */}
//              <button className='whatsapp-link' onClick={() => handleWhatsAppClick(card?.property_name, card?.slug)}><img src={whatsapp} style={{width:"28px",height:"28px", fontSize: "28px", marginLeft: "33px",marginBottom: "13px", }} /></button>    

              
//             </div>
//           </div>
//         </div>
//       ))}
//       {remainingCards > visibleCards && (
//         <div className='view-more-button'>
//           <button className='vm-btn' onClick={handleLoadMore}>LOAD MORE</button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default ListingCards;





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

function ListingCards({width, viewAll, listingProjects}) {
  const [visibleCards, setVisibleCards] = useState(4); // Number of cards initially visible
  const [remainingCards, setRemainingCards] = useState(0);

const cardData = listingProjects;
 const handleLoadMore = () => {
    setVisibleCards(prevVisibleCards => prevVisibleCards + 6); // Increase the number of visible cards
  };


const CurrentDomain = localStorage.getItem("DOMAIN")

const handleWhatsAppClick = (property, slug) => {
  const message = `Hi There, I'm interested in ${property}. Kindly send me more information. Thank you! ${baseUrl}/properties-for-sale/${slug}`;
  const whatsappLink = `https://api.whatsapp.com/send/?phone=971524474422&text=${encodeURIComponent(message)}&app_absent=0`;
  window.open(whatsappLink, '_blank');
};
  return (
    <>
    <div className='card-flex-filter'>
      {cardData?.slice(0, visibleCards)?.map((card) => (
        <div className='card-main-flex-filter'  style={{ width: width ? '62%' : '' , textAlign: "left",}}>
            <div className='image-section-filter-card'>
               <Link to={`${baseUrl}/properties-for-sale/${card.slug}`}> <img
                   className="card-img-top" src={card?.cover_image}/></Link>
            </div>
            <div className='text-section-filter-card'>
                 <h3 className="card-title-filter">{card?.starting_price}</h3>
                 <p className='card-sub-title-filter' title={`${card?.subTitle}`}>{card.project_usps}</p>
                 <p className="card-text-filter"> <FontAwesomeIcon icon={faLocationDot} />{card?.community_name}</p>
                 <p className="card-text2-filter">{card?.property_name}</p>
            <div className='flex-class'>
            <div className='card-rooms' style={{ borderBottom: "0px" }}>
              <p style={{ width: "100px" }}> <img src={bed} width={"30px"}/> {card?.bedroom}</p>
            </div>     
             <div className='card-sq/ft'>
               <p style={{ width: "140px" }}><img src={sq} width={"30px"}/> {card?.size}</p>
             </div> 
             </div>
             <div style={{ display:"flex", gap:"10px"}}>
      <Link to={`${baseUrl}/properties-for-sale/${card.slug}`}><button className='enquire' style={{fontSize: "15px"}}>More Detail →</button></Link>
                <PopupCards text={<FontAwesomeIcon icon={faEnvelope} style={{ fontSize: "28px", marginLeft: "33px"}}/>} />
              <button className='whatsapp-link' ><img src={whatsapp} onClick={() => handleWhatsAppClick(card?.property_name, card.slug)} style={{ marginLeft: "9px", width: "28px", marginBottom: "13px", }} /></button>

                   <div className='circle-image'>
                   </div>
              </div>
            </div>
        </div>
      ))}
       
    </div>
    {viewAll ? <Link to={"/listing"}><button className='vm-btn' >View All</button></Link> : <button className='vm-btn' onClick={handleLoadMore}>LOAD MORE</button>}
    {remainingCards > visibleCards && (
        <div className='view-more-button'>
          <button className='vm-btn' onClick={handleLoadMore} >LOAD MORE</button>
        </div>
      )}
  </>
  );
}


export default ListingCards



