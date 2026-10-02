import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__container">
        <Link to="/" className="navbar__logo">
          CHRISTIAN
          <span>HOMESCHOOL</span>
        </Link>

        <nav className="navbar__links">
          <Link to="/journey">Journey</Link>
          <Link to="/learn">Learn</Link>
          <Link to="/faith">Faith</Link>
          <Link to="/create-discover">Create & Discover</Link>
          <Link to="/parent-hub">Parent Hub</Link>
          <Link to="/resources">Resources</Link>
          <Link to="/our-story">Our Story</Link>
        </nav>

        <Link to="/journey" className="navbar__cta">
          Start the Journey
          <span>→</span>
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
