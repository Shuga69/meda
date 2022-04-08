import React from "react";
import Text from "../Text";
import tabArrow from "../../assets/tabArrow.svg";
import "./style.css";

const MenuTabs = ({ menuData }) => {
  return (
    <div className='gabor-tab-menu-container'>
      {menuData.map((item, index, arr) => {
        console.log(index === arr.length);
        return index === arr.length - 1 ? (
          <Text className='gabor-tab-menu-item' text={item.text} />
        ) : (
          <>
            <Text className='gabor-tab-menu-item' text={item.text} />
            <img src={tabArrow} />
          </>
        );
      })}
    </div>
  );
};

export default MenuTabs;
