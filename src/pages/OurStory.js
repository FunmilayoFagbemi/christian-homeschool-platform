import React from "react";
import "./OurStory.css";

function OurStory() {
  return (
    <main className="our-story">
      {/* HERO */}
      <section className="our-story-hero">
        <div className="our-story-hero__content">
          <p className="our-story-hero__eyebrow">OUR STORY</p>

          <h1>
            EDUCATION
            <br />
            WITH
            <br />
            PURPOSE.
          </h1>

          <p className="our-story-hero__intro">
            A Christian homeschooling platform created to help children learn,
            grow, discover and build a foundation that lasts.
          </p>
        </div>

        <div className="our-story-hero__visual">
          <span>FAITH</span>
          <span>LEARNING</span>
          <span>PURPOSE</span>
        </div>
      </section>

      {/* WHY WE EXIST */}
      <section className="our-story-purpose">
        <div className="our-story-purpose__intro">
          <p>WHY WE EXIST</p>

          <h2>
            EDUCATION
            <br />
            SHOULD
            <br />
            BUILD THE
            <br />
            WHOLE CHILD.
          </h2>
        </div>

        <div className="our-story-purpose__content">
          <p>
            Children need more than academic knowledge. They need space to ask
            questions, discover who they are, develop their gifts and learn how
            to navigate the world around them.
          </p>

          <p>
            We believe education can nurture the mind, develop character,
            encourage creativity and help children grow in their relationship
            with God.
          </p>

          <p>That is the heart behind this platform.</p>
        </div>
      </section>

      {/* WHAT WE BELIEVE */}
      <section className="our-story-beliefs">
        <div className="our-story-beliefs__heading">
          <p>WHAT WE BELIEVE</p>

          <h2>
            FAITH
            <br />
            AT THE
            <br />
            CENTRE.
          </h2>
        </div>

        <div className="our-story-beliefs__list">
          <article className="story-belief story-belief--yellow">
            <span>01</span>
            <h3>FAITH</h3>
            <p>
              Helping children build a genuine foundation of faith that grows
              with them.
            </p>
          </article>

          <article className="story-belief story-belief--blue">
            <span>02</span>
            <h3>LEARNING</h3>
            <p>
              Encouraging curiosity, knowledge, critical thinking and a love of
              learning.
            </p>
          </article>

          <article className="story-belief story-belief--green">
            <span>03</span>
            <h3>CHARACTER</h3>
            <p>
              Developing integrity, courage, kindness, wisdom and
              responsibility.
            </p>
          </article>

          <article className="story-belief story-belief--purple">
            <span>04</span>
            <h3>CREATIVITY</h3>
            <p>
              Giving children freedom to create, experiment, imagine and
              discover.
            </p>
          </article>

          <article className="story-belief story-belief--orange">
            <span>05</span>
            <h3>PURPOSE</h3>
            <p>
              Preparing children to understand their gifts, develop confidence
              and step into the next stage of their journey.
            </p>
          </article>
        </div>
      </section>

      {/* CLOSING */}
      <section className="our-story-statement">
        <p>
          LEARN WITH PURPOSE.
          <br />
          GROW IN FAITH.
        </p>

        <h2>
          BUILD
          <br />
          A
          <br />
          FOUNDATION
          <br />
          THAT LASTS.
        </h2>
      </section>
    </main>
  );
}

export default OurStory;
