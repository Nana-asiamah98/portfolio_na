import React, { Component, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./about-page.style.css";
import Button from "../../Components/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import DarkMenu from "../../Components/Modal/DarkMenu";

library.add(faBars, faXmark);

const AboutPage = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  return (
    <motion.div
      className="container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="left-section-about"></div>
      <div className="right-section-about">
        <div className="close-sec">
          <Button
            className="hamburger-icon"
            buttonTitle={<FontAwesomeIcon icon={"bars"} size="3x" />}
            actionDetail={() => {
              setIsMenuOpened(true);
            }}
          />
        </div>
        <div className="about-sec-1">
          <div className="section-title">
            <h1 className="name-title">ABOUT</h1>
            <div className="wid-250">
              <p className="ft-15 sp-10 ln-sp">
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content.
              </p>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence
        // Disable any initial animations on children that
        // are present when the component is first rendered
        initial={false}
        // Only render one component at a time.
        // The exiting component will finish its exit
        // animation before entering component is rendered
        exitBeforeEnter={true}
        // Fires when all exiting nodes have completed animating out
        onExitComplete={() => null}
      >
        {isMenuOpened && <DarkMenu setIsMenuOpened={setIsMenuOpened} />}
      </AnimatePresence>
    </motion.div>
  );
};

export default AboutPage;
