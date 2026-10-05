import React from "react";
import "./Resources.css";

const resourceAreas = [
  {
    number: "01",
    title: "HOMESCHOOLING",
    text: "Ideas, guidance and practical resources to help parents build their homeschooling journey.",
    colour: "yellow",
  },
  {
    number: "02",
    title: "CHRISTIAN RESOURCES",
    text: "Bible resources, faith-based learning materials and resources to help children grow in Christ.",
    colour: "blue",
  },
  {
    number: "03",
    title: "BOOKS & READING",
    text: "Stories, books and reading resources to encourage imagination, knowledge and a love of learning.",
    colour: "green",
  },
  {
    number: "04",
    title: "LEARNING MATERIALS",
    text: "Activities, projects and educational materials designed to support learning at every stage.",
    colour: "purple",
  },
  {
    number: "05",
    title: "EDUCATIONAL TOOLS",
    text: "Useful tools and ideas that make learning more engaging, creative and practical.",
    colour: "orange",
  },
];

function Resources() {
  return (
    <main className="resources">
      <section className="resources-hero">
        <div className="resources-hero__content">
          <p className="resources-hero__eyebrow">THE RESOURCE LIBRARY</p>

          <h1>
            RESOURCES
            <br />
            FOR THE
            <br />
            JOURNEY.
          </h1>

          <p className="resources-hero__intro">
            A growing collection of resources, ideas and materials to support
            children and parents throughout the homeschooling journey.
          </p>
        </div>

        <div className="resources-hero__visual">
          <span>FIND</span>
          <span>EXPLORE</span>
          <span>LEARN</span>
        </div>
      </section>

      <section className="resources-areas">
        <div className="resources-areas__intro">
          <p>EXPLORE THE LIBRARY</p>

          <h2>
            FIND
            <br />
            WHAT
            <br />
            YOU NEED.
          </h2>

          <p className="resources-areas__text">
            From everyday learning ideas to Christian resources and creative
            activities, discover something useful for every stage of the
            journey.
          </p>
        </div>

        <div className="resources-areas__list">
          {resourceAreas.map((area) => (
            <article
              key={area.number}
              className={`resource-area resource-area--${area.colour}`}
            >
              <span className="resource-area__number">{area.number}</span>

              <div>
                <h3>{area.title}</h3>
                <p>{area.text}</p>
              </div>

              <span className="resource-area__arrow">→</span>
            </article>
          ))}
        </div>
      </section>

      <section className="resources-statement">
        <p>
          ONE PLACE.
          <br />
          MANY WAYS TO LEARN.
        </p>

        <h2>
          KEEP
          <br />
          EXPLORING.
        </h2>
      </section>
    </main>
  );
}

export default Resources;
