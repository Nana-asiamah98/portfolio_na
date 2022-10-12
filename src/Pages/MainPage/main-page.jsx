import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import NaSticker from "../../Assets/images/na-memoji-sticker.png";
import PageTitle from "../../Utils/PageTitle";
import "./main-page.style.css";

const MainPage = () => {
  return (
    <motion.div
      className="container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <PageTitle title={"Nana Asiamah's Portfolio"} />

      {/* LEFT-SECTION */}
      <div className="left-section">
        <div className="avatar-section">
          <img src={NaSticker} alt="logo" className="image-section" />
        </div>
      </div>
      {/*  END LEFT-SECTION */}

      <div className="right-section">
        <div className="sec-1">
          <div className="section-title">
            <h1 className="name-title">NANA ASIAMAH</h1>
            <span>SOFTWARE ENGINEER</span>
          </div>
        </div>
        <div className="sec-2">
          <div className="nav-links">
            <Link to={"/projects"}>
              <div className="nav-link">
                <span className="ft-15">WORK</span>
                <hr className="wid-50 hr-left-align"></hr>
              </div>
            </Link>
            <Link
              to={"#0"}
              onClick={() => {
                window.open(
                  "https://drive.google.com/file/d/16XtupdgJL-kFsS7DeCAXgx2WEHqM2VvL/view?usp=sharing"
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
        </div>
      </div>
    </motion.div>
  );
};

export default MainPage;
