import React from "react";
import Header from "./components/Header/Header.component";
import Home from "./components/Pages/Home.component";

const App: React.FC = () => {
  return (
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
  );
};

export default App;
