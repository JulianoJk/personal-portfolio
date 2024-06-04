import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import ProjectCard from "./ProjectCard.component";
import LogoImage from "../images/Logo";
import Dutagmentutagment from "../images/dutagment.png";
import SpotifyClone from "../images/SpotifyClone.png";
const projectData = [
  {
    title: "Solo Learner",
    description: "A platform to learn solo",
    link: "https://github.com/JulianoJk/Solo-Learner",
    buttonText: "View Project",
    imageUrl: <LogoImage height={"8em"} />,
  },
  {
    title: "Dutagment",
    description: "Simple TODO application",
    link: "",
    buttonText: "View on GitHub",
    imageUrl: Dutagmentutagment,
  },
  {
    title: "Spotify Clone",
    description: "A simple spotify clone",
    link: "",
    buttonText: "Explore",
    imageUrl: SpotifyClone,
  },
  {
    title: "Word of the Day",
    description: "Learn a new word daily",
    link: "https://github.com/JulianoJk/Word-Of-The-Day",
    buttonText: "Learn More",
    imageUrl: "https://via.placeholder.com/300",
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100vw",
        padding: "4em 2em",
        boxSizing: "border-box",
        overflowX: "hidden",
      }}
    >
      <Container>
        <Typography variant="h4" gutterBottom align="center">
          Projects
        </Typography>
        <Grid container spacing={4}>
          {projectData.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <ProjectCard {...project} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ProjectsSection;
