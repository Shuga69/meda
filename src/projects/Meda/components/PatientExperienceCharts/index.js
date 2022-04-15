import React from "react";
import Text from "../Text";
import "./style.css";

const PatientExperienceCharts = ({ title, subtitle, children, style }) => {
  return (
    <div className='meda-patient-exp-donut-container' style={style}>
      <div>
        <Text
          style={{
            fontWeight: "500",
            fontSize: "16px",
            color: "#000000",
          }}
          text={title}
        />
        <Text
          style={{
            color: "#555555",
            textTransform: "uppercase",
            fontSize: "12px",
            marginTop: "10px",
          }}
          text={subtitle}
        />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default PatientExperienceCharts;
