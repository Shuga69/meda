import React from "react";
import "./style.css";
const Backdrop = ({ onClick }) => {
  return <div className='backdrop' onClick={onClick} />;
};

export default Backdrop;
