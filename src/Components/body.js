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

/* CONNECT / SOCIAL MEDIA ICONS - CONTACT*/
export const ConnectContact = () => {
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
      <div className="download-icon">
        <a href="/images/cv.pdf" download target="_blank">
          <img src="/images/download-icon.png"></img>
        </a>
      </div>
    </div>
  );
};

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

/* PROJECTS LINK-BLOCK */
export function ProjectImageLink() {
  return (
    <a href="">
      <img
        className="project-image"
        src="/images/chat-page-2.webp"
        alt="Preview of my latest project"
        srcSet="
                    /images/chat-page-2.webp  500w,
                    /images/chat-page-2.webp  900w,
                    /images/chat-page-2.webp 1200w
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
          An interactive question-and-answer app that allows users to get
          real-time answers to questions posed during live talks. Users submit
          questions to the app's administrator via text message (standard SMS).
          The administrator reviews and authorizes each question before it is
          displayed on the app's dashboard. Once authorized, questions appear as
          tabs on the dashboard. Tapping on the tab opens a live chat page where
          the administrator could answer questions and provide other helpful
          information.
        </p>
      </div>
      <Clip3 />
      <div className="standard-project-description">
        <p>
          Tasks:
          <br />
          - User Interface
          <br />
          - Design
          <br />
          - Develop Front End
          <br />
          <br />
          Background in digital design enabled me to design and create an
          intuitive and visually appealing interface.
          <br />
          With competance in the React framework,
          <br />
          <br />
          Working closely with a backend developer exposed me to whatnot and
          whatnot...
        </p>
      </div>
      <Clip1 />
      <div className="describing-picture-above">
        <p>
          This is the dashboaerd of the app. This be the place that everyone
          will see. All messages are reviewed and published by the admin, after
          the admin gets a notification that a message had been received. and
          whatnot.
        </p>
      </div>
      <Clip2 />
      <div className="describing-picture-above">
        <p>
          This what the chat page looks like. It's simple and straight to the
          point. Nice interface right?
        </p>
      </div>
      <Clip3 />
    </div>
  );
}

const ShowProjectName = () => {
  return (
    <div>
      <h2>QUESTION AND ANSWERING APP</h2>
      <h3>FRONTEND DEVELOPMENT</h3>
    </div>
  );
};

const ShowProjectDescription = () => {
  return (
    <p>
      Text Q&amp;A is a platform where the pubic could submit questions and
      feedback regarding live talks, and get live answers, with integrated SSE
      (server side) for real-time notifications.
    </p>
  );
};

// const DirectImageDescription = () => {
//   return (
//     <div className="describing-picture-above">
//       <p>
//         A platform where u mhd basac mhasmc bdasc dasmnb w live answers, with
//         integrated SSE erver sideor real-time notifications.
//       </p>
//     </div>
//   );
// };

export function ShowProjectImage() {
  return (
    <div className="whatnot1">
      <div className="whatnot2"></div>
      <img
        className="project-image"
        src="/images/screenshot2.png"
        alt="Image of Project"
        srcSet="
                    /images/screenshot2.png  500w,
                    /images/screenshot2.png  900w,
                    /images/screenshot2.png 1200w
                "
      />
    </div>
  );
}

const Clip0 = () => {
  return (
    <div className="whatnot1">
      <div className="whatnot2"></div>
      <img
        className="project-image"
        src="/images/iphone-mockup-2.webp"
        alt="Image of Projectt"
        srcSet="
                    /images/iphone-mockup-2.webp  500w,
                    /images/iphone-mockup-2.webp  900w,
                    /images/iphone-mockup-2.webp 1200w
                "
      />
    </div>
  );
};

const Clip1 = () => {
  return (
    <div className="whatnot1">
      <div className="whatnot2"></div>
      <img
        className="project-image"
        src="/images/dashboard.png"
        alt="Image of Projectt"
        srcSet="
                    /images/dashboard.png  500w,
                    /images/dashboard.png  900w,
                    /images/dashboard.png 1200w
                "
      />
    </div>
  );
};

const Clip2 = () => {
  return (
    <div className="whatnot1">
      <div className="whatnot2"></div>
      <img
        className="project-image"
        src="/images/chat-page.webp"
        alt="Image of Projectt"
        srcSet="
                    /images/chat-page.webp  500w,
                    /images/chat-page.webp  900w,
                    /images/chat-page.webp 1200w
                "
      />
    </div>
  );
};

const Clip3 = () => {
  return (
    <div className="whatnot1">
      <div className="whatnot2"></div>
      <img
        className="project-image"
        src="/images/iphone-mockup-3.webp"
        alt="Image of Projectt"
        srcSet="
                    /images/iphone-mockup-3.webp  500w,
                    /images/iphone-mockup-3.webp  900w,
                    /images/iphone-mockup-3.webp 1200w
                "
      />
    </div>
  );
};

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
