import React from "react";
import image from "../../assets/sideBarImage.svg";
import Input from "../Input";
import "./style.css";
import attach from "../../assets/attachIcon.svg";
import ActivitiesItem from "./ActivitiesItem";
const ActivitiesSideBar = () => {
  return (
    <>
      <div className='meda-activities-side-bar-profile-container'>
        <div className='meda-activities-list'>
          <ActivitiesItem
            date='08.06.2020'
            title='Email: Summer Holiday'
            by='marketing'
          />
          <ActivitiesItem
            date='08.06.2020'
            title='Email: Summer Holiday'
            by='marketing'
          />
          <ActivitiesItem
            date='08.06.2020'
            title='Email: Summer Holiday'
            by='marketing'
          />
          <ActivitiesItem
            date='08.06.2020'
            title='Email: Summer Holiday'
            by='marketing'
          />
          <ActivitiesItem
            date='08.06.2020'
            title='Email: Summer Holiday'
            by='marketing'
          />
          <ActivitiesItem
            date='08.06.2020'
            title='Email: Summer Holiday'
            by='marketing'
          />
          <ActivitiesItem
            date='08.06.2020'
            title='Email: Summer Holiday'
            by='marketing'
          />
        </div>
        <Input placeholder='Type a post ...' icon={attach} />
        <img className='meda-home-side-bar-profile-image' src={image} />
      </div>
    </>
  );
};

export default ActivitiesSideBar;
