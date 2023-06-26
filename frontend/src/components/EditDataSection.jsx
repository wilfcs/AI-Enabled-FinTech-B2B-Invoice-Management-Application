// EditDataSection.jsx

import React, { useState, useEffect } from "react";

const EditDataSection = ({ rows, selectedRows, onCancel, onSubmit }) => {
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

  const handleSaveClick = () => {
    onSubmit(editedRowData);
  };

  return (
    <div className="edit-popup">
      <div className="edit-popup-box">
        <h2 className="edit-popup-h2">Edit</h2>
        <form>
          {/* Render input fields for each data field */}
          <div className="editUpperdiv">
            <div>
              {" "}
              <div className="edit-popup-div">Order Currency</div>
              <label>
                <input
                  type="text"
                  name="Order_Currency"
                  value={editedRowData.Order_Currency}
                  onChange={handleInputChange}
                  className="edit-popup-oc"
                />
              </label>
            </div>

            <div>
              {" "}
              <div className="edit-popup-div">Company Code</div>
              <label>
                <input
                  type="text"
                  name="Company_Code"
                  value={editedRowData.Company_Code}
                  onChange={handleInputChange}
                  className="edit-popup-oc"
                />
              </label>
            </div>
          </div>

          <div className="edit-popup-div">Distribution Channel</div>
          <label>
            <input
              type="text"
              name="Distribution_Channel"
              value={editedRowData.Distribution_Channel}
              onChange={handleInputChange}
              className="edit-popup-distch"
            />
          </label>
          <div className="edit-popup-buttons">
            <button type="button" onClick={onCancel} className="editButtons">
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSaveClick}
              className="editButtons"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditDataSection;
