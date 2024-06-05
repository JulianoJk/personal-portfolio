import React from "react";
import { Paper, Typography } from "@mui/material";
import { useStyles } from "./Home.styles";

const LandPage: React.FC = () => {
  const { classes } = useStyles();
  return (
    <Paper elevation={0} className={classes.landPageRoot}>
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
