import { useRef, useState, useEffect } from "react";
import Header from "../components/Header.jsx";
import Bobler from "../components/Bobler.jsx";
import ProjectDetails from "./ProjectDetails.jsx";
import Carousel from "../components/Carousel.jsx";
import Footer from "../components/Footer.jsx";

export default function Home() {
  const gitterRef = useRef(null);
  const [gitterTransform, setGitterTransform] = useState({
    transform: "translate(0px, 0px)",
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!gitterRef.current) return;

      const gitter = gitterRef.current.getBoundingClientRect();
      const centerX = gitter.left + gitter.width / 2;
      const centerY = gitter.top + gitter.height / 2;

      const dx = Math.max(-50, Math.min(50, (e.clientX - centerX) * 0.05));
      const dy = Math.max(-50, Math.min(50, (e.clientY - centerY) * 0.05));

      setGitterTransform({ transform: `translate(${dx}px, ${dy}px)` });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="home">
      <Header />
      <div className="intro-text">
        <h2>Hola!</h2>
        <h1>Jeg er Frederik</h1>
        <h3>MEDIEGRAFIKER OG MULTIMEDIEDESIGNER FRA AARHUS</h3>
        <img
          ref={gitterRef}
          style={gitterTransform}
          className="gitter"
          src="/img/gitter.svg"
          alt=""
        />
      </div>
      <Bobler />
      <ProjectDetails />
      <Carousel />
      <Footer />
    </div>
  );
}
