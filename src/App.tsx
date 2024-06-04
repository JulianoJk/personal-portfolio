import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.component";
import Home from "./components/Pages/Home.component";
import ProjectsSection from "./components/Pages/ProjectsSection.component";

const App: React.FC = () => {
  return (
    <Router>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Header />
        <div style={{ maxWidth: "100%", overflowX: "hidden" }}>
          {/* Adjust the maxWidth to your preference */}
          <Routes>
            <Route path="/personal-portfolio/" element={<Home />} />
            <Route path="/projects" element={<ProjectsSection />} />
            <Route path="/*" element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
