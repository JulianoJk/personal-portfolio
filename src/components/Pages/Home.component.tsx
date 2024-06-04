import React from "react";
import { Box } from "@mui/material";

import AboutMe from "./AboutMe.component";
import ProjectsSection from "./ProjectsSection.component";
import LandPage from "./LandPage.component";

const Home: React.FC = () => {
  return (
    <Box sx={{ overflowX: "hidden" }}>
      {/* Hero Section */}
      <LandPage />

      {/* About Me Section */}
      <AboutMe />

      {/* Projects Section */}
      <ProjectsSection />
    </Box>
  );
};

export default Home;
