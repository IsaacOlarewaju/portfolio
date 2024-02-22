import { Link } from "react-router-dom";
import { HomepageImageBlock1 } from "./../homepage/HomepageImageBlock1";
import { HomepageProjectDescriptionOne } from "../homepage/HomepageProjectDescriptionOne";

export function ProjectOne() {
  return (
    <section className="container">
      <Link to={"/textqa"}>
        <HomepageImageBlock1 />
        <HomepageProjectDescriptionOne />
      </Link>
    </section>
  );
}
