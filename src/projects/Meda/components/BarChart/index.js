import React from "react";
import ApexChart from "react-apexcharts";

const BarChart = ({ data }) => {
  const series = data;
  const options = {
    chart: { toolbar: { show: false }, offsetX: 0 },
    plotOptions: {
      bar: {
        borderRadius: 10,
        colors: {
          backgroundBarRadius: 10,
        },
      },
    },
    xaxis: {
      categories: ["JUN", "JUL", "AUG"],
    },

    legend: {
      customLegendItems: ["Yes, definitely", "Yes, somewhat", "No"],
      position: "left",
      offsetY: 25,
      offsetX: -30,
      markers: {
        width: 12,
        height: 12,
        strokeWidth: 0,
        strokeColor: "#fff",

        radius: 12,

        offsetX: -5,
        offsetY: 2,
      },
    },
    colors: ["#028F68", "#63CCAF", "#FF5247"],
    dataLabels: {
      enabled: false,
    },
    yaxis: {
      labels: {
        show: true,
        align: "left",

        offsetY: 0,
        rotate: 0,
        style: {
          colors: "#A3B0AC",
        },
      },
      opposite: true,
    },
  };
  return (
    <div id='chart'>
      <ApexChart
        type='bar'
        options={options}
        series={series}
        width={450}
        height={170}
      />
    </div>
  );
};

export default BarChart;
