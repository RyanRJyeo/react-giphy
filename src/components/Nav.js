import React, { useContext } from "react";
import { DataContext } from "../context";
import { Link, useLocation } from "react-router-dom";

export default function Nav() {
  const context = useContext(DataContext);
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
        Favorites{favNum}
      </Link>
    </nav>
  );
}
