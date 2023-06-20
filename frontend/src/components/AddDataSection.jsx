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
      {/* slno: "", customerOrderId: "", salesOrg: "", distributionChannel: "",
      companyCode: "", orderCreationDate: "", orderAmount: "", orderCurrency:
      "", customerNumber: "", amountInUsd: "", */}
      <div>
        <label>Distribution Channel</label>
        <input
          type="text"
          name="distributionChannel"
          value={newRowData.distributionChannel}
          onChange={handleNewRowChange}
        />
      </div>
      <div>
        <label>Company Code</label>
        <input
          type="text"
          name="companyCode"
          value={newRowData.companyCode}
          onChange={handleNewRowChange}
        />
      </div>
      <div>
        <label>Order Creation Date</label>
        <input
          type="text"
          name="orderCreationDate"
          value={newRowData.orderCreationDate}
          onChange={handleNewRowChange}
        />
      </div>
      <div>
        <label>Order Amount</label>
        <input
          type="text"
          name="orderAmount"
          value={newRowData.orderAmount}
          onChange={handleNewRowChange}
        />
      </div>
      <div>
        <label>Order Currency</label>
        <input
          type="text"
          name="orderCurrency"
          value={newRowData.orderCurrency}
          onChange={handleNewRowChange}
        />
      </div>
      <div>
        <label>Customer Number</label>
        <input
          type="text"
          name="customerNumber"
          value={newRowData.customerNumber}
          onChange={handleNewRowChange}
        />
      </div>
      <div>
        <label>Amount in USD</label>
        <input
          type="text"
          name="amountInUsd"
          value={newRowData.amountInUsd}
          onChange={handleNewRowChange}
        />
      </div>
      <button onClick={handleAddDataSubmit}>Submit</button>
      <button onClick={handleCancelAddData}>Cancel</button>
    </div>
  );
};

export default AddDataSection;
