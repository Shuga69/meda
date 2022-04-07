import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import language from "../../../assets/language.svg";
import bag from "../../../assets/My_bag_icon.svg";
import search from "../../../assets/Search_icon.svg";
import signIn from "../../../assets/Sign_in_icon.svg";
import wishList from "../../../assets/Wish_list_icon.svg";
import "./style.css";
const SideDrawer = ({ show, onClick }) => {
  let drawerClasses = "side-drawer";
  if (show) {
    drawerClasses = "side-drawer open";
  }
  return (
    <div className={drawerClasses}>
      <div className='side-drawer__logo'>
        <img src={logo} className='side-drawer__logo-image' alt='Logo' />
      </div>
      <nav className='side-drawer__navigation'>
        <NavLink
          onClick={onClick}
          to='/'
          smooth={true}
          className='side-drawer__navigation-link'>
          Shoes
        </NavLink>

        <NavLink
          onClick={onClick}
          to='/brief'
          smooth={true}
          className='side-drawer__navigation-link'>
          Trainers
        </NavLink>
        <NavLink
          onClick={onClick}
          to='/'
          smooth={true}
          className='side-drawer__navigation-link'>
          Sandals
        </NavLink>

        <NavLink
          onClick={onClick}
          to='/brief'
          smooth={true}
          className='side-drawer__navigation-link'>
          Boots
        </NavLink>
        <NavLink
          onClick={onClick}
          to='/brief'
          smooth={true}
          className='side-drawer__navigation-link'>
          Handbags
        </NavLink>
        <NavLink
          onClick={onClick}
          to='/brief'
          smooth={true}
          className='side-drawer__navigation-link'>
          Sales
        </NavLink>
      </nav>
      <div className='side-drawer__header-info'>
        <div className='side-drawer__header__inner-language'>
          <img src={language} />
          <p> GBP (£)</p>
        </div>
        <div className='side-drawer__header__inner-icons'>
          <img src={search} />
          <img src={signIn} />
          <img src={wishList} />
          <img src={bag} />
        </div>
      </div>
    </div>
  );
};

export default SideDrawer;
