import React, { useEffect, useState } from 'react'
import Header from '../../components/layout/Header/header'
import Card from '../../components/base/card/card'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Container, Form } from 'react-bootstrap';
import Map from '../../components/base/map/Map';
import Subscribe from '../../components/base/subscribe now/Subscribe';
import ImageCrousel from '../../components/base/carousel/ImageCarousel';
import FAQ from '../../components/base/FAQ/Faq';
import Community from '../../components/base/community/Community';
import Expert from '../../components/base/our expert/Expert';
import Quiz from '../../components/base/Quiz/Quiz';
import Footer from '../../components/layout/Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import ProdCardApart from '../../components/base/card/ProdCardApart';
import ListCardAppart from '../../components/base/card/ListCardAppart';
import axios from 'axios';
import AmenitiesHome from '../../components/base/amenities/AmenitiesHome';
import InteriorSliderHome from '../../components/base/slider/InteriorSliderHome';
import ExteriorSliderHome from '../../components/base/slider/ExteriorSliderHome';
import SubFooter from '../../components/layout/sub-footer/SubFooter';
import ListingCards from '../../components/base/card/ListingCards';


function Home() {
  const [selectedOption1, setSelectedOption1] = useState('property');
    const [listingProjects, setListingProjects] = useState();
  const [selectedOption2, setSelectedOption2] = useState('price_range');
  const [selectedOption3, setSelectedOption3] = useState('all_bedrooms');
  const [activeCity, setActiveCity] = useState('Appartments');
  const [activePlan, setActivePlan] = useState('studio');
    const [activeCityB, setActiveCityB] = useState('Int');
  const [modalShow, setModalShow] = React.useState(false);
    const [searchValue, setSearchValue] = useState('');
 const [domain, setDomain] = useState('');
  const [firstParameter, setFirstParameter] = useState('');
  const [bannerData, setBannerData] = useState();

  const openCity = (cityName) => {
    setActiveCity(cityName);
  };
  const floorPlan = (cityName) => {
    setActivePlan(cityName);
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
   
   
//      useEffect(() => {
//  window.scrollTo(0, 0);
//    }, []);

   
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
  const CurrentDomain = localStorage.getItem("DOMAIN")  
  useEffect (()=>{
    // Fetch data using Axios
    axios.get(`https://salwaproperties.com/community_web/api/index/${CurrentDomain}?X-API-KEY=3064c564d11154da943a1fd968822b6c`)
      .then(response => {
        // Assuming data is an array of objects containing necessary fields like price, subTitle, title, etc.
        setBannerData(response.data);
         localStorage.setItem('slug', response?.data?.community_slug);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [CurrentDomain]);

console.log(bannerData, "banertdaeraa")

   useEffect(() => {
    axios.get(`https://salwaproperties.com/community_web/api/listing/${CurrentDomain}?X-API-KEY=3064c564d11154da943a1fd968822b6c`)
      .then(response => {
        setListingProjects(response?.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [CurrentDomain]);
  

console.log(bannerData, "bannerData-------------")
const ObjectForContent = {
  content: bannerData?.homepage_content ? bannerData?.homepage_content : "Lorem ipsum",
  community: bannerData?.community_name,
}



   return (
    <>
    <Header/>
    {/* card slider */}

    <Container>
      <div className='cards-main-slider'>
      <div id="Appartments" className="w3-container city" style={{ display: activeCity === 'Appartments' ? 'block' : 'none' }}>
     <div className='card-main-wrapper'>
                <ProdCardApart community={bannerData?.community_name}/>
      </div>
      </div>
  </div>
    </Container>

  {  <Container>
      <div className='cards-main-slider'>
        <div className='cards-heading'>
          <h1>Popular Listing in {bannerData?.community_name}</h1>
          {/* <p>Discover Luxury Villas and townhouses for sale in {bannerData?.community_name} community</p> */}
        </div>


        {/* <div className='outer-bg-menue'>
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
                <input type='search' placeholder='search' style={{color:"white",}} className='menue-box-p' />
          </div>
           </div>
        </div>
        </div> */}



        {/* <div className="modal-filter">

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
     </div> */}

      {/* <div className="w3-bar w3-black tabs-bar">
        <button className={`w3-bar-item w3-button ${activeCity === 'Appartments' ? 'w3-blue' : ''}`} onClick={() => openCity('Appartments')}>Appartments</button>
        <button className={`w3-bar-item w3-button ${activeCity === 'TownHouse' ? 'w3-blue' : ''}`} onClick={() => openCity('TownHouse')}>Town Houses</button>
        <button className={`w3-bar-item w3-button ${activeCity === 'Villas' ? 'w3-blue' : ''}`} onClick={() => openCity('Villas')}>Villas</button>
      </div> */}

      <div id="Appartments" className="w3-container city" style={{ display: activeCity === 'Appartments' ? 'block' : 'none' }}>
     <div className='card-main-wrapper'>
        <ListingCards listingProjects={listingProjects} viewAll={"viewAll"} />
      </div>
      </div>
  </div>
    </Container>}


      {/* Map component */}
    <Map community={bannerData?.community_name}/>


    {/* nearBy component */}
    <Container>
       <h1 className='heading-nearby'>Nearby Places</h1>
      <div className="row" style={{marginTop: "0rem",}}>
      {bannerData?.nearby?.map((place, index) => (
          <div className="col-md-6" key={index} style={{padding: "18px 15px",}}>
            <div className='img-fluid-container'>
              <img src={place.place_image} style={{width:"100%", height:"300px"}} className="img-fluid" alt={place.place_name} />
            </div>
            <p className='nearby-tag-1'>{bannerData?.community_name}</p>
            <h1 className='nearby-tag-2'>{place.place_name}</h1>{/* Assuming this is static */}
            <p className='nearby-time'>{place.minutes}</p>
          </div>
        ))}

      </div>

    </Container>

    {/* slider */}
    <Container>
        <div id='LifeStyle' className="imagecard-container">
             <h1>Life Style in {bannerData?.community_name} community</h1>
            {/* <p>
             Choose a property in premium areas. All options are with finishing. You can find a quiet life in a villa on an
              island surrounded by the endless sea, or the rhythmic business life of skyscrapers in the center of Dubai.
            </p> */}
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
          <InteriorSliderHome Interior={bannerData?.interior_gallery}/>
      </div>

          </div>
          </div>

          <div id="Ext" className="w3-container city" style={{ display: activeCityB === 'Ext' ? 'block' : 'none' }}>
          <div className='card-main-wrapper' >
        
      <div style={{
        position:"relative"
      }}>
          <ExteriorSliderHome Exterior={bannerData?.exterior_gallery}/>
      </div>

          </div>
          </div>
    </Container>
    
    {/* amenities */}
    <Container>
    {bannerData?.amenities?.length === 0 ? "" : <AmenitiesHome amenitiesObj={bannerData?.amenities}/>}
    </Container>

    <Container>
      <Quiz/>
    </Container>

    <Container>
      <Subscribe />
    </Container>

    <Container>
      <div className="third-section">
          <div className="imagecard-container">
             <h1>More Than In Dubai Popular Areas</h1>
            {/* <p>
             Choose a property in premium areas. All options are with finishing. You can find a quiet life in a villa on an
              island surrounded by the endless sea, or the rhythmic business life of skyscrapers in the center of Dubai.
            </p> */}
            <div className="img-card-wrapper">
              <ImageCrousel />
            </div>
          </div>
        </div>

    </Container>

    {/* <Container>
      <div className='recent-articles'>
        <div className='recent-articles-content'>
          <h1>Recent Articles</h1>
          <p>
             Choose a property in premium areas. All options are with finishing. You can find a quiet life in a villa on an
              island surrounded by the endless sea, or the rhythmic business life of skyscrapers in the center of Dubai.
            </p>
        </div>

        <div className='recent-articles-cards'>
          <CardArticles/>
        </div>
      </div>
    </Container> */}

    <Container>
      {bannerData?.faqs?.length === 0 ? ""  : <FAQ faqData={bannerData?.faqs}/>}
      
    </Container>

    <Container>
      <Community ObjectForContent={ObjectForContent}/>
    </Container>

    <Container>
      <Expert/>
    </Container>
    <br></br>
    <Container>
      <SubFooter/>
    </Container>
      <Footer  community={bannerData?.community_name}/>    


<div className='mobile-navigation-menu'>
  <div className='circle'>
    <div className='circle-inn'>
      <FontAwesomeIcon icon={faPhone} style={{fontSize: "40px",
    margin: "17px",
    color: "white",}}/>

    </div>
  </div>
  <div className='mobile-nav-icons'>

   <Link to={"https://api.whatsapp.com/send/?phone=971524474422&amp;text=Hi+There%2C+How+can+I+buy,+sell,+or+rent+a+residence+in+Dubai?.+Kindly+send+me+more+information.+Thank+you%21+http://localhost/uae-offplan.com/&amp;type=phone_number&amp;app_absent=0"} style={{textDecoration: "none",}} ><h1 style={{
    fontSize: "23px",
    color: "#2abd2a",}}> <FontAwesomeIcon icon={faPhone} /> Whatsapp</h1></Link> 
  <FontAwesomeIcon icon={faEnvelope} style={{    fontSize: "28px",
    marginLeft: "66px",}} />
  <FontAwesomeIcon icon={faArrowUp} style={{    fontSize: "28px",
    marginRight: "24px",}} />
      </div>
</div>
</>
  ) 
}

export default Home