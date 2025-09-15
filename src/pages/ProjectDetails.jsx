import ProjectRow from "../components/ProjectRow";
import { useEffect, useState } from "react";

export default function ProjectDetails() {
  const [clients, setClients] = useState([]);
  useEffect(() => {
    async function getData() {
      const response = await fetch("././public/projects.json");
      const data = await response.json();
      setClients(data);
    }
    getData();
  }, []);

  return (
    <div className="project-details">
      <div className="portfolio-intro">
        <h4>Lorem ipsum dolor sit amet</h4>
        <h4>Lorem ipsum dolor sit amet</h4>
        <h4>Lorem ipsum dolor sit amet</h4>
        <h4>Lorem ipsum dolor sit amet</h4>
        <a href="@">
          <img src="	&darr;" alt="	&darr;" />
        </a>
      </div>
      <section id="clients">
        {clients.map((client) => (
          <ProjectRow client={client} key={client.id} />
        ))}
      </section>
    </div>
  );
}
