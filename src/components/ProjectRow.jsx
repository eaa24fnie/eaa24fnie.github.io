import { NavLink } from "react-router";

export default function ProjecttRow({ client }) {
  return (
    <section className="project-row">
      <div className="projekt-beskrivelse">
        <div className="kategori">
          <p>{client.kategori}</p>
        </div>
        <h3>{client.title}</h3>
        <p>{client.description}</p>
        <h4>{client.year}</h4>
        {/* <section className="client-links">
          {client.links.map((link, index) => (
            <a
              key={`${client.id}-${index}`}
              href={link.url}
              rel="noreferrer"
              target="_blank"
            >
              {link.text} <i className="ion-ios-arrow-forward"></i>
              <i className="ion-ios-arrow-forward"></i>{" "}
            </a>
          ))}
          <br />
          <NavLink to={`/clients/${client.id}`}>Læs mere</NavLink>
        </section> */}
      </div>
      <div className="projekt-billede">
        <img src={client.image} alt={client.title} />
      </div>
    </section>
  );
}
