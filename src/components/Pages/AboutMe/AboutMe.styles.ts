import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()(() => ({
  aboutMeRoot: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "2em",
    boxSizing: "border-box",
    backgroundColor: "#111b2adb",
    backgroundSize: "cover",
    backgroundPosition: "center",
    overflowX: "hidden",
    "@media (max-width: 600px)": {
      padding: "1em",
    },
  },
}));
