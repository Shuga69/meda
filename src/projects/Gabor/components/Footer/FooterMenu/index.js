import React from "react";
import footerLogo from "../../../assets/footerLogo.svg";
import Text from "../../Text";
import FooterMenuItem from "./FooterMenuItem";
import "./style.css";
const FooterMenu = () => {
  const menuList = [
    [
      { text: "About us" },
      { text: "Contact Us" },
      { text: "Store Finder" },
      { text: "Acceptable Use Policy" },
      { text: "Privacy Policy" },
      { text: "Blog" },
    ],

    [
      { text: "Collect Plus" },
      { text: "Shipping Rates" },
      { text: "Delivery & Returns" },
      { text: "Terms & Conditions" },
      { text: "Click & Collect" },
      { text: "COVID-19" },
    ],

    [
      { text: "FAQs" },
      { text: "Cookie Policy" },
      { text: "Size Guide" },
      { text: "Shapes & Sizes" },
      { text: "Site Map" },
    ],

    [{ text: "Wish List" }, { text: "Gabor Shoe Features" }],

    [
      { text: "Shoes" },
      { text: "Boots" },
      { text: "Sandals" },
      { text: "Handbags" },
      { text: "Sale" },
    ],
  ];
  return (
    <div className='gabor-footer-menu-container'>
      <div className='gabor-container'>
        <div className='gabor-footer-menu-item-container'>
          <div className='gabor-footer-main-menu-item'>
            <img src={footerLogo} />
            <Text
              className='gabor-footer-description'
              text='The Clinkard Group Registered office Eveline House, Cannon Park Way, Middlesbrough, TS1 5JU, England Company Registration Number 02771054 VAT no. GB 633 2528 55'
            />
          </div>
          <FooterMenuItem menuList={menuList[0]} title='Gabor' />
          <FooterMenuItem menuList={menuList[1]} title='Customer Info' />
          <FooterMenuItem menuList={menuList[2]} title='Help' />
          <FooterMenuItem menuList={menuList[3]} title='Features' />
          <FooterMenuItem menuList={menuList[4]} title='Departments' />
        </div>
      </div>
    </div>
  );
};

export default FooterMenu;
