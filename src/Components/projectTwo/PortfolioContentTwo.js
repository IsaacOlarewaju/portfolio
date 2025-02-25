import { PortfolioImg1 } from "../projectContent/PortfolioImg1";
import { PortfolioImg3 } from "../projectContent/PortfolioImg3";
import { PortfolioImg5 } from "../projectContent/PortfolioImg5";
import { ProjectNameTitle } from "../projectContent/ProjectNameTitle";
import { PortfolioDescription } from "../projectContent/PortfolioDescription";
import { PortfolioImg6 } from "../projectContent/PortfolioImg6";

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
          <PortfolioDescription sentence="Portfolio website for a creative design agency startup. Developed with React." />
          <PortfolioImg1 pic="/images/canvas-landing-2.webp" />

          <div className="standard-project-description">
            <p>
              Canvas for Works© is a creative design agency, that focuses on
              collaborating, in order to produce good media across multiple
              canvases. Working with brands of all sizes, Canvas for Works©
              combines ability and intelligence, with knowledge and
              craftsmanship, and an underlying conviction to produce good media.
              Keen to make positive first impressions as the brand sought to
              boost its online presence, publishing a website that showcased the
              brands talents and clientele was fitting.
            </p>
          </div>

          <PortfolioImg5 pic="images/gosse-mobile-view-1.webp" />
          <PortfolioImg3 pic="/images/canvas-mobile-view-mobile-3.webp" />

          <PortfolioImg5 pic="images/gosse-mobile-view-2.webp" />
          <PortfolioImg3 pic="/images/canvas-mobile-view-mobile-4.webp" />

          <div className="standard-project-description">
            <p>
              Task involved transforming .psd website visuals files into a
              functioning, fast-performing website with cross-platform
              functionality.
              <br />
              <br />
              As a developer, my emphasis was put on a fast rendering and
              performing application, as it delivers positive overall brand
              image, being seen as professional and reliable. Faster loading
              websites also rank higher in search engines. Task was to implement
              React technologies, along with using appropriate image files, to
              promote high speed and efficiency.
            </p>
          </div>

          <p>
            Transforming each .png file I had received from the brand, into a
            .webp file substantially decreased imagery file size.
          </p>

          <PortfolioImg6
            pic="images/canvas-gspl-size-l.png"
            desc="Original .png file received from the brand - 3.2 MB"
          />
          <PortfolioImg6
            pic="images/canvas-gspl-size-s.png"
            desc="Transformed file from .png to .webp - 161 KB. A 20th of the original file size"
          />

          <p>
            <br />
            I had also optimized rendering by using the React useState hook to
            manage only the state that directly affects specific parts of the
            UI. This improved the speed and responsiveness performance of the
            application, by reducing the amount of re-renders.
            <br />
            <br />
            React components enabled me to manage and optimize parts of the
            application easily. For repeated parts of the application, such as
            the navbar functionality, I was able to optimize this component for
            speed and efficiency, in only one place.
            <br />
            <br />
            These implemented techniques and technologies allowed for a fast
            rendering website. Exceptional performance contributed to the
            gaining of two new clients within four weeks of the website’s
            launch.
          </p>

          <PortfolioImg5 pic="images/canvas-cotta-webpage.webp" />
          <PortfolioImg3 pic="images/canvas-cotta-webpage.webp" />

          <p>
            Having background in digital design, my zeal for attention to detail
            remains unchanged. A detailed and well put together website builds
            credibility with viewers and signals professionalism.
            <br />
            <br />
            Tasks as a developer was to design structure, structure which
            determines how each web page and different components respond and
            behave when traversing between different sized browsers.
            <br />
            <br />
            Google Chrome dev tools helped me keep faithful to original sizes
            and dimensions of different components presented in the original
            photoshop (.psd) web page files I was provided with. CSS transition
            techniques helped me deliver required feel and behaviour of the
            website.
          </p>

          <PortfolioImg5 pic="/images/canvas-landing-3.webp" desc="." />
          <PortfolioImg3 pic="/images/canvas-landing-3.webp" />

          <p>
            Gaining two new clients within the opening four weeks of their
            launch of their new website, Canvas are now seeing growing
            engagement with potential clients.
            <br />
            <br />A well-developed website with React contributed greatly
            towards their achievement of making positive first impressions to
            viewers.
          </p>

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
