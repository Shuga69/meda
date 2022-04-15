import React, { useState, useEffect } from "react";
import ApexChart from "react-apexcharts";

const BarChart = ({ data }) => {
  const [lanscapeMatches, setLandscapeMatches] = useState(
    window.matchMedia("(max-width: 1368px) and (max-height: 912px) ").matches
  );
  const [portraitMatches, setPortraitMatches] = useState(
    window.matchMedia("(max-width: 912px) and (max-height: 1368px) ").matches
  );
  useEffect(() => {
    window
      .matchMedia("(max-width: 1368px) and (max-height: 912px)")
      .addEventListener("change", (e) => setLandscapeMatches(e.matches));
    window
      .matchMedia("(max-width: 912px) and (max-height: 1368px)")
      .addEventListener("change", (e) => setPortraitMatches(e.matches));
  }, []);
  const series = data;
  const widthChart = lanscapeMatches ? 350 : portraitMatches ? 250 : 450;

  const legendPosition = lanscapeMatches
    ? {
        position: "top",
        offsetY: 25,
        offsetX: -50,
      }
    : portraitMatches
    ? {
        position: "top",
        offsetY: 25,
        offsetX: -70,
      }
    : {
        position: "left",
        offsetY: 25,
        offsetX: -30,
      };

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
      ...legendPosition,
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
        width={widthChart}
        height={170}
      />
    </div>
  );
};

export default BarChart;
