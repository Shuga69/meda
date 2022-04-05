import React, { useState } from "react";
import Text from "../Text";
import "./style.css";
const CheckboxToggle = () => {
  const [isChecked, setIsChecked] = useState();
  const handleChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className='meda-switch-container'>
      <Text text='Deny' />
      <label className='switch'>
        <input type='checkbox' value={isChecked} onChange={handleChange} />
        <div className='slider'></div>
      </label>
      <Text style={isChecked ? { color: "#028F68" } : null} text='Allow' />
    </div>
  );
};

export default CheckboxToggle;
