import React from "react";
import style from "./style.css";
import Header from "../Header";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Header />
      <h1 className="lg">𝕀𝕋𝕌ℕ𝔼𝕊</h1>
      <h3 className="itunesTit">“Music is the universal language of mankind.” </h3>
      <h3 style={{fontSize: "15px"}} className="itunesTit">Henry Wadsworth Longfellow</h3>
      <div className="home">
        <div className="card">
          <NavLink to="/ebook">
            <img className="image" src="./img/ebook.JPG"></img>
            <div className="content">
              <h1>ebook</h1>
            </div>
          </NavLink>
        </div>
        <div className="card">
          <NavLink to="/audiobook">
            <img
              className="image"
              src="./img/audiobook.JPG"
              style={{ height: "100%" }}
            ></img>
            <div className="content">
              <h1>audiobook</h1>
            </div>
          </NavLink>
        </div>
        <div className="card">
          <NavLink to="/movie">
            <img className="image" src="./img/movie.JPG"></img>
            <div className="content">
              <h1>movie</h1>
            </div>
          </NavLink>
        </div>
        <div className="card">
          <NavLink to="/music">
            <img
              className="image"
              src="./img/music.JPG"
              style={{ height: "100%" }}
            ></img>
            <div className="content">
              <h1>music</h1>
            </div>
          </NavLink>
        </div>
        <div className="card">
          <NavLink to="/musicVideo">
            <img className="image" src="./img/musicVideo.JPG"></img>
            <div className="content">
              <h1>musicVideo</h1>
            </div>
          </NavLink>
        </div>
        <div className="card">
          <NavLink to="/podcast">
            <img className="image" src="./img/podcast.JPG"></img>
            <div className="content">
              <h1>podcast</h1>
            </div>
          </NavLink>
        </div>
        <div className="card">
          <NavLink to="/software">
            <img
              className="image"
              src="./img/software.JPG"
              style={{ height: "100%" }}
            ></img>
            <div className="content">
              <h1>software</h1>
            </div>
          </NavLink>
        </div>
        <div className="card">
          <NavLink to="/tvShow">
            <img className="image" src="./img/tvShow.JPG"></img>
            <div className="content">
              <h1>tvShow</h1>
            </div>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Home;
