import React, { useContext, useState } from "react";
import { DataContext } from "../context";
import { Link, useLocation } from "react-router-dom";

export default function Nav() {
  const context = useContext(DataContext);
  const [navToggle, setNavToggle] = useState(false);
  const { favorites } = context;
  const { pathname } = useLocation();

  let favNum;
  if (favorites.length > 0) {
    favNum = `(${favorites.length})`;
  }

  let active = "active";
  let notActive = "not-active";

  return (
    <nav className="nav">
      <div className="nav-header">
        <Link className="navlogo" to="/">
          Galler<span className="darkgrey">easy</span>
        </Link>
        <button className="navbtn" onClick={() => setNavToggle(!navToggle)}>
          <i
            className={
              navToggle
                ? "menu bx bx-menu bx-sm bx-burst"
                : "menu bx bx-menu bx-sm"
            }
          ></i>
        </button>
      </div>
      <ul
        className={navToggle ? "navlinks-holder" : "navlinks-holder hidelinks"}
      >
        <li>
          <Link
            className={`navlinks ${pathname === "/" ? active : notActive}`}
            to="/"
          >
            Search
          </Link>
        </li>
        <li>
          <Link
            className={`navlinks ${
              pathname === "/favorites" ? active : notActive
            }`}
            to="/favorites"
          >
            Favorites{favNum}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
