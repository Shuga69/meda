import React from "react";
import "./style.css";
const Button = ({ text, style, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={style}
      className={className ? className : "ron-button"}>
      {text}
    </button>
  );
};

export default Button;
