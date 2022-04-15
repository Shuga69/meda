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
            fontSize: "14px",
            fontWeight: "500",
            color: "#000000",
          }}
          text={title}
        />
        <div className='meda-input-by-text'>
          <Text style={{ marginTop: "5px", whiteSpace: "pre" }} text={`by `} />
          <Text style={{ marginTop: "5px", color: "#028F68" }} text={by} />
        </div>
      </div>
    </div>
  );
};

export default ActivitiesItem;
