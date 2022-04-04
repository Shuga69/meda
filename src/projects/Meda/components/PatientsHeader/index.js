import React from "react";
import Input from "../Input";
import search from "../../assets/search.svg";
import Text from "../Text";
import user from "../../assets/userIcon.png";
import Button from "../Button";
import Tabs from "../Tabs";
import "./style.css";
import PatientsHeaderInfo from "./PatientsHeaderInfo";

const PatientsHeader = ({ data }) => {
  const infoData = [
    {
      title: "Preffered contact",
      text: "Secure Massage",
    },
    {
      title: "Language",
      text: "English",
    },
    {
      title: "Risk level",
      text: "Low",
      color: "#028F68",
    },
  ];
  const btnMenuStyle = {
    width: "100%",
    background: "#FAFBFC",
    border: "1px solid #E5EEEB",
    "text-transform": "uppercase",
    color: "#000000",
    height: "50px",
  };
  return (
    <div>
      <div className='meda-patients-header-container'>
        <div className='meda-patients-header-menu'>
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
        title='Patient'
        subtitle='Sean Barrow'
        data={infoData}
        image={user}
      />
      <div className='meda-header-btn-container'>
        <Tabs type='side-bar'>
          <Button
            style={{
              ...{
                borderTopLeftRadius: 8,
                borderBottomLeftRadius: 8,
              },
              ...btnMenuStyle,
            }}
            label='Summary'
          />
          <Button style={btnMenuStyle} label='Care plan &amp; Team' />
          <Button style={btnMenuStyle} label='Lab results' />
          <Button
            style={{
              ...{
                borderTopRightRadius: 8,
                borderBottomRightRadius: 8,
              },
              ...btnMenuStyle,
            }}
            label='PGHD'
          />
        </Tabs>
      </div>
    </div>
  );
};

export default PatientsHeader;
