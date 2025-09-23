export default function Footer() {
  return (
    <footer>
      <div className="footer-name">
        <h3>fnielsen1@live.dk</h3>
        <p>I skal ikke holde jer tilbage – skriv endelig!</p>
      </div>
      <div>
        {" "}
        <p>© 2025 Frederik Nielsen</p>
      </div>
      <div className="socials">
        <div>
          <a href="https://www.linkedin.com/in/fnielsen1/">
            <img src="/img/linkedin.webp" alt="Linkedin" />
          </a>
          <a href="https://dribbble.com/FrederikNielsen">
            <img src="/img/dribbble.webp" alt="Dribbble" />
          </a>
          <a href="https://www.behance.net/frederiknielsen11">
            <img src="/img/behance.webp" alt="Behance" />
          </a>
        </div>
      </div>
    </footer>
  );
}
