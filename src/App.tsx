import React from "react";
import Header from "./components/Header/Header.component";
import Home from "./components/Pages/Home.component";
import { ThemeProvider, createTheme } from "@mui/material/styles";

export interface ColorMap {
  [colorName: string]: string;
}

export interface Palette {
  [colorName: string]: ColorMap;
}

const ThemePalette: Palette = {
  Mono: {
    Grey1: "#F7FAFF",
    Grey2: "#DFE7F5",
    Grey3: "#CED9EB",
    Grey4: "#ABB8CF",
    Grey5: "#7989A6",
    Grey6: "#526482",
    Navy: "#191530",
    White: "#FFFFFF",
  },
  Red: {
    Red1: "#F8DDDF",
    Red2: "#F2BABF",
    Red3: "#EC989F",
    Red4: "#E6757E",
    Red5: "#DF535E",
  },
  Cyan: {
    Cyan1: "#DEF4F7",
    Cyan2: "#BCEAF0",
    Cyan3: "#9BE0E9",
    Cyan4: "#79D5E2",
    Cyan5: "#58CBDA",
  },
  Pink: {
    Dark: "#A40F58",
    Medium: "#DE1B76",
    Light: "#F690C4",
    BG: "#FFCAEA",
  },
  Blue: {
    Medium: "#007CB6",
    Dark: "#003C71",
    Light: "#7BCCF1",
    BG: "#B9E1F9",
  },
  Violet: {
    Medium: "#5461C8",
    Dark: "#333688",
    Light: "#9BA0E2",
    BG: "#BFBFEF",
  },
  Teal: {
    Medium: "#008291",
    Dark: "#154B5B",
    Light: "#78D5E1",
    BG: "#B9E9ED",
  },
  Orange: {
    Medium: "#DA3441",
    Dark: "#892937",
    Light: "#F99C90",
    BG: "#F9D2C4",
  },
  Purple: {
    Medium: "#963CBD",
    Dark: "#512179",
    Light: "#C693DC",
    BG: "#DEBEEB",
  },
  Green: {
    Medium: "#008851",
    Dark: "#1B4F3C",
    Light: "#76DEAB",
    BG: "#D3EFD4",
  },
  Yellow: {
    Medium: "#F6C26D",
    Dark: "#976D19",
  },
};
const theme = createTheme({
  palette: ThemePalette,
});
const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Header />
        <div style={{ maxWidth: "100%", overflowX: "hidden" }}>
          <Home />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
