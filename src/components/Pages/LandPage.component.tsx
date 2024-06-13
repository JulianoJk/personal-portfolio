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
      texts: ["Hello!", "I'm Juliano Jika"],
    },
    {
      open: !showTrail,
      texts: ["Full Stack Developer", "Building Joyful", "Digital Experiences"],
    },
  ];

  return (
    <Paper elevation={0} className={classes.landPageRoot}>
      <div>
        {trailData.map((trail, index) => (
          <Trail key={index} open={trail.open}>
            {trail.texts.map((text, idx) => (
              <span key={idx}>{text}</span>
            ))}
          </Trail>
        ))}
      </div>
    </Paper>
  );
};

export default LandPage;
