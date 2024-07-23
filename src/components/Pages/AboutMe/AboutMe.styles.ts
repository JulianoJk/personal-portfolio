import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()(() => ({
  wrapper: {
    paddingTop: "80px",
    paddingBottom: "50px",
    textAlign: "center",
    color: "#ffffff",
  },
  item: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    borderRadius: "8px",
    backgroundColor: "#324a5f",
    transition: "background-color 0.3s",
    "&:hover": {
      backgroundColor: "#3b5a73",
    },
    // Set initial animation state
    opacity: 0,
    transform: "translateY(100%)",
  },
  placeholder: {
    width: "100%",

    height: "150px", // Match the minHeight of the item

    backgroundColor: "#324a5f",

    borderRadius: "8px",
  },
  animateFromBelow: {
    animation: "$fromBelow 1s ease-out forwards",
  },
  "@keyframes fromBelow": {
    "0%": {
      opacity: 0,
      transform: "translateY(100%)",
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
  itemIcon: {
    padding: "10px",
    marginRight: "20px",
  },
  itemTitle: {
    marginBottom: "10px",
    fontWeight: 700,
    color: "#ffffff",
  },
  itemDescription: {
    color: "#b0c4de",
  },
  supTitle: {
    textTransform: "uppercase",
    fontWeight: 800,
    fontSize: "1rem",
    color: "#95A1F9",
    letterSpacing: "0.5px",
    marginBottom: "20px",
  },
  title: {
    lineHeight: 1.2,
    marginTop: "20px",
    color: "#ffffff",
  },
  description: {
    textAlign: "center",
    marginTop: "20px",
    marginBottom: "40px",
    color: "#b0c4de",
  },
  highlight: {
    backgroundColor: "#95A1F9",
    padding: "5px",
    borderRadius: "4px",
    display: "inline-block",
    color: "#253142",
  },
}));
