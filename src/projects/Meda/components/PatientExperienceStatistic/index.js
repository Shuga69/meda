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
            fontSize: "16px",
            color: "#000000",
            fontWeight: "500",
          }}
          text={title}
        />
        <Text
          style={{
            color: "#555555",
            textTransform: "uppercase",
            marginTop: "8px",
          }}
          text={subtitle}
        />
      </div>
      <div className='meda-patient-exp-statistic-container'>
        <Text style={{ fontSize: "36px" }} text={count} />
        <div className='meda-patient-exp-statistic'>
          <Text
            style={
              type === "increase"
                ? {
                    fontSize: "16px",
                    color: "#028F68",
                    marginRight: "5px",
                  }
                : {
                    color: "#FF2C1F",
                    marginRight: "5px",
                    fontSize: "16px",
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
