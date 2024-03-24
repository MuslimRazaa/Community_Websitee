import React from 'react'
import "./card.css"
import card1 from "../../../assets/images/RA-card1.png"
import card2 from "../../../assets/images/RA-card2.png"
import card3 from "../../../assets/images/RA-card3.png"
import enquire from "../../../assets/images/enquire.png"
import bed  from "../../../assets/images/bed.png"
import sq from "../../../assets/images/sq.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone,faEnvelope,faBed,faBath,faMapLocationDot } from '@fortawesome/free-solid-svg-icons';

const dataArray = [
  {
    id: 1,
    date: "Sunday February 26, 2024",
    title: "Tilal Al Ghaf Secures Prestigious 'BREEAM Excellent' Certification for...",
    description: "Tilal Al Ghaf Secures Prestigious 'BREEAM Excellent' Certification for its Sustainable Placemaking Approach",
    imageUrl: card1
  },
   {
    id: 2,
    date: "Sunday February 26, 2024",
    title: "Tilal Al Ghaf Secures Prestigious 'BREEAM Excellent' Certification for...",
    description: "Tilal Al Ghaf Secures Prestigious 'BREEAM Excellent' Certification for its Sustainable Placemaking Approach",
    imageUrl: card2
  },
    {
    id: 3,
    date: "Sunday February 26, 2024",
    title: "Tilal Al Ghaf Secures Prestigious 'BREEAM Excellent' Certification for...",
    description: "Tilal Al Ghaf Secures Prestigious 'BREEAM Excellent' Certification for its Sustainable Placemaking Approach",
    imageUrl: card3
  },
    {
    id: 4,
    date: "Sunday February 26, 2024",
    title: "Tilal Al Ghaf Secures Prestigious 'BREEAM Excellent' Certification for...",
    description: "Tilal Al Ghaf Secures Prestigious 'BREEAM Excellent' Certification for its Sustainable Placemaking Approach",
    imageUrl: card2
  },
    {
    id: 5,
    date: "Sunday February 26, 2024",
    title: "Tilal Al Ghaf Secures Prestigious 'BREEAM Excellent' Certification for...",
    description: "Tilal Al Ghaf Secures Prestigious 'BREEAM Excellent' Certification for its Sustainable Placemaking Approach",
    imageUrl: card3
  },
    {
    id: 6,
    date: "Sunday February 26, 2024",
    title: "Tilal Al Ghaf Secures Prestigious 'BREEAM Excellent' Certification for...",
    description: "Tilal Al Ghaf Secures Prestigious 'BREEAM Excellent' Certification for its Sustainable Placemaking Approach",
    imageUrl: card1
  },
 
  // Add more objects as needed
];


function CardArticles() {
  return (
    <div style={{
        display:"flex",
        justifyContent:"space-between",
        flexWrap:"wrap",
        margin: "30px 0px",
    }}>
    {dataArray.map((item) => (
        <div className="ra-card" key={item.id}>
          <img
            className="card-img-top"
            src={item.imageUrl}
            alt={item.title}
          />
          <div className="ra-card-body">
            <p className='ra-card-sub-title'>{item.date}</p>
            <p className="ra-card-text">{item.title}</p>
            <p className='ra-card-description'>{item.description}</p>
            <span className='read-more'>Read More..</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CardArticles