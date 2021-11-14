import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "./App.css";
import Audiobook from "./components/Audiobook";
import Ebook from "./components/Ebook";
import Movie from "./components/Movie";
import Music from "./components/Music";
import MusicVideo from "./components/MusicVideo";
import Podcast from "./components/Podcast";
import Software from "./components/Software";
import TvShow from "./components/TvShow";
import Desc from "./components/Desc";

const App = () => {
  return (
    <>
      <Nav />
      <div className="backgroundHome">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/movie" element={<Movie />} />
        <Route exact path="/audiobook" element={<Audiobook />} />
        <Route exact path="/ebook" element={<Ebook/>} />
        <Route exact path="/music" element={<Music />} />
        <Route exact path="/musicVideo" element={<MusicVideo />} />
        <Route exact path="/podcast" element={<Podcast/>} />
        <Route exact path="/software" element={<Software/>} />
        <Route exact path="/tvshow" element={<TvShow/>} />
        <Route exact path="/desc/:id" element={<Desc/>} />

      </Routes>

      </div>
      <Footer />
      </>
  );
};

export default App;
