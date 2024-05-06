import React from 'react'
import "./footer.css"
import { faArrowUp,faCircleUp } from '@fortawesome/free-solid-svg-icons';
import { faFacebook,faTwitter,faInstagram,faYoutube, faWhatsapp } from '@fortawesome/free-brands-svg-icons'; // Assuming you want to use the Facebook brand icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import logo from "../assets/images/The Lux Dubai text n fonts UI-UX-32.png"
// import LUXlogo from "../assets/images/The Lux Dubai text n fonts UI-UX-25.webp"
// import whatsapp from "../assets/images/whatsapp-ar21.svg"
// import sirr from "../assets/images/sirr.png"
import { Link } from 'react-router-dom';
import PopupCards from '../../base/PopupCards';

function Footer( {community} ) {
    const handleScrollTop = () => {
        window.scrollTo({
      top: 0,
      behavior: 'smooth' // Add smooth scrolling behavior
    });    }
  return (
    <>
          <div className='section-footer'>
              <div className='footer-main'>
                  <div className='basic-footer-section'>
                      <div className='basic-footer-top'>
                          <div className='footer-icons'>
                              <p className='footer-icon-text'>Follow us on:</p> 
                              <FontAwesomeIcon icon={faFacebook} className='fb' />
                              <FontAwesomeIcon icon={faTwitter} className='twiter'/>
                              <FontAwesomeIcon icon={faInstagram} className='insta' />
                              <FontAwesomeIcon icon={faYoutube} className='yt'/>
                          </div>
                          
                      </div>
                      <hr style={{color:"white"}}/>
                       <div className='basic-footer-mid'>
                        <div className="dis-f-footer">
                          <div className='footerMid-row-1'>
                              <h1>Projects</h1>
                              <ul>
                                  <li>Emmar property for sale in {community}</li>
                                  <li>Viewz By DANUBES</li>
                                  <li>SOBAH ONE</li>
                                  <li>VIEW ALL <FontAwesomeIcon icon={faArrowUp} className='footer-button-arrow'/></li>
                              </ul>
                          </div>
                          <div className='footerMid-row-2'>
                              <h1>Developers</h1>
                                <ul>
                                  <li>DAMMAC PROPERTIES</li>
                                  <li>DUBAI PROPERTIES</li>
                                  <li>ELLINGTON PROPERTIES</li>
                                  <li>EMAAR PROPERTIES</li>
                                  <li>SOBAH REALITY</li>
                                  <li>VIEW ALL <FontAwesomeIcon icon={faArrowUp} className='footer-button-arrow'/></li>
                              </ul>
                          </div>
                        </div>
                          <div className='footerMid-row-4'>
                          <h1>Discover</h1>
                                <ul>
                                  <li>TOTAL FREE CUSTOMER CARE</li>
                                  <li>+(971) 123 050 945</li>
                                  <li>LUX@PROPERTY.COM</li>
                              </ul>
                              <h4 className='footer-row4-h4'>keep yourself upto date.</h4>
                              {/* <button className='footer-row4-btn'>YOUR MAIL <span className='footer-span-for-padding'> </span> SUBSCRIBE</button> */}
                           <PopupCards 
                           text={
                              <button className='footer-row4-btn'>YOUR MAIL <span className='footer-span-for-padding'> </span> SUBSCRIBE</button>
                           }
                    />
                          
                          </div>
                      </div>
                      <div className='basic-footer-midLower'>
                          <img src={""} className='LuxDubai-footer-img'/>
                      </div>
                      <FontAwesomeIcon icon={faCircleUp} className='circle-up' onClick={handleScrollTop}/>
                        <hr className='hr-bottom'/>
                      <div className='basic-footer-lower' >
                        <p>Lux All Rights reserved</p>
                          <p>PRIVACY | TERMS | SITEMAPS</p>
                          <br></br>
                      </div>
                  </div>
              </div>
          </div>  
    </>
  )
}

export default Footer