import { useState, useEffect } from "react";

export default function PosterGrid() {
  const [posters, setPosters] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedPoster, setSelectedPoster] = useState(null);

  useEffect(() => {
    async function fetchPosters() {
      try {
        const response = await fetch("/poster.json");
        if (!response.ok) throw new Error("Failed to fetch posters");
        const data = await response.json();
        setPosters(data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchPosters();
  }, []);

  if (posters.length === 0) return <p>Loading posters...</p>;

  const visiblePosters = posters.slice(0, 9);

  return (
    <div className="poster-grid-container">
      <div className="projekt-beskrivelse">
        <div className="kategori">
          <p>PERSONLIG</p>
        </div>
        <p className="carousel-intro-p">
          Jeg holder mig kreativ ved at designe plakater i min fritid
        </p>
      </div>

      <div className="poster-grid">
        {visiblePosters.map((poster, i) => (
          <div
            key={i}
            className={`poster-item ${
              hoveredIndex !== null && hoveredIndex !== i ? "dimmed" : ""
            }`}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => setSelectedPoster(poster)}
          >
            <img
              src={poster.image}
              alt={poster.title}
              className="poster-image"
              link
              rel="preload"
              loading="lazy"
            />
            <h3 className="poster-name">{poster.title}</h3>
          </div>
        ))}
      </div>

      {selectedPoster && (
        <div className="poster-overlay" onClick={() => setSelectedPoster(null)}>
          <img src={selectedPoster.image} alt={selectedPoster.title} />
        </div>
      )}
    </div>
  );
}
