import Home from "./components/Home";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Footer from "./components/Footer";
import React {Routes, Route} from "react-router-dom";
import style from "./App.css";

const App = () => {

  return (
    <>
    <Header />
      <Nav />
      <Home/>
      {/* <Routes>
      <Route exact path="/" component={Home} />
      </Routes> */}
      {/* <Footer /> */}

    </>
  );
};

export default App;