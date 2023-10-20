import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

/* CONNECT / SOCIAL MEDIA ICONS */
export const Connect = () => {
  return (
    <div className="connect-container">
      <div className="linked-in-icon">
        <a href="https://www.linkedin.com/in/isaac-ola/" target="_blank">
          <img src="/images/linkedin-icon.png" alt="My LinkedIn Account"></img>
        </a>
      </div>
      <div className="github-icon">
        <a href="https://github.com/IsaacOlarewaju/" target="_blank">
          <img src="/images/github-icon.png" alt="My GitHub Account"></img>
        </a>
      </div>
      <div className="mail-icon">
        <a href="mailto:isaacola@me.com" target="_blank">
          <img src="/images/email-icon.png"></img>
        </a>
      </div>
    </div>
  );
};
/* This is a comment */
/* This is a second comment*/
/* isaac is trying this */

/* NAVBAR */
export function NavBar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav>
      <div
        className="burger-menu"
        onClick={() => {
          setShowMenu(!showMenu);
        }}
      >
        <div className="burger-line"></div>
        <div className="burger-line"></div>
        <div className="burger-line"></div>
      </div>

      <div className={"menu " + (showMenu ? "flex appear" : "")}>
        <div className="other-pages">
          <ul>
            <li className="buyan">
              <Link to={"/"}>HOME</Link>
            </li>
            <li className="buyan">
              <Link to={"/portfolio"}>PORTFOLIO</Link>
            </li>
            <li className="buyan">
              <Link to={"/contact"}>CONTACT</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

/* HEADINGS */
export function Title() {
  return (
    <div className="intro-name">
      <h1 className="buyan">
        ISAAC <br />
        OLAREWAJU
      </h1>
    </div>
  );
}

export function JobTitleAndDescription() {
  return (
    <div id="intro-job-title">
      <JobTitle />
      <JobDescription />
    </div>
  );
}

const JobTitle = () => {
  return <h2>FRONT END DEVELOPER</h2>;
};

const JobDescription = () => {
  return (
    <p>
      A highly motivated and passionate front-end developer. Proficient in the
      React framework. Able to develop complex and scaleable applications.
      Graphic Design background provides strong foundation in user experience
      design and visual aesthetics. Eager to utilize and further develop skills.
    </p>
  );
};

/* OPENING SECTION */
export function Opening() {
  return (
    <section id="intro">
      <div className="container">
        <Connect />
        <Title />
        <JobTitleAndDescription />
      </div>
    </section>
  );
}

/* PROJECTS LINK-BLOCK */
export function ProjectImageLink() {
  return (
    <a href="projects.js">
      <img
        className="project-image"
        src="/images/screenshot3.png"
        alt="Preview of my latest project"
        srcSet="
                    /images/screenshot3.png  500w,
                    /images/screenshot3.png  900w,
                    /images/screenshot3.png 1200w
                "
      />
    </a>
  );
}

/* PROJECT DESCRIPTION */
const ProjectDescription = () => {
  return (
    <div className="project-description-container">
      <h2>TEXT Q&amp;A</h2>
      <p>
        A place where the pubic could submit questions and feedback regarding
        live talks, and get live answers, with integrated SSE (server side) for
        real-time notifications.
      </p>
    </div>
  );
};

/* FIRST PROJECT */
export function ProjectOne() {
  return (
    <section className="container">
      <Link to={"/portfolio"}>
        <ProjectImageLink />
        <ProjectDescription />
      </Link>
    </section>
  );
}

/* SECOND PROJECT */
const ProjectTwo = () => {
  return <section></section>;
};

/* FOOTER */
export function Footer() {
  return (
    <footer>
      <small>Isaac Olarewaju, 2023.</small>
      <small>
        <a href="Contact">Contact</a>
      </small>
    </footer>
  );
}

/* PROJECT 1 / TEXT Q&A */
export const ShowProject1Opening = () => {
  return (
    <section id="intro">
      <div className="container">
        <div className="intro-name">
          <h1 className="buyan">
            TEXT <br></br>Q&amp;A
          </h1>
        </div>
        <ShowProject1Opening2 />
      </div>
    </section>
  );
};

export function ShowProject1Opening2() {
  return (
    <div id="intro-job-title">
      <ShowProjectName />
      <ShowProjectDescription />
      <ShowProjectImage />
      <ShowProjectImage />
    </div>
  );
}

const ShowProjectName = () => {
  return <h2>QUESTION AND ANSWERING APP</h2>;
};

const ShowProjectDescription = () => {
  return (
    <p>
      A highly motivated and passionate front-end developer. Proficient in the
      React framework. Able to develop complex and scaleable applications.
      Graphic Design background provides strong foundation in user experience
      design and visual aesthetics. Eager to utilize and further develop skills.
    </p>
  );
};

export function ShowProjectImage() {
  return (
    <div className="whatnot1">
      <div className="whatnot2"></div>
      <img
        className="project-image"
        src="/images/screenshot3.png"
        alt="Image of Project"
        srcSet="
                    /images/screenshot3.png  500w,
                    /images/screenshot3.png  900w,
                    /images/screenshot3.png 1200w
                "
      />
    </div>
  );
}
