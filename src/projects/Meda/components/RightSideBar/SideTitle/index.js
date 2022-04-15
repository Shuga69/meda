import React from "react";
import Text from "../../Text";
import "./style.css";

const SideTitle = ({ text }) => {
  return (
    <div className='meda-side-title-container'>
      <Text
        style={{
          fontWeight: 500,
          fontSize: "20px",
          color: "#000000",
        }}
        text={text}
      />
      <div className='meda-add-button'>
        <Text
          style={{
            fontWeight: 500,
            fontSize: "24px",
            color: "#FFF",
            lineHeight: "0px",
          }}
          text='+'
        />
      </div>
    </div>
  );
};

export default SideTitle;
