import React from "react";
import PatientsHeader from "../../components/PatientsHeader";
import InfoContainer from "../../components/InfoContainer";
import InfoContainerText from "../../components/InfoContainer/InfoContainerText";
import RightSideBar from "../../components/RightSideBar";
import ActivitiesSideBar from "../../components/ActivitiesSideBar";
import Table from "../../components/Table";
import Text from "../../components/Text";
import "./style.css";
import Input from "../../components/Input";
import Button from "../../components/Button";
import calendar from "../../assets/calendarIcon.svg";
const Appointment = () => {
  const infoData = [
    {
      title: "Status",
      text: "Open",
      color: "#028F68",
    },
    {
      title: "Priority",
      text: "Normal",
    },
    {
      title: "Owner",
      text: "Dianne Russell",
    },
  ];
  const appointmentsColumns = ["", "", ""];

  const appointmentsData = [
    {
      id: "1",
      items: ["Start time", "08.05.2020", "10:30 AM"],
    },
    {
      id: "2",
      items: ["End time", "08.05.2020", "11:00 AM"],
    },
  ];
  return (
    <div className='meda-patients-section'>
      <div className='meda-patients-container'>
        <div className='meda-patients__inner'>
          <div className='meda-container'>
            <PatientsHeader
              title='appointment'
              subtitle='New appointment'
              image={calendar}
              infoData={infoData}
            />
            <div className='meda-summary-info-appointment-container'>
              <div className='meda-summary-info-appointment-text'>
                <div className='meda-summary-info-appointment'>
                  <InfoContainer dropDown={false} text='Summary'>
                    <InfoContainerText title='Patient' text='Sean Barrow' />
                    <InfoContainerText title='Patient ID' text='8312' />
                    <InfoContainerText title='PCP' text='' />
                    <InfoContainerText
                      title='Attending doctor'
                      text='Dermatologist'
                    />
                    <InfoContainerText
                      title='Appointment location'
                      text='312 Grammont St # 101, Monroe, LA 71201'
                    />
                  </InfoContainer>
                </div>
                <div className='meda-summary-info-appointment'>
                  <InfoContainer dropDown={false} text='Date & Time'>
                    <Table
                      tbodyData={appointmentsData}
                      theadData={appointmentsColumns}
                    />
                  </InfoContainer>
                  <div className='meda-hr-line-duration'></div>
                  <InfoContainerText title='Duration' text='30 min' />
                </div>
              </div>
              <div className='meda-hr-line'></div>
              <div className='meda-appointment-description'>
                <Text style={{ "margin-bottom": "10px" }} text='Description' />
                <Input
                  background='#FAFBFC'
                  height='120px'
                  disabled={true}
                  style={{ width: "100%" }}
                />
              </div>
              <div className='meda-appointment-btn-container'>
                <Button type='black' text='Save and close' />
                <Button type='green' text='Save' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <RightSideBar title='Activities' labels={["Timeline", "Tasks", "Notes"]}>
        <ActivitiesSideBar />
      </RightSideBar>
    </div>
  );
};

export default Appointment;
