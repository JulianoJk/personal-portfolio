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
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const trailData = [
    {
      open: showTrail,
      texts: ["Welcome to", "my page.", "I'm Juliano Jika"],
    },
    {
      open: !showTrail,
      texts: ["Full Stack Developer", "Code Explorer", "Tech Enthusiast"],
    },
  ];

  return (
    <Paper elevation={0} className={classes.landPageRoot}>
      <div>
        {trailData.map((trail, index) => (
          <Trail key={index} open={trail.open}>
            {trail.texts.map((text, idx) => (
              <span key={idx} className={classes.trailText}>
                {text}
              </span>
            ))}
          </Trail>
        ))}
      </div>
    </Paper>
  );
};

export default LandPage;
