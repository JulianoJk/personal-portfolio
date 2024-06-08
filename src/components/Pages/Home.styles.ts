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
}));
