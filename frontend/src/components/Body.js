import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import "./css/Body.css";
import Search from "./Search";
import AdvanceSearch from "./AdvanceSearch";
import AddDataSection from "./AddDataSection";
import EditDataSection from "./EditDataSection";
import AnalyticalView from "./AnalyticalView";

  // Define columns for the data grid
const columns = [
  { field: "Sl_No", headerName: "SL No.", width: 130 },
  { field: "Customer_Order_Id", headerName: "Customer Order Id", width: 160 },
  { field: "Sales_Org", headerName: "Sales Org", width: 140 },
  {
    field: "Distribution_Channel",
    headerName: "Distribution Channel",
    width: 160,
  },
  { field: "Company_Code", headerName: "Company Code", width: 170 },
  {
    field: "Order_Creation_Date",
    headerName: "Order Creation Date",
    width: 160,
  },
  { field: "Order_Amount", headerName: "Order Amount", width: 160 },
  { field: "Order_Currency", headerName: "Order Currency", width: 160 },
  { field: "Customer_Number", headerName: "Customer Number", width: 160 },
  { field: "Amount_in_USD", headerName: "Amount in USD", width: 160 },
];

// Sample row data
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
  }
];


const Body = () => {
  // For search
  const [searchQuery, setSearchQuery] = useState("");
  const [showAdvanceSearch, setShowAdvanceSearch] = useState(false);
  const [advanceSearchValues, setAdvanceSearchValues] = useState({});
  const [rowData, setRowData] = useState(rows); // State to store the row data
  const [showAddData, setShowAddData] = useState(false); // State to control showing the Add Data section
  const [showTableView, setShowTableView] = useState(true); // State to control showing the table view
  const [showAnalyticalView, setShowAnalyticalView] = useState(false); // // State to control showing the analytical view
  const [newRowData, setNewRowData] = useState({
    Sl_No: "",
    Customer_Order_Id: "",
    Sales_Org: "",
    Distribution_Channel: "",
    Company_Code: "",
    Order_Creation_Date: "",
    Order_Amount: "",
    Order_Currency: "",
    Customer_Number: "",
    Amount_in_USD: "",
  }); // State to store the new row data

  const [selectedRows, setSelectedRows] = useState([]); // State to store the selected rows
  // const [isDeleteEnabled, setIsDeleteEnabled] = useState(false); // State to control the delete button

  const [showEditPopup, setShowEditPopup] = useState(false); // State to show or hide edit popup

  const handleSearch = (event) => {
    const { value } = event.target;
    setSearchQuery(value);
  };

  // Use Memo after search and advance search is trigerred

  const filteredRows = React.useMemo(() => {
    let filteredData = rowData || []; // Use the fetched data here

    // Apply advance search filters
    Object.entries(advanceSearchValues).forEach(([field, value]) => {
      filteredData = filteredData.filter((row) =>
        String(row[field]).toLowerCase().includes(value.toLowerCase())
      );
    });

    // Apply search query filter
    const searchTerms = searchQuery.toLowerCase().split(" ");
    filteredData = filteredData.filter((row) =>
      columns.some((column) =>
        searchTerms.some((term) =>
          String(row[column.field]).toLowerCase().includes(term)
        )
      )
    );

    
    // Return the filtered data if search query is not empty, otherwise return the original data
    return searchQuery ? filteredData : rowData;
  }, [searchQuery, advanceSearchValues, rowData]);

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
    const str = Object.values(values).join(" "); 
    setSearchQuery(str);
  };

  // For adding new data

  const handleAddDataClick = () => {
    setShowAddData(true);
    setShowTableView(false);
    setShowAnalyticalView(false);
  };
  const handleHomeClick = () => {
    setShowTableView(true);
    setShowAnalyticalView(false);
    setShowAddData(false);
  };

  const handleAnalyticalViewClick = () => {
    setShowTableView(false);
    setShowAnalyticalView(true);
    setShowAddData(false);
  };

  const handleCancelAddData = () => {
    setShowAddData(false);
    setNewRowData({
      Sl_No: "",
      Customer_Order_Id: "",
      Sales_Org: "",
      Distribution_Channel: "",
      Company_Code: "",
      Order_Creation_Date: "",
      Order_Amount: "",
      Order_Currency: "",
      Customer_Number: "",
      Amount_in_USD: "",
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
      Sl_No: "",
      Customer_Order_Id: "",
      Sales_Org: "",
      Distribution_Channel: "",
      Company_Code: "",
      Order_Creation_Date: "",
      Order_Amount: "",
      Order_Currency: "",
      Customer_Number: "",
      Amount_in_USD: "",
    });

    setShowTableView(true);
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

  const handleEditSubmit = (editedRowData) => {
    const updatedRows = rowData.map((row) => {
      if (row.id === selectedRows[0]) {
        return {
          ...row,
          ...editedRowData,
        };
      }
      return row;
    });

    setRowData(updatedRows);
    setShowEditPopup(false);
  };

  // state  management

  useEffect(() => {
    // Update the table when rowData changes
    setShowTableView(true);
    console.log("state mngmnt", rowData);
  }, [rowData]);

  const handleRefreshData = () => {
    setRowData(rowData); // Reset the row data to the original data
    setSearchQuery("");
  };

  // Backend fetch data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/h2hbackend/Read"
        );
        const modifiedData = response.data.map((row, index) => ({
          id: index + 1,
          ...row,
        }));
        setRowData(modifiedData);
        console.log("Response data", modifiedData);
      } catch (error) {
        console.error("Error fetching data from the API:", error);
      }
    };

    fetchData();
  }, []);

 const handlePredictButton = () => {
  
 };


  return (
    <div className="body-container">
      <div className="body-topdiv">
        <div className="body-topdivleft">
          <div
            onClick={handleHomeClick}
            className={`homePage ${showTableView ? "bodyUnderline" : null}`}
          >
            Home Page
          </div>
          <div
            onClick={handleAddDataClick}
            className={`addData ${showAddData ? "bodyUnderline" : null}`}
          >
            Add Data
          </div>
          <div
            onClick={handleAnalyticalViewClick}
            className={`analyticalView ${
              showAnalyticalView ? "bodyUnderline" : null
            }`}
          >
            Analytical View
          </div>
        </div>
        <div className="body-topdivright">
          <Search onChange={handleSearch} setSearchQuery={setSearchQuery} />
          <button onClick={handleAdvanceSearch} className="advance-search">
            Advance Search
          </button>
        </div>
      </div>
      <div className="table">
        {showAdvanceSearch && (
          <div className="overlay">
            <AdvanceSearch
              onCancel={handleAdvanceSearchCancel}
              onSubmit={handleAdvanceSearchSubmit}
              rows={filteredRows}
              columns={columns}
            />
          </div>
        )}

        {showAddData ? (
          <AddDataSection
            newRowData={newRowData}
            handleNewRowChange={handleNewRowChange}
            handleAddDataSubmit={handleAddDataSubmit}
            handleCancelAddData={handleCancelAddData}
            setShowTableView={setShowTableView}
          />
        ) : showTableView ? (
          <div className="custom-scrollbar-container">
            <DataGrid
              rows={filteredRows}
              columns={columns}
              initialState={{
                ...rows.initialState,
                pagination: { paginationModel: { pageSize: 5 } },
              }}
              pageSizeOptions={[5, 10, 25]}
              checkboxSelection
              onRowSelectionModelChange={(ids) => handleRowSelection(ids)}
            />
          </div>
        ) : showAnalyticalView ? (
          <AnalyticalView
            rows={rowData}
            distributionChannelField="Distribution_Channel"
            customerNumberField="Customer_Number"
          />
        ) : null}

        {showEditPopup && selectedRows.length === 1 ? (
          <div className="overlay">
            <EditDataSection
              rows={rowData}
              selectedRows={selectedRows}
              onCancel={() => setShowEditPopup(false)}
              onSubmit={handleEditSubmit}
            />
          </div>
        ) : null}
      </div>

      {showTableView ? (
        <div className="body-bottomdiv">
          <button className="refreshData" onClick={handleRefreshData}>
            Refresh Data
          </button>
          <button
            className={`editData ${
              selectedRows.length !== 1 ? "disabled" : null
            }`}
            onClick={handleEditClick}
          >
            Edit
          </button>
          <button
            className={`deleteData ${
              selectedRows.length === 0 ? "disabled" : null
            }`}
            onClick={handleDeleteClick}
          >
            Delete
          </button>
          <button
            className={`predictButton ${
              selectedRows.length !== 1 ? "disabled" : null
            }`}
            onClick={handlePredictButton}
          >
            Predict
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default Body;
