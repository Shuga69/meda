import React from "react";
import Text from "../../Text";
import "./style.css";
const ProcessCard = ({ number, title, subtitle }) => {
  return (
    <div className='ron-process-card-container'>
      <div className='ron-process-card-number-container'>{number}</div>
      <Text
        style={{ paddingTop: 20 }}
        className='ron-process-card-title'
        text={title}
      />
      <Text style={{ paddingTop: 5 }} text={subtitle} />
    </div>
  );
};

export default ProcessCard;
