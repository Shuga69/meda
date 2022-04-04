import React from "react";
import "./style.css";
const Input = ({ icon, placeholder, style, background }) => {
  return (
    <div style={style} className='meda-custom-input-container'>
      <input
        style={{ background: background }}
        className='meda-custom-input'
        placeholder={placeholder}
      />
      {icon && <img className='icon' src={icon} />}
    </div>
  );
};

export default Input;
