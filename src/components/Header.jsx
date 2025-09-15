import Nav from "./Nav";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <NavLink to="/">
          <img src="../../public/img/logo.svg" alt="Frederik Nielsen Logo" />

          <p>FREDERIK NIELSEN</p>
        </NavLink>
      </div>
      <div>
        <Nav />
      </div>
    </header>
  );
}
