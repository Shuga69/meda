import React from "react";
import "./style.css";
const Text = ({ text, style, className }) => {
  return (
    <p className={className ? className : "meda-simple-text"} style={style}>
      {text}
    </p>
  );
};

export default Text;
