// All of the content in the first project

import { ProjectOneImg1 } from "./ProjectOneImg1";
import { ProjectOneImg2 } from "./ProjectOneImg2";
import { ProjectOneImg3 } from "./ProjectOneImg3";
import { ProjectOneImg4 } from "./ProjectOneImg4";
import { ProjectOneImg5 } from "./ProjectOneImg5";
import { ShowProjectName } from "./ShowProjectName";
import { ShowProjectDescription } from "./body";

export function ProjectOneContent() {
  return (
    <section id="intro">
      <div className="container">
        <div className="intro-name">
          <h1 className="buyan">
            TEXT <br></br>
            Q&amp;A
          </h1>
        </div>
        <div id="intro-job-title">
          <ShowProjectName />
          <ShowProjectDescription />
          <ProjectOneImg1 />

          <div className="standard-project-description">
            <p>
              Text Q&amp;A is an interactive and versatile app developed for
              staff who'll facilitate live talks. Versatile, as users are able
              to administer various forms of live talks (large live meetings,
              live seminars, Zoom meetings, online lectures, webinars, etc), in
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
              , which is publicly projected, are pages users most commonly
              engage with.
            </p>
            <ProjectOneImg2 />
            <div className="describing-picture-above project-image-responsive">
              <p>
                <i>Example of the users dashboard</i>
              </p>
            </div>
            <ProjectOneImg3 />
            <ProjectOneImg5 />
            <div className="describing-picture-above project-image-responsive">
              <p>
                <i>Example of the chat page, which is publicly projected</i>
              </p>
            </div>

            <p>
              <br />
              <strong>How does Text Q&amp;A work?</strong>
              <br />
              Text Q&amp;A is an interactive app that bridges the gap between
              public speaker and audience.
              <br />
              In response to live talks, audiences, situated in various
              locations, sends posed questions by text message (standard SMS),
              which is received and managed within the Text Q&amp;A app.
              <br />
              <br />
              Text Q&amp;A allows for editorial discretion by allowing the user
              of the app to review each question in the{" "}
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
              fosters a speedy, dynamic, and interactive presentation experience
              for both speaker and audience.
            </p>
          </div>

          <ProjectOneImg4 />
          <div className="standard-project-description">
            <p>
              Text Q&amp;A was developed from the ground up. Leveraging my
              creative design skills and knowledge of visual aesthetics, I
              developed a coherent UX for the Text Q&amp;A app. CSS was used to
              translate this UX and aesthetic vision into responsive web pages.
              React hooks such as useState, useEffect, fetch, and props, were
              instrumental in adding functionality and speedy performances to
              the app.
              <br />
              <br />
              Chrome DevTools, and using the console to log messages and run
              commmands enabled me to greatly develop problem solving, and
              debugging skills. Being exposed to the React ecosystem increased
              my confidence and workability in the framework.
              <br />
              <br />
              Working in cooperation with a JavaScript developer allowed me to
              gain knowledge in creating server-side web applications. Creating
              the Text Q&amp;A app is highly rewarding, as it provides me
              opportunities utilize, and increase my skill set.
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
      </div>
    </section>
  );
}
