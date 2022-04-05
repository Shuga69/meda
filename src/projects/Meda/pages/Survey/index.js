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
import survey from "../../assets/surveyIcon.svg";

const Survey = () => {
  const infoData = [
    {
      title: "Status",
      text: "Pending",
      color: "#5B8ECD",
    },
    {
      title: "Completed on",
      text: "08.06.2020",
    },
    {
      title: "Language",
      text: "English",
    },
    {
      title: "Owner",
      text: "Dianne Russell",
    },
  ];
  const appointmentsColumns = [
    "Response type",
    "Question",
    "Response text",
    "Value",
  ];

  const appointmentsData = [
    {
      id: "1",
      items: [
        "Choice",
        "Was your missed appointment related to any of the following?",
        "Appointment time",
        "4",
      ],
    },
    {
      id: "2",
      items: [
        "Choice",
        "What reasons prevented you form calling to cancelan appointment?",
        "Appointment desk unavailable",
        "5",
      ],
    },
    {
      id: "3",
      items: [
        "Choice",
        "How can we help you keep appointments in the future?",
        "Improve patient support",
        "3",
      ],
    },
    {
      id: "4",
      items: ["Choice", "Did you receive a reminding email/call?", "Yes", "3"],
    },
    {
      id: "5",
      items: [
        "Choice",
        "Would you like us to remind you about future appointments?",
        "Yes",
        "3",
      ],
    },
    {
      id: "6",
      items: [
        "Choice",
        "How would you like to be reached?",
        "Secure messages",
        "2",
      ],
    },
    {
      id: "7",
      items: [
        "Choice",
        "Would you like to reschedule the appointment?",
        "Yes",
        "4",
      ],
    },
  ];
  const menu = [
    {
      text: "Complete",
    },
    {
      text: "Delete",
    },
    {
      text: "Set invalid",
    },
  ];
  return (
    <div className='meda-patients-section'>
      <div className='meda-patients-container'>
        <div className='meda-patients__inner'>
          <div className='meda-container'>
            <PatientsHeader
              title='Survey Response'
              subtitle='No show survey for Sean Barrow'
              image={survey}
              infoData={infoData}
              data={menu}
              style={{ width: "25%" }}
            />
            <div className='meda-summary-info-survey-container'>
              <InfoContainer dropDown={false} text='Survey Response'>
                <div className='meda-survey-table-container'>
                  <Table
                    tbodyData={appointmentsData}
                    theadData={appointmentsColumns}
                    border={true}
                    rowStyle={{ "padding-top": "35px" }}
                    styleIndex={2}
                  />
                </div>
              </InfoContainer>
              <div className='meda-hr-line'></div>
              <div className='meda-survey-meta-section'>
                <Text text='1-8 of 8' />
                <Text text='Page 1' />
              </div>
            </div>
            <div className='meda-survey-btn-container'>
              <Button type='black' text='Mark reviewed' />
              <Button type='blue' text='Share' />
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

export default Survey;
