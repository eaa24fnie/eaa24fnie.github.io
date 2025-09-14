import Nav from "./Nav";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <a href="/">
          <img src="../../public/img/logo.svg" alt="Frederik Nielsen Logo" />

          <p>FREDERIK NIELSEN</p>
        </a>
      </div>
      <div>
        <Nav />
      </div>
    </header>
  );
}
