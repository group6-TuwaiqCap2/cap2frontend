import React from "react";
import style from "./App.css";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Audiobook from "./components/Audiobook";
import Ebook from "./components/Ebook";

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
        {/* <Route exact path="/" element={Home} /> */}
        {/* <Route exact path="/" element={Home} /> */}
        {/* <Route exact path="/" element={Home} /> */}
      </Routes>
      <Footer />

    </>
  );
};

export default App;
