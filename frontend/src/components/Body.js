import React, { useState } from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import "./css/Body.css";
import Search from "./Search";

const columns: GridColDef[] = [
  { field: "slno", headerName: "SL No.", width: 130 },
  { field: "customerOrderId", headerName: "Customer Order Id", width: 160 },
  { field: "salesOrg", headerName: "Sales Org", width: 140 },
  {
    field: "distributionChannel",
    headerName: "Distribution Channel",
    width: 160,
  },
  { field: "companyCode", headerName: "Company Code", width: 170 },
  {
    field: "orderCreationDate",
    headerName: "Order Creation Date",
    width: 160,
  },
  { field: "orderAmount", headerName: "Order Amount", width: 160 },
  { field: "orderCurrency", headerName: "Order Currency", width: 160 },
  { field: "customerNumber", headerName: "Customer Number", width: 160 },
  { field: "amountInUsd", headerName: "Amount in USD", width: 160 },
];

const rows = [
  {
    id: 1,
    slno: 1,
    customerOrderId: "Order-1",
    salesOrg: "SalesOrg-1",
    distributionChannel: "Channel-1",
    companyCode: "Company-1",
    orderCreationDate: new Date().toLocaleDateString(),
    orderAmount: 500,
    orderCurrency: "USD",
    customerNumber: "Customer-1",
    amountInUsd: 750,
  },
  // Add more rows here...
  {
    id: 10,
    slno: 10,
    customerOrderId: "Order-10",
    salesOrg: "SalesOrg-10",
    distributionChannel: "Channel-10",
    companyCode: "Company-10",
    orderCreationDate: new Date().toLocaleDateString(),
    orderAmount: 900,
    orderCurrency: "INR",
    customerNumber: "Customer-10",
    amountInUsd: 1200,
  },
];


const Body = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredRows = React.useMemo(() => {
    const searchTerms = searchQuery.toLowerCase().split(" ");
    return rows.filter((row) =>
      columns.some((column) =>
        searchTerms.some((term) =>
          String(row[column.field]).toLowerCase().includes(term.toLowerCase())
        )
      )
    );
  }, [searchQuery]);

  return (
    <div className="body-container">
      <div className="table">
        <Search onChange={handleSearch} setSearchQuery={setSearchQuery}/>
        {/* <input type="text" placeholder="Search..." onChange={handleSearch} /> */}
        <div className="custom-scrollbar-container">
          <DataGrid
            rows={filteredRows}
            columns={columns}
            pageSize={5}
            checkboxSelection
            autoHeight
          />
        </div>
      </div>
    </div>
  );
};

export default Body;
