// All of the content in the first project

import { PortfolioImg1 } from "../projectContent/PortfolioImg1";
import { PortfolioImg2 } from "../projectContent/PortfolioImg2";
import { PortfolioImg3 } from "../projectContent/PortfolioImg3";
import { PortfolioImg4 } from "../projectContent/PortfolioImg4";
import { PortfolioImg5 } from "../projectContent/PortfolioImg5";
import { TextQaImg1 } from "../projectContent/TextQaImg1";
import { TextQaDashboard } from "../projectContent/TextQaDashboard";
import { ProjectNameTitle } from "../projectContent/ProjectNameTitle";
import { PortfolioDescription } from "../projectContent/PortfolioDescription";

export function PortfolioContentOne() {
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
          <ProjectNameTitle
            desc="QUESTION &amp; ANSWERING APP"
            job="FRONTEND DEVELOPMENT"
          />
          <PortfolioDescription
            sentence="Text Q&amp;A is an interactive question-and-answer app that allows public
      listeners get real-time answers to questions posed during live talks."
          />
          <TextQaImg1 />

          <div className="standard-project-description">
            <p>
              Users host live meetings such as seminars, Zoom meetings, online
              lectures, webinars, and training, whilst using the app.
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
              <br />
              <br />
            </p>
            <PortfolioImg3 pic="/images/NEW-dashboard.webp" />
            <div className="describing-picture-above project-image-responsive">
              <p>
                <i>
                  Example of the users dashboard, showing incoming text
                  messages, waiting to be authorized and publicly broadcasted
                </i>
              </p>
            </div>
            <PortfolioImg3 pic="/images/NEW-chat-page1.webp" />
            <PortfolioImg5 pic="images/desktop-left-right-2.webp" />
            <div className="describing-picture-above project-image-responsive">
              <p>
                <i>
                  Example of the chat page, showing authorized questions from
                  the public, and boradcasting them to the public
                </i>
              </p>
            </div>

            <p>
              <br />
              <strong>How does Text Q&amp;A work?</strong>
              <br />
              Text Q&amp;A is an interactive app that bridges the gap between
              public speaker and audience.
              <br />
              In response to the user hosting a live talk, their audiences,
              which are located in various locations, text through their
              questions (standard SMS) to a specific mobile number. This text
              message received and managed within the Text Q&amp;A app.
              <br />
              <br />
              The app practices editorial discretion by allowing the user of the
              app to review each question in the dashboard before authorizing,
              and making it visible in the chat page.
              <br />
              <br />
              The real-time public projection of the chat page will enable the
              public speaker to respond to and address questions that have been
              authorized.
              <br />
              <br />
              Text Q&amp;A is a highly useful tool for public speaking, as it
              fosters a speedy, dynamic, and interactive presentation experience
              for both speaker and audience.
            </p>
          </div>

          <PortfolioImg4 pic="images/text-from-home.webp" />
          <div className="standard-project-description">
            <p>
              Text Q&amp;A was developed from the ground up. Leveraging my
              creative design skills and knowledge of visual aesthetics, I
              developed a coherent UX for the Text Q&amp;A app. CSS was used to
              translate this UX and aesthetic vision into responsive web pages.
              React hooks such as useState and useEffect were instrumental in
              adding functionality and speedy performances to the app.
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
              opportunities to utilize, and increase my skill set.
            </p>
          </div>
          <div className=""></div>
          <div className="visit-project-link">
            <p>
              <a href="https://github.com/sho88/text-askme" target={"_blank"}>
                <u>GitHub Repository →</u>
              </a>
              {/* <br />
              <br />
              <a href="https://www.textqa.com/" target={"_blank"}>
                <u>Visit Text Q&amp;A →</u>
              </a> */}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
