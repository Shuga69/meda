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
              fontWeight: "500",
              fontSize: "16px",
              color: "#000000",
            }}
            text={title}
          />
          <Text
            style={{
              fontWeight: "400",
              fontSize: "12px",
              lineHeight: "27.2px",
            }}
            text={`${patientsCount} new patients`}
          />
        </div>
      </div>
      <div className='meda-overview-card-count'>
        <Text style={{ fontSize: "26px", fontWeight: "500" }} text={count} />
        <Button type='white' text='Detail' />
      </div>
    </div>
  );
};

export default OverviewCard;
