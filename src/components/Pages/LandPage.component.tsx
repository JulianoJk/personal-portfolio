import React, { useState, useEffect } from "react";
import { Paper } from "@mui/material";
import { useStyles } from "./Home.styles";
import Trail from "./Trail.component";

const LandPage: React.FC = () => {
  const { classes } = useStyles();
  const [showTrail, setShowTrail] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      setShowTrail((prevOpen) => !prevOpen);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <Paper elevation={0} className={classes.landPageRoot}>
      <div>
        <Trail open={showTrail}>
          <span>Hello!</span>
          <span>I'm Juliano Jika</span>
        </Trail>
        <Trail open={!showTrail}>
          <span>Full Stack Developer</span>
          <span>Building Joyful</span>
          <span>Digital Experiences</span>
        </Trail>
      </div>
    </Paper>
  );
};

export default LandPage;
