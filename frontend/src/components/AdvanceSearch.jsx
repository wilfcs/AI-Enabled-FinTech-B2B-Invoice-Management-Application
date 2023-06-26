// import React, { useState } from "react";
// import "./css/Body.css";

// const AdvanceSearch = ({ onCancel, onSubmit, rows, columns }) => {
//   // State to store the search input values for each field
//   const [searchValues, setSearchValues] = useState({});

//   // Event handler for input changes
//   const handleInputChange = (event, field) => {
//     // Update the searchValues state by merging the previous values with the new value for a specific field
//     setSearchValues((prevValues) => ({
//       ...prevValues,
//       [field]: event.target.value,
//     }));
//   };

//   // Event handler for form submission
//   const handleSubmit = () => {
//     onSubmit(searchValues);
//   };

//   return (
//     <div className="advance-search-container">
//       <form>
//         {/* Render input fields for each column */}
//         {columns.map((column) => (
//           <div key={column.field} className="search-field">
//             <label htmlFor={column.field}>{column.headerName}</label>
//             <input
//               type="text"
//               id={column.field}
//               value={searchValues[column.field] || ""}
//               onChange={(event) => handleInputChange(event, column.field)}
//             />
//           </div>
//         ))}
//         <div className="button-container">
//           <button type="button" onClick={handleSubmit}>
//             Search
//           </button>
//           <button type="button" onClick={onCancel}>
//             Cancel
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AdvanceSearch;


import React, { useState } from "react";

const AdvanceSearch = ({ onCancel, onSubmit, rows, columns }) => {
  const [searchValues, setSearchValues] = useState({});

  const handleInputChange = (event, field) => {
    const { value } = event.target;
    setSearchValues((prevValues) => ({
      ...prevValues,
      [field]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(searchValues);
  };

  return (
    <div className="advance-search-container">
      <h2>Advance Search</h2>
      <form onSubmit={handleSubmit}>
        {columns.map((column) => (
          <div key={column.field} className="search-field">
            <input
              type="text"
              id={column.field}
              value={searchValues[column.field] || ""}
              onChange={(event) => handleInputChange(event, column.field)}
              placeholder={column.headerName}
              className="advanceSearchInput"
            />
          </div>
        ))}
        <div className="search-buttons">
          <button type="submit" className="advanceSearchButton">
            Search
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="advanceSearchButton"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdvanceSearch;
