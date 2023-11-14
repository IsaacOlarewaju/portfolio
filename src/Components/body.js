import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ShowProjectName } from "./ShowProjectName";
import { Title } from "./Title";
import { ConnectContact } from "./ConnectContact";
import { NavBar } from "./NavBar";
import { ProjectImageLink } from "./ProjectImageLink";
import { Connect } from "./Connect";
import { Clip0 } from "./Clip0";
import { Clip1 } from "./Clip1";
import { Clip2 } from "./Clip2";
import { Clip3 } from "./Clip3";
import { Clip4 } from "./Clip4";

function TitleContact() {
  return (
    <div className="intro-name">
      <h1 className="buyan">
        GET <br />
        IN TOUCH
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

export function OpeningContact() {
  return (
    <section id="intro">
      <div className="container">
        <ConnectContact />
        <TitleContact />
        <h2 className="contact-second-title">
          I AM LOOKING FORWARD TO <br />
          HEARING FROM YOU
        </h2>
        <ContactInfo />
      </div>
    </section>
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
      <small></small>
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
            TEXT <br></br>
            Q&amp;A
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
      <Clip0 />

      <div className="standard-project-description">
        <p>
          Text Q&amp;A is an interactive and versatile app developed for staff
          who'll facilitate live talks. Versatile, as users are able to
          administer various forms of live talks (large live meetings, live
          seminars, Zoom meetings, online lectures, webinars, etc), in
          conjunction with the app.
          <br />
          <br />
          The Text Q&amp;A{" "}
          <a href="#text-qa-dashboard">
            <u>dashboard</u>
          </a>
          , which is only made visible to the user, and the{" "}
          <a href="#text-qa-chatpage">
            <u>chat page</u>
          </a>
          , which is publicly projected, are pages users most commonly engage
          with.
        </p>
        <Clip1 />
        <div className="describing-picture-above project-image-responsive">
          <p>
            <i>Example of the users dashboard</i>
          </p>
        </div>
        <Clip2 />
        <Clip4 />
        <div className="describing-picture-above project-image-responsive">
          <p>
            <i>Example of the chat page, which is publicly projected</i>
          </p>
        </div>

        <p>
          <br />
          <strong>How does Text Q&amp;A work?</strong>
          <br />
          Text Q&amp;A is an interactive app that bridges the gap between public
          speaker and audience.
          <br />
          In response to live talks, audiences, situated in various locations,
          sends posed questions by text message (standard SMS), which is
          received and managed within the Text Q&amp;A app.
          <br />
          <br />
          Text Q&amp;A allows for editorial discretion by allowing the user of
          the app to review each question in the{" "}
          <a href="#text-qa-dashboard">
            <u>dashboard</u>
          </a>{" "}
          before authorizing, and making it visible in the{" "}
          <a href="#text-qa-chatpage">
            <u>chat page</u>
          </a>
          .
          <br />
          <br />
          The real-time public projection of the chat page will enable the
          public speaker to respond to and address authorized questions.
          <br />
          <br />
          Text Q&amp;A is a highly useful tool for public speaking, as it
          fosters a speedy, dynamic, and interactive presentation experience for
          both speaker and audience.
        </p>
      </div>

      <Clip3 />
      <div className="standard-project-description">
        <p>
          Text Q&amp;A was developed from the ground up. Leveraging my creative
          design skills and knowledge of visual aesthetics, I developed a
          coherent UX for the Text Q&amp;A app. CSS was used to translate this
          UX and aesthetic vision into responsive web pages. React hooks such as
          useState, useEffect, fetch, and props, were instrumental in adding
          functionality and speedy performances to the app.
          <br />
          <br />
          Chrome DevTools, and using the console to log messages and run
          commmands enabled me to greatly develop problem solving, and debugging
          skills. Being exposed to the React ecosystem increased my confidence
          and workability in the framework.
          <br />
          <br />
          Working in cooperation with a JavaScript developer allowed me to gain
          knowledge in creating server-side web applications. Creating the Text
          Q&amp;A app is highly rewarding, as it provides me opportunities
          utilize, and increase my skill set.
        </p>
      </div>
      <div className=""></div>
      <div className="visit-project-link">
        <p>
          <a href="https://www.sky.com/" target={"_blank"}>
            {/* Turn on link once its been provided */}
            {/* <u>Visit Text Q&amp;A →</u> */}
          </a>
        </p>
      </div>
    </div>
  );
}

const ShowProjectDescription = () => {
  return (
    <p>
      Text Q&amp;A is an interactive question-and-answer app that allows public
      listeners get real-time answers to questions posed during live talks.
    </p>
  );
};

export function ShowProjectImage() {
  return (
    <div className="whatnot1">
      <div className="whatnot2"></div>
      <img
        className="project-image"
        src="/images/NEW-Opening.webp"
        alt="Image of Project"
        srcSet="
                    /images/NEW-Opening.webp  500w,
                    /images/NEW-Opening.webp  900w,
                    /images/NEW-Opening.webp 1200w
                "
      />
    </div>
  );
}

const ContactInfo = () => {
  return (
    <div className="contact-container">
      <div></div>
      <h3>LinkedIn</h3>
      <a href="https://www.linkedin.com/in/isaac-ola/" target={"_blank"}>
        https://www.linkedin.com/in/isaac-ola
      </a>
      <h3>GitHub</h3>
      <a href="https://github.com/IsaacOlarewaju/" target={"_blank"}>
        https://github.com/IsaacOlarewaju/
      </a>
      <h3>Email</h3>
      <a href="mailto:isaacola@me.com" target="_blank">
        isaacola@me.com
      </a>
      <h3>Resume</h3>
      <a href="/images/cv.pdf" download target="_blank">
        Download Latest Resume
      </a>
    </div>
  );
};
