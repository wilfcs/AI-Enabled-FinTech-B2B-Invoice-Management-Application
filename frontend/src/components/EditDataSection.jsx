import React, { useState, useEffect } from "react";

const EditDataSection = ({rows, selectedRows, onCancel, onSubmit }) => {
 const [editedRowData, setEditedRowData] = useState({});
  useEffect(() => {
    // Find the selected row data from the rows array using the selectedRows ID
    const selectedRow = rows.find((row) => row.id === selectedRows[0]);
    setEditedRowData(selectedRow);
  }, [rows, selectedRows]);

   const handleInputChange = (event) => {
     const { name, value } = event.target;
     setEditedRowData((prevData) => ({
       ...prevData,
       [name]: value,
     }));
   };

  const handleSubmit = () => {
    console.log("handleSubmit trigerred")
    console.log(editedRowData)
  };

  return (
    <div className="edit-popup">
      <h2>Edit Data</h2>
      <form>
        {/* Render input fields for each data field */}
        <label>
          Order Currency:
          <input
            type="text"
            name="Order Currency:"
            value={editedRowData.orderCurrency}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Company Code:
          <input
            type="text"
            name="Company Code:"
            value={editedRowData.companyCode}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Distribution Channel:
          <input
            type="text"
            name="Distribution Channel:"
            value={editedRowData.distributionChannel}
            onChange={handleInputChange}
          />
        </label>
        <div className="edit-popup-buttons">
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
          <button type="button" onClick={handleSubmit}>
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditDataSection;
