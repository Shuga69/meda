import React from "react";
import "./style.css";

const ToggleButton = ({ toggle, onClick }) => {
  let toggleClasses = "gabor-toggle-button__line";

  if (toggle) {
    toggleClasses = "gabor-toggle-button__line gabor-open";
  }

  return (
    <button className='gabor-toggle-button' onClick={onClick}>
      <div className={toggleClasses}></div>
      <div className={toggleClasses}></div>
      <div className={toggleClasses}></div>
    </button>
  );
};

export default ToggleButton;
