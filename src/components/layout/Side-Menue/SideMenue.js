import React,  { useState }  from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered, faX,faPhone } from "@fortawesome/free-solid-svg-icons";
import "../../../assets/styleSheet/style.css"
function SideMenue() {
      const [isOpen, setIsOpen] = useState(false);


      const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
           <div className="sideMenue">
            <div className="sideMenuBar">
              <FontAwesomeIcon icon={faBarsStaggered}  onClick={toggleSidebar} className='humberger-icon'/>
            </div>
            <div className="logo">
                <h2 className='Header-text-center'>ARABIAN RANCHES III</h2>
                <p className='header-text-properties'>PROPERTIES</p>
            </div>
            <div className='contact-us-web'>
              <button className='header-contact-us'><FontAwesomeIcon icon={faPhone} /> Contact us</button>
            </div>
            <div className='contact-us-mob'>
              <button className='header-contact-us-mob'><FontAwesomeIcon icon={faPhone} /></button>
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
              <li className="fake-menu">Home</li>
              <li className="fake-menu">Contact</li>
              <li className="fake-menu">Communities</li>
              <li className="fake-menu">Services</li>
              <li className="fake-menu">New Projects</li>
              <li className="fake-menu">Contact us</li>
              <li className="fake-menu">About us</li>
            </ul>
          </div>
        </div>
          </div>
    </div>
  )
}

export default SideMenue