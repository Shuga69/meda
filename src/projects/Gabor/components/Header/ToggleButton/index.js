import React from "react";
import "./style.css";

const ToggleButton = ({ toggle, onClick }) => {
  let toggleClasses = "toggle-button__line";

  if (toggle) {
    toggleClasses = "toggle-button__line open";
  }

  return (
    <button className='toggle-button' onClick={onClick}>
      <div className={toggleClasses}></div>
      <div className={toggleClasses}></div>
      <div className={toggleClasses}></div>
    </button>
  );
};

export default ToggleButton;
