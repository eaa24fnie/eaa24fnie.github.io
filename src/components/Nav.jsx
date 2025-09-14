import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="navbar">
      <NavLink to="/project">Project</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </nav>
  );
}
