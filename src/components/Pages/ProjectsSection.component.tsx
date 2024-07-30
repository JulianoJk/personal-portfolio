import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import ProjectCard from "./ProjectCard.component";
import LogoImage from "../images/illustrations/Logo";
import Dutagmentutagment from "../images/dutagment.png";
import SpotifyClone from "../images/SpotifyClone.png";

const projectData = [
  {
    title: "Solo Learner",
    description: "A free educational platform for learning foreign languages",
    link: "https://github.com/JulianoJk/Solo-Learner",
    buttonText: "View on GitHub",
    imageUrl: <LogoImage height={"8em"} />,
  },
  {
    title: "Dutagment",
    description: "Simple TODO application",
    link: "https://github.com/JulianoJk/Todo-application",
    buttonText: "View on GitHub",
    imageUrl: Dutagmentutagment,
  },
  {
    title: "Spotify Clone",
    description: "A simple Spotify clone",
    link: "https://github.com/gprok-esc-courses/spotify_clone",
    buttonText: "View on GitHub",
    imageUrl: SpotifyClone,
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
        backgroundColor: "#273546",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container>
        <Typography
          variant="h4"
          component="h1"
          align="center"
          gutterBottom
          sx={{
            color: "#ffffff",
            fontWeight: "bold",
            marginBottom: "1em",
          }}
        >
          Projects
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {projectData.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <ProjectCard {...project} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ProjectsSection;
