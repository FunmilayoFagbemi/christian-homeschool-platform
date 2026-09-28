import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__brand">
          <div className="footer__logo">
            CHRISTIAN
            <span>HOMESCHOOL</span>
          </div>

          <p>A learning journey designed to grow with your child.</p>
        </div>

        <div className="footer__links">
          <a href="/journey">Journey</a>
          <a href="/learn">Learn</a>
          <a href="/faith">Faith</a>
          <a href="/create-discover">Create & Discover</a>
          <a href="/parent-hub">Parent Hub</a>
          <a href="/resources">Resources</a>
          <a href="/our-story">Our Story</a>
        </div>

        <div className="footer__bottom">
          <span>© 2026 Christian Homeschool</span>
          <span>Learn. Grow. Discover.</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
