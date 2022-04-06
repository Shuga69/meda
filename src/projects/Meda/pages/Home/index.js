import React from "react";
import OverviewCard from "../../components/OverviewCard";
import Text from "../../components/Text";
import covidInfo from "../../assets/covidInfoImage.png";
import "./style.css";
import Overview from "../../components/Overview";
import Statistic from "../../components/Statistic";
import RightSideBar from "../../components/RightSideBar";
import SideTitle from "../../components/RightSideBar/SideTitle";
import Button from "../../components/Button";
import HomeSideBar from "../../components/HomeSideBar";
import Tabs from "../../components/Tabs";
const Home = () => {
  return (
    <div className='meda-home-section'>
      <div className='meda-home-container'>
        <div className='meda-home__inner'>
          <div className='meda-container'>
            <Text
              style={{
                fontSize: "30px",
                fontWeight: "500",
                marginTop: "36.66px",
                color: "#000000",
              }}
              text='Radiology Department'
            />
            <Overview />
            <Statistic />
            <div className='meda-covid-info'>
              <div className='meda-covid-info-text'>
                <Text
                  style={{
                    color: "white",
                    fontSize: "18px",
                    width: "200px",
                  }}
                  text='Current information relating to the COVID-19'
                />
                <Button
                  type='white'
                  style={{ marginTop: "20px" }}
                  text='Read more'
                />
              </div>
              <img className='meda-covid-image' src={covidInfo} />
            </div>
          </div>
        </div>
      </div>
      <RightSideBar title='Contacts' labels={["Staff", "Patients", "Notes"]}>
        <HomeSideBar />
      </RightSideBar>
    </div>
  );
};

export default Home;
