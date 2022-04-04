import React from "react";
import Text from "../Text";
import OverviewCard from "../OverviewCard";
import total from "../../assets/totalIcon.svg";
import cardio from "../../assets/cardioIcon.svg";
import brain from "../../assets/brainIcon.svg";
import "./style.css";
const Overview = () => {
  return (
    <div className='meda-overview-section'>
      <Text
        style={{
          "font-weight": "500",
          "font-size": "20px",
          "line-height": "23px",
          color: "#000000",
        }}
        text='Overview'
      />
      <div className='meda-overview-card-section'>
        <OverviewCard
          image={total}
          title='Total'
          patientsCount='168'
          count='562'
        />
        <OverviewCard
          image={brain}
          title='Neuroradiology'
          patientsCount='72'
          count='263'
        />
        <OverviewCard
          image={cardio}
          title='Cardiovascular'
          patientsCount='65'
          count='195'
        />
      </div>
    </div>
  );
};

export default Overview;
