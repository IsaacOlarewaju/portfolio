import React from "react";
import { ProjectOne } from "./projectOne/ProjectOne";
import { ProjectTwo } from "./projectTwo/ProjectTwo";
import { ProjectThree } from "./projectThree/ProjectThree";
import { NavBar } from "./NavBar";
import { Opening } from "./body";
import { HomepageConnect } from "./homepage/HomepageConnect";
import { Title } from "./Title";

export const Projects = () => {
  return (
    <div>
      <NavBar />
      <section id="intro">
        <div className="projects-container">
          <HomepageConnect />
          <Title title="Portfolio" />
        </div>
      </section>
      <ProjectOne />
      <ProjectTwo />
      <ProjectThree />
    </div>
  );
};
