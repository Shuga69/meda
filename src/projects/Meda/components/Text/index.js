import React from "react";
import "./style.css";
const Text = ({ text, style }) => {
  return (
    <p className='meda-simple-text' style={style}>
      {text}
    </p>
  );
};

export default Text;
