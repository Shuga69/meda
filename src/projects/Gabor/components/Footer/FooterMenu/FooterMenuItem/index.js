import React from "react";
import Text from "../../../Text";
import "./style.css";

const FooterMenuItem = ({ title, menuList }) => {
  return (
    <div className='gabor-footer-menu-item'>
      <Text className='gabor-footer-menu-title' text={title} />
      {menuList.map((item) => {
        return (
          <Text
            key={item.text}
            className='gabor-footer-menu-text-item'
            text={item.text}
          />
        );
      })}
    </div>
  );
};

export default FooterMenuItem;
