// Portfolio Page

import { ShowProject1Opening } from "./body";
import { HomepageImageBlock1 } from "./HomepageImageBlock1";
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
import { ProjectOneContent } from "./ProjectOneContent";

export const PortfolioComponent = () => {
  return (
    <div>
      <NavBar />
      <ProjectOneContent />
      <Footer />
    </div>
  );
};
