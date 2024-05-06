import React, { useEffect, useState } from 'react'
import Header3 from '../../components/layout/Header/Header3'
import Card from '../../components/base/card/card'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Container, Form } from 'react-bootstrap';
import Map from '../../components/base/map/Map';
import Subscribe from '../../components/base/subscribe now/Subscribe';
import Community from '../../components/base/community/Community';
import Expert from '../../components/base/our expert/Expert';
import Quiz from '../../components/base/Quiz/Quiz';
import Footer from '../../components/layout/Footer/Footer';
// import whatsapp from "../../../assets/images/whatsapp-color-svgre.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faEnvelope, faGears, faMagnifyingGlass, faPhone, faSliders, faSlidersH } from '@fortawesome/free-solid-svg-icons';
import { Link, useParams } from 'react-router-dom';
import SideMenue from '../../components/layout/Side-Menue/SideMenue';
import axios from 'axios';
import SubFooter from '../../components/layout/sub-footer/SubFooter';
import ListingCards from '../../components/base/card/ListingCards';
import StepForm from '../../components/base/step form/StepForm';

function Listing() {
  const [selectedOption1, setSelectedOption1] = useState('property');
  const [selectedOption2, setSelectedOption2] = useState('price_range');
  const [selectedOption3, setSelectedOption3] = useState('all_bedrooms');
  const [offlanProjects, setOffplanProjects] = useState();
  const [listingProjects, setListingProjects] = useState();
  const [activeCity, setActiveCity] = useState('Appartments');
    const [activeCityB, setActiveCityB] = useState('Int');
  const [modalShow, setModalShow] = React.useState(false);
    const [searchValue, setSearchValue] = useState('');

  const openCity = (cityName) => {
    setActiveCity(cityName);
  };
  const openCityB = (cityNameB) => {
    setActiveCityB(cityNameB);
  };
const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };
  const handleChange1 = (event) => {
    setSelectedOption1(event.target.value);
  };

  const handleChange2 = (event) => {
    setSelectedOption2(event.target.value);
  };

  const handleChange3 = (event) => {
    setSelectedOption3(event.target.value);
  };

  useEffect(() => {
    const domain = window.location.hostname;
  }, []);
    
      const CurrentDomain = localStorage.getItem("DOMAIN")  

//  this api is for new projects is only for diplayin some data but this is not correct it should be replce with listing api , 
   useEffect(() => {
    axios.get(`https://salwaproperties.com/community_web/api/listing/${CurrentDomain}?X-API-KEY=3064c564d11154da943a1fd968822b6c`)
      .then(response => {
        setOffplanProjects(response?.data);
        setListingProjects(response?.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [CurrentDomain]);
  
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  console.log(listingProjects, "listing Projects---------")
  console.log(listingProjects ? listingProjects[0]?.community_name: "" , "listing Projects community_name---------")
  
   return (
    <>


       <div className='det-page-side-menue'>
            <SideMenue logo={offlanProjects?.logo_image}/>
             {/* <div className="row-1" style={{ padding: "1px",}}>
             <div className='menue-main'>
                <div className='menue-item'>
                    <ul className='menue-ul' style={{ margin: "10px",}}>
                       <Link to="/projects" className='fake-menu'> <li>New Projects</li></Link>
                        <Link to={`/${CurrentDomain}/listing`} className='fake-menu'><li>For Buy</li></Link>
                       <a href="#AreaGuide" className='fake-menu'><li>Area Guide</li></a>
                       <a href={`/${CurrentDomain}#LifeStyle`} className='fake-menu'><li>Life Style</li></a>
                        <Link to="/Agent" className='fake-menu'><li>Find Agents</li></Link>
                    </ul>
                </div>
             </div>
            </div> */}
        </div>
    {/* <Header3 /> */}

        <Container>
      <div className='cards-main-slider' style={{textAlign: "center"}}>
        <div className='cards-heading'>
          <h1>Listing Projects in {listingProjects ? listingProjects[0]?.community_name : ""}</h1>
          {/* <p>see all the latest investment attractive new properties for sale in Arabian Ranches 3</p> */}
        </div>


     <div className='card-main-wrapper'>
        <ListingCards listingProjects={listingProjects} viewAll={""}/>
      </div>
    {/* <div className='view-more-button'>
        <button className='vm-btn'>LOAD MORE</button>
    </div> */}
  </div>
    </Container>

    <Map community={listingProjects ? listingProjects[0]?.community_name : ""}/>
  <br></br>
    <Container>
      <Community ObjectForContent={offlanProjects}/>
    </Container>
{/* 
    <Container>
      <Quiz/>
    </Container>

    <Container>
      <Subscribe />
    </Container>

    <Container>
      <Expert/>
    </Container> */}
    <div id='AreaGuide'>
      <StepForm/>
    </div>
  <Container>
      <SubFooter/>
    </Container>
      <Footer community={listingProjects ? listingProjects[0]?.community_name : ""}/>    


<div className='mobile-navigation-menu'>
  <div className='circle'>
    <div className='circle-inn'>
      <FontAwesomeIcon icon={faPhone} style={{fontSize: "40px",
    margin: "17px",
    color: "white",}}/>

    </div>
  </div>
  <div className='mobile-nav-icons'>
  
  <h1 style={{
    fontSize: "23px",
    color: "#2abd2a",}}> <FontAwesomeIcon icon={faPhone} /> Whatsapp</h1>
  <FontAwesomeIcon icon={faEnvelope} style={{    fontSize: "28px",
    marginLeft: "66px",}} />
  <FontAwesomeIcon icon={faArrowUp} style={{    fontSize: "28px",
    marginRight: "24px",}} />
      </div>
</div>
</>
  ) 
}

export default Listing