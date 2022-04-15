import React, { useState } from "react";
import ApexChart from "react-apexcharts";
import Button from "../../Button";
import Tabs from "../../Tabs";
import Text from "../../Text";
import "./style.css";
const Chart = () => {
  const chartBtnStyle = {
    background: "white",
    border: "1px solid #E5EEEB",
    borderRadius: "6px",
    textTransform: "uppercase",
    fontSize: "11px",
    width: "80px",
    height: "30px",
  };
  const [admittedData, setAdmittedData] = useState([
    180, 236, 140, 236, 140, 236, 50, 300, 50, 300, 140, 90,
  ]);
  const [dischargedData, setDischargedData] = useState([
    140, 160, 100, 170, 100, 150, 120, 150, 110, 170, 100, 150,
  ]);
  const [categoriesData, setCategoriesData] = useState([
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
  ]);
  const [categoriesDayData, setDayCategoriesData] = useState(
    Array.from(Array(30).keys())
  );
  const toQuartal = () => {
    setCategoriesData(categoriesData.slice(0, 3));
    setAdmittedData(admittedData.slice(0, 3));
    setDischargedData(dischargedData.slice(0, 3));
  };
  const toMonth = () => {
    setCategoriesData(categoriesDayData);
    setAdmittedData([10, 23, 14, 36, 40, 26, 0, 30, 50, 0, 10, 90]);
    setDischargedData([
      140, 160, 100, 170, 100, 150, 120, 150, 110, 170, 100, 150,
    ]);
  };
  const toYear = () => {
    setCategoriesData([
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
    ]);
    setAdmittedData([180, 236, 140, 236, 140, 236, 50, 300, 50, 300, 140, 90]);
    setDischargedData([
      140, 160, 100, 170, 100, 150, 120, 150, 110, 170, 100, 150,
    ]);
  };
  const series = [
    {
      name: "Admitted",
      data: admittedData,
    },
    {
      name: "Discharged",
      data: dischargedData,
    },
  ];
  const options = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "vertical",
        shadeIntensity: 0.1,
        inverseColors: true,
        opacityFrom: 0.5,
        opacityTo: 0.05,
        stops: [0, 100],
      },
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#028F68", "#FF5247"],
    stroke: {
      curve: "smooth",
      width: 3,
    },

    grid: {
      show: true,
      borderColor: "#ebeff2",
      strokeDashArray: 0,
      position: "back",
      xaxis: {
        lines: {
          show: false,
          offsetX: "0.5",
          offsetY: "0.5",
        },
      },
      row: {
        colors: undefined,
        opacity: 0.5,
      },
      column: {
        colors: undefined,
        opacity: 0.5,
      },
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
    },
    xaxis: {
      labels: {
        show: true,
        offsetX: 2,
        style: {
          colors: "#A3B0AC",
        },
      },
      categories: categoriesData,
    },
    yaxis: {
      labels: {
        show: true,
        align: "left",
        offsetX: -10,
        offsetY: 0,
        rotate: 0,
        style: {
          colors: "#A3B0AC",
        },
      },
      opposite: true,
    },
    legend: {
      show: false,
    },
  };
  return (
    <div className='meda-chart-container'>
      <div className='meda-chart-title'>
        <Text
          style={{
            fontWeight: "500",
            fontSize: "16px",
            color: "#000000",
          }}
          text='Total patients per month'
        />
        <div className='meda-chart-btn-container'>
          <Tabs>
            <Button style={chartBtnStyle} label='Year' onClick={toYear} />
            <Button style={chartBtnStyle} label='Quartal' onClick={toQuartal} />
            <Button style={chartBtnStyle} label='Month' onClick={toMonth} />
          </Tabs>
        </div>
      </div>
      <div className='meda-chart-view-container'>
        <div className='meda-chart-view-info-container'>
          <div className='meda-chart-view-info'>
            <Text style={{ fontSize: "16px" }} text='Average' />
            <Text style={{ fontWeight: "300", fontSize: "48px" }} text='213' />
          </div>
          <div className='meda-chart-view-info-bottom'>
            <div className='meda-chart-view-info'>
              <Text
                style={{ fontSize: "12px", fontWeight: "300" }}
                text='Admitted'
              />
              <Text
                style={{
                  fontWeight: "300",
                  fontSize: "30px",
                  color: "#028F68",
                }}
                text='129'
              />
            </div>
            <div className='meda-chart-view-info-line'></div>
            <div className='meda-chart-view-info'>
              <Text
                style={{ fontSize: "12px", fontWeight: "300" }}
                text='Discharged'
              />
              <Text
                style={{
                  fontWeight: "300",
                  fontSize: "30px",
                  color: "#FF5247",
                }}
                text='84'
              />
            </div>
          </div>
        </div>
        <div className='meda-chart-container-g'>
          <ApexChart
            type='area'
            height='100%'
            width='100%'
            series={series}
            options={options}
          />
        </div>
      </div>
    </div>
  );
};

export default Chart;
