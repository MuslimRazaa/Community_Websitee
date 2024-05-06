import React from 'react'
import icon1 from "../../../assets/images/swimming-pool-svgrepo-com.svg"
import icon2 from "../../../assets/images/toboggan-playground-svgrepo-com.svg"
import icon3 from "../../../assets/images/park-svgrepo-com.svg"
import icon4 from "../../../assets/images/grill-bbq-svgrepo-com.svg"

function Amenities({amenitiesObj}) {
  const data = amenitiesObj?.amenities;


  return (  
    
     <div className='features-section'>
        <h1 className='heading-amenities'>Features and Amenities</h1>
        <div className='amenities-icons'>
      {data?.map((amenity, index) => (
        <div key={index}>
          <div className='icon-amenities-main'> 
            <img src={amenity.aminity_icon} width={80} className='icon-amenities'/>  
          </div>
          <p className='ament-text'>{amenity.aminity_title}</p>
        </div>
      ))}
        </div>
      </div>
  )
}

export default Amenities