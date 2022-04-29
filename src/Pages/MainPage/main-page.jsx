import React from "react";
import { Link } from "react-router-dom";
import "./main-page.style.css";

const MainPage = () => {
  return (
    <div className="container">
      <div className="left-section"></div>
      <div className="right-section">
        <div className="sec-1">
          <div className="section-title">
            <h1 className="name-title">KWAME ASAMOAH</h1>
            <span>FULLSTACK DEVELOPER</span>
          </div>
        </div>
        <div className="sec-2">
          <div className="nav-links">
            <div className="nav-link">
              <span className="ft-20">PROJECTS</span>
              <hr className="wid-10 hr-left-align"></hr>
            </div>
            <div className="nav-link">
              <span className="ft-20">RESUME</span>
              <hr className="wid-10 hr-left-align"></hr>
            </div>
            <div className="nav-link">
              <span className="ft-20">ABOUT</span>
              <hr className="wid-10 hr-left-align"></hr>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
