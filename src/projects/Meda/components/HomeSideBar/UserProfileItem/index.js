import React from "react";
import Text from "../../Text";
import arrow from "../../../assets/rightArrow.svg";
const UserProfileItem = ({ avatar }) => {
  return (
    <div className='meda-profile-container'>
      <div className='meda-profile-container-main-info'>
        <img src={avatar} />
        <div>
          <Text
            style={{
              "font-weight": "500",
              color: "#000000",
              "font-size": 16,
              "line-height": 16,
            }}
            text='Dianne Russell'
          />
          <Text
            style={{ "line-height": 14, color: "#555555" }}
            text='Radiology department'
          />
        </div>
      </div>
      <img src={arrow} />
    </div>
  );
};

export default UserProfileItem;
