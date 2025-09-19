import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Nav from "./Nav";

export default function Header() {
  const [isShrunk, setIsShrunk] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolledPercent = (scrollTop / docHeight) * 100;

      if (scrolledPercent >= 20) {
        setIsShrunk(true);
      } else {
        setIsShrunk(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogoClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header className={`header ${isShrunk ? "shrink" : ""}`}>
      <div className="logo">
        <NavLink to="/" onClick={handleLogoClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 842.3 627.3"
            className="logo-svg"
          >
            <path
              d="M636.1,0c-14.3,30-34.8,56.6-59.7,78l128.1,128.1-141.7,141.7-93,93V130.7c-15.8,3.3-32,5-48.7,5
                s-34.2-1.9-50.5-5.4l-154.4,154.4-78.5-78.5,128.1-128.1C240.7,56.7,220.3,30.1,206,.1L0,206.2l421.1,421.1,421.2-421.1L636.1,0ZM372.4,440.8
                l-87.3-87.3,87.3-87.3v174.7h0Z"
            />
          </svg>
          <p>FREDERIK NIELSEN</p>
        </NavLink>
      </div>
      <div>
        <Nav />
      </div>
    </header>
  );
}
