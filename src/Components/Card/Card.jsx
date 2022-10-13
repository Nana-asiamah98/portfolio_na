import React from "react";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <div className="card">
      <div className="card-header">
        <img
          src={`https://unsplash.com/photos/SyYmXSDnJ54/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjY1Njg1NDA5&force=true&w=640`}
          alt="unsplash-img"
          width={100}
        />
      </div>
      <div className="card-body">
        <div className="card-body-header">
          <h2>Project 1</h2>
        </div>
        <div className="card-body-main">
          <span>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </span>
        </div>
        <div className="card-body-footer">
          <div>
            <Link to={`#0`}>
              <span className="card-hyperlink-modal">Read More</span>{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
