import React from "react";
import RightSideBar from "../../components/RightSideBar";
import ActivitiesSideBar from "../../components/ActivitiesSideBar";
import PatientsHeader from "../../components/PatientsHeader";
import "./style.css";
import InfoContainer from "../../components/InfoContainer";
import InfoContainerText from "../../components/InfoContainer/InfoContainerText";
import LogInfoContainer from "../../components/LogInfoContainer";
import Tabs from "../../components/Tabs";
import Button from "../../components/Button";
import Table from "../../components/Table";
import user from "../../assets/userIcon.png";
const Patients = () => {
  const btnMenuStyle = {
    width: "100%",
    background: "#FAFBFC",
    border: "1px solid #E5EEEB",
    "text-transform": "uppercase",
    color: "#000000",
    height: "50px",
  };
  const menu = [
    {
      text: "Connect",
    },
    {
      text: "Add to marketing list",
    },
    {
      text: "Run workflow",
    },
    {
      text: "Start dialog",
    },
  ];
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
  const surveysColumns = ["Title", "Completed"];
  const surveysData = [
    {
      id: "1",
      items: ["Post-visit satisfaction survey", "08.07.2020"],
    },
  ];
  const feedBackColumns = ["Case title", "Status", "Data"];
  const feedBackData = [
    {
      id: "1",
      items: ["No feedback records found"],
    },
  ];
  const appointmentsColumns = ["Start time", "Speciality", "Status"];
  const appointmentsData = [
    {
      id: "1",
      items: ["08.05.2020", "Radiologist"],
      status: ["Open"],
      style: {
        color: "#028F68",
        "text-transform": "uppercase",
        "font-weight": "500",
      },
    },
    {
      id: "2",
      items: ["08.06.2020", "Dermatologist"],
      status: ["Cancelled"],
      style: {
        color: "#FF2C1F",
        "text-transform": "uppercase",
        "font-weight": "500",
      },
    },
  ];
  return (
    <div className='meda-patients-section'>
      <div className='meda-patients-container'>
        <div className='meda-patients__inner'>
          <div className='meda-container'>
            <PatientsHeader
              title='Patient'
              subtitle='Sean Barrow'
              image={user}
              infoData={infoData}
              data={menu}
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
            <div className='meda-summary-info-container'>
              <div className='meda-summary-info'>
                <InfoContainer text='Contact info'>
                  <InfoContainerText title='Full Name' text='Sean Barrow' />
                  <InfoContainerText title='Cell Phone' text='318-614-5271' />
                  <InfoContainerText title='Home Phone' text='---' />
                  <InfoContainerText
                    title='Address'
                    text='4682  Elk City Road Monroe, LA'
                  />
                  <InfoContainerText
                    title='Email'
                    text='s.barrow@outlook.com'
                  />
                </InfoContainer>
                <InfoContainer text='Personal'>&nbsp;</InfoContainer>
                <InfoContainer text='insurance Info'>
                  <InfoContainerText title='Member ID' text='1234567890' />
                  <InfoContainerText
                    title='Insurance Provider'
                    text='Insurance Provider'
                  />
                  <InfoContainerText title='Insurance Plan' text='GEO Blue' />
                </InfoContainer>
              </div>
              <div className='meda-summary-info'>
                <LogInfoContainer to='/newAppointment' text='Appointments'>
                  <Table
                    tbodyData={appointmentsData}
                    theadData={appointmentsColumns}
                  />
                </LogInfoContainer>
                <LogInfoContainer to='/survey' text='Surveys'>
                  <Table tbodyData={surveysData} theadData={surveysColumns} />
                </LogInfoContainer>
                <LogInfoContainer text='FeedBack'>
                  <Table tbodyData={feedBackData} theadData={feedBackColumns} />
                </LogInfoContainer>
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

export default Patients;
