// MAIN JS PAGE

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Title } from "./Title";
import { ConnectContact } from "./ConnectContact";
import { NavBar } from "./NavBar";
import { HomepageImageBlock1 } from "./HomepageImageBlock1";
import { HomepageConnect } from "./HomepageConnect";
import { ContactPageContactInfo } from "./ContactPageContactInfo";
import { HomepageProjectDescription } from "./HomepageProjectDescription";
import { HomepageJobDescription } from "./HomepageJobDescription";
import { ProjectOneContent } from "./ProjectOneContent";
import { Footer } from "./Footer";

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
        <Title />
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

/* FIRST PROJECT */
export function ProjectOne() {
  return (
    <section className="container">
      <Link to={"/portfolio"}>
        <HomepageImageBlock1 />
        <HomepageProjectDescription />
      </Link>
    </section>
  );
}
