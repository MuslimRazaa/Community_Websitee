import React, { useState, useEffect, useRef } from 'react';

function CustomDropdown({ options, bedroom }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(bedroom);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  return (
    <div className="custom-dropdown-container" ref={dropdownRef}>
      <div className="custom-dropdown-header" onClick={toggleDropdown}>
        { selectedOption ? selectedOption + " Bed" : 'Bedrooms' || 'Bedrooms'}
      </div>
      {isOpen && (
        <div className="custom-dropdown-options">
          {options.map((option, index) => (
            <span key={index} className="custom-option" onClick={() => handleOptionClick(option)}>
              {option}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default CustomDropdown;
 