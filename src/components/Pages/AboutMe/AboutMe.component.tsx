import React from "react";
import {
  Box,
  Container,
  Card,
  CardContent,
  Typography,
  Divider,
} from "@mui/material";
import { useStyles } from "./AboutMe.styles";
import { IconCode, IconTools, IconSchool, IconUser } from "@tabler/icons-react";

const AboutMe: React.FC = () => {
  const { classes } = useStyles();
  return (
    <Box className={classes.aboutMeRoot}>
      <Container>
        <Card
          sx={{
            textAlign: "center",
            padding: "2em",
            transition: "transform 0.3s, box-shadow 0.3s",
            backgroundColor: "#1e2a38",
            color: "#ffffff",
            borderRadius: "15px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            "&:hover": {
              transform: "scale(1.05)",
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
            },
          }}
        >
          <CardContent>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
              About Me
            </Typography>
            <Divider sx={{ margin: "1em 0", backgroundColor: "#ffffff" }} />
            <Typography
              variant="body1"
              paragraph
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                lineHeight: { xs: 1.2, sm: 1.4, md: 1.6 },
              }}
            >
              <IconUser
                size={24}
                color="#ffffff"
                style={{ marginRight: "0.5em", flexShrink: 0 }}
              />
              I am a 24-year-old junior front-end engineer with over two years
              of experience specializing in React and TypeScript.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                lineHeight: { xs: 1.2, sm: 1.4, md: 1.6 },
              }}
            >
              <IconCode
                size={24}
                color="#ffffff"
                style={{ marginRight: "0.5em", flexShrink: 0 }}
              />
              Web development and programming are my passions, fueling my drive
              to continuously learn and enhance my skills.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                lineHeight: { xs: 1.2, sm: 1.4, md: 1.6 },
              }}
            >
              <IconTools
                size={24}
                color="#ffffff"
                style={{ marginRight: "0.5em", flexShrink: 0 }}
              />
              I thrive on challenges and enjoy collaborating with others to
              create innovative solutions.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                lineHeight: { xs: 1.2, sm: 1.4, md: 1.6 },
              }}
            >
              <IconSchool
                size={24}
                color="#ffffff"
                style={{ marginRight: "0.5em", flexShrink: 0 }}
              />
              I hold a BSc in Computer Science from Empire State College SUNY,
              USA, and New York College in Greece.
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default AboutMe;
