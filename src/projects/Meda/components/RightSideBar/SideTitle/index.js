import React from "react";
import Text from "../../Text";
import "./style.css";

const SideTitle = ({ text }) => {
  return (
    <div className='side-title-container'>
      <Text
        style={{
          "font-weight": 500,
          "font-size": "20px",
          color: "#000000",
        }}
        text={text}
      />
      <div className='add-button'>
        <Text
          style={{
            "font-weight": 500,
            "font-size": "24px",
            color: "#FFF",
            "line-height": "0px",
          }}
          text='+'
        />
      </div>
    </div>
  );
};

export default SideTitle;
