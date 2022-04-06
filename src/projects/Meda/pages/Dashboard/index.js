import React from "react";
import Text from "../../components/Text";
import RightSideBar from "../../components/RightSideBar";
import HomeSideBar from "../../components/HomeSideBar";
import Button from "../../components/Button";
import sideLine from "../../assets/sideLine.svg";
import sideLines from "../../assets/sideLines.svg";

import "./style.css";
import PatientExperienceStatistic from "../../components/PatientExperienceStatistic";
import PatientExperienceCharts from "../../components/PatientExperienceCharts";
import DonutChart from "../../components/DonutChart";
import BarChart from "../../components/BarChart";
const Dashboard = () => {
  return (
    <div className='meda-dashboard-section'>
      <div className='meda-home-container'>
        <div className='meda-home__inner'>
          <div className='meda-container'>
            <div className='meda-dashboard-title'>
              <Text
                style={{
                  "font-weight": "500",
                  "font-size": "20px",
                  "line-height": "23px",
                  color: "#000000",
                }}
                text='Patient experience survey summary'
              />
              <Button type='darkGreen' text='+ New' />
            </div>
            <div className='meda-statistic-card-container'>
              <PatientExperienceStatistic
                title='Responses'
                subtitle='last month'
                count='263'
                changes='+12'
                type='increase'
                percent={67}
              />
              <PatientExperienceStatistic
                title='Responses'
                subtitle='last YEAR'
                count='1756'
                changes='-37'
                type='decrease'
                percent={29}
              />
              <PatientExperienceStatistic
                title='Average Patient Satisfaction'
                subtitle='last month'
                count='8.2'
                changes='+0.6'
                type='increase'
                percent={72}
              />
              <PatientExperienceStatistic
                title='Average Patient Satisfaction'
                subtitle='last year'
                count='7.7'
                changes='-0.2'
                type='decrease'
                percent={54}
              />
            </div>
            <div className='meda-statistic-card-container'>
              <PatientExperienceCharts
                title='Did you see the doctor within 15 min of your appointment time?'
                subtitle='This Quarter'>
                <DonutChart percent={[15, 85]} />
              </PatientExperienceCharts>
              <PatientExperienceCharts
                title='Did you the doctor explain things ia a way that was easy to understand? '
                subtitle='This Quarter'
                style={{ width: "35%" }}>
                <BarChart
                  data={[
                    {
                      data: [30, 45, 20],
                    },
                    {
                      data: [20, 25, 35],
                    },
                    {
                      data: [35, 30, 25],
                    },
                  ]}
                />
              </PatientExperienceCharts>
              <PatientExperienceCharts
                title='Did the doctor listen to you carefully?'
                subtitle='This Quarter'
                style={{ width: "35%" }}>
                <BarChart
                  data={[
                    {
                      data: [25, 45, 15],
                    },
                    {
                      data: [22, 35, 35],
                    },
                    {
                      data: [30, 25, 25],
                    },
                  ]}
                />
              </PatientExperienceCharts>
            </div>
            <div className='meda-statistic-card-container'>
              <PatientExperienceCharts
                title='Did you see the doctor within 15 min of your appointment time?'
                subtitle='This Quarter'>
                <DonutChart percent={[44, 56]} />
              </PatientExperienceCharts>
              <PatientExperienceCharts
                title='Did you the doctor explain things ia a way that was easy to understand? '
                subtitle='This Quarter'
                style={{ width: "35%" }}>
                <BarChart
                  data={[
                    {
                      data: [45, 25, 35],
                    },
                    {
                      data: [20, 45, 40],
                    },
                    {
                      data: [15, 30, 30],
                    },
                  ]}
                />
              </PatientExperienceCharts>
              <PatientExperienceCharts
                title='Did the doctor listen to you carefully?'
                subtitle='This Quarter'
                style={{ width: "35%" }}>
                <BarChart
                  data={[
                    {
                      data: [30, 15, 20],
                    },
                    {
                      data: [27, 25, 35],
                    },
                    {
                      data: [35, 30, 25],
                    },
                  ]}
                />
              </PatientExperienceCharts>
            </div>

            <div className='meda-statistic-card-container-mobile'>
              <PatientExperienceCharts
                title='Did you see the doctor within 15 min of your appointment time?'
                subtitle='This Quarter'
                style={{ width: "45%" }}>
                <DonutChart percent={[15, 85]} />
              </PatientExperienceCharts>
              <PatientExperienceCharts
                title='Did you the doctor explain things ia a way that was easy to understand? '
                subtitle='This Quarter'
                style={{ width: "50%" }}>
                <BarChart
                  data={[
                    {
                      data: [30, 45, 20],
                    },
                    {
                      data: [20, 25, 35],
                    },
                    {
                      data: [35, 30, 25],
                    },
                  ]}
                />
              </PatientExperienceCharts>
            </div>
            <div className='meda-statistic-card-container-mobile'>
              <PatientExperienceCharts
                title='Did you see the doctor within 15 min of your appointment time?'
                subtitle='This Quarter'
                style={{ width: "45%" }}>
                <DonutChart percent={[44, 56]} />
              </PatientExperienceCharts>
              <PatientExperienceCharts
                title='Did you the doctor explain things ia a way that was easy to understand? '
                subtitle='This Quarter'
                style={{ width: "50%" }}>
                <BarChart
                  data={[
                    {
                      data: [30, 45, 20],
                    },
                    {
                      data: [20, 25, 35],
                    },
                    {
                      data: [35, 30, 25],
                    },
                  ]}
                />
              </PatientExperienceCharts>
            </div>
            <div className='meda-statistic-card-container-mobile'>
              <PatientExperienceCharts
                title='Did you see the doctor within 15 min of your appointment time?'
                subtitle='This Quarter'
                style={{ width: "45%" }}>
                <DonutChart percent={[44, 56]} />
              </PatientExperienceCharts>

              <PatientExperienceCharts
                title='Did the doctor listen to you carefully?'
                subtitle='This Quarter'
                style={{ width: "50%" }}>
                <BarChart
                  data={[
                    {
                      data: [30, 15, 20],
                    },
                    {
                      data: [27, 25, 35],
                    },
                    {
                      data: [35, 30, 25],
                    },
                  ]}
                />
              </PatientExperienceCharts>
            </div>

            <div className='meda-survey-btn-container'>
              <div className='meda-settings-save-btn-container dashboard'>
                <Button type='black' text='Save as' />
                <Button type='green' text='Edit' />
              </div>
              <Button type='blue' text='Share' />
            </div>
          </div>
        </div>
      </div>
      <div className='meda-dashboard-right-side-container'>
        <div className='meda-dashboard-right-side-line'>
          <img src={sideLine} />
        </div>
        <div className='meda-dashboard-right-side-line-text'>
          <img src={sideLines} />
          <Text
            style={{
              "margin-left": "17px",
              "font-size": "11px",
              "font-weight": "500",
              "text-transform": "uppercase",
            }}
            text='previous quarter'
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
