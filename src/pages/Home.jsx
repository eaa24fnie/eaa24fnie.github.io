import Header from "../components/Header.jsx";
import Bobler from "../components/Bobler.jsx";
import ProjectDetails from "./ProjectDetails.jsx";
import Carousel from "../components/Carousel.jsx";
import Footer from "../components/Footer.jsx";

export default function Home() {
  return (
    <div className="home">
      <Header />
      <div className="intro-text">
        <h2>Hola!</h2>
        <h1>Jeg er Frederik</h1>
        <h3>MEDIEGRAFIKER OG MULTIMEDIEDESIGNER FRA AARHUS</h3>
        <a className="pil" href="#portfolio">
          <img src="/img/arrow.svg" alt="pil" />
        </a>
      </div>
      <Bobler />
      <ProjectDetails />
      <Carousel />
      <Footer />
    </div>
  );
}
