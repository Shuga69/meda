import React from "react";
import RadialChart from "../RadialChart";
import Text from "../Text";
import "./style.css";
import arrowUp from "../../assets/arrow-up-right.svg";
import arrowDown from "../../assets/arrow-down-right.svg";
const PatientExperienceStatistic = ({
  title,
  subtitle,
  count,
  changes,
  type,
  percent,
}) => {
  return (
    <div className='meda-patient-exp-container'>
      <div>
        <Text
          style={{
            "font-size": "16px",
            color: "#000000",
            "font-weight": "500",
          }}
          text={title}
        />
        <Text
          style={{
            color: "#555555",
            "text-transform": "uppercase",
            "margin-top": "8px",
          }}
          text={subtitle}
        />
      </div>
      <div className='meda-patient-exp-statistic-container'>
        <Text style={{ "font-size": "36px" }} text={count} />
        <div className='meda-patient-exp-statistic'>
          <Text
            style={
              type === "increase"
                ? {
                    "font-size": "16px",
                    color: "#028F68",
                    "margin-right": "5px",
                  }
                : {
                    color: "#FF2C1F",
                    "margin-right": "5px",
                    "font-size": "16px",
                  }
            }
            text={changes}
          />
          <img src={type === "increase" ? arrowUp : arrowDown} />
          <RadialChart percent={percent} />
        </div>
      </div>
    </div>
  );
};

export default PatientExperienceStatistic;
