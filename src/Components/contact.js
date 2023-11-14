// Contact page

import { OpeningContact } from "./body";
import { Footer } from "./Footer";
import { NavBar } from "./NavBar";

export const ContactComponent = () => {
  return (
    <div>
      <NavBar />
      <OpeningContact />
      {/* <Footer /> */}
      {/* Footer not attaching to the bottom of the page. Will resolve in the stylesheet */}
    </div>
  );
};
