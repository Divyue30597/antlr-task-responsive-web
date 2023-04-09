import "./navbar.css";

export function Navbar() {
  return (
    <nav className="navbar">
      <span className="navbar-title">KALLYAS</span>
      <ul className="navbar-items">
        <li>
          <a href="#">Browse Topics</a>
        </li>
        <li>
          <a href="#">How it works</a>
        </li>
        <li>
          <a href="#">FAQ</a>
        </li>
        <li>
          <a href="#">Support</a>
        </li>
      </ul>
    </nav>
  );
}
