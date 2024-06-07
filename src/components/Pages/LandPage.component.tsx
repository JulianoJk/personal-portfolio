import React, { useState, useCallback, useRef, useEffect } from "react";
import { Paper, Typography } from "@mui/material";
import { useStyles } from "./Home.styles";
import { useTransition, animated } from "@react-spring/web";
import Trail from "./Trail.component";

const LandPage: React.FC = () => {
  const { classes } = useStyles();
  const ref = useRef<ReturnType<typeof setTimeout>[]>([]);
  const [items, set] = useState<string[]>([]);
  const [showTrail, setShowTrail] = useState(true);
  const [trailAnimationFinished, setTrailAnimationFinished] = useState(false);
  const transitions = useTransition(items, {
    from: { opacity: 0, transform: "translateY(50%)", height: 0 },
    enter: { opacity: 1, transform: "translateY(0%)", height: 80 },
    leave: { opacity: 0, transform: "translateY(-50%)", height: 0 },
    config: { tension: 250, friction: 30 },
    trail: 200, // Delay between each transition
  });

  const reset = useCallback(() => {
    ref.current.forEach(clearTimeout);
    ref.current = [];
    set([]);
    setShowTrail(true);
    setTrailAnimationFinished(false);

    ref.current.push(setTimeout(() => setShowTrail(false), 3000)); // Hide trail after 3 seconds
    ref.current.push(setTimeout(() => setTrailAnimationFinished(true), 5000)); // Set trail animation finished after 5 seconds

    ref.current.push(
      setTimeout(
        () => set(["Full Stack Developer", "Creating Engaging Experiences"]),
        3500
      )
    );
    ref.current.push(setTimeout(() => set([]), 6500)); // Remove both after 3 seconds
    ref.current.push(
      setTimeout(
        () =>
          set(["Expert in Web Technologies", "Delivering Quality Solutions"]),
        7000
      )
    );
    ref.current.push(setTimeout(() => set([]), 10000)); // Remove both after 3 seconds
  }, []);

  useEffect(() => {
    reset();
    const interval = setInterval(() => {
      reset();
    }, 11000); // Loop the text animation every 11 seconds
    return () => {
      ref.current.forEach(clearTimeout);
      clearInterval(interval);
    };
  }, [reset]);

  return (
    <Paper elevation={0} className={classes.landPageRoot}>
      <div>
        <Trail open={showTrail}>
          <span>Hello</span>
          <span>I'm Juliano</span>
          <span>Jika</span>
        </Trail>

        {/* transitions((style, item) => (
            <animated.div style={style}>
              <Typography
                variant="h1"
                gutterBottom
                className="animate__animated animate__bounce"
                sx={{
                  color: "#FFFFFF",
                  fontSize: { xs: "2.5rem", md: "3.5rem" },
                  textAlign: "center",
                }}
              >
                {item}
              </Typography>
            </animated.div>
          )) */}
        {!showTrail &&
          trailAnimationFinished &&
          transitions((style, item) => (
            <animated.div style={style}>
              <Typography
                variant="h1"
                gutterBottom
                className="animate__animated animate__bounce"
                sx={{
                  color: "#FFFFFF",
                  fontSize: { xs: "2.5rem", md: "3.5rem" },
                  textAlign: "center",
                }}
              >
                {item}
              </Typography>
            </animated.div>
          ))}
      </div>
    </Paper>
  );
};

export default LandPage;
