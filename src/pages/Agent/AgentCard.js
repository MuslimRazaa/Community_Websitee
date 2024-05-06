import React from 'react'
import "./Agent.css"
import img from "../../assets/images/Pop-Up-Salwa-01.png"
import whatsapp from "../../assets/images/whatsapp-svgrepo-com (2).svg";
import phone from "../../assets/images/phone-flip-alt-svgrepo-com (1).svg";
import email from "../../assets/images/email-open-svgrepo-com (2).svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faPhoneVolume } from '@fortawesome/free-solid-svg-icons';

function AgentCard() {

  const handleWhatsAppClick = () => {
      const CurrentDomain = localStorage.getItem("DOMAIN")  

  // const baseUrl= "http://localstorage:3000"
  const baseUrl= `https://${CurrentDomain}/`;
  const message = `Hi There, I'm interested. Kindly send me more information. Thank you! ${baseUrl}/Agent`;
  const whatsappLink = `https://api.whatsapp.com/send/?phone=971524474422&text=${encodeURIComponent(message)}&app_absent=0`;
  window.open(whatsappLink, '_blank');
};
  return (
 <div class="card-agent-form">
  <img src={img} alt="John" style={{width:"150px", height: "150px", borderRadius:"50%", objectFit:"cover",     transform: "translateY(-48px)"}}/>
  <h1 className='agent-card-name'>John Doe</h1>
  <p class="title">CEO & Founder, Example</p>
  <p>Harvard University</p>
  <div style={{margin: "24px 0"}}>
    <a href="#"><i class="fa fa-dribbble"></i></a> 
    <a href="#"><i class="fa fa-twitter"></i></a>  
    <a href="#"><i class="fa fa-linkedin"></i></a>  
    <a href="#"><i class="fa fa-facebook"></i></a> 
  </div>
  <hr style={{margin:"0px"}}></hr>

 <div className='agent-card-btn'>
    {/* <FontAwesomeIcon icon={faPhoneVolume} style={{    fontSize: "23px",
                      marginLeft: "33px", color:"#4b4848", transform: "translateY(5px)"}} />  */}
                      <img src={phone} style={{      width: "27px", fontSize: "23px",
                      marginLeft: "33px", color:"#4b4848", transform: "translateY(1px)"}}/>
     {/* <FontAwesomeIcon icon={faEnvelope} style={{    fontSize: "23px",
                      marginLeft: "33px", color:"#4b4848", transform: "translateY(5px)"}} />  */}
                      <img src={email} style={{      width: "30px", fontSize: "23px",
                      marginLeft: "33px", color:"#4b4848", transform: "translateY(1px)"}}/>
     
                  <button className='whatsapp-link' onClick={() => handleWhatsAppClick()} style={{color:"green"}}><img src={whatsapp} style={{   marginLeft:"32px",  width: "25px", marginBottom: "3px", }} /></button>

    </div>
</div>
  )
}

export default AgentCard