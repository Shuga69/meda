import React from "react";
import "./style.css";
const Button = ({ className, style, onClick, type, text, icon, id }) => {
  return (
    <button
      id={id}
      className={className ? className : `gabor-custom-button ${type}`}
      style={style}
      onClick={onClick}>
      {icon && <img className='gabor-btn-icon' src={icon} />}
      {text}
    </button>
  );
};

export default Button;
