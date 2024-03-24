import React, { useEffect, useState } from 'react'
import Header from '../../components/layout/Header/header'
import Card from '../../components/base/card/card'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import nearby2 from "../../assets/images/nearby2.png"
import { Container, Form } from 'react-bootstrap';
import Map from '../../components/base/map/Map';
import Amenities from '../../components/base/amenities/Amenities';
import Community from '../../components/base/community/Community';
import Expert from '../../components/base/our expert/Expert';
import Button from 'react-bootstrap/Button';
import Quiz from '../../components/base/Quiz/Quiz';
import Slider from "../../components/base/slider/Slider";
import image1 from "../../assets/images/nearby1.png"
import image2 from "../../assets/images/nearby3.png"
import nearby1 from "../../assets/images/nearby1.png"
import Footer from '../../components/layout/Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faEnvelope, faGears, faMagnifyingGlass, faPhone, faSliders, faSlidersH } from '@fortawesome/free-solid-svg-icons';
import MyVerticallyCenteredModal from '../../components/base/search Filter/MyVerticallyCenteredModal';
import HeaderTwo from '../../components/layout/Header/HeaderTwo';
import SideMenue from '../../components/layout/Side-Menue/SideMenue';
import CenteredSlider from '../../components/base/slider/Slider';
import PropertyCard from '../../components/base/card/PropertyCard';
import axios from 'axios';
import InteriorSliderDetail from '../../components/base/slider/InteriorSliderDetail';
import ExteriorSliderDetail from '../../components/base/slider/ExteriorSliderDetail';
import ListingCardDetailpage from '../../components/base/card/ListingCardDetailpage';
import { useParams } from 'react-router-dom';




function Detail() {
  const [selectedOption1, setSelectedOption1] = useState('property');
  const [selectedOption2, setSelectedOption2] = useState('price_range');
  const [selectedOption3, setSelectedOption3] = useState('all_bedrooms');
  const [pageData, setPageData] = useState();
  const [activeCity, setActiveCity] = useState('Int');
  const [modalShow, setModalShow] = React.useState(false);
    const [searchValue, setSearchValue] = useState('');
  const [showExterior, setShowExterior] = useState(true);
  const [activePlan, setActivePlan] = useState('studio');
  const [activeCityB, setActiveCityB] = useState('Int');
 const [domain, setDomain] = useState('');
  const [firstParameter, setFirstParameter] = useState('');


  useEffect(() => {
    // Get the domain
    const currentDomain = window.location.hostname;
    setDomain(currentDomain);

    // Get the first parameter
    const pathArray = window.location.pathname.split('/');
    const firstParam = pathArray[1]; // Assuming first parameter is at index 1
    setFirstParameter(firstParam);
  }, []);

  
  console.log(firstParameter, "-------> firstParameter")
  console.log(domain, "------->domain domain")



  const handleExteriorClick = () => {
    setShowExterior(true);
  };
  const openCityB = (cityNameB) => {
    setActiveCityB(cityNameB);
  };
  const handleInteriorClick = () => {
    setShowExterior(false);
  };
  const floorPlan = (cityName) => {
    setActivePlan(cityName);
  };
  const openCity = (cityName) => {
    setActiveCity(cityName);
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


  
const { firstParam, secondParam, thirdParam } = useParams();
  const slugParam = {thirdParam}
  console.log(slugParam.thirdParam, "slug getting")
  const CurrentDomain = localStorage.getItem("DOMAIN")  

  useEffect (()=>{
    // Fetch data using Axios
    axios.get(`https://salwaproperties.com/community_web/api/project_detail/${CurrentDomain}/${slugParam.thirdParam}?X-API-KEY=3064c564d11154da943a1fd968822b6c`)
      .then(response => {
        // Assuming data is an array of objects containing necessary fields like price, subTitle, title, etc.
        setPageData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [CurrentDomain, slugParam.thirdParam]);

  console.log(`https://salwaproperties.com/community_web/api/project_detail/${CurrentDomain}/creek-edge-tower-2?X-API-KEY=3064c564d11154da943a1fd968822b6c`, "prod cards Link ")
// Set values in local storage
localStorage.setItem('meta_title', pageData?.meta_title);
localStorage.setItem('meta_desc', pageData?.meta_desc);
localStorage.setItem('meta_keywords', pageData?.meta_keywords);


const projectName = pageData?.project_name;


   const headerObj = {
    title: pageData?.property_name,
    startingPrice: pageData?.starting_price,
    paymentPlan: pageData?.payment_plan,
    coverImage: pageData?.cover_image,
  };
   const amenitiesObj = {
    amenities: pageData?.amenities,
  };
  const Interior = {
    GallInt: pageData?.interior_gallery,
  };
  const Exterior = {
    GallInt: pageData?.exterior_gallery,
  };

   useEffect(() => {
    // Get the domain
    const currentDomain = window.location.hostname;
    setDomain(currentDomain);

    // Get the first parameter
    const pathArray = window.location.pathname.split('/');
    const firstParam = pathArray[1]; // Assuming first parameter is at index 1
    setFirstParameter(firstParam);  
  }, []);
  

  if(domain === "localhost" && firstParameter != null){
      localStorage.setItem('DOMAIN', firstParameter);
  }
  else{
     localStorage.setItem('DOMAIN', domain);
  }





   return (
    <>

    {/* side menue */}

        <div className='det-page-side-menue'>
            <SideMenue/>
             <div className="row-1" style={{ padding: "1px",}}>
             <div className='menue-main'>
                <div className='menue-item'>
                    <ul className='menue-ul' style={{ margin: "10px",}}>
                        <li style={{color:"white"}}>New Projects</li>
                        <li style={{color:"white"}}>For Sale</li>
                        <li style={{color:"white"}}>Area Guide</li>
                        <li style={{color:"white"}}>Life Style</li>
                        <li style={{color:"white"}}>Find Agents</li>
                    </ul>
                </div>
             </div>
            </div>
            <p></p>
        </div>
       
    <HeaderTwo headerObj={headerObj}/>
    {/* card slider */}

{/* full width image section */}
    <section >
        <img src={pageData?.exterior_image} className='full-width-image'/>
    </section>


  <Container>
      <Amenities amenitiesObj={amenitiesObj}/>
    </Container>

    {/* slider */}
    <Container>
      <div className='detail-page-park-side'>
         <div className="imagecard-container">
             <h1>Park side hills by Arabian Ranches</h1>
             <button className='button-park-side'>REQUEST AVAILABLE UNITS & PRICES</button>
            <div dangerouslySetInnerHTML={{ __html: pageData?.full_content }}/>
            {/* <div className='image-park-side'>
              <div className='image-park-side-1'>
                <img src={image1} className='park-side-img-1' />
                <img src={image2}  className='park-side-img-2'/>
              </div>
            </div> */}
      </div>
      </div>
     <div className="w3-bar w3-black tabs-bar">
            <button className={`w3-bar-item w3-button ${activeCityB === 'Int' ? 'w3-blue' : ''}`} onClick={() => openCityB('Int')}>Interior</button>
            <button className={`w3-bar-item w3-button ${activeCityB === 'Ext' ? 'w3-blue' : ''}`} onClick={() => openCityB('Ext')}>Exterior</button>
          </div>

          <div id="Int" className="w3-container city" style={{ display: activeCityB === 'Int' ? 'block' : 'none' }}>
        <div className='card-main-wrapper'>
      <div style={{
        position:"relative"
      }}>|
          <InteriorSliderDetail Interior={Interior}/>
      </div>

          </div>
          </div>

          <div id="Ext" className="w3-container city" style={{ display: activeCityB === 'Ext' ? 'block' : 'none' }}>
          <div className='card-main-wrapper' >
        
      <div style={{
        position:"relative"
      }}>|
          <ExteriorSliderDetail Exterior={Exterior}/>
      </div>

          </div>
          </div>
    </Container>


        <Container>
      <div className='cards-main-slider'>
        <div className='cards-heading'>
          <h1>Popular Listing in {pageData?.community_name}</h1>
          <p>see all the latest investment attractive new properties for sale in Arabian Ranches 3</p>
        </div>


        <div className='outer-bg-menue'>
        <div className='menue-bar'>
          <div>
          <div className='menue-parrent'>
              <p  className='menue-box-keyword' >KEYWORDS</p>
            <div>
                <select id="dropdown1" value={selectedOption1} onChange={handleChange1}  className='menue-boxes'>
                  <option value="property" style={{color:"black"}}>PROPERTY</option>
                  <option value="price_range" style={{color:"black"}}>choice1</option>
                  <option value="all_bedrooms" style={{color:"black"}}>choice2</option>
                </select>
              </div>
              <div>

                <select id="dropdown2" value={selectedOption2} onChange={handleChange2}  className='menue-boxes'>
                  <option value="option1" style={{color:"black"}}>PRICE RANGE</option>
                  <option value="option2" style={{color:"black"}}>Option 2</option>
                  <option value="option3" style={{color:"black"}}>Option 3</option>
                </select>
              </div>
              <div>
                <select id="dropdown3" value={selectedOption3} onChange={handleChange3} className='menue-boxes'>
                  <option value="choice1" style={{color:"black"}}>All Bedrooms</option>
                  <option value="choice2" style={{color:"black"}}>Choice 2</option>
                  <option value="choice3" style={{color:"black"}}>Choice 3</option>
                </select>
              </div>
                <p  className='menue-box-p' >SEARCH PROPERTY</p>
          </div>
           </div>
        </div>
        </div>

        <div className="modal-filter">

           {/* modal */}
      <Form.Group controlId="exampleForm.ControlInputSearch">
            <Form.Control type="text" placeholder="Enter Key Words" value={searchValue} onChange={handleSearchChange} />
          </Form.Group>
          <Button className="modal-filter-btn-sm">
            Search <FontAwesomeIcon icon={faMagnifyingGlass} />
          </Button>
      <Button className="modal-filter-btn"  onClick={() => setModalShow(true)}>
       More Filter <FontAwesomeIcon icon={faSliders} />
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
     </div>


     <div className='card-main-wrapper'>
        <ListingCardDetailpage projectName={projectName}/>
      </div>


    <div className='view-more-button'>
        <button className='vm-btn'>View All Properties</button>
    </div>
  </div>
    </Container>

  {/* Map component */}
    {/* <Map/> */}
   

    <Container>
            <div className='cards-main-slider'>
        <div className='cards-heading'>
          <h1>Floor Plans of Arabian Ranches III</h1>
          <p>Discover Luxury Villas and townhouses for sale in Arabian Ranches III community</p>
        </div>

      <div className="floor-plan-tabs-bar">
        <button className={`w3-bar-item w3-floor-button ${activePlan === 'Bed1' ? 'w3-blue-floor' : ''}`} onClick={() => floorPlan('Bed1')}>1 Bed</button>
        <button className={`w3-bar-item w3-floor-button ${activePlan === 'Bed2' ? 'w3-blue-floor' : ''}`} onClick={() => floorPlan('Bed2')}>2 Bed</button>
        <button className={`w3-bar-item w3-floor-button ${activePlan === 'Bed3' ? 'w3-blue-floor' : ''}`} onClick={() => floorPlan('Bed3')}>3 Bed</button>
        <button className={`w3-bar-item w3-floor-button ${activePlan === 'studio' ? 'w3-blue-floor' : ''}`} onClick={() => floorPlan('studio')}>studio</button>
      </div>

      <div id="Bed1" className="w3-container city" style={{ display: activePlan === 'Bed1' ? 'block' : 'none' }}>
     <div className='card-main-wrapper'>
    <div className="image-section" >
      <div className="left-side floor-img" >
        <img src={nearby1} alt="Image" width="100%"/>
      </div>
      
      <div className="right-side">
        <h2 className='floorplan-heading'>1 Bedroom plan</h2>
        <p>Ask For Price</p>
        <div className="buttons">
          <button className='btn-floorPlan'>Open All Floor Plans</button><br></br>
          <button className='btn-downloadFloorPlan'>Download Brochure</button>
        </div>
      </div>
    </div>      </div>
      </div>

      <div id="Bed2" className="w3-container city" style={{ display: activePlan === 'Bed2' ? 'block' : 'none' }}>
      <div className='card-main-wrapper' >
          <div className="image-section" >
      <div className="left-side">
        <img src="image-url.jpg" alt="Image" />
      </div>
      
      <div className="right-side">
        <h2 className='floorplan-heading'>2 Bedroom plan</h2>
        <p>Ask For Price</p>
        <div className="buttons">
          <button className='btn-floorPlan'>Open All Floor Plans</button><br></br>
          <button className='btn-downloadFloorPlan'>Download Brochure</button>
        </div>
      </div>
    </div>
      </div>
      </div>

      <div id="Bed3" className="w3-container city" style={{ display: activePlan === 'Bed3' ? 'block' : 'none' }}>
       <div className='card-main-wrapper' >

    <div className="image-section" >
      <div className="left-side">
        <img src="image-url.jpg" alt="Image" />
      </div>
      
      <div className="right-side">
        <h2 className='floorplan-heading'>3 Bedroom plan</h2>
        <p>Ask For Price</p>
        <div className="buttons">
          <button className='btn-floorPlan'>Open All Floor Plans</button><br></br>
          <button className='btn-downloadFloorPlan'>Download Brochure</button>
        </div>
      </div>
    </div>

      </div>
      </div>

      <div id="studio" className="w3-container city" style={{ display: activePlan === 'studio' ? 'block' : 'none' }}>
       <div className='card-main-wrapper' >

      <div className="image-section" >
      <div className="left-side">
        <img src="image-url.jpg" alt="Image" />
      </div>
      
      <div className="right-side">
        <h2 className='floorplan-heading'>Studio ...</h2>
        <p>Ask For Price</p>
        <div className="buttons">
          <button className='btn-floorPlan'>Open All Floor Plans</button><br></br>
          <button className='btn-downloadFloorPlan'>Download Brochure</button>
        </div>
      </div>
    </div>

      </div>
      </div>
  </div>
    </Container>

    <Container>
      <Community/>
    </Container>

    <div className='payment-plan'>
      <Container>
            <h1 style={{
              
            }}>50/50 Payment plan from our Developmment</h1>
      </Container>
<section className='background-payment-plan'>
  <Container>
      <div className='payment-plan-main'>
        <div className='on-booking'>
          <h1>10%</h1>
          <p>On Booking</p>
        </div>
        <div className='on-construction'>
             <h1>40%</h1>
          <p>On Construction</p>
        </div>
        <div className='on-handover'>
             <h1>50%</h1>
          <p>On Handover</p>          
        </div>
      </div>
  </Container>
</section>
    </div>

    <Container>
      <Quiz/>
    </Container>

    <Container>
      <Expert/>
    </Container>
      <Footer/>    


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

export default Detail