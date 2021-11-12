import React from "react";
import { Routes, Route } from "react-router-dom";
import style from "./App.css";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Audiobook from "./components/Audiobook";
import Ebook from "./components/Ebook";
import Music from "./components/Music";
import MusicVideo from "./components/MusicVideo";

import Movie from "./components/Movie";

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/movie" element={<Movie />} />
        <Route exact path="/audiobook" element={<Audiobook />} />
        <Route exact path="/ebook" element={<Ebook/>} />
        <Route exact path="/music" element={<Music />} />
        <Route exact path="/musicVideo" element={<MusicVideo />} />
        {/* <Route exact path="/" element={Home} /> */}
      </Routes>
      <Footer />

    </>
  );
};

export default App;
