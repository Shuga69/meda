import React from "react";
import Text from "../../Text";
import "./style.css";
import user from "../../../assets/userIcon.png";
const PatientsHeaderInfo = ({ data, title, subtitle, image }) => {
  return (
    <div className='meda-user-header-container'>
      <div className='meda-user-info-header-container'>
        <img src={image} />
        <div className='meda-user-info-header-text'>
          <Text
            style={{
              "text-transform": "uppercase",
              "font-size": "11px",
              color: "#777777",
              "line-height": "13px",
              "margin-bottom": "5px",
            }}
            text={title}
          />
          <Text
            style={{
              "font-size": "20px",
              color: "#000000",
              "line-height": "23px",
            }}
            text={subtitle}
          />
        </div>
      </div>
      <div className='meda-user-header-description-container'>
        {data.map((item) => (
          <div>
            <Text
              style={{
                "font-size": "11px",
                color: "#777777",
                "text-transform": "uppercase",
                "margin-bottom": "5px",
              }}
              text={item.title}
            />
            <Text
              style={{
                color: item.color ? item.color : "#000000",
              }}
              text={item.text}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatientsHeaderInfo;
