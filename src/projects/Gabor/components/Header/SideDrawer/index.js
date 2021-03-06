import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import language from "../../../assets/language.svg";
import bag from "../../../assets/My_bag_icon.svg";
import search from "../../../assets/Search_icon.svg";
import signIn from "../../../assets/Sign_in_icon.svg";
import ToggleButton from "../ToggleButton";
import wishList from "../../../assets/Wish_list_icon.svg";
import "./style.css";
const SideDrawer = ({ show, onClick, drawerClickHandler, toggle }) => {
  let drawerClasses = "gabor-side-drawer";
  if (show) {
    drawerClasses = "gabor-side-drawer gabor-open";
  }
  return (
    <div className={drawerClasses}>
      <div className='gabor-side-drawer__logo'>
        <img src={logo} className='gabor-side-drawer__logo-image' alt='Logo' />
        <div className='gabor-header__inner-toggle gabor-close'>
          <ToggleButton onClick={onClick} toggle={show} />
        </div>
      </div>

      <nav className='gabor-side-drawer__navigation'>
        <NavLink
          onClick={onClick}
          to='/'
          smooth={"true"}
          className='gabor-side-drawer__navigation-link'>
          Shoes
        </NavLink>

        <NavLink
          onClick={onClick}
          to='/brief'
          smooth={"true"}
          className='gabor-side-drawer__navigation-link'>
          Trainers
        </NavLink>
        <NavLink
          onClick={onClick}
          to='/'
          smooth={"true"}
          className='gabor-side-drawer__navigation-link'>
          Sandals
        </NavLink>

        <NavLink
          onClick={onClick}
          to='/brief'
          smooth={"true"}
          className='gabor-side-drawer__navigation-link'>
          Boots
        </NavLink>
        <NavLink
          onClick={onClick}
          to='/brief'
          smooth={"true"}
          className='gabor-side-drawer__navigation-link'>
          Handbags
        </NavLink>
        <NavLink
          onClick={onClick}
          to='/brief'
          smooth={"true"}
          className='gabor-side-drawer__navigation-link'>
          Sales
        </NavLink>
      </nav>
      <div className='gabor-side-drawer__header-info'>
        <div className='gabor-side-drawer__header__inner-icons'>
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
