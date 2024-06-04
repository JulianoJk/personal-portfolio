import React from "react";
import { Paper, Typography } from "@mui/material";

const LandPage: React.FC = () => {
  return (
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
        backgroundImage: "url('hero-bg.jpg')",
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
  );
};

export default LandPage;
