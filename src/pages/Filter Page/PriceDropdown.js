// import React, { useState } from 'react';

// function PriceDropdown() {
//   const [minPrice, setMinPrice] = useState('');
//   const [maxPrice, setMaxPrice] = useState('');
//   const [isOpen, setIsOpen] = useState(false);

//   const handleToggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleMinPriceChange = (event) => {
//     setMinPrice(event.target.value);
//   };

//   const handleMaxPriceChange = (event) => {
//     setMaxPrice(event.target.value);
//   };

//   return (
//     <div className="price-dropdown-container">
//       <div className="price-dropdown-header" onClick={handleToggleDropdown}>
//         {isOpen ? "Prices" : "Prices"}
//       </div>
//       {isOpen && (
//         <div className="price-dropdown-options" style={{display:"flex"}}>
//           <div>

//             <input
//                 type="text"
//                 id="minPrice"
//                 value={minPrice}
//                 placeholder="Enter Min Price"
//               />
//             <select id="minPrice" value={minPrice} onChange={handleMinPriceChange}>
//               <option value="">Select Min Price</option>
//               <option value="10000">AED 1,0000</option>
//               <option value="1,200">AED 1,200</option>
//               <option value="1400">AED 1,400</option>
//               <option value="1600">AED 1,600</option>
//               <option value="1">AED 1,800</option>
//               <option value="100000">AED 2,000</option>
//               <option value="100000">AED 2,500</option>
//               <option value="100000">AED 3,000</option>
//               <option value="100000">AED 3,500</option>
//               <option value="100000">AED 4,000</option>
//               <option value="100000">AED 4,500</option>
//               <option value="100000">AED 5,000</option>
//               <option value="100000">AED 6,000</option>
//               <option value="100000">AED 7,000</option>
//               <option value="100000">AED 8,000</option>
//               <option value="100000">AED 9,000</option>
//               <option value="100000">AED 10,000</option>
//               <option value="100000">AED 15,000</option>
//               <option value="100000">AED 20,000</option>
//               <option value="100000">AED 25,000</option>
//               <option value="100000">AED 30,000</option>
//               <option value="100000">AED 40,000</option>
//               <option value="100000">AED 50,000</option>
//               <option value="100000">AED 100,000</option>
//               <option value="100000">AED 200,000</option>
//               <option value="100000">AED 1000000,000</option>
//               {/* Add more options as needed */}
//             </select>
//           </div>
//           <div>
//             <select id="maxPrice" value={maxPrice} onChange={handleMaxPriceChange}>
//               <input
//               type="text"
//               id="searchPrice"
//               value={""}
//               placeholder="Enter price to search"
//             />
//               <option value="">Select Min Price</option>
//               <option value="10000">AED 1,0000</option>
//               <option value="1,200">AED 1,200</option>
//               <option value="1400">AED 1,400</option>
//               <option value="1600">AED 1,600</option>
//               <option value="1">AED 1,800</option>
//               <option value="100000">AED 2,000</option>
//               <option value="100000">AED 2,500</option>
//               <option value="100000">AED 3,000</option>
//               <option value="100000">AED 3,500</option>
//               <option value="100000">AED 4,000</option>
//               <option value="100000">AED 4,500</option>
//               <option value="100000">AED 5,000</option>
//               <option value="100000">AED 6,000</option>
//               <option value="100000">AED 7,000</option>
//               <option value="100000">AED 8,000</option>
//               <option value="100000">AED 9,000</option>
//               <option value="100000">AED 10,000</option>
//               <option value="100000">AED 15,000</option>
//               <option value="100000">AED 20,000</option>
//               <option value="100000">AED 25,000</option>
//               <option value="100000">AED 30,000</option>
//               <option value="100000">AED 40,000</option>
//               <option value="100000">AED 50,000</option>
//               <option value="100000">AED 100,000</option>
//               <option value="100000">AED 200,000</option>
//               <option value="100000">AED 1000000,000</option>
//               {/* Add more options as needed */}
//             </select>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default PriceDropdown;


import React, { useState } from 'react';

function PriceDropdown() {
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleMinPriceChange = (event) => {
    setMinPrice(event.target.value);
  };

  const handleMaxPriceChange = (event) => {
    setMaxPrice(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredOptions = [
    { value: '10000', label: 'AED 10,000' },
    { value: '20000', label: 'AED 20,000' },
    { value: '50000', label: 'AED 50,000' },
    // Add more options as needed
  ].filter(option =>
    option.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="price-dropdown-container">
      <div className="price-dropdown-header" onClick={handleToggleDropdown}>
        {isOpen ? "Prices" : "Prices"}
      </div>
      {isOpen && (
        <div className="price-dropdown-options">
          <div>
            <label htmlFor="minPrice">Minimum Price:</label>
            <input
              type="text"
              id="minPrice"
              value={minPrice}
              onChange={handleMinPriceChange}
              placeholder="Enter Min Price"
            />
          </div>
          <div>
            <label htmlFor="maxPrice">Maximum Price:</label>
            <input
              type="text"
              id="maxPrice"
              value={maxPrice}
              onChange={handleMaxPriceChange}
              placeholder="Enter Max Price"
            />
          </div>
          <div>
            <label htmlFor="searchPrice">Search:</label>
            <input
              type="text"
              id="searchPrice"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search Prices"
            />
          </div>
          <div>
            <select size="5" multiple>
              {filteredOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
    </div>
  );
}

export default PriceDropdown;