import React from "react";
import Text from "../Text";
import "./style.css";
import Chart from "./Chart";
const Statistic = () => {
  return (
    <div className='meda-statistic-container'>
      <Text
        style={{
          fontWeight: "500",
          fontSize: "20px",
          lineHeight: "23px",
          color: "#000000",
        }}
        text='Statistic'
      />
      <Chart />
    </div>
  );
};

export default Statistic;
