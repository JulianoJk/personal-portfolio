import React from "react";
import { Box, Container, Card, CardContent, Typography } from "@mui/material";
import { useStyles } from "./Home.styles";

const AboutMe: React.FC = () => {
  const { classes } = useStyles();
  return (
    <Box className={classes.aboutMeRoot}>
      <Container>
        <Card sx={{ textAlign: "center", padding: "2em" }}>
          <CardContent>
            <Typography variant="h4" gutterBottom>
              About Me
            </Typography>
            <Typography variant="body1">
              I'm Juliano Jika, a software developer with a passion for creating
              innovative solutions. I specialize in full-stack development and
              have experience in various technologies including React, Node.js,
              and Python. I enjoy learning new things and taking on challenging
              projects.
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default AboutMe;
