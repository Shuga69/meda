import React from "react";
import Header from "../../components/Header";
import MainSlider from "../../components/MainSlider";
import Process from "../../components/Process";
import Footer from "../../components/Footer";
import "./style.css";
import SolutionSection from "../../components/SolutionSection";
import Notary from "../../components/Notary";
const Main = () => {
  return (
    <div className='ron-main-section'>
      <div className='ron-container'>
        <div className='ron-main__inner'>
          <MainSlider />
        </div>
      </div>
      <div className='ron-process-background'>
        <Process />
      </div>
      <div className='ron-container'>
        <SolutionSection />
      </div>
      <div className='ron-notary-background'>
        <Notary />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
