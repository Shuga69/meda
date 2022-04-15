import React from "react";
import "./style.css";
const Text = ({ text, style, className }) => {
  return (
    <p className={"gabor-simple-text " + className} style={style}>
      {text}
    </p>
  );
};

export default Text;
