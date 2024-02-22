import { Link } from "react-router-dom";
import { HomepageImageBlock3 } from "../homepage/HomepageImageBlock3";
import { HomepageProjectDescriptionThree } from "../homepage/HomepageProjectDescriptionThree";

export const ProjectThree = () => {
  return (
    <section className="container">
      <Link to={"/fullyCaptured"}>
        <HomepageImageBlock3 />
        <HomepageProjectDescriptionThree />
      </Link>
    </section>
  );
};
