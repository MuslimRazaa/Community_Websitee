import React, { useEffect } from 'react'
import SideMenue from '../../components/layout/Side-Menue/SideMenue'
import Filter from '../../components/base/filter/Filter'
import FilterCards from '../../components/base/filter/FilterCards'
import StepForm from '../../components/base/step form/StepForm'
import Footer from '../../components/layout/Footer/Footer'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Map from '../../components/base/map/Map';
import SubFooter from '../../components/layout/sub-footer/SubFooter'
import Dropdown from './DropDown'
import CustomDropdown from './DropDown'

function FilterPage() {

    const CurrentDomain = localStorage.getItem("DOMAIN")  
  const navigate = useNavigate();

  const handleNavigate = () => {
     navigate('/arabianranches.community#AreaGuide');
      scrollToSection('AreaGuide');
  };

    const scrollToSection = (AreaGuide) => {
    const section = document.getElementById(AreaGuide);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth'});
    }
  };

  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

const { firstParam, secondParam, thirdParam } = useParams();

const slugParam = {secondParam}

const url = slugParam?.secondParam;

const options = ["Apartment", "Villas", "Penthouse", "Townhouse", "Hotel-Apartment", "Studio"];

// Extracting dropdown option from URL
const dropdownOption = options.find(option => url.toLowerCase().includes(option.toLowerCase()));

// Extracting number from URL
const number = url.match(/\d+/)?.[0];

// Extracting "studio" from URL
const isStudio = url.toLowerCase().includes("studio");

// Saving dropdown option to a variable
const selectedOption = dropdownOption || "Default Option"; // Default option in case no match found

console.log("Selected Option----->>>:", selectedOption);
console.log("Number---------->>>:", number);
console.log("Is Studio------------>>>>:", isStudio);

  return (
    <>

    <div className='background-filter' >
       <SideMenue/> 
             {/* <div className="row-1" style={{ padding: "1px",}}>
             <div className='menue-main'>
                <div className='menue-item'>
                    <ul className='menue-ul' style={{ margin: "10px"}}>
                        <Link to="/projects" className='fake-menu'><li>New Projects</li></Link>
                        <Link to={`/${CurrentDomain}/listing`} className='fake-menu'><li>For Buy</li></Link>
                       <a href={`/${CurrentDomain}#AreaGuide`} className='fake-menu'><li>Area Guide</li></a>
                       <a href={`/${CurrentDomain}#LifeStyle`} className='fake-menu'><li>Life Style</li></a>
                        <Link to="/Agent" className='fake-menu'><li>Find Agents</li></Link>
                    </ul>
                </div> 
             </div>
            </div> */}
            <p></p>
        </div>
    <div>
        {/* <Filter type={selectedOption} bedroom={number}/> */}
    </div>
    <div>
        <FilterCards />
    </div>
    <div id='AreaGuide'>
      <StepForm/>
    </div>

<br></br>

    <div>
    <Container>
      <SubFooter/>
    </Container>
      <Footer/>
    </div>
    </>
  )
}

export default FilterPage