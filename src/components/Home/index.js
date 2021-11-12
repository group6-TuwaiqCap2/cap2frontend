import React from "react";
import style from "./style.css";

const Home = () => {
  return (
    <div className="home">
      <div className="card">
        <img className="image" src="./img/ebook.JPG"></img>
        <div className="content">
          <h1>ebook</h1>
        </div>
      </div>
      <div className="card">
        <img
          className="image"
          src="./img/audiobook.JPG"
          style={{ height: "100%" }}
        ></img>
        <div className="content">
          <h1>audiobook</h1>
        </div>
      </div>
      <div className="card">
        <img className="image" src="./img/movie.JPG"></img>
        <div className="content">
          <h1>movie</h1>
        </div>
      </div>
      <div className="card">
        <img
          className="image"
          src="./img/music.JPG"
          style={{ height: "100%" }}
        ></img>
        <div className="content">
          <h1>music</h1>
        </div>
      </div>
      <div className="card">
        <img className="image" src="./img/musicVideo.JPG"></img>
        <div className="content">
          <h1>musicVideo</h1>
        </div>
      </div>
      <div className="card">
        <img className="image" src="./img/podcast.JPG"></img>
        <div className="content">
          <h1>podcast</h1>
        </div>
      </div>
      <div className="card">
        <img
          className="image"
          src="./img/software.JPG"
          style={{ height: "100%" }}
        ></img>
        <div className="content">
          <h1>software</h1>
        </div>
      </div>
      <div className="card">
        <img className="image" src="./img/tvShow.JPG"></img>
        <div className="content">
          <h1>tvShow</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;