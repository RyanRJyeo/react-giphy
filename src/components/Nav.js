import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Nav() {
  const { pathname } = useLocation();

  let active = "active";
  let notActive = "not-active";

  return (
    <nav className="nav">
      <Link className="navlogo" to="/">
        Galler<span className="darkgrey">easy</span>
      </Link>
      <Link
        className={`navlinks ${pathname === "/" ? active : notActive}`}
        to="/"
      >
        Search
      </Link>
      <Link
        className={`navlinks ${pathname === "/favorites" ? active : notActive}`}
        to="/favorites"
      >
        Favorites
      </Link>
    </nav>
  );
}
