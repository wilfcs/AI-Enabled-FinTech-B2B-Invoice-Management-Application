import React, { useState } from "react";

const EditDataSection = ({ selectedRows, onCancel, onSubmit }) => {
  const [editedRowData, setEditedRowData] = useState(selectedRows);

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
            // onChange={handleInputChange}
          />
        </label>
        <label>
          Company Code:
          <input
            type="text"
            name="Company Code:"
            value={editedRowData.companyCode}
            // onChange={handleInputChange}
          />
        </label>
        <label>
          Distribution Channel:
          <input
            type="text"
            name="Distribution Channel:"
            value={editedRowData.distributionChannel}
            // onChange={handleInputChange}
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
