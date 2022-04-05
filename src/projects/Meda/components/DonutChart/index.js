import React from "react";
import ApexChart from "react-apexcharts";
const DonutChart = ({ percent }) => {
  const series = percent;
  const options = {
    chart: {
      type: "donut",
    },
    legend: {
      position: "left",
      offsetY: 25,
      markers: {
        width: 12,
        height: 12,
        strokeWidth: 0,
        strokeColor: "#fff",

        radius: 12,

        offsetX: -5,
        offsetY: 1,
      },
    },
    colors: ["#FF5247", "#028F68"],
    dataLabels: {
      enabled: false,
    },
    labels: [`NO ${series[0]}%`, `YES ${series[1]}%`],
    tooltip: {
      enabled: true,
      y: {
        formatter: function (val) {
          return val + "%";
        },
        title: {
          formatter: function (seriesName) {
            return "";
          },
        },
      },
    },
  };

  return (
    <div id='chart'>
      <ApexChart options={options} series={series} type='donut' width={270} />
    </div>
  );
};

export default DonutChart;
