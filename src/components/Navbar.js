import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__container">
        <a href="/" className="navbar__logo">
          CHRISTIAN
          <span>HOMESCHOOL</span>
        </a>

        <nav className="navbar__links">
          <a href="/journey">Journey</a>
          <a href="/learn">Learn</a>
          <a href="/faith">Faith</a>
          <a href="/create-discover">Create & Discover</a>
          <a href="/parent-hub">Parent Hub</a>
          <a href="/resources">Resources</a>
          <a href="/our-story">Our Story</a>
        </nav>

        <a href="/journey" className="navbar__cta">
          Start the Journey
          <span>→</span>
        </a>
      </div>
    </header>
  );
}

export default Navbar;
