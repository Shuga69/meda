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
              textTransform: "uppercase",
              fontSize: "11px",
              color: "#777777",
              lineHeight: "13px",
              marginBottom: "5px",
            }}
            text={title}
          />
          <Text
            style={{
              fontSize: "20px",
              color: "#000000",
              lineHeight: "23px",
            }}
            text={subtitle}
          />
        </div>
      </div>
      <div className='meda-user-header-description-container'>
        {data.map((item) => (
          <div key={item.text}>
            <Text
              style={{
                fontSize: "11px",
                color: "#777777",
                textTransform: "uppercase",
                marginBottom: "5px",
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
