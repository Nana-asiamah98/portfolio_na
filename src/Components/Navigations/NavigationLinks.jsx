import React from "react";
import { Link } from "react-router-dom";

export default function NavigationLinks() {
  return (
    <div className="nav-links">
      <Link to={"/projects"}>
        <div className="nav-link">
          <span className="ft-15">PROJECTS</span>
          <hr className="wid-50 hr-left-align"></hr>
        </div>
      </Link>
      <Link
        to={"#0"}
        onClick={() => {
          window.open(
            "https://drive.google.com/file/d/1MwIffAxUhJ1Koz-bxMX9Yn-ammkdVP81/view?usp=sharing"
          );
        }}
        target="_blank"
      >
        <div className="nav-link">
          <span className="ft-15">RESUME</span>
          <hr className="wid-50 hr-left-align"></hr>
        </div>
      </Link>
      <Link to={"/about"}>
        <div className="nav-link">
          <span className="ft-15">ABOUT</span>
          <hr className="wid-50 hr-left-align"></hr>
        </div>
      </Link>
    </div>
  );
}
