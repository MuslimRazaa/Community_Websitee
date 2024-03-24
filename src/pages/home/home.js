import React, { useEffect, useState } from 'react'
import Header from '../../components/layout/Header/header'
import Card from '../../components/base/card/card'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import nearby1 from "../../assets/images/nearby1.png"
import nearby3 from "../../assets/images/nearby3.png"
import nearby4 from "../../assets/images/nearby4.png"
import nearby5 from "../../assets/images/nearby5.png"
import nearby6 from "../../assets/images/nearby6.png"
import { Container, Form } from 'react-bootstrap';
import Map from '../../components/base/map/Map';
import Subscribe from '../../components/base/subscribe now/Subscribe';
import ImageCrousel from '../../components/base/carousel/ImageCarousel';
import CardArticles from '../../components/base/card/CardArticles';
import FAQ from '../../components/base/FAQ/Faq';
import Amenities from '../../components/base/amenities/Amenities';
import Community from '../../components/base/community/Community';
import Expert from '../../components/base/our expert/Expert';
import MyButton from '../../components/layout/button/button';
import Button from 'react-bootstrap/Button';
import Quiz from '../../components/base/Quiz/Quiz';
import Footer from '../../components/layout/Footer/Footer';
import DetCrousel from '../../components/base/carousel/detCrousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faEnvelope, faGears, faMagnifyingGlass, faPhone, faSliders, faSlidersH } from '@fortawesome/free-solid-svg-icons';
import MyVerticallyCenteredModal from '../../components/base/search Filter/MyVerticallyCenteredModal';
import { useParams } from 'react-router-dom';
import CenteredSlider from '../../components/base/slider/Slider';
import ProdCardVillas from '../../components/base/card/ProdCardVillas';
import ProdCardTown from '../../components/base/card/ProdCardTown';
import ProdCardApart from '../../components/base/card/ProdCardApart';
import ListCardAppart from '../../components/base/card/ListCardAppart';
import ListCardTown from '../../components/base/card/ListCardTown';
import ListCardVillas from '../../components/base/card/ListCardVillas';
import { setSelectionRange } from '@testing-library/user-event/dist/utils';
import axios from 'axios';

function Home() {
  const [selectedOption1, setSelectedOption1] = useState('property');
  const [selectedOption2, setSelectedOption2] = useState('price_range');
  const [selectedOption3, setSelectedOption3] = useState('all_bedrooms');
  const [activeCity, setActiveCity] = useState('Appartments');
  const [activePlan, setActivePlan] = useState('studio');
    const [activeCityB, setActiveCityB] = useState('Int');
  const [modalShow, setModalShow] = React.useState(false);
    const [searchValue, setSearchValue] = useState('');
 const [domain, setDomain] = useState('');
  const [firstParameter, setFirstParameter] = useState('');

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
    <Header/>
    {/* card slider */}

    <Container>
      <div className='cards-main-slider'>
        <div className='cards-heading'>
          <h1>Offplan Projects in Arabian Ranches III</h1>
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

      <div id="Appartments" className="w3-container city" style={{ display: activeCity === 'Appartments' ? 'block' : 'none' }}>
     <div className='card-main-wrapper'>
                <ProdCardApart/>

            {/* <ListCardTown/>
             <ListCardVillas/> */}
      </div>
      </div>
    <div className='view-more-button'>
        <button className='vm-btn'>View All Properties</button>
    </div> 


  </div>
    </Container>

    {/* card slider 2*/}
    <Container>
      <div className='cards-main-slider'>
        <div className='cards-heading'>
          <h1>Popular Listing in Arabian Ranches III</h1>
          <p>Discover Luxury Villas and townhouses for sale in Arabian Ranches III community</p>
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

      {/* <div className="w3-bar w3-black tabs-bar">
        <button className={`w3-bar-item w3-button ${activeCity === 'Appartments' ? 'w3-blue' : ''}`} onClick={() => openCity('Appartments')}>Appartments</button>
        <button className={`w3-bar-item w3-button ${activeCity === 'TownHouse' ? 'w3-blue' : ''}`} onClick={() => openCity('TownHouse')}>Town Houses</button>
        <button className={`w3-bar-item w3-button ${activeCity === 'Villas' ? 'w3-blue' : ''}`} onClick={() => openCity('Villas')}>Villas</button>
      </div> */}

      <div id="Appartments" className="w3-container city" style={{ display: activeCity === 'Appartments' ? 'block' : 'none' }}>
     <div className='card-main-wrapper'>
        <ListCardAppart />
      </div>
      </div>

      {/* <div id="TownHouse" className="w3-container city" style={{ display: activeCity === 'TownHouse' ? 'block' : 'none' }}>
      <div className='card-main-wrapper' >
        <ProdCardTown/>
      </div>
      </div>

      <div id="Villas" className="w3-container city" style={{ display: activeCity === 'Villas' ? 'block' : 'none' }}>
       <div className='card-main-wrapper' >
        <ProdCardVillas/>
      </div>
      </div> */}
  </div>
    </Container>
      {/* Map component */}
    <Map/>


    {/* nearBy component */}
    <Container>
       <h1 className='heading-nearby'>Features and Amenities</h1>
      <div className="row" style={{marginTop: "0rem",}}>
        <div className="col-md-6">
          <img src={nearby1}  className="img-fluid" />
          <p className='nearby-tag-1'>EMAAR BEACH FRONT</p>
          <h1 className='nearby-tag-2'>BEACH MANSION</h1>
          <p className='nearby-time'>20 Min</p>
        </div>
        <div className="col-md-6">
          <img src={nearby6} alt="Image 2" className="img-fluid" />
          <p className='nearby-tag-1'>EMAAR BEACH FRONT</p>
          <h1 className='nearby-tag-2'>BEACH MANSION</h1>
          <p className='nearby-time'>20 Min</p>        </div>
      </div>
      <div className="row" style={{marginTop: "1rem",}}>
        <div className="col-md-6">
          <img src={nearby3}  className="img-fluid" />
          <p className='nearby-tag-1'>EMAAR BEACH FRONT</p>
          <h1 className='nearby-tag-2'>BEACH MANSION</h1>
          <p className='nearby-time'>20 Min</p>        </div>
        <div className="col-md-6">
          <img src={nearby4} alt="Image 2" className="img-fluid" />
          <p className='nearby-tag-1'>EMAAR BEACH FRONT</p>
          <h1 className='nearby-tag-2'>BEACH MANSION</h1>
          <p className='nearby-time'>20 Min</p>        </div>
      </div>
       <div className="row" style={{marginTop: "1rem",}}>
        <div className="col-md-6">
          <img src={nearby5}  className="img-fluid" />
          <p className='nearby-tag-1'>EMAAR BEACH FRONT</p>
          <h1 className='nearby-tag-2'>BEACH MANSION</h1>
          <p className='nearby-time'>20 Min</p>        </div>
        <div className="col-md-6">
          <img src={nearby6} alt="Image 2" className="img-fluid" />
          <p className='nearby-tag-1'>EMAAR BEACH FRONT</p>
          <h1 className='nearby-tag-2'>BEACH MANSION</h1>
          <p className='nearby-time'>20 Min</p>        </div>
      </div>
    </Container>

    {/* slider */}
    {/* <Container>
 <div className="imagecard-container">
             <h1>Life Style in Arabian Ranches III community</h1>
            <p>
             Choose a property in premium areas. All options are with finishing. You can find a quiet life in a villa on an
              island surrounded by the endless sea, or the rhythmic business life of skyscrapers in the center of Dubai.
            </p>
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
          <CenteredSlider/>
      </div>

          </div>
          </div>

          <div id="Ext" className="w3-container city" style={{ display: activeCityB === 'Ext' ? 'block' : 'none' }}>
          <div className='card-main-wrapper' >
        
      <div style={{
        position:"relative"
      }}>|
          <CenteredSlider/>
      </div>

          </div>
          </div>
    </Container> */}
    
    {/* amenities */}
    {/* <Container>
      <Amenities/>
    </Container> */}

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
            <p>
             Choose a property in premium areas. All options are with finishing. You can find a quiet life in a villa on an
              island surrounded by the endless sea, or the rhythmic business life of skyscrapers in the center of Dubai.
            </p>
            <div className="img-card-wrapper">
              <ImageCrousel />
            </div>
          </div>
        </div>

    </Container>

    <Container>
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
    </Container>

    <Container>
      <FAQ/>
    </Container>

    <Container>
      <Community/>
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

export default Home