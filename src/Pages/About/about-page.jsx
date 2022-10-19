import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import Button from "../../Components/Button/Button";
import DarkMenu from "../../Components/Modal/DarkMenu";
import { contentfulClient } from "../../Utils/ContentfulClient";
import PageTitle from "../../Utils/PageTitle";
import "./about-page.style.css";

library.add(faBars, faXmark);

const AboutPage = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [about, setAbout] = useState({});
  const ApiHandler = async () => {
    const query = `query{
      aboutCollection{
        items{
        description
          image{
            url,
            title
          }
        }
      }
    }`;
    const { aboutCollection } = await contentfulClient(query);
    const { items } = aboutCollection;
    items.map((val) => {
      setAbout(val);
      return true;
    });
  };

  useEffect(() => {
    ApiHandler();
  }, []);

  return (
    <motion.div
      className="container-about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <PageTitle title={"About Me"} />
      <div
        className="left-section-about"
        style={{
          backgroundImage:
            about.image != null ? `url(${about.image.url})` : "Nothing",
        }}
      ></div>
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
            <h1 className="name-title">ABOUT ME</h1>
            <div className="wid-250">
              <p className="ft-15 sp-10 ln-sp">{about.description}</p>
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
