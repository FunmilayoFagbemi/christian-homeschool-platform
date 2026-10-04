import React from "react";
import "./Learn.css";

const subjects = [
  "ENGLISH",
  "MATHEMATICS",
  "SCIENCE",
  "HISTORY",
  "GEOGRAPHY",
  "TECHNOLOGY",
  "ART",
  "MUSIC",
];

const learningStages = [
  {
    number: "01",
    stage: "TODDLER",
    words: "EXPLORE",
    colour: "yellow",
  },
  {
    number: "02",
    stage: "EARLY YEARS",
    words: "BUILD",
    colour: "blue",
  },
  {
    number: "03",
    stage: "PRIMARY",
    words: "QUESTION",
    colour: "green",
  },
  {
    number: "04",
    stage: "PRE-TEEN",
    words: "DEVELOP",
    colour: "purple",
  },
  {
    number: "05",
    stage: "TEENAGER",
    words: "PREPARE",
    colour: "orange",
  },
];

function Learn() {
  return (
    <main className="learn">
      <section className="learn-hero">
        <div className="learn-hero__content">
          <p className="learn-hero__eyebrow">THE LEARNING WORLD</p>

          <h1>
            LEARNING
            <br />
            THAT INSPIRES
            <br />
            CURIOSITY.
          </h1>

          <p className="learn-hero__intro">
            Explore the subjects, ideas and experiences that help children
            understand the world around them.
          </p>
        </div>

        <div className="learn-hero__visual">
          <span>LEARN.</span>
          <span>QUESTION.</span>
          <span>DISCOVER.</span>
        </div>
      </section>

      <section className="learn-subjects">
        <div className="learn-subjects__intro">
          <p>EXPLORE THE SUBJECTS</p>

          <h2>
            KNOWLEDGE
            <br />
            OPENS DOORS.
          </h2>
        </div>

        <div className="learn-subjects__list">
          {subjects.map((subject, index) => (
            <div key={subject} className="learn-subject">
              <span>0{index + 1}</span>
              <h3>{subject}</h3>
              <span>→</span>
            </div>
          ))}
        </div>
      </section>

      <section className="learn-journey">
        <div className="learn-journey__intro">
          <p>LEARNING GROWS WITH THEM</p>

          <h2>
            ONE CHILD.
            <br />
            FIVE STAGES.
          </h2>

          <p className="learn-journey__text">
            What children learn changes as they grow. Our learning journey grows
            with them — building knowledge, confidence and curiosity at every
            stage.
          </p>
        </div>

        <div className="learn-journey__stages">
          {learningStages.map((stage) => (
            <div
              key={stage.number}
              className={`learn-journey__stage learn-journey__stage--${stage.colour}`}
            >
              <span>{stage.number}</span>

              <h3>{stage.stage}</h3>

              <strong>{stage.words}</strong>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Learn;
