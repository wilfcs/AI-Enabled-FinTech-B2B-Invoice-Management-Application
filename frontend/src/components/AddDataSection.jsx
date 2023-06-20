import React from "react";

const AddDataSection = ({
  newRowData,
  handleNewRowChange,
  handleAddDataSubmit,
  handleCancelAddData,
}) => {
  return (
    <div>
      <h3>Add Data</h3>
      <div>
        <label>SL No.:</label>
        <input
          type="text"
          name="slno"
          value={newRowData.slno}
          onChange={handleNewRowChange}
        />
      </div>
      <div>
        <label>Customer Order Id:</label>
        <input
          type="text"
          name="customerOrderId"
          value={newRowData.customerOrderId}
          onChange={handleNewRowChange}
        />
      </div>
      <div>
        <label>Sales Org:</label>
        <input
          type="text"
          name="salesOrg"
          value={newRowData.salesOrg}
          onChange={handleNewRowChange}
        />
      </div>
      {/* Add similar input fields for other columns */}
      <button onClick={handleAddDataSubmit}>Submit</button>
      <button onClick={handleCancelAddData}>Cancel</button>
    </div>
  );
};

export default AddDataSection;
