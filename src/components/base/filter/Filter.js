import React, { useState } from 'react';
import CustomDropdown from '../../../pages/Filter Page/DropDown';
import { useParams } from 'react-router-dom';
import PriceDropdown from '../../../pages/Filter Page/PriceDropdown';


function Filter({type, bedroom}) {

  console.log(type, "typetype")
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
    
  const slug = localStorage.getItem("slug")

  return (
    <>
      <div className='filter-backdrop'>
        <div className='padding'>
          <div className="row" style={{ justifyContent: "center" }}>
            <div className="col-md-3">
              <input type="text" className="form-control" placeholder="Enter text" defaultValue={inputValue} 
      onChange={handleInputChange} />
            </div>
            <div className="col-md-1">
            <CustomDropdown bedroom={bedroom} options={["Studio", "1", "2", "3", "4", "5", "6", "7+"]}/>
            </div>
            <div className="col-md-2">
              <select className="form-select">
                <option value="">{type ? type : "Type" }</option>
                <option value="">Apartment</option>
                <option value="">Villa</option>
                <option value="">Townhouse</option>
                <option value="">Penthouse</option>
                <option value="">Duplex</option>
                <option value="">Compound</option>
                {/* Add dropdown options here */}
                </select>
            </div>
            <div className="col-md-2">
              <select className="form-select">
                <option value="">Minimum Price</option>
                <option value="">AED 1,000,000</option>
                <option value="">AED 1,200,000</option>
                <option value="">AED 1,400,000</option>
                <option value="">AED 1,600,000</option>
                <option value="">AED 1,800,000</option>
                <option value="">AED 2,00,000</option>
                <option value="">AED 2,500,000</option>
                <option value="">AED 3,000,000</option>
                <option value="">AED 3,500,000</option>
                <option value="">AED 4,000,000</option>
                <option value="">AED 4,500,000</option>
                <option value="">AED 5,000,000</option>
                <option value="">AED 6,000,000</option>
                <option value="">AED 7,000,000</option>
                <option value="">AED 8,000,000</option>
                <option value="">AED 9,000,000</option>
                <option value="">AED 10,000,000</option>
                <option value="">AED 15,000,000</option>
                <option value="">AED 20,000,000</option>
                <option value="">AED 25,000,000</option>
                <option value="">AED 30,000,000</option>
                <option value="">AED 35,000,000</option>
                <option value="">AED 40,000,000</option>
              </select>
            </div>
            <div className="col-md-2">
              <select className="form-select">
                <option value="">Maximum Price</option>
                <option value="">AED 1,000,000</option>
                <option value="">AED 1,200,000</option>
                <option value="">AED 1,400,000</option>
                <option value="">AED 1,600,000</option>
                <option value="">AED 1,800,000</option>
                <option value="">AED 2,00,000</option>
                <option value="">AED 2,500,000</option>
                <option value="">AED 3,000,000</option>
                <option value="">AED 3,500,000</option>
                <option value="">AED 4,000,000</option>
                <option value="">AED 4,500,000</option>
                <option value="">AED 5,000,000</option>
                <option value="">AED 6,000,000</option>
                <option value="">AED 7,000,000</option>
                <option value="">AED 8,000,000</option>
                <option value="">AED 9,000,000</option>
                <option value="">AED 10,000,000</option>
                <option value="">AED 15,000,000</option>
                <option value="">AED 20,000,000</option>
                <option value="">AED 25,000,000</option>
                <option value="">AED 30,000,000</option>
                <option value="">AED 35,000,000</option>
                <option value="">AED 40,000,000</option>
              </select>
            </div>
              {/* <div className="col-md-1">
                <PriceDropdown />
            </div> */}

            <div className="col-md-1">
              <button className="btn btn-primary">Search</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Filter;
