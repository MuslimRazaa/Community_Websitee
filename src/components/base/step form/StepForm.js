import React, { useState } from 'react';
import "./stepform.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingDollar, faHouse, faKey,faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import bed from "../../../assets/images/bed.png";


function StepForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Initialize form data fields
    // Example:
    // field1: '',
    // field2: '',
    // field3: '',
    // field4: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleNext = () => {
    setStep(prevStep => prevStep + 1);
  };

  const handlePrev = () => {
    setStep(prevStep => prevStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    // Example:
    // console.log(formData);
  };

  return (
    <div className='main-box'>
      {step === 1 && (
        <Step1 formData={formData} handleChange={handleChange} />
      )}
      {step === 2 && (
        <Step2 formData={formData} handleChange={handleChange} />
      )}
      {step === 3 && (
        <Step3 formData={formData} handleChange={handleChange} />
      )}
      {step === 4 && (
        <Step4 formData={formData} handleChange={handleChange} />
      )}

      {/* Pagination dots */}
      <div className="pagination-dots">
        {[1, 2, 3, 4].map((dot) => (
          <span key={dot} className={dot === step ? "active-dot" : "inactive-dot"}></span>
        ))}
      </div>

      <div>
        {step > 1 && <button className='prev-btn' onClick={handlePrev}><FontAwesomeIcon icon={faArrowLeft} /></button>}
        {step < 4 ? (
          <button className='next-btn' onClick={handleNext}>Next</button>
        ) : (
          <button className='next-btn'  onClick={handleSubmit}>Submit</button>
        )}
      </div>
    </div>
  );
}

function Step1({ formData, handleChange }) {
     const [selectedIcon, setSelectedIcon] = useState(null);

  const handleIconClick = (icon) => {
    setSelectedIcon(icon === selectedIcon ? null : icon);
  };

  return (
    <div>
      <h2 className='step-form-heading'>I am interested to</h2>
      <FontAwesomeIcon
        icon={faHandHoldingDollar}
        onClick={() => handleIconClick(faHandHoldingDollar)}
        className={selectedIcon === faHandHoldingDollar ? 'selected-icon' : ''}
      />
      <FontAwesomeIcon
        icon={faHouse}
        onClick={() => handleIconClick(faHouse)}
        className={selectedIcon === faHouse ? 'selected-icon' : ''}
      />
      <FontAwesomeIcon
        icon={faKey}
        onClick={() => handleIconClick(faKey)}
        className={selectedIcon === faKey ? 'selected-icon' : ''}
      />
    </div>
  );
}


function Step2({ formData, handleChange }) {
   const [selectedBed, setSelectedBed] = useState('');

  const handleBedSelect = (bedType) => {
    setSelectedBed(bedType);
  };
  return (
    <div>
      <h2 className='step-form-heading'>I am looking For</h2>
      <div style={{ display: "flex", justifyContent: "space-between", margin: "10px" }}>
        <div className={selectedBed === 'Studio' ? "bed-box selected" : "bed-box"} onClick={() => handleBedSelect('Studio')}>
          <img src={bed} className="bed-icon" />
          <h3 className='heading-subtitle'>Studio</h3>
        </div>

        <div className={selectedBed === '1 Bed' ? "bed-box selected" : "bed-box"} onClick={() => handleBedSelect('1 Bed')}>
          <img src={bed} className="bed-icon" />
          <h3 className='heading-subtitle'>1 Bed</h3>
        </div>

        <div className={selectedBed === '2 Bed' ? "bed-box selected" : "bed-box"} onClick={() => handleBedSelect('2 Bed')}>
          <img src={bed} className="bed-icon" />
          <h3 className='heading-subtitle'>2 Bed</h3>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", margin: "10px" }}>
        <div className={selectedBed === '3 Bed' ? "bed-box selected" : "bed-box"} onClick={() => handleBedSelect('3 Bed')}>
          <img src={bed} className="bed-icon" />
          <h3 className='heading-subtitle'>3 Bed</h3>
        </div>

        <div className={selectedBed === '4 Bed' ? "bed-box selected" : "bed-box"} onClick={() => handleBedSelect('4 Bed')}>
          <img src={bed} className="bed-icon" />
          <h3 className='heading-subtitle'>4 Bed</h3>
        </div>

        <div className={selectedBed === '5+ Bed' ? "bed-box selected" : "bed-box"} onClick={() => handleBedSelect('5+ Bed')}>
          <img src={bed} className="bed-icon" />
          <h3 className='heading-subtitle'>5+ Bed</h3>
        </div>
      </div>
    </div>
  );
}

function Step3({ formData, handleChange }) {
  return (
    <div>
      <h2 className='step-form-heading'>Pricing Range (AED)</h2>
        <div  style={{display:"flex", justifyContent:"center", gap:"20px", margin:"20px 0px"}}>
        <div>
        <h4>Min Price</h4>
        <input type='number' />
        </div>
           <div>
        <h4>Max Price</h4>
        <input type='number' />
        </div>
      {/* Add additional fields for step 3 */}
    </div>
    </div>
  );
}

function Step4({ formData, handleChange }) {
  return (
    <div >
      <h2 className='step-form-heading' style={{
        fontSize:"20px"
      }}>Amazing, give us a way to contact you</h2>
      <input
          className='input-feild'
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
      /><br></br>
      <input
          className='input-feild'
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      /><br></br>
      <input
      className='input-feild'   
        type="number"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Mobile"
      /><br></br>
      {/* Add additional fields for step 4 */}
    </div>
  );
}

export default StepForm;
