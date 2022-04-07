import React from "react";
import IconButton from "../../IconButton";
import right from "../../../assets/rightArrow.svg";
import Text from "../../Text";
import "./style.css";
const SeasonCard = ({ className, image, title, subtitle, color }) => {
  return (
    <div style={color} className={"gabor-season-card-section " + className}>
      <img src={image} />
      <div className='gabor-season-card-text-container'>
        <div>
          <Text className='gabor-season-card-text-title' text={title} />
          <Text className='gabor-season-card-text-subtitle' text={subtitle} />
        </div>
        <IconButton icon={right} />
      </div>
    </div>
  );
};

export default SeasonCard;
