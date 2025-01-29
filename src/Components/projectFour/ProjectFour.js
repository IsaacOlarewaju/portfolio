import { Link } from "react-router-dom";
import { HomepageImageBlock4 } from "../homepage/HomepageImageBlock4";
import { HomepageProjectDescriptionFour } from "../homepage/HomepageProjectDescriptionFour";

export const ProjectFour = () => {
  return (
    <section className="container">
      <Link to={"/arc-thurrock"}>
        <HomepageImageBlock4 />
        <HomepageProjectDescriptionFour />
      </Link>
    </section>
  );
};
