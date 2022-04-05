import React from "react";
import ApexChart from "react-apexcharts";
const RadialChart = ({ percent }) => {
  const series = [percent];
  const options = {
    chart: {
      height: 0,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        track: {
          background: "#D3F4EB",
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            offsetY: 6,
            color: "#028F68",
          },
        },
        hollow: {
          size: "50%",
        },
      },
    },
    fill: {
      type: "solid",
      colors: ["#028F68"],
    },
    labels: [""],
  };

  return (
    <div id='chart'>
      <ApexChart
        options={options}
        series={series}
        type='radialBar'
        height={110}
        width={90}
      />
    </div>
  );
};

export default RadialChart;
