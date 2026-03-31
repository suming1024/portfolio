import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <Link to="/" className="header__nav-link">Home</Link>
          </li>
          <li className="header__nav-item">
            <Link to="/about" className="header__nav-link">About</Link>
          </li>
          <li className="header__nav-item">
            <Link to="/Projects" className="header__nav-link">Projects</Link>
          </li>
          <li className="header__nav-item">
            <Link to="/contact" className="header__nav-link">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}       