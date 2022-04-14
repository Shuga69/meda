import React from "react";
import logo from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";
import Button from "../Button";
import "./style.css";
const Header = () => {
  return (
    <header className='ron-header'>
      <div className='ron-container'>
        <div className='ron-header__inner'>
          <div className='ron-header-nav-container'>
            <NavLink className='ron-brand-image' to='/'>
              <img src={logo} className='ron-header__inner-logo' alt='Logo' />
            </NavLink>

            <nav className='ron-header-navigation'>
              <div>
                <NavLink to='/' className='ron-header__navigation-link'>
                  Pricing
                </NavLink>
                <NavLink to='/' className='ron-header__navigation-link'>
                  Schedule a Notary
                </NavLink>
                <NavLink to='/' className='ron-header__navigation-link'>
                  Notaries
                </NavLink>
              </div>
              <div className='ron-header-button'>
                <Button text='Register' />
                <Button
                  style={{
                    background: "transparent",
                    color: "#000",
                    border: "1px solid #979797",
                  }}
                  text='Login'
                />
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
