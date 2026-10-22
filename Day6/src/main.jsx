
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import "./index.css";

import App from "./App";
import About from "./About";
import Approach from "./Approach";
import Projects from "./Projects";
import Skills from "./Skills";
import Experience from "./Experience";
import Achievements from "./Achievements";
import Certifications from "./Certifications";
import Contact from "./Contact";

createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/About" element={<About />} />
        <Route path="/Approach" element={<Approach />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Experience" element={<Experience />} />
        <Route path="/Achievements" element={<Achievements />} />
        <Route path="/Certifications" element={<Certifications />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);
