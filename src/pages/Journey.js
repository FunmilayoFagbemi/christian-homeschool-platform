import React from "react";
import "./Journey.css";

const stages = [
  {
    number: "01",
    name: "TODDLER",
    ages: "AGES 2–4",
    words: "EXPLORE. PLAY. DISCOVER.",
    description:
      "A first introduction to learning through play, curiosity, creativity and faith.",
    colour: "yellow",
    link: "/journey/toddler",
  },
  {
    number: "02",
    name: "EARLY YEARS",
    ages: "AGES 4–6",
    words: "BUILD. LEARN. CREATE.",
    description:
      "Building confidence, early knowledge and a love for learning.",
    colour: "blue",
    link: "/journey/early-years",
  },
  {
    number: "03",
    name: "PRIMARY",
    ages: "AGES 6–11",
    words: "LEARN. QUESTION. GROW.",
    description:
      "Developing knowledge, curiosity, creativity and a growing understanding of faith.",
    colour: "green",
    link: "/journey/primary",
  },
  {
    number: "04",
    name: "PRE-TEEN",
    ages: "AGES 11–14",
    words: "EXPLORE. DEVELOP. CHALLENGE.",
    description:
      "Encouraging deeper thinking, discovery, responsibility and personal development.",
    colour: "purple",
    link: "/journey/pre-teen",
  },
  {
    number: "05",
    name: "TEENAGER",
    ages: "AGES 14–18",
    words: "PREPARE. LEAD. THRIVE.",
    description:
      "Preparing young people for further education, adulthood, leadership and life beyond the platform.",
    colour: "orange",
    link: "/journey/teenager",
  },
];

function Journey() {
  return (
    <main className="journey">
      <section className="journey-hero">
        <div className="journey-hero__content">
          <p className="journey-hero__eyebrow">THE LEARNING JOURNEY</p>

          <h1>
            ONE JOURNEY.
            <br />
            FIVE STAGES.
          </h1>

          <p className="journey-hero__intro">
            A learning experience designed to grow with your child — from their
            earliest discoveries through their teenage years.
          </p>
        </div>

        <div className="journey-hero__statement">
          <span>LEARN</span>
          <span>GROW</span>
          <span>DISCOVER</span>
          <span>PREPARE</span>
        </div>
      </section>

      <section className="journey-stages">
        {stages.map((stage) => (
          <article
            key={stage.number}
            className={`journey-stage journey-stage--${stage.colour}`}
          >
            <div className="journey-stage__number">{stage.number}</div>

            <div className="journey-stage__content">
              <p className="journey-stage__ages">{stage.ages}</p>

              <h2>{stage.name}</h2>

              <p className="journey-stage__words">{stage.words}</p>

              <p className="journey-stage__description">{stage.description}</p>

              <a href={stage.link} className="journey-stage__link">
                Explore this stage
                <span>→</span>
              </a>
            </div>
          </article>
        ))}
      </section>

      <section className="journey-closing">
        <p>THE GOAL ISN'T JUST TO TEACH.</p>

        <h2>
          IT'S TO HELP
          <br />
          THEM GROW.
        </h2>

        <p className="journey-closing__text">
          Academically. Creatively. Personally. And in their faith.
        </p>
      </section>
    </main>
  );
}

export default Journey;
