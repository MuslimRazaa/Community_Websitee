import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import paymentPlan from "../../../assets/images/payment_grey.svg"
import startingPrice from "../../../assets/images/price_grey.svg"
import image1 from "../../../assets/images/pngtree-building-looking-up-at-the-background-of-high-rise-buildings-picture-image_2444255.jpg"
import image3 from "../../../assets/images/3.jpg"
import "../../base/carousel/banner.css";
import {
  faArrowRight,
  faBackward,
  faForward
} from "@fortawesome/free-solid-svg-icons";
import SideMenue from '../Side-Menue/SideMenue';
import MyVerticallyCenteredModal from "../../base/search Filter/MyVerticallyCenteredModal";
import { Button } from "react-bootstrap";
import PopupProjects from "../../base/PopupProjects";
import { Link } from "react-router-dom";


 const items = [
    {
      backgroundImage: image1,
      heading: "Luxury 3 & 4 BR Townhouses in Emaar",
      headingContinue: " Arabian Ranches III",
      content: " May in Arabian Ranches III is one of the most recent projects by Emaar Properties, and will be the last community in the area.",
    },
  ];

function Header() {
  const [currentSlide, setCurrentSlide] = useState(0);
  

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === items.length - 1 ? 0 : prevSlide + 1
    );
  };

  // Function to switch to the previous slide
  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? items.length - 1 : prevSlide - 1
    );
  };

  return (
    <>
<div className="first-section">
    <div className="content">   
        <div className="banner">
             
      {items.map((item, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? "active" : ""}`}
          style={{ backgroundImage: `url(${item.backgroundImage})` }}
        >
          <div className="content">
             <div className="bannercontent2" style={{position:"relative"}}>
                
            <div className="row-2">
              <p>{item.heading}<br></br>{item.headingContinue}</p>
            </div>
            <div className="row-3">
              <p>
                  {item.content}
              </p>
            </div>
            <div className="row-4">
              <div className="Start-price">
                <div>
                    <img src={startingPrice} />
                </div>
               <div>
                    <p className="AED-content">AED 11,000,000</p>
                    <p>STARTING PRICE</p>
                </div>
              </div>

              <div className="End-price">
                <img src={paymentPlan} />
                <p className="END-content">Easy 60/40</p>
                <p>PAYMENT PLAN</p>
              </div>
            </div>
            <div className="row-5" style={{ marginRight: "0px" }}>
           <Link to="https://arabianranches.community/projects/may-townhouses"> <button onClick={"toggleModal3"} className='header-Discover-New'>Discover New Projects <FontAwesomeIcon icon={faArrowRight} /></button> </Link>
            {/* <button className='header-Get-info'>Get More Info</button> */}
            <PopupProjects text="Get More Info"/>
            </div>
            
          </div>
          </div>
           
        </div>
      ))}


    </div>
                 </div>
        </div>

    </>
  )
}

export default Header