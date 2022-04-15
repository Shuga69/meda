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
              fontWeight: "500",
              color: "#000000",
              fontSize: "14px",
            }}
            text='Dianne Russell'
          />
          <Text
            style={{
              color: "#555555",
              marginTop: 5,
              fontSize: 12,
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
