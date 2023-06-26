import React from "react";

const AddDataSection = ({
  newRowData,
  handleNewRowChange,
  handleAddDataSubmit,
  handleCancelAddData,
  setShowTableView,
}) => {
  return (
    <div className="addDataSection">
      <div className="addDataSection-grid">
        {/* input data */}
        <div>
          <input
            type="text"
            name="Sl_No"
            placeholder="SL No."
            value={newRowData.Sl_No}
            onChange={handleNewRowChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="Customer_Order_Id"
            placeholder="Customer Order Id"
            value={newRowData.Customer_Order_Id}
            onChange={handleNewRowChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="Sales_Org"
            placeholder="Sales Org"
            value={newRowData.Sales_Org}
            onChange={handleNewRowChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="Distribution_Channel"
            placeholder="Distribution Channel"
            value={newRowData.Distribution_Channel}
            onChange={handleNewRowChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="Company_Code"
            placeholder="Company Code"
            value={newRowData.Company_Code}
            onChange={handleNewRowChange}
          />
        </div>
      </div>
      <div className="addDataSection-grid">
        <div>
          <input
            type="text"
            name="Order_Creation_Date"
            placeholder="Order Creation Date"
            value={newRowData.Order_Creation_Date}
            onChange={handleNewRowChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="Order_Amount"
            placeholder="Order Amount"
            value={newRowData.Order_Amount}
            onChange={handleNewRowChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="Order_Currency"
            placeholder="Order Currency"
            value={newRowData.Order_Currency}
            onChange={handleNewRowChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="Customer_Number"
            placeholder="Customer Number"
            value={newRowData.Customer_Number}
            onChange={handleNewRowChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="Amount_in_USD"
            placeholder="Amount in USD"
            value={newRowData.Amount_in_USD}
            onChange={handleNewRowChange}
          />
        </div>
      </div>

      <div className="addDataSectionButtons">
        {/* Submit button */}
        <button onClick={handleAddDataSubmit} className="addDataSectionSubmit">
          Submit
        </button>
        {/* Cancel button */}
        <button onClick={handleCancelAddData} className="addDataSectionCancel">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AddDataSection;
