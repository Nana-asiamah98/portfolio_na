import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import PageTitle from "../../Utils/PageTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../../Components/Button/Button";
import DarkMenu from "../../Components/Modal/DarkMenu";
import "../Projects/project-page.style.css";

const ProjectsPage = ({}) => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <PageTitle title={"Nana Asiamah's Projects"} />
      <div className="prj-container">
        <div className="prj-nav">
          <div className="prj-nav-sec1">
            <div className="nav-lt">
              <span>works</span>
            </div>
          </div>
          <div className="prj-nav-sec2">
            <div className="nav-rt">
              <div className="close-sec">
                <Button
                  className="hamburger-icon"
                  buttonTitle={<FontAwesomeIcon icon={"bars"} size="3x" />}
                  actionDetail={() => {
                    setIsMenuOpened(true);
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <section className="main-section">
            <div className="mt-5">
                <div className="card-section">
                    <span>Hello World</span>
                </div>
            </div>
        </section>
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

export default ProjectsPage;
