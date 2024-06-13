import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()(() => ({
  skills: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    minHeight: "60vh",
    padding: "2.5rem 2rem 2rem 2rem",
  },
  skillsHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& h2": {
      fontFamily: "var(--primaryFont)",
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: "3.5rem",
      textAlign: "center",
    },
  },
  skillsContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginTop: "3.5rem",
    padding: "0 2rem",
  },
  skillScroll: {
    width: "100%",
    margin: "0 2rem",
  },
  skillBox: {
    background: "#FAFAFA",
    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.12)",
    borderRadius: "10px",
    width: "160px",
    height: "160px",
    margin: "1.5rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem 1rem",
    transition: "300ms ease-in-out",
    "&:hover": {
      transform: "scale(1.15)",
    },
    "& > img": {
      height: "50px",
      pointerEvents: "none",
    },
    "& h3": {
      fontFamily: "Big Shoulders Text",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "22px",
      textAlign: "center",
      marginTop: "1rem",
    },
  },
  marquee: {
    padding: "3rem 0",
  },
  "@media (min-width: 992px) and (max-width: 1380px)": {
    skills: {
      padding: "2rem 1rem 1rem 1rem",
    },
    skillsContainer: {
      padding: "1.5rem",
      marginTop: "1.5rem",
    },
  },
  "@media screen and (max-width: 992px)": {
    skills: {
      padding: "1rem",
      minHeight: "100%",
    },
    skillsContainer: {
      padding: "1rem",
      margin: "1rem 0",
    },
    skillsHeader: {
      "& h2": {
        fontSize: "3.2rem",
      },
    },
    skillBox: {
      width: "150px",
      height: "150px",
      margin: "1.2rem",
      padding: "2rem 1rem",
      "& > img": {
        height: "45px",
      },
      "& h3": {
        fontSize: "20px",
        marginTop: "1rem",
      },
    },
  },
  "@media screen and (max-width: 800px)": {
    skills: {
      padding: "0.5rem",
    },
    skillsContainer: {
      padding: "0.5rem",
    },
    skillsHeader: {
      "& h2": {
        fontSize: "3rem",
      },
    },
    skillScroll: {
      width: "100%",
      margin: "0",
    },
  },
  "@media screen and (max-width: 600px)": {
    skillBox: {
      width: "135px",
      height: "135px",
      margin: "1.2rem",
      padding: "2rem 1rem",
      "& > img": {
        height: "40px",
      },
    },
    skillsHeader: {
      "& h2": {
        fontSize: "2.5rem",
      },
    },
  },
  "@media screen and (max-width: 400px)": {},
  "@media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-device-pixel-ratio: 2) and (device-aspect-ratio: 2/3)":
    {},
  "@media only screen and (device-width: 768px)": {},
}));
