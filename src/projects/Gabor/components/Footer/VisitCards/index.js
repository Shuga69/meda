import React from "react";
import visit from "../../../assets/MasterCard.png";
import "./style.css";
const VisitCards = () => {
  return (
    <div className='gabor-visit-section'>
      <div className='gabor-visit-text-container'>
        <img src={visit} />
        <img src={visit} />
        <img src={visit} />
        <img src={visit} />
      </div>
    </div>
  );
};

export default VisitCards;
