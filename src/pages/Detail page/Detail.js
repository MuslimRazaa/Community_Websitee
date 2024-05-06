import React, { useEffect, useState } from 'react'
import Header from '../../components/layout/Header/header'
import Card from '../../components/base/card/card'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import floorPlanImg from "../../assets/images/floor-plan.jpg"
import { Container, Form } from 'react-bootstrap';
import Map from '../../components/base/map/Map';
import bed from "../../assets/images/bed.png";
import sq from "../../assets/images/sq.png";
import whatsapp from "../../assets/images/whatsapp-color-svgre.svg";
import salwa from "../../assets/images/salwa-inverted-logo.png";
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
import { faArrowUp, faEnvelope, faLocationDot, faChevronDown, faPhone, faSliders, faSlidersH } from '@fortawesome/free-solid-svg-icons';
import MyVerticallyCenteredModal from '../../components/base/search Filter/MyVerticallyCenteredModal';
import HeaderTwo from '../../components/layout/Header/HeaderTwo';
import SideMenue from '../../components/layout/Side-Menue/SideMenue';
import CenteredSlider from '../../components/base/slider/Slider';
import PropertyCard from '../../components/base/card/PropertyCard';
import axios from 'axios';
import InteriorSliderDetail from '../../components/base/slider/InteriorSliderDetail';
import ExteriorSliderDetail from '../../components/base/slider/ExteriorSliderDetail';
import ListingCardDetailpage from '../../components/base/card/ListingCardDetailpage';
import { Link, useParams } from 'react-router-dom';
import SubFooter from '../../components/layout/sub-footer/SubFooter';
import HeaderNew from '../../components/base/NewDetailHeader/Header';
import FilterCards from '../../components/base/filter/FilterCards';
import PopupCards from '../../components/base/PopupCards';




function Detail() {
  const [selectedOption1, setSelectedOption1] = useState('property');
  const [selectedOption2, setSelectedOption2] = useState('price_range');
  const [selectedOption3, setSelectedOption3] = useState('all_bedrooms');
  const [pageData, setPageData] = useState();
  const [cardData, setCardData] = useState();
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

  
  useEffect(() => {
 window.scrollTo(0, 0);
   }, []);




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
  // const slugParam = {secondParam}
  const CurrentDomain = localStorage.getItem("DOMAIN")  

  useEffect (()=>{
    // Fetch data using Axios
    axios.get(`https://salwaproperties.com/community_web/api/project_detail/${CurrentDomain}/${slugParam.thirdParam}?X-API-KEY=3064c564d11154da943a1fd968822b6c`)
    // axios.get(`https://salwaproperties.com/community_web/api/project_detail/${CurrentDomain}/${slugParam.secondParam}?X-API-KEY=3064c564d11154da943a1fd968822b6c`)
      .then(response => {
        // Assuming data is an array of objects containing necessary fields like price, subTitle, title, etc.
        setPageData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [CurrentDomain, slugParam.thirdParam]);

// Set values in local storage
localStorage.setItem('meta_title', pageData?.meta_title);
localStorage.setItem('meta_desc', pageData?.meta_desc);
localStorage.setItem('meta_keywords', pageData?.meta_keywords);


const projectName = pageData?.project_name;

 useEffect(() => {
    // Fetch data using Axios
     axios.get(`https://salwaproperties.com/community_web/api/listing_properties/${CurrentDomain}/${projectName}?X-API-KEY=3064c564d11154da943a1fd968822b6c`)
      .then(response => {
        // Assuming data is an array of objects containing necessary fields like price, subTitle, title, etc.
        setCardData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [CurrentDomain, projectName]);


  console.log(cardData, "project detail page listing cards shown here")


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

 const scrollToLifestyle = () => {
    const lifestyleSection = document.getElementById('LifeStyle');
    lifestyleSection.scrollIntoView({ behavior: 'smooth' });
  };
 const scrollToAreaGuide = () => {
    const lifestyleSection = document.getElementById('AreaGuide');
    lifestyleSection.scrollIntoView({ behavior: 'smooth' });
  };

const ObjectForContent = {
  content: pageData?.full_content ? pageData?.full_content : "At Ocean Star, every day is an elevated experience of luxury and refinement. As a resident of Ocean Star, Dubai’s landmarks become a natural extension of your home. Enjoy the city’s rich heritage, the peacefulness of waterfront living, and the proximity to vibrant business districts.",
  community: pageData?.community_name,
}

// const nearby=[
//     {
//         "place_name": "Downtown Dubai",
//         "minutes": "25 Min min",
//         "place_image": "https://uae-offplan.com/admin.uae-offplan/uploads/community_web_pages/arabianranches.community/bd2174ddac246131c459877a9cdfa203.jpg"
//     },
//     {
//         "place_name": "Dubai Marina",
//         "minutes": "20 Min min",
//         "place_image": "https://uae-offplan.com/admin.uae-offplan/uploads/community_web_pages/arabianranches.community/f87d5e4eb7aba1a7caaa6f3bc3d3fbe2.jpg"
//     },
//     {
//         "place_name": "Jumeirah Village Circle",
//         "minutes": "18 Mint min",
//         "place_image": "https://uae-offplan.com/admin.uae-offplan/uploads/community_web_pages/arabianranches.community/a5a043e87f6b95048afab0a5c2584841.jpeg"
//     },
//     {
//         "place_name": "Jumeirah Village Triangle",
//         "minutes": "18 Mint min",
//         "place_image": "https://uae-offplan.com/admin.uae-offplan/uploads/community_web_pages/arabianranches.community/02c3353ff8337daf9ccde8ea3acc0bef.jpg"
//     }
// ]

console.log(slugParam, "slugggggggg")
const handleWhatsAppClick = () => {
  const message = `Hi There, I'm interested. Kindly send me more information. Thank you! `;
  const whatsappLink = `https://api.whatsapp.com/send/?phone=971524474422&text=${encodeURIComponent(message)}&app_absent=0`;
  window.open(whatsappLink, '_blank');
};
   return (
    <>

    {/* side menue */}

        <div className='det-page-side-menue'>
            <SideMenue/>
            <p></p>
        </div>
       
    <HeaderNew headerObj={headerObj}/>

  <Container>
    <div className='detail-page-container'>

      <div className="row">
        <div className="col-md-8">
          <div className="left-content" >
              <section className='first-section-new-detail'>
                <h4>Appartments</h4>
                <h1 style={{    color: "#0071a4"}}>{pageData?.property_name} from {pageData?.starting_price} AED</h1>
                <p className='tags'>Appartments | <FontAwesomeIcon icon={faLocationDot} /> Location</p>
                {/* <div className='developers-new-detail'>
                  <div className='developer-name'>
                    EMAAR
                  </div>
                  <div className='developer-logo'>
                    EMAAR LOGO
                  </div>
                </div> */}
              </section>
              <hr></hr>
              <Community ObjectForContent={ObjectForContent}/>
              <hr></hr>
              <section className='first-section-new-detail'>
                <h4>Available Units</h4>
                <h5 style={{marginTop:"40px",opacity:"0.4"}}>APPARTMENTS</h5>
              <div>
                <div className='developers-new-detail2' style={{marginTop:"0px",}}>
                  <div className='developer-name'>
                     <img src={bed} width={"30px"}/> 1 BED
                  </div>
                  <div className='units-dropDown'>
                  <div className='developer-logo'>
                    <img src={sq} width={"30px"}/> 789-993 sqft
                  </div>
                  <div className='developer-logo'>
                    from 1,700,000 AED
                  </div>
                  </div>
                </div>
                </div>

 <div>
  <br></br>
                <div className='developers-new-detail2' style={{marginTop:"0px",}}>
                  <div className='developer-name'>
                     <img src={bed} width={"30px"}/> 1 BED
                  </div>
                  <div className='units-dropDown'>
                  <div className='developer-logo'>
                    <img src={sq} width={"30px"}/> 789-993 sqft
                  </div>
                  <div className='developer-logo'>
                    from 1,700,000 AED
                  </div>
                  </div>
                </div>
               
                <div className='inner-developers-new-detail2 display-none'>
                    <div className='inner-table'>
                   <div className='developer-name-inner' style={{fontWeight:"900"}}>
                    Layout Type
                  </div>
                  <div className='units-dropDown'>
                  <div className='developer-logo-inner' style={{fontWeight:"900"}}>
                    Size
                  </div>
                  <div className='developer-logo-inner' style={{fontWeight:"900"}}>
                    FLoor Plan
                  </div>
                  </div>
                    </div>
                    <hr></hr>
                    <div className='inner-table'>
                        <div className='developer-name-inner'>
                    1 BED
                  </div>
                  <div className='units-dropDown'>
                  <div className='developer-logo-inner'>
                    789-993 sqft
                  </div>
                  <div className='developer-logo-inner'>
                    from 1,700,000 AED
                  </div>
                  </div>
                    </div>
                    <div className='inner-table'>
                        <div className='developer-name-inner'>
                    1 BED
                  </div>
                  <div className='units-dropDown'>
                  <div className='developer-logo-inner'>
                    789-993 sqft
                  </div>
                  <div className='developer-logo-inner'>
                    from 1,700,000 AED
                  </div>
                  </div>
                    </div>
                    <div className='inner-table'>
                        <div className='developer-name-inner'>
                    1 BED
                  </div>
                  <div className='units-dropDown'>
                  <div className='developer-logo-inner'>
                    789-993 sqft
                  </div>
                  <div className='developer-logo-inner'>
                    from 1,700,000 AED
                  </div>
                  </div>
                    </div>
                </div>
                </div>
                  
              </section>
              <hr></hr>
              {pageData?.amenities?.length === 0 ? "" : (<section className='aminities-new'>
                <div>
                  <br></br>
                  <h4>Amenities</h4>
                  <br></br>
                  <div className="row" >
                   {pageData?.amenities?.map((amenity, index) => (
                      <div className="col-md-4" >
                          <li style={{listStyle:"none"}} className='amenities-li'>
                            <img 
                              src={amenity.aminity_icon} 
                              alt={amenity.aminity_title} 
                              style={{ width: '24px', marginRight: '10px' }} 
                            />
                            {amenity.aminity_title}
                          </li>
                      </div>
                      ))}
                      </div>  
                </div>
              </section>)}
              <section>

      <div className='cards-main-slider'>
        {/* <div className='cards-heading' style={{textAlign:"left"}}>
          <h1>Popular Listing in {pageData?.community_name}</h1>
        </div> */}
                {/* <FilterCards width={"100%"} /> */}
                <ListingCardDetailpage projectName={projectName} width={"100%"} community={pageData?.community_name} />
    {/* <div className='view-more-button'>
        <button className='vm-btn'>Load More</button>
    </div> */}
  </div>

              </section>
          </div>
        </div>
        
        {/* Right side with 5 columns */}
        <div className="col-md-4">
          <div className="right-content" style={{position: 'sticky', top: 10 }}>
            <div className='box-filter' >
             <div className='box-form-1'>
              <div className='row'>
                <div className='col-md-4'>
                    {/* <h1>Logo</h1> */}
                    <img src={salwa}     width={"100px"} />
                </div>
                <div className='col-md-8'>
                  <div className='text'>
                    <h3>Salwa Properties</h3>
                    <p>+971 4 248 3400</p>
                    <p> info@tanamiproperties.ae</p>
                    <div className='whatspp-logo'>
                     <img src={whatsapp} style={{     marginLeft: "27px", width: "30px", marginBottom: "8px", }} onClick={() => handleWhatsAppClick()}/> Whatsapp
                    </div>
            </div>                
            </div>
              </div>
               </div>
    <br></br>
                  <div className='input-form'>
                    <h3>Get in touch</h3>
                    <div className='form'>
                      <input type='text' placeholder='Name'className='name-input'></input>
                      <input type='email' placeholder='Email'className='email-input'></input>
                      <input type='number' placeholder='Phone number' className='phone-input'></input>
                      <button className='form-btn'>Send Message</button>
                    </div>
                  </div>
            </div>
            {/* <div className='form-3'>
                  <div className='text-3'>
                    <h3 className='text-3-1'>Direct Sales and Commission</h3>
                    <h3 className='text-3-2'>BUY WITH BITCOIN</h3>
                    <h3 className='text-3-2'>CHECK MORTAGE</h3>
                    </div>                
            </div> */}
          </div>
        </div>
    </div>
    </div>


  </Container>



  {/* Map component */}
    <Map community={pageData?.community_name}/>
   
    {/* nearBy component */}
    {/* <Container>
       <h1 className='heading-nearby' style={{textAlign:"left"}}>Nearby Places</h1>
      <div className="row" style={{marginTop: "0rem",}}>
      {nearby?.map((place, index) => (
          <div className="col-md-6" key={index} style={{padding: "18px 15px",}}>
            <div className='img-fluid-container'>
              <img src={place.place_image} style={{width:"100%", height:"300px"}} className="img-fluid" alt={place.place_name} />
            </div>
            <p className='nearby-tag-1'>{nearby?.community_name}</p>
            <h1 className='nearby-tag-2'>{place.place_name}</h1>
            <p className='nearby-time'>{place.minutes}</p>
          </div>
        ))}
      </div>
    </Container> */}

     <div className='payment-plan'>
      <Container>
            <h1 style={{
              color:"#0071a4",
              fontWeight: 600,
              textAlign:"left",
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
      <div id="LifeStyle" className='detail-page-park-side'>
         <div className="imagecard-container">
             <h1> Photo Gallery</h1>
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
      }}>
          <InteriorSliderDetail Interior={Interior}/>
      </div>

          </div>
          </div>

          <div id="Ext" className="w3-container city" style={{ display: activeCityB === 'Ext' ? 'block' : 'none' }}>
          <div className='card-main-wrapper' >
        
      <div style={{
        position:"relative"
      }}>
          <ExteriorSliderDetail Exterior={Exterior}/>
      </div>

          </div>
          </div>
    </Container>




    <Container>
            <div className='cards-main-slider'>
        <div className='cards-heading'>
          <h1>Floor Plans of {pageData?.community_name}</h1>
        </div>

      <div className="floor-plan-tabs-bar" style={{display:"flex", justifyContent:"center"}}>
        <button className={`w3-bar-item w3-floor-button ${activePlan === 'Bed1' ? 'w3-blue-floor' : ''}`} onClick={() => floorPlan('Bed1')}>1 Bed</button>
        <button className={`w3-bar-item w3-floor-button ${activePlan === 'Bed2' ? 'w3-blue-floor' : ''}`} onClick={() => floorPlan('Bed2')}>2 Bed</button>
        <button className={`w3-bar-item w3-floor-button ${activePlan === 'Bed3' ? 'w3-blue-floor' : ''}`} onClick={() => floorPlan('Bed3')}>3 Bed</button>
        <button className={`w3-bar-item w3-floor-button ${activePlan === 'studio' ? 'w3-blue-floor' : ''}`} onClick={() => floorPlan('studio')}>studio</button>
      </div>

      <div id="Bed1" className="w3-container city" style={{ display: activePlan === 'Bed1' ? 'block' : 'none' }}>
     <div className='card-main-wrapper'>
    <div className="image-section" >
      <div className="left-side floor-img" >
        <img src={floorPlanImg} alt="Image" width="100%"/>
      </div>
      
      <div className="right-side">
        <h2 className='floorplan-heading'>1 Bedroom plan</h2>
        <p>Ask For Price</p>
        <div className="buttons">
          <button className='btn-floorPlan'>Open All Floor Plans</button><br></br>
          {/* <button className='btn-downloadFloorPlan'>Download Brochure asasda</button> */}
                    <PopupCards 
                           text={
                              <button className='btn-downloadFloorPlan'>
                                 Download the brochure
                              </button>
                           }
                    />
        </div>
      </div>
    </div>      </div>
      </div>

      <div id="Bed2" className="w3-container city" style={{ display: activePlan === 'Bed2' ? 'block' : 'none' }}>
      <div className='card-main-wrapper' >
          <div className="image-section" >
        <div className="left-side floor-img" >
        <img src={floorPlanImg} alt="Image" width="80%"/>
      </div>
      
      <div className="right-side">
        <h2 className='floorplan-heading'>2 Bedroom plan</h2>
        <p>Ask For Price</p>
        <div className="buttons">
          <button className='btn-floorPlan'>Open All Floor Plans</button><br></br>
          {/* <button className='btn-downloadFloorPlan'>Download Brochure</button> */}
         <PopupCards 
                           text={
                              <button className='btn-downloadFloorPlan'>
                                 Download the brochure
                              </button>
                           }
                    />
        
        </div>
      </div>
    </div>
      </div>
      </div>

      <div id="Bed3" className="w3-container city" style={{ display: activePlan === 'Bed3' ? 'block' : 'none' }}>
       <div className='card-main-wrapper' >

    <div className="image-section" >
          <div className="left-side floor-img" >
        <img src={floorPlanImg} alt="Image" width="80%"/>
      </div>
      
      <div className="right-side">
        <h2 className='floorplan-heading'>3 Bedroom plan</h2>
        <p>Ask For Price</p>
        <div className="buttons">
          <button className='btn-floorPlan'>Open All Floor Plans</button><br></br>
          {/* <button className='btn-downloadFloorPlan'>Download Brochure</button> */}
         <PopupCards 
                           text={
                              <button className='btn-downloadFloorPlan'>
                                 Download the brochure
                              </button>
                           }
                    />
        
        </div>
      </div>
    </div>

      </div>
      </div>

      <div id="studio" className="w3-container city" style={{ display: activePlan === 'studio' ? 'block' : 'none' }}>
       <div className='card-main-wrapper' >

      <div className="image-section" >
          <div className="left-side floor-img" >
        <img src={floorPlanImg} alt="Image" width="80%"/>
      </div>
      
      <div className="right-side">
        <h2 className='floorplan-heading'>Studio ...</h2>
        <p>Ask For Price</p>
        <div className="buttons">
          <button className='btn-floorPlan'>Open All Floor Plans</button><br></br>
          {/* <button className='btn-downloadFloorPlan'>Download Brochure</button> */}
         <PopupCards 
                           text={
                              <button className='btn-downloadFloorPlan'>
                                 Download the brochure
                              </button>
                           }
                    />
        
        </div>
      </div>
    </div>

      </div>
      </div>
  </div>
    </Container>

    {/* <Container>
      <Community/>
    </Container> */}

   

    <Container>
      <Quiz/>
    </Container>

    <Container>
      <Expert/>
    </Container>
       <br></br>
    <Container>
      <SubFooter/>
    </Container>
      <Footer community={pageData?.community_name}/>    


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