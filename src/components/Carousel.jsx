import { useState, useEffect } from "react";

export default function Carousel() {
  const [clients, setClients] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    async function getData() {
      const response = await fetch("/poster.json"); // served from /public
      const data = await response.json();
      setClients(data);
    }
    getData();
  }, []);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % clients.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + clients.length) % clients.length);
  };

  if (clients.length === 0) return <p>Loading...</p>;

  // Get 3 posters starting at current index
  const visibleClients = clients
    .slice(index, index + 3)
    .concat(clients.slice(0, Math.max(0, index + 3 - clients.length)));

  return (
    <div>
      <div className="projekt-beskrivelse carousel-intro">
        <div className="kategori">
          <p>PERSONLIG</p>
        </div>
        <p>Jeg holder mig kreativ ved at designe plakater i min fritid</p>
      </div>

      <div className="carousel">
        <button className="carousel-btn" onClick={prevSlide}>
          ⟨
        </button>

        <div className="carousel-container">
          {visibleClients.map((client, i) => (
            <div key={i} className="carousel-info">
              <img src={client.image} alt={client.title} />{" "}
              <h3 className="carousel-name">{client.title}</h3>
            </div>
          ))}
        </div>

        <button className="carousel-btn" onClick={nextSlide}>
          ⟩
        </button>
      </div>
    </div>
  );
}
