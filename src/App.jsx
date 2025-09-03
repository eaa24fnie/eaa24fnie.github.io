import "./App.css";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";

import Home from "./pages/Home";
import Project from "./pages/Project";
import About from "./pages/About";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </>
  );
}
