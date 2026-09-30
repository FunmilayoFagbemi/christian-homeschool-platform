import React from "react";
import StageNavigation from "./StageNavigation";
import "./StageExperience.css";

function StageExperience({
  stageName,
  ages,
  theme,
  statement,
  description,
  learningFocus,
  faithFocus,
  creativeFocus,
}) {
  return (
    <main className={`stage-experience stage-experience--${theme}`}>
      <section className="stage-experience__hero">
        <div className="stage-experience__hero-content">
          <p className="stage-experience__ages">{ages}</p>

          <h1>{stageName}</h1>

          <p className="stage-experience__statement">{statement}</p>

          <p className="stage-experience__description">{description}</p>
        </div>

        <div className="stage-experience__hero-shape">
          <span>{stageName}</span>
        </div>
      </section>

      <StageNavigation />

      <section className="stage-experience__areas">
        <article className="stage-area stage-area--learn">
          <p className="stage-area__label">01 — LEARN</p>

          <h2>Build knowledge.</h2>

          <p>{learningFocus}</p>

          <a href="/learn">
            Explore Learning
            <span>→</span>
          </a>
        </article>

        <article className="stage-area stage-area--faith">
          <p className="stage-area__label">02 — FAITH</p>

          <h2>Grow in faith.</h2>

          <p>{faithFocus}</p>

          <a href="/faith">
            Explore Faith
            <span>→</span>
          </a>
        </article>

        <article className="stage-area stage-area--create">
          <p className="stage-area__label">03 — CREATE & DISCOVER</p>

          <h2>Make. Explore. Discover.</h2>

          <p>{creativeFocus}</p>

          <a href="/create-discover">
            Start Creating
            <span>→</span>
          </a>
        </article>

        <article className="stage-area stage-area--resources">
          <p className="stage-area__label">04 — RESOURCES</p>

          <h2>Keep exploring.</h2>

          <p>Find resources, activities and ideas to support the journey.</p>

          <a href="/resources">
            Explore Resources
            <span>→</span>
          </a>
        </article>
      </section>

      <section className="stage-experience__closing">
        <p>THE JOURNEY CONTINUES.</p>

        <h2>
          KEEP
          <br />
          GROWING.
        </h2>
      </section>
    </main>
  );
}

export default StageExperience;
