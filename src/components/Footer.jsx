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
      </div>
    </footer>
  );
}
