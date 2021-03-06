import React from "react";
import { NavLink } from "react-router-dom";

import "./style.css";
const Nav = () => {
  return (
    <>
      <div className="wrapper">
        <NavLink to="" className="links">
          <h1>πππβπΌπ</h1>
        </NavLink>
        <div className="navMenu">
          <NavLink to="/movie" className="links">
            Movie
          </NavLink>
          <NavLink to="/podcast" className="links">
            Podcast
          </NavLink>
          <NavLink to="/music" className="links">
            Music
          </NavLink>
          <NavLink to="/musicVideo" className="links">
            Music Video
          </NavLink>
          <NavLink to="/audiobook" className="links">
            Audiobook
          </NavLink>
          <NavLink to="/tvShow" className="links">
            Tv Show
          </NavLink>
          <NavLink to="/software" className="links">
            Software
          </NavLink>
          <NavLink to="/ebook" className="links">
            Ebook
          </NavLink>
          <NavLink to="/favourite" className="links">
            Favourite
          </NavLink>
        </div>
        <NavLink to="/" className="links" style={{ color: "red" }}>
          Home
        </NavLink>
        {/* <button className="btn">=</button> */}
      </div>
    </>
  );
};

export default Nav;
