import React from "react";
import total from "../../assets/totalIcon.svg";
import Text from "../Text";
import Button from "../Button";
import "./style.css";
const OverviewCard = ({ image, title, count, patientsCount }) => {
  return (
    <div className='meda-overview-card'>
      <div className='meda-overview-card-total'>
        <img src={image} />
        <div className='meda-overview-card-total-text'>
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
              "font-weight": "400",
              "font-size": "12px",
              "line-height": "27.2px",
            }}
            text={`${patientsCount} new patients`}
          />
        </div>
      </div>
      <div className='meda-overview-card-count'>
        <Text
          style={{ "font-size": "26px", "font-weight": "500" }}
          text={count}
        />
        <Button type='white' text='Detail' />
      </div>
    </div>
  );
};

export default OverviewCard;
