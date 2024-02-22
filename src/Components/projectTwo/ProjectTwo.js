import { Link } from "react-router-dom";
import { HomepageImageBlock2 } from "../homepage/HomepageImageBlock2";
import { HomepageProjectDescriptionTwo } from "../homepage/HomepageProjectDescriptionTwo";

export const ProjectTwo = () => {
  return (
    <section className="container">
      <Link to={"/canvas"}>
        <HomepageImageBlock2 />
        <HomepageProjectDescriptionTwo />
      </Link>
    </section>
  );
};
