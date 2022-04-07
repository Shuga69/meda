import React from "react";
import "./style.css";
const IconButton = ({ icon, onClick }) => {
  return (
    <button onClick={onClick} className='gabor-icon-button'>
      <img src={icon} />
    </button>
  );
};

export default IconButton;
