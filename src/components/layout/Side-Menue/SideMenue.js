import React,  { useEffect, useState }  from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered, faX,faPhone } from "@fortawesome/free-solid-svg-icons";
import "../../../assets/styleSheet/style.css"
import axios from 'axios';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import baseUrl from '../../../utils/utils'


function SideMenue({logo}) {
      const [isOpen, setIsOpen] = useState(false);
    const [bannerData, setBannerData] = useState();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  
  useEffect(() => {
    // Function to update isMobile state based on window width
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);




// api integration
  const CurrentDomain = localStorage.getItem("DOMAIN")  
  useEffect (()=>{
    // Fetch data using Axios
    axios.get(`https://salwaproperties.com/community_web/api/index/${CurrentDomain}?X-API-KEY=3064c564d11154da943a1fd968822b6c`)
      .then(response => {
        // Assuming data is an array of objects containing necessary fields like price, subTitle, title, etc.
        setBannerData(response?.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [CurrentDomain]);

      const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };


const handleWhatsAppClick = (property, slug) => {
  const message = `Hi There, I'm interested. Kindly send me more information. Thank you! ${baseUrl}`;
  const whatsappLink = `https://api.whatsapp.com/send/?phone=971524474422&text=${encodeURIComponent(message)}&app_absent=0`;
  window.open(whatsappLink, '_blank');
};
console.log(CurrentDomain, "CurrentDomain...........")
  return (
    <div>
           <div className="sideMenue">
            <div className="sideMenuBar">
    {isMobile ? (
        <FontAwesomeIcon icon={faBarsStaggered} onClick={toggleSidebar} className='humberger-icon' style={{color:"#6d6d6d"}}/>
      ) : (
        <Link to={`/${CurrentDomain}`}>
          {/* <img src={bannerData?.upload_logo_image ? bannerData?.upload_logo_image : logo} className='logo-image'/>  */}
          <img src={bannerData?.upload_logo_image} className='logo-image'/> 
        </Link>
      )}
            </div>
            {isMobile ? <Link to={`/${CurrentDomain}`}>
          <img src={bannerData?.upload_logo_image ? bannerData?.upload_logo_image : logo} />
        </Link>  : 
            <div className="logo">
                        <Link to="/projects" className="fake-menu"> <li>New Projects</li></Link>
                        <Link to="/listing" className="fake-menu"><li>For Buy</li></Link>
                        <Link to={`/${CurrentDomain}#AreaGuide`} className="fake-menu"><li>Area Guide</li></Link>
                       <a href={`/${CurrentDomain}#LifeStyle`} className="fake-menu"><li>Life Style</li></a>
                        <Link to="/Agent" className="fake-menu"><li>Find Agents</li></Link>             
            </div>
            }
           <Link to={"https://api.whatsapp.com/send/?phone=971524474422&amp;text=Hi+There%2C+How+can+I+buy,+sell,+or+rent+a+residence+in+Dubai?.+Kindly+send+me+more+information.+Thank+you%21+http://localhost/uae-offplan.com/&amp;type=phone_number&amp;app_absent=0"} > <div className='contact-us-web'>
              <button onClick={() => handleWhatsAppClick()} className='header-contact-us'><FontAwesomeIcon icon={faWhatsapp} style={{color:"white"}} /> <span></span> Whats up</button>
            </div></Link>
            <div className='contact-us-mob'>
            <Link    to={"https://api.whatsapp.com/send/?phone=971524474422&amp;text=Hi+There%2C+How+can+I+buy,+sell,+or+rent+a+residence+in+Dubai?.+Kindly+send+me+more+information.+Thank+you%21+http://localhost/uae-offplan.com/&amp;type=phone_number&amp;app_absent=0"} ><button className='header-contact-us-mob'><FontAwesomeIcon icon={faWhatsapp} style={{color:"white"}}/></button></Link>
            </div>
                    <div className={`sidebar ${isOpen ? "open" : ""}`}>
          <div className="sidebar-content">
            <div className="sideMenuBar">
              {/* <FontAwesomeIcon
                className="humb-icon-cross"
                icon={""}
                onClick={toggleSidebar}
              /> */}
              <FontAwesomeIcon icon={faX} onClick={toggleSidebar}/>
            </div>
            <ul>

              <p></p>
              <p></p>  
                        <Link to="/projects" className="fake-menu-side"> <li>New Projectxs</li></Link>
                        <Link to={`${CurrentDomain}/listing`} className="fake-menu-side"><li>For Sale</li></Link>
                       <Link to={`/${CurrentDomain}#AreaGuide`} className="fake-menu-side"><li>Area Guide</li></Link>
                       <a href={`/${CurrentDomain}#LifeStyle`} className="fake-menu-side"><li>Life Style</li></a>
                        <Link to="/Agent" className="fake-menu-side"><li>Find Agents</li></Link>

            </ul> 
          </div>
        </div>
          </div>
    </div>
  )
}

export default SideMenue