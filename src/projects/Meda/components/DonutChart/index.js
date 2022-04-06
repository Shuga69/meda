import React, { useState, useEffect } from "react";
import ApexChart from "react-apexcharts";
const DonutChart = ({ percent }) => {
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
  const series = percent;
  const widthChart = lanscapeMatches ? 240 : portraitMatches ? 250 : 270;
  const offsetChart = lanscapeMatches ? 10 : 25;
  const options = {
    chart: {
      type: "donut",
    },
    legend: {
      position: "left",
      offsetY: offsetChart,
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
      <ApexChart
        options={options}
        series={series}
        type='donut'
        width={widthChart}
      />
    </div>
  );
};

export default DonutChart;
