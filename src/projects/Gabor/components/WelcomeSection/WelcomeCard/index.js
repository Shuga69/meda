import React from "react";
import Text from "../../Text";
import "./style.css";
const WelcomeCard = ({ reverse, image, text }) => {
  return (
    <div
      style={
        reverse
          ? { flexDirection: "column-reverse" }
          : { flexDirection: "column" }
      }
      className='gabor-welcome-card-container'>
      <img src={image} />
      <Text className='gabor-welcome-card-text' text={text} />
    </div>
  );
};

export default WelcomeCard;
