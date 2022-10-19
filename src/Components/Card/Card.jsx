import React from "react";
import { Link } from "react-router-dom";

const Card = ({ title, description, img, ...props }) => {
  return (
    <div className="card">
      <div className="card-header">
        <img
          src={
            img != null
              ? img.url
              : `https://unsplash.com/photos/SyYmXSDnJ54/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjY1Njg1NDA5&force=true&w=640`
          }
          alt={img != null ? img.title : "unsplash-img"}
          width={100}
        />
      </div>
      <div className="card-body">
        <div className="card-body-header">
          <h2>{title}</h2>
        </div>
        <div className="card-body-main">
          <span>{description}</span>
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
