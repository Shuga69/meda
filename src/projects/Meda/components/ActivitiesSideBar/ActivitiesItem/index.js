import React from "react";
import "./style.css";
import Text from "../../Text";
const ActivitiesItem = ({ date, title, by }) => {
  return (
    <div className='meda-activities-item'>
      <Text text={date} />
      <div className='meda-activities-info'>
        <Text
          style={{
            "font-size": "14px",
            "font-weight": "500",
            color: "#000000",
          }}
          text={title}
        />
        <div className='meda-input-by-text'>
          <Text
            style={{ "margin-top": "5px", "white-space": "pre" }}
            text={`by `}
          />
          <Text style={{ "margin-top": "5px", color: "#028F68" }} text={by} />
        </div>
      </div>
    </div>
  );
};

export default ActivitiesItem;
