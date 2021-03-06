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
import useModal from "../../hooks/useModal";
import Modal from "../Modal";
import "./style.css";
import IconButton from "../IconButton";
const Header = ({ drawerClickHandler, toggle }) => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const { isShowing, toggle: toggleModal } = useModal();
  const [navStyle, setNavStyle] = useState(true);
  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;
    setNavStyle(currentScrollPos < 100);
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
      className='gabor-header'>
      <div className='gabor-container'>
        <div className='gabor-header__inner'>
          <div className='gabor-header-nav-container'>
            <NavLink className='gabor-brand-image' to='/'>
              <img src={logo} className='gabor-header__inner-logo' alt='Logo' />
            </NavLink>

            <nav className='gabor-header-navigation'>
              <NavLink
                to='/collection'
                className='gabor-header__navigation-link'>
                Shoes
              </NavLink>
              <NavLink
                to='/collection'
                smooth={"true"}
                className='gabor-header__navigation-link'>
                Trainers
              </NavLink>
              <NavLink
                to='/collection'
                smooth={"true"}
                className='gabor-header__navigation-link'>
                Sandals
              </NavLink>
              <NavLink
                to='/collection'
                className='gabor-header__navigation-link'>
                Boots
              </NavLink>
              <NavLink
                to='/collection'
                smooth={"true"}
                className='gabor-header__navigation-link'>
                Handbags
              </NavLink>
              <NavLink
                to='/collection'
                smooth={"true"}
                className='gabor-header__navigation-link'>
                Sales
              </NavLink>
            </nav>
          </div>
          <div className='gabor-header-info'>
            <div className='gabor-header__inner-language'>
              <img src={language} />
              <p> GBP (??)</p>
            </div>
            <div className='gabor-header__inner-icons'>
              <img src={search} />
              <img src={signIn} />
              <img src={wishList} />
              <IconButton onClick={toggleModal} icon={bag} />
            </div>
          </div>
          <Modal isShowing={isShowing} hide={toggleModal} />
          <div className='gabor-header__inner-toggle'>
            <ToggleButton onClick={drawerClickHandler} toggle={toggle} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
