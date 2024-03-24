import React, { useEffect, useState } from 'react'
import Header3 from '../../components/layout/Header/Header3'
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
import SideMenue from '../../components/layout/Side-Menue/SideMenue';

function DetailTwo() {
  const [selectedOption1, setSelectedOption1] = useState('property');
  const [selectedOption2, setSelectedOption2] = useState('price_range');
  const [selectedOption3, setSelectedOption3] = useState('all_bedrooms');
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
    console.log('Domain:', domain);
  }, []);
    
  
  
   return (
    <>


       <div className='det-page-side-menue'>
            <SideMenue/>
             <div className="row-1" style={{ padding: "20px",}}>
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
        </div>
    <Header3 />
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


     <div className='card-main-wrapper'>
        <Card/>
      </div>


    <div className='view-more-button'>
        <button className='vm-btn'>LOAD MORE</button>
    </div>
  </div>
    </Container>

      {/* Map component */}
    <Map/>

    <Container>
      <Community/>
    </Container>

    <Container>
      <Quiz/>
    </Container>

    <Container>
      <Subscribe />
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

export default DetailTwo