import React from "react";
import Button from "../Button";
import ProfileInfo from "./ProfileInfo";
import SideTitle from "./SideTitle";
import mainAvatar from "../../assets/avatar.png";
import notification from "../../assets/notification.svg";
import Tabs from "../Tabs";
import "./style.css";
const RightSideBar = ({ children, title, labels }) => {
  return (
    <div className='meda-right-side-container'>
      <div className='meda-right-side__inner'>
        <ProfileInfo
          text='Radiology department'
          avatar={mainAvatar}
          icon={notification}
        />
        <SideTitle text={title} />
        <div className='meda-right-side-menu'>
          <Tabs type='side-bar'>
            <Button
              style={{
                borderTopLeftRadius: 8,
                borderBottomLeftRadius: 8,
              }}
              label={labels[0]}
            />
            <Button label={labels[1]} />
            <Button
              style={{
                borderTopRightRadius: 8,
                borderBottomRightRadius: 8,
              }}
              label={labels[2]}
            />
          </Tabs>
        </div>
        {children}
      </div>
    </div>
  );
};

export default RightSideBar;
