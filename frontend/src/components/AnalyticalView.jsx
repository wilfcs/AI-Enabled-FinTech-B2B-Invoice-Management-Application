// import React, { useState } from "react";
// import Highcharts from "highcharts";
// import HighchartsReact from "highcharts-react-official";

// const AnalyticalView = ({ rows }) => {
//   const [distributionChannel, setDistributionChannel] = useState("");
//   const [customerNumber, setCustomerNumber] = useState("");

//   // Calculate total amount per distribution channel
//   const calculateTotalAmountPerChannel = () => {
//     const totalAmountPerChannel = {};

//     rows.forEach((row) => {
//       const { Distribution_Channel, Order_Amount } = row;
//       if (totalAmountPerChannel[Distribution_Channel]) {
//         totalAmountPerChannel[Distribution_Channel] += Order_Amount;
//       } else {
//         totalAmountPerChannel[Distribution_Channel] = Order_Amount;
//       }
//     });

//     return totalAmountPerChannel;
//   };

//   // Prepare data for bar chart
//   const prepareBarChartData = () => {
//     const totalAmountPerChannel = calculateTotalAmountPerChannel();
//     const categories = Object.keys(totalAmountPerChannel);
//     const data = Object.values(totalAmountPerChannel);

//     return {
//       chart: {
//         type: "bar",
//       },
//       title: {
//         text: "Total Amount per Distribution Channel",
//       },
//       xAxis: {
//         categories: categories,
//         title: {
//           text: "Distribution Channel",
//         },
//       },
//       yAxis: {
//         title: {
//           text: "Total Amount",
//         },
//       },
//       series: [
//         {
//           name: "Total Amount",
//           data: data,
//         },
//       ],
//     };
//   };

//   // Prepare data for pie chart
//   const preparePieChartData = () => {
//     const totalAmountPerChannel = calculateTotalAmountPerChannel();
//     const data = Object.entries(totalAmountPerChannel).map(
//       ([channel, amount]) => ({
//         name: channel,
//         y: amount,
//       })
//     );

//     return {
//       chart: {
//         type: "pie",
//       },
//       title: {
//         text: "Total Amount per Distribution Channel (Pie Chart)",
//       },
//       series: [
//         {
//           name: "Total Amount",
//           data: data,
//         },
//       ],
//     };
//   };

//   const handleDistributionChannelChange = (event) => {
//     setDistributionChannel(event.target.value);
//   };

//   const handleCustomerNumberChange = (event) => {
//     setCustomerNumber(event.target.value);
//   };

//   const barChartData = prepareBarChartData();
//   const pieChartData = preparePieChartData();

//   const chartStyle = {
//     width: "400px", // Adjust the width as desired
//     height: "300px", // Adjust the height as desired
//   };

//   return (
//     <div className="analyticalViewDiv">
//       <div>
//         <h2>Analytical View</h2>
//         <label htmlFor="distributionChannel">Distribution Channel:</label>
//         <input
//           type="text"
//           id="Distribution_Channel"
//           value={distributionChannel}
//           onChange={handleDistributionChannelChange}
//         />
//       </div>
//       <div>
//         <label htmlFor="customerNumber">Customer Number:</label>
//         <input
//           type="text"
//           id="Customer_Number"
//           value={customerNumber}
//           onChange={handleCustomerNumberChange}
//         />
//       </div>
//       <div style={chartStyle}>
//         <HighchartsReact highcharts={Highcharts} options={barChartData} />
//       </div>
//       <div style={chartStyle}>
//         <HighchartsReact highcharts={Highcharts} options={pieChartData} />
//       </div>
//     </div>
//   );
// };

// export default AnalyticalView;

// import React, { useState } from "react";
// import Highcharts from "highcharts";
// import HighchartsReact from "highcharts-react-official";

// const AnalyticalView = ({ rows }) => {
//   const [distributionChannel, setDistributionChannel] = useState("");
//   const [customerNumber, setCustomerNumber] = useState("");

//   // Calculate total amount per distribution channel
//   const calculateTotalAmountPerChannel = () => {
//     const totalAmountPerChannel = {};

//     rows.forEach((row) => {
//       const { Distribution_Channel, Order_Amount } = row;
//       if (totalAmountPerChannel[Distribution_Channel]) {
//         totalAmountPerChannel[Distribution_Channel] += Order_Amount;
//       } else {
//         totalAmountPerChannel[Distribution_Channel] = Order_Amount;
//       }
//     });

//     return totalAmountPerChannel;
//   };

//   // Prepare data for bar chart
//   const prepareBarChartData = () => {
//     const totalAmountPerChannel = calculateTotalAmountPerChannel();
//     const categories = Object.keys(totalAmountPerChannel);
//     const data = Object.values(totalAmountPerChannel);

//     return {
//       chart: {
//         type: "bar",
//       },
//       title: {
//         text: "Total Amount per Distribution Channel",
//       },
//       xAxis: {
//         categories: categories,
//         title: {
//           text: "Distribution Channel",
//         },
//       },
//       yAxis: {
//         title: {
//           text: "Total Amount",
//         },
//       },
//       series: [
//         {
//           name: "Total Amount",
//           data: data,
//         },
//       ],
//     };
//   };

//   // Prepare data for pie chart
//   const preparePieChartData = () => {
//     const totalAmountPerChannel = calculateTotalAmountPerChannel();
//     const data = Object.entries(totalAmountPerChannel).map(
//       ([channel, amount]) => ({
//         name: channel,
//         y: amount,
//       })
//     );

//     return {
//       chart: {
//         type: "pie",
//       },
//       title: {
//         text: "Total Amount per Distribution Channel (Pie Chart)",
//       },
//       series: [
//         {
//           name: "Total Amount",
//           data: data,
//         },
//       ],
//     };
//   };

//   const handleDistributionChannelChange = (event) => {
//     setDistributionChannel(event.target.value);
//   };

//   const handleCustomerNumberChange = (event) => {
//     setCustomerNumber(event.target.value);
//   };

//   const barChartData = prepareBarChartData();
//   const pieChartData = preparePieChartData();

//   const chartStyle = {
//     width: "400px", // Adjust the width as desired
//     height: "300px", // Adjust the height as desired
//   };

//   return (
//     <div className="analyticalViewDiv">
//       <div>
//         <h2>Analytical View</h2>
//         <label htmlFor="distributionChannel">Distribution Channel:</label>
//         <input
//           type="text"
//           id="Distribution_Channel"
//           value={distributionChannel}
//           onChange={handleDistributionChannelChange}
//         />
//       </div>
//       <div>
//         <label htmlFor="customerNumber">Customer Number:</label>
//         <input
//           type="text"
//           id="Customer_Number"
//           value={customerNumber}
//           onChange={handleCustomerNumberChange}
//         />
//       </div>
//       <div style={chartStyle}>
//         <HighchartsReact highcharts={Highcharts} options={barChartData} />
//       </div>
//       <div style={chartStyle}>
//         <HighchartsReact highcharts={Highcharts} options={pieChartData} />
//       </div>
//     </div>
//   );
// };

// export default AnalyticalView;

import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const AnalyticalChart = () => {
  // Sample data for bar chart
  const barChartData = [
    {
      Distribution_Channel: "Martinique",
      Order_Amount: 787.36,
    },
    {
      Distribution_Channel: "United Arab Emirates",
      Order_Amount: 1405.54,
    },
    {
      Distribution_Channel: "Greece",
      Order_Amount: 0,
    },
    {
      Distribution_Channel: "Argentina",
      Order_Amount: 1065.33,
    },
    {
      Distribution_Channel: "Armenia",
      Order_Amount: 302.85,
    },
    {
      Distribution_Channel: "United States of America",
      Order_Amount: 8380.69,
    },
    {
      Distribution_Channel: "United States Minor Outlying Islands",
      Order_Amount: 545.85,
    },
  ];

  // Sample data for pie chart
  const pieChartData = [
    { status: "Open", count: 50 },
    { status: "Close", count: 75 },
  ];

  // Calculate the total amount per distribution channel for bar chart
  const calculateTotalAmountPerChannel = () => {
    const totalAmountPerChannel = {};

    barChartData.forEach((row) => {
      const { Distribution_Channel, Order_Amount } = row;
      if (totalAmountPerChannel[Distribution_Channel]) {
        totalAmountPerChannel[Distribution_Channel] += Order_Amount;
      } else {
        totalAmountPerChannel[Distribution_Channel] = Order_Amount;
      }
    });

    return totalAmountPerChannel;
  };

  // Prepare data for bar chart
  const prepareBarChartData = () => {
    const totalAmountPerChannel = calculateTotalAmountPerChannel();
    const categories = Object.keys(totalAmountPerChannel);
    const data = Object.values(totalAmountPerChannel);

    return {
      chart: {
        type: "bar",
      },
      title: {
        text: "Total Amount per Distribution Channel",
      },
      xAxis: {
        categories: categories,
        title: {
          text: "Distribution Channel",
        },
      },
      yAxis: {
        title: {
          text: "Total Amount",
        },
      },
      series: [
        {
          name: "Total Amount",
          data: data,
        },
      ],
    };
  };

  // Prepare data for pie chart
  const preparePieChartData = () => {
    const total = pieChartData.reduce((sum, item) => sum + item.count, 0);

    return {
      chart: {
        type: "pie",
      },
      title: {
        text: "Invoice Status",
      },
      tooltip: {
        pointFormat: "{series.name}: <b>{point.y}</b>",
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: "pointer",
          dataLabels: {
            enabled: true,
            format: "<b>{point.name}</b>: {point.percentage:.1f}%",
          },
        },
      },
      series: [
        {
          name: "Invoices",
          colorByPoint: true,
          data: pieChartData.map((item) => ({
            name: item.status,
            y: (item.count / total) * 100,
          })),
        },
      ],
    };
  };

  return (
    <div className="analyticalViewDiv">
      <div className="analyticalBox">
        <div>
          <input
            type="text"
            id="Distribution_Channel"
            // value={distributionChannel}
            // onChange={handleDistributionChannelChange}
            placeholder="Distribution Channel"
          />
        </div>
        <div>
          <input
            type="text"
            id="Customer_Number"
            // value={customerNumber}
            // onChange={handleCustomerNumberChange}
            placeholder="Customer Number Channel"
          />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ width: "50%", height: "50px" }}>
          <div style={{ width: "400px", height: "400px" }}>
            <HighchartsReact
              highcharts={Highcharts}
              options={prepareBarChartData()}
            />
          </div>
        </div>
        <div style={{ width: "50%" }}>
          <div style={{ width: "400px", height: "400px" }}>
            <HighchartsReact
              highcharts={Highcharts}
              options={preparePieChartData()}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticalChart;
