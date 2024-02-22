// All of the content in the first project

import { PortfolioImg1 } from "../projectContent/PortfolioImg1";
import { PortfolioImg2 } from "../projectContent/PortfolioImg2";
import { PortfolioImg3 } from "../projectContent/PortfolioImg3";
import { PortfolioImg4 } from "../projectContent/PortfolioImg4";
import { PortfolioImg5 } from "../projectContent/PortfolioImg5";
import { PortfolioVid1 } from "../projectContent/PortfolioVid1";
import { PortfolioGif1 } from "../projectContent/PortfolioGif1";
import { FilteringCode } from "./FilteringCode";
import { ProjectNameTitle } from "../projectContent/ProjectNameTitle";
import { PortfolioDescription } from "../projectContent/PortfolioDescription";

export function PortfolioContentThree() {
  return (
    <section id="intro">
      <div className="container">
        <div className="intro-name">
          <h1 className="buyan">
            fully
            <br />
            captured
          </h1>
        </div>
        <div id="intro-job-title">
          <ProjectNameTitle
            desc="PHOTO SHARING APP"
            job="FRONTEND DEVELOPMENT, UI, GRAPGIC DESIGN"
          />
          <PortfolioDescription sentence="A cloud-based mobile messaging app targeted at mobile phone photographers, as it allows the transferring of large data at once." />
          <PortfolioImg4 pic="/images/iPhone-photo.webp" />

          <div className="standard-project-description">
            <p>
              <a href="https://fullycaptured.online/" target={"_blank"}>
                <u>Fully Captured</u>
              </a>
              , a personal project, is a website that’s built to pose as an app
              that allows transfering of large data to it’s other app users, at
              once.
              <br />
              <br />
              Fully captured offers an interactive dashboard, as users are able
              to fish friends and messages through the search function.
              <br />
              <br />
              The Chat Page is designed for ease of use with clear displays of
              imagery - fitting for the purpose of the app.
            </p>
            <PortfolioVid1 vid="/images/app-filtering-function.mp4" />
            <div className="describing-picture-above project-image-responsive">
              <p>
                <i>
                  The filtering function allows users to fish friends and
                  messages with their inputs in the text area
                </i>
              </p>
            </div>
            <FilteringCode />

            <PortfolioImg5 pic="images/fully-captured-left-right-3.webp" />
            <PortfolioImg4 pic="/images/fully-captured-mockup.webp" />
          </div>

          <div className=""></div>
          <div className="visit-project-link">
            <p>
              <a href="https://fullycaptured.online/" target={"_blank"}>
                <u>GitHub Repository →</u>
              </a>
              <br />
              <br />
              <a href="https://fullycaptured.online/" target={"_blank"}>
                <u>Visit Fully Captured →</u>
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
