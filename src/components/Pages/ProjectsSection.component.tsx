import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import ProjectCard from "./ProjectCard.component";
import LogoImage from "../images/illustrations/Logo";
import Dutagmentutagment from "../images/dutagment.png";
import SpotifyClone from "../images/SpotifyClone.png";
import { useAppState } from "../../context/AppContext";

const ProjectsSection: React.FC = () => {
  const { lang } = useAppState();
  const projectData = [
    {
      title: "Solo Learner",
      description:
        lang === "EN"
          ? "A free educational platform for learning foreign languages"
          : "Eine kostenlose Bildungsplattform zum Erlernen von Fremdsprachen",
      link: "https://github.com/JulianoJk/Solo-Learner",
      buttonText: lang === "EN" ? "View on GitHub" : "Auf GitHub ansehen",
      imageUrl: <LogoImage height={"8em"} />,
    },
    {
      title: "Dutagment",
      description:
        lang === "EN" ? "Simple TODO application" : "Einfache TODO-Anwendung",
      link: "https://github.com/JulianoJk/Todo-application",
      buttonText: lang === "EN" ? "View on GitHub" : "Auf GitHub ansehen",
      imageUrl: Dutagmentutagment,
    },
    {
      title: "Spotify Clone",
      description:
        lang === "EN" ? "A simple Spotify clone" : "Ein einfacher Spotify-Klon",
      link: "https://github.com/gprok-esc-courses/spotify_clone",
      buttonText: lang === "EN" ? "View on GitHub" : "Auf GitHub ansehen",
      imageUrl: SpotifyClone,
    },
  ];

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
          {lang === "EN" ? "Projects" : "Projekte"}
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
