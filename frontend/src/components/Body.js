import React, { useState, useEffect } from "react";
import {
  DataGrid,
  GridColDef,
  GridValueGetterParams,
} from "@mui/x-data-grid";
import { GridSelectionModelChangeParams } from "@mui/x-data-grid";
import "./css/Body.css";
import Search from "./Search";
import AdvanceSearch from "./AdvanceSearch";
import AddDataSection from "./AddDataSection";
import EditDataSection from "./EditDataSection";

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
  {
    id: 2,
    slno: 2,
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
  // For search
  const [searchQuery, setSearchQuery] = useState("");
  const [showAdvanceSearch, setShowAdvanceSearch] = useState(false);
  const [advanceSearchValues, setAdvanceSearchValues] = useState({});
  const [rowData, setRowData] = useState(rows); // State to store the row data
  const [showAddData, setShowAddData] = useState(false); // State to control showing the Add Data section
  const [newRowData, setNewRowData] = useState({
    slno: "",
    customerOrderId: "",
    salesOrg: "",
    distributionChannel: "",
    companyCode: "",
    orderCreationDate: "",
    orderAmount: "",
    orderCurrency: "",
    customerNumber: "",
    amountInUsd: "",
  }); // State to store the new row data

  const [selectedRows, setSelectedRows] = useState([]); // State to store the selected rows
  const [isDeleteEnabled, setIsDeleteEnabled] = useState(false); // State to control the delete button

  const [showEditPopup, setShowEditPopup] = useState(false); // State to show or hide edit popup

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  // Use Memo after search and advance search is trigerred
  const filteredRows = React.useMemo(() => {
    let filteredData = rows;

    Object.entries(advanceSearchValues).forEach(([field, value]) => {
      filteredData = filteredData.filter((row) =>
        String(row[field]).toLowerCase().includes(value.toLowerCase())
      );
    });

    const searchTerms = searchQuery.toLowerCase().split(" ");
    filteredData = filteredData.filter((row) =>
      columns.some((column) =>
        searchTerms.some((term) =>
          String(row[column.field]).toLowerCase().includes(term)
        )
      )
    );

    return filteredData;
  }, [searchQuery, advanceSearchValues]);

  // For advance search

  const handleAdvanceSearch = () => {
    setShowAdvanceSearch(true);
  };

  const handleAdvanceSearchCancel = () => {
    setShowAdvanceSearch(false);
    setAdvanceSearchValues({});
  };

  const handleAdvanceSearchSubmit = (values) => {
    setShowAdvanceSearch(false);
    setAdvanceSearchValues(values);
  };

  // For adding new data

  const handleAddDataClick = () => {
    setShowAddData(true);
  };

  const handleCancelAddData = () => {
    setShowAddData(false);
    setNewRowData({
      slno: "",
      customerOrderId: "",
      salesOrg: "",
      distributionChannel: "",
      companyCode: "",
      orderCreationDate: "",
      orderAmount: "",
      orderCurrency: "",
      customerNumber: "",
      amountInUsd: "",
    });
  };

  const handleNewRowChange = (event) => {
    const { name, value } = event.target;
    setNewRowData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // console.log("new row data ->", newRowData);
  };

  const handleAddDataSubmit = () => {
    const newId = rowData.length + 1;
    const newRow = {
      id: newId,
      ...newRowData,
    };

    // setRowData([...rowData, newRow]);
    setRowData((prevRowData) => [...prevRowData, newRow]);

    // console.log("this is the updated row data", rowData);

    setShowAddData(false);
    setNewRowData({
      slno: "",
      customerOrderId: "",
      salesOrg: "",
      distributionChannel: "",
      companyCode: "",
      orderCreationDate: "",
      orderAmount: "",
      orderCurrency: "",
      customerNumber: "",
      amountInUsd: "",
    });
  };

  // Function to handle row selection and update selectedRows state
 const handleRowSelection = (ids) => {
// const selectedRowsData = ids.map((id) => rows.find((row) => row.id === id));
setSelectedRows(ids);
// console.log(selectedRows);
};


  const handleDeleteClick = () => {
    const updatedRows = rowData.filter((row) => !selectedRows.includes(row.id));
    setRowData(updatedRows);
    setSelectedRows([]);
    console.log("row data", updatedRows);
  };

  // Function to edit data
    const handleEditClick = () => {
    setShowEditPopup(true);
  };

  return (
    <div className="body-container">
      <div className="table">
        <Search onChange={handleSearch} setSearchQuery={setSearchQuery} />

        <button onClick={handleAdvanceSearch}>Advance Search</button>
        {showAdvanceSearch && (
          <div className="overlay">
            <AdvanceSearch
              onCancel={handleAdvanceSearchCancel}
              onSubmit={handleAdvanceSearchSubmit}
              rows={rows}
              columns={columns}
            />
          </div>
        )}

        <button onClick={handleAddDataClick}>Add Data</button>

        {/* Delete Button */}
        <button onClick={handleDeleteClick}>Delete</button>

        {/* Edit Button */}
        <button onClick={handleEditClick}>Edit</button>

        {showAddData ? (
          <AddDataSection
            newRowData={newRowData}
            handleNewRowChange={handleNewRowChange}
            handleAddDataSubmit={handleAddDataSubmit}
            handleCancelAddData={handleCancelAddData}
          />
        ) : (
          <div className="custom-scrollbar-container">
            <DataGrid
              rows={filteredRows}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 5 },
                },
              }}
              pageSizeOptions={[5, 10]}
              checkboxSelection
              onRowSelectionModelChange={(ids) => handleRowSelection(ids)}
            />
          </div>
        )}

        {showEditPopup && selectedRows.length===1 ? (
          <div className="overlay">
            <EditDataSection
              selectedRows={selectedRows}
              onCancel={() => setShowEditPopup(false)}
              onSubmit={(editedRows) => {
                // Handle the edited rows data here
                console.log("edit trigerred");
                setShowEditPopup(false);
              }}
            />
          </div>
        ): null}
      </div>
    </div>
  );
};

export default Body;
