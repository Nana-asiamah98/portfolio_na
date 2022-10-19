import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import Button from "../../Components/Button/Button";
import Card from "../../Components/Card/Card";
import DarkMenu from "../../Components/Modal/DarkMenu";
import PageTitle from "../../Utils/PageTitle";
import "../Projects/project-page.style.css";
import Carousel from "framer-motion-carousel";
import { useEffect } from "react";
import { contentfulClient } from "../../Utils/ContentfulClient";

const ProjectsPage = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [projects, setProjects] = useState([]);

  const ApiHandler = async () => {
    const { projectsCollection } = await contentfulClient(null);
    const { items } = projectsCollection;
    let mainArr = [];
    let arr = [];
    for (let i = 0; i < items.length; i++) {
      if ((i + 1) % 3 === 0) {
        arr.push(items[i]);
        mainArr.push([...arr]);
        arr.length = 0;
      } else {
        arr.push(items[i]);
      }
    }
    mainArr.push([...arr]);
    console.log(mainArr);

    setProjects([...mainArr]);
  };

  useEffect(() => {
    ApiHandler();
  }, []);

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
            <Carousel loop={false} autoPlay={false} renderDots={() => null}>
              {projects &&
                projects.map((val, ind) => (
                  <div key={ind} className="carousel-section">
                    {val.map((newVal, newInd) => (
                      <Card
                        key={newInd}
                        img={newVal.projectImages}
                        description={newVal.description}
                        title={newVal.projectName}
                      />
                    ))}
                  </div>
                ))}
              <div className="carousel-section">
                <Card />
                <Card />
                <Card />
              </div>
              <div className="carousel-section">
                <Card />
                <Card />
              </div>
            </Carousel>
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
