import React from "react";
import "./CreateDiscover.css";

const discoveryAreas = [
  {
    number: "01",
    title: "CREATE",
    text: "Express ideas through art, design, music and imagination.",
    colour: "yellow",
  },
  {
    number: "02",
    title: "EXPERIMENT",
    text: "Ask questions, test ideas and discover how the world works.",
    colour: "blue",
  },
  {
    number: "03",
    title: "EXPLORE",
    text: "Discover nature, technology, culture and the world around you.",
    colour: "green",
  },
  {
    number: "04",
    title: "BUILD",
    text: "Turn ideas into projects, inventions, designs and real experiences.",
    colour: "purple",
  },
  {
    number: "05",
    title: "CHALLENGE",
    text: "Think deeper, solve problems and stretch what you believe you can do.",
    colour: "orange",
  },
];

function CreateDiscover() {
  return (
    <main className="create-discover">
      <section className="create-discover-hero">
        <div className="create-discover-hero__content">
          <p className="create-discover-hero__eyebrow">CREATE & DISCOVER</p>

          <h1>
            LEARN IT.
            <br />
            MAKE IT.
            <br />
            EXPLORE IT.
          </h1>

          <p className="create-discover-hero__intro">
            Learning doesn't stop with a lesson. Children learn by creating,
            experimenting, exploring and discovering what they can do.
          </p>
        </div>

        <div className="create-discover-hero__visual">
          <span>MAKE</span>
          <span>MOVE</span>
          <span>DISCOVER</span>
        </div>
      </section>

      <section className="create-discover-areas">
        <div className="create-discover-areas__intro">
          <p>THE CREATIVE JOURNEY</p>

          <h2>
            CURIOUS
            <br />
            MINDS.
            <br />
            ACTIVE
            <br />
            HANDS.
          </h2>

          <p className="create-discover-areas__text">
            Give children space to wonder, create, solve, experiment and
            discover the world for themselves.
          </p>
        </div>

        <div className="create-discover-areas__list">
          {discoveryAreas.map((area) => (
            <article
              key={area.number}
              className={`discovery-area discovery-area--${area.colour}`}
            >
              <span className="discovery-area__number">{area.number}</span>

              <div>
                <h3>{area.title}</h3>
                <p>{area.text}</p>
              </div>

              <span className="discovery-area__arrow">→</span>
            </article>
          ))}
        </div>
      </section>

      <section className="create-discover-statement">
        <p>
          THEIR IDEAS MATTER.
          <br />
          THEIR CURIOSITY MATTERS.
        </p>

        <h2>
          LET THEM
          <br />
          DISCOVER.
        </h2>
      </section>
    </main>
  );
}

export default CreateDiscover;
