import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "../Modal/modal.style.css";
import Button from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NALogo from "../../Assets/images/logo.png";
import { Link } from "react-router-dom";
import NavigationLinks from "../Navigations/NavigationLinks";
/* 
export  function NavigationLinks() {
  return (
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
  );
} */

export default function DarkMenu({ setIsMenuOpened }) {
  return (
    <motion.div
      className="dark-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="modal-container">
        <div className="modal-section-1">
          <div>
            <Link to={"/"}>
              <img src={NALogo} alt={"logo"} width={"100"} />
            </Link>
          </div>
          <div>
            <Button
              className="close-icon"
              buttonTitle={<FontAwesomeIcon icon={"xmark"} size="5x" />}
              actionDetail={() => {
                setIsMenuOpened(false);
              }}
            />
          </div>
        </div>

        <div className="modal-section-2">
          <div>
            <NavigationLinks/>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
