import React from "react";
import Text from "../Text";
import logo from "../../assets/logo.svg";
import "./style.css";
const Footer = () => {
  return (
    <footer className='ron-footer-container'>
      <div className='ron-footer-content'>
        <div className='ron-footer-content-item-logo'>
          <img width={231} height={64} src={logo} />
          <Text
            style={{ fontWeight: 400, fontSize: 13 }}
            text='© EverythingLegal 2022. All Rights Reserved.'
          />
        </div>
        <div className='ron-footer-content-item'>
          <Text className='ron-footer-menu-item-title' text='Quick Links' />
          <Text className='ron-footer-menu-item' text='FAQ' />
          <Text className='ron-footer-menu-item' text='Contact' />
          <Text className='ron-footer-menu-item' text='Become a Notary' />
        </div>
        <div className='ron-footer-content-item'>
          <Text className='ron-footer-menu-item-title' text='Legal' />
          <Text className='ron-footer-menu-item' text='Terms and Conditions' />
          <Text className='ron-footer-menu-item' text='Privacy Policy' />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
