import React, { useState, useEffect } from "react";
import { lessons } from "../../../data/data";
import { useParams } from "react-router-dom";

const Lesson = () => {
  const { lesson: lessonParameter } = useParams();
  const [lesson, setLessons] = useState({});

  useEffect(() => {
    setLessons(lessons.find((e) => e.code == lessonParameter));
  });

  if (Object.keys(lesson).length) {
    const {
      number,
      name,
      description,
      video: { url: videoUrl },
      transcription,
    } = lesson;

    return (
      <div id="lesson">
        <div className="header">
          <h3 className="numberLesson">Lesson {number}</h3>
          <h2 className="lessonName">{name}</h2>
          <p className="lessonDescription">{description}</p>
        </div>
        <div className="videoLesonWrapper">
          <iframe className="videoLesson" src={videoUrl}></iframe>
        </div>
        <Tasks />
        <div className="askWraper">
          <div
            className="img"
            // style={{ backgroundImage: `url(${tutorImg})` }}
          ></div>
          <p className="name">John Doe </p>
          <p className="position">Mentor</p>
          <button>Ask</button>
        </div>
        <div className="transcriptWraper">
          <h3>Transcript</h3>
          <div className="transcript">
            {transcription.map((e) => (
              <p>{e}</p>
            ))}
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Lesson;

const Tasks = () => {
  const question = {
    code: "question123",
    question:
      "Which systems can be reported on with Google Analytics tracking code?",
    options: [
      {
        value: "option1",
        answer: "Mobile Applications",
      },
      {
        value: "option2",
        answer: "Online point of sales system",
      },
      {
        value: "option3",
        answer: "Online point of sales system",
      },
      {
        value: "option4",
        answer: "Systems not conected to the internet",
      },
    ],
  };

  const options = [
    {
      value: "",
      answer: "E-commerce platforms",
    },
  ];

  const [radio, setRadio] = useState("option1");

  const onChange = (e) => {
    setRadio(e);
  };

  return (
    <div className="tasksWraper">
      <h3 className="">Complete de the task</h3>
      <p className="taskQuestion">{question.question}</p>
      <ul className="options">
        {question.options.map((e) => {
          return (
            <li
              className="option"
              value={e.value}
              onClick={(e) => {
                onChange(e.target.getAttribute("value"));
                console.log(e.target);
              }}
            >
              <div
                className="radioBtn"
                value={e.value}
                check={`${radio == e.value}`}
                onClick={(e) => {
                  onChange(e.target.getAttribute("value"));
                  console.log(radio);
                }}
              ></div>
              <p
                value={e.value}
                onClick={(e) => {
                  onChange(e.target.getAttribute("value"));
                  console.log(e.target);
                }}
              >
                {e.answer}
              </p>
            </li>
          );
        })}
      </ul>
      <button>Submit</button>

      {/*  */}
    </div>
  );
};
