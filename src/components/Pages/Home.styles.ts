import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()(() => ({
  landPageRoot: {
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
    overflowY: "auto",
    "@media (max-width: 600px)": {
      padding: "0.5em",
    },
  },
  aboutMeRoot: {
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
    "@media (max-width: 600px)": {
      padding: "1em",
    },
  },
  trailText: {
    fontSize: "1em",
    color: "#ffffff",
    display: "block",
    "@media (max-width: 600px)": {
      fontSize: "0.7em",
      lineHeight: "1em",
    },
  },
}));
