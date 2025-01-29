import { PortfolioImg1 } from "../projectContent/PortfolioImg1";
import { PortfolioImg2 } from "../projectContent/PortfolioImg2";
import { PortfolioImg3 } from "../projectContent/PortfolioImg3";
import { PortfolioImg4 } from "../projectContent/PortfolioImg4";
import { PortfolioImg5 } from "../projectContent/PortfolioImg5";
import { ProjectNameTitle } from "../projectContent/ProjectNameTitle";
import { PortfolioDescription } from "../projectContent/PortfolioDescription";

export function PortfolioContentFour() {
  return (
    <section id="intro">
      <div className="container">
        <div className="intro-name">
          <h1 className="buyan">ARC Global Churches -</h1>
          <h1 className="buyan">ARC Thurrock</h1>
        </div>
        <div id="intro-job-title">
          <ProjectNameTitle
            desc="CHARITABLE ORGANIZATION"
            job="GRAPHIC DESIGN, DEVELOPED WITH WEBFLOW"
          />
          <PortfolioDescription sentence="ARC Global Churches is a body of 8 vibrant churches planted across the UK. One of these 8 vibrant churches is ARC Thurrock, planted in Thurrock, Essex" />
          <PortfolioImg1 pic="/images/arc-thurrock-landing.webp" />

          <div className="standard-project-description">
            <p>
              I was responsible for the design and develpment of the entire
              website.
              <br />
              <br />I accomplished displaying clearly a range of information. I
              was also responsible for the design and layout of each web page.
            </p>
            <PortfolioImg2 pic="images/arc-thurrock-homepage-shot-2.webp" />
            <div className="describing-picture-above project-image-responsive">
              <p>
                <i>An segment taken from the ARC Thurrock homepage</i>
              </p>
            </div>
            <PortfolioImg5
              pic="images/arc-thurrock-homepage-shot-2.webp"
              desc="A section of the homepage of the ARC Thurrock website"
            />
            <PortfolioImg5 pic="images/arc-thurrock-mobile-views-1.webp" />
            <PortfolioImg5
              pic="images/arc-thurrock-mobile-views-2.webp"
              desc="."
            />

            <PortfolioImg3 pic="/images/arc0thurrock-mobile-view-mobile-1.webp" />
            <PortfolioImg3 pic="/images/arc0thurrock-mobile-view-mobile-2.webp" />
            <PortfolioImg3 pic="/images/arc0thurrock-mobile-view-mobile-3.webp" />
            <PortfolioImg3 pic="/images/arc0thurrock-mobile-view-mobile-4.webp" />

            <p>
              ARC Thurrock has now developed into their own new charity, and can
              now be recognized as The Lighthouse Church.
            </p>
          </div>

          <div className="visit-project-link">
            <p>
              <a
                href="https://preview.webflow.com/preview/arcthurrock1?utm_medium=preview_link&utm_source=dashboard&utm_content=arcthurrock1&preview=e1b02cf92c46a96d42bed44d3f87bac9&workflow=preview"
                target={"_blank"}
              >
                <u>Webflow Worskspace Project →</u>
              </a>
              <br />
              <br />
              <a href="https://arcthurrock1.webflow.io/" target={"_blank"}>
                <u>Visit ARC Thurrock →</u>
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
