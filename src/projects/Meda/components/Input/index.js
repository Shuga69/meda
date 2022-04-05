import React from "react";
import "./style.css";
const Input = ({ icon, placeholder, style, background, height, disabled }) => {
  return (
    <div style={style} className='meda-custom-input-container'>
      <input
        style={{ background: background, height: height }}
        className='meda-custom-input'
        disabled={disabled}
        placeholder={placeholder}
      />
      {icon && <img className='icon' src={icon} />}
    </div>
  );
};

export default Input;
