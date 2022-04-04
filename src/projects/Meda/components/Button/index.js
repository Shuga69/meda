import React from "react";
import "./style.css";
const Button = ({ type, text, style, onClick, className }) => {
  return (
    <button
      className={className ? className : `meda-custom-button ${type}`}
      style={style}
      onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
