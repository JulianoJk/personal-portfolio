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
  },
  trailsText: {
    position: "relative",
    width: "100%",
    height: "80px",
    lineHeight: "80px",
    color: "black",
    fontSize: "6em",
    fontWeight: 800,
    letterSpacing: "-0.05em",
    willChange: "transform, opacity",
    overflow: "hidden",
    "& > div": {
      paddingRight: "0.05em",
      overflow: "hidden",
    },
  },
  container: {
    display: "flex",
    alignItems: "center",
    height: "100vh", // Ensure this is full height
    justifyContent: "center",
  },
}));
