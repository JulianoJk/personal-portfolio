import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()(() => ({
  divider: {
    background:
      "linear-gradient(to right, #0C869E 0%, #3C4E87 67%, #7342A4 100%)",
    height: "0.6em",
    borderRadius: "0.3em",
  },
}));
