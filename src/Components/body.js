// MAIN JS PAGE

import { Title } from "./Title";
import { ConnectContact } from "./connect/ConnectContact";
import { HomepageConnect } from "./homepage/HomepageConnect";
import { ContactPageContactInfo } from "../Components/connect/ContactPageContactInfo";
import { HomepageJobDescription } from "./homepage/HomepageJobDescription";

// Main title in the contact page
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

// Job Title and job description in the homepage
export function JobTitleAndDescription() {
  return (
    <div id="intro-job-title">
      <JobTitle />
      <HomepageJobDescription />
    </div>
  );
}

const JobTitle = () => {
  return <h2>FRONT END DEVELOPER</h2>;
};

// Homepage Content
export function Opening() {
  return (
    <section id="intro">
      <div className="container">
        <HomepageConnect />
        <Title title="Isaac" />
        <Title title="Olarewaju" />
        <JobTitleAndDescription />
      </div>
    </section>
  );
}

// Contact Page Content
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
        <ContactPageContactInfo />
      </div>
    </section>
  );
}
