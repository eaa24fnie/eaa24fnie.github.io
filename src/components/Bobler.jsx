import { useEffect, useState } from "react";

export default function Bobler() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * 0.5);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bobler">
      <div
        style={{
          transform: `translateY(-${offset * 5}px)`,
          transition: "transform 0.1s linear",
        }}
      >
        <img
          src="/img/gradient-map-bobler-01.png"
          alt="Gradient bobble"
          className="bobble bobble-1"
        />
      </div>

      <div
        style={{
          transform: `translateY(-${offset * 0.5}px)`,
          transition: "transform 0.1s linear",
        }}
      >
        <img
          src="/img/gradient-map-bobler-02.png"
          alt="Gradient bobble"
          className="bobble bobble-2"
        />
      </div>

      <div
        style={{
          transform: `translateY(-${offset * 0.4}px)`,
          transition: "transform 0.1s linear",
        }}
      >
        <img
          src="/img/gradient-map-bobler-02.png"
          alt="Gradient bobble"
          className="bobble bobble-2"
        />
      </div>

      <div
        style={{
          transform: `translateY(-${offset * 2}px)`,
          transition: "transform 0.1s linear",
        }}
      >
        <img
          src="/img/gradient-map-bobler-03.png"
          alt="Gradient bobble"
          className="bobble bobble-1"
        />
      </div>

      <div
        style={{
          transform: `translateY(-${offset * 1.5}px)`,
          transition: "transform 0.1s linear",
        }}
      >
        <img
          src="/img/gradient-map-bobler-04.png"
          alt="Gradient bobble"
          className="bobble bobble-2"
        />
      </div>

      <div
        style={{
          transform: `translateY(-${offset * 1.5}px)`,
          transition: "transform 0.1s linear",
        }}
      >
        <img
          src="/img/gradient-map-bobler-04.png"
          alt="Gradient bobble"
          className="bobble bobble-1"
        />
      </div>
    </div>
  );
}
