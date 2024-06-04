import React from "react";
import {
  Box,
  Paper,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Container,
  Divider,
  CardMedia,
} from "@mui/material";
import LogoImage from "../images/Logo";

const projectData = [
  {
    title: "Solo Learner",
    description: "A platform to learn solo",
    link: "https://github.com/JulianoJk/Solo-Learner",
    buttonText: "View Project",
    imageUrl: "https://via.placeholder.com/300",
  },
  {
    title: "Project TODO LIST",
    description: "Keep track of your tasks",
    link: "https://github.com/JulianoJk/Solo-Learner",
    buttonText: "View on GitHub",
    imageUrl: <LogoImage height={"8em"} />,
  },
  {
    title: "Another one will go with that",
    description: "An innovative solution",
    link: "https://github.com/JulianoJk/Another-One",
    buttonText: "Explore",
    imageUrl: "https://via.placeholder.com/300",
  },
  {
    title: "Word of the Day",
    description: "Learn a new word daily",
    link: "https://github.com/JulianoJk/Word-Of-The-Day",
    buttonText: "Learn More",
    imageUrl: (
      <img src="https://via.placeholder.com/300" alt="Word of the Day" />
    ),
  },
];

const ProjectCard: React.FC<{
  title: string;
  description: string;
  link: string;
  buttonText: string;
  imageUrl: string | React.ReactNode;
}> = ({ title, description, link, buttonText, imageUrl }) => (
  <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
    {typeof imageUrl === "string" ? (
      <CardMedia component="img" height="140" image={imageUrl} alt={title} />
    ) : (
      <Box
        sx={{
          height: 140,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {imageUrl}
      </Box>
    )}
    <CardContent sx={{ flexGrow: 1 }}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Divider />
      <Typography
        variant="body2"
        color="textSecondary"
        sx={{ marginTop: "1em" }}
      >
        {description}
      </Typography>
    </CardContent>
    <CardActions>
      <Button
        size="small"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {buttonText}
      </Button>
    </CardActions>
  </Card>
);

const Home: React.FC = () => {
  return (
    <Box sx={{ overflowX: "hidden" }}>
      {/* Hero Section */}
      <Paper
        elevation={0}
        sx={{
          backgroundColor: "#1F2937",
          height: "100vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "1em",
          boxSizing: "border-box",
          backgroundImage: "url('hero-bg.jpg')", // Example background image
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Typography
          variant="h1"
          gutterBottom
          sx={{
            color: "#FFFFFF",
            fontSize: { xs: "2.5rem", md: "3.5rem" },
            textAlign: "center",
          }}
        >
          Hello, I'm Juliano Jika
        </Typography>
      </Paper>

      {/* About Me Section */}
      <Box
        sx={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "2em",
          boxSizing: "border-box",
          backgroundSize: "cover",
          backgroundPosition: "center",
          overflowX: "hidden",
        }}
      >
        <Container>
          <Card sx={{ textAlign: "center", padding: "2em" }}>
            <CardContent>
              <Typography variant="h4" gutterBottom>
                About Me
              </Typography>
              <Typography variant="body1">
                  I'm Juliano Jika, a software developer with a passion for creating
                  innovative solutions. I specialize in full-stack development and
                  have experience in various technologies including React,
                  Node.js, and Python. I enjoy learning new things and taking on
                  challenging projects.
              </Typography>
            </CardContent>
          </Card>
        </Container>
      </Box>

      {/* Projects Section */}
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
    </Box>
  );
};

export default Home;
