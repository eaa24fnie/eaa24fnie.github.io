import { useEffect, useState, useRef } from "react";

export default function useScrollFadeIn() {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target); // optional: animate once
          }
        });
      },
      { threshold: 0.1 } // triggers when 10% of the element is visible
    );

    if (domRef.current) {
      observer.observe(domRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return [domRef, isVisible];
}
