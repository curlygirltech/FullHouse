import "../componentcss/footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <p className="footer-name">Jovonne Cameron 2021</p>
      <div className="social-media">
        <a
          className="linked-in"
          href="https://www.linkedin.com/in/jovonnecameron/"
        >
          <i class="fab fa-linkedin-in"></i>
        </a>
        <a className="github" href="https://github.com/curlygirltech">
          <i class="fab fa-github"></i>
        </a>
      </div>
    </div>
  );
}
