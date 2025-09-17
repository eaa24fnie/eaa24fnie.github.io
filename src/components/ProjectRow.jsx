import { NavLink } from "react-router";

export default function ProjecttRow({ client }) {
  console.log(client.description);
  return (
    <section className="project-row">
      <div className="projekt-beskrivelse">
        <div className="kategori">
          <p>{client.kategori}</p>
        </div>
        <h3>{client.title}</h3>
        <div className="brød">
          {client.description.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>

        <h4>{client.year}</h4>
      </div>
      <div className="projekt-billede">
        <img src={client.image} alt={client.title} />
      </div>
    </section>
  );
}
