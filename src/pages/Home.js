import React from "react";
import "./Home.css";

function Home() {
  return (
    <main className="home">
      <section className="home-hero">
        <div className="home-hero__content">
          <p className="home-hero__eyebrow">CHRISTIAN HOMESCHOOLING</p>

          <h1>
            LEARN.
            <br />
            GROW.
            <br />
            DISCOVER.
          </h1>

          <p className="home-hero__intro">
            A learning journey designed to grow with your child — academically,
            creatively and in faith.
          </p>

          <a href="/journey" className="home-hero__button">
            Start the Journey
            <span>→</span>
          </a>
        </div>

        <div className="home-hero__visual">
          <div className="home-hero__shape home-hero__shape--yellow"></div>
          <div className="home-hero__shape home-hero__shape--blue"></div>

          <div className="home-hero__message">
            <span>ONE JOURNEY.</span>
            <strong>
              FOUNDATION
              <br />
              THAT LASTS.
            </strong>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
