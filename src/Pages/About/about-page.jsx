import React, { Component } from "react";
import { motion } from "framer-motion";
import "./about-page.style.css";

const AboutPage = () => {
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
        
        </div>
        <div className="sec-1">
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
    </motion.div>
  );
};

export default AboutPage;
