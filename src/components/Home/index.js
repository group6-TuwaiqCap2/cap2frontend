import React from "react";
import "./style.css";
import Header from "../Header";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="homePgae">
      <Header />
      <h1 className="lg">𝕀𝕋𝕌ℕ𝔼𝕊</h1>
      <h3 className="itunesTit">
        “Music is the universal language of mankind.”{" "}
      </h3>
      <h3 style={{ fontSize: "15px" }} className="itunesTit">
        Henry Wadsworth Longfellow
      </h3>
      <div className="home">
        <div className="card">
          <NavLink to="/ebook">
            <img className="image" src="./img/ebook.JPG" alt="ebook"></img>

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
              alt="audiobookimg"
            ></img>
            <div className="content">
              <h1>audiobook</h1>
            </div>
          </NavLink>
        </div>
        <div className="card">
          <NavLink to="/movie">
            <img className="image" src="./img/movie.JPG" alt="movieimg"></img>
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
              alt="musicimg"
            ></img>
            <div className="content">
              <h1>music</h1>
            </div>
          </NavLink>
        </div>
        <div className="card">
          <NavLink to="/musicVideo">
            <img
              className="image"
              src="./img/musicVideo.JPG"
              alt="musicvideo"
            ></img>
            <div className="content">
              <h1>musicVideo</h1>
            </div>
          </NavLink>
        </div>
        <div className="card">
          <NavLink to="/podcast">
            <img className="image" src="./img/podcast.JPG" alt="podcast"></img>
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
              alt="software"
            ></img>
            <div className="content">
              <h1>software</h1>
            </div>
          </NavLink>
        </div>
        <div className="card">
          <NavLink to="/tvShow">
            <img className="image" src="./img/tvShow.JPG" alt="tvshow"></img>
            <div className="content">
              <h1>tvShow</h1>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Home;
