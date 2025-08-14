// All of the content in the first project

import { PortfolioImg3 } from "../projectContent/PortfolioImg3";
import { PortfolioImg5 } from "../projectContent/PortfolioImg5";
import { PortfolioImg7 } from "../projectContent/PortfolioImg7";
import { TextQaImg1 } from "../projectContent/TextQaImg1";
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
            sentence="An interactive question-and-answer app that allows
      listeners get real-time answers to questions posed during live public talks."
          />
          <TextQaImg1 />

          <div className="standard-project-description">
            <p>
              Text Q&A is an interactive, real-time question-and-answer
              application designed to enhance the experience of live
              presentations, such as online seminars and lectures.
              <br />
              <br />
              It aims to seamlessly bridge the gap between public speakers and
              their remote audiences. Listeners can submit questions via
              standard SMS to a designated mobile phone number, with these
              messages instantly appearing within the speaker's Text Q&A app.
              <br />
              <br />
              This immediate visibility empowers speakers to address questions
              in real time, allowing dynamic, speedy, and a highly interactive
              experience for both speaker and audience.
            </p>

            <div className="standard-project-half-half-mobile">
              <PortfolioImg7 pic="images/logo.jpg" />
              <span className="standard-project-description-wrap">
                <h6>
                  Having strong digital design skills, I was able to carefully
                  craft a logo that visually represents its core functionality
                  and purpose.
                  <br />
                  <br />
                  The carefully selected shade of blue sets out to communicate
                  innovation and trustworthiness. The shade of aqua for
                  technological modernity, an app that offers a fresh and modern
                  approach to remote question & answers.
                  <br />
                  <br />
                  The smooth gradient within the logo aims to invoke feelings of
                  ease and effieciency of using the app. It also aims to show
                  the interconnectedness between speaker and audience.
                  <br />
                  <br />
                  The speech bubble placed within the negative space of the logo
                  aims to give some indication of the nature of the app. The
                  logo itself sets out to represent a 'q' and an 'a'
                  simultaneously.
                </h6>
              </span>
            </div>
          </div>

          <PortfolioImg3 pic="images/qa-logo-text-1.jpg" />
          <PortfolioImg5 pic="images/qa-logo-text-1.jpg" />

          <div className="standard-project-description">
            <p>
              {/* Component Architecture & Responsive Design */}As a frontend
              developer, I engineered a modular and scalable component
              architecture, designing easy to use user interfaces that
              prioritize usability. I was able to translate my intuitive UX
              vision into highly responsive web pages, ensuring an optimal
              experience across all devices and browsers.
            </p>
            <p>
              {/* State Management & React Hooks */}
              I implemented robust state management using React's Context API
              for global application state. This ensures consistent data flow
              and predictable behavior across all components.
              <br />
              <br />
              React Hooks such as useState and useEffect were instrumental in
              adding dynamic functionality, managing component lifecycles, and
              optimizing the app's performance. Within this process, I gained
              more of an understanding in data flow within a complex React
              application.
            </p>

            <p>
              {/* API Integration & Real-Time Performance */}
              To achieve the real-time interaction the Text Q&A is known for, I
              helped implement Server-Sent Events (SSE) for instant
              notifications and updates of incoming questions. I also
              contributed in the creation of seamless API integration with
              Firebase, which served as a reliable, real-time database, ensuring
              high availability for managing questions. Working closely with a
              backend developer, I was able to gain deeper understanding in core
              web technologies and building high-performance, real-time
              applications.
            </p>

            <p>
              {/* Clean Code & Debugging */}I prioritized writing clean,
              well-structured, and maintainable code throughout development. My
              problem-solving and debugging skills were significantly enhanced
              by frequently using Chrome DevTools, where I utilized the console
              to log messages and run commands to diagnose issues.
            </p>
          </div>
          <PortfolioImg3 pic="/images/qa1-mobile.webp" />
          <PortfolioImg3 pic="/images/qa2-mobile.webp" />
          <PortfolioImg3 pic="/images/qa3-mobile.webp" />
          <PortfolioImg5 pic="images/qa1.webp" />
          <PortfolioImg5 pic="images/qa2.webp" />
          <PortfolioImg5 pic="images/qa3.webp" />

          <div className="visit-project-link">
            <p>
              <a href="https://github.com/sho88/text-askme" target={"_blank"}>
                <u>GitHub Repository →</u>
              </a>
              <br />
              <br />
              <a href="https://text-qa.co.uk/" target={"_blank"}>
                <u>Visit Text Q&amp;A →</u>
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
