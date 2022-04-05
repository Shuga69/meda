import React from "react";
import DonutChart from "../DonutChart";
import Text from "../Text";
import "./style.css";

const PatientExperienceCharts = ({ title, subtitle, children, style }) => {
  return (
    <div className='meda-patient-exp-donut-container' style={style}>
      <div>
        <Text
          style={{
            "font-weight": "500",
            "font-size": "16px",
            color: "#000000",
          }}
          text={title}
        />
        <Text
          style={{
            color: "#555555",
            "text-transform": "uppercase",
            "font-size": "12px",
            "margin-top": "10px",
          }}
          text={subtitle}
        />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default PatientExperienceCharts;
