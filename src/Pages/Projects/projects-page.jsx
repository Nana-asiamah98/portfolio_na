import React from 'react';
import { motion } from 'framer-motion';
import PageTitle from '../../Utils/PageTitle';


const ProjectsPage = () => {
    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
            <PageTitle title={"Nana Asiamah's Projects"} />
            <span>Projects Page</span>
        </motion.div>
    );
}


export default ProjectsPage;