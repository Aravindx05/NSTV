import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      {/* LOGO + CHANNEL NAME (HOME LINK) */}
      <Link to="/" className="nav-left" onClick={() => setMenuOpen(false)}>
        <img src={logo} alt="Channel Logo" className="logo" />
        <span className="channel-name">NSTV</span>
      </Link>

      {/* Hamburger */}
      <div
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      {/* NAV LINKS */}
      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/category/politics" onClick={() => setMenuOpen(false)}>Politics</Link>
        <Link to="/category/technology" onClick={() => setMenuOpen(false)}>Tech</Link>
        <Link to="/category/sports" onClick={() => setMenuOpen(false)}>Sports</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
      </nav>
    </header>
  );
}

export default Navbar;
