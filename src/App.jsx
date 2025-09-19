import "./index.css";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import ProjectDetail from "./pages/ProjectDetails";

export default function App() {
  return (
    <>
      <svg style={{ display: "none" }}>
        <filter id="noiseDistort">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.7"
            numOctaves="2"
            seed="2"
          >
            {/* Animate baseFrequency to simulate moving noise */}
            <animate
              attributeName="baseFrequency"
              values="0.65;0.75;0.7;0.72;0.68;0.7"
              dur="5s"
              repeatCount="indefinite"
            />
          </feTurbulence>
          <feDisplacementMap in="SourceGraphic" scale="20">
            {/* Slightly animate scale to add extra jitter */}
            <animate
              attributeName="scale"
              values="18;22;20;21;19;20"
              dur="5s"
              repeatCount="indefinite"
            />
          </feDisplacementMap>
        </filter>
      </svg>

      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
        </Routes>
      </main>
    </>
  );
}
