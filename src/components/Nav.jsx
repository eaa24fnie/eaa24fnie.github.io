import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Nav() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const goToPortfolio = () => {
    navigate("/"); // Navigate to home page first
    setTimeout(() => {
      const el = document.getElementById("portfolio");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 50); // small delay to ensure page rendered
  };

  return (
    <>
      <nav className="navbar">
        <a onClick={goToPortfolio}>Portfolio</a>{" "}
        <NavLink to="/about">Om mig</NavLink>
        <a className="contact-button" onClick={openModal}>
          Kontakt
        </a>
      </nav>

      {/* Modal (popup) */}
      {isModalOpen && (
        <div className="kontakt" onClick={closeModal}>
          <div className="kontakt-overlay" onClick={(e) => e.stopPropagation()}>
            <p>fnielsen1@live.dk</p>
            <div className="socials">
              <a href="https://www.linkedin.com/feed/">
                <img src="/img/linkedin.png" alt="Linkedin" />
              </a>
              <a href="https://dribbble.com/FrederikNielsen">
                <img src="/img/dribbble.png" alt="Dribbble" />
              </a>
              <a href="https://www.behance.net/frederiknielsen11">
                <img src="/img/behance.png" alt="Behance" />
              </a>
            </div>
            <a onClick={closeModal}>
              <img src="../../public/img/luk.svg" alt="" />
            </a>
          </div>
        </div>
      )}
    </>
  );
}
