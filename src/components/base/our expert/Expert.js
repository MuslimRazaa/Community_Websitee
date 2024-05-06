import React from 'react'
import girl from '../../../assets/images/girl.png'
import "./ourExpert.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Button from '../../layout/button/button'
import { Link } from 'react-router-dom'
import baseUrl from '../../../utils/utils'
function Expert() {

const handleWhatsAppClick = () => {
  const message = `Hi There, I'm interested. Kindly send me more information. Thank you! ${baseUrl}/projects`;
  const whatsappLink = `https://api.whatsapp.com/send/?phone=971524474422&text=${encodeURIComponent(message)}&app_absent=0`;
  window.open(whatsappLink, '_blank');
};


  return (
    <div className='main-expert-section'>
        <div className='expert-img'>
            <img src={girl} className='expert-image-img'/>
        </div>
    <div className='content-expert-section'>
        <h1>Our Expert Will Help You Buy</h1>
        <p style={{    marginTop: "0px",}}></p>
        <form>
            <p>Full Name</p>
            <input type='text' placeholder='Your Name'/>
            <p>Phone</p>
            <input type='number' placeholder='Your Phone'/>
             <p>Email</p>
            <input type='email' placeholder='Your email'/>
        </form>
        <div className='buttons-flex'>
            <Button/><button className='whatsapp-expert' onClick={() => handleWhatsAppClick()} style={{ background: '#007062', width: '145px', color:"white" }}>
  <FontAwesomeIcon icon={faWhatsapp} style={{ marginRight: '10px', color:"white" }} />
  Whatsapp
</button>
            </div>
            
                
       
    </div>
    </div>
  )
}

export default Expert