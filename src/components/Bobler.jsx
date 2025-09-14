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
      <img
        src="/img/gradient-map-bobler-01.png"
        alt="Gradient bobble"
        style={{
          transform: `translateY(-${offset}px)`, // move up as you scroll
          transition: "transform 0.1s linear",
        }}
      />
      <img
        src="/img/gradient-map-bobler-01.png"
        alt="Gradient bobble"
        style={{
          transform: `translateY(-${offset}px)`, // move up as you scroll
          transition: "transform 0.1s linear",
        }}
      />
    </div>
  );
}
