import React from "react";
import style from "./App.css";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Movie from "./components/Movie";
import TvShow from "./components/TvShow";

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/movie" element={<Movie />} />
        {/* <Route exact path="/" element={Home} />
        <Route exact path="/" element={Home} />
        <Route exact path="/" element={Home} />
        <Route exact path="/" element={Home} />
        <Route exact path="/" element={Home} /> */}
      </Routes>
      <Footer />

    </>
  );
};

export default App;
