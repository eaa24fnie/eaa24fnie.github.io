import { useState } from "react";

export default function ProjectRow({ client, index }) {
  const [showMore, setShowMore] = useState(false);

  // Handle case where description1 or description2 may be a string OR array
  const renderText = (text) => {
    if (Array.isArray(text)) {
      return text.map((t, i) => <p key={i}>{t}</p>);
    }
    return <p>{text}</p>;
  };

  return (
    <section className={`project-row ${index % 2 !== 0 ? "reverse" : ""}`}>
      <div className="projekt-beskrivelse">
        <div className="kategori">
          <p>{client.kategori}</p>
        </div>

        <h3>{client.title}</h3>

        <div className="brød">{renderText(client.description1)}</div>

        {client.description2 && (
          <div className="brød">
            <div className={`expandable ${showMore ? "open" : ""}`}>
              {renderText(client.description2)}
            </div>

            <button className="seemore" onClick={() => setShowMore(!showMore)}>
              {showMore ? "See less" : "See more"}
            </button>
          </div>
        )}

        <div className="year-link">
          <h4>{client.year}</h4>
          <div className="links">
            {client.links &&
              client.links.length > 0 &&
              client.links.map((link, i) => (
                <h4 key={i}>
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
          rel="preload"
          loading="lazy"
        />
      </div>
    </section>
  );
}
