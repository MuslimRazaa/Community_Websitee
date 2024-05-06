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

function DetailTwo() {
  const [selectedOption1, setSelectedOption1] = useState('property');
  const [selectedOption2, setSelectedOption2] = useState('price_range');
  const [selectedOption3, setSelectedOption3] = useState('all_bedrooms');
  const [offlanProjects, setOfflanProjects] = useState();
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

  
    useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);  
      const CurrentDomain = localStorage.getItem("DOMAIN")  


   useEffect(() => {
    axios.get(`https://salwaproperties.com/community_web/api/new_projects/${CurrentDomain}?X-API-KEY=3064c564d11154da943a1fd968822b6c`)
      .then(response => {
        setOfflanProjects(response?.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  

  console.log(offlanProjects, "offlanProjects---------")
  
   return (
    <>


       <div className='det-page-side-menue'>
            <SideMenue logo={offlanProjects?.logo_image}/>
             {/* <div className="row-1" style={{ padding: "20px",}}>
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
    <Header3 />
    {/* card slider */}

        <Container>
      <div className='cards-main-slider'>
        <div className='cards-heading'>
          <h1>Offplan Projects in Arabian Ranches III</h1>
          {/* <p>see all the latest investment attractive new properties for sale in Arabian Ranches 3</p> */}
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
                <p  className='menue-box-p' >SEARCH PROPERTY</p>
          </div>
           </div>
        </div>
        </div>

        <div className="modal-filter">

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


     <div className='card-main-wrapper'>
        <Card/>
      </div>
    {/* <div className='view-more-button'>
        <button className='vm-btn'>LOAD MORE</button>
    </div> */}
  </div>
    </Container>

    <Map community={offlanProjects?.offplan_projects[0]?.community_name}/>
  <br></br>
    <Container>
      <Community ObjectForContent={offlanProjects}/>
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
  <Container>
      <SubFooter/>
    </Container>
      <Footer community={offlanProjects?.offplan_projects[0]?.community_name}/>    


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