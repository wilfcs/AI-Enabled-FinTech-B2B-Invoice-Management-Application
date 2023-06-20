import React, { useState } from "react";
import "./css/Body.css";

const AdvanceSearch = ({ onCancel, onSubmit, rows, columns }) => {
  const [searchValues, setSearchValues] = useState({});

  const handleInputChange = (event, field) => {
    setSearchValues((prevValues) => ({
      ...prevValues,
      [field]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(searchValues);
  };

  return (
    <div className="advance-search-container">
      <form onSubmit={handleSubmit}>
        {columns.map((column) => (
          <div key={column.field} className="search-field">
            <label htmlFor={column.field}>{column.headerName}</label>
            <input
              type="text"
              id={column.field}
              value={searchValues[column.field] || ""}
              onChange={(event) => handleInputChange(event, column.field)}
            />
          </div>
        ))}
        <div className="button-container">
          <button type="submit">Search</button>
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdvanceSearch;
