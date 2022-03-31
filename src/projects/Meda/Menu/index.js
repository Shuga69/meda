import React from "react";
import logo from "../assets/logo.svg";
import MenuItem from "./MenuItem";
import Text from "../components/Text";
import department from "../assets/departmentIcon.svg";
import "./style.css";
const Menu = () => {
  return (
    <header className='meda-header'>
      <img width={51.4} height={63.33} src={logo} />
      <div>
        <MenuItem text='Department' image={department} />
        <MenuItem text='Department' image={department} />
        <MenuItem text='Department' image={department} />
        <MenuItem text='Department' image={department} />
      </div>
      <Text text='LOG OUT'></Text>
    </header>
  );
};

export default Menu;
