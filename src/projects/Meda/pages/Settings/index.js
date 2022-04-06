import React from "react";
import CheckboxToggle from "../../components/CheckboxToggle";
import Button from "../../components/Button";
import settingsRightSide from "../../assets/settingsBg.svg";
import RightSideBar from "../../components/RightSideBar";
import ActivitiesSideBar from "../../components/ActivitiesSideBar";
import InfoContainer from "../../components/InfoContainer";
import Text from "../../components/Text";
import user from "../../assets/bigAvatar.png";
import Input from "../../components/Input";
import "./style.css";
const Settings = () => {
  return (
    <div className='meda-patients-section'>
      <div className='meda-patients-container'>
        <div className='meda-patients__inner'>
          <div className='meda-container'>
            <Text
              style={{
                "font-weight": "500",
                "font-size": "20px",
                "line-height": "23px",
                color: "#000000",
                "margin-top": "65px",
                "margin-bottom": "57px",
              }}
              text='Settings'
            />
            <div className='meda-summary-info-container'>
              <div className='meda-summary-info'>
                <InfoContainer text='Photo'>
                  <div className='meda-settings-avatar-info'>
                    <img src={user} />
                    <Button type='green' text='Upload image' />
                  </div>
                </InfoContainer>
                <InfoContainer expanded={false} text='Personal Info'>
                  &nbsp;
                </InfoContainer>
                <InfoContainer text='Change password'>
                  <div className='meda-settings-password-info'>
                    <Text
                      style={{ "margin-bottom": "5px" }}
                      text='Current Password'
                    />
                    <Input background=' #FAFBFC' style={{ width: "75%" }} />
                  </div>
                  <div className='meda-settings-password-info'>
                    <Text
                      style={{ "margin-bottom": "5px" }}
                      text='New Password'
                    />
                    <Input background=' #FAFBFC' style={{ width: "75%" }} />
                  </div>
                </InfoContainer>
              </div>
              <div className='meda-summary-info'>
                <InfoContainer dropDown={false} text='Contact preferences'>
                  <div className='meda-settings-contact-container'>
                    <div className='meda-settings-contact-title'>
                      <Text text='Contact Method' />
                      <Text
                        style={{ "font-weight": "500" }}
                        text='Secure Message'
                      />
                    </div>
                    <div className='meda-settings-contact-item'>
                      <Text text='Email' />
                      <CheckboxToggle />
                    </div>
                    <div className='meda-settings-contact-item'>
                      <Text text='Mobile Phone' />
                      <CheckboxToggle />
                    </div>
                    <div className='meda-settings-contact-item'>
                      <Text text='Mail' />
                      <CheckboxToggle />
                    </div>
                    <div className='meda-settings-contact-item'>
                      <Text text='Surveys' />
                      <CheckboxToggle />
                    </div>
                    <div className='meda-settings-contact-item'>
                      <Text text='Notifications' />
                      <CheckboxToggle />
                    </div>
                  </div>
                </InfoContainer>
              </div>
            </div>
            <div className='meda-survey-btn-container'>
              <div className='meda-settings-save-btn-container'>
                <Button type='black' text='Save and close' />
                <Button type='green' text='Save' />
              </div>
              <Button type='blue' text='Support' />
            </div>
          </div>
        </div>
      </div>
      <div className='meda-settings-right-side-container'>
        <img src={settingsRightSide} />
      </div>
    </div>
  );
};

export default Settings;
