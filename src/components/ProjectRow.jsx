import { NavLink } from "react-router";

export default function ProjecttRow({ client }) {
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

        <div className="year-link">
          <h4>{client.year}</h4>
          <div className="links">
            {client.links &&
              client.links.length > 0 &&
              client.links.map((link, index) => (
                <h4 key={index}>
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    {link.text}
                  </a>
                </h4>
              ))}
          </div>
        </div>
      </div>
      <div className="projekt-billede">
        <img
          src={client.image}
          alt={client.title}
          link
          rel="preload"
          loading="lazy"
        />
      </div>
    </section>
  );
}
