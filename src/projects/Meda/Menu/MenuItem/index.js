import React from "react";
import Text from "../../components/Text";
import "./style.css";
const MenuItem = ({ image, text }) => {
  return (
    <div className='meda-menu-item'>
      <img src={image} />
      <Text style={{ "font-weight": "500" }} text={text} />
    </div>
  );
};

export default MenuItem;
