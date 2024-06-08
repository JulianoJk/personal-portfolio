// Trail.component.tsx
import React from "react";
import { useTrail, a } from "@react-spring/web";
import { useStyles } from "./Trail.styles";
import useMediaQuery from "@mui/material/useMediaQuery";

interface TrailProps {
  open: boolean;
  children: React.ReactNode;
}

const Trail: React.FC<TrailProps> = ({ open, children }) => {
  const items = React.Children.toArray(children);
  const { classes } = useStyles();
  const isMobile = useMediaQuery("(max-width:600px)");

  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 60,
    height: open ? 110 : 0,
    from: { opacity: 0, x: 60, height: 10 },
  });

  return (
    <div>
      {trail.map(({ height, ...style }, index) => (
        <a.div
          key={index}
          className={classes.trailsText}
          style={{ ...style, fontSize: isMobile ? "3em" : "4.5em" }}
        >
          <a.div style={{ height }}>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  );
};

export default Trail;
