import React from "react";
import "./Faith.css";

const faithAreas = [
  {
    number: "01",
    title: "BIBLE",
    text: "Discover God’s Word through stories, teaching and age-appropriate Bible learning.",
    colour: "yellow",
  },
  {
    number: "02",
    title: "PRAYER",
    text: "Learn to talk with God, develop a prayer life and discover the power of seeking Him.",
    colour: "blue",
  },
  {
    number: "03",
    title: "SCRIPTURE",
    text: "Build a lasting relationship with Scripture through memorisation, reflection and understanding.",
    colour: "green",
  },
  {
    number: "04",
    title: "CHARACTER",
    text: "Develop kindness, courage, integrity, wisdom and other Christ-centred qualities.",
    colour: "purple",
  },
  {
    number: "05",
    title: "FAITH & LIFE",
    text: "Explore what it means to live out Christian faith in everyday life as children grow.",
    colour: "orange",
  },
];

function Faith() {
  return (
    <main className="faith">
      <section className="faith-hero">
        <div className="faith-hero__content">
          <p className="faith-hero__eyebrow">FAITH AT THE HEART</p>

          <h1>
            FAITH ISN'T
            <br />
            JUST A LESSON.
            <br />
            IT'S A FOUNDATION.
          </h1>

          <p className="faith-hero__intro">
            Helping children discover God, grow in His Word and develop a faith
            that becomes part of everyday life.
          </p>
        </div>

        <div className="faith-hero__visual">
          <span>KNOW</span>
          <span>GROW</span>
          <span>LIVE</span>
        </div>
      </section>

      <section className="faith-areas">
        <div className="faith-areas__intro">
          <p>THE FAITH JOURNEY</p>

          <h2>
            KNOW GOD.
            <br />
            KNOW HIS WORD.
            <br />
            LIVE YOUR FAITH.
          </h2>
        </div>

        <div className="faith-areas__list">
          {faithAreas.map((area) => (
            <article
              key={area.number}
              className={`faith-area faith-area--${area.colour}`}
            >
              <span className="faith-area__number">{area.number}</span>

              <div>
                <h3>{area.title}</h3>

                <p>{area.text}</p>
              </div>

              <span className="faith-area__arrow">→</span>
            </article>
          ))}
        </div>
      </section>

      <section className="faith-statement">
        <p>
          AS THEY GROW,
          <br />
          THEIR UNDERSTANDING GROWS.
        </p>

        <h2>
          FAITH
          <br />
          FOR LIFE.
        </h2>
      </section>
    </main>
  );
}

export default Faith;
