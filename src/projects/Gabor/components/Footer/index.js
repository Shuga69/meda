import React from "react";
import Reviews from "./Reviews";
import SignUp from "./SignUp";
import VisitCards from "./VisitCards";
import Rights from "./Rights";
import FooterMenu from "./FooterMenu";
const Footer = () => {
  return (
    <div className='gabor-footer-section'>
      <SignUp />

      <FooterMenu />

      <VisitCards />
      <Reviews />
      <Rights />
    </div>
  );
};

export default Footer;
