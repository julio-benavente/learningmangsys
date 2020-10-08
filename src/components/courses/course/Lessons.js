import React, { useState, useEffect } from "react";
import { useParams, Link, useRouteMatch } from "react-router-dom";
import { lessons } from "../../../data/data";

const Lessons = () => {
  const [data, setData] = useState([]);
  const { course } = useParams();

  useEffect(() => {
    setData(lessons.filter((e) => e.course == course));
  }, []);

  return (
    <div id="lessons">
      <h2 className="titleSection">Course: Marketing Basics</h2>
      <div className="coursesWraper">
        {data.map(
          ({ name, code, image, video: { number: video }, lessons, hours }) => {
            return (
              <CourseCard
                name={name}
                code={code}
                image={image}
                video={video}
                lessons={lessons}
                hours={hours}
              />
            );
          }
        )}
      </div>
    </div>
  );
};

export default Lessons;

const CourseCard = ({ name, code, image, video, lessons, hours }) => {
  const { path, url } = useRouteMatch();

  return (
    <div className="courseCard">
      <h4 className="courseName">{name}</h4>
      <Link to={`${url}/${code}`} className="start">
        <button>Start</button>
      </Link>

      <div className="img" style={{ backgroundImage: image }}></div>
      <div className="details">
        <div className="video">
          <i class="icon fab fa-youtube"></i>
          <span>{video} videos</span>
        </div>
        <div className="lessons">
          <i class="icon far fa-file-alt"></i>
          <span>{lessons} lessons</span>
        </div>
        <div className="lessons">
          <i class="icon far fa-clock"></i>
          <span>{hours} hours</span>
        </div>
      </div>
    </div>
  );
};
