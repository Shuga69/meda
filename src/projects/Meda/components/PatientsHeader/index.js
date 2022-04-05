import React from "react";
import Input from "../Input";
import search from "../../assets/search.svg";
import Text from "../Text";

import Button from "../Button";
import Tabs from "../Tabs";
import "./style.css";
import PatientsHeaderInfo from "./PatientsHeaderInfo";

const PatientsHeader = ({
  data,
  infoData = [],
  image,
  title,
  subtitle,
  style,
}) => {
  return (
    <div>
      <div className='meda-patients-header-container'>
        <div className='meda-patients-header-menu' style={style}>
          {data &&
            data.map((item) => (
              <Text
                style={{ color: "#7D8685", "font-size": "14px" }}
                text={item.text}
              />
            ))}
        </div>
        <Input background=' #FAFBFC' style={{ width: "20%" }} icon={search} />
      </div>

      <PatientsHeaderInfo
        title={title}
        subtitle={subtitle}
        data={infoData}
        image={image}
      />
    </div>
  );
};

export default PatientsHeader;
