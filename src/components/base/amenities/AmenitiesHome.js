import React from 'react'
import icon1 from "../../../assets/images/swimming-pool-svgrepo-com.svg"
import icon2 from "../../../assets/images/toboggan-playground-svgrepo-com.svg"
import icon3 from "../../../assets/images/park-svgrepo-com.svg"
import icon4 from "../../../assets/images/grill-bbq-svgrepo-com.svg"

function AmenitiesHome({amenitiesObj}) {

  return (
     <div className='features-section'>
        <h1 className='heading-amenities'>Features and Amenities</h1>
        <div className='amenities-icons'>
      {amenitiesObj?.map((amenity, index) => (
        <div key={index}>
          <div className='icon-amenities-main'> 
            <img src={amenity?.amenity_icon} width={80} className='icon-amenities'/>  
          </div>
          <p className='ament-text'>{amenity?.amenity_title}</p>
          {/* <p className='ament-text'>Pool area</p> */}
        </div>
      ))}
        </div>
      </div>
  )
}

export default AmenitiesHome