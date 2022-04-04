import React from "react";
import "./style.css";
import notification from "../../../assets/notification.svg";
import avatar from "../../../assets/avatar.png";
import Text from "../../Text";
const ProfileInfo = ({ icon, avatar, style, text, infoStyle }) => {
  return (
    <div className='meda-profile-container' style={style}>
      <div className='meda-profile-container-main-info' style={infoStyle}>
        <img src={avatar} />
        <div>
          <Text
            style={{
              "font-weight": "500",
              color: "#000000",
              "font-size": 14,
              "line-height": 16,
            }}
            text='Dianne Russell'
          />
          <Text
            style={{
              "line-height": 14,
              color: "#555555",
              "margin-top": 5,
              "font-size": 12,
            }}
            text={text}
          />
        </div>
      </div>
      <img src={icon} />
    </div>
  );
};

export default ProfileInfo;
