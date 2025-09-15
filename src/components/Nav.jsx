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
            <p>EMAIL</p>
            <ul>
              <li>
                {" "}
                <img
                  src="https://thumbs.dreamstime.com/b/vector-placeholder-upload-profile-picture-design-minimalistic-features-simple-circular-symbol-representing-352593011.jpg"
                  alt=""
                />
              </li>
              <li>
                {" "}
                <img
                  src="https://thumbs.dreamstime.com/b/vector-placeholder-upload-profile-picture-design-minimalistic-features-simple-circular-symbol-representing-352593011.jpg"
                  alt=""
                />
              </li>
              <li>
                {" "}
                <img
                  src="https://thumbs.dreamstime.com/b/vector-placeholder-upload-profile-picture-design-minimalistic-features-simple-circular-symbol-representing-352593011.jpg"
                  alt=""
                />
              </li>
            </ul>
            <a onClick={closeModal}>
              <img src="../../public/img/luk.svg" alt="" />
            </a>
          </div>
        </div>
      )}
    </>
  );
}
