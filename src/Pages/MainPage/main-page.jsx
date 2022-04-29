import React from "react";
import { Link } from "react-router-dom";
import "./main-page.style.css";
import { motion } from "framer-motion";

const MainPage = () => {
  return (
    <motion.div  className="container" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
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
            <Link to={"/projects"}>
              <div className="nav-link">
                <span className="ft-15">PROJECTS</span>
                <hr className="wid-50 hr-left-align"></hr>
              </div>
            </Link>
            <div className="nav-link">
              <span className="ft-15">RESUME</span>
              <hr className="wid-50 hr-left-align"></hr>
            </div>
            <Link to={"/about"}>
              <div className="nav-link">
                <span className="ft-15">ABOUT</span>
                <hr className="wid-50 hr-left-align"></hr>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MainPage;
