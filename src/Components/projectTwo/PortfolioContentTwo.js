import { PortfolioImg1 } from "../projectContent/PortfolioImg1";
import { PortfolioImg2 } from "../projectContent/PortfolioImg2";
import { PortfolioImg3 } from "../projectContent/PortfolioImg3";
import { PortfolioImg4 } from "../projectContent/PortfolioImg4";
import { PortfolioImg5 } from "../projectContent/PortfolioImg5";
import { ProjectNameTitle } from "../projectContent/ProjectNameTitle";
import { PortfolioDescription } from "../projectContent/PortfolioDescription";

export function PortfolioContentTwo() {
  return (
    <section id="intro">
      <div className="container">
        <div className="intro-name">
          <h1 className="buyan">
            CANVAS <br></br>
            for Works<small>©</small>
          </h1>
        </div>
        <div id="intro-job-title">
          <ProjectNameTitle
            desc="CREATIVE DESIGN AGENCY"
            job="FRONTEND DEVELOPMENT"
          />
          <PortfolioDescription sentence="A collaborative design practice established to reimagine archetypal communication within contemporary media to produce a more positively transformative kind." />
          <PortfolioImg1 pic="/images/canvas-landing-2.webp" />

          <div className="standard-project-description">
            <p>
              Canvas for Works© is a creative design agency, that focuses on
              collaborating, in order to produce good media across multiple
              canvases. Working with brands of all sizes, Canvas for Works©
              combines ability and intelligence, with knowledge and
              craftsmanship, and an underlying conviction to produce good media.
              <br />
              <br />
              Underwent task to transform website visuals into a functional and
              responsive website for the Canvas brand.
              <br />
              <br />
              Using React, I was able to build reusable React tags with props,
              determine structure and design of web pages, utilize React hooks
              to aid functionality to website, and replicate designers artwork
              and animations to exact requirements.
            </p>
            <PortfolioImg2 pic="images/canvas-cotta-webpage.webp" />
            <div className="describing-picture-above project-image-responsive">
              <p>
                <i>
                  Example of the users dashboard, showing incoming text
                  messages/questions, waiting to be authorized and publicly
                  broadcasted
                </i>
              </p>
            </div>
            <PortfolioImg5
              pic="images/canvas-cotta-webpage.webp"
              desc="Cotta, an example of one of the projects prduced by Canvas for
            Works©"
            />
            <PortfolioImg5 pic="images/gosse-mobile-view-1.webp" />
            <PortfolioImg5 pic="images/gosse-mobile-view-2.webp" />

            <PortfolioImg5 pic="/images/canvas-landing-3.webp" desc="." />

            <PortfolioImg3 pic="/images/canvas-mobile-view-mobile-3.webp" />
            <PortfolioImg3 pic="/images/canvas-mobile-view-mobile-4.webp" />
            <PortfolioImg3 pic="/images/canvas-mobile-view-mobile-1.webp" />
            <PortfolioImg3 pic="/images/canvas-mobile-view-mobile-2.webp" />
            <PortfolioImg3 pic="/images/canvas-landing-3.webp" />

            <p>
              Canvas for Works© was immediately able to gain two new clients due
              to increased awareness.
              <br />
              <br />
              I was able to reassure Canvas for Works© the ease and time
              efficiency of the addition of new projects to existing website,
              due to our reusable components, and code reusability. Speed and
              performance was also promised due to React's usage of a virtual
              DOM.
              <br />
              <br />
              Strong rapport was built with the designer. I was able to
              accurately transfer the designers vision into a workable and
              functioning website. Working with React hooks further exposed me
              into the React ecosystem.
            </p>
          </div>

          <div className="visit-project-link">
            <p>
              <a
                href="https://github.com/IsaacOlarewaju/canvasforworks"
                target={"_blank"}
              >
                <u>GitHub Repository →</u>
              </a>
              <br />
              <br />
              <a href="https://www.canvas-fw.com/" target={"_blank"}>
                <u>Visit Canvas for Works© →</u>
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
