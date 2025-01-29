import { Link } from "react-router-dom";
import { HomepageImageBlock5 } from "../homepage/HomepageImageBlock5";
import { HomepageProjectDescriptionFive } from "../homepage/HomepageProjectDescriptionFive";

export const ProjectFive = () => {
  return (
    <section className="container">
      <Link to={"/cotta"}>
        <HomepageImageBlock5 />
        <HomepageProjectDescriptionFive />
      </Link>
    </section>
  );
};
