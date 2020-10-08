import React, { useState, useEffect } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { courses, skills } from "../../data/data";

const Main = () => {
  const [typeCourses, setTypeCourses] = useState(true);
  const [inProgress, setInProgress] = useState([]);
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    setInProgress(courses.filter((e) => e.registered == true));

    setFeatured(courses.filter((e) => e.registered == false));
  }, []);

  console.log(inProgress);

  return (
    <div id="coursesMain">
      <div className="heading">
        <h2 className="title">My courses</h2>
        <p className="coursesInProgress" onClick={() => setTypeCourses(true)}>
          In progress
        </p>
        <p
          className="coursesFeatured active"
          onClick={() => setTypeCourses(false)}
        >
          Featured
        </p>
      </div>
      <div className="coursesWraper">
        {typeCourses
          ? inProgress &&
            inProgress.map(
              ({ name, code, image, video, lessonsTaken, numberLessons }) => {
                return (
                  <CourseCard
                    name={name}
                    code={code}
                    image={image}
                    video={video}
                    lessonsTaken={lessonsTaken}
                    numberLessons={numberLessons}
                  />
                );
              }
            )
          : featured &&
            featured.map(
              ({ name, code, image, video, lessonsTaken, numberLessons }) => {
                return (
                  <CourseCard
                    name={name}
                    code={code}
                    image={image}
                    video={video}
                    lessonsTaken={lessonsTaken}
                    numberLessons={numberLessons}
                  />
                );
              }
            )}
      </div>
    </div>
  );
};

export default Main;

const CourseCard = ({
  name,
  code,
  image,
  video,
  lessonsTaken,
  numberLessons,
}) => {
  let { path } = useRouteMatch();

  return (
    <div className="courseCard">
      <h4 className="courseName">{name}</h4>
      <Link to={`${path}/${code}`} className="start">
        <button>Start</button>
      </Link>
      <div className="progressBar">
        <div
          className="progress"
          style={{ width: `${(lessonsTaken / numberLessons) * 100}%` }}
        ></div>
      </div>
      <img class="image" src={image} alt="imga" />
      <div className="details">
        <div className="video">
          <i class="icon fab fa-youtube"></i>
          <span>{video} videos</span>
        </div>
        <div className="lessons">
          <i class="icon far fa-file-alt"></i>
          <span>{numberLessons} lessons</span>
        </div>
        <div className="achived">{`${lessonsTaken} / ${numberLessons}`}</div>
      </div>
    </div>
  );
};
