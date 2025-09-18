import ProjectRow from "../components/ProjectRow";
import { useEffect, useState, useRef } from "react";

export default function ProjectDetails() {
  const [clients, setClients] = useState([]);
  const clientRefs = useRef([]);

  // Fetch project data
  useEffect(() => {
    async function getData() {
      const response = await fetch("/projects.json");
      const data = await response.json();
      setClients(data);
      clientRefs.current = new Array(data.length); // Initialize refs array
    }
    getData();
  }, []);

  // Scroll animation
  useEffect(() => {
    if (!clients.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    clientRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      clientRefs.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, [clients]);

  return (
    <div className="project-details">
      <div className="portfolio-intro" id="portfolio">
        <h4>Her er en samling af</h4>
        <h4>nogle af mine</h4>
        <h4>yndlingsprojekter.</h4>
        <h4>Se dig omkring.</h4>
      </div>
      <section id="clients">
        {clients.map((client, index) => (
          <ProjectRow
            client={client}
            key={client.id}
            ref={(el) => (clientRefs.current[index] = el)}
          />
        ))}
      </section>
    </div>
  );
}
