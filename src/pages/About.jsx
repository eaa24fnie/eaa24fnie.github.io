import Header from "../components/Header.jsx";

export default function About() {
  return (
    <div>
      <Header />

      <main>
        <div>
          <div className="emne fritid">Test</div>
          <div className="emne uddannelse">Test</div>
        </div>
        <div className="hoved">
          <img className="hoved-mig" src="../../public/img/luk.svg" alt="" />
        </div>

        <div>
          <div className="emne erfaring">Test</div>
          <div className="emne funfact">Test</div>
        </div>
      </main>
    </div>
  );
}
