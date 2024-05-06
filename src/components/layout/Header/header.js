import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import paymentPlan from "../../../assets/images/payment_grey.svg"
import startingPrice from "../../../assets/images/price_grey.svg"
import image1 from "../../../assets/images/1.jpg"
import image3 from "../../../assets/images/3.jpg"
// import requast from '../assets/images/Button-01.svg'
// import salwlogo from '../assets/images/salwa-inverted-logo.png' 
import "../../base/carousel/banner.css";
import {
  faArrowRight,
  faBackward,
  faForward
} from "@fortawesome/free-solid-svg-icons";
import SideMenue from '../Side-Menue/SideMenue';
import MyVerticallyCenteredModal from "../../base/search Filter/MyVerticallyCenteredModal";
import { Button } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import Popup1 from "../../Popup1";
import Popup2 from "../../base/Popup2";





function Header() {
  const [currentSlide, setCurrentSlide] = useState(0);
    const [bannerData, setBannerData] = useState();

// api integration
  const CurrentDomain = localStorage.getItem("DOMAIN")  
  useEffect (()=>{
    // Fetch data using Axios
    axios.get(`https://salwaproperties.com/community_web/api/index/${CurrentDomain}?X-API-KEY=3064c564d11154da943a1fd968822b6c`)
      .then(response => {
        // Assuming data is an array of objects containing necessary fields like price, subTitle, title, etc.
        setBannerData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [CurrentDomain]);



// 

 const items = [
    {
      backgroundImage: bannerData?.desktop_cover_image,
      heading: bannerData?.slider_heading1,
      headingContinue:  bannerData?.community_name,
      content: bannerData?.slider_tagline,
      price: bannerData?.slider_price,
      paymentPlan: bannerData?.slider_payment_plan,
      link: bannerData?.slider_button_link,
    },
    {
      backgroundImage: bannerData?.desktop_cover_image2,
      heading: bannerData?.slider_heading2,
      content: bannerData?.slider_tagline2,
      price: bannerData?.slider_price2,
      paymentPlan: bannerData?.slider_payment_plan2,
      link: bannerData?.slider_button_link2,

    },
      {
      backgroundImage: bannerData?.desktop_cover_image3,
      heading: bannerData?.slider_heading3,
      content:bannerData?.slider_tagline3,
      price: bannerData?.slider_price3,
      paymentPlan: bannerData?.slider_payment_plan3,
      link: bannerData?.slider_button_link3,
    },
    // Add more items as needed
  ];
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
             
      {items?.map((item, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? "active" : ""}`}
          style={{ backgroundImage: `url(${item.backgroundImage})` }}
        >
           
          <div className="content">
            <SideMenue/>
            {/* <h3>{item.text}</h3> */}
             <div className="bannercontent" style={{position:"relative"}}>
                
    <FontAwesomeIcon icon={faBackward} style={{left: "31px",
        position: "absolute",
        top: "15rem",}}

        onClick={prevSlide}
     />

                        {/* <div className="row-1">
             <div className='menue-main'>
                <div className='menue-item'>
                    <ul className='menue-ul'>
                       <Link to="/projects" className='fake-menu'><li>New Projects</li></Link>
                        <Link to={`/${CurrentDomain}/listing`} className='fake-menu'><li>For Buy</li></Link>
                       <a href="#AreaGuide" className='fake-menu'><li>Area Guide</li></a>
                       <a href={`/${CurrentDomain}#LifeStyle`} className='fake-menu'><li>Life Style</li></a>
                        <Link to="/Agent" className='fake-menu'><li>Find Agents</li></Link>
                    </ul>
                </div>
             </div>
            </div> */}
            <div className="row-2">
              <p>{item.heading}</p>
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
                    <p className="AED-content">{item?.price ? item?.price : "Ask for Price"}</p>
                    <p>STARTING PRICE</p>
                </div>
              </div>

              <div className="End-price">
                <img src={paymentPlan} />
                <p className="END-content">Easy {item?.paymentPlan}</p>
                <p>PAYMENT PLAN</p>
              </div>
            </div>
            <div className="row-5" style={{ marginRight: "0px" }}>
            <Link to={item?.link} > <button className='header-Discover-New'>Discover New Projects <FontAwesomeIcon icon={faArrowRight} /></button></Link>
            {/* <button className='header-Get-info'>Get More Info</button> */}
            <Popup1 text="Get More Info"/>
            </div>
            
            <FontAwesomeIcon icon={faForward}  
            style={{
                    position: "absolute",
                    right: "10px",
                    top: "15rem",
                    color:"white"
             }}
             onClick={nextSlide} 
             />
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