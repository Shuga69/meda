import React from "react";
import Text from "../Text";
import Button from "../Button";
import "./style.css";
const Notary = () => {
  return (
    <div className='ron-notary-container'>
      <div className='ron-notary-text-container'>
        <Text className='ron-notary-card-title' text='Are you a Notary?' />
        <Text
          style={{ marginTop: 10 }}
          text='Register to become a notary on EverythingLegal.com. Becoming a subscribe as a Remote Online Notary on the EverythingLegal.com. platform adds value to your notary profession!'
        />
        <Button
          style={{ marginTop: 20, padding: "15px 30px" }}
          text='Learn more'
        />
      </div>
    </div>
  );
};

export default Notary;
