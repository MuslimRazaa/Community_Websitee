import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SideMenue from '../../components/layout/Side-Menue/SideMenue'
import { Container, Form } from 'react-bootstrap';
import "./Agent.css"
import AgentCard from './AgentCard';
import SubFooter from '../../components/layout/sub-footer/SubFooter';
import Footer from '../../components/layout/Footer/Footer';
function FindAgent() {
    const CurrentDomain = localStorage.getItem("DOMAIN")  
    useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []); 

  return (
    <div>
          {/* side menue */}

        <div className='det-page-side-menue'>
            <SideMenue/>
             {/* <div className="row-1" style={{ padding: "1px",}}>
             <div className='menue-main'>
                <div className='menue-item'>
                    <ul className='menue-ul' style={{ margin: "10px"}}>
                        <Link to="/projects"> <li >New Projects</li></Link>  
                        <Link to={`/${CurrentDomain}/listing`}> <li >For Buy</li></Link>
                        <div></div>
                        <a href="#AreaGuide"><li>Area Guide</li></a>
                         <a href="#LifeStyle"><li >Life Style</li></a>
                        <Link to="/Agent"><li>Find Agents</li></Link>
                    </ul>
                </div>
             </div>
            </div> */}
            <p></p>
        </div>

      
          <div className='form'>
              <h1>Best real estate company in Dubai,<br></br> fam Properties agents</h1>
          </div>
          {/* content */}
          <Container>
            <div className='content-back'>
              <p>At Ocean Star, every day is an elevated experience of luxury and refinement. It's a sanctuary where appreciation for the finer things in life is a daily norm. Indulge in the serenity of our signature canal pool, reminiscent of the world's most exclusive resorts. The lush gardens offer a peaceful retreat, blending the city's energy with the calm of nature. Our sports and recreational amenities are tailored for your enjoyment and relaxation, making Ocean Star the epitome of comfort and elegant <br></br> At Ocean Star, every day is an elevated experience of luxury and refinement. It's a sanctuary where appreciation for the finer things in life is a daily norm. Indulge in the serenity of our signature canal pool, reminiscent of the world's most exclusive resorts. The lush gardens offer a peaceful retreat, blending the city's energy with the calm of nature. Our sports and recreational amenities are tailored for your enjoyment and relaxation, making Ocean Star the epitome of comfort and elegant </p>
            </div>
            </Container>
            <hr className='hr-sep'></hr>
            <Container>

              <div className='form-area'>
                <h1>Join Us !</h1>
                <div className='col--1'>
                  <input type='text' placeholder='Name' className='name'></input>
                  <input type='number' placeholder='Phone Number' className='phone'></input>
                </div>
                <div className='col--2'>
                  <input type='email' placeholder='Email' className='email'></input>
                  <input type='text' placeholder='Nationality' className='nationality'></input>
                </div>
                <div className='col--3'>
                  <button className='agent-form-btn'>Submit</button>
                </div>
              </div>
            </Container>

            {/* cards */}
            <Container>
              <div className='card-flex'>
                <AgentCard/>
                <AgentCard/>
                <AgentCard/>
                <AgentCard/>
              </div>
            </Container>
            <br></br>
            <br></br>
            <Container>
              <SubFooter/>
              <Footer/>
            </Container>
    </div>
  )
}

export default FindAgent