import React from 'react';
import "../../../assets/styleSheet/style.css"
import { Link } from 'react-router-dom';

const questions = [
    { text1: "Apartments For Sale In Business Bay Dubai", text2: "Duplexs For Sale In Business Bay Dubai" },
    { text1: "Hotel Apartments For Sale In Business Bay Dubai", text2: "Hotel Apartments For Sale In Business Bay Dubai" },
    { text1: "Penthouses For Sale In Business Bay Dubai", text2: "Penthouses For Sale In Business Bay Dubai" },
    { text1: "Penthouses For Sale In Business Bay Dubai", text2: "Penthouses For Sale In Business Bay Dubai" }, 
    { text1: "Penthouses For Sale In Business Bay Dubai", text2: "Penthouses For Sale In Business Bay Dubai" }, 
    { text1: "Penthouses For Sale In Business Bay Dubai", text2: "Penthouses For Sale In Business Bay Dubai" }, 
    { text1: "Penthouses For Sale In Business Bay Dubai", text2: "Penthouses For Sale In Business Bay Dubai" }, 
    { text1: "Penthouses For Sale In Business Bay Dubai", text2: "Penthouses For Sale In Business Bay Dubai" }, 
    { text1: "Penthouses For Sale In Business Bay Dubai", text2: "Penthouses For Sale In Business Bay Dubai" }, 
    { text1: "Penthouses For Sale In Business Bay Dubai", text2: "Penthouses For Sale In Business Bay Dubai" }, 
    { text1: "Penthouses For Sale In Business Bay Dubai", text2: "Penthouses For Sale In Business Bay Dubai" }, 
    { text1: "Penthouses For Sale In Business Bay Dubai", text2: "Penthouses For Sale In Business Bay Dubai" }, 
    { text1: "Penthouses For Sale In Business Bay Dubai", text2: "Penthouses For Sale In Business Bay Dubai" }, 
    { text1: "Penthouses For Sale In Business Bay Dubai", text2: "Penthouses For Sale In Business Bay Dubai" },    
];

function SubFooter() {
  const CurrentDomain = localStorage.getItem("DOMAIN")
  const slug = localStorage.getItem("slug")

// for local active this
  const baseUrl = `http://localhost:3000/${CurrentDomain}`


// for live active this
  // const baseUrl = `https://${CurrentDomain}`


  return (
    <>
      <div className="question-section">
        <h1 className='question-heading'>Properties for sale in Business Bay</h1>
       
          <div className="row" style={{textAlign:"center" , margin: "7px 5px",}}>
            <div className="col-md-6">
                <Link to={`${baseUrl}/apartments-for-sale-in-${slug}-dubai`} className='link'><div className='question-left' >
                      Apartments For Sale In {CurrentDomain?.slice(0,14)} Dubai
                </div></Link>
                <Link to={`${baseUrl}/duplexs-for-sale-in-${slug}-dubai`} className='link' ><div className='question-left' >
                      Duplexs For Sale In {CurrentDomain?.slice(0,14)} Dubai
                </div></Link>
                <Link to={`${baseUrl}/studio-apartments-for-sale-in-${slug}-dubai`} className='link'><div className='question-left' >
                      Penthouses For Sale In {CurrentDomain?.slice(0,14)} Dubai
                </div></Link>
                <Link to={`${baseUrl}/studio-apartments-for-sale-in-${slug}-dubai`} className='link'><div className='question-left' >
                      Studio For Sale In {CurrentDomain?.slice(0,14)} Dubai
                </div></Link>
                <Link to={`${baseUrl}/1-bedroom-duplexs-for-sale-in-${slug}-dubai`} className='link'><div className='question-left' >
                      1 Bedroom Duplexs For Sale In {CurrentDomain?.slice(0,14)} Dubai
                </div></Link>
                <Link to={`${baseUrl}/2-bedroom-apartments-for-sale-in-${slug}-dubai`} className='link'><div className='question-left' >
                     2 Bedroom Apartments For Sale In {CurrentDomain?.slice(0,14)} Dubai
                </div></Link>
                <Link to={`${baseUrl}/2-bedroom-hotel-apartments-for-sale-in-${slug}-dubai`} className='link'><div className='question-left' >
                     2 Bedroom Hotel Apartments For Sale In {CurrentDomain?.slice(0,14)} Dubai
                </div></Link>
                <Link to={`${baseUrl}/2-bedroom-villas-for-sale-in-${slug}-dubai`} className='link'><div className='question-left' >
                      2 Bedroom Villas For Sale In {CurrentDomain?.slice(0,14)} Dubai
                </div></Link>
                <Link to={`${baseUrl}/3-bedroom-duplexs-for-sale-in-${slug}-dubai`} className='link'><div className='question-left' >
                      3 Bedroom Duplexs For Sale In {CurrentDomain?.slice(0,14)} Dubai
                </div></Link>
                <Link to={`${baseUrl}/3-bedroom-penthouses-for-sale-in-${slug}-dubai`} className='link'><div className='question-left' >
                      3 Bedroom Penthouses For Sale In  {CurrentDomain?.slice(0,14)} Dubai
                </div></Link>
                <Link to={`${baseUrl}/4-bedroom-apartments-for-sale-in-${slug}-dubai`} className='link' ><div className='question-left' >
                      4 Bedroom Apartments For Sale In {CurrentDomain?.slice(0,14)} Dubai
                </div></Link>
               <Link to={`${baseUrl}/4-bedroom-penthouses-for-sale-in-${slug}-dubai`}  className='link'> <div className='question-left' >
                     4 Bedroom Penthouses For Sale In {CurrentDomain?.slice(0,14)} Dubai
                </div></Link>
                <Link to={`${baseUrl}/5-bedroom-apartments-for-sale-in-business-bay-dubai`}  className='link'><div className='question-left' >
                    5 Bedroom Apartments For Sale In {CurrentDomain?.slice(0,14)} Dubai
                </div></Link>
                <Link to={`${baseUrl}/5-bedroom-penthouses-for-sale-in-${slug}-dubai`}  className='link'><div className='question-left' >
                    5 Bedroom Penthouses For Sale In {CurrentDomain?.slice(0,14)} Dubai
                </div></Link>
                <Link to={`${baseUrl}/6-bedroom-apartments-for-sale-in-${slug}-dubai`}  className='link'><div className='question-left' >
                    6 Bedroom Apartments For Sale In {CurrentDomain?.slice(0,14)} Dubai
                </div></Link>
            </div>    
            <div className="col-md-6">
             <Link to={`${baseUrl}/villas-for-sale-in-${slug}-dubai`}  className='link'> <div className='question-right'>
                      Villas For Sale In {CurrentDomain?.slice(0,14)} Dubai
              </div></Link>
              <Link to={`${baseUrl}/hotel-apartments-for-sale-in-${slug}-dubai`}  className='link'> <div className='question-right'>
                     Hotel Apartments For Sale In {CurrentDomain?.slice(0,14)} Dubai
              </div>  </Link>
              <Link to={`${baseUrl}/apartments-for-sale-in-${slug}-dubai`}  className='link'> <div className='question-right'>
                      Apartments For Sale In {CurrentDomain?.slice(0,14)} Dubai
              </div></Link>
              <Link to={`${baseUrl}/1-bedroom-apartments-for-sale-in-${slug}-dubai`}  className='link'> <div className='question-right'>
                      1 Bedroom Apartments For Sale In {CurrentDomain?.slice(0,14)} Dubai
              </div></Link>
              <Link to={`${baseUrl}/1-bedroom-hotel-apartments-for-sale-in-${slug}-dubai`}  className='link'> <div className='question-right'>
                     1 Bedroom Hotel Apartments For Sale In {CurrentDomain?.slice(0,14)} Dubai
              </div></Link>
             <Link to={`${baseUrl}/2-bedroom-duplexs-for-sale-in-${slug}-dubai`}  className='link'>  <div className='question-right'>
                     2 Bedroom Duplexs For Sale In {CurrentDomain?.slice(0,14)} Dubai
              </div></Link>
              <Link to={`${baseUrl}/2-bedroom-penthouses-for-sale-in-${slug}-dubai`}  className='link'> <div className='question-right'>
                      2 Bedroom Penthouses For Sale In {CurrentDomain?.slice(0,14)} Dubai
              </div></Link>
             <Link to={`${baseUrl}/3-bedroom-apartments-for-sale-in-${slug}-dubai`}  className='link'>  <div className='question-right'>
                      3 Bedroom Apartments For Sale In {CurrentDomain?.slice(0,14)} Dubai
              </div></Link>
            <Link to={`${baseUrl}/3-bedroom-hotel-apartments-for-sale-in-${slug}-dubai`}  className='link'>   <div className='question-right'>
                      3 Bedroom Hotel Apartments For Sale In {CurrentDomain?.slice(0,14)} Dubai
              </div>
             <Link to={`${baseUrl}/3-bedroom-villas-for-sale-in-${slug}-dubai`}  className='link'>  <div className='question-right'>
                     3 Bedroom Villas For Sale In {CurrentDomain?.slice(0,14)} Dubai
              </div></Link>
              <Link to={`${baseUrl}/4-bedroom-duplexs-for-sale-in-${slug}-dubai`}  className='link'> <div className='question-right'>
                  4 Bedroom Duplexs For Sale In {CurrentDomain?.slice(0,14)} Dubai
              </div>
              <Link to={`${baseUrl}/4-bedroom-villas-for-sale-in-${slug}-dubai`}  className='link'></Link> <div className='question-right'>
                 4 Bedroom Villas For Sale In {CurrentDomain?.slice(0,14)} Dubai
              </div></Link>
             <Link to={`${baseUrl}/5-bedroom-duplexs-for-sale-in-${slug}-dubai`}  className='link'></Link>  <div className='question-right'>
                5 Bedroom Duplexs For Sale In {CurrentDomain?.slice(0,14)} Dubai
              </div></Link>
             <Link to={`${baseUrl}/5-bedroom-villas-for-sale-in-${slug}-dubai`}  className='link'><div className='question-right'>
                5 Bedroom Villas For Sale In {CurrentDomain?.slice(0,14)} Dubai
            </div></Link>
          </div>
          </div>
      </div>
    </>
  );
}

export default SubFooter;
