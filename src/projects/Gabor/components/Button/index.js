import React from "react";
import "./style.css";
const Button = ({ className, style, onClick, type, text, icon }) => {
  return (
    <button
      className={className ? className : `gabor-custom-button ${type}`}
      style={style}
      onClick={onClick}>
      {icon}
      {text}
    </button>
  );
};

export default Button;
