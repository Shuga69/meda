import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import ToggleButton from "./ToggleButton";
import language from "../../assets/language.svg";
import bag from "../../assets/My_bag_icon.svg";
import search from "../../assets/Search_icon.svg";
import signIn from "../../assets/Sign_in_icon.svg";
import wishList from "../../assets/Wish_list_icon.svg";
import { debounce } from "../../tools/debounce";
import "./style.css";
const Header = ({ drawerClickHandler, toggle }) => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [navStyle, setNavStyle] = useState(true);
  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;
    setNavStyle(currentScrollPos < 200);
    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 40) ||
        currentScrollPos < 10
    );

    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  return (
    <header
      style={{
        top: visible ? 0 : "-83px",
        background: navStyle ? "transparent" : "white",
      }}
      className='header'>
      <div className='gabor-container'>
        <div className='header__inner'>
          <div className='gabor-header-nav-container'>
            <NavLink className='brand-image' to='/'>
              <img src={logo} className='header__inner-logo' alt='Logo' />
            </NavLink>

            <nav className='header-navigation'>
              <NavLink to='/' className='header__navigation-link'>
                Shoes
              </NavLink>
              <NavLink
                to='/collection'
                smooth={true}
                className='header__navigation-link'>
                Trainers
              </NavLink>
              <NavLink
                to='portfolio'
                smooth={true}
                className='header__navigation-link'>
                Sandals
              </NavLink>
              <NavLink to='/brief' className='header__navigation-link'>
                Boots
              </NavLink>
              <NavLink
                to='contact'
                smooth={true}
                className='header__navigation-link'>
                Handbags
              </NavLink>
              <NavLink
                to='contact'
                smooth={true}
                className='header__navigation-link'>
                Sales
              </NavLink>
            </nav>
          </div>
          <div className='header-info'>
            <div className='header__inner-language'>
              <img src={language} />
              <p> GBP (£)</p>
            </div>
            <div className='header__inner-icons'>
              <img src={search} />
              <img src={signIn} />
              <img src={wishList} />
              <img src={bag} />
            </div>
          </div>
          <div className='header__inner-toggle'>
            <ToggleButton onClick={drawerClickHandler} toggle={toggle} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
