import ProjectRow from "../components/ProjectRow";
import { useEffect, useState } from "react";

export default function ProjectDetails() {
  const [clients, setClients] = useState([]);
  useEffect(() => {
    async function getData() {
      const response = await fetch("/public/projects.json");
      const data = await response.json();
      setClients(data);
    }
    getData();
  }, []);

  return (
    <div className="project-details">
      <div className="portfolio-intro" id="portfolio">
        <h4>Her er en samling af</h4>
        <h4>nogle af mine</h4>
        <h4>yndlingsprojekter.</h4>
        <h4>Se dig omkring.</h4>
      </div>
      <section id="clients">
        {clients.map((client) => (
          <ProjectRow client={client} key={client.id} />
        ))}
      </section>
    </div>
  );
}
