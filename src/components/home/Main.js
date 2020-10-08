import React, { useState, useEffect } from "react";
import { skills } from "../../data/data";

const Main = () => {
  return (
    <div className="main">
      <ProgressHeading />
      <StatisticsCard />
      <Skills />
      <Awards />
    </div>
  );
};

export default Main;

const ProgressHeading = () => {
  return <h1 className="heading">Progress</h1>;
};

const StatisticsCard = () => {
  return (
    <div className="statisticsCard">
      <h3 className="title">Statistics</h3>
      <div className="graph">
        <div class="flex-wrapper">
          <div class="single-chart">
            <svg viewBox="0 0 36 36" class="circular-chart">
              <path
                class="circle-bg"
                d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                class="circle circleCompleted"
                stroke-dasharray="25, 100"
                d="M18 2.0845
          a 15.9155 15.9155 8 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                class="circle circleProgress"
                stroke-dasharray="25, 100"
                d="M18 2.0845
          a 15.9155 15.9155 8 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="progress">
        <div className="item completed">
          <i class="icon fas fa-circle"></i>
          <p className="percentage">{"25"}%</p>
          <p className="detail">completed</p>
        </div>
        <div className="item inProgress">
          <i class="icon fas fa-circle"></i>
          <p className="percentage">{"25"}%</p>
          <p className="detail">in progress</p>
        </div>
        <div className="item toBegin">
          <i class="icon fas fa-circle"></i>
          <p className="percentage">{"50"}%</p>
          <p className="detail">to begin</p>
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  const [skilllData, setSkilllData] = useState([]);

  useEffect(() => {
    setSkilllData(skills);
  });

  if (skilllData.length) {
    return (
      <div className="skills">
        <h3 className="title">Skills</h3>
        <div className="icons">
          {skilllData.slice(0, 6).map((e) => {
            const { image, name } = e;
            return (
              <div className="item">
                <img className="icon" src={image} alt={name} />
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
};

const Awards = () => {
  return (
    <div className="awards">
      <h3 className="title">Awards</h3>
      <div className="info">
        <h4 className="title">Level</h4>
        <div className="symbol">
          <i class="icon fas fa-peace"></i>
          <p className="level">{"Middle"}</p>
        </div>
        <p className="congratulations">
          Congratulations! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Recusandae, esse.
        </p>
        <div className="progressBar">
          <div className="progress"></div>
        </div>
        <div className="achived">{"60/100"}</div>
      </div>
    </div>
  );
};

//
