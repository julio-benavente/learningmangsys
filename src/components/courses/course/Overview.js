import React, { useState, useEffect } from "react";
import { skills as skillData } from "../../../data/data";

const Overview = (props) => {
  const [skill, setSkill] = useState({});

  useEffect(() => {
    setSkill(skillData);
  }, []);

  const { data } = props;
  const {
    code,
    description,
    image,
    lessonsTaken,
    name,
    numberLessons,
    skills,
    video,
    tasks,
    hour,
  } = data;

  return (
    <div id="overview">
      <h2 className="titleSection">Course: {name}</h2>
      <div className="details">
        <div className="detailItem">
          <div className="icon">
            <i class="far fa-file-alt"></i>
          </div>
          <p className="description">{numberLessons} lessons</p>
        </div>
        <div className="detailItem">
          <div className="icon">
            <i class="far fa-file-alt"></i>
          </div>
          <p className="description">{tasks} tasks</p>
        </div>
        <div className="detailItem">
          <div className="icon">
            <i class="far fa-clock"></i>
          </div>
          <p className="description">{hour} hours </p>
        </div>
      </div>
      <div className="courseDescription">
        <p>{description}</p>
      </div>
      <div className="skills">
        {skills &&
          skills.map((skillCode) => {
            const { name, image } = skill.find((e) => skillCode == e.code);
            return (
              <div className="skill">
                <div className="skillImg">
                  {Object.keys(skill).length ? (
                    <img src={image} alt={`${name} skill image`} />
                  ) : (
                    <i class="fas fa-adjust"></i>
                  )}
                </div>
                <div className="skillDescription">{name}</div>
              </div>
            );
          })}
      </div>
      <button className="continueCourseBtn">Continue course</button>
      <div className="courseLevel">
        <div className="courseLevelImg">
          <i class="fas fa-star"></i>
        </div>
        <p className="courseLevelDescription">Level: Middle</p>
      </div>

      <img className="courseImg" src={image} alt="image" />
      <div className="courseBarProgress">
        <p className="title">Course progress</p>
        <div className="achived">{`2/6 Lessons`}</div>
        <div className="barProgress">
          <div className="bar"></div>
          <div className="progress"></div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
