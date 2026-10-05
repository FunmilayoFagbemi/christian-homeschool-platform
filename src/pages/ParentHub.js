import React from "react";
import "./ParentHub.css";

const parentAreas = [
  {
    number: "01",
    title: "MY CHILD'S JOURNEY",
    text: "See where your child is in their learning journey and what comes next.",
    colour: "yellow",
  },
  {
    number: "02",
    title: "LEARNING PLANS",
    text: "Organise learning and create structure around your homeschooling days.",
    colour: "blue",
  },
  {
    number: "03",
    title: "PROGRESS",
    text: "Keep track of learning, development and the milestones along the way.",
    colour: "green",
  },
  {
    number: "04",
    title: "RESOURCES",
    text: "Discover resources, activities and ideas to support your family.",
    colour: "purple",
  },
  {
    number: "05",
    title: "PARENT GUIDANCE",
    text: "Find practical guidance and encouragement for the homeschooling journey.",
    colour: "orange",
  },
];

function ParentHub() {
  return (
    <main className="parent-hub">
      <section className="parent-hub-hero">
        <div className="parent-hub-hero__content">
          <p className="parent-hub-hero__eyebrow">FOR PARENTS</p>

          <h1>
            YOU DON'T
            <br />
            HAVE TO
            <br />
            HOMESCHOOL
            <br />
            ALONE.
          </h1>

          <p className="parent-hub-hero__intro">
            A space designed to help you organise learning, understand your
            child's journey and feel supported as you homeschool.
          </p>
        </div>

        <div className="parent-hub-hero__visual">
          <span>GUIDE</span>
          <span>SUPPORT</span>
          <span>GROW</span>
        </div>
      </section>

      <section className="parent-hub-areas">
        <div className="parent-hub-areas__intro">
          <p>YOUR PARENT HUB</p>

          <h2>
            SUPPORT
            <br />
            FOR THE
            <br />
            JOURNEY.
          </h2>

          <p className="parent-hub-areas__text">
            Homeschooling is a journey for the whole family. The Parent Hub
            brings the tools, guidance and resources together in one place.
          </p>
        </div>

        <div className="parent-hub-areas__list">
          {parentAreas.map((area) => (
            <article
              key={area.number}
              className={`parent-area parent-area--${area.colour}`}
            >
              <span className="parent-area__number">{area.number}</span>

              <div>
                <h3>{area.title}</h3>
                <p>{area.text}</p>
              </div>

              <span className="parent-area__arrow">→</span>
            </article>
          ))}
        </div>
      </section>

      <section className="parent-hub-statement">
        <p>
          YOU KNOW YOUR CHILD.
          <br />
          WE HELP YOU SUPPORT THE JOURNEY.
        </p>

        <h2>
          GUIDE.
          <br />
          SUPPORT.
          <br />
          GROW.
        </h2>
      </section>
    </main>
  );
}

export default ParentHub;
