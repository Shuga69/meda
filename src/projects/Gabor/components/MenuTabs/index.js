import React, { Fragment } from "react";
import Text from "../Text";
import tabArrow from "../../assets/tabArrow.svg";
import "./style.css";

const MenuTabs = ({ menuData }) => {
  return (
    <div className='gabor-tab-menu-container'>
      {menuData.map((item, index, arr) => {
        return index === arr.length - 1 ? (
          <Text key={index} className='gabor-tab-menu-item' text={item.text} />
        ) : (
          <Fragment key={index}>
            <Text className='gabor-tab-menu-item' text={item.text} />
            <img src={tabArrow} />
          </Fragment>
        );
      })}
    </div>
  );
};

export default MenuTabs;
