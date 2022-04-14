import React, { useState } from "react";

import Button from "../../components/Button";
import Text from "../../components/Text";
import "./style.css";
import Footer from "../../components/Footer";
import IconButton from "../../components/IconButton";
import SeasonCard from "../../components/SeasonSection/SeasonCard";
import MainSection from "../../components/MainSection";
import SeasonSection from "../../components/SeasonSection";
import WelcomeSection from "../../components/WelcomeSection";
const Home = () => {
  return (
    <div className='gabor-home-section'>
      <div className='gabor-slider-section'>
        <div className='gabor-container'>
          <MainSection />
        </div>
      </div>
      <div className='gabor-season-section'>
        <div className='gabor-container'>
          <SeasonSection />
        </div>
      </div>
      <div className='gabor-welcome-section'>
        <div className='gabor-container'>
          <WelcomeSection />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
