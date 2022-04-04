import React from "react";
import Text from "../../Text";
import "./style.css";
const InfoContainerText = ({ title, text }) => {
  return (
    <div className='meda-info-container-text-item'>
      <Text style={{ width: "220px" }} text={title} />
      <Text style={{ "font-weight": "500" }} text={text} />
    </div>
  );
};

export default InfoContainerText;
