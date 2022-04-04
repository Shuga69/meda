import React from "react";
import logo from "../assets/logo.svg";
import MenuItem from "./MenuItem";
import Text from "../components/Text";
import department from "../assets/departmentIcon.svg";
import patients from "../assets/patientsIcon.svg";
import dashboard from "../assets/dashboardIcon.svg";
import settings from "../assets/settingsIcon.svg";
import DepartmentIcon from "./MenuItem/MenuIcons/DepartmentIcon";
import "./style.css";
import PatientsIcon from "./MenuItem/MenuIcons/PatientsIcon";
import DashboardIcon from "./MenuItem/MenuIcons/DashboardIcon";
import SettingsIcon from "./MenuItem/MenuIcons/SettingsIcon";
const Menu = () => {
  return (
    <header className='meda-header'>
      <img src={logo} />
      <div className='meda-menu-container'>
        <MenuItem
          to='/'
          text='Department'
          image={(active) => <DepartmentIcon active={active} />}
        />
        <MenuItem
          to='/a'
          text='Patients'
          image={(active) => <PatientsIcon active={active} />}
        />
        <MenuItem
          to='/s'
          text='Dashboard'
          image={(active) => <DashboardIcon active={active} />}
        />
        <MenuItem
          to='/d'
          text='Settings'
          image={(active) => <SettingsIcon active={active} />}
        />
      </div>
      <Text style={{ color: "#028F68", opacity: 0.6 }} text='LOG OUT'></Text>
    </header>
  );
};

export default Menu;
