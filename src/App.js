import React from "react";
import style from "./App.css";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Footer from "./components/Footer";

import {Routes, Route} from "react-router-dom";



const App = () => {

  return (
    <>
    <Header />
    <Nav />
    <Routes>
     
      </Routes>
      <Home/>
      <Footer/>
     

    </>
  );
};

export default App;
