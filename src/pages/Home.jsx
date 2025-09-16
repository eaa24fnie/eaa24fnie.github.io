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
        <h2>Velkommen!</h2>
        <h1>Jeg er Frederik</h1>
        <h3>MEDIEGRAFIKER OG MULTIMEDIEDESIGNER FRA AARHUS</h3>
        <img className="gitter" src="/img/gitter.svg" alt="" />
      </div>
      <Bobler />
      <ProjectDetails />
      <Carousel />
      <Footer />
    </div>
  );
}
