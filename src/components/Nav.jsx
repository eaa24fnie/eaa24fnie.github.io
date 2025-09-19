import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Nav() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const goToPortfolio = () => {
    navigate("/");
    setTimeout(() => {
      const el = document.getElementById("portfolio");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  return (
    <>
      <nav className="navbar">
        {/* Hamburger button for small screens */}
        <button className="hamburger" onClick={toggleDropdown}>
          ☰
        </button>

        {/* Menu links */}
        <div className={`nav-links ${isDropdownOpen ? "open" : ""}`}>
          <a onClick={goToPortfolio}>Portfolio</a>
          <NavLink to="/about">Om mig</NavLink>
          <a className="contact-button" onClick={openModal}>
            Kontakt
          </a>
        </div>
      </nav>

      {/* Modal (popup) */}
      {isModalOpen && (
        <div className="kontakt" onClick={closeModal}>
          <div className="kontakt-overlay" onClick={(e) => e.stopPropagation()}>
            <p>fnielsen1@live.dk</p>
            <div className="socials">
              <a href="https://www.linkedin.com/feed/">
                <img src="/img/linkedin.webp" alt="Linkedin" />
              </a>
              <a href="https://dribbble.com/FrederikNielsen">
                <img src="/img/dribbble.webp" alt="Dribbble" />
              </a>
              <a href="https://www.behance.net/frederiknielsen11">
                <img src="/img/behance.webp" alt="Behance" />
              </a>
            </div>
            <a onClick={closeModal}>
              <img src="/img/luk.svg" alt="" />
            </a>
          </div>
        </div>
      )}
    </>
  );
}
