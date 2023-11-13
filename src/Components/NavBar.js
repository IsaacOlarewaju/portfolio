import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function NavBar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav>
      <div
        className="burger-menu"
        onClick={() => {
          setShowMenu(!showMenu);
        }}
      >
        <div className="burger-line"></div>
        <div className="burger-line"></div>
        <div className="burger-line"></div>
      </div>

      <div className={"menu " + (showMenu ? "flex appear" : "")}>
        <div className="other-pages">
          <ul>
            <li className="buyan">
              <Link to={"/"}>HOME</Link>
            </li>
            <li className="buyan">
              <Link to={"/portfolio"}>PORTFOLIO</Link>
            </li>
            <li className="buyan">
              <Link to={"/contact"}>CONTACT</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
