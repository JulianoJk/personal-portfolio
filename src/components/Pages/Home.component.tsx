// src/components/Pages/Home.component.tsx

import React from "react";
import { Box } from "@mui/material";
import AboutMe from "./AboutMe.component";
import ProjectsSection from "./ProjectsSection.component";
import TestIDs from "../TestID";
import LandPage from "./LandPage.component";
// import Skills from "./Skills.component";

const Home: React.FC = () => {
  return (
    <Box sx={{ overflowX: "hidden" }}>
      {/* Hero Section */}
      <Box id={TestIDs.home}>
        <LandPage />
      </Box>
      {/* About Me Section */}
      <Box id={TestIDs.about}>
        <AboutMe />
      </Box>{" "}
      {/* About Me Section */}
      {/* <Box id={TestIDs.skills}>
        <Skills />
      </Box> */}
      {/* Projects Section */}
      <Box id={TestIDs.projects}>
        <ProjectsSection />
      </Box>
    </Box>
  );
};

export default Home;
